import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HardHat, Building2, Hammer, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Insaat: React.FC = () => {
  const { t } = useLanguage();
  const services = [
    {
      icon: Building2,
      title: t('constructionPage.services.residential.title'),
      description: t('constructionPage.services.residential.description')
    },
    {
      icon: HardHat,
      title: t('constructionPage.services.commercial.title'),
      description: t('constructionPage.services.commercial.description')
    },
    {
      icon: Hammer,
      title: t('constructionPage.services.renovation.title'),
      description: t('constructionPage.services.renovation.description')
    },
    {
      icon: Shield,
      title: t('constructionPage.services.infrastructure.title'),
      description: t('constructionPage.services.infrastructure.description')
    }
  ];

  const projects = [
    {
      title: t('constructionPage.projects.items.towers.title'),
      category: t('constructionPage.projects.items.towers.category'),
      description: t('constructionPage.projects.items.towers.description'),
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center'
    },
    {
      title: t('constructionPage.projects.items.greenValley.title'),
      category: t('constructionPage.projects.items.greenValley.category'),
      description: t('constructionPage.projects.items.greenValley.description'),
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center'
    },
    {
      title: t('constructionPage.projects.items.ringRoad.title'),
      category: t('constructionPage.projects.items.ringRoad.category'),
      description: t('constructionPage.projects.items.ringRoad.description'),
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&crop=center'
    },
    {
      title: t('constructionPage.projects.items.techCampus.title'),
      category: t('constructionPage.projects.items.techCampus.category'),
      description: t('constructionPage.projects.items.techCampus.description'),
      image: 'https://images.unsplash.com/photo-1541976590-713941681591?w=800&h=600&fit=crop&crop=center'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-900 to-orange-700 text-white py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&crop=center" 
            alt="İnşaat ve Yapı Projeleri Arka Plan"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 to-orange-700/80"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              {t('constructionPage.hero.title')} <span className="text-brand-yellow">{t('constructionPage.hero.subtitle')}</span>
            </h1>
            <p className="text-xl text-orange-100 mb-8">
              {t('constructionPage.hero.description')}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('constructionPage.services.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('constructionPage.services.subtitle')}
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
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon size={32} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('constructionPage.projects.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('constructionPage.projects.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
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
                  <div className="text-sm text-orange-600 font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Sayılarla İletişim İnşaat</h2>
            <p className="text-xl text-orange-200">
              5 yıllık deneyimimizle ortaya koyduğumuz başarı
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-4xl font-bold text-brand-yellow mb-2">200+</div>
              <div className="text-orange-200">Tamamlanan Proje</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-brand-yellow mb-2">5000+</div>
              <div className="text-orange-200">İnşa Edilen Konut</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-brand-yellow mb-2">1M+</div>
              <div className="text-orange-200">m² İnşaat Alanı</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-brand-yellow mb-2">5+</div>
              <div className="text-orange-200">Yıl Deneyim</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Kalite ve Güvenlik Önceliğimiz
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Her projemizde en yüksek kalite standartlarını uyguluyoruz. 
                İSO sertifikalarımız ve deneyimli ekibimizle güvenli inşaat garantisi veriyoruz.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mr-4"></div>
                  <span className="text-gray-700">ISO 9001 Kalite Yönetim Sistemi</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mr-4"></div>
                  <span className="text-gray-700">İSO 14001 Çevre Yönetim Sistemi</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mr-4"></div>
                  <span className="text-gray-700">OHSAS 18001 İş Sağlığı ve Güvenliği</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mr-4"></div>
                  <span className="text-gray-700">Zamanında teslim garantisi</span>
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
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&crop=center" 
                  alt="İnşaat ve Yapı Projeleri - Profesyonel inşaat hizmetleri"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              İnşaat Projeniz İçin Hazır mısınız?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Hayalinizdeki yapıyı gerçeğe dönüştürmek için bizimle iletişime geçin.
            </p>
            <Link 
              to="/form/insaat"
              className="inline-block bg-brand-yellow hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Proje Başlatalım
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Insaat;
