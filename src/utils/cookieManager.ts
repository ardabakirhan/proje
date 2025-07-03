// Cookie Consent Management Utilities
// GDPR and KVKK compliant cookie handling

export interface CookieConsent {
  essential: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
  timestamp: number;
  version: string;
}

export interface CookieCategory {
  id: 'essential' | 'analytics' | 'functional' | 'marketing';
  name: string;
  description: string;
  required: boolean;
  enabled: boolean;
  purposes: string[];
  cookies: string[];
}

// Global type declarations for external scripts
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
    fbq: {
      (...args: unknown[]): void;
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[];
      push?: (...args: unknown[]) => void;
      loaded?: boolean;
      version?: string;
    };
  }
}

export class CookieManager {
  private static readonly CONSENT_COOKIE_NAME = 'userConsent';
  private static readonly CONSENT_VERSION = '1.0';
  private static readonly GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID'; // Replace with actual ID
  private static readonly FB_PIXEL_ID = 'FB_PIXEL_ID'; // Replace with actual ID
  
  /**
   * Get existing user consent from storage
   */
  static getConsent(): CookieConsent | null {
    try {
      // Try localStorage first
      const localConsent = localStorage.getItem(this.CONSENT_COOKIE_NAME);
      if (localConsent) {
        return JSON.parse(localConsent);
      }
      
      // Fallback to cookie
      const cookieConsent = this.getCookieValue(this.CONSENT_COOKIE_NAME);
      if (cookieConsent) {
        return JSON.parse(decodeURIComponent(cookieConsent));
      }
      
      return null;
    } catch (error) {
      console.error('Error reading cookie consent:', error);
      return null;
    }
  }
  
  /**
   * Save user consent preferences
   */
  static setConsent(consent: Omit<CookieConsent, 'timestamp' | 'version'>): void {
    const fullConsent: CookieConsent = {
      ...consent,
      timestamp: Date.now(),
      version: this.CONSENT_VERSION
    };
    
    try {
      // Save to localStorage
      localStorage.setItem(this.CONSENT_COOKIE_NAME, JSON.stringify(fullConsent));
      
      // Save to cookie (expires in 1 year)
      const expiryDate = new Date();
      expiryDate.setFullYear(expiryDate.getFullYear() + 1);
      
      document.cookie = `${this.CONSENT_COOKIE_NAME}=${encodeURIComponent(JSON.stringify(fullConsent))}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax; Secure`;
      
      // Apply consent immediately
      this.applyConsent(fullConsent);
      
      // Dispatch custom event for other components
      window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { 
        detail: fullConsent 
      }));
      
    } catch (error) {
      console.error('Error saving cookie consent:', error);
    }
  }
  
  /**
   * Check if user has given consent
   */
  static hasConsent(): boolean {
    return this.getConsent() !== null;
  }
  
  /**
   * Apply consent settings to activate/deactivate tracking
   */
  static applyConsent(consent: CookieConsent): void {
    // Set Google Analytics consent
    this.setGoogleAnalyticsConsent(consent.analytics);
    
    // Set marketing consent (Facebook Pixel, Google Ads)
    this.setMarketingConsent(consent.marketing);
    
    // Handle functional cookies
    if (!consent.functional) {
      this.clearFunctionalCookies();
    }
    
    // Log consent application
    console.log('Cookie consent applied:', {
      analytics: consent.analytics,
      marketing: consent.marketing,
      functional: consent.functional
    });
  }
  
  /**
   * Initialize Google Analytics based on consent
   */
  private static setGoogleAnalyticsConsent(granted: boolean): void {
    if (granted) {
      this.enableGoogleAnalytics();
    } else {
      this.disableGoogleAnalytics();
    }
  }
  
  /**
   * Enable Google Analytics tracking
   */
  private static enableGoogleAnalytics(): void {
    // Update consent if gtag is already loaded
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
    
    // Load Google Analytics if not already loaded
    if (!document.querySelector('#gtag-script') && this.GA_MEASUREMENT_ID !== 'GA_MEASUREMENT_ID') {
      const script = document.createElement('script');
      script.id = 'gtag-script';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${this.GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);
      
      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function(...args: unknown[]) { window.dataLayer.push(args); };
        window.gtag('js', new Date());
        window.gtag('config', this.GA_MEASUREMENT_ID, {
          anonymize_ip: true, // GDPR compliance
          allow_google_signals: false // Disable advertising features
        });
      };
    }
  }
  
  /**
   * Disable Google Analytics tracking
   */
  private static disableGoogleAnalytics(): void {
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
    
    // Clear Google Analytics cookies
    this.deleteCookie('_ga');
    this.deleteCookie('_ga_' + this.GA_MEASUREMENT_ID);
    this.deleteCookie('_gid');
    this.deleteCookie('_gat');
    this.deleteCookie('_gat_gtag_' + this.GA_MEASUREMENT_ID);
  }
  
  /**
   * Set marketing consent for Facebook Pixel and Google Ads
   */
  private static setMarketingConsent(granted: boolean): void {
    if (granted) {
      this.enableMarketingTracking();
    } else {
      this.disableMarketingTracking();
    }
  }
  
  /**
   * Enable marketing tracking (Facebook Pixel, Google Ads)
   */
  private static enableMarketingTracking(): void {
    // Enable Facebook Pixel
    if (window.fbq) {
      window.fbq('consent', 'grant');
    } else if (this.FB_PIXEL_ID !== 'FB_PIXEL_ID') {
      // Load Facebook Pixel
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(script);
        script.onload = () => {
        window.fbq = function(...args: unknown[]) {
          if (window.fbq.callMethod) {
            return window.fbq.callMethod!(...args);
          } else {
            window.fbq.queue!.push(args);
          }
        };
        window.fbq.push = window.fbq;
        window.fbq.loaded = true;
        window.fbq.version = '2.0';
        window.fbq.queue = [];
        window.fbq('init', this.FB_PIXEL_ID);
        window.fbq('track', 'PageView');
      };
    }
    
    // Enable Google Ads
    if (window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted'
      });
    }
  }
  
  /**
   * Disable marketing tracking
   */
  private static disableMarketingTracking(): void {
    // Disable Facebook Pixel
    if (window.fbq) {
      window.fbq('consent', 'revoke');
    }
    
    // Disable Google Ads
    if (window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
    }
    
    // Clear marketing cookies
    this.deleteCookie('_fbp');
    this.deleteCookie('_fbc');
    this.deleteCookie('fr');
    this.deleteCookie('sb');
    this.deleteCookie('wd');
  }
  
  /**
   * Clear functional cookies
   */
  private static clearFunctionalCookies(): void {
    const functionalCookies = [
      'user_preferences',
      'theme',
      'language_override',
      'form_data',
      'ui_settings'
    ];
    
    functionalCookies.forEach(cookie => this.deleteCookie(cookie));
  }
  
  /**
   * Delete a specific cookie
   */
  private static deleteCookie(name: string): void {
    // Delete from current domain
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;
    
    // For wildcard domains
    const parts = window.location.hostname.split('.');
    while (parts.length > 1) {
      const domain = '.' + parts.join('.');
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
      parts.shift();
    }
  }
  
  /**
   * Get cookie value by name
   */
  private static getCookieValue(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || null;
    }
    return null;
  }
  
  /**
   * Clear all consent and cookies
   */
  static clearAllConsent(): void {
    // Clear localStorage
    localStorage.removeItem(this.CONSENT_COOKIE_NAME);
    
    // Clear consent cookie
    this.deleteCookie(this.CONSENT_COOKIE_NAME);
    
    // Clear all tracking cookies
    this.disableGoogleAnalytics();
    this.disableMarketingTracking();
    this.clearFunctionalCookies();
    
    // Dispatch event
    window.dispatchEvent(new CustomEvent('cookieConsentCleared'));
  }
  
  /**
   * Check if consent needs to be updated (version check)
   */
  static needsConsentUpdate(): boolean {
    const consent = this.getConsent();
    return !consent || consent.version !== this.CONSENT_VERSION;
  }
  
  /**
   * Get consent summary for display
   */
  static getConsentSummary(): { [key: string]: boolean } {
    const consent = this.getConsent();
    if (!consent) {
      return {
        essential: true,
        analytics: false,
        functional: false,
        marketing: false
      };
    }
    
    return {
      essential: consent.essential,
      analytics: consent.analytics,
      functional: consent.functional,
      marketing: consent.marketing
    };
  }
}

// Initialize Google Analytics with default denied consent
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(...args: unknown[]) { window.dataLayer.push(args); };
  
  // Set default consent to denied
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });
  
  // Apply existing consent on page load
  const existingConsent = CookieManager.getConsent();
  if (existingConsent) {
    CookieManager.applyConsent(existingConsent);
  }
}
