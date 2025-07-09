import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Scale, Users, FileText, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hukuk: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Scale,
      title: t('legal.services.corporate.title'),
      description: t('legal.services.corporate.description')
    },
    {
      icon: FileText,
      title: t('legal.services.contract.title'),
      description: t('legal.services.contract.description')
    },
    {
      icon: Shield,
      title: t('legal.services.intellectual.title'),
      description: t('legal.services.intellectual.description')
    },
    {
      icon: Users,
      title: t('legal.services.labor.title'),
      description: t('legal.services.labor.description')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-500 text-white py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop&crop=center" 
            alt="Hukuk ve Adalet Arka Plan"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-blue-500/50"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-brand-yellow">{t('legal.title')}</span>
            </h1>
            <p className="text-xl text-blue-50 mb-8">
              {t('legal.subtitle')}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('legal.services.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('legal.services.subtitle')}
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
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('legal.about.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('legal.about.description')}
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mr-4"></div>
                  <span className="text-gray-700">{t('legal.about.feature1')}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mr-4"></div>
                  <span className="text-gray-700">{t('legal.about.feature2')}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mr-4"></div>
                  <span className="text-gray-700">{t('legal.about.feature3')}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mr-4"></div>
                  <span className="text-gray-700">{t('legal.about.feature4')}</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop&crop=center" 
                  alt="Hukuk ve Adalet - Profesyonel hukuki danışmanlık hizmetleri"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('legal.cta.title')}</h2>
            <p className="text-xl text-gray-200 mb-8">
              {t('legal.cta.description')}
            </p>
            <Link 
              to="/form/hukuk"
              className="inline-block bg-brand-yellow hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              {t('legal.cta.contactBtn')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hukuk;
