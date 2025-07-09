import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Target, Award } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const CompanyOverviewSection: React.FC = () => {
  const { t } = useLanguage();
  const [counters, setCounters] = useState<Record<number, number>>({ 0: 0, 1: 0, 2: 0, 3: 0 });
  
  const stats = [
    {
      icon: Users,
      number: '15+',
      targetNumber: 15,
      label: t('about.stats.employees'),
      color: 'text-brand-yellow'
    },
    {
      icon: Building2,
      number: '5+',
      targetNumber: 5,
      label: t('about.stats.countries'),
      color: 'text-brand-yellow'
    },
    {
      icon: Target,
      number: '10+',
      targetNumber: 10,
      label: t('about.stats.sectors'),
      color: 'text-brand-yellow'
    },
    {
      icon: Award,
      number: '₺100M+',
      targetNumber: 1000,
      label: t('about.stats.revenue'),
      color: 'text-brand-yellow'
    }
  ];

  // Counter animation function
  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat, index) => {
        const target = stat.targetNumber;
        let current = 0;
        const increment = target / 60; // 60 frames for smooth animation
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCounters(prev => ({ ...prev, [index]: target }));
            clearInterval(timer);
          } else {
            setCounters(prev => ({ ...prev, [index]: Math.floor(current) }));
          }
        }, 50); // 50ms interval for smooth animation
      });
    };

    // Trigger animation when component mounts
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: t('services.digitalTransformation.title'),
      description: t('services.digitalTransformation.description'),
      icon: '🚀'
    },
    {
      title: t('services.softwareDevelopment.title'),
      description: t('services.softwareDevelopment.description'),
      icon: '💻'
    },
    {
      title: t('services.businessConsulting.title'),
      description: t('services.businessConsulting.description'),
      icon: '📊'
    },
    {
      title: t('services.techInfrastructure.title'),
      description: t('services.techInfrastructure.description'),
      icon: '⚡'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Company Introduction */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}          >            <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
              {t('about.companyTitle')} <span className="text-brand-yellow">Group</span>
            </h2>
            <p className="text-lg text-brand-gray-medium mb-6 leading-relaxed">
              5 yılı aşkın deneyimimizle, Hukuk, Ofis ve Gayrimenkul, Media, Trade ve İnşaat sektörlerinde 
              uzmanlaşmış hizmetler sunuyoruz. Müşterilerimizin ihtiyaçlarına özel çözümler üretiyoruz.
            </p>
            <p className="text-lg text-brand-gray-medium mb-8 leading-relaxed">
              Kaliteli hizmet anlayışımız ve güvenilir iş ortaklıklarımızla, 5 ana sektörde 
              lider konumumuzu sürdürmeye devam ediyoruz.
            </p>
            <button className="bg-brand-yellow hover:bg-brand-yellow-light text-brand-charcoal font-semibold py-3 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl">
              {t('about.learnMoreBtn')}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
                alt="İletişim Group Ofis Görünümü"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/20 to-transparent"></div>
            </div>
            {/* Floating accent */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-yellow rounded-full flex items-center justify-center shadow-xl">
              <span className="text-2xl font-bold text-brand-charcoal">İ</span>
            </div>
          </motion.div>
        </div>        {/* Statistics */}
        <motion.div
          id="stats-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center group relative overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon container with enhanced effects */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-yellow/10 to-brand-yellow/5 rounded-2xl mb-6 group-hover:from-brand-yellow/20 group-hover:to-brand-yellow/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                <stat.icon 
                  size={36} 
                  className={`${stat.color} group-hover:scale-110 transition-all duration-300 drop-shadow-sm`} 
                />
                
                {/* Floating particles effect */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-yellow rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
              </div>
              
              {/* Counter with enhanced typography */}
              <div className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-3 relative">
                <span className="bg-gradient-to-r from-brand-charcoal to-brand-charcoal/80 bg-clip-text">
                  {counters[index] || 0}{stat.number.includes('+') ? '+' : ''}
                </span>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
              </div>
              
              {/* Label with enhanced styling */}
              <div className="text-brand-gray-medium font-semibold tracking-wide group-hover:text-brand-charcoal transition-colors duration-300 relative">
                {stat.label}
                
                {/* Underline effect */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-brand-yellow to-brand-yellow-light group-hover:w-full transition-all duration-500"></div>
              </div>
                {/* Subtle border effect */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-brand-yellow/20 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-4">
              {t('about.servicesTitle')}
            </h3>
            <p className="text-lg text-brand-gray-medium max-w-2xl mx-auto">
              {t('about.servicesDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100 hover:border-brand-yellow/30 overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 via-transparent to-brand-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-yellow/10 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  {/* Enhanced icon with multiple effects */}
                  <div className="text-5xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter drop-shadow-lg">
                    <span className="relative inline-block">
                      {service.icon}
                      {/* Glow effect */}
                      <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-brand-yellow"></div>
                    </span>
                  </div>
                  
                  {/* Enhanced title */}
                  <h4 className="text-xl font-bold text-brand-charcoal mb-4 group-hover:text-brand-yellow transition-colors duration-300 relative">
                    {service.title}
                    {/* Animated underline */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-yellow to-brand-yellow-light group-hover:w-full transition-all duration-500"></div>
                  </h4>
                  
                  {/* Enhanced description */}
                  <p className="text-brand-gray-medium leading-relaxed group-hover:text-brand-charcoal transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                
                {/* Subtle corner accent */}
                <div className="absolute bottom-0 left-0 w-0 h-0 border-l-0 border-b-4 border-brand-yellow group-hover:border-l-4 group-hover:border-b-4 transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyOverviewSection;
