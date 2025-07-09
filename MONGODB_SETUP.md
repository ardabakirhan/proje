# MongoDB Atlas Kurulum Rehberi - İletişim Group

## 📋 Adım Adım MongoDB Atlas Kurulumu

### 1. MongoDB Atlas Hesabı Oluşturma

1. **MongoDB Atlas'a Git**: https://cloud.mongodb.com/
2. **"Try Free" butonuna tıkla**
3. **Hesap bilgilerini doldur**:
   - Email: `your-email@gmail.com`
   - Password: Güçlü bir şifre oluştur
   - Company Name: `İletişim Group`
4. **Email doğrulamasını tamamla**

### 2. Cluster Oluşturma

1. **"Build a Database" tıkla**
2. **M0 (FREE) seç** - 512 MB storage
3. **Provider & Region seç**:
   - Provider: `AWS`
   - Region: `Frankfurt (eu-central-1)` (Türkiye'ye en yakın)
4. **Cluster Name**: `iletisim-group-cluster`
5. **"Create Cluster" tıkla** (2-3 dakika sürer)

### 3. Database User Oluşturma

1. **Database Access** sekmesine git
2. **"Add New Database User" tıkla**
3. **Authentication Method**: `Password`
4. **Username**: `iletisim_admin`
5. **Password**: Güçlü şifre oluştur (kaydet!)
6. **Database User Privileges**: `Atlas admin`
7. **"Add User" tıkla**

### 4. Network Access Kurulumu

1. **Network Access** sekmesine git
2. **"Add IP Address" tıkla**
3. **Seçenekler**:
   - Geliştirme için: `Allow Access from Anywhere` (0.0.0.0/0)
   - Production için: Specific IP'ler ekle
4. **"Confirm" tıkla**

### 5. Connection String Alma

1. **"Connect" butonuna tıkla**
2. **"Connect your application" seç**
3. **Driver**: `Node.js`
4. **Version**: `4.1 or later`
5. **Connection string'i kopyala**:

```
mongodb+srv://iletisim_admin:<password>@iletisim-group-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

### 6. Backend .env Konfigürasyonu

`.env` dosyasını güncelle:

```env
# MongoDB Atlas Configuration
MONGODB_URI=mongodb+srv://iletisim_admin:YOUR_PASSWORD@iletisim-group-cluster.xxxxx.mongodb.net/iletisim-group?retryWrites=true&w=majority
```

**ÖNEMLİ**: 
- `<password>` kısmını gerçek şifrenle değiştir
- `xxxxx` kısmı otomatik oluşturulur
- Database name olarak `iletisim-group` kullan

### 7. Bağlantıyı Test Etme

Backend'i çalıştır:

```bash
cd backend
npm run dev
```

Başarılı bağlantı mesajını görmelisin:
```
MongoDB Atlas baglandi: iletisim-group-cluster-shard-00-00.xxxxx.mongodb.net
Veritabani: iletisim-group
```

### 8. Database Collections Oluşturma

Bağlantı başarılı olduktan sonra ilk analytics event'i gönder. Collections otomatik oluşacak:

- `cookie_analytics` - Ana analytics verileri
- `user_sessions` - Kullanıcı oturumları  
- `page_visits` - Sayfa ziyaretleri

## 🔧 Konfigürasyon Seçenekleri

### Free Tier Limitleri
- **Storage**: 512 MB
- **RAM**: Shared
- **Connections**: 500 eşzamanlı
- **Transfer**: 10 GB/month (genelde yeterli)

### Connection Pool Ayarları
```javascript
const mongoOptions = {
  maxPoolSize: 5,        // Free tier için düşük tutun
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  bufferMaxEntries: 0,
};
```

## 📊 MongoDB Compass ile Görselleştirme

### 1. MongoDB Compass İndir
- https://www.mongodb.com/products/compass
- Ücretsiz GUI tool

### 2. Bağlantı Kurma
1. Compass'ı aç
2. Connection string'i yapıştır
3. **"Connect" tıkla**

### 3. Verileri Görüntüleme
- `iletisim-group` database'ine git
- Collections'ları incele
- Query'ler çalıştır

## 🚨 Güvenlik Ayarları

### 1. IP Whitelist
Production'da specific IP'ler ekle:
```
- Web sunucu IP'si
- Ofis IP'si  
- VPN IP'si
```

### 2. Güçlü Şifre Kullan
- Minimum 12 karakter
- Büyük/küçük harf + rakam + sembol
- Özel karakterler kullan

### 3. SSL/TLS
Connection string'de otomatik aktif:
```
ssl=true&authSource=admin
```

## 🔍 Monitoring & Alerts

### 1. Atlas Dashboard
- Real-time metrics
- Query performance
- Connection monitoring

### 2. Email Alerts Kurma
1. **Alerts** sekmesine git
2. **"Create Alert" tıkla**
3. **Conditions** seç:
   - High CPU usage
   - High memory usage
   - Connection spike

### 3. Önemli Metricsler
- **Connections**: <400 (Free tier için)
- **Data Size**: <400 MB (Free tier için)
- **Query Response Time**: <100ms

## 📈 Performance Optimization

### 1. Index Stratejisi
```javascript
// Otomatik oluşan indexler
db.cookie_analytics.createIndex({ "userId": 1, "timestamp": -1 })
db.cookie_analytics.createIndex({ "eventType": 1, "timestamp": -1 })
db.user_sessions.createIndex({ "sessionId": 1 })
```

### 2. Query Optimization
```javascript
// İyi query örneği
db.cookie_analytics.find({
  timestamp: { $gte: new Date('2025-01-01') },
  eventType: 'page_view'
}).sort({ timestamp: -1 }).limit(100)
```

### 3. Data Cleanup
```javascript
// 6 ay önceki verileri sil
const sixMonthsAgo = new Date();
sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

db.cookie_analytics.deleteMany({
  timestamp: { $lt: sixMonthsAgo }
})
```

## 🛠️ Troubleshooting

### Bağlantı Sorunları

**Error**: `MongoNetworkError: failed to connect`
- **Çözüm**: IP whitelist kontrol et
- Network Access'te IP'ni ekle

**Error**: `Authentication failed`
- **Çözüm**: Username/password kontrol et
- .env dosyasındaki MONGODB_URI'yi kontrol et

**Error**: `Timeout`
- **Çözüm**: Connection string'i kontrol et
- Internet bağlantısını kontrol et

### Performance Sorunları

**Yavaş Query'ler**
- Index'leri kontrol et
- Query pattern'larını optimize et
- Aggregation pipeline kullan

**Connection Pool Full**
- maxPoolSize'ı azalt (Free tier için 5)
- Connection timeout'ları ayarla

## 📋 Checklist

MongoDB Atlas kurulumu tamamlandıktan sonra:

- [ ] ✅ Cluster oluşturuldu
- [ ] ✅ Database user eklendi  
- [ ] ✅ IP whitelist ayarlandı
- [ ] ✅ Connection string alındı
- [ ] ✅ .env dosyası güncellendi
- [ ] ✅ Backend bağlantısı test edildi
- [ ] ✅ İlk analytics event'i gönderildi
- [ ] ✅ Collections oluştu
- [ ] ✅ MongoDB Compass bağlandı
- [ ] ✅ Alert'ler kuruldu

## 🎉 Başarılı Kurulum!

MongoDB Atlas'ınız artık hazır! İletişim Group analytics sistemi:

📊 **512 MB** ücretsiz storage  
🔒 **SSL/TLS** güvenlik  
🌍 **Global CDN** network  
📈 **6+ yıl** sürekli kullanım  
🚀 **Professional** analytics  

**Happy Data Management! 🗄️✨**

---

### 📞 Yardım Gerekiyorsa

**MongoDB Documentation**: https://docs.mongodb.com/  
**Atlas Documentation**: https://docs.atlas.mongodb.com/  
**Community Forum**: https://community.mongodb.com/  

İletişim Group için MongoDB Atlas kurulumu tamamlandı! 🎯
