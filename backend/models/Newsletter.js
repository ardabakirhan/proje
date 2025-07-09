const mongoose = require('mongoose');

const NewsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: 'Geçerli bir e-posta adresi giriniz'
    }
  },
  consent: {
    type: Boolean,
    required: true,
    default: true
  },
  subscribedAt: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  },
  source: {
    type: String,
    default: 'website'
  }
}, {
  timestamps: true
});

// Index'ler artık unique: true ile otomatik oluşturuluyor
// NewsletterSchema.index({ email: 1 });
// NewsletterSchema.index({ subscribedAt: -1 });

module.exports = mongoose.model('Newsletter', NewsletterSchema);
