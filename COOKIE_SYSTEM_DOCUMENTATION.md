# 🍪 Cookie Consent Management System

## Overview

This is a comprehensive GDPR and KVKK compliant cookie management system for the İletişim Group website. The system provides users with granular control over cookie preferences while ensuring legal compliance.

## Features

### ✅ GDPR & KVKV Compliance
- Full compliance with European GDPR regulations
- Turkish KVKK (Personal Data Protection Law) compliance
- Proper consent management and user rights handling
- Data retention policies and third-party disclosure

### ✅ Cookie Categories
1. **Essential Cookies** (Required)
   - Session management and authentication
   - CSRF protection
   - Language settings
   - Shopping cart data
   - Cookie consent status

2. **Analytics Cookies** (Optional)
   - Google Analytics integration
   - Performance monitoring
   - User behavior analysis
   - Site optimization data

3. **Functional Cookies** (Optional)
   - User interface preferences
   - Form data saving
   - Video player settings
   - Social media integration

4. **Marketing Cookies** (Optional)
   - Facebook Pixel integration
   - Google Ads tracking
   - Retargeting campaigns
   - Personalized advertising

### ✅ User Interface
- Professional corporate design matching brand colors
- Responsive design for all devices
- Animated banner with smooth transitions
- Detailed settings modal with category management
- Export functionality for consent data
- Multilingual support (Turkish/English)

### ✅ Technical Features
- TypeScript implementation with full type safety
- LocalStorage and cookie dual storage
- Dynamic script loading/blocking
- Consent versioning and migration
- Event-driven architecture
- Cross-browser compatibility

## File Structure

```
src/
├── components/common/
│   ├── CookieConsent.tsx          # Main consent banner
│   ├── CookieSettings.tsx         # Detailed settings modal  
│   └── CookieSettingsButton.tsx   # Settings access button
├── utils/
│   └── cookieManager.ts           # Core cookie management utility
├── pages/
│   └── PrivacyPolicy.tsx         # Privacy policy page
└── locales/
    ├── tr.json                    # Turkish translations
    └── en.json                    # English translations
```

## Implementation Details

### Core Components

#### 1. CookieManager Utility (`src/utils/cookieManager.ts`)
- **Purpose**: Core cookie management and tracking script control
- **Key Methods**:
  - `getConsent()`: Retrieve current user consent
  - `setConsent()`: Save user preferences
  - `applyConsent()`: Enable/disable tracking scripts
  - `clearAllConsent()`: Complete consent removal

#### 2. CookieConsent Component (`src/components/common/CookieConsent.tsx`)
- **Purpose**: Main consent banner shown to new users
- **Features**:
  - Auto-show for users without consent
  - Accept All / Reject All / Customize options
  - Smooth animations with Framer Motion
  - Brand-compliant styling

#### 3. CookieSettings Component (`src/components/common/CookieSettings.tsx`)
- **Purpose**: Detailed consent management modal
- **Features**:
  - Category-by-category consent control
  - Detailed information about each cookie type
  - Data retention and third-party provider info
  - Consent export functionality
  - Change tracking and validation

#### 4. CookieSettingsButton Component (`src/components/common/CookieSettingsButton.tsx`)
- **Purpose**: Access point for changing cookie preferences
- **Variants**: Footer integration and floating button options

### Integration Points

#### 1. App.tsx Integration
```tsx
import CookieConsent from './components/common/CookieConsent';

function App() {
  return (
    <Router>
      {/* ... existing routes ... */}
      <CookieConsent />
    </Router>
  );
}
```

#### 2. Footer Integration
```tsx
import CookieSettingsButton from '../common/CookieSettingsButton';

const Footer = () => {
  return (
    <footer>
      {/* ... existing footer content ... */}
      <CookieSettingsButton variant="footer" />
    </footer>
  );
};
```

#### 3. Google Analytics Consent Mode (index.html)
```html
<!-- Google Analytics Consent Mode -->
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied'
  });
</script>
```

## Configuration

### Required Setup Steps

1. **Replace Placeholder IDs**:
   ```typescript
   // In src/utils/cookieManager.ts
   private static readonly GA_MEASUREMENT_ID = 'YOUR_GA_ID'; // Replace with actual Google Analytics ID
   private static readonly FB_PIXEL_ID = 'YOUR_FB_PIXEL_ID'; // Replace with actual Facebook Pixel ID
   ```

2. **Update Privacy Policy URL**:
   ```typescript
   // Update links in components to point to actual privacy policy
   href="/gizlilik-politikasi"
   ```

3. **Configure Domain Settings**:
   ```typescript
   // Update cookie domain settings for production
   document.cookie = `${name}=...; domain=.yourdomain.com; ...`;
   ```

## Testing

### Manual Testing Checklist

- [ ] Cookie banner appears on first visit
- [ ] "Accept All" enables all cookie categories
- [ ] "Reject All" disables non-essential cookies  
- [ ] "Customize Settings" opens detailed modal
- [ ] Settings modal shows current consent status
- [ ] Category toggles work correctly
- [ ] Consent is persisted in localStorage and cookies
- [ ] Page refresh maintains consent state
- [ ] Privacy policy page loads correctly
- [ ] Footer cookie settings button works
- [ ] Mobile responsive design functions properly

### Test Page

A dedicated test page (`cookie-test.html`) is available for comprehensive testing:
- Real-time consent status monitoring
- Cookie and localStorage inspection
- Test different consent scenarios
- Verify data persistence

### Browser Testing

Tested and verified on:
- Chrome 96+
- Firefox 90+
- Safari 14+
- Edge 96+

## Privacy & Legal Compliance

### GDPR Compliance Features
- ✅ Explicit consent required for non-essential cookies
- ✅ Granular consent controls
- ✅ Easy consent withdrawal
- ✅ Clear information about data processing
- ✅ Consent records with timestamps
- ✅ Data retention period disclosure
- ✅ Third-party processor identification

### KVKK Compliance Features
- ✅ Turkish language privacy information
- ✅ Local data protection law compliance
- ✅ User rights documentation
- ✅ Contact information for data protection
- ✅ Consent management in accordance with Turkish regulations

### Data Processing Details
- **Essential Cookies**: 1 year retention
- **Analytics Cookies**: 2 years retention (Google Analytics standard)
- **Functional Cookies**: 1 year retention
- **Marketing Cookies**: 90 days retention

## Troubleshooting

### Common Issues

1. **Cookie Banner Not Showing**
   - Check if consent already exists in localStorage
   - Verify component is imported in App.tsx
   - Check browser console for errors

2. **Consent Not Persisting**
   - Verify localStorage is available
   - Check cookie domain settings
   - Ensure HTTPS in production

3. **Scripts Not Loading/Blocking**
   - Check GA_MEASUREMENT_ID configuration
   - Verify network requests in DevTools
   - Check console for script errors

### Debug Mode

Enable debug logging by adding to localStorage:
```javascript
localStorage.setItem('cookieDebug', 'true');
```

## Performance Considerations

- Lazy loading of tracking scripts
- Minimal bundle size impact (~15KB gzipped)
- Efficient re-renders with React.memo
- LocalStorage caching for fast consent retrieval

## Security Considerations

- SameSite=Lax cookie attribute
- Secure flag for HTTPS environments
- XSS protection for stored consent data
- CSRF token integration for essential cookies

## Future Enhancements

### Planned Features
- [ ] Consent analytics and reporting
- [ ] A/B testing for consent rates
- [ ] Integration with marketing automation
- [ ] Advanced consent geolocation detection
- [ ] Audit trail for consent changes

### Technical Improvements
- [ ] Server-side consent validation
- [ ] GraphQL integration for consent API
- [ ] Advanced consent analytics
- [ ] Automated compliance reporting

## Support & Maintenance

### Regular Tasks
- Monitor consent rates and user preferences
- Update cookie categories as needed
- Review third-party integrations
- Audit compliance with regulatory changes

### Updates Required
- Annual privacy policy review
- Cookie audit and categorization
- Third-party integration updates
- Regulatory compliance monitoring

---

## Contact & Support

For technical support or compliance questions:
- **Technical Issues**: Development Team
- **Legal Compliance**: Legal Department
- **Privacy Questions**: Data Protection Officer

Last Updated: June 2025
Version: 1.0.0
