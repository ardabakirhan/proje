#!/bin/bash
# İletişim Group Production Deployment Script
# Bu script'i sunucunuzda çalıştırın

set -e  # Script hata alırsa dursun

echo "🚀 İletişim Group Production Deployment Başlıyor..."

# Değişkenler
APP_NAME="iletisim-group"
APP_DIR="/var/www/$APP_NAME"
DOMAIN="iletisimgroup.com"
USER="root"

# Gerekli paketleri kontrol et
echo "📦 Gerekli paketlerin kontrolü..."
command -v node >/dev/null 2>&1 || { echo "❌ Node.js kurulu değil!"; exit 1; }
command -v pm2 >/dev/null 2>&1 || { echo "❌ PM2 kurulu değil!"; exit 1; }
command -v nginx >/dev/null 2>&1 || { echo "❌ Nginx kurulu değil!"; exit 1; }

echo "✅ Tüm gerekli paketler mevcut"

# Uygulama dizinini oluştur
echo "📁 Uygulama dizini oluşturuluyor..."
mkdir -p $APP_DIR
cd $APP_DIR

# Eğer Git repo'dan çekiyorsanız:
# git clone https://github.com/yourusername/iletisim-group.git .
# git pull origin main

# Backend bağımlılıklarını kur
echo "📦 Backend bağımlılıkları kuruluyor..."
cd $APP_DIR/backend
npm install --production

# Frontend build
echo "🔨 Frontend build ediliyor..."
cd $APP_DIR
npm install
npm run build

echo "✅ Build tamamlandı"

# PM2 ecosystem kopyala
echo "⚙️ PM2 konfigürasyonu..."
cp $APP_DIR/ecosystem.config.js $APP_DIR/
pm2 delete $APP_NAME || true  # Eğer varsa sil
pm2 start ecosystem.config.js
pm2 save

echo "✅ PM2 başlatıldı"

# Nginx konfigürasyonu
echo "🌐 Nginx konfigürasyonu..."
cp $APP_DIR/nginx-iletisimgroup.conf /etc/nginx/sites-available/$DOMAIN

# Nginx site'i aktifleştir
ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx

echo "✅ Nginx konfigüre edildi"

# SSL sertifikası (Let's Encrypt)
echo "🔒 SSL sertifikası kontrol ediliyor..."
if [ ! -f "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" ]; then
    echo "📜 SSL sertifikası kuruluyor..."
    certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email info@$DOMAIN
else
    echo "✅ SSL sertifikası zaten mevcut"
fi

# Log dizinlerini oluştur
echo "📝 Log dizinleri oluşturuluyor..."
mkdir -p /var/log/pm2
mkdir -p /var/log/nginx
mkdir -p /var/cache/nginx

# Firewall kuralları
echo "🔥 Firewall kuralları..."
ufw allow ssh
ufw allow 80
ufw allow 443
ufw --force enable

# Backup script'i kopyala
echo "💾 Backup script'i kuruluyor..."
mkdir -p /var/scripts
mkdir -p /var/backups/$APP_NAME

cat > /var/scripts/backup-$APP_NAME.sh << 'EOF'
#!/bin/bash
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

echo "Backup completed: $DATE"
EOF

chmod +x /var/scripts/backup-$APP_NAME.sh

# Crontab backup job
echo "⏰ Crontab backup job ekleniyor..."
(crontab -l 2>/dev/null; echo "0 3 * * * /var/scripts/backup-$APP_NAME.sh") | crontab -

# MongoDB Atlas IP whitelist uyarısı
echo ""
echo "⚠️  ÖNEMLİ: MongoDB Atlas IP Whitelist Güncelleme"
echo "1. MongoDB Atlas panel'e gidin"
echo "2. Network Access → IP Whitelist"
echo "3. Sunucu IP'nizi ekleyin: $(curl -s ifconfig.me)/32"
echo "4. 0.0.0.0/0 (allow all) entry'sini silin"
echo ""

# Status kontrolü
echo "🔍 Servis durumu kontrol ediliyor..."
echo ""
echo "PM2 Status:"
pm2 status
echo ""
echo "Nginx Status:"
systemctl status nginx --no-pager -l
echo ""

# Health check
echo "🏥 Health check..."
sleep 5
curl -f http://localhost:3001/api/analytics/health && echo "✅ Backend çalışıyor" || echo "❌ Backend hatası"

echo ""
echo "🎉 DEPLOYMENT TAMAMLANDI!"
echo ""
echo "📊 Monitoring:"
echo "- PM2 Dashboard: pm2 monit"
echo "- Logs: pm2 logs $APP_NAME"
echo "- Nginx Logs: tail -f /var/log/nginx/access.log"
echo ""
echo "🔗 Web Site: https://$DOMAIN"
echo "🔗 API Health: https://$DOMAIN/api/analytics/health"
echo ""
echo "🛡️ Security Checklist:"
echo "- ✅ SSL aktif"
echo "- ✅ Firewall aktif"
echo "- ✅ Rate limiting aktif"
echo "- ⚠️  MongoDB IP whitelist güncelle"
echo ""
echo "💾 Backup: Günlük 03:00'da otomatik"
echo "📈 Monitoring: PM2 ile otomatik restart"
echo ""
echo "Happy Analytics! 🚀📊"
