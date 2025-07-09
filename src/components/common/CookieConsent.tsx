import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cookie, 
  X, 
  Settings, 
  Check, 
  Shield, 
  BarChart3, 
  Wrench, 
  Target,
  ExternalLink,
  Info
} from 'lucide-react';
import { CookieManager } from '../../utils/cookieManager';
import Button from './Button';

interface CookieCategoryConfig {
  id: 'essential' | 'analytics' | 'functional' | 'marketing';
  name: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  required: boolean;
  enabled: boolean;
  purposes: string[];
  cookies: string[];
}

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [categories, setCategories] = useState<CookieCategoryConfig[]>([
    {
      id: 'essential',
      name: 'Zorunlu Çerezler',
      description: 'Web sitesinin temel işlevleri için gerekli çerezlerdir. Bu çerezler devre dışı bırakılamaz.',
      icon: Shield,
      required: true,
      enabled: true,
      purposes: [
        'Oturum yönetimi ve güvenlik',
        'CSRF koruması',
        'Dil seçimi kaydetme',
        'Temel site işlevselliği'
      ],
      cookies: ['sessionId', 'csrfToken', 'language', 'userConsent']
    },
    {
      id: 'analytics',
      name: 'Analitik Çerezler',
      description: 'Site kullanımını analiz etmek ve performansı iyileştirmek için kullanılır.',
      icon: BarChart3,
      required: false,
      enabled: false,
      purposes: [
        'Sayfa görüntüleme sayıları',
        'Oturum süresi ve çıkma oranı',
        'Tıklama olayları analizi',
        'Cihaz ve tarayıcı bilgileri',
        'Yaklaşık coğrafi konum'
      ],
      cookies: ['_ga', '_ga_*', '_gid', '_gat', 'gtag']
    },
    {
      id: 'functional',
      name: 'İşlevsel Çerezler',
      description: 'Kullanıcı tercihlerini hatırlayarak daha iyi bir deneyim sunar.',
      icon: Wrench,
      required: false,
      enabled: false,
      purposes: [
        'Tema tercihleri (açık/koyu mod)',
        'Form verilerini hatırlama',
        'Kullanıcı özelleştirmeleri',
        'Dil ve bölge ayarları'
      ],
      cookies: ['user_preferences', 'theme', 'saved_forms']
    },
    {
      id: 'marketing',
      name: 'Pazarlama Çerezler',
      description: 'Kişiselleştirilmiş reklamlar ve retargeting için kullanılır.',
      icon: Target,
      required: false,
      enabled: false,
      purposes: [
        'Facebook Pixel ve retargeting',
        'Google Ads ve dönüşüm takibi',
        'Kişiselleştirilmiş reklam içeriği',
        'Sosyal medya entegrasyonu'
      ],
      cookies: ['_fbp', '_fbc', 'fr', 'ads_preferences']
    }
  ]);

  useEffect(() => {
    // Check if user has already given consent
    const existingConsent = CookieManager.getConsent();
    
    if (!existingConsent) {
      // Show cookie banner after a small delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else {
      // Apply existing consent
      CookieManager.applyConsent(existingConsent);
      
      // Update categories based on existing consent
      setCategories(prev => prev.map(category => ({
        ...category,
        enabled: category.required || existingConsent[category.id]
      })));
    }
  }, []);

  const handleAcceptAll = async () => {
    const consent = {
      essential: true,
      analytics: true,
      functional: true,
      marketing: true
    };
    
    await CookieManager.setConsent(consent);
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleRejectAll = async () => {
    const consent = {
      essential: true, // Essential cookies cannot be rejected
      analytics: false,
      functional: false,
      marketing: false
    };
    
    await CookieManager.setConsent(consent);
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleCustomize = () => {
    setShowSettings(true);
  };

  const handleSavePreferences = async () => {
    const consent = {
      essential: categories.find(c => c.id === 'essential')?.enabled ?? true,
      analytics: categories.find(c => c.id === 'analytics')?.enabled ?? false,
      functional: categories.find(c => c.id === 'functional')?.enabled ?? false,
      marketing: categories.find(c => c.id === 'marketing')?.enabled ?? false
    };
    
    await CookieManager.setConsent(consent);
    setIsVisible(false);
    setShowSettings(false);
  };

  const toggleCategory = (categoryId: string) => {
    setCategories(prev => prev.map(category => 
      category.id === categoryId && !category.required
        ? { ...category, enabled: !category.enabled }
        : category
    ));
  };

  const handleClose = () => {
    setIsVisible(false);
    setShowSettings(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none"
      >
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 pointer-events-auto"
          onClick={handleClose}
        />
        
        {/* Cookie Banner */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl mx-4 mb-4 bg-white rounded-xl shadow-2xl border pointer-events-auto overflow-hidden"
        >
          {!showSettings ? (
            // Main Cookie Banner
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-brand-yellow/20 rounded-lg flex items-center justify-center">
                    <Cookie className="w-5 h-5 text-brand-yellow" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Çerez Kullanımı
                    </h3>
                    <p className="text-sm text-gray-600">
                      GDPR ve KVKK uyumlu çerez yönetimi
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  Web sitemizi kullanırken deneyiminizi geliştirmek, site performansını analiz etmek ve 
                  kişiselleştirilmiş içerik sunmak için çerezler kullanıyoruz. Çerez tercihlerinizi 
                  aşağıdaki seçeneklerden yönetebilirsiniz.
                </p>
                
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Info size={16} />
                  <span>
                    Detaylı bilgi için{' '}
                    <a 
                      href="/gizlilik-politikasi" 
                      target="_blank"
                      className="text-brand-yellow hover:underline inline-flex items-center space-x-1"
                    >
                      <span>Gizlilik ve Çerez Politikamızı</span>
                      <ExternalLink size={12} />
                    </a>
                    {' '}inceleyin.
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleAcceptAll}
                  variant="primary"
                  className="flex-1 bg-brand-yellow hover:bg-brand-yellow-dark text-white font-medium"
                >
                  <Check size={16} className="mr-2" />
                  Tümünü Kabul Et
                </Button>
                
                <Button
                  onClick={handleRejectAll}
                  variant="outline"
                  className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Tümünü Reddet
                </Button>
                
                <Button
                  onClick={handleCustomize}
                  variant="outline"
                  className="flex-1 border-brand-yellow text-brand-yellow hover:bg-brand-yellow/5"
                >
                  <Settings size={16} className="mr-2" />
                  Özelleştir
                </Button>
              </div>
            </div>
          ) : (
            // Cookie Settings Panel
            <div className="max-h-[80vh] overflow-y-auto">
              {/* Settings Header */}
              <div className="sticky top-0 bg-white border-b px-6 py-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Çerez Ayarları
                  </h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Her çerez kategorisi için tercihlerinizi belirleyin
                </p>
              </div>

              {/* Categories */}
              <div className="p-6 space-y-6">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  
                  return (
                    <div 
                      key={category.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-brand-yellow/50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            category.enabled ? 'bg-brand-yellow/20' : 'bg-gray-100'
                          }`}>
                            <IconComponent 
                              size={16} 
                              className={category.enabled ? 'text-brand-yellow' : 'text-gray-500'} 
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">
                              {category.name}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              {category.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          {category.required ? (
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              Zorunlu
                            </span>
                          ) : (
                            <button
                              onClick={() => toggleCategory(category.id)}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                category.enabled ? 'bg-brand-yellow' : 'bg-gray-200'
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  category.enabled ? 'translate-x-6' : 'translate-x-1'
                                }`}
                              />
                            </button>
                          )}
                        </div>
                      </div>
                      
                      {/* Purposes */}
                      <div className="ml-11">
                        <h5 className="text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                          Kullanım Amaçları:
                        </h5>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {category.purposes.map((purpose, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                              {purpose}
                            </li>
                          ))}
                        </ul>
                        
                        <h5 className="text-xs font-medium text-gray-700 mb-2 mt-3 uppercase tracking-wide">
                          Çerez Adları:
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {category.cookies.map((cookie, index) => (
                            <span 
                              key={index}
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                            >
                              {cookie}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Settings Footer */}
              <div className="sticky bottom-0 bg-white border-t px-6 py-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleSavePreferences}
                    variant="primary"
                    className="flex-1 bg-brand-yellow hover:bg-brand-yellow-dark text-white font-medium"
                  >
                    <Check size={16} className="mr-2" />
                    Tercihleri Kaydet
                  </Button>
                  
                  <Button
                    onClick={handleAcceptAll}
                    variant="outline"
                    className="border-brand-yellow text-brand-yellow hover:bg-brand-yellow/5"
                  >
                    Tümünü Kabul Et
                  </Button>
                </div>
                
                <p className="text-xs text-gray-500 mt-3 text-center">
                  Çerez tercihlerinizi istediğiniz zaman değiştirebilirsiniz.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;
