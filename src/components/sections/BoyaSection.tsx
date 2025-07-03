import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, 
  Droplets, 
  Shield, 
  ArrowRight, 
  Sparkles, 
  Paintbrush,
  Home,
  Building,
  Truck,
  Phone,
  Mail,
  Clock,
  Star,
  Award
} from 'lucide-react';
import Button from '../common/Button';

const BoyaSection: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'İç Mekan Boyama',
      description: 'Ev ve ofis iç mekanlarınız için özel renk danışmanlığı ve profesyonel boyama hizmetleri.',
      features: [
        'Duvar boyama hizmetleri',
        'Tavan boyama',
        'Ahşap boyama',
        'Renk danışmanlığı',
        'Dekoratif boyama',
        'Özel efekt uygulamaları'
      ],
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: Building,
      title: 'Dış Mekan Boyama',
      description: 'Bina cephesi, balkon ve dış mekan boyama hizmetleri ile yapılarınızı koruyun.',
      features: [
        'Bina cephesi boyama',
        'Balkon boyama',
        'Çelik konstrüksiyon boyama',
        'Koruyucu kaplama',
        'Hava koşullarına dayanıklı boyalar',
        'Yüzey hazırlığı'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Truck,
      title: 'Endüstriyel Boyama',
      description: 'Fabrika ve endüstriyel tesisler için dayanıklı ve uzun ömürlü boyama çözümleri.',
      features: [
        'Makine boyama',
        'Tank boyama',
        'Boru hattı boyama',
        'Antikorozif boyama',
        'Epoksi zemin boyama',
        'Endüstriyel fırın boyama'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const features = [
    {
      icon: Palette,
      title: 'Geniş Renk Seçenekleri',
      description: 'Binlerce renk seçeneği ile hayalinizdeki rengi bulun.',
      color: 'text-pink-600'
    },
    {
      icon: Droplets,
      title: 'Kaliteli Boyalar',
      description: 'Çevre dostu ve uzun ömürlü premium boyalar kullanıyoruz.',
      color: 'text-green-600'
    },
    {
      icon: Shield,
      title: 'Dayanıklılık Garantisi',
      description: 'İşçilik ve malzeme kalitesi için 2 yıl garanti.',
      color: 'text-blue-600'
    },
    {
      icon: Sparkles,
      title: 'Özel Efektler',
      description: 'Dekoratif ve özel efekt uygulamaları ile fark yaratın.',
      color: 'text-purple-600'
    }
  ];

  const testimonials = [
    {
      name: 'Zehra Kaya',
      company: 'Kaya Ev Dekorasyonu',
      content: 'Evimizin boyasını yaptılar. Çok titiz ve kaliteli çalışma. Çok memnun kaldık.',
      rating: 5
    },
    {
      name: 'Kemal Öztürk',
      company: 'Öztürk İnşaat',
      content: 'Apartmanımızın cephesini boyadılar. Hava koşullarına dayanıklı boya kullandılar.',
      rating: 5
    },
    {
      name: 'Fatma Demir',
      company: 'Demir Metal',
      content: 'Fabrikamızın boyasını yenileme işini çok başarılı bir şekilde tamamladılar.',
      rating: 5
    }
  ];

  const stats = [
    { number: '1000+', label: 'Boyanan Mekan', icon: Award },
    { number: '10+', label: 'Yıllık Deneyim', icon: Star },
    { number: '500+', label: 'Renk Seçeneği', icon: Palette },
    { number: '2 Yıl', label: 'Kalite Garantisi', icon: Shield }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-6">
              <Paintbrush className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent mb-6">
              Profesyonel Boyama Hizmetleri
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              İç mekan, dış mekan ve endüstriyel boyama hizmetleri ile yaşam ve çalışma 
              alanlarınızı renklendiriyoruz. Kaliteli boyalar ve profesyonel işçilik garantisi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white">
                Ücretsiz Keşif
                <Phone className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white">
                Renk Kataloğu
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Boyama Hizmet Alanlarımız
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İç mekan, dış mekan ve endüstriyel boyama hizmetleri ile her ihtiyacınızı karşılıyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                        <span className="font-medium text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${service.color} text-white hover:shadow-lg transform transition-all duration-300 group-hover:scale-105`}
                  >
                    Detayları İncele
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Neden Boyama Hizmetlerimizi Tercih Etmelisiniz?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kaliteli boyalar, profesyonel ekip ve müşteri memnuniyeti odaklı hizmet anlayışımız.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 ${feature.color.replace('text-', 'bg-')}/10 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-pink-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Müşteri Yorumları
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Boyama hizmetlerimizden memnun kalan müşterilerimizin deneyimleri.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <Paintbrush className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Boyama İhtiyaçlarınız İçin Bizimle İletişime Geçin
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ücretsiz keşif ve renk danışmanlığı için hemen arayın.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Telefon</h3>
              <p className="text-gray-600">0 (216) 531 00 00</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">E-posta</h3>
              <p className="text-gray-600">boya@iletisimgroup.com.tr</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Çalışma Saatleri</h3>
              <p className="text-gray-600">Pzt-Cmt: 08:00-18:00</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 text-lg"
            >
              Hemen Teklif Al
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BoyaSection;
