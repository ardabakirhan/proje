import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Ship, Truck, Globe, Clock, Shield, Award, CheckCircle, ArrowRight, Package } from 'lucide-react';
import Button from '../components/common/Button';

const ImportExport: React.FC = () => {
  const services = [
    {
      icon: Plane,
      title: 'Hava Kargo',
      description: 'Hızlı ve güvenilir hava yolu ile uluslararası kargo taşımacılığı',
      features: ['Ekspres Teslimat', 'Soğuk Zincir', 'Değerli Eşya', 'Canlı Hayvan']
    },
    {
      icon: Ship,
      title: 'Deniz Kargo',
      description: 'Büyük hacimli yükler için ekonomik deniz yolu taşımacılığı',
      features: ['Konteyner Taşıma', 'Ro-Ro Hizmeti', 'Proje Kargo', 'FCL/LCL']
    },
    {
      icon: Truck,
      title: 'Kara Kargo',
      description: 'Avrupa ve Asya ülkelerine kara yolu ile güvenli taşımacılık',
      features: ['Kapıdan Kapıya', 'Parsiyel Yük', 'Tam Yük', 'Express Servis']
    },
    {
      icon: Package,
      title: 'Lojistik Çözümler',
      description: 'Depolama, paketleme ve dağıtım hizmetlerinde kapsamlı çözümler',
      features: ['Depo Yönetimi', 'Gümrük Müşavirliği', 'Sigorta', 'Takip Sistemi']
    }
  ];

  const advantages = [
    {
      icon: Globe,
      title: 'Küresel Ağ',
      description: '150+ ülkede güçlü partnerlik ağı ile hizmet veriyoruz'
    },
    {
      icon: Clock,
      title: 'Hızlı Teslimat',
      description: 'Optimize edilmiş rotalar ile en hızlı teslimat sürelerini sağlıyoruz'
    },
    {
      icon: Shield,
      title: 'Güvenli Taşıma',
      description: 'Tam kapsamlı sigorta ile yüklerinizi güvence altına alıyoruz'
    },
    {
      icon: Award,
      title: 'Deneyim',
      description: '20+ yıllık tecrübe ile sektörde lider konumdayız'
    }
  ];

  const countries = [
    'Almanya', 'Fransa', 'İtalya', 'İspanya', 'Hollanda', 'Belçika',
    'Çin', 'Japonya', 'Güney Kore', 'Singapur', 'Hong Kong', 'Malezya',
    'ABD', 'Kanada', 'Meksika', 'Brezilya', 'Arjantin', 'Şili',
    'İngiltere', 'Rusya', 'Ukrayna', 'Polonya', 'Çek Cumhuriyeti'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              İthalat İhracat Şirketi
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Paylaşımlı ofisimizde bulunan lojistik şirketimiz ile dünya çapında 
              güvenilir ve hızlı kargo hizmetleri sunuyoruz.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 shadow-lg"
            >
              Teklif Al
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
              Lojistik Hizmetlerimiz
            </h2>
            <p className="text-xl text-brand-gray-medium max-w-3xl mx-auto">
              Hava, deniz ve kara yolu ile dünya çapında güvenilir kargo ve lojistik çözümleri
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
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-green-600" />
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
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-charcoal mb-4">
              Hizmet Verdiğimiz Ülkeler
            </h2>
            <p className="text-xl text-brand-gray-medium max-w-3xl mx-auto">
              Dünya çapında geniş partnerlik ağımız ile 150'den fazla ülkeye ulaşım sağlıyoruz
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-brand-charcoal mb-8 text-center">
              Başlıca Destinasyonlar
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {countries.map((country, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-green-50 rounded-lg p-3 text-center hover:bg-green-100 transition-colors duration-200"
                >
                  <span className="text-green-700 font-medium">{country}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <p className="text-xl text-brand-gray-medium max-w-3xl mx-auto">
              İthalat-ihracat şirketimizin sunduğu avantajları keşfedin
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
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-green-600" />
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
            <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl shadow-2xl p-12 max-w-4xl mx-auto text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Kargo Göndermeye Hazır mısınız?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Uzman ekibimizle iletişime geçin ve yükünüz için en uygun 
                çözümü bulalım. Online fiyat teklifi alın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-green-600 hover:bg-gray-100 shadow-lg"
                >
                  Online Fiyat Al
                  <Package className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600"
                >
                  Müşteri Hizmetleri
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

export default ImportExport;