import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Building2, Users, Globe, Target } from 'lucide-react';

const HeroSection: React.FC = () => {
  const stats = [
    { icon: Building2, value: '25+', label: 'Sektör', description: 'Çeşitli endüstrilerde faaliyet' },
    { icon: Users, value: '20+', label: 'Çalışan', description: 'Dünya çapında ekip' },
    { icon: Globe, value: '15+', label: 'Ülke', description: 'Küresel varlık' },
    { icon: Target, value: '₺50M+', label: 'Ciro', description: 'Yıllık toplam ciro' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-gray-light">
      {/* Professional Business Background - İletişim Group Style */}
      <div className="absolute inset-0">
        {/* Main background image - Clean corporate setting */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        {/* Brand-colored gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/90 via-brand-charcoal-light/70 to-brand-charcoal/85"></div>
        
        {/* Subtle yellow accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 via-transparent to-brand-yellow/10"></div>
      </div>

      <div className="container-custom relative z-10 py-20">
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto text-left lg:text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Clean, professional heading with İletişim Group branding */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              <span className="block mb-2">İletişim</span>
              <span className="block text-brand-yellow">Ofis</span>
            </h1>
            
            {/* Refined subtitle */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300 mb-8 leading-relaxed">
              Geleceği Şekillendiren Teknoloji Liderliği
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            100 yıla yaklaşan köklü geçmişi ile Türkiye'nin en büyük sanayi ve hizmetler grubundan
            biri olan İletişim Group, 25'ten fazla sektörde faaliyet göstererek ülke ekonomisine
            değer katmaya devam ediyor.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {/* Primary CTA Button - İletişim Group style with brand yellow */}
            <button className="group bg-brand-yellow hover:bg-brand-yellow-light text-brand-charcoal font-semibold py-4 px-8 rounded-md transition-all duration-300 flex items-center space-x-2 text-lg shadow-lg hover:shadow-xl">
              <span>Keşfedin</span>
              <ArrowRight 
                size={20} 
                className="group-hover:translate-x-1 transition-transform duration-300" 
              />
            </button>

            {/* Secondary CTA */}
            <button className="group flex items-center space-x-3 text-white hover:text-brand-yellow transition-colors duration-300">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-brand-yellow/20 transition-all duration-300">
                <Play size={18} className="ml-0.5 text-white" />
              </div>
              <span className="text-lg font-medium">Video İzle</span>
            </button>
          </motion.div>
        </div>

        {/* Stats Overlay Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="text-center group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-brand-yellow/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-yellow/30 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-brand-yellow" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-base font-semibold text-brand-yellow mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-300">
                    {stat.description}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-brand-yellow/70 rounded-full mt-2"
          />        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
