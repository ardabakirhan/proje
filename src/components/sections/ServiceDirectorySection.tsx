import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Palette, 
  Home as HomeIcon, 
  Package, 
  Truck, 
  ArrowRight,
  Star,
  Award,
  TrendingUp
} from 'lucide-react';

const ServiceDirectorySection = () => {
  const services = [
    {
      title: 'Elektrik',
      description: 'Profesyonel elektrik çözümleri ve hizmetleri',
      icon: Zap,
      href: '/elektrik',
      color: 'from-yellow-500 to-orange-500',
      image: '/images/services/electric.svg'
    },
    {
      title: 'Boya',
      description: 'Kaliteli boya ürünleri ve boyama hizmetleri',
      icon: Palette,
      href: '/boya',
      color: 'from-purple-500 to-pink-500',
      image: '/images/services/paint.svg'
    },
    {
      title: 'Mobilya',
      description: 'Modern ve şık mobilya çözümleri',
      icon: HomeIcon,
      href: '/mobilya',
      color: 'from-green-500 to-teal-500',
      image: '/images/services/furniture.svg'
    },
    {
      title: 'Ambalaj',
      description: 'Güvenli ve çevre dostu ambalaj çözümleri',
      icon: Package,
      href: '/ambalaj',
      color: 'from-blue-500 to-indigo-500',
      image: '/images/services/packaging.svg'
    },
    {
      title: 'Lojistik',
      description: 'Hızlı ve güvenilir lojistik hizmetleri',
      icon: Truck,
      href: '/lojistik',
      color: 'from-red-500 to-rose-500',
      image: '/images/services/logistics.svg'
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hizmet Alanlarımız
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            25 yılı aşkın deneyimimizle, farklı sektörlerde kaliteli hizmet sunuyoruz
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={service.href}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:scale-105">
                  {/* Image/Icon Area */}
                  <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/30 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/40 rounded-full"></div>
                    <div className="absolute top-1/2 left-4 w-2 h-2 bg-white/50 rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-yellow transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-brand-yellow font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      <span>Detayları Gör</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* View All Services Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: services.length * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <Link to="/services">
              <div className="bg-gradient-to-br from-brand-yellow to-yellow-600 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:scale-105 h-full">
                <div className="h-48 flex items-center justify-center relative overflow-hidden">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/30 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/40 rounded-full"></div>
                  <div className="absolute top-1/2 left-4 w-2 h-2 bg-white/50 rounded-full"></div>
                </div>
                
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-3">
                    Tüm Hizmetler
                  </h3>
                  <p className="mb-4 opacity-90">
                    Sunduğumuz tüm hizmetleri keşfedin
                  </p>
                  <div className="flex items-center font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Tümünü Gör</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: '25+', label: 'Yıllık Deneyim', icon: Award },
            { number: '1000+', label: 'Mutlu Müşteri', icon: Star },
            { number: '50+', label: 'Başarılı Proje', icon: TrendingUp }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-yellow to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDirectorySection;
