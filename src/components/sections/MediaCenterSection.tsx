import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, FileText, BookOpen, Radio, Calendar, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const MediaCenterSection: React.FC = () => {
  const { t } = useLanguage();
  
  const mediaTypes = [
    {
      icon: Newspaper,
      title: t('mediaCenter.types.allNews.title'),
      description: t('mediaCenter.types.allNews.description'),
      count: t('mediaCenter.types.allNews.count'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: FileText,
      title: t('mediaCenter.types.pressReleases.title'),
      description: t('mediaCenter.types.pressReleases.description'),
      count: t('mediaCenter.types.pressReleases.count'),
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: BookOpen,
      title: t('mediaCenter.types.guides.title'),
      description: t('mediaCenter.types.guides.description'),
      count: t('mediaCenter.types.guides.count'),
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Radio,
      title: t('mediaCenter.types.internalNews.title'),
      description: t('mediaCenter.types.internalNews.description'),
      count: t('mediaCenter.types.internalNews.count'),
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];
  const recentNews = [
    {
      title: t('mediaCenter.recentNews.news1.title'),
      date: '2025-06-03',
      category: t('mediaCenter.recentNews.news1.category'),
      excerpt: t('mediaCenter.recentNews.news1.excerpt')
    },
    {
      title: t('mediaCenter.recentNews.news2.title'),
      date: '2025-06-01',
      category: t('mediaCenter.recentNews.news2.category'),
      excerpt: t('mediaCenter.recentNews.news2.excerpt')
    },
    {
      title: t('mediaCenter.recentNews.news3.title'),
      date: '2025-05-28',
      category: t('mediaCenter.recentNews.news3.category'),
      excerpt: t('mediaCenter.recentNews.news3.excerpt')
    }
  ];

  return (
    <section className="section-padding bg-secondary-900 text-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t('mediaCenter.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-secondary-300 max-w-3xl mx-auto"
          >
            {t('mediaCenter.description')}
          </motion.p>
        </div>

        {/* Media Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mediaTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-secondary-800 hover:bg-secondary-700 p-6 rounded-xl transition-all duration-300 border border-secondary-700 hover:border-primary-500"
              >
                <div className={`w-14 h-14 ${type.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-7 h-7 ${type.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                  {type.title}
                </h3>
                
                <p className="text-secondary-400 text-sm mb-3 leading-relaxed">
                  {type.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-primary-400 font-medium text-sm">
                    {type.count}
                  </span>
                  <ExternalLink 
                    size={16} 
                    className="text-secondary-500 group-hover:text-primary-400 transition-colors" 
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Recent News */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-secondary-800 rounded-2xl p-8 border border-secondary-700"
        >          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">{t('mediaCenter.recentNews.title')}</h3>
            <button className="text-primary-400 hover:text-primary-300 font-medium transition-colors">
              {t('mediaCenter.recentNews.viewAll')} →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentNews.map((news, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="flex items-center space-x-2 text-sm text-secondary-400 mb-3">
                  <Calendar size={14} />
                  <span>{new Date(news.date).toLocaleDateString('tr-TR')}</span>
                  <span>•</span>
                  <span className="text-primary-400">{news.category}</span>
                </div>
                
                <h4 className="text-lg font-semibold mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
                  {news.title}
                </h4>
                
                <p className="text-secondary-400 text-sm line-clamp-2">
                  {news.excerpt}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">Güncel Kalın</h3>
          <p className="text-secondary-300 mb-8 max-w-2xl mx-auto">
            İletişim Group'un tüm haberlerini ve gelişmelerini takip etmek için medya merkezimizi ziyaret edin
            veya e-bülten listemize katılın.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary">
              Medya Merkezini Ziyaret Et
            </button>
            <button className="bg-secondary-700 hover:bg-secondary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              E-Bültene Abone Ol
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaCenterSection;
