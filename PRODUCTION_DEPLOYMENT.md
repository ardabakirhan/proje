# Production Sunucu Deployment Rehberi - İletişim Group

## 🚀 Kendi Sunucunuza MongoDB Atlas Analytics Sistemi Kurulumu

### 1. **Environment Variables (.env) Güncelleme**

#### Backend .env Dosyası:
```env
# Production Server Configuration
PORT=3001
NODE_ENV=production

# CORS Configuration - DOMAIN'İNİZİ YAZIN
FRONTEND_URL=https://iletisimgroup.com

# Email Configuration (Mevcut ayarlarınız)
EMAIL_HOST=mail.iletisimgroup.com
EMAIL_PORT=465
EMAIL_SECURE=true
EMAIL_USER=info@iletisimgroup.com
EMAIL_PASS=a20250618A
EMAIL_FROM=info@iletisimgroup.com
EMAIL_TO=info@iletisimgroup.com

# Company Information
COMPANY_NAME=İletişim Group
COMPANY_WEBSITE=https://iletisimgroup.com

# MongoDB Atlas Configuration (AYNI KALIYOR)
MONGODB_URI=mongodb+srv://ardayasar92:a20250618A@iletisimgroup.ldyjp.mongodb.net/iletisimgroup?retryWrites=true&w=majority&appName=iletisimgroup
```

#### Frontend .env Dosyası:
```env
# Production API URL - SUNUCU IP/DOMAIN'İNİZİ YAZIN
VITE_API_URL=https://iletisimgroup.com/api
# VEYA
VITE_API_URL=https://92.249.61.10:3001/api
```

### 2. **Sunucu Kurulum Komutları**

#### 2.1 Node.js Kurulumu (Ubuntu/CentOS)
```bash
# Node.js 18+ kurulumu
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Alternatif: NVM ile
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18
```

#### 2.2 PM2 Process Manager Kurulumu
```bash
# PM2 global kurulum
npm install -g pm2

# PM2 otomatik başlatma
pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u $(whoami) --hp $(eval echo ~$(whoami))
```

### 3. **Proje Dosyalarını Sunucuya Upload**

#### 3.1 Dosya Transfer
```bash
# SCP ile dosya transferi
scp -r /path/to/iletisim-group root@92.249.61.10:/var/www/

# SFTP ile alternatif
sftp root@92.249.61.10
put -r /local/path/iletisim-group /var/www/
```

#### 3.2 Sunucuda Kurulum
```bash
# Backend kurulumu
cd /var/www/iletisim-group/backend
npm install --production

# Frontend build
cd /var/www/iletisim-group
npm install
npm run build
```

### 4. **Nginx Konfigürasyonu**

#### 4.1 Nginx Config Dosyası:
```nginx
# /etc/nginx/sites-available/iletisimgroup.com
server {
    listen 80;
    server_name iletisimgroup.com www.iletisimgroup.com;
    
    # HTTPS yönlendirme
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name iletisimgroup.com www.iletisimgroup.com;
    
    # SSL Sertifikaları (Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/iletisimgroup.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/iletisimgroup.com/privkey.pem;
    
    # Frontend static files
    location / {
        root /var/www/iletisim-group/dist;
        try_files $uri $uri/ /index.html;
        
        # Cache static assets
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
    
    # Backend API proxy
    location /api/ {
        proxy_pass http://localhost:3001/api/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
}
```

#### 4.2 Nginx Aktifleştirme:
```bash
# Site'i aktifleştir
sudo ln -s /etc/nginx/sites-available/iletisimgroup.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 5. **SSL Sertifikası (Let's Encrypt)**

```bash
# Certbot kurulumu
sudo apt install certbot python3-certbot-nginx

# SSL sertifikası alma
sudo certbot --nginx -d iletisimgroup.com -d www.iletisimgroup.com

# Otomatik yenileme
sudo crontab -e
# Şu satırı ekleyin:
0 12 * * * /usr/bin/certbot renew --quiet
```

### 6. **PM2 ile Backend Başlatma**

#### 6.1 PM2 Ecosystem Dosyası:
```javascript
// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'iletisim-group-backend',
    script: 'server.js',
    cwd: '/var/www/iletisim-group/backend',
    instances: 2,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    },
    error_file: '/var/log/pm2/iletisim-group-error.log',
    out_file: '/var/log/pm2/iletisim-group-out.log',
    log_file: '/var/log/pm2/iletisim-group.log',
    time: true
  }]
};
```

#### 6.2 PM2 Başlatma:
```bash
# PM2 ile başlat
cd /var/www/iletisim-group
pm2 start ecosystem.config.js

# PM2 status kontrol
pm2 status
pm2 logs iletisim-group-backend

# PM2 kaydetme (reboot sonrası otomatik başlatma)
pm2 save
```

### 7. **Firewall Konfigürasyonu**

```bash
# UFW firewall kurulumu
sudo ufw allow ssh
sudo ufw allow 80
sudo ufw allow 443
sudo ufw allow 3001  # Backend port (opsiyonel, Nginx proxy kullanılıyorsa gerekli değil)
sudo ufw enable
```

### 8. **MongoDB Atlas IP Whitelist Güncelleme**

#### 8.1 MongoDB Atlas Panel:
1. **Network Access** sekmesine git
2. **"Edit"** butonuna tıkla (mevcut 0.0.0.0/0 entry)
3. **Sunucu IP'nizi ekle**: `92.249.61.10/32`
4. **Güvenlik için**: Development IP'sini kaldır (0.0.0.0/0)

#### 8.2 Production IP Listesi:
```
92.249.61.10/32    # Ana sunucu IP
YOUR_OFFICE_IP/32  # Ofis IP'si (yönetim için)
YOUR_HOME_IP/32    # Ev IP'si (yönetim için)
```

### 9. **Environment Specific Ayarlar**

#### 9.1 Backend server.js Güncelleme:
```javascript
// CORS settings for production
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://iletisimgroup.com', 'https://www.iletisimgroup.com']
    : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true,
  optionsSuccessStatus: 200
};
```

#### 9.2 Rate Limiting Ayarları:
```javascript
// Production için daha sıkı rate limiting
const analyticsLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 dakika
  max: process.env.NODE_ENV === 'production' ? 50 : 100, // Production'da daha az
  message: {
    error: 'Çok fazla analytics isteği. Lütfen bekleyin.',
    code: 'ANALYTICS_RATE_LIMIT'
  }
});
```

### 10. **Monitoring & Logging**

#### 10.1 Log Rotasyonu:
```bash
# Logrotate konfigürasyonu
sudo nano /etc/logrotate.d/pm2-iletisim-group

/var/log/pm2/iletisim-group*.log {
    daily
    rotate 30
    compress
    delaycompress
    missingok
    notifempty
    sharedscripts
    postrotate
        pm2 reloadLogs
    endscript
}
```

#### 10.2 System Monitoring:
```bash
# Sistem monitoring
sudo apt install htop iotop
npm install -g pm2-logrotate

# PM2 monitoring
pm2 install pm2-server-monit
```

### 11. **Backup Stratejisi**

#### 11.1 MongoDB Atlas Backup:
- Atlas'ta otomatik backup aktif (Free tier'da da var)
- Point-in-time recovery mevcut
- Manuel backup exportları yapabilirsiniz

#### 11.2 Application Backup:
```bash
# Günlük backup script
#!/bin/bash
# /var/scripts/backup-iletisim-group.sh

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/var/backups/iletisim-group"
APP_DIR="/var/www/iletisim-group"

mkdir -p $BACKUP_DIR

# Application files backup
tar -czf "$BACKUP_DIR/app_$DATE.tar.gz" -C /var/www iletisim-group

# PM2 config backup
pm2 save
cp ~/.pm2/dump.pm2 "$BACKUP_DIR/pm2_$DATE.json"

# Nginx config backup
cp /etc/nginx/sites-available/iletisimgroup.com "$BACKUP_DIR/nginx_$DATE.conf"

# Keep only last 7 backups
find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete
find $BACKUP_DIR -name "*.json" -mtime +7 -delete
find $BACKUP_DIR -name "*.conf" -mtime +7 -delete
```

#### 11.3 Crontab Backup:
```bash
# Günlük 3:00'da backup
sudo crontab -e
0 3 * * * /var/scripts/backup-iletisim-group.sh
```

### 12. **Performance Optimization**

#### 12.1 Nginx Caching:
```nginx
# Nginx cache directory
http {
    proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=api_cache:10m max_size=100m inactive=60m use_temp_path=off;
    
    # API response caching
    location /api/analytics/stats {
        proxy_cache api_cache;
        proxy_cache_valid 200 5m;
        proxy_cache_key "$scheme$request_method$host$request_uri";
        add_header X-Cache-Status $upstream_cache_status;
        
        proxy_pass http://localhost:3001/api/analytics/stats;
    }
}
```

#### 12.2 MongoDB Connection Pooling:
```javascript
// Production için optimize connection settings
const mongoOptions = {
  maxPoolSize: 10,        // Production için artırılabilir
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  bufferMaxEntries: 0,
  retryWrites: true,
  writeConcern: {
    w: 'majority',
    wtimeout: 5000
  }
};
```

### 13. **Security Checklist**

- [ ] ✅ MongoDB Atlas IP whitelist'i güncelleyin
- [ ] ✅ SSL sertifikası kuruldu
- [ ] ✅ Firewall kuralları aktif
- [ ] ✅ Rate limiting aktif
- [ ] ✅ CORS policy production için ayarlandı
- [ ] ✅ Environment variables güvenli
- [ ] ✅ Nginx security headers eklendi
- [ ] ✅ PM2 cluster mode aktif
- [ ] ✅ Log rotation ayarlandı
- [ ] ✅ Backup stratejisi kuruldu

### 14. **Test & Monitoring**

#### 14.1 Production Test:
```bash
# Health check
curl -I https://iletisimgroup.com/api/analytics/health

# Analytics test
curl -X POST https://iletisimgroup.com/api/cookie-analytics \
  -H "Content-Type: application/json" \
  -d '{"userId":"test","sessionId":"test","eventType":"page_view","pageUrl":"https://iletisimgroup.com/test"}'
```

#### 14.2 Monitoring Endpoints:
- **Health**: `https://iletisimgroup.com/api/analytics/health`
- **PM2 Status**: `pm2 status`
- **Nginx Logs**: `sudo tail -f /var/log/nginx/access.log`
- **App Logs**: `pm2 logs iletisim-group-backend`

---

## 🚀 **Özet: Production'a Geçiş Adımları**

1. **Sunucuda Node.js + PM2 kurulumu**
2. **Proje dosyalarını sunucuya upload**
3. **Environment variables güncelleme**
4. **Nginx + SSL konfigürasyonu**
5. **MongoDB Atlas IP whitelist güncelleme**
6. **PM2 ile backend başlatma**
7. **Frontend build ve deploy**
8. **Security ve monitoring kurulumu**

**Bu adımları tamamladıktan sonra MongoDB Atlas analytics sisteminiz production'da çalışacak! 🎯**
