import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Palette, Monitor, TrendingUp, Eye, Zap, Award, CheckCircle, ArrowRight, Camera, Lightbulb } from 'lucide-react';
import Button from '../components/common/Button';

const AdvertisingCompany: React.FC = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Dijital Reklam',
      description: 'Google Ads, Facebook, Instagram ve diğer dijital platformlarda etkili reklam kampanyaları',
      features: ['Google Ads Yönetimi', 'Social Media Ads', 'Display Reklam', 'Video Reklam']
    },
    {
      icon: Palette,
      title: 'Grafik Tasarım',
      description: 'Profesyonel logo, broşür, katalog ve kurumsal kimlik tasarımı hizmetleri',
      features: ['Logo Tasarım', 'Kurumsal Kimlik', 'Broşür & Katalog', 'Ambalaj Tasarımı']
    },
    {
      icon: Camera,
      title: 'Fotoğraf & Video',
      description: 'Ürün çekimi, kurumsal video prodüksiyonu ve içerik üretimi',
      features: ['Ürün Fotoğrafçılığı', 'Kurumsal Video', 'Tanıtım Filmi', 'Sosyal Medya İçerikleri']
    },
    {
      icon: TrendingUp,
      title: 'Dijital Pazarlama',
      description: 'SEO, sosyal medya yönetimi ve online marka yönetimi hizmetleri',
      features: ['SEO Optimizasyonu', 'Sosyal Medya Yönetimi', 'İçerik Pazarlama', 'E-posta Pazarlama']
    }
  ];

  const advantages = [
    {
      icon: Lightbulb,
      title: 'Yaratıcı Çözümler',
      description: 'Her projeye özgü yaratıcı ve etkili reklam stratejileri geliştiriyoruz'
    },
    {
      icon: Eye,
      title: 'Görsel Mükemmellik',
      description: 'Profesyonel tasarım ekibimizle görsel açıdan etkileyici projeler üretiyoruz'
    },
    {
      icon: Zap,
      title: 'Hızlı Teslimat',
      description: 'Proje süreçlerini optimize ederek hızlı ve kaliteli teslimat sağlıyoruz'
    },
    {
      icon: Award,
      title: 'Deneyimli Ekip',
      description: 'Sektörde 15+ yıl deneyime sahip kreatif profesyonellerle çalışıyoruz'
    }
  ];

  const portfolioItems = [
    {
      category: 'Kurumsal Kimlik',
      title: 'Tech Startup Logo',
      description: 'Modern teknoloji şirketi için minimalist logo tasarımı'
    },
    {
      category: 'Dijital Reklam',
      title: 'E-ticaret Kampanyası',
      description: 'Online mağaza için çok kanallı dijital reklam kampanyası'
    },
    {
      category: 'Video Prodüksiyon',
      title: 'Kurumsal Tanıtım',
      description: 'Holding şirketi için profesyonel tanıtım filmi'
    },
    {
      category: 'Sosyal Medya',
      title: 'Restoran Zinciri',
      description: 'Restoran zinciri için sosyal medya içerik yönetimi'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Reklam Şirketi
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Paylaşımlı ofisimizde bulunan reklam ajansımız ile markanızı büyütün. 
              Yaratıcı tasarım ve dijital pazarlama çözümleri sunuyoruz.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg"
            >
              Proje Başlat
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-charcoal mb-4">
              Reklam ve Tasarım Hizmetlerimiz
            </h2>
            <p className="text-xl text-brand-gray-medium max-w-3xl mx-auto">
              Dijital pazarlama, grafik tasarım ve marka yönetimi alanlarında profesyonel hizmetler
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                  <service.icon className="w-8 h-8 text-purple-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-brand-charcoal mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-charcoal mb-4">
              Portfolyomuzdan Örnekler
            </h2>
            <p className="text-xl text-brand-gray-medium max-w-3xl mx-auto">
              Farklı sektörlerden müşterilerimiz için gerçekleştirdiğimiz başarılı projeler
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="w-full h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Megaphone className="w-12 h-12 text-white opacity-50" />
                </div>
                
                <div className="text-sm text-purple-600 font-medium mb-2">
                  {item.category}
                </div>
                
                <h3 className="text-lg font-bold text-brand-charcoal mb-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-charcoal mb-4">
              Neden Bizimle Çalışmalısınız?
            </h2>
            <p className="text-xl text-brand-gray-medium max-w-3xl mx-auto">
              Reklam ajansımızın sunduğu avantajları keşfedin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-purple-600" />
                </div>
                
                <h3 className="text-xl font-bold text-brand-charcoal mb-3">
                  {advantage.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-charcoal mb-4">
              Çalışma Sürecimiz
            </h2>
            <p className="text-xl text-brand-gray-medium max-w-3xl mx-auto">
              Projelerinizi hayata geçirirken izlediğimiz adımlar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Keşif', description: 'Markanızı ve hedeflerinizi anlıyoruz' },
              { step: '02', title: 'Strateji', description: 'Özel çözümler ve stratejiler geliştiriyoruz' },
              { step: '03', title: 'Tasarım', description: 'Yaratıcı tasarımlar ve içerikler üretiyoruz' },
              { step: '04', title: 'Uygulama', description: 'Kampanyalarınızı hayata geçiriyoruz' }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl shadow-2xl p-12 max-w-4xl mx-auto text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Markanızı Büyütmeye Hazır mısınız?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Reklam uzmanlarımızla iletişime geçin ve markanız için 
                özel tasarlanmış stratejiler geliştirin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg"
                >
                  Ücretsiz Danışmanlık
                  <Lightbulb className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600"
                >
                  Portfolio İncele
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AdvertisingCompany;