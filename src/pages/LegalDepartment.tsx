import React from 'react';
import { motion } from 'framer-motion';
import { Scale, FileText, Users, Shield, Clock, Award, CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';

const LegalDepartment: React.FC = () => {
  const legalServices = [
    {
      icon: FileText,
      title: 'Sözleşme Hazırlama',
      description: 'Ticari sözleşmeler, iş sözleşmeleri ve özel anlaşmaların profesyonel hazırlanması',
      features: ['Ticari Sözleşmeler', 'İş Sözleşmeleri', 'Gizlilik Anlaşmaları', 'Ortaklık Sözleşmeleri']
    },
    {
      icon: Scale,
      title: 'Hukuki Danışmanlık',
      description: 'Kapsamlı hukuki rehberlik ve stratejik danışmanlık hizmetleri',
      features: ['Ticaret Hukuku', 'İş Hukuku', 'Borçlar Hukuku', 'Şirketler Hukuku']
    },
    {
      icon: Shield,
      title: 'Dava Takibi',
      description: 'Mahkeme süreçlerinde profesyonel temsil ve takip hizmetleri',
      features: ['İcra Takibi', 'Mahkeme Temsili', 'Arabuluculuk', 'Uzlaştırma']
    },
    {
      icon: Users,
      title: 'Kurumsal Hukuk',
      description: 'Şirketlerin yasal süreçlerinde kapsamlı destek ve danışmanlık',
      features: ['Şirket Kuruluşu', 'Ticaret Sicili', 'Yasal Uyum', 'Risk Yönetimi']
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: '7/24 Destek',
      description: 'Acil hukuki durumlar için kesintisiz danışmanlık hizmeti'
    },
    {
      icon: Award,
      title: 'Uzman Ekip',
      description: 'Alanında deneyimli ve sertifikalı hukuk uzmanları'
    },
    {
      icon: CheckCircle,
      title: 'Güvenilir Çözümler',
      description: 'Etik değerlere bağlı, şeffaf ve sonuç odaklı hizmet'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hukuk Departmanı
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Paylaşımlı ofisimizde bulunan profesyonel hukuk departmanımız ile 
              tüm yasal ihtiyaçlarınız için güvenilir çözümler sunuyoruz.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
            >
              Randevu Al
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
              Hukuki Hizmetlerimiz
            </h2>
            <p className="text-xl text-brand-gray-medium max-w-3xl mx-auto">
              Deneyimli hukuk uzmanlarımız ile kapsamlı yasal destek ve danışmanlık hizmetleri
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {legalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
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
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-blue-50">
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
              Hukuk departmanımızın sunduğu avantajları keşfedin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <advantage.icon className="w-8 h-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-brand-charcoal mb-4">
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
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-2xl p-12 max-w-4xl mx-auto text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Hukuki Desteğe İhtiyacınız mı Var?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Deneyimli hukuk uzmanlarımızla hemen iletişime geçin. 
                İlk danışmanlık görüşmeniz ücretsizdir.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg"
                >
                  Ücretsiz Danışmanlık
                  <Scale className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  İletişim Bilgileri
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

export default LegalDepartment;