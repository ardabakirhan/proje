import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Target, Award, TrendingUp, Shield } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const BrandShowcaseSection: React.FC = () => {
  const { t } = useLanguage();
  
  const brandValues = [
    {
      icon: Briefcase,
      title: t('about.brandValues.professionalism.title'),
      description: t('about.brandValues.professionalism.description')
    },
    {
      icon: Users,
      title: t('about.brandValues.partnership.title'),
      description: t('about.brandValues.partnership.description')
    },
    {
      icon: Target,
      title: t('about.brandValues.goalOriented.title'),
      description: t('about.brandValues.goalOriented.description')
    },
    {
      icon: TrendingUp,
      title: t('about.brandValues.continuousImprovement.title'),
      description: t('about.brandValues.continuousImprovement.description')
    },
    {
      icon: Shield,
      title: t('about.brandValues.reliability.title'),
      description: t('about.brandValues.reliability.description')
    },
    {
      icon: Award,
      title: t('about.brandValues.excellence.title'),
      description: t('about.brandValues.excellence.description')
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-gray-light to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f59e0b' fill-opacity='1'%3E%3Cpolygon points='30 10 40 30 30 50 20 30'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-yellow rounded-2xl mb-6 shadow-lg">
            <span className="text-3xl font-bold text-brand-charcoal">İ</span>
          </div>          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
            <span className="text-brand-yellow">{t('about.brandValues.title')}</span>
          </h2>
          <p className="text-xl text-brand-gray-medium max-w-3xl mx-auto leading-relaxed">
            {t('about.brandValues.description')}
          </p>
        </motion.div>

        {/* Brand Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {brandValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-brand-yellow/30"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center group-hover:bg-brand-yellow/20 transition-colors duration-300">
                  <value.icon size={24} className="text-brand-yellow" />
                </div>
                <h3 className="text-xl font-semibold text-brand-charcoal ml-4 group-hover:text-brand-yellow transition-colors duration-300">
                  {value.title}
                </h3>
              </div>
              <p className="text-brand-gray-medium leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-2xl shadow-xl p-12 max-w-4xl mx-auto border border-brand-yellow/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">            <div className="text-left lg:text-left">
              <h3 className="text-3xl font-bold text-brand-charcoal mb-4">
                {t('about.cta.title')}
              </h3>
              <p className="text-lg text-brand-gray-medium mb-6 leading-relaxed">
                {t('about.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-brand-yellow hover:bg-brand-yellow-light text-brand-charcoal font-semibold py-3 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl">
                  {t('about.cta.contactBtn')}
                </button>
                <button className="border border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-charcoal font-semibold py-3 px-8 rounded-md transition-all duration-300">
                  {t('about.cta.portfolioBtn')}
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-brand-yellow/20 to-brand-yellow/5 rounded-2xl flex items-center justify-center">
                <div className="w-32 h-32 bg-brand-yellow rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-5xl font-bold text-brand-charcoal">İ</span>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-yellow/30 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-brand-yellow/50 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandShowcaseSection;
