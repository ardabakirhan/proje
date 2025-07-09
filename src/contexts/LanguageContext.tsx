import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type Language = 'tr' | 'en' | 'fr';

// Type for nested translation structure
type TranslationValue = string | { [key: string]: TranslationValue };
type Translations = Record<string, TranslationValue>;

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('tr'); // Default Türkçe
  const [translations, setTranslations] = useState<Translations>({});

  useEffect(() => {
    // IP bazlı ülke tespiti ve dil ayarı
    const detectLanguageByLocation = async () => {
      try {
        // Öncelikle kaydedilmiş dili kontrol et
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage && ['tr', 'en', 'fr'].includes(savedLanguage)) {
          setCurrentLanguage(savedLanguage);
          return;
        }

        // IP bazlı lokasyon tespiti
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.country_code) {
          const countryCode = data.country_code.toLowerCase();
          
          // Ülke koduna göre dil ayarı
          switch (countryCode) {
            case 'tr':
              setCurrentLanguage('tr');
              break;
            case 'fr':
              setCurrentLanguage('fr');
              break;
            default:
              // Diğer tüm ülkeler için İngilizce
              setCurrentLanguage('en');
              break;
          }
        } else {
          // API çalışmazsa tarayıcı dilini kontrol et
          const browserLanguage = navigator.language.slice(0, 2) as Language;
          if (['tr', 'en', 'fr'].includes(browserLanguage)) {
            setCurrentLanguage(browserLanguage);
          } else {
            setCurrentLanguage('en');
          }
        }
      } catch (error) {
        console.error('Location detection failed:', error);
        // Hata durumunda tarayıcı dili
        const browserLanguage = navigator.language.slice(0, 2) as Language;
        if (['tr', 'en', 'fr'].includes(browserLanguage)) {
          setCurrentLanguage(browserLanguage);
        } else {
          setCurrentLanguage('en');
        }
      }
    };

    detectLanguageByLocation();
  }, []);

  useEffect(() => {
    // Çeviri dosyasını yükle
    const loadTranslations = async () => {
      try {
        const module = await import(`../locales/${currentLanguage}.json`);
        setTranslations(module.default);
      } catch (error) {
        console.error(`Failed to load translations for ${currentLanguage}:`, error);
        // Varsayılan olarak İngilizce yükle
        try {
          const fallbackModule = await import('../locales/en.json');
          setTranslations(fallbackModule.default);
        } catch (fallbackError) {
          console.error('Failed to load fallback translations:', fallbackError);
        }
      }
    };

    loadTranslations();
  }, [currentLanguage]);
  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language);
  };
  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let value: TranslationValue = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Çeviri bulunamazsa key'i döndür
      }
    }
    
    return typeof value === 'string' ? value : key;
  }, [translations]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
