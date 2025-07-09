const mongoose = require('mongoose');

// Cookie Analytics Schema
const cookieAnalyticsSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    trim: true
  },
  sessionId: {
    type: String,
    required: true,
    trim: true
  },
  eventType: {
    type: String,
    required: true,
    enum: [
      'consent_accept_all',
      'consent_reject_all', 
      'consent_customize',
      'page_view',
      'button_click',
      'form_submit',
      'newsletter_signup',
      'contact_form'
    ]
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true
  },
  consentData: {
    type: mongoose.Schema.Types.Mixed
  },
  userAgent: String,
  ipAddress: String,
  pageUrl: String,
  pageTitle: String,
  referrer: String,
  screenResolution: String,
  language: String,
  timezone: String,
  interactionData: {
    type: mongoose.Schema.Types.Mixed
  }
});

// User Session Schema
const userSessionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    trim: true
  },
  sessionId: {
    type: String,
    required: true,
    trim: true
  },
  firstVisit: {
    type: Date,
    default: Date.now
  },
  lastActivity: {
    type: Date,
    default: Date.now
  },
  visitCount: {
    type: Number,
    default: 1
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

// Page Visits Schema
const pageVisitSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    trim: true
  },
  sessionId: {
    type: String,
    required: true,
    trim: true
  },
  pageUrl: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// Define Consent Schema
const consentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    trim: true
  },
  essential: {
    type: Boolean,
    default: true
  },
  analytics: {
    type: Boolean,
    default: false
  },
  functional: {
    type: Boolean,
    default: false
  },
  marketing: {
    type: Boolean,
    default: false
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  version: {
    type: String,
    default: '1.0'
  }
});

// Add indexes for better performance
cookieAnalyticsSchema.index({ userId: 1, timestamp: -1 });
cookieAnalyticsSchema.index({ sessionId: 1, timestamp: -1 });
cookieAnalyticsSchema.index({ eventType: 1, timestamp: -1 });

// Indexes for user sessions
userSessionSchema.index({ userId: 1, lastActivity: -1 });
userSessionSchema.index({ sessionId: 1 });
userSessionSchema.index({ isActive: 1, lastActivity: -1 });

// Indexes for page visits
pageVisitSchema.index({ userId: 1, timestamp: -1 });
pageVisitSchema.index({ sessionId: 1, timestamp: -1 });
pageVisitSchema.index({ pageUrl: 1, timestamp: -1 });

// Models
const Analytics = mongoose.model('CookieAnalytics', cookieAnalyticsSchema);
const UserSession = mongoose.model('UserSession', userSessionSchema);
const PageVisit = mongoose.model('PageVisit', pageVisitSchema);
const Consent = mongoose.model('Consent', consentSchema);

module.exports = { Analytics, UserSession, PageVisit, Consent };
