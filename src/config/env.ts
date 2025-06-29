/**
 * Environment configuration utilities
 * Centralized access to environment variables with defaults
 */

// API Configuration
export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
  timeout: 10000, // 10 seconds
} as const;

// Application Configuration
export const APP_CONFIG = {
  name: import.meta.env.VITE_APP_NAME || 'İletişim Group',
  version: import.meta.env.VITE_APP_VERSION || '1.0.0',
  description: import.meta.env.VITE_APP_DESCRIPTION || 'Modern kurumsal çözümler ve hizmetler',
} as const;

// Feature Flags
export const FEATURES = {
  search: import.meta.env.VITE_ENABLE_SEARCH !== 'false',
  newsletter: import.meta.env.VITE_ENABLE_NEWSLETTER !== 'false',
  contactForm: import.meta.env.VITE_ENABLE_CONTACT_FORM !== 'false',
  jobApplications: import.meta.env.VITE_ENABLE_JOB_APPLICATIONS !== 'false',
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: import.meta.env.VITE_SOCIAL_FACEBOOK || 'https://facebook.com/iletisimgroup',
  linkedin: import.meta.env.VITE_SOCIAL_LINKEDIN || 'https://linkedin.com/company/iletisimgroup',
  twitter: import.meta.env.VITE_SOCIAL_TWITTER || 'https://twitter.com/iletisimgroup',
  instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM || 'https://instagram.com/iletisimgroup',
  youtube: import.meta.env.VITE_SOCIAL_YOUTUBE || 'https://youtube.com/@iletisimgroup',
} as const;

// Contact Information
export const CONTACT_INFO = {
  email: import.meta.env.VITE_CONTACT_EMAIL || 'info@iletisimgroup.com.tr',
  phone: import.meta.env.VITE_CONTACT_PHONE || '+90 212 123 45 67',
  address: import.meta.env.VITE_CONTACT_ADDRESS || 'İstanbul, Türkiye',
} as const;

// Analytics Configuration
export const ANALYTICS = {
  googleAnalyticsId: import.meta.env.VITE_GOOGLE_ANALYTICS_ID,
  googleTagManagerId: import.meta.env.VITE_GOOGLE_TAG_MANAGER_ID,
} as const;

// Development utilities
export const isDevelopment = import.meta.env.DEV;
export const isProduction = import.meta.env.PROD;

// Utility functions
export const getEnvVar = (key: string, defaultValue?: string): string => {
  const value = import.meta.env[key];
  if (value === undefined && defaultValue === undefined) {
    console.warn(`Environment variable ${key} is not defined`);
  }
  return value || defaultValue || '';
};

export const getRequiredEnvVar = (key: string): string => {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`Required environment variable ${key} is not defined`);
  }
  return value;
};

// Configuration validation
export const validateConfig = (): boolean => {
  const required = [];
  
  if (!API_CONFIG.baseUrl) {
    required.push('VITE_API_URL');
  }
  
  if (required.length > 0) {
    console.warn('Missing required environment variables:', required);
    return false;
  }
  
  return true;
};

// Export all configurations
export default {
  api: API_CONFIG,
  app: APP_CONFIG,
  features: FEATURES,
  social: SOCIAL_LINKS,
  contact: CONTACT_INFO,
  analytics: ANALYTICS,
  isDevelopment,
  isProduction,
};
