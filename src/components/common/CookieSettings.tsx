import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Shield, 
  BarChart3, 
  Wrench, 
  Target, 
  Check, 
  X,
  Info,
  RefreshCw,
  Download,
  Eye
} from 'lucide-react';
import { CookieManager, type CookieConsent } from '../../utils/cookieManager';
import Button from './Button';

interface CookieSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookieSettings: React.FC<CookieSettingsProps> = ({ isOpen, onClose }) => {
  const [categories, setCategories] = useState([
    {
      id: 'essential' as const,
      name: 'Zorunlu Çerezler',
      description: 'Web sitesinin çalışması için gerekli olan çerezler. Devre dışı bırakılamaz.',
      icon: Shield,
      required: true,
      enabled: true,
      purposes: [
        'Oturum yönetimi ve kimlik doğrulama',
        'CSRF saldırılarına karşı güvenlik',
        'Dil seçimi ve site tercihleri',
        'Alışveriş sepeti ve form verileri',
        'Çerez onay durumu'
      ],
      cookies: ['sessionId', 'csrfToken', 'language', 'userConsent', 'cartData'],
      dataRetention: '1 yıl',
      thirdParty: false
    },
    {
      id: 'analytics' as const,
      name: 'Analitik Çerezler',
      description: 'Web sitesi performansını ölçer ve iyileştirmeler için veri toplar.',
      icon: BarChart3,
      required: false,
      enabled: false,
      purposes: [
        'Sayfa görüntüleme sayıları ve ziyaretçi analizi',
        'Kullanıcı davranışı ve etkileşim verileri',
        'Site performansı ve hız ölçümü',
        'Hata izleme ve site optimizasyonu',
        'Coğrafi analiz (anonim)'
      ],
      cookies: ['_ga', '_ga_*', '_gid', '_gat', 'gtag_*'],
      dataRetention: '2 yıl',
      thirdParty: true,
      providers: ['Google Analytics']
    },
    {
      id: 'functional' as const,
      name: 'İşlevsel Çerezler',
      description: 'Gelişmiş özellikler ve kişiselleştirme için kullanılır.',
      icon: Wrench,
      required: false,
      enabled: false,
      purposes: [
        'Kullanıcı arayüzü tercihleri (tema, layout)',
        'Form verilerini geçici kaydetme',
        'Video oynatıcısı ayarları',
        'Sosyal medya entegrasyonu',
        'Canlı destek widget ayarları'
      ],
      cookies: ['user_preferences', 'theme', 'ui_settings', 'video_settings'],
      dataRetention: '1 yıl',
      thirdParty: false
    },
    {
      id: 'marketing' as const,
      name: 'Pazarlama Çerezleri',
      description: 'Hedefli reklamlar ve pazarlama kampanyaları için kullanılır.',
      icon: Target,
      required: false,
      enabled: false,
      purposes: [
        'Kişiselleştirilmiş reklam gösterimi',
        'Retargeting ve yeniden pazarlama',
        'Reklam kampanyası performans ölçümü',
        'Sosyal medya takip pixelleri',
        'A/B test verileri'
      ],
      cookies: ['_fbp', '_fbc', 'fr', 'ads_*', 'pixel_*'],
      dataRetention: '90 gün',
      thirdParty: true,
      providers: ['Facebook Pixel', 'Google Ads', 'LinkedIn Insight']
    }
  ]);

  const [currentConsent, setCurrentConsent] = useState<CookieConsent | null>(null);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    // Load current consent
    const consent = CookieManager.getConsent();
    setCurrentConsent(consent);
    
    if (consent) {
      setCategories(prev => prev.map(category => ({
        ...category,
        enabled: category.required || consent[category.id]
      })));
    }
  }, [isOpen]);

  useEffect(() => {
    // Check for changes
    if (currentConsent) {
      const hasChanged = categories.some(category => 
        !category.required && category.enabled !== currentConsent[category.id]
      );
      setHasChanges(hasChanged);
    }
  }, [categories, currentConsent]);

  const toggleCategory = (categoryId: string) => {
    setCategories(prev => prev.map(category => 
      category.id === categoryId && !category.required
        ? { ...category, enabled: !category.enabled }
        : category
    ));
  };  const handleSave = () => {
    const consent = {
      essential: categories.find(c => c.id === 'essential')?.enabled ?? true,
      analytics: categories.find(c => c.id === 'analytics')?.enabled ?? false,
      functional: categories.find(c => c.id === 'functional')?.enabled ?? false,
      marketing: categories.find(c => c.id === 'marketing')?.enabled ?? false,
    };
    
    CookieManager.setConsent(consent);
    setCurrentConsent({
      ...consent,
      timestamp: Date.now(),
      version: '1.0'
    } as CookieConsent);
    setHasChanges(false);
    onClose();
  };const handleAcceptAll = () => {
    const consent = {
      essential: true,
      analytics: true,
      functional: true,
      marketing: true
    };
    
    setCategories(prev => prev.map(category => ({
      ...category,
      enabled: true
    })));
    
    CookieManager.setConsent(consent);
    setCurrentConsent({
      ...consent,
      timestamp: Date.now(),
      version: '1.0'
    } as CookieConsent);
    onClose();
  };

  const handleRejectAll = () => {
    const consent = {
      essential: true,
      analytics: false,
      functional: false,
      marketing: false
    };
    
    setCategories(prev => prev.map(category => ({
      ...category,
      enabled: category.required
    })));
    
    CookieManager.setConsent(consent);
    setCurrentConsent({
      ...consent,
      timestamp: Date.now(),
      version: '1.0'
    } as CookieConsent);
    onClose();
  };

  const handleReset = () => {
    if (currentConsent) {
      setCategories(prev => prev.map(category => ({
        ...category,
        enabled: category.required || currentConsent[category.id]
      })));
    }
  };

  const handleClearAll = () => {
    CookieManager.clearAllConsent();
    setCategories(prev => prev.map(category => ({
      ...category,
      enabled: category.required
    })));
    setCurrentConsent(null);
    onClose();
  };

  const exportConsent = () => {
    const consentData = {
      consent: currentConsent,
      timestamp: new Date().toISOString(),
      categories: categories.map(cat => ({
        id: cat.id,
        name: cat.name,
        enabled: cat.enabled
      }))
    };
    
    const blob = new Blob([JSON.stringify(consentData, null, 2)], { 
      type: 'application/json' 
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cerez-onay-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-brand-yellow/20 rounded-lg flex items-center justify-center">
              <Settings className="w-5 h-5 text-brand-yellow" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Çerez Ayarları
              </h2>
              <p className="text-sm text-gray-600">
                Gizlilik tercihlerinizi yönetin
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[60vh] px-6 py-6">
          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">GDPR ve KVKK Uyumluluğu</p>
                <p>
                  Bu ayarlar GDPR (Avrupa Genel Veri Koruma Tüzüğü) ve KVKK (Kişisel Verilerin 
                  Korunması Kanunu) gerekliliklerine uygun olarak hazırlanmıştır. Tercihlerinizi 
                  istediğiniz zaman değiştirebilirsiniz.
                </p>
              </div>
            </div>
          </div>

          {/* Current Status */}
          {currentConsent && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-900">Mevcut Onay Durumu</h3>
                <span className="text-xs text-gray-500">
                  {new Date(currentConsent.timestamp).toLocaleDateString('tr-TR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {Object.entries(currentConsent).map(([key, value]) => {
                  if (key === 'timestamp' || key === 'version') return null;
                  return (
                    <div 
                      key={key}
                      className={`text-xs px-2 py-1 rounded flex items-center space-x-1 ${
                        value ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {value ? <Check size={12} /> : <X size={12} />}
                      <span className="capitalize">{key}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Categories */}
          <div className="space-y-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              
              return (
                <div 
                  key={category.id}
                  className={`border rounded-lg p-5 transition-all ${
                    category.enabled 
                      ? 'border-brand-yellow/50 bg-brand-yellow/5' 
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  {/* Category Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        category.enabled ? 'bg-brand-yellow/20' : 'bg-gray-100'
                      }`}>
                        <IconComponent 
                          size={20} 
                          className={category.enabled ? 'text-brand-yellow' : 'text-gray-500'} 
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-gray-900">
                            {category.name}
                          </h3>
                          {category.thirdParty && (
                            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                              3. Taraf
                            </span>
                          )}
                          {category.required && (
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              Zorunlu
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          {category.description}
                        </p>
                        
                        {/* Data Retention */}
                        <div className="text-xs text-gray-500 mb-2">
                          <strong>Saklama Süresi:</strong> {category.dataRetention}
                        </div>
                        
                        {/* Third Party Providers */}
                        {category.providers && (
                          <div className="text-xs text-gray-500 mb-3">
                            <strong>Sağlayıcılar:</strong> {category.providers.join(', ')}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Toggle */}
                    <div className="flex items-center ml-4">
                      {category.required ? (
                        <span className="text-sm text-gray-500">Aktif</span>
                      ) : (
                        <button
                          onClick={() => toggleCategory(category.id)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 ${
                            category.enabled ? 'bg-brand-yellow' : 'bg-gray-300'
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
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-800 mb-2">
                      Kullanım Amaçları:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {category.purposes.map((purpose, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                          {purpose}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Cookies */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-800 mb-2">
                      Çerez Adları:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {category.cookies.map((cookie, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-mono"
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
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t px-6 py-4">
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <Button
              onClick={handleSave}
              disabled={!hasChanges}
              variant="primary"
              className={`flex-1 ${
                hasChanges 
                  ? 'bg-brand-yellow hover:bg-brand-yellow-dark text-white' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Check size={16} className="mr-2" />
              Değişiklikleri Kaydet
            </Button>
            
            <Button
              onClick={handleAcceptAll}
              variant="outline"
              className="border-green-300 text-green-700 hover:bg-green-50"
            >
              Tümünü Kabul Et
            </Button>
            
            <Button
              onClick={handleRejectAll}
              variant="outline"
              className="border-red-300 text-red-700 hover:bg-red-50"
            >
              Tümünü Reddet
            </Button>
          </div>
          
          {/* Utility Buttons */}
          <div className="flex flex-wrap gap-2 text-sm">
            <button
              onClick={handleReset}
              disabled={!hasChanges}
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 disabled:opacity-50"
            >
              <RefreshCw size={14} />
              <span>Sıfırla</span>
            </button>
            
            <button
              onClick={exportConsent}
              className="flex items-center space-x-1 text-gray-600 hover:text-gray-800"
            >
              <Download size={14} />
              <span>Onayı İndir</span>
            </button>
            
            <button
              onClick={handleClearAll}
              className="flex items-center space-x-1 text-red-600 hover:text-red-800"
            >
              <X size={14} />
              <span>Tüm Onayları Temizle</span>
            </button>
            
            <a
              href="/gizlilik-politikasi"
              target="_blank"
              className="flex items-center space-x-1 text-brand-yellow hover:text-brand-yellow-dark"
            >
              <Eye size={14} />
              <span>Gizlilik Politikası</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CookieSettings;
