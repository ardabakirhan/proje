import React from 'react';
import ContactSection from '../components/sections/ContactSection';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Users, Building2, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const stats = [
    {
      icon: Building2,
      number: '3',
      label: 'Ofis Lokasyonu',
      description: 'Türkiye genelinde hizmet'
    },
    {
      icon: Users,
      number: '200+',
      label: 'Uzman Ekip',
      description: 'Deneyimli profesyoneller'
    },
    {
      icon: Globe,
      number: '24/7',
      label: 'Destek Hattı',
      description: 'Kesintisiz müşteri hizmeti'
    }
  ];

  const departments = [
    {
      icon: Mail,
      title: 'Genel Bilgi',
      email: 'info@iletisimgroup.com.tr',
      description: 'Genel sorular ve bilgi almak için'
    },
    {
      icon: Users,
      title: 'Satış Ekibi',
      email: 'satis@iletisimgroup.com.tr',
      description: 'Hizmet satışı ve teklifler için'
    },
    {
      icon: Building2,
      title: 'Kurumsal',
      email: 'kurumsal@iletisimgroup.com.tr',
      description: 'Kurumsal müşteri hizmetleri'
    },
    {
      icon: Phone,
      title: 'Destek',
      email: 'destek@iletisimgroup.com.tr',
      description: 'Teknik destek ve yardım'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">
              Bizimle İletişime Geçin
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Sorularınız, projeleriniz veya iş birliği fırsatları için 
              uzman ekibimizle iletişime geçmekten çekinmeyin. Size en uygun çözümleri sunmak için buradayız.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Contacts */}
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
              Departmanlarımız
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İhtiyacınıza göre doğru departmanımızla iletişime geçin. Uzman ekiplerimiz size yardımcı olmak için hazır.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <dept.icon className="w-6 h-6 text-primary-600" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {dept.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4">
                  {dept.description}
                </p>
                
                <a
                  href={`mailto:${dept.email}`}
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  {dept.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />

      {/* Quick Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-primary-200" />
                <h3 className="font-semibold mb-2">Merkez Ofis</h3>
                <p className="text-sm text-primary-100">
                  Maslak Mahallesi<br />
                  Büyükdere Cad. No:123<br />
                  Sarıyer/İstanbul 34398
                </p>
              </div>
              
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-3 text-primary-200" />
                <h3 className="font-semibold mb-2">Telefon</h3>
                <p className="text-sm text-primary-100">
                  +90 212 123 45 67<br />
                  +90 212 123 45 68
                </p>
              </div>
              
              <div className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-3 text-primary-200" />
                <h3 className="font-semibold mb-2">E-posta</h3>
                <p className="text-sm text-primary-100">
                  info@iletisimgroup.com.tr<br />
                  destek@iletisimgroup.com.tr
                </p>
              </div>
              
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-3 text-primary-200" />
                <h3 className="font-semibold mb-2">Çalışma Saatleri</h3>
                <p className="text-sm text-primary-100">
                  Pazartesi - Cuma: 09:00 - 18:00<br />
                  Cumartesi: 09:00 - 13:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
              Ofis Lokasyonlarımız
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Türkiye'nin üç büyük şehrinde ofislerimiz bulunmaktadır. Size en yakın ofisimizden hizmet alabilirsiniz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* İstanbul Office */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <Building2 className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">İstanbul</h3>
                  <p className="text-primary-100">Merkez Ofis</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Adres</h4>
                <p className="text-gray-600 mb-4">
                  Maslak Mahallesi, Büyükdere Cad. No:123<br />
                  Sarıyer/İstanbul 34398
                </p>
                <h4 className="font-semibold text-gray-900 mb-2">İletişim</h4>
                <p className="text-gray-600">
                  Tel: +90 212 123 45 67<br />
                  E-posta: istanbul@iletisimgroup.com.tr
                </p>
              </div>
            </motion.div>

            {/* Ankara Office */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <Building2 className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Ankara</h3>
                  <p className="text-gray-100">Bölge Ofisi</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Adres</h4>
                <p className="text-gray-600 mb-4">
                  Çankaya Mahallesi, Atatürk Bulvarı No:456<br />
                  Çankaya/Ankara 06690
                </p>
                <h4 className="font-semibold text-gray-900 mb-2">İletişim</h4>
                <p className="text-gray-600">
                  Tel: +90 312 987 65 43<br />
                  E-posta: ankara@iletisimgroup.com.tr
                </p>
              </div>
            </motion.div>

            {/* İzmir Office */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <Building2 className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">İzmir</h3>
                  <p className="text-blue-100">Bölge Ofisi</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Adres</h4>
                <p className="text-gray-600 mb-4">
                  Alsancak Mahallesi, Kordon Cad. No:789<br />
                  Konak/İzmir 35220
                </p>
                <h4 className="font-semibold text-gray-900 mb-2">İletişim</h4>
                <p className="text-gray-600">
                  Tel: +90 232 555 44 33<br />
                  E-posta: izmir@iletisimgroup.com.tr
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
