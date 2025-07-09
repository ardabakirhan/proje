import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  Target, 
  TrendingUp,
  Globe,
  Heart,
  Scale,
  Building,
  Camera,
  HardHat
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const milestones = [
    {
      year: '2000',
      title: t('about.milestones.founding.title'),
      description: t('about.milestones.founding.description')
    },
    {
      year: '2005',
      title: t('about.milestones.legal.title'),
      description: t('about.milestones.legal.description')
    },
    {
      year: '2010',
      title: t('about.milestones.realEstate.title'),
      description: t('about.milestones.realEstate.description')
    },
    {
      year: '2015',
      title: t('about.milestones.media.title'),
      description: t('about.milestones.media.description')
    },
    {
      year: '2018',
      title: t('about.milestones.trade.title'),
      description: t('about.milestones.trade.description')
    },
    {
      year: '2020',
      title: t('about.milestones.construction.title'),
      description: t('about.milestones.construction.description')
    },
    {
      year: '2025',
      title: t('about.milestones.leadership.title'),
      description: t('about.milestones.leadership.description')
    }
  ];

  const sectors = [
    {
      icon: Scale,
      title: t('about.sectors.legal.title'),
      description: t('about.sectors.legal.description'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Building,
      title: t('about.sectors.realEstate.title'),
      description: t('about.sectors.realEstate.description'),
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Camera,
      title: t('about.sectors.media.title'),
      description: t('about.sectors.media.description'),
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Globe,
      title: t('about.sectors.trade.title'),
      description: t('about.sectors.trade.description'),
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: HardHat,
      title: t('about.sectors.construction.title'),
      description: t('about.sectors.construction.description'),
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const values = [
    {
      icon: Target,
      title: t('about.values.customerFocus.title'),
      description: t('about.values.customerFocus.description')
    },
    {
      icon: Heart,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.description')
    },
    {
      icon: Users,
      title: t('about.values.teamwork.title'),
      description: t('about.values.teamwork.description')
    },
    {
      icon: TrendingUp,
      title: t('about.values.development.title'),
      description: t('about.values.development.description')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-700 text-white py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-brand-yellow">{t('about.heroTitle')}</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {t('about.heroDescription')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('about.companyTitle')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('about.companyDescription1')}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {t('about.companyDescription2')}
              </p>
              <p className="text-lg text-gray-600">
                {t('about.companyDescription3')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl flex items-center justify-center">
                <Building2 size={80} className="text-gray-600" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about.sectorsTitle')}</h2>
            <p className="text-xl text-gray-600">
              {t('about.sectorsSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${sector.color} rounded-lg flex items-center justify-center mb-6`}>
                  <sector.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{sector.title}</h3>
                <p className="text-gray-600">{sector.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about.timeline.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('about.timeline.subtitle')}
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <div className={`bg-white rounded-xl p-6 shadow-lg ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <div className="text-brand-yellow font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-brand-yellow rounded-full flex-shrink-0"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about.valuesTitle')}</h2>
            <p className="text-xl text-gray-600">
              {t('about.valuesSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-brand-yellow rounded-lg flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-4xl font-bold text-brand-yellow mb-2">5+</div>
              <div className="text-gray-300">{t('about.stats.experience')}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-brand-yellow mb-2">5</div>
              <div className="text-gray-300">{t('about.stats.sectors')}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-brand-yellow mb-2">1000+</div>
              <div className="text-gray-300">{t('about.stats.customers')}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-brand-yellow mb-2">100+</div>
              <div className="text-gray-300">{t('about.stats.projects')}</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
