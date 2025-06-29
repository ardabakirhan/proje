import React from 'react';
import { motion } from 'framer-motion';
import { 
  Scale,
  Plane,
  Megaphone,
  Users, 
  Coffee,
  Wifi,
  Calendar,
  ArrowRight,
  CheckCircle,
  Star,
  MapPin,
  Clock,
  Phone
} from 'lucide-react';
import Button from '../components/common/Button';

const Services: React.FC = () => {
  // Paylaşımlı Ofis Ana Hizmetleri
  const mainServices = [
    {
      icon: Scale,
      title: 'Hukuk Departmanı',
      description: 'Profesyonel hukuki danışmanlık ve yasal işlemler için tam donanımlı hukuk ofisi hizmetleri.',
      features: [
        'Sözleşme Hazırlama ve İnceleme',
        'Hukuki Danışmanlık Hizmetleri',
        'Dava Takibi ve Temsil',
        'Ticaret Hukuku Danışmanlığı',
        'İş Hukuku ve İnsan Kaynakları',
        'Şirket Kuruluşu ve Tescil'
      ],
      color: 'from-blue-500 to-blue-600',
      link: '/legal-department',
      price: '₺2,500/ay',
      duration: 'Tam Zamanlı Hizmet'
    },
    {
      icon: Plane,
      title: 'İthalat İhracat Şirketi',
      description: 'Uluslararası ticaret ve lojistik çözümleri ile küresel pazarlara açılın.',
      features: [
        'Gümrük İşlemleri ve Takibi',
        'Uluslararası Lojistik Yönetimi',
        'İthalat-İhracat Danışmanlığı',
        'Kargo ve Nakliye Hizmetleri',
        'Ticari Evrak Hazırlama',
        'Dış Ticaret Finansmanı'
      ],
      color: 'from-green-500 to-green-600',
      link: '/import-export',
      price: '₺3,000/ay',
      duration: 'Esnek Çalışma Modeli'
    },
    {
      icon: Megaphone,
      title: 'Reklam Şirketi',
      description: 'Yaratıcı reklam kampanyaları ve dijital pazarlama hizmetleri ile markanızı büyütün.',
      features: [
        'Dijital Reklam Kampanyaları',
        'Sosyal Medya Yönetimi',
        'Marka Kimliği ve Tasarım',
        'Grafik Tasarım Hizmetleri',
        'Web Tasarım ve Geliştirme',
        'SEO ve Dijital Pazarlama'
      ],
      color: 'from-purple-500 to-purple-600',
      link: '/advertising-company',
      price: '₺2,800/ay',
      duration: 'Proje Bazlı Çalışma'
    }
  ];

  // Paylaşımlı Ofis Olanakları
  const officeFeatures = [
    {
      icon: Wifi,
      title: 'Modern Teknoloji',
      description: 'Yüksek hızlı internet, akıllı ofis sistemleri, video konferans olanakları'
    },
    {
      icon: Coffee,
      title: 'Konforlu Çalışma',
      description: 'Kahve servisi, dinlenme alanları, sosyal alanlar, mutfak imkanları'
    },
    {
      icon: Calendar,
      title: 'Esnek Çalışma',
      description: '7/24 erişim, toplantı odaları, etkinlik alanları, rezervasyon sistemi'
    },
    {
      icon: Users,
      title: 'Profesyonel Ağ',
      description: 'İş geliştirme fırsatları, networking etkinlikleri, sektörel bağlantılar'
    }
  ];

  const testimonials = [
    {
      name: 'Ayşe Kılıç',
      position: 'Şirket Ortağı',
      company: 'TechLaw Hukuk Bürosu',
      content: 'Paylaşımlı ofisteki hukuk departmanı sayesinde müvekkil sayımızı %60 artırdık. Profesyonel ortam ve teknolojik altyapı mükemmel.',
      rating: 5
    },
    {
      name: 'Emre Özkan',
      position: 'Genel Müdür',
      company: 'Global Trade Co.',
      content: 'İthalat-ihracat hizmetleri ile uluslararası ticaretimizi büyüttük. Lojistik çözümleri işimizi kolaylaştırdı.',
      rating: 5
    },
    {
      name: 'Fatma Yılmaz',
      position: 'Kreatif Direktör',
      company: 'BrandMax Reklam',
      content: 'Reklam şirketimiz için ideal çalışma ortamı. Yaratıcı projelerimizi burada hayata geçiriyoruz.',
      rating: 5
    }
  ];

  const packages = [
    {
      name: 'Esnek Masa',
      price: '₺1,500',
      period: '/ay',
      description: 'Günlük kullanım için esnek çalışma alanı',
      features: [
        'Günlük masa kullanımı',
        'Temel ofis hizmetleri',
        'Wifi ve teknoloji desteği',
        'Kahve ve çay servisi',
        'Toplantı odası (2 saat/gün)'
      ],
      popular: false
    },
    {
      name: 'Sabit Ofis',
      price: '₺3,500',
      period: '/ay',
      description: 'Kendine ait çalışma alanı ve ofis hizmetleri',
      features: [
        'Kişiye özel masa ve alan',
        'Tam ofis hizmetleri',
        'Toplantı odası kullanımı',
        'Posta ve kargo servisi',
        'Profesyonel adres hizmeti',
        'Sekreterlik desteği'
      ],
      popular: true
    },
    {
      name: 'Premium Ofis',
      price: '₺6,000',
      period: '/ay',
      description: 'Tam donanımlı özel ofis ve premium hizmetler',
      features: [
        'Özel ofis odası',
        'VIP toplantı odası erişimi',
        'Tam sekreterlik hizmeti',
        'IT ve teknik destek',
        'Özel telefon hattı',
        'Premium temizlik hizmeti',
        'Etkinlik alanı kullanımı'
      ],
      popular: false
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-yellow to-brand-yellow-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-brand-charcoal mb-6">
              Paylaşımlı Ofis Hizmetlerimiz
            </h1>
            <p className="text-xl text-brand-charcoal/80 leading-relaxed mb-8">
              Modern ve teknolojik paylaşımlı ofisimizde, işletmenizin ihtiyaç duyduğu 
              tüm profesyonel hizmetleri tek çatı altında bulabilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-charcoal hover:bg-brand-charcoal-light text-white"
              >
                Ofis Turu Al
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white"
              >
                Hemen Başlayın
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ana Hizmetler */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-charcoal mb-4">
              Ana Hizmetlerimiz
            </h2>
            <p className="text-xl text-brand-gray-medium max-w-3xl mx-auto">
              Paylaşımlı ofisimizde bulunan üç ana işletme ile kapsamlı hizmet yelpazesi sunuyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-brand-charcoal mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-brand-charcoal">
                          {service.price}
                        </span>
                        <p className="text-sm text-gray-600">{service.duration}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                        <span className="font-medium text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <a 
                    href={service.link}
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl hover:shadow-lg transform transition-all duration-300 group-hover:scale-105`}
                  >
                    Detayları İncele
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ofis Olanakları */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-charcoal mb-4">
              Paylaşımlı Ofis Olanakları
            </h2>
            <p className="text-xl text-brand-gray-medium max-w-3xl mx-auto">
              Modern çalışma ortamı ve profesyonel imkanlarımızla işinizi bir üst seviyeye taşıyın.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {officeFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-brand-yellow/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-brand-yellow" />
                </div>
                <h4 className="text-lg font-semibold text-brand-charcoal mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ofis Bilgileri */}
      <section className="py-16 bg-brand-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <MapPin className="w-8 h-8 text-brand-yellow mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Konum</h3>
              <p className="text-gray-300">
                Nakkaştepe, Azizbey Sokak, No: 1<br />
                Kuzguncuk 34674, İstanbul
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Clock className="w-8 h-8 text-brand-yellow mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Çalışma Saatleri</h3>
              <p className="text-gray-300">
                Pazartesi - Cuma: 08:00 - 20:00<br />
                Hafta Sonu: 09:00 - 18:00
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Phone className="w-8 h-8 text-brand-yellow mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">İletişim</h3>
              <p className="text-gray-300">
                Tel: 0 (216) 531 00 00<br />
                Email: ofis@iletisimgroup.com.tr
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Paket Seçenekleri */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-charcoal mb-4">
              Üyelik Paketleri
            </h2>
            <p className="text-xl text-brand-gray-medium max-w-3xl mx-auto">
              İhtiyaçlarınıza uygun esnek paket seçenekleri ile paylaşımlı ofisimize katılın.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden border ${
                  pkg.popular ? 'border-brand-yellow ring-2 ring-brand-yellow/20 relative' : 'border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-brand-yellow text-brand-charcoal px-4 py-2 rounded-full text-sm font-semibold">
                      En Popüler
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-brand-charcoal mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {pkg.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-brand-charcoal">
                      {pkg.price}
                    </span>
                    <span className="text-gray-600">{pkg.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-brand-yellow mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    size="lg"
                    className={`w-full ${
                      pkg.popular
                        ? 'bg-brand-yellow hover:bg-brand-yellow-light text-brand-charcoal'
                        : 'bg-brand-charcoal hover:bg-brand-charcoal-light text-white'
                    }`}
                  >
                    Paketi Seç
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Müşteri Yorumları */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-charcoal mb-4">
              Müşteri Yorumları
            </h2>
            <p className="text-xl text-brand-gray-medium max-w-3xl mx-auto">
              Paylaşımlı ofisimizden yararlanan müşterilerimizin deneyimleri ve başarı hikayeleri.
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
                className="bg-white rounded-xl shadow-lg p-8"
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
                  <div className="w-12 h-12 bg-brand-yellow/10 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-brand-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-charcoal">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-yellow to-brand-yellow-light">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-brand-charcoal mb-6">
              Hemen Başlayın!
            </h2>
            <p className="text-xl text-brand-charcoal/80 mb-8 max-w-2xl mx-auto">
              Paylaşımlı ofisimizde yerinizi ayırtın ve işinizi bir sonraki seviyeye taşıyın. 
              İlk ay %50 indirimli!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-brand-charcoal hover:bg-brand-charcoal-light text-white shadow-lg"
              >
                Ücretsiz Danışmanlık
                <Phone className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white"
              >
                Ofis Turu Al
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
