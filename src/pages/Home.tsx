import React from 'react';
import CompanyOverviewSection from '../components/sections/CompanyOverviewSection';
import ServiceDirectorySection from '../components/sections/ServiceDirectorySection';
import CompactNewsSection from '../components/sections/CompactNewsSection';
import ContactSection from '../components/sections/ContactSection';

const Home: React.FC = () => {
  return (
    <div>
      <CompanyOverviewSection />
      <ServiceDirectorySection />
      <CompactNewsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
