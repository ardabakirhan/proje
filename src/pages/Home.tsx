import React from 'react';
import CompanyOverviewSection from '../components/sections/CompanyOverviewSection';
import ServiceDirectorySection from '../components/sections/ServiceDirectorySection';
import CompactNewsSection from '../components/sections/CompactNewsSection';
import ContactSection from '../components/sections/ContactSection';
import PostsList from '../components/common/PostsList';

const Home: React.FC = () => {
  return (
    <div>
      <CompanyOverviewSection />
      <ServiceDirectorySection />
      <PostsList />
      <CompactNewsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
