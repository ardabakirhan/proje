import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ErrorBoundary from './components/common/ErrorBoundary';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/Home';
import YatirimciIliskileri from './pages/YatirimciIliskileri';
import MedyaMerkezi from './pages/MedyaMerkezi';
import Surdurulebilirlik from './pages/Surdurulebilirlik';
import IletisimdeHayat from './pages/IletisimdeHayat';
import NedenIletisimGroup from './pages/NedenIletisimGroup';
import IhbarBildirim from './pages/IhbarBildirim';
import BilgiToplumuHizmetleri from './pages/BilgiToplumuHizmetleri';
import KisiselVerilerinKorunmasi from './pages/KisiselVerilerinKorunmasi';
import Cekince from './pages/Cekince';
import OnemliUyari from './pages/OnemliUyari';
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
import TumHizmetlerimiz from './pages/TumHizmetlerimiz';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/yatirimci-iliskileri" element={<YatirimciIliskileri />} />
              <Route path="/medya-merkezi" element={<MedyaMerkezi />} />
              <Route path="/surdurulebilirlik" element={<Surdurulebilirlik />} />
              <Route path="/iletisimde-hayat" element={<IletisimdeHayat />} />
              <Route path="/" element={<Home />} />
              <Route path="/hakkimizda" element={<About />} />
              <Route path="/hukuk" element={<Hukuk />} />
              <Route path="/ofis-gayrimenkul" element={<OfisGayrimenkul />} />
              <Route path="/media" element={<Media />} />
              <Route path="/trade" element={<Trade />} />
              <Route path="/insaat" element={<Insaat />} />
              <Route path="/iletisim" element={<Contact />} />
              <Route path="/bilgi-toplumu-hizmetleri" element={<BilgiToplumuHizmetleri />} />
              <Route path="/kisisel-verilerin-korunmasi" element={<KisiselVerilerinKorunmasi />} />
              <Route path="/cekince" element={<Cekince />} />
              <Route path="/onemli-uyari" element={<OnemliUyari />} />
              <Route path="/neden-iletisim-group" element={<NedenIletisimGroup />} />
              <Route path="/ihbar-bildirim" element={<IhbarBildirim />} />
              <Route path="/tum-hizmetlerimiz" element={<TumHizmetlerimiz />} />
              <Route path="/form/:sector" element={<SectorForm />} />
              <Route path="/gizlilik-politikasi" element={<PrivacyPolicy />} />
              <Route path="/cerez-politikasi" element={<CookiePolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
