import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building, Home, MapPin, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const OfisGayrimenkul: React.FC = () => {
  const { t } = useLanguage();
  const services = [
    {
      icon: Building,
      title: t('realEstatePage.services.officeRental.title'),
      description: t('realEstatePage.services.officeRental.description')
    },
    {
      icon: Home,
      title: t('realEstatePage.services.investment.title'),
      description: t('realEstatePage.services.investment.description')
    },
    {
      icon: MapPin,
      title: t('realEstatePage.services.consulting.title'),
      description: t('realEstatePage.services.consulting.description')
    },
    {
      icon: TrendingUp,
      title: t('realEstatePage.services.analysis.title'),
      description: t('realEstatePage.services.analysis.description')
    }
  ];

  const features = [
    {
      title: t('realEstatePage.features.modernOffice.title'),
      description: t('realEstatePage.features.modernOffice.description'),
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop&crop=center'
    },
    {
      title: t('realEstatePage.features.strategicLocation.title'),
      description: t('realEstatePage.features.strategicLocation.description'),
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center'
    },
    {
      title: t('realEstatePage.features.flexibleSolutions.title'),
      description: t('realEstatePage.features.flexibleSolutions.description'),
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop&crop=center'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-500 text-white py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&crop=center" 
            alt="Modern Ofis ve Gayrimenkul Arka Plan"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/40 to-green-500/50"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-brand-yellow">{t('realEstate.title')}</span>
            </h1>
            <p className="text-xl text-green-50 mb-8">
              {t('realEstate.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('realEstatePage.services.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('realEstatePage.services.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('realEstatePage.features.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('realEstatePage.features.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-4xl font-bold text-brand-yellow mb-2">500+</div>
              <div className="text-green-100">{t('realEstatePage.stats.officeSpaces')}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-brand-yellow mb-2">1000+</div>
              <div className="text-green-100">{t('realEstatePage.stats.happyClients')}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-brand-yellow mb-2">5+</div>
              <div className="text-green-100">{t('realEstatePage.stats.experience')}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-brand-yellow mb-2">100+</div>
              <div className="text-green-100">{t('realEstatePage.stats.projects')}</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('realEstatePage.cta.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('realEstatePage.cta.description')}
            </p>
            <Link 
              to="/form/ofis-gayrimenkul"
              className="inline-block bg-brand-yellow hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              {t('realEstatePage.cta.button')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OfisGayrimenkul;
