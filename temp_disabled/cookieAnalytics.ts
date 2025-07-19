/**
 * İletişim Group Cookie Analytics Service
 * MongoDB Atlas tabanlı cookie ve kullanıcı davranışı analitik sistemi
 */

class CookieAnalyticsService {
  private static readonly API_BASE = 'http://localhost:8000/api';
  private static readonly STORAGE_KEYS = {
    USER_ID: 'iletisim_user_id',
    SESSION_ID: 'iletisim_session_id',
    CONSENT_DATA: 'iletisim_consent_data',
    VISIT_START: 'iletisim_visit_start'
  };

  /**
   * Analytics event'i MongoDB'ye gönder
   */
  static async trackEvent(eventType: string, data: Record<string, unknown> = {}) {
    try {
      // Consent kontrolü - analytics izni var mı?
      const consentData = this.getConsentData();
      if (!consentData.analytics && eventType !== 'consent_accept_all' && eventType !== 'consent_reject_all') {
        return { success: false, reason: 'Analytics consent not given' };
      }

      const analyticsData = {
        userId: this.generateUserId(),
        sessionId: this.getSessionId(),
        eventType,
        timestamp: new Date().toISOString(),
        pageUrl: window.location.href,
        pageTitle: document.title,
        referrer: document.referrer,
        screenResolution: `${screen.width}x${screen.height}`,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        consentData,
        deviceInfo: this.getDeviceInfo(),
        visitDuration: this.getVisitDuration(),
        ...data
      };

      const response = await fetch(`${this.API_BASE}/cookie-analytics`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(analyticsData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.warn('Analytics tracking failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }

  /**
   * Cookie consent verilerini kaydet
   */
  static async saveConsentData(consentChoices: Record<string, boolean>, interactionType: string = 'manual') {
    try {
      // Consent verilerini localStorage'a kaydet
      localStorage.setItem(this.STORAGE_KEYS.CONSENT_DATA, JSON.stringify({
        ...consentChoices,
        timestamp: new Date().toISOString(),
        interactionType
      }));

      // MongoDB'ye consent event'ini gönder
      const eventType = this.getConsentEventType(consentChoices, interactionType);
      
      const result = await this.trackEvent(eventType, {
        consentData: consentChoices,
        interactionType,
        interactionData: {
          elementType: 'cookie_banner',
          elementId: 'cookie-consent',
          elementText: interactionType
        }
      });

      // Analytics consent verildiyse sayfa ziyaretini kaydet
      if (consentChoices.analytics) {
        await this.trackPageView();
      }

      return result;
    } catch (error) {
      console.error('Consent data save failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }

  /**
   * Sayfa ziyaretini kaydet
   */
  static async trackPageView() {
    try {
      // Ziyaret başlangıç zamanını kaydet
      sessionStorage.setItem(this.STORAGE_KEYS.VISIT_START, Date.now().toString());

      const result = await this.trackEvent('page_view', {
        pageSection: this.getPageSection(),
        scrollDepth: 0,
        interactionData: {
          elementType: 'page',
          elementId: 'page_view'
        }
      });

      return result;
    } catch (error) {
      console.warn('Page view tracking failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }

  /**
   * Button click'i kaydet
   */
  static async trackButtonClick(buttonId: string, buttonText: string, position?: { x: number, y: number }) {
    try {
      const result = await this.trackEvent('button_click', {
        interactionData: {
          elementId: buttonId,
          elementType: 'button',
          elementText: buttonText,
          clickPosition: position
        }
      });

      return result;
    } catch (error) {
      console.warn('Button click tracking failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }

  /**
   * Form submit'i kaydet
   */
  static async trackFormSubmit(formId: string, formType: string, formData?: Record<string, unknown>) {
    try {
      const result = await this.trackEvent('form_submit', {
        interactionData: {
          elementId: formId,
          elementType: 'form',
          elementText: formType
        },
        formType,
        formFields: formData ? Object.keys(formData).length : 0
      });

      return result;
    } catch (error) {
      console.warn('Form submit tracking failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }

  /**
   * Newsletter signup'ı kaydet
   */
  static async trackNewsletterSignup(email: string, source: string = 'footer') {
    try {
      const result = await this.trackEvent('newsletter_signup', {
        interactionData: {
          elementType: 'form',
          elementId: `newsletter_${source}`,
          elementText: 'Newsletter Signup'
        },
        source,
        hasEmail: !!email
      });

      return result;
    } catch (error) {
      console.warn('Newsletter tracking failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }

  /**
   * Scroll depth'i kaydet
   */
  static trackScrollDepth() {
    let maxScrollDepth = 0;
    let scrollTimeout: number;

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollDepth = Math.round((scrollTop / scrollHeight) * 100);

      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        
        // Throttle scroll events
        clearTimeout(scrollTimeout);
        scrollTimeout = window.setTimeout(() => {
          // 25%, 50%, 75%, 100% milestone'larında kaydet
          if (scrollDepth >= 25 && scrollDepth % 25 === 0) {
            this.trackEvent('scroll_milestone', {
              scrollDepth: maxScrollDepth,
              interactionData: {
                elementType: 'page',
                elementId: `scroll_${scrollDepth}`,
                elementText: `${scrollDepth}% Scroll`
              }
            });
          }
        }, 1000);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }

  /**
   * Dashboard verilerini getir
   */
  static async getDashboardData(days: number = 30) {
    try {
      const response = await fetch(`${this.API_BASE}/cookie-analytics/dashboard?days=${days}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Dashboard data fetch failed:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }

  /**
   * Kullanıcı ID'si oluştur/getir
   */
  private static generateUserId(): string {
    let userId = localStorage.getItem(this.STORAGE_KEYS.USER_ID);
    if (!userId) {
      userId = 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
      localStorage.setItem(this.STORAGE_KEYS.USER_ID, userId);
    }
    return userId;
  }

  /**
   * Session ID'si oluştur/getir
   */
  private static getSessionId(): string {
    let sessionId = sessionStorage.getItem(this.STORAGE_KEYS.SESSION_ID);
    if (!sessionId) {
      sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
      sessionStorage.setItem(this.STORAGE_KEYS.SESSION_ID, sessionId);
    }
    return sessionId;
  }

  /**
   * Consent verilerini getir
   */
  private static getConsentData() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEYS.CONSENT_DATA);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.warn('Consent data parse error:', error);
    }

    // Default consent (sadece essential)
    return {
      essential: true,
      analytics: false,
      functional: false,
      marketing: false
    };
  }

  /**
   * Cihaz bilgilerini getir
   */
  private static getDeviceInfo() {
    const userAgent = navigator.userAgent;
    
    return {
      isMobile: /Mobile|Android|iPhone|iPad/.test(userAgent),
      isTablet: /iPad|Tablet/.test(userAgent),
      isDesktop: !/Mobile|Android|iPhone|iPad|Tablet/.test(userAgent),
      browser: this.getBrowserName(userAgent),
      os: this.getOSName(userAgent)
    };
  }

  /**
   * Browser ismini tespit et
   */
  private static getBrowserName(userAgent: string): string {
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    if (userAgent.includes('Opera')) return 'Opera';
    return 'Unknown';
  }

  /**
   * İşletim sistemi ismini tespit et
   */
  private static getOSName(userAgent: string): string {
    if (userAgent.includes('Windows')) return 'Windows';
    if (userAgent.includes('Mac')) return 'macOS';
    if (userAgent.includes('Linux')) return 'Linux';
    if (userAgent.includes('Android')) return 'Android';
    if (userAgent.includes('iOS')) return 'iOS';
    return 'Unknown';
  }

  /**
   * Sayfa bölümünü tespit et
   */
  private static getPageSection(): string {
    const path = window.location.pathname;
    if (path === '/') return 'home';
    if (path.includes('/about')) return 'about';
    if (path.includes('/contact')) return 'contact';
    if (path.includes('/services')) return 'services';
    if (path.includes('/media')) return 'media';
    return 'other';
  }

  /**
   * Ziyaret süresini hesapla
   */
  private static getVisitDuration(): number {
    const startTime = sessionStorage.getItem(this.STORAGE_KEYS.VISIT_START);
    if (startTime) {
      return Math.round((Date.now() - parseInt(startTime)) / 1000);
    }
    return 0;
  }

  /**
   * Consent event tipini belirle
   */
  private static getConsentEventType(_consentChoices: Record<string, boolean>, interactionType: string): string {
    if (interactionType === 'accept_all') return 'consent_accept_all';
    if (interactionType === 'reject_all') return 'consent_reject_all';
    return 'consent_customize';
  }

  /**
   * Analytics consent durumunu kontrol et
   */
  static hasAnalyticsConsent(): boolean {
    const consent = this.getConsentData();
    return consent.analytics === true;
  }

  /**
   * Marketing consent durumunu kontrol et
   */
  static hasMarketingConsent(): boolean {
    const consent = this.getConsentData();
    return consent.marketing === true;
  }

  /**
   * Functional consent durumunu kontrol et
   */
  static hasFunctionalConsent(): boolean {
    const consent = this.getConsentData();
    return consent.functional === true;
  }
}

export default CookieAnalyticsService;
