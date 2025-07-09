# İletişim Group - MongoDB Cookie Analytics

İletişim Group projesi için MongoDB Atlas tabanlı cookie analytics ve kullanıcı davranışı takip sistemi.

## 🚀 Özellikler

### Analytics & Tracking
- ✅ **Cookie Consent Management** - GDPR/KVKK uyumlu
- ✅ **Page View Tracking** - Sayfa ziyaretlerini kaydet
- ✅ **Button Click Tracking** - Kullanıcı etkileşimlerini takip et
- ✅ **Form Submission Tracking** - Form gönderimlerini izle
- ✅ **Scroll Depth Tracking** - Sayfa okuma derinliği
- ✅ **Session Management** - Kullanıcı oturumları
- ✅ **Device Detection** - Cihaz bilgileri (Mobile/Desktop/Tablet)
- ✅ **Real-time Dashboard** - Analytics gösterge paneli

### Veritabanı
- 🗄️ **MongoDB Atlas** - Cloud veritabanı
- 📊 **3 Ayrı Collection**: Analytics, Sessions, Page Visits
- 🔍 **Optimized Indexes** - Hızlı sorgular için
- 🧹 **Automatic Cleanup** - GDPR uyumluluğu için eski veri temizleme
- 📈 **Aggregation Pipelines** - Gelişmiş analitik sorgular

### Güvenlik & Uyumluluk
- 🔒 **GDPR/KVKK Compliant** - Veri koruma yasalarına uygun
- 🍪 **Granular Cookie Control** - Çerez kategori yönetimi
- 🚦 **Rate Limiting** - Spam koruması
- 🛡️ **Data Encryption** - Güvenli veri iletimi
- 📝 **Audit Trail** - Tüm etkileşimler kayıtlı

## 📁 Proje Yapısı

```
İletişim Group/
├── backend/                    # Node.js Backend API
│   ├── config/
│   │   └── database.js        # MongoDB Atlas bağlantısı
│   ├── models/
│   │   └── Analytics.js       # MongoDB Schemas
│   ├── services/
│   │   └── cookieAnalytics.js # Analytics service
│   ├── server.js              # Express server
│   ├── .env                   # Environment variables
│   └── package.json
├── src/                       # React Frontend
│   ├── services/
│   │   └── cookieAnalytics.ts # Frontend analytics service
│   ├── utils/
│   │   └── cookieManager.ts   # Cookie management
│   ├── components/
│   │   └── common/
│   │       ├── CookieConsent.tsx
│   │       └── Button.tsx     # Analytics tracking entegreli
│   └── App.tsx               # Analytics initialization
```

## 🛠️ Kurulum

### 1. MongoDB Atlas Kurulumu

1. **MongoDB Atlas'ta hesap oluşturun**: https://cloud.mongodb.com/
2. **Yeni cluster oluşturun** (Free tier yeterli)
3. **Database kullanıcısı oluşturun**
4. **IP adresinizi whitelist'e ekleyin**
5. **Connection string'i alın**

### 2. Environment Variables

Backend `.env` dosyasını güncelleyin:

```env
# MongoDB Atlas Configuration
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/iletisim-group?retryWrites=true&w=majority

# Diğer ayarlar...
NODE_ENV=development
PORT=3001
FRONTEND_URL=http://localhost:5173
```

### 3. Dependencies

```bash
# Backend dependencies
cd backend
npm install

# Frontend dependencies (zaten mevcut)
cd ..
npm install
```

### 4. Çalıştırma

```bash
# Backend'i başlat
cd backend
npm run dev

# Frontend'i başlat (ayrı terminal)
npm run dev
```

## 📊 Analytics Endpoints

### POST `/api/cookie-analytics`
Cookie consent ve etkileşim verilerini kaydet

```json
{
  "userId": "user_abc123_1640995200000",
  "sessionId": "session_1640995200000_xyz",
  "eventType": "consent_accept_all",
  "consentData": {
    "essential": true,
    "analytics": true,
    "functional": false,
    "marketing": true
  },
  "pageUrl": "https://iletisimgroup.com/",
  "pageTitle": "İletişim Group",
  "interactionData": {
    "elementType": "button",
    "elementId": "accept-all-cookies",
    "elementText": "Tümünü Kabul Et"
  }
}
```

### GET `/api/cookie-analytics/dashboard?days=30`
Dashboard verilerini getir

```json
{
  "success": true,
  "data": {
    "overview": {
      "totalUsers": 1250,
      "totalSessions": 1890,
      "acceptanceRate": "78.5",
      "rejectionRate": "21.5"
    },
    "trends": {
      "dailyVisitors": [
        {"date": "2025-01-01", "visitors": 45, "pageViews": 123}
      ]
    },
    "pages": {
      "topPages": [
        {"pageUrl": "/", "visits": 450, "uniqueVisitors": 320}
      ]
    },
    "devices": {
      "mobile": 680,
      "desktop": 520,
      "tablet": 50
    }
  }
}
```

### GET `/api/cookie-analytics/user/{userId}`
Kullanıcı aktivitesini getir

### DELETE `/api/cookie-analytics/cleanup?months=6`
Eski verileri temizle (GDPR uyumluluğu)

## 🎯 Analytics Event Types

| Event Type | Açıklama | Örnek Kullanım |
|------------|----------|----------------|
| `consent_accept_all` | Tüm çerezler kabul edildi | Cookie banner |
| `consent_reject_all` | Tüm çerezler reddedildi | Cookie banner |
| `consent_customize` | Özelleştirilmiş tercih | Cookie settings |
| `page_view` | Sayfa görüntüleme | Her sayfa yüklenişi |
| `button_click` | Button tıklaması | CTA buttonları |
| `form_submit` | Form gönderimi | İletişim formu |
| `newsletter_signup` | Newsletter kaydı | Footer form |
| `scroll_milestone` | Scroll derinliği | %25, %50, %75, %100 |

## 🔧 Kullanım Örnekleri

### Frontend'de Analytics Tracking

```typescript
import CookieAnalyticsService from './services/cookieAnalytics';
import { CookieManager } from './utils/cookieManager';

// Page view tracking (otomatik)
await CookieManager.trackPageView();

// Button click tracking
await CookieManager.trackButtonClick('contact-button', 'İletişime Geç');

// Form submission tracking
await CookieAnalyticsService.trackFormSubmit('contact-form', 'contact', formData);

// Newsletter signup
await CookieAnalyticsService.trackNewsletterSignup(email, 'footer');

// Custom event
await CookieAnalyticsService.trackEvent('video_play', {
  videoId: 'intro-video',
  duration: 30
});
```

### Button Component'inde Tracking

```tsx
<Button
  trackingId="hero-cta"
  onClick={handleClick}
  variant="primary"
>
  Hizmetlerimizi Keşfedin
</Button>
```

### Dashboard Verilerini Çekme

```typescript
const dashboardData = await CookieAnalyticsService.getDashboardData(30);
console.log('Son 30 günün verileri:', dashboardData);
```

## 📈 Analytics Dashboard

Dashboard verileri şunları içerir:

- **Genel Bakış**: Toplam kullanıcı, oturum, kabul/red oranları
- **Trendler**: Günlük ziyaretçi grafikleri
- **Sayfa Performansı**: En çok ziyaret edilen sayfalar
- **Cihaz Dağılımı**: Mobile/Desktop/Tablet oranları
- **Consent Analizi**: Çerez kategori tercih oranları

## 🛡️ GDPR/KVKK Uyumluluğu

### Veri Koruma
- ✅ **Kullanıcı Rızası**: Açık rıza alımı
- ✅ **Veri Minimizasyonu**: Sadece gerekli veriler toplanıyor
- ✅ **Şeffaflık**: Hangi verilerin neden toplandığı açık
- ✅ **Veri Silme**: Otomatik temizleme (6 ay)
- ✅ **Geri Çekilme Hakkı**: Cookie tercihlerini değiştirme

### Consent Management
```typescript
// Consent verilerini kaydet
await CookieManager.setConsent({
  essential: true,
  analytics: true,
  functional: false,
  marketing: false
});

// Consent durumunu kontrol et
const hasAnalytics = CookieManager.hasAnalyticsConsent();
```

## 🚀 Performans Optimizasyonu

### MongoDB Indexes
```javascript
// Otomatik oluşturulan indexler
{ userId: 1, timestamp: -1 }
{ sessionId: 1, timestamp: -1 }
{ eventType: 1, timestamp: -1 }
{ 'consentData.analytics': 1, timestamp: -1 }
```

### Rate Limiting
- **Analytics Endpoint**: 100 request/dakika
- **Contact Endpoint**: 5 request/15 dakika

### Veri Sıkıştırma
- Gereksiz alanlar kaldırıldı
- JSON boyutu optimize edildi
- Aggregation pipeline'ları kullanıldı

## 🔍 Monitoring & Debugging

### Health Check
```bash
curl http://localhost:3001/api/analytics/health
```

### Log Monitoring
```javascript
// Backend'de detaylı loglar
console.log('Cookie analytics saved:', analyticsData);
console.log('Dashboard data fetched:', dashboardData);
```

### Frontend Debug
```typescript
// Console'da analytics durumunu kontrol et
console.log('Analytics consent:', CookieAnalyticsService.hasAnalyticsConsent());
console.log('User ID:', CookieAnalyticsService.generateUserId());
```

## 📝 Sonraki Adımlar

### Phase 2 (Gelecek Güncellemeler)
- [ ] **Real-time Analytics Dashboard** - Admin panel
- [ ] **A/B Testing Framework** - Test grupları
- [ ] **Heatmap Integration** - Kullanıcı etkileşim haritası
- [ ] **Email Analytics** - Email campaign tracking
- [ ] **API Documentation** - Swagger/OpenAPI
- [ ] **Data Export** - CSV/Excel export
- [ ] **Custom Reports** - Kullanıcı tanımlı raporlar

### Phase 3 (İleri Seviye)
- [ ] **Machine Learning** - Kullanıcı davranışı tahmini
- [ ] **Recommendation Engine** - İçerik önerileri
- [ ] **Fraud Detection** - Bot ve spam tespiti
- [ ] **Multi-tenant Support** - Çoklu müşteri desteği

## 📞 Destek

Herhangi bir sorun için:
- 📧 **Email**: info@iletisimgroup.com
- 🌐 **Website**: https://iletisimgroup.com
- 📱 **GitHub Issues**: Bu repo'da issue açın

---

## 🎉 Tebrikler!

İletişim Group projenizde artık professional bir cookie analytics sistemi var:

✅ **MongoDB Atlas** - 6+ yıl ücretsiz kullanım  
✅ **GDPR/KVKK Uyumlu** - Yasal gereksinimler karşılandı  
✅ **Real-time Tracking** - Anlık kullanıcı davranışı takibi  
✅ **Scalable Architecture** - Büyümeye hazır altyapı  
✅ **Professional Analytics** - Enterprise seviye raporlama  

**Happy Analytics! 📊🚀**
