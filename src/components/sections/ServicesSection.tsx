import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Palette, Home, Package, Truck } from 'lucide-react';
import Button from '../common/Button';
import { useLanguage } from '../../contexts/LanguageContext';

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
    // Ana İş Alanlarımız - Yeni 5 Sektör
  const businessAreas = [
    {
      icon: Zap,
      title: t('elektrik.title'),
      description: t('elektrik.description'),
      features: [
        t('elektrik.features.powerSystems.title'),
        t('elektrik.features.safety.title'),
        t('elektrik.features.automation.title'),
        t('elektrik.features.energyStorage.title')
      ],
      color: 'from-yellow-500 to-yellow-600',
      link: '/elektrik'
    },
    {
      icon: Palette,
      title: t('boya.title'),
      description: t('boya.description'),
      features: [
        t('boya.features.colorRange.title'),
        t('boya.features.ecoFriendly.title'),
        t('boya.features.durability.title'),
        t('boya.features.specialEffects.title')
      ],
      color: 'from-green-500 to-green-600',
      link: '/boya'
    },
    {
      icon: Home,
      title: t('mobilya.title'),
      description: t('mobilya.description'),
      features: [
        t('mobilya.features.customDesign.title'),
        t('mobilya.features.craftsmanship.title'),
        t('mobilya.features.sustainableMaterials.title'),
        t('mobilya.features.modernStyle.title')
      ],
      color: 'from-blue-500 to-blue-600',
      link: '/mobilya'
    },
    {
      icon: Package,
      title: t('ambalaj.title'),
      description: t('ambalaj.description'),
      features: [
        t('ambalaj.features.innovative.title'),
        t('ambalaj.features.sustainable.title'),
        t('ambalaj.features.protection.title'),
        t('ambalaj.features.biodegradable.title')
      ],
      color: 'from-purple-500 to-purple-600',
      link: '/ambalaj'
    },
    {
      icon: Truck,
      title: t('lojistik.title'),
      description: t('lojistik.description'),
      features: [
        t('lojistik.features.transport.title'),
        t('lojistik.features.tracking.title'),
        t('lojistik.features.fastDelivery.title'),
        t('lojistik.features.globalNetwork.title')
      ],
      color: 'from-red-500 to-red-600',
      link: '/lojistik'
    }
  ];
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-brand-charcoal mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-brand-gray-medium max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </motion.div>        {/* Ana İş Alanları - 5 Yeni Sektör */}
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {businessAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative p-6">
                {/* Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-brand-charcoal mb-3">
                  {area.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {area.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {area.features.slice(0, 2).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 text-sm">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${area.color} rounded-full mr-2`}></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <a 
                  href={area.link}
                  className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${area.color} text-white font-semibold rounded-lg hover:shadow-lg transform transition-all duration-300 group-hover:scale-105 text-sm`}
                >
                  Detayları İncele
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-brand-yellow to-brand-yellow-light rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-brand-charcoal mb-4">
              {t('services.cta.title')}
            </h3>
            <p className="text-lg text-brand-charcoal/80 mb-8 max-w-2xl mx-auto">
              {t('services.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-brand-charcoal hover:bg-brand-charcoal-light text-white shadow-lg"
              >
                {t('common.contactUs')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white"
              >
                {t('services.viewAll')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
