import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, Globe, Package, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Trade: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Globe,
      title: t('trade.services.import.title'),
      description: t('trade.services.import.description')
    },
    {
      icon: Truck,
      title: t('trade.services.export.title'),
      description: t('trade.services.export.description')
    },
    {
      icon: Package,
      title: t('trade.services.logistics.title'),
      description: t('trade.services.logistics.description')
    },
    {
      icon: TrendingUp,
      title: t('trade.services.consulting.title'),
      description: t('trade.services.consulting.description')
    }
  ];

  const products = [
    {
      category: t('trade.products.electronics.title'),
      items: ['Akıllı Telefonlar', 'Bilgisayar Donanımları', 'Ev Elektroniği'],
      description: t('trade.products.electronics.description'),
      image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=300&fit=crop&crop=center'
    },
    {
      category: t('trade.products.textile.title'),
      items: ['Hazır Giyim', 'Ev Tekstili', 'Teknik Tekstil'],
      description: t('trade.products.textile.description'),
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop&crop=center'
    },
    {
      category: t('trade.products.food.title'),
      items: ['Organik Ürünler', 'Baharatlar', 'İşlenmiş Gıdalar'],
      description: t('trade.products.food.description'),
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop&crop=center'
    },
    {
      category: t('trade.products.industrial.title'),
      items: ['Makine Parçaları', 'Ham Maddeler', 'Kimyasal Ürünler'],
      description: t('trade.products.industrial.description'),
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-500 text-white py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop&crop=center" 
            alt="Global Ticaret ve İhracat Arka Plan"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 to-blue-500/70"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-brand-yellow">{t('trade.title')}</span>
            </h1>
            <p className="text-xl text-blue-50 mb-8">
              {t('trade.subtitle')}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('trade.services.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('trade.services.subtitle')}
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

      {/* Products Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('trade.products.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('trade.products.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.category}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.category}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <ul className="space-y-2">
                    {product.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-brand-yellow rounded-full mr-3"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Global Erişimimiz</h2>
            <p className="text-xl text-blue-100">
              Dünya çapında güvenilir iş ortaklarımızla geniş ticaret ağımız
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-4xl font-bold text-brand-yellow mb-2">{t('trade.stats.countries').split(' ')[0]}</div>
              <div className="text-blue-100">{t('trade.stats.countries').split(' ')[1]}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-brand-yellow mb-2">{t('trade.stats.volume').split(' ')[0]}</div>
              <div className="text-blue-100">{t('trade.stats.volume').split(' ')[1]} {t('trade.stats.volume').split(' ')[2]}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-brand-yellow mb-2">{t('trade.stats.partners').split(' ')[0]}</div>
              <div className="text-blue-100">{t('trade.stats.partners').split(' ')[1]} {t('trade.stats.partners').split(' ')[2]}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-brand-yellow mb-2">{t('trade.stats.experience').split(' ')[0]}</div>
              <div className="text-blue-100">{t('trade.stats.experience').split(' ')[1]} {t('trade.stats.experience').split(' ')[2]}</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Neden İletişim Group Ticaret?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                5 yılı aşkın deneyimimiz ve global ticaret ağımızla, 
                sizin için en güvenilir ve karlı ticaret çözümlerini sunuyoruz.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mr-4"></div>
                  <span className="text-gray-700">Güvenilir global tedarikçi ağı</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mr-4"></div>
                  <span className="text-gray-700">Rekabetçi fiyat politikası</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mr-4"></div>
                  <span className="text-gray-700">Hızlı ve güvenli lojistik</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full mr-4"></div>
                  <span className="text-gray-700">7/24 müşteri desteği</span>
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
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&crop=center" 
                  alt="Global Ticaret ve Lojistik - Dünya çapında ticaret hizmetleri"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
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
          >              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('trade.cta.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('trade.cta.description')}
              </p>
              <Link 
                to="/form/ticaret"
                className="inline-block bg-brand-yellow hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                {t('trade.cta.contactBtn')}
              </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Trade;
