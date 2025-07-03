import React from 'react';
import ContactSection from '../components/sections/ContactSection';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Users, Building2, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  
  const stats = [
    {
      icon: Building2,
      number: '1',
      label: t('contact.stats.office.label'),
      description: t('contact.stats.office.description')
    },
    {
      icon: Users,
      number: '20+',
      label: t('contact.stats.team.label'),
      description: t('contact.stats.team.description')
    },
    {
      icon: Globe,
      number: '24/7',
      label: t('contact.stats.support.label'),
      description: t('contact.stats.support.description')
    }
  ];

  const departments = [
    {
      icon: Mail,
      title: t('contact.departments.general.title'),
      email: 'info@iletisimgroup.com',
      description: t('contact.departments.general.description')
    },
    {
      icon: Users,
      title: t('contact.departments.sales.title'),
      email: 'satis@iletisimgroup.com.tr',
      description: t('contact.departments.sales.description')
    },
    {
      icon: Building2,
      title: t('contact.departments.corporate.title'),
      email: 'kurumsal@iletisimgroup.com.tr',
      description: t('contact.departments.corporate.description')
    },
    {
      icon: Phone,
      title: t('contact.departments.support.title'),
      email: 'destek@iletisimgroup.com.tr',
      description: t('contact.departments.support.description')
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
              {t('contact.title')}
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              {t('contact.subtitle')}
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
              {t('contact.departments.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('contact.departments.description')}
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
                  info@iletisimgroup.com<br />
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
              Ofis Lokasyonumuz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bursa Nilpark AVM'deki merkez ofisimizden tüm hizmetlerimizi sunmaktayız.
            </p>
          </motion.div>

          <div className="flex justify-center">
            {/* Bursa Office */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md"
            >
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <Building2 className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Bursa</h3>
                  <p className="text-primary-100">Merkez Ofis</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Adres</h4>
                <p className="text-gray-600 mb-4">
                  Karaman Mah. İzmir Yolu Cd. No:90<br />
                  Nilpark AVM & Ofis Kat:6 Daire:8<br />
                  Nilüfer/BURSA
                </p>
                <h4 className="font-semibold text-gray-900 mb-2">İletişim</h4>
                <p className="text-gray-600">
                  Tel: +90 212 335 65 00<br />
                  E-posta: info@iletisimgroup.com
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
