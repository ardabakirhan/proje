import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, TrendingUp } from 'lucide-react';

const CompactNewsSection = () => {
  const featuredNews = [
    {
      id: 1,
      title: 'Dijital Dönüşüm Yatırımlarımız',
      excerpt: 'Teknoloji alanındaki yatırımlarımızla geleceği şekillendiriyoruz.',
      date: '2025-06-15',
      category: 'Teknoloji',
      image: '/images/news/digital-transformation.svg',
      href: '/news/digital-transformation'
    },
    {
      id: 2,
      title: 'Sürdürülebilirlik Hedeflerimiz',
      excerpt: 'Çevre dostu üretim süreçleriyle sürdürülebilir geleceğe katkı sağlıyoruz.',
      date: '2025-06-10',
      category: 'Sürdürülebilirlik',
      image: '/images/news/sustainability.svg',
      href: '/news/sustainability'
    },
    {
      id: 3,
      title: 'Genç Yeteneklere Yatırım',
      excerpt: 'Staj ve kariyer programlarımızla genç yetenekleri destekliyoruz.',
      date: '2025-06-05',
      category: 'İnsan Kaynakları',
      image: '/images/news/young-talents.svg',
      href: '/news/young-talents'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Son Haberler
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            İletişim Group'un son gelişmeleri ve duyurularını takip edin
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredNews.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105">
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-yellow text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {news.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(news.date).toLocaleDateString('tr-TR')}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-yellow transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {news.excerpt}
                  </p>
                  
                  <Link
                    to={news.href}
                    className="inline-flex items-center text-brand-yellow font-semibold group-hover:translate-x-2 transition-transform duration-300"
                  >
                    <span>Devamını Oku</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/news"
            className="inline-flex items-center bg-gradient-to-r from-brand-yellow to-yellow-600 hover:from-yellow-600 hover:to-brand-yellow text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            Tüm Haberleri Gör
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CompactNewsSection;
