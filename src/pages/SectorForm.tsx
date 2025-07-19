import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
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
      // Yeni API'ye uygun veri gönderimi
      const response = await fetch('http://localhost:8000/api/sector-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          sector: sectorInfo?.name || '',
          subject: formData.subject,
          message: formData.message
        })
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
        setErrorMessage(result.message || 'Mesaj gönderilemedi');
      }
    } catch (error) {
      setErrorMessage('Bağlantı hatası oluştu. Lütfen tekrar deneyin.');
      console.error('API Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Modern Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            {/* Navigation */}
            <div className="flex items-center justify-between mb-8">
              <motion.button
                onClick={() => navigate(-1)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-xl shadow-sm border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Geri Dön</span>
              </motion.button>
              
              <div className={`px-4 py-2 ${sectorInfo.color} text-white rounded-full text-sm font-semibold shadow-lg`}>
                {sectorInfo.name}
              </div>
            </div>
            
            {/* Title Section */}
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                Danışmanlık Talebi
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              >
                Danışmanlık talebinizi iletmek için aşağıdaki formu doldurabilirsiniz.
              </motion.p>
            </div>
          </motion.div>

          {/* Modern Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-gray-100"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Talebiniz Başarıyla Gönderildi!
                </h3>
                <p className="text-gray-600 text-lg">
                  En kısa sürede size dönüş yapacağız.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-red-700">{errorMessage}</span>
                  </motion.div>
                )}

                {/* Row 1: Ad Soyad & E-posta */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                      Ad Soyad <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500 text-base"
                      placeholder="Adınızı ve soyadınızı giriniz"
                      disabled={isLoading}
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                      E-posta <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500 text-base"
                      placeholder="E-posta adresinizi giriniz"
                      disabled={isLoading}
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Telefon & Şirket */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                      Telefon <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500 text-base"
                      placeholder="Telefon numaranızı giriniz"
                      disabled={isLoading}
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-3">
                      Şirket <span className="text-gray-400">(Opsiyonel)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500 text-base"
                      placeholder="Şirket adınızı giriniz"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Konu */}
                <div className="relative">
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                    Konu <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500 text-base"
                    placeholder="Talebinizin konusunu giriniz"
                    disabled={isLoading}
                    required
                  />
                </div>

                {/* Mesaj */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Mesaj/Talep Detayları <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500 text-base resize-none"
                    placeholder="Talebinizin detaylarını açıklayınız..."
                    disabled={isLoading}
                    required
                    maxLength={1000}
                  />
                  <div className="absolute bottom-3 right-4 text-sm text-gray-400">
                    {formData.message.length}/1000
                  </div>
                </div>

                {/* Privacy Notice */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-sm text-blue-800 leading-relaxed">
                    <span className="font-semibold">Yasal Uyarı:</span> Bu formu doldurduğunuzda bilgilerinizin saklanacağını ve e-posta ile iletileceğini kabul etmiş olursunuz. 
                    Kişisel verileriniz{' '}
                    <a href="/gizlilik-politikasi" className="text-blue-600 hover:text-blue-800 underline font-medium">
                      Gizlilik Politikamız
                    </a>{' '}
                    kapsamında işlenir.
                  </p>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-base"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Talep Gönder
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6"
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