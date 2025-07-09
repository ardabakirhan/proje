import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, ArrowLeft, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import Layout from '../components/layout/Layout';

interface SectorInfo {
  name: string;
  color: string;
  description: string;
  endpoint: string;
}

const sectorConfig: Record<string, SectorInfo> = {
  'hukuk': {
    name: 'Hukuk Hizmetleri',
    color: 'bg-red-600',
    description: 'Hukuki danışmanlık ve destek talebinizi iletin.',
    endpoint: '/forms/legal'
  },
  'insaat': {
    name: 'İnşaat',
    color: 'bg-orange-600',
    description: 'İnşaat projeleriniz için danışmanlık talebinizi iletin.',
    endpoint: '/forms/construction'
  },
  'ofis-gayrimenkul': {
    name: 'Ofis ve Gayrimenkul',
    color: 'bg-green-600',
    description: 'Gayrimenkul ve ofis hizmetleri için talebinizi iletin.',
    endpoint: '/forms/realestate'
  },
  'ticaret': {
    name: 'Ticaret ve İthalat',
    color: 'bg-purple-600',
    description: 'Ticaret ve ithalat hizmetleri için talebinizi iletin.',
    endpoint: '/forms/trade'
  },
  'iletisim': {
    name: 'İletişim',
    color: 'bg-blue-600',
    description: 'Genel iletişim ve bilgi talebinizi iletin.',
    endpoint: '/forms/communication'
  }
};

const SectorForm: React.FC = () => {
  const { sector } = useParams<{ sector: string }>();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const sectorInfo = sector ? sectorConfig[sector] : null;

  useEffect(() => {
    if (!sectorInfo) {
      navigate('/');
    }
  }, [sector, sectorInfo, navigate]);

  if (!sectorInfo) {
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';
      const response = await fetch(`${API_BASE_URL}${sectorInfo.endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setErrorMessage(result.error || 'Mesaj gönderilemedi');
      }
    } catch (error) {
      setErrorMessage('Bağlantı hatası. Lütfen tekrar deneyin.');
      console.error('Sector form error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Geri Dön
            </button>
            
            <div className={`inline-block px-4 py-2 ${sectorInfo.color} text-white rounded-full text-sm font-medium mb-4`}>
              {sectorInfo.name}
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Danışmanlık Talebi
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {sectorInfo.description}
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Ad Soyad & E-posta */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    placeholder="Adınızı ve soyadınızı giriniz"
                    disabled={isLoading}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    placeholder="E-posta adresinizi giriniz"
                    disabled={isLoading}
                    required
                  />
                </div>
              </div>

              {/* Row 2: Telefon & Şirket */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    placeholder="Telefon numaranızı giriniz"
                    disabled={isLoading}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Şirket (Opsiyonel)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    placeholder="Şirket adınızı giriniz"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Konu */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Konu *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  placeholder="Talebinizin konusunu giriniz"
                  disabled={isLoading}
                  required
                />
              </div>

              {/* Mesaj */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mesaj/Talep Detayları *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 resize-none"
                  placeholder="Talebinizin detaylarını açıklayınız..."
                  disabled={isLoading}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`inline-flex items-center px-8 py-3 ${sectorInfo.color} hover:opacity-90 disabled:opacity-50 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100`}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Gönderiliyor...
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Talep Gönder
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-green-50 text-green-800 rounded-lg border border-green-200 flex items-start"
              >
                <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">
                    Talebiniz başarıyla {sectorInfo.name} departmanına iletildi.
                  </p>
                  <p className="text-sm mt-1">
                    Size en kısa sürede telefon ve e-posta ile geri dönüş yapacağız.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-red-50 text-red-800 rounded-lg border border-red-200 flex items-start"
              >
                <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">{errorMessage}</p>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6"
          >
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Bilgilendirme
            </h3>
            <ul className="text-blue-800 space-y-1 text-sm">
              <li>• Talebiniz doğrudan {sectorInfo.name} departmanımıza iletilecektir.</li>
              <li>• Uzman ekibimiz genellikle 24 saat içerisinde geri dönüş yapmaktadır.</li>
              <li>• Acil durumlar için belirttiğiniz telefon numarasından sizi arayabiliriz.</li>
              <li>• Kişisel bilgileriniz gizlilik politikamız kapsamında korunmaktadır.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default SectorForm;