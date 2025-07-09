import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Megaphone, Palette } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Media: React.FC = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Camera,
      title: t('mediaPage.services.photography.title'),
      description: t('mediaPage.services.photography.description')
    },
    {
      icon: Video,
      title: t('mediaPage.services.video.title'),
      description: t('mediaPage.services.video.description')
    },
    {
      icon: Megaphone,
      title: t('mediaPage.services.marketing.title'),
      description: t('mediaPage.services.marketing.description')
    },
    {
      icon: Palette,
      title: t('mediaPage.services.design.title'),
      description: t('mediaPage.services.design.description')
    }
  ];

  const portfolio = [
    {
      title: t('mediaPage.portfolio.projects.corporateVideo.title'),
      category: t('mediaPage.portfolio.projects.corporateVideo.category'),
      description: t('mediaPage.portfolio.projects.corporateVideo.description'),
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop&crop=center'
    },
    {
      title: t('mediaPage.portfolio.projects.socialMedia.title'),
      category: t('mediaPage.portfolio.projects.socialMedia.category'),
      description: t('mediaPage.portfolio.projects.socialMedia.description'),
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center'
    },
    {
      title: t('mediaPage.portfolio.projects.productPhotography.title'),
      category: t('mediaPage.portfolio.projects.productPhotography.category'),
      description: t('mediaPage.portfolio.projects.productPhotography.description'),
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop&crop=center'
    },
    {
      title: t('mediaPage.portfolio.projects.corporateIdentity.title'),
      category: t('mediaPage.portfolio.projects.corporateIdentity.category'),
      description: t('mediaPage.portfolio.projects.corporateIdentity.description'),
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&crop=center'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-500 text-white py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop&crop=center" 
            alt="Medya ve İletişim Arka Plan"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-purple-500/50"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              {t('mediaPage.hero.title')}
            </h1>
            <p className="text-xl text-purple-50 mb-8">
              {t('mediaPage.hero.subtitle')}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('mediaPage.services.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('mediaPage.services.subtitle')}
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
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon size={32} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('mediaPage.portfolio.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('mediaPage.portfolio.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="text-sm text-purple-600 font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('mediaPage.process.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('mediaPage.process.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: t('mediaPage.process.discovery.title'), description: t('mediaPage.process.discovery.description') },
              { step: '02', title: t('mediaPage.process.design.title'), description: t('mediaPage.process.design.description') },
              { step: '03', title: t('mediaPage.process.production.title'), description: t('mediaPage.process.production.description') },
              { step: '04', title: t('mediaPage.process.delivery.title'), description: t('mediaPage.process.delivery.description') }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-purple-700 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">{t('mediaPage.cta.title')}</h2>
            <p className="text-xl text-purple-100 mb-8">
              {t('mediaPage.cta.subtitle')}
            </p>
            <button className="bg-brand-yellow hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors">
              {t('mediaPage.cta.button')}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Media;
