/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    // Load Tawk.to only once
    if (typeof window !== 'undefined' && !document.querySelector('script[src*="tawk.to"]')) {
      // Initialize Tawk.to
      (window as any).Tawk_API = (window as any).Tawk_API || {};
      (window as any).Tawk_LoadStart = new Date();

      // Create script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://embed.tawk.to/YOUR_WIDGET_ID/1abc12def';
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      
      document.head.appendChild(script);

      // Configure for İletişim Group
      script.onload = () => {
        if ((window as any).Tawk_API) {
          (window as any).Tawk_API.customStyle = {
            visibility: {
              desktop: { position: 'br', xOffset: 30, yOffset: 30 },
              mobile: { position: 'br', xOffset: 15, yOffset: 15 }
            },
            widget: {
              color: { theme: '#0ea5e9', launcherText: '#FFFFFF' }
            }
          };
        }
      };
    }
  }, []);

  return null;
};

export default TawkToChat;
