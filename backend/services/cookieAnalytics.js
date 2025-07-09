const { Analytics, UserSession, PageVisit, Consent } = require('../models/Analytics');

class CookieAnalyticsService {
  
  /**
   * Cookie consent verisi kaydet
   */
  static async saveCookieConsent(data) {
    try {
      const {
        userId,
        sessionId,
        eventType,
        consentData,
        userAgent,
        ipAddress,
        pageUrl,
        pageTitle,
        referrer,
        screenResolution,
        language,
        timezone,
        interactionData
      } = data;

      // Yeni analytics kaydı oluştur
      const analyticsRecord = new Analytics({
        userId,
        sessionId,
        eventType,
        consentData: {
          essential: consentData?.essential || true,
          analytics: consentData?.analytics || false,
          functional: consentData?.functional || false,
          marketing: consentData?.marketing || false
        },
        userAgent,
        ipAddress,
        pageUrl,
        pageTitle,
        referrer,
        screenResolution,
        language,
        timezone,
        interactionData
      });

      const savedRecord = await analyticsRecord.save();

      // Analytics consent verilmişse detaylı tracking başlat
      if (consentData?.analytics) {
        await this.updateUserSession(data);
        await this.savePageVisit(data);
      }

      return { 
        success: true, 
        id: savedRecord._id,
        message: 'Cookie consent kaydedildi'
      };
    } catch (error) {
      console.error('Cookie consent kaydetme hatası:', error);
      throw new Error(`Cookie consent kaydedilemedi: ${error.message}`);
    }
  }

  /**
   * Kullanıcı oturumu kaydet/güncelle
   */
  static async updateUserSession(data) {
    try {
      const { 
        userId, 
        sessionId, 
        ipAddress, 
        userAgent, 
        pageUrl,
        deviceInfo 
      } = data;

      // Mevcut oturum var mı kontrol et
      const existingSession = await UserSession.findOne({ sessionId });

      if (existingSession) {
        // Oturumu güncelle
        existingSession.lastActivity = new Date();
        existingSession.pageViews += 1;
        existingSession.exitPage = pageUrl;
        
        if (deviceInfo) {
          existingSession.deviceInfo = { ...existingSession.deviceInfo, ...deviceInfo };
        }
        
        await existingSession.save();
        
        return { success: true, sessionId, action: 'updated' };
      } else {
        // Yeni oturum oluştur
        const newSession = new UserSession({
          userId,
          sessionId,
          ipAddress,
          userAgent,
          entryPage: pageUrl,
          exitPage: pageUrl,
          deviceInfo: deviceInfo || {}
        });

        await newSession.save();
        
        return { success: true, sessionId, action: 'created' };
      }
    } catch (error) {
      console.error('User session güncelleme hatası:', error);
      throw new Error(`User session güncellenemedi: ${error.message}`);
    }
  }

  /**
   * Sayfa ziyareti kaydet
   */
  static async savePageVisit(data) {
    try {
      const { 
        userId, 
        sessionId, 
        pageUrl, 
        pageTitle, 
        referrer,
        visitDuration,
        scrollDepth 
      } = data;

      const pageVisit = new PageVisit({
        userId,
        sessionId,
        pageUrl,
        pageTitle,
        referrer,
        visitDuration: visitDuration || 0,
        scrollDepth: scrollDepth || 0,
        bounceRate: visitDuration < 10 // 10 saniyeden az kalırsa bounce
      });

      const savedVisit = await pageVisit.save();

      return { 
        success: true, 
        id: savedVisit._id,
        message: 'Sayfa ziyareti kaydedildi'
      };
    } catch (error) {
      console.error('Page visit kaydetme hatası:', error);
      throw new Error(`Page visit kaydedilemedi: ${error.message}`);
    }
  }

  /**
   * Dashboard verilerini getir
   */
  static async getDashboardData(dateRange = 30) {
    try {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - dateRange);

      // Paralel sorgular ile performans optimizasyonu
      const [
        totalUsers,
        totalSessions,
        consentStats,
        dailyVisitors,
        topPages,
        deviceStats,
        consentDetails
      ] = await Promise.all([
        // Toplam benzersiz kullanıcı sayısı
        Analytics.distinct('userId', {
          timestamp: { $gte: startDate }
        }),

        // Toplam oturum sayısı
        UserSession.countDocuments({
          firstVisit: { $gte: startDate }
        }),

        // Consent istatistikleri
        Analytics.aggregate([
          {
            $match: {
              eventType: { $in: ['consent_accept_all', 'consent_reject_all'] },
              timestamp: { $gte: startDate }
            }
          },
          {
            $group: {
              _id: '$eventType',
              count: { $sum: 1 }
            }
          }
        ]),

        // Günlük ziyaretçi trendi
        Analytics.aggregate([
          {
            $match: {
              timestamp: { $gte: startDate }
            }
          },
          {
            $group: {
              _id: {
                $dateToString: { format: '%Y-%m-%d', date: '$timestamp' }
              },
              visitors: { $addToSet: '$userId' },
              pageViews: { $sum: 1 }
            }
          },
          {
            $project: {
              date: '$_id',
              visitors: { $size: '$visitors' },
              pageViews: 1
            }
          },
          { $sort: { date: -1 } },
          { $limit: 30 }
        ]),

        // En çok ziyaret edilen sayfalar
        PageVisit.aggregate([
          {
            $match: {
              timestamp: { $gte: startDate }
            }
          },
          {
            $group: {
              _id: '$pageUrl',
              visits: { $sum: 1 },
              uniqueVisitors: { $addToSet: '$userId' },
              avgDuration: { $avg: '$visitDuration' }
            }
          },
          {
            $project: {
              pageUrl: '$_id',
              visits: 1,
              uniqueVisitors: { $size: '$uniqueVisitors' },
              avgDuration: { $round: ['$avgDuration', 2] }
            }
          },
          { $sort: { visits: -1 } },
          { $limit: 10 }
        ]),

        // Cihaz istatistikleri
        UserSession.aggregate([
          {
            $match: {
              firstVisit: { $gte: startDate }
            }
          },
          {
            $group: {
              _id: null,
              mobile: {
                $sum: { $cond: [{ $eq: ['$deviceInfo.isMobile', true] }, 1, 0] }
              },
              desktop: {
                $sum: { $cond: [{ $eq: ['$deviceInfo.isDesktop', true] }, 1, 0] }
              },
              tablet: {
                $sum: { $cond: [{ $eq: ['$deviceInfo.isTablet', true] }, 1, 0] }
              }
            }
          }
        ]),

        // Detaylı consent analizi
        Analytics.aggregate([
          {
            $match: {
              timestamp: { $gte: startDate }
            }
          },
          {
            $group: {
              _id: null,
              totalAnalytics: {
                $sum: { $cond: [{ $eq: ['$consentData.analytics', true] }, 1, 0] }
              },
              totalFunctional: {
                $sum: { $cond: [{ $eq: ['$consentData.functional', true] }, 1, 0] }
              },
              totalMarketing: {
                $sum: { $cond: [{ $eq: ['$consentData.marketing', true] }, 1, 0] }
              },
              totalRecords: { $sum: 1 }
            }
          }
        ])
      ]);

      // Consent oranlarını hesapla
      const acceptCount = consentStats.find(s => s._id === 'consent_accept_all')?.count || 0;
      const rejectCount = consentStats.find(s => s._id === 'consent_reject_all')?.count || 0;
      const totalConsents = acceptCount + rejectCount;

      const dashboardData = {
        overview: {
          totalUsers: totalUsers.length,
          totalSessions,
          totalConsents,
          acceptanceRate: totalConsents > 0 ? 
            ((acceptCount / totalConsents) * 100).toFixed(1) : '0',
          rejectionRate: totalConsents > 0 ? 
            ((rejectCount / totalConsents) * 100).toFixed(1) : '0'
        },
        trends: {
          dailyVisitors: dailyVisitors.reverse(), // En eski tarihten başla
        },
        pages: {
          topPages: topPages
        },
        devices: deviceStats[0] || { mobile: 0, desktop: 0, tablet: 0 },
        consent: {
          analytics: consentDetails[0]?.totalAnalytics || 0,
          functional: consentDetails[0]?.totalFunctional || 0,
          marketing: consentDetails[0]?.totalMarketing || 0,
          total: consentDetails[0]?.totalRecords || 0
        },
        lastUpdated: new Date().toISOString(),
        dateRange: `${dateRange} gün`
      };

      return dashboardData;
    } catch (error) {
      console.error('Dashboard verileri getirme hatası:', error);
      throw new Error(`Dashboard verileri getirilemedi: ${error.message}`);
    }
  }

  /**
   * Kullanıcı aktivitesi analizi
   */
  static async getUserActivity(userId, limit = 50) {
    try {
      const userActivity = await Analytics
        .find({ userId })
        .sort({ timestamp: -1 })
        .limit(limit)
        .select('eventType pageUrl timestamp consentData interactionData');

      const userSessions = await UserSession
        .find({ userId })
        .sort({ firstVisit: -1 })
        .limit(10);

      return {
        success: true,
        activity: userActivity,
        sessions: userSessions,
        totalActivities: userActivity.length
      };
    } catch (error) {
      console.error('Kullanıcı aktivitesi getirme hatası:', error);
      throw new Error(`Kullanıcı aktivitesi getirilemedi: ${error.message}`);
    }
  }

  /**
   * Eski verileri temizle (GDPR uyumluluğu için)
   */
  static async cleanupOldData(monthsToKeep = 6) {
    try {
      const cutoffDate = new Date();
      cutoffDate.setMonth(cutoffDate.getMonth() - monthsToKeep);

      const [analyticsDeleted, sessionsDeleted, visitsDeleted] = await Promise.all([
        Analytics.deleteMany({ timestamp: { $lt: cutoffDate } }),
        UserSession.deleteMany({ firstVisit: { $lt: cutoffDate } }),
        PageVisit.deleteMany({ timestamp: { $lt: cutoffDate } })
      ]);

      return {
        success: true,
        deleted: {
          analytics: analyticsDeleted.deletedCount,
          sessions: sessionsDeleted.deletedCount,
          visits: visitsDeleted.deletedCount
        },
        cutoffDate: cutoffDate.toISOString()
      };
    } catch (error) {
      console.error('Veri temizleme hatası:', error);
      throw new Error(`Veri temizlenemedi: ${error.message}`);
    }
  }
}

module.exports = CookieAnalyticsService;
