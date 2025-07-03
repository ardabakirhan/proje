import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';
import MockLiveChat from '../common/MockLiveChat';
import MergedHeroHeader from './MergedHeroHeader';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      {isHomePage ? (
        <>
          <MergedHeroHeader />
          <main className="flex-1">
            {children}
          </main>
        </>
      ) : (
        <>
          <Header />
          <main className="flex-1 pt-28">
            {children}
          </main>
        </>      )}
      <Footer />
      <ScrollToTop />
      <MockLiveChat />
    </div>
  );
};

export default Layout;
