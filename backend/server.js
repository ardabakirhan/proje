/**
 * @fileoverview İletişim Group Backend Server
 * @author İletişim Group
 */

/* global require, module, process, console, __dirname */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const path = require('path');
const mongoose = require('mongoose'); // Production mode aktif

// Environment variables yükle
console.log('Environment variables yükleniyor...');
dotenv.config({ path: path.join(__dirname, '.env') });
console.log('Environment variables yüklendi.');
console.log('PORT:', process.env.PORT);
console.log('NODE_ENV:', process.env.NODE_ENV);

// MongoDB bağlantısı (production mode)
const connectDB = async () => {
  try {
    if (process.env.MONGODB_URI && process.env.MONGODB_URI !== 'disabled') {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('✅ MongoDB Atlas bağlantısı başarılı');
    } else {
      console.log('⚠️ MongoDB bağlantısı devre dışı - veriler log\'a yazılacak');
    }
  } catch (error) {
    console.error('❌ MongoDB bağlantı hatası:', error);
    if (process.env.NODE_ENV === 'production') {
      process.exit(1); // Production'da MongoDB zorunlu
    }
  }
};

// MongoDB'ye bağlan
connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// CORS Configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://iletisimgroup.com', 'https://www.iletisimgroup.com', 'http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175', 'http://localhost:5176', 'http://localhost:5177']
    : ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:5174', 'http://localhost:5175', 'http://localhost:5176', 'http://localhost:5177'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Preflight requests için OPTIONS handler
app.options('*', cors(corsOptions));

// Rate limiting - Spam koruması
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 dakika
  max: 5, // 15 dakikada maksimum 5 mesaj
  message: {
    error: 'Çok fazla mesaj gönderdiniz. Lütfen 15 dakika sonra tekrar deneyin.',
    code: 'RATE_LIMIT_EXCEEDED'
  },
  standardHeaders: true,
  legacyHeaders: false
});

// Nodemailer transporter oluştur
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    tls: {
      rejectUnauthorized: false // Development için SSL sertifika kontrolünü devre dışı bırak
    },
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    // Türkçe karakter desteği için encoding ayarları
    pool: true,
    maxConnections: 5,
    maxMessages: 100,
    rateLimit: 5,
    logger: false,
    debug: false
  });
};

// Root endpoint
app.get('/', (req, res) => {
  res.send({
    status: 'OK',
    message: 'İletişim Group API aktif',
    version: '1.0.0'
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Contact form endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    console.log('Contact form data received:', req.body);
    
    // Gerekli alanları kontrol et
    const { name, email, subject, message, company } = req.body;
    
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'Tüm gerekli alanları doldurunuz.',
        code: 'MISSING_FIELDS'
      });
    }

    // Email formatını basitçe kontrol et
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Geçerli bir e-posta adresi giriniz.',
        code: 'INVALID_EMAIL'
      });
    }

    // Geliştirme modunda e-posta gönderimini mock'la (gerçek gönderim için comment out)
    if (process.env.NODE_ENV === 'development' && process.env.ENABLE_REAL_EMAIL !== 'true') {
      console.log('=== DEVELOPMENT MODE: E-POSTA MOCK GÖNDERİMİ ===');
      console.log('📧 Admin E-posta (mock):');
      console.log('  To:', process.env.EMAIL_TO);
      console.log('  From:', process.env.EMAIL_FROM);
      console.log('  Subject: Yeni İletişim Mesajı:', subject);
      console.log('  Content: Ad:', name, 'Email:', email, 'Mesaj:', message);
      
      console.log('📧 Müşteri Onay E-posta (mock):');
      console.log('  To:', email);
      console.log('  From:', process.env.EMAIL_FROM);
      console.log('  Subject: Mesajınız Alındı - İletişim Group');
      console.log('  Content: Sayın', name, 'mesajınız alındı, 24 saat içinde dönüş yapacağız.');
      console.log('===============================================');
      
      return res.json({
        success: true,
        message: 'Mesajınız başarıyla alınmıştır. En kısa sürede size geri dönüş yapacağız.',
        data: { name, email, subject, message, company }
      });
    }

    // Transporter oluştur ve e-postayı gönder
    const transporter = createTransporter();
    
    console.log('Email template variables:', {
      company_name: process.env.COMPANY_NAME,
      company_website: process.env.COMPANY_WEBSITE,
      email_from: process.env.EMAIL_FROM,
      email_to: process.env.EMAIL_TO
    });
    
    // 1. Şirkete giden admin mesajı
    const adminMailOptions = {
      from: `"${process.env.COMPANY_NAME}" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `${process.env.COMPANY_NAME} - Yeni İletişim Mesajı: ${subject}`,
      encoding: 'utf8',
      textEncoding: 'quoted-printable',
      html: `
      <!DOCTYPE html>
      <html lang="tr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${process.env.COMPANY_NAME} - İletişim Mesajı</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #0ea5e9; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
          .content { background: #f8f9fa; padding: 20px; border: 1px solid #e9ecef; }
          .footer { background: #6c757d; color: white; padding: 15px; border-radius: 0 0 8px 8px; font-size: 12px; text-align: center; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #495057; margin-bottom: 5px; display: block; }
          .value { padding: 10px; background: white; border-radius: 4px; border: 1px solid #ced4da; word-wrap: break-word; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>${process.env.COMPANY_NAME}</h2>
            <p>Yeni İletişim Mesajı</p>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">👤 Ad Soyad:</span>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <span class="label">📧 E-posta:</span>
              <div class="value">${email}</div>
            </div>
            ${company ? `
            <div class="field">
              <span class="label">🏢 Şirket:</span>
              <div class="value">${company}</div>
            </div>
            ` : ''}
            <div class="field">
              <span class="label">📝 Konu:</span>
              <div class="value">${subject}</div>
            </div>
            <div class="field">
              <span class="label">💬 Mesaj:</span>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>Bu mesaj <strong>${process.env.COMPANY_WEBSITE || process.env.COMPANY_NAME}</strong> web sitesi üzerinden gönderilmiştir.</p>
            <p>Gönderilme Zamanı: ${new Date().toLocaleString('tr-TR')}</p>
          </div>
        </div>
      </body>
      </html>
      `
    };

    // 2. Kullanıcıya giden otomatik onay mesajı
    const userConfirmationMailOptions = {
      from: `"${process.env.COMPANY_NAME}" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: `${process.env.COMPANY_NAME} - Mesajınızı Aldık`,
      encoding: 'utf8',
      textEncoding: 'quoted-printable',
      html: `
      <!DOCTYPE html>
      <html lang="tr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${process.env.COMPANY_NAME} - Mesajınızı Aldık</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #0ea5e9; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
          .content { background: #f8f9fa; padding: 20px; border: 1px solid #e9ecef; }
          .footer { background: #6c757d; color: white; padding: 15px; border-radius: 0 0 8px 8px; font-size: 12px; text-align: center; }
          .highlight { background: #e3f2fd; padding: 15px; border-radius: 5px; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>${process.env.COMPANY_NAME}</h2>
            <p>Mesajınızı Aldık</p>
          </div>
          <div class="content">
            <p><strong>Merhaba ${name},</strong></p>
            
            <p>Mesajınızı aldık ve en kısa sürede size geri dönüş yapacağız.</p>
            
            <div class="highlight">
              <p><strong>İletişim formunuz başarıyla gönderilmiştir. Genellikle 24 saat içerisinde müşterilerimize geri dönüş yapmaktayız.</strong></p>
            </div>
            
            <p><strong>Gönderdiğiniz mesaj özeti:</strong></p>
            <ul>
              <li><strong>Konu:</strong> ${subject}</li>
              ${company ? `<li><strong>Şirket:</strong> ${company}</li>` : ''}
              <li><strong>Mesaj:</strong> ${message}</li>
            </ul>
            
            <p>Acil durumlar için doğrudan telefon numaramızdan bize ulaşabilirsiniz.</p>
            <p>İlginiz için teşekkür ederiz.</p>
            
            <p><strong>${process.env.COMPANY_NAME} Ekibi</strong></p>
          </div>
          <div class="footer">
            <p><strong>${process.env.COMPANY_WEBSITE || process.env.COMPANY_NAME}</strong></p>
            <p>Bu e-posta otomatik olarak gönderilmiştir.</p>
            <p>Gönderilme Zamanı: ${new Date().toLocaleString('tr-TR')}</p>
          </div>
        </div>
      </body>
      </html>
      `
    };

    // E-postaları gönder
    console.log('Admin e-postası gönderiliyor...');
    await transporter.sendMail(adminMailOptions);
    
    console.log('Kullanıcı onay e-postası gönderiliyor...');
    await transporter.sendMail(userConfirmationMailOptions);

    console.log('Her iki e-posta da başarıyla gönderildi.');

    // Başarılı yanıt
    res.status(200).json({
      success: true,
      message: 'Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.'
    });

  } catch (error) {
    console.error('İletişim formu hatası:', error);
    res.status(500).json({
      success: false,
      error: 'Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
      code: 'SERVER_ERROR',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Newsletter model (geçici olarak devre dışı)
// const Newsletter = require('./models/Newsletter');

// Newsletter subscription endpoint (MongoDB olmadan geçici implementasyon)
app.post('/api/newsletter/subscribe', async (req, res) => {
  try {
    const { email, consent } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        error: 'E-posta adresi gereklidir.',
        code: 'MISSING_EMAIL'
      });
    }

    if (!consent) {
      return res.status(400).json({
        success: false,
        error: 'Gizlilik politikasını kabul etmelisiniz.',
        code: 'CONSENT_REQUIRED'
      });
    }

    // E-posta formatını kontrol et
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Geçerli bir e-posta adresi giriniz.',
        code: 'INVALID_EMAIL'
      });
    }

    // Geçici olarak log'a yaz (MongoDB bağlantısı olmadan)
    console.log('Newsletter subscription received:', {
      email: email.toLowerCase(),
      consent,
      timestamp: new Date().toISOString(),
      source: 'website'
    });

    res.status(201).json({
      success: true,
      message: 'Bülten aboneliğiniz başarıyla oluşturuldu! (Geçici - log modunda)'
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    res.status(500).json({
      success: false,
      error: 'Bülten aboneliği oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.',
      code: 'SERVER_ERROR',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Newsletter unsubscribe endpoint (MongoDB olmadan geçici implementasyon)
app.post('/api/newsletter/unsubscribe', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        error: 'E-posta adresi gereklidir.',
        code: 'MISSING_EMAIL'
      });
    }

    // Geçici olarak log'a yaz (MongoDB bağlantısı olmadan)
    console.log('Newsletter unsubscribe received:', {
      email: email.toLowerCase(),
      timestamp: new Date().toISOString()
    });

    res.status(200).json({
      success: true,
      message: 'Bülten aboneliğiniz başarıyla iptal edildi. (Geçici - log modunda)'
    });

  } catch (error) {
    console.error('Newsletter unsubscribe error:', error);
    res.status(500).json({
      success: false,
      error: 'Abonelik iptali sırasında bir hata oluştu.',
      code: 'SERVER_ERROR'
    });
  }
});

// Sektörel Form Endpoint'leri

// Rate limiting for sector forms
const sectorFormLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 dakika
  max: 3, // 15 dakikada maksimum 3 form
  message: {
    error: 'Çok fazla form gönderdiniz. Lütfen 15 dakika sonra tekrar deneyin.',
    code: 'RATE_LIMIT_EXCEEDED'
  },
  standardHeaders: true,
  legacyHeaders: false
});

// Genel sektörel form handler
const handleSectorForm = async (req, res, sectorInfo) => {
  try {
    console.log(`${sectorInfo.name} sector form data received:`, req.body);
    
    const { name, email, phone, subject, message, company } = req.body;
    
    // Gerekli alanları kontrol et
    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'Tüm gerekli alanları doldurunuz (Ad, E-posta, Telefon, Konu, Mesaj).',
        code: 'MISSING_FIELDS'
      });
    }

    // Email ve telefon formatını kontrol et
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Geçerli bir e-posta adresi giriniz.',
        code: 'INVALID_EMAIL'
      });
    }

    const phoneRegex = /^[\d\s\-+()]+$/;
    if (!phoneRegex.test(phone) || phone.length < 10) {
      return res.status(400).json({
        success: false,
        error: 'Geçerli bir telefon numarası giriniz.',
        code: 'INVALID_PHONE'
      });
    }

    // Geliştirme modunda e-posta gönderimini mock'la (gerçek gönderim için comment out)
    if (process.env.NODE_ENV === 'development' && process.env.ENABLE_REAL_EMAIL !== 'true') {
      console.log('=== DEVELOPMENT MODE: SECTOR FORM E-POSTA MOCK GÖNDERİMİ ===');
      console.log('📧 Admin E-posta (mock):');
      console.log('  To:', sectorInfo.email);
      console.log('  From:', process.env.EMAIL_FROM);
      console.log('  Subject:', `${sectorInfo.name} - Yeni Talep:`, subject);
      console.log('  Content: Ad:', name, 'Email:', email, 'Telefon:', phone, 'Mesaj:', message);
      
      console.log('📧 Müşteri Onay E-posta (mock):');
      console.log('  To:', email);
      console.log('  From:', process.env.EMAIL_FROM);
      console.log('  Subject:', `Talebiniz Alındı - ${sectorInfo.name}`);
      console.log('  Content: Sayın', name, 'talebiniz', sectorInfo.name, 'departmanına iletildi.');
      console.log('=======================================================');
      
      return res.json({
        success: true,
        message: `Talebiniz başarıyla ${sectorInfo.name} departmanına iletildi. En kısa sürede sizinle iletişime geçeceğiz.`,
        data: { name, email, phone, subject, message, company, sector: sectorInfo.name }
      });
    }

    const transporter = createTransporter();
    
    // Sektörel e-posta template'i
    const adminMailOptions = {
      from: `"${process.env.COMPANY_NAME}" <${process.env.EMAIL_FROM}>`,
      to: sectorInfo.email, // Sektörel e-posta adresi (legal@iletisimgroup.com vb.)
      replyTo: email,
      subject: `${sectorInfo.name} - Yeni Anket/Talep: ${subject}`,
      encoding: 'utf8',
      textEncoding: 'quoted-printable',
      html: `
      <!DOCTYPE html>
      <html lang="tr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${sectorInfo.name} - Yeni Anket</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: ${sectorInfo.color}; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
          .content { background: #f8f9fa; padding: 20px; border: 1px solid #e9ecef; }
          .footer { background: #6c757d; color: white; padding: 15px; border-radius: 0 0 8px 8px; font-size: 12px; text-align: center; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #495057; margin-bottom: 5px; display: block; }
          .value { padding: 10px; background: white; border-radius: 4px; border: 1px solid #ced4da; word-wrap: break-word; }
          .sector-badge { background: ${sectorInfo.color}; color: white; padding: 5px 10px; border-radius: 15px; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>${process.env.COMPANY_NAME}</h2>
            <span class="sector-badge">${sectorInfo.name}</span>
            <p><strong>⚠️ BU TALEP ${sectorInfo.name.toUpperCase()} DEPARTMANI İÇİNDİR ⚠️</strong></p>
            <p>Yeni Anket/Talep Formu</p>
          </div>
          <div class="content">
            <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin-bottom: 20px; text-align: center;">
              <strong>🏢 DEPARTMAN: ${sectorInfo.name}</strong><br>
              <small>Bu talep ${sectorInfo.name} departmanına yönlendirilmelidir.</small>
            </div>
            <div class="field">
              <span class="label">👤 Ad Soyad:</span>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <span class="label">📧 E-posta:</span>
              <div class="value">${email}</div>
            </div>
            <div class="field">
              <span class="label">📞 Telefon:</span>
              <div class="value">${phone}</div>
            </div>
            ${company ? `
            <div class="field">
              <span class="label">🏢 Şirket:</span>
              <div class="value">${company}</div>
            </div>
            ` : ''}
            <div class="field">
              <span class="label">📝 Konu:</span>
              <div class="value">${subject}</div>
            </div>
            <div class="field">
              <span class="label">💬 Mesaj/Talep:</span>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
            <div class="field">
              <span class="label">🏭 Sektör:</span>
              <div class="value">${sectorInfo.name}</div>
            </div>
          </div>
          <div class="footer">
            <p>Bu talep <strong>${sectorInfo.name}</strong> sektörü için ${process.env.COMPANY_WEBSITE || process.env.COMPANY_NAME} web sitesi üzerinden gönderilmiştir.</p>
            <p>Gönderilme Zamanı: ${new Date().toLocaleString('tr-TR')}</p>
          </div>
        </div>
      </body>
      </html>
      `
    };

    // Kullanıcıya otomatik onay e-postası
    const userConfirmationMailOptions = {
      from: `"${process.env.COMPANY_NAME} - ${sectorInfo.name}" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: `${sectorInfo.name} - Talebinizi Aldık`,
      encoding: 'utf8',
      textEncoding: 'quoted-printable',
      html: `
      <!DOCTYPE html>
      <html lang="tr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${sectorInfo.name} - Talebinizi Aldık</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: ${sectorInfo.color}; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
          .content { background: #f8f9fa; padding: 20px; border: 1px solid #e9ecef; }
          .footer { background: #6c757d; color: white; padding: 15px; border-radius: 0 0 8px 8px; font-size: 12px; text-align: center; }
          .highlight { background: #e3f2fd; padding: 15px; border-radius: 5px; margin: 15px 0; }
          .sector-badge { background: ${sectorInfo.color}; color: white; padding: 5px 10px; border-radius: 15px; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>${process.env.COMPANY_NAME}</h2>
            <span class="sector-badge">${sectorInfo.name}</span>
            <p>Talebinizi Aldık</p>
          </div>
          <div class="content">
            <p><strong>Merhaba ${name},</strong></p>
            
            <p><strong>${sectorInfo.name}</strong> sektörü ile ilgili talebinizi aldık ve uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.</p>
            
            <div class="highlight">
              <p><strong>Anket/Talep formunuz başarıyla ${sectorInfo.name} departmanına iletilmiştir. Sektör uzmanlarımız genellikle 24 saat içerisinde geri dönüş yapmaktadır.</strong></p>
            </div>
            
            <p><strong>Gönderdiğiniz talep özeti:</strong></p>
            <ul>
              <li><strong>Sektör:</strong> ${sectorInfo.name}</li>
              <li><strong>Konu:</strong> ${subject}</li>
              <li><strong>Telefon:</strong> ${phone}</li>
              ${company ? `<li><strong>Şirket:</strong> ${company}</li>` : ''}
              <li><strong>Mesaj:</strong> ${message}</li>
            </ul>
            
            <p>Acil durumlar için telefon numaranızdan sizi arayacağımız gibi, doğrudan telefon ile de bize ulaşabilirsiniz.</p>
            <p>İlginiz için teşekkür ederiz.</p>
            
            <p><strong>${process.env.COMPANY_NAME} - ${sectorInfo.name} Ekibi</strong></p>
          </div>
          <div class="footer">
            <p><strong>${process.env.COMPANY_WEBSITE || process.env.COMPANY_NAME}</strong></p>
            <p>Bu e-posta otomatik olarak gönderilmiştir.</p>
            <p>Gönderilme Zamanı: ${new Date().toLocaleString('tr-TR')}</p>
          </div>
        </div>
      </body>
      </html>
      `
    };

    // E-postaları gönder
    console.log(`${sectorInfo.name} departmanı talebi info@iletisimgroup.com adresine gönderiliyor...`);
    try {
      await transporter.sendMail(adminMailOptions);
      console.log('Admin e-postası başarıyla gönderildi');
    } catch (emailError) {
      console.error('Admin e-posta gönderimi hatası:', emailError.message);
    }
    
    console.log('Kullanıcı onay e-postası gönderiliyor...');
    try {
      await transporter.sendMail(userConfirmationMailOptions);
      console.log('Kullanıcı e-postası başarıyla gönderildi');
    } catch (emailError) {
      console.error('Kullanıcı e-posta gönderimi hatası:', emailError.message);
    }

    // Form verilerini log'a yaz (e-posta gönderimi başarısız olsa bile)
    console.log(`${sectorInfo.name} sektörü form verisi kaydedildi:`, {
      name,
      email,
      phone,
      company,
      subject,
      message,
      sector: sectorInfo.name,
      timestamp: new Date().toISOString()
    });

    console.log(`${sectorInfo.name} sektörü form işlemi tamamlandı.`);

    res.status(200).json({
      success: true,
      message: `Talebiniz başarıyla ${sectorInfo.name} departmanına iletildi. En kısa sürede sizinle iletişime geçeceğiz.`
    });

  } catch (error) {
    console.error(`${sectorInfo.name} form hatası:`, error);
    res.status(500).json({
      success: false,
      error: `Talebiniz gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.`,
      code: 'SERVER_ERROR',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Hukuk Hizmetleri Form Endpoint
app.post('/api/forms/legal', sectorFormLimiter, async (req, res) => {
  console.log('Legal form endpoint çağrıldı, e-posta adresi:', process.env.EMAIL_LEGAL);
  await handleSectorForm(req, res, {
    name: 'Hukuk Hizmetleri',
    email: process.env.EMAIL_LEGAL, // legal@iletisimgroup.com
    color: '#dc2626' // Kırmızı
  });
});

// İnşaat Form Endpoint
app.post('/api/forms/construction', sectorFormLimiter, async (req, res) => {
  await handleSectorForm(req, res, {
    name: 'İnşaat',
    email: process.env.EMAIL_CONSTRUCTION, // insaat@iletisimgroup.com
    color: '#ea580c' // Turuncu
  });
});

// Ofis ve Gayrimenkul Form Endpoint
app.post('/api/forms/realestate', sectorFormLimiter, async (req, res) => {
  await handleSectorForm(req, res, {
    name: 'Ofis ve Gayrimenkul',
    email: process.env.EMAIL_REALESTATE, // gayrimenkul@iletisimgroup.com
    color: '#16a34a' // Yeşil
  });
});

// Ticaret ve İthalat Form Endpoint
app.post('/api/forms/trade', sectorFormLimiter, async (req, res) => {
  await handleSectorForm(req, res, {
    name: 'Ticaret ve İthalat',
    email: process.env.EMAIL_TRADE, // ticaret@iletisimgroup.com
    color: '#7c3aed' // Mor
  });
});

// İletişim Form Endpoint (Ana iletişim formu için ayrı)
app.post('/api/forms/communication', sectorFormLimiter, async (req, res) => {
  await handleSectorForm(req, res, {
    name: 'İletişim',
    email: process.env.EMAIL_COMMUNICATION, // iletisim@iletisimgroup.com
    color: '#0ea5e9' // Mavi
  });
});

// Server'ı başlat
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
  console.log(`Ortam: ${process.env.NODE_ENV || 'development'}`);
  console.log(`CORS origin: ${JSON.stringify(corsOptions.origin)}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM alındı. Server kapatılıyor...');
  process.exit(0);
});

module.exports = app;
