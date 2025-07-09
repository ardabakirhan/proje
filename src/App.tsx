import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import ErrorBoundary from './components/common/ErrorBoundary';
import CookieConsent from './components/common/CookieConsent';
import { LanguageProvider } from './contexts/LanguageContext';
import { CookieManager } from './utils/cookieManager';
import CookieAnalyticsService from './services/cookieAnalytics';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Hukuk from './pages/Hukuk';
import OfisGayrimenkul from './pages/OfisGayrimenkul';
import Media from './pages/Media';
import Trade from './pages/Trade';
import Insaat from './pages/Insaat';
import SectorForm from './pages/SectorForm';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import NotFound from './pages/NotFound';

function App() {
  useEffect(() => {
    // Analytics initialization
    const initializeAnalytics = async () => {
      // Sayfa yüklendiğinde consent durumunu kontrol et
      const consent = CookieManager.getConsent();
      
      if (consent?.analytics) {
        // Analytics consent verilmişse page view'i track et
        await CookieManager.trackPageView();
        
        // Scroll tracking'i başlat
        const cleanupScrollTracking = CookieAnalyticsService.trackScrollDepth();
        
        // Cleanup function'ı sayfadan çıkarken çağır
        return cleanupScrollTracking;
      }
    };

    initializeAnalytics();

    // URL değişimlerini dinle (SPA routing için)
    const handleLocationChange = () => {
      if (CookieManager.getConsent()?.analytics) {
        CookieManager.trackPageView();
      }
    };

    // PopState event'ini dinle (browser back/forward)
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hakkimizda" element={<About />} />
              <Route path="/hukuk" element={<Hukuk />} />
              <Route path="/ofis-gayrimenkul" element={<OfisGayrimenkul />} />
              <Route path="/media" element={<Media />} />
              <Route path="/trade" element={<Trade />} />
              <Route path="/insaat" element={<Insaat />} />
              <Route path="/iletisim" element={<Contact />} />
              <Route path="/form/:sector" element={<SectorForm />} />
              <Route path="/gizlilik-politikasi" element={<PrivacyPolicy />} />
              <Route path="/cerez-politikasi" element={<CookiePolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
          <CookieConsent />
        </Router>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
