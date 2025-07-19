import React from 'react';
import CompanyOverviewSection from '../components/sections/CompanyOverviewSection';
import ServiceDirectorySection from '../components/sections/ServiceDirectorySection';
// ...existing code...
import ContactSection from '../components/sections/ContactSection';

const Home: React.FC = () => {
  return (
    <div>
      <CompanyOverviewSection />
      <ServiceDirectorySection />
// ...existing code...
      <ContactSection />
    </div>
  );
};

export default Home;
