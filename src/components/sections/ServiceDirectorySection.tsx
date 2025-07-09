import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Scale, 
  Building, 
  Camera, 
  Globe, 
  HardHat, 
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  Sparkles,
  CircleDot
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ServiceDirectorySection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t('services.legal.title'),
      description: t('services.legal.description'),
      icon: Scale,
      href: '/hukuk',
      color: 'from-blue-400 via-blue-500 to-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
      iconBg: 'from-blue-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=400&fit=crop&crop=center',
      accent: 'text-blue-600'
    },
    {
      title: t('services.realEstate.title'),
      description: t('services.realEstate.description'),
      icon: Building,
      href: '/ofis-gayrimenkul',
      color: 'from-green-400 via-green-500 to-green-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
      iconBg: 'from-green-500 to-green-600',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=400&fit=crop&crop=center',
      accent: 'text-green-600'
    },
    {
      title: t('services.media.title'),
      description: t('services.media.description'),
      icon: Camera,
      href: '/media',
      color: 'from-purple-400 via-purple-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
      iconBg: 'from-purple-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop&crop=center',
      accent: 'text-purple-600'
    },
    {
      title: t('services.trade.title'),
      description: t('services.trade.description'),
      icon: Globe,
      href: '/trade',
      color: 'from-indigo-400 via-indigo-500 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
      iconBg: 'from-indigo-500 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=400&h=400&fit=crop&crop=center',
      accent: 'text-indigo-600'
    },
    {
      title: t('services.construction.title'),
      description: t('services.construction.description'),
      icon: HardHat,
      href: '/insaat',
      color: 'from-orange-400 via-orange-500 to-orange-600',
      bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100',
      iconBg: 'from-orange-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1541976590-713941681591?w=400&h=400&fit=crop&crop=center',
      accent: 'text-orange-600'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/10 to-brand-charcoal/10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-brand-yellow/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-brand-yellow to-yellow-500 rounded-full mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={service.href}>
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:scale-105 group-hover:-translate-y-2 border border-gray-100">
                  {/* Icon & Background */}
                  <div className={`h-60 ${service.bgColor} flex items-center justify-center relative overflow-hidden`}>
                    {/* Floating icon */}
                    <div className={`absolute top-6 right-6 w-12 h-12 bg-gradient-to-r ${service.iconBg} rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Main image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-40 h-40 object-contain group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                    />
                    
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className={`text-2xl font-bold text-gray-900 mb-3 group-hover:${service.accent} transition-colors duration-300`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <div className={`flex items-center ${service.accent} font-semibold group-hover:translate-x-2 transition-transform duration-300`}>
                        <span>{t('common.learnMore')}</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                      <div className={`w-8 h-8 bg-gradient-to-r ${service.iconBg} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                        <CircleDot className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* View All Services Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: services.length * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <Link to="/services">
              <div className="bg-gradient-to-br from-brand-yellow via-yellow-500 to-orange-500 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:scale-105 group-hover:-translate-y-2 h-full border border-yellow-200">
                <div className="h-48 flex items-center justify-center relative overflow-hidden">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5"></div>
                  
                  {/* Main icon */}
                  <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Star className="w-12 h-12 text-white" />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/30 rounded-full animate-bounce"></div>
                  <div className="absolute bottom-6 left-6 w-4 h-4 bg-white/40 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-4 w-2 h-2 bg-white/50 rounded-full animate-ping"></div>
                  
                  {/* Floating particles */}
                  <div className="absolute top-8 left-8 w-1 h-1 bg-white/60 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute bottom-12 right-12 w-1 h-1 bg-white/70 rounded-full animate-pulse delay-700"></div>
                </div>
                
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                    {t('services.viewAll')}
                  </h3>
                  <p className="mb-6 opacity-90 leading-relaxed">
                    {t('services.cta.description')}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      <span>{t('common.viewAll')}</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { 
              number: '5+', 
              label: t('company.stats.experience'), 
              icon: Award,
              color: 'from-purple-500 to-pink-500',
              bgColor: 'from-purple-50 to-pink-50'
            },
            { 
              number: '1000+', 
              label: t('company.stats.customers'), 
              icon: Star,
              color: 'from-yellow-500 to-orange-500',
              bgColor: 'from-yellow-50 to-orange-50'
            },
            { 
              number: '50+', 
              label: t('company.stats.projects'), 
              icon: TrendingUp,
              color: 'from-green-500 to-teal-500',
              bgColor: 'from-green-50 to-teal-50'
            }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${stat.bgColor} rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDirectorySection;
