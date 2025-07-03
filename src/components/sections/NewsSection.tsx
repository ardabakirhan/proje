import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { newsItems } from '../../data';
import { useLanguage } from '../../contexts/LanguageContext';

const NewsSection: React.FC = () => {
  const { t } = useLanguage();
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}            className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6"
          >
            {t('news.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-secondary-600 max-w-3xl mx-auto"
          >
            {t('news.description')}
          </motion.p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* News Image */}
              <div className="relative h-48 bg-gradient-to-br from-brand-yellow/20 to-brand-yellow/30 overflow-hidden">
                {news.image ? (
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-brand-yellow rounded-lg flex items-center justify-center text-brand-charcoal font-bold text-2xl">
                      İ
                    </div>
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center space-x-1 bg-white/90 backdrop-blur-sm text-brand-yellow text-sm font-medium px-3 py-1 rounded-full">
                    <Tag size={14} />
                    <span>{news.category}</span>
                  </span>
                </div>
              </div>

              {/* News Content */}
              <div className="p-6">
                <div className="flex items-center space-x-2 text-secondary-500 text-sm mb-3">
                  <Calendar size={16} />
                  <span>{formatDate(news.date)}</span>
                </div>

                <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-brand-yellow transition-colors line-clamp-2">
                  {news.title}
                </h3>

                <p className="text-secondary-600 mb-4 line-clamp-3">
                  {news.excerpt}
                </p>

                <button className="group/btn flex items-center space-x-2 text-brand-yellow hover:text-brand-yellow-dark font-medium transition-colors">
                  <span>Devamını Oku</span>
                  <ArrowRight 
                    size={16} 
                    className="group-hover/btn:translate-x-1 transition-transform duration-300" 
                  />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >          <button className="btn-primary">
            {t('news.viewAll')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
