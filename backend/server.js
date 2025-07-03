import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// Environment variables yükle
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// CORS Configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

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
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Email template
const createEmailTemplate = (formData) => {
  const { name, email, company, subject, message } = formData;
  
  return {
    subject: `${process.env.COMPANY_NAME} - Yeni İletişim Mesajı: ${subject}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #0ea5e9; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f8f9fa; padding: 20px; border: 1px solid #e9ecef; }
          .footer { background: #6c757d; color: white; padding: 15px; border-radius: 0 0 8px 8px; font-size: 12px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #495057; }
          .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border: 1px solid #ced4da; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>${process.env.COMPANY_NAME} - Yeni İletişim Mesajı</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Ad Soyad:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">📧 E-posta:</div>
              <div class="value">${email}</div>
            </div>
            ${company ? `
            <div class="field">
              <div class="label">🏢 Şirket:</div>
              <div class="value">${company}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">📋 Konu:</div>
              <div class="value">${subject}</div>
            </div>
            <div class="field">
              <div class="label">💬 Mesaj:</div>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>Bu mesaj ${process.env.COMPANY_WEBSITE || process.env.COMPANY_NAME} web sitesi üzerinden gönderilmiştir.</p>
            <p>Gönderim Tarihi: ${new Date().toLocaleString('tr-TR')}</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
${process.env.COMPANY_NAME} - Yeni İletişim Mesajı

Ad Soyad: ${name}
E-posta: ${email}
${company ? `Şirket: ${company}\n` : ''}Konu: ${subject}

Mesaj:
${message}

---
Bu mesaj ${process.env.COMPANY_WEBSITE || process.env.COMPANY_NAME} web sitesi üzerinden gönderilmiştir.
Gönderim Tarihi: ${new Date().toLocaleString('tr-TR')}
    `
  };
};

// Otomatik yanıt template
const createAutoReplyTemplate = (name) => {
  return {
    subject: `${process.env.COMPANY_NAME} - Mesajınızı Aldık`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #0ea5e9; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
          .content { background: white; padding: 30px; border: 1px solid #e9ecef; }
          .footer { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; text-align: center; font-size: 14px; color: #6c757d; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>${process.env.COMPANY_NAME}</h2>
          </div>
          <div class="content">
            <h3>Merhaba ${name},</h3>
            <p>Mesajınızı aldık ve en kısa sürede size geri dönüş yapacağız.</p>
            <p>İletişim formunuz başarıyla gönderilmiştir. Genellikle 24 saat içerisinde müşterilerimize geri dönüş yapmaktayız.</p>
            <p>Acil durumlar için doğrudan telefon numaramızdan bize ulaşabilirsiniz.</p>
            <p>İlginiz için teşekkür ederiz.</p>
            <br>
            <p><strong>${process.env.COMPANY_NAME} Ekibi</strong></p>
          </div>
          <div class="footer">
            <p>${process.env.COMPANY_WEBSITE || 'www.iletisimgroup.com'}</p>
            <p>Bu otomatik bir mesajdır, lütfen yanıtlamayınız.</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
Merhaba ${name},

Mesajınızı aldık ve en kısa sürede size geri dönüş yapacağız.

İletişim formunuz başarıyla gönderilmiştir. Genellikle 24 saat içerisinde müşterilerimize geri dönüş yapmaktayız.

Acil durumlar için doğrudan telefon numaramızdan bize ulaşabilirsiniz.

İlginiz için teşekkür ederiz.

${process.env.COMPANY_NAME} Ekibi

---
${process.env.COMPANY_WEBSITE || 'www.iletisimgroup.com'}
Bu otomatik bir mesajdır, lütfen yanıtlamayınız.
    `
  };
};

// Routes

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'İletişim Group Backend API'
  });
});

// Contact form endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, company, subject, message } = req.body;

    // Basit validasyon
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'Gerekli alanlar eksik',
        code: 'MISSING_FIELDS'
      });
    }

    // Email formatı kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Geçersiz e-posta adresi',
        code: 'INVALID_EMAIL'
      });
    }

    const transporter = createTransporter();

    // E-posta şablonları oluştur
    const emailTemplate = createEmailTemplate({ name, email, company, subject, message });
    const autoReplyTemplate = createAutoReplyTemplate(name);

    // Ana e-postayı gönder (size)
    const mainEmailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
      text: emailTemplate.text,
      replyTo: email
    };

    // Otomatik yanıtı gönder (müşteriye)
    const autoReplyOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: autoReplyTemplate.subject,
      html: autoReplyTemplate.html,
      text: autoReplyTemplate.text
    };

    // E-postaları gönder
    await transporter.sendMail(mainEmailOptions);
    await transporter.sendMail(autoReplyOptions);

    res.json({
      success: true,
      message: 'Mesajınız başarıyla gönderildi',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    res.status(500).json({
      success: false,
      error: 'E-posta gönderiminde hata oluştu',
      code: 'EMAIL_SEND_ERROR'
    });
  }
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint bulunamadı',
    code: 'NOT_FOUND'
  });
});

// Error handler
app.use((error, req, res, next) => {
  console.error('Server Error:', error);
  res.status(500).json({
    success: false,
    error: 'Sunucu hatası',
    code: 'INTERNAL_SERVER_ERROR'
  });
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`🚀 İletişim Group Backend API çalışıyor: http://localhost:${PORT}`);
  console.log(`📧 Email service: ${process.env.EMAIL_HOST}`);
  console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL}`);
  console.log(`📝 Contact endpoint: http://localhost:${PORT}/api/contact`);
});

export default app;
