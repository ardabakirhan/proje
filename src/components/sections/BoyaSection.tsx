import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Droplets, Shield, ArrowRight, Sparkles, Paintbrush } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const BoyaSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Palette,
      title: t('boya.features.colorRange.title'),
      description: t('boya.features.colorRange.description'),
      color: 'text-pink-600'
    },
    {
      icon: Droplets,
      title: t('boya.features.ecoFriendly.title'),
      description: t('boya.features.ecoFriendly.description'),
      color: 'text-green-600'
    },
    {
      icon: Shield,
      title: t('boya.features.durability.title'),
      description: t('boya.features.durability.description'),
      color: 'text-blue-600'
    },
    {
      icon: Sparkles,
      title: t('boya.features.specialEffects.title'),
      description: t('boya.features.specialEffects.description'),
      color: 'text-purple-600'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6"
          >
            {t('boya.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-secondary-600 max-w-4xl mx-auto"
          >
            {t('boya.description')}
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-secondary-100"
              >
                <div className={`w-16 h-16 rounded-lg bg-opacity-10 flex items-center justify-center mb-6 ${feature.color.replace('text-', 'bg-')}/10 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 ${feature.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-secondary-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                <button className="group/btn flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors">
                  <span>{t('common.learnMore')}</span>
                  <ArrowRight 
                    size={16} 
                    className="group-hover/btn:translate-x-1 transition-transform duration-300" 
                  />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-secondary-100"
        >
          <div className="text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Paintbrush className="w-10 h-10 text-primary-600" />
            </div>
            
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">
              {t('boya.cta.title')}
            </h3>
            
            <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
              {t('boya.cta.description')}
            </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary text-lg px-8 py-4">
                {t('boya.cta.catalogBtn')}
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                {t('boya.cta.consultationBtn')}
              </button>
            </div>
            
            <div className="mt-8 p-6 bg-primary-50 rounded-xl">
              <p className="text-primary-700 font-medium">
                {t('boya.stats')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BoyaSection;
