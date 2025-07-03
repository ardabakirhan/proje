import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Globe, Target } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  
  const stats = [
    { icon: Building2, value: '25+', label: t('about.stats.sectors.label'), description: t('about.stats.sectors.description') },
    { icon: Users, value: '20+', label: t('about.stats.employees.label'), description: t('about.stats.employees.description') },
    { icon: Globe, value: '15+', label: t('about.stats.countries.label'), description: t('about.stats.countries.description') },
    { icon: Target, value: '₺50M+', label: t('about.stats.revenue.label'), description: t('about.stats.revenue.description') },
  ];

  const values = [
    {
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
      color: 'bg-blue-500'
    },
    {
      title: t('about.values.reliability.title'),
      description: t('about.values.reliability.description'),
      color: 'bg-green-500'
    },
    {
      title: t('about.values.sustainability.title'),
      description: t('about.values.sustainability.description'),
      color: 'bg-purple-500'
    },
    {
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description'),
      color: 'bg-orange-500'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}            className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-6"
          >
            {t('about.title')}
          </motion.h2>          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed"
          >
            {t('about.description')}
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >                <div className="w-16 h-16 bg-brand-yellow/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-yellow/20 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-brand-yellow" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-brand-gray-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-secondary-500">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-brand-charcoal mb-6">
              {t('about.story.title')}
            </h3>
            <div className="space-y-4 text-secondary-600 leading-relaxed">
              <p>
                {t('about.story.paragraph1')}
              </p>
              <p>
                {t('about.story.paragraph2')}
              </p>
              <p>
                {t('about.story.paragraph3')}
              </p>
            </div>
            <button className="btn-primary mt-8">
              {t('common.learnMore')}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-brand-yellow/20 to-brand-yellow/30 rounded-2xl p-8 h-96">
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-brand-yellow rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-brand-charcoal font-bold text-4xl">İ</span>
                  </div>
                  <h4 className="text-2xl font-bold text-brand-charcoal mb-4">
                    İletişim Group
                  </h4>
                  <p className="text-brand-charcoal/80">
                    {t('about.slogan')}
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-8 h-8 bg-white/30 rounded-full"></div>
              <div className="absolute top-1/2 left-4 w-6 h-6 bg-white/25 rounded-full"></div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-secondary-900 mb-12">
            {t('about.valuesTitle')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center p-6 bg-secondary-50 hover:bg-white rounded-xl transition-all duration-300 hover:shadow-lg border border-transparent hover:border-secondary-200"
              >
                <div className={`w-3 h-16 ${value.color} rounded-full mx-auto mb-4 group-hover:h-20 transition-all duration-300`}></div>
                <h4 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-brand-yellow transition-colors">
                  {value.title}
                </h4>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
