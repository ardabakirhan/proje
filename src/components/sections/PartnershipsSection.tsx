import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Handshake, Globe, TrendingUp, Users, Star } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const PartnershipsSection: React.FC = () => {
  const { t } = useLanguage();
  
  const partners = [
    {
      name: t('about.partnerships.partners.globalTech.name'),
      sector: t('about.partnerships.partners.globalTech.sector'),
      description: t('about.partnerships.partners.globalTech.description'),
      logo: '/api/placeholder/120/60'
    },
    {
      name: t('about.partnerships.partners.internationalFinance.name'),
      sector: t('about.partnerships.partners.internationalFinance.sector'),
      description: t('about.partnerships.partners.internationalFinance.description'),
      logo: '/api/placeholder/120/60'
    },
    {
      name: t('about.partnerships.partners.sustainableEnergy.name'),
      sector: t('about.partnerships.partners.sustainableEnergy.sector'),
      description: t('about.partnerships.partners.sustainableEnergy.description'),
      logo: '/api/placeholder/120/60'
    },
    {
      name: t('about.partnerships.partners.healthcareInnovation.name'),
      sector: t('about.partnerships.partners.healthcareInnovation.sector'),
      description: t('about.partnerships.partners.healthcareInnovation.description'),
      logo: '/api/placeholder/120/60'
    },
    {
      name: t('about.partnerships.partners.educationExcellence.name'),
      sector: t('about.partnerships.partners.educationExcellence.sector'),
      description: t('about.partnerships.partners.educationExcellence.description'),
      logo: '/api/placeholder/120/60'
    },
    {
      name: t('about.partnerships.partners.logisticsNetwork.name'),
      sector: t('about.partnerships.partners.logisticsNetwork.sector'),
      description: t('about.partnerships.partners.logisticsNetwork.description'),
      logo: '/api/placeholder/120/60'
    }
  ];

  const achievements = [
    {
      icon: Building2,
      number: '150+',
      label: t('about.partnerships.achievements.strategicPartnerships.label'),
      description: t('about.partnerships.achievements.strategicPartnerships.description')    },
    {
      icon: Globe,
      number: '25+',
      label: t('about.partnerships.achievements.countries.label'),
      description: t('about.partnerships.achievements.countries.description')
    },
    {
      icon: TrendingUp,
      number: '₺2.5M',
      label: t('about.partnerships.achievements.projectValue.label'),
      description: t('about.partnerships.achievements.projectValue.description')
    },
    {
      icon: Users,
      number: '500+',
      label: t('about.partnerships.achievements.expertNetwork.label'),
      description: t('about.partnerships.achievements.expertNetwork.description')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('about.partnerships.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.partnerships.description')}
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {achievement.number}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-1">
                {achievement.label}
              </div>
              <div className="text-sm text-gray-600">
                {achievement.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-gray-400" />
                </div>
                <div className="text-xs text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  {partner.sector}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {partner.name}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {partner.description}
              </p>
                <div className="flex items-center text-primary-600 text-sm group-hover:text-primary-700 transition-colors">
                <Handshake className="w-4 h-4 mr-2" />
                {t('about.partnerships.activePartnership')}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white"
        >          <div className="max-w-3xl mx-auto">
            <Star className="w-12 h-12 mx-auto mb-6 text-primary-200" />
            <h3 className="text-2xl font-bold mb-4">
              {t('about.partnerships.approach.title')}
            </h3>
            <p className="text-lg text-primary-100 mb-8">
              {t('about.partnerships.approach.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-100 mb-2">01</div>
                <div className="font-semibold mb-1">{t('about.partnerships.approach.strategicAlignment.title')}</div>
                <div className="text-sm text-primary-200">{t('about.partnerships.approach.strategicAlignment.description')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-100 mb-2">02</div>
                <div className="font-semibold mb-1">{t('about.partnerships.approach.mutualValue.title')}</div>
                <div className="text-sm text-primary-200">{t('about.partnerships.approach.mutualValue.description')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-100 mb-2">03</div>
                <div className="font-semibold mb-1">{t('about.partnerships.approach.sustainability.title')}</div>
                <div className="text-sm text-primary-200">{t('about.partnerships.approach.sustainability.description')}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
