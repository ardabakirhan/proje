import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ErrorBoundary from './components/common/ErrorBoundary';
import CookieConsent from './components/common/CookieConsent';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Elektrik from './pages/Elektrik';
import Boya from './pages/Boya';
import Mobilya from './pages/Mobilya';
import Ambalaj from './pages/Ambalaj';
import Lojistik from './pages/Lojistik';
import LegalDepartment from './pages/LegalDepartment';
import ImportExport from './pages/ImportExport';
import AdvertisingCompany from './pages/AdvertisingCompany';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hakkimizda" element={<About />} />
              <Route path="/hizmetler" element={<Services />} />
              <Route path="/elektrik" element={<Elektrik />} />
              <Route path="/boya" element={<Boya />} />
              <Route path="/mobilya" element={<Mobilya />} />
              <Route path="/ambalaj" element={<Ambalaj />} />
              <Route path="/lojistik" element={<Lojistik />} />
              <Route path="/legal-department" element={<LegalDepartment />} />
              <Route path="/import-export" element={<ImportExport />} />
              <Route path="/advertising-company" element={<AdvertisingCompany />} />
              <Route path="/iletisim" element={<Contact />} />
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
