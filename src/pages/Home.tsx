import React from 'react';
import CompanyOverviewSection from '../components/sections/CompanyOverviewSection';
import ServiceDirectorySection from '../components/sections/ServiceDirectorySection';
import ContactSection from '../components/sections/ContactSection';

const Home: React.FC = () => {
  return (
    <div>
      <CompanyOverviewSection />
      <ServiceDirectorySection />
      <ContactSection />
    </div>
  );
};

export default Home;
