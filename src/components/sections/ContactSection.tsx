import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  Building2,
  Globe,
  Users
} from 'lucide-react';
import Button from '../common/Button';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };
  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.info.address.title'),
      content: t('contact.info.address.content'),
      link: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: t('contact.info.phone.title'),
      content: t('contact.info.phone.content'),
      link: 'tel:+902121234567'    },
    {
      icon: Mail,
      title: t('contact.info.email.title'),
      content: t('contact.info.email.content'),
      link: 'mailto:info@iletisimgroup.com.tr'
    },
    {
      icon: Clock,
      title: t('contact.info.hours.title'),
      content: t('contact.info.hours.content'),
      link: null
    }
  ];

  const offices = [
    {
      city: t('contact.offices.istanbul.city'),
      address: t('contact.offices.istanbul.address'),
      phone: '+90 212 123 45 67',
      isHeadquarter: true
    },
    {
      city: t('contact.offices.ankara.city'),
      address: t('contact.offices.ankara.address'),
      phone: '+90 312 987 65 43',
      isHeadquarter: false
    },
    {
      city: 'İzmir',
      address: 'Alsancak Mahallesi, Kordon Cad. No:789',
      phone: '+90 232 555 44 33',
      isHeadquarter: false
    }
  ];

  const stats = [
    {
      icon: Building2,
      number: '3',
      label: 'Ofis Lokasyonu',
      description: 'Türkiye genelinde'
    },
    {
      icon: Users,
      number: '200+',
      label: 'Uzman Ekip',
      description: 'Farklı disiplinlerden'
    },
    {
      icon: Globe,
      number: '24/7',
      label: 'Destek Hattı',
      description: 'Müşteri hizmetleri'
    }
  ];

  return (
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
            Bizimle İletişime Geçin
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sorularınız, projeleriniz veya iş birliği fırsatları için 
            uzman ekibimizle iletişime geçmekten çekinmeyin.
          </p>
        </motion.div>

        {/* Contact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Mesaj Gönderin
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Mesajınız Gönderildi!
                </h4>
                <p className="text-gray-600">
                  En kısa sürede size dönüş yapacağız.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Şirket
                    </label>
                    <input
                      type="text"
                      name="company"                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all"
                      placeholder="Şirket adı"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Konu *
                    </label>
                    <select                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all"
                    >
                      <option value="">Konu seçin</option>
                      <option value="genel">Genel Bilgi</option>
                      <option value="hizmetler">Hizmetlerimiz</option>
                      <option value="kariyer">Kariyer</option>
                      <option value="ortaklik">İş Ortaklığı</option>
                      <option value="destek">Teknik Destek</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all resize-vertical"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-brand-yellow hover:bg-brand-yellow-dark text-brand-charcoal"
                >
                  Mesajı Gönder
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                İletişim Bilgileri
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 whitespace-pre-line">
                        {info.content}
                      </p>
                      {info.link && (
                        <a
                          href={info.link}
                          className="text-primary-600 hover:text-primary-700 text-sm font-medium inline-flex items-center mt-2"
                        >
                          Detay
                          <Send className="w-4 h-4 ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ofis Lokasyonları
              </h3>
              
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 ${
                      office.isHeadquarter
                        ? 'border-primary-200 bg-primary-50'
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">
                        {office.city}
                      </h4>
                      {office.isHeadquarter && (
                        <span className="text-xs bg-primary-600 text-white px-2 py-1 rounded-full">
                          Merkez Ofis
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-1">
                      {office.address}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {office.phone}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
