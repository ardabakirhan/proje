import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, FileText, Building, Briefcase } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'page' | 'news' | 'service' | 'job';
  url: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // Mock search data - in a real app, this would come from an API
  const searchData: SearchResult[] = useMemo(() => [
    {
      id: '1',
      title: 'Hakkımızda',
      description: 'İletişim Group şirket profili, tarihçe ve değerlerimiz',
      type: 'page',
      url: '/hakkimizda'
    },
    {
      id: '2',
      title: 'Hizmetlerimiz',
      description: 'Kurumsal yönetim, finansal danışmanlık ve diğer hizmetlerimiz',
      type: 'service',
      url: '/hizmetler'
    },
    {
      id: '3',
      title: 'Kariyer Fırsatları',
      description: 'Açık pozisyonlar ve İletişim Group\'ta çalışma imkanları',
      type: 'job',
      url: '/kariyer'
    },
    {
      id: '4',
      title: 'Yatırımcı İlişkileri',
      description: 'Finansal raporlar, sunumlar ve yatırımcı bilgileri',
      type: 'page',
      url: '/yatirimci-iliskileri'
    },
    {
      id: '5',
      title: 'Sürdürülebilirlik',
      description: 'Çevresel ve sosyal sorumluluk projelerimiz',
      type: 'page',
      url: '/surdurulebilirlik'
    },
    {
      id: '6',
      title: 'Dijital Dönüşüm Projesi',
      description: 'Şirketimizin dijital dönüşüm süreçlerindeki öncü rolü',
      type: 'news',
      url: '/haberler/dijital-donusum'
    },
    {
      id: '7',
      title: 'Senior Software Developer',
      description: 'React ve Node.js teknolojileri ile geliştirme pozisyonu',
      type: 'job',      url: '/kariyer/senior-software-developer'
    }
  ], []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'news':
        return <FileText className="w-4 h-4" />;
      case 'job':
        return <Briefcase className="w-4 h-4" />;
      case 'service':
        return <Building className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'news':
        return 'Haber';
      case 'job':
        return 'Kariyer';
      case 'service':
        return 'Hizmet';
      case 'page':
        return 'Sayfa';
      default:
        return 'Diğer';
    }
  };

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay
    const timeoutId = setTimeout(() => {
      const filteredResults = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, searchData]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-96 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Arama yapın..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
                autoFocus
              />
              <button
                onClick={onClose}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Search Results */}
          <div className="max-h-80 overflow-y-auto">
            {isLoading && (
              <div className="p-8 text-center">
                <motion.div
                  className="w-6 h-6 border-2 border-primary-200 border-t-primary-600 rounded-full mx-auto"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <p className="mt-2 text-gray-600">Aranıyor...</p>
              </div>
            )}

            {!isLoading && query.length >= 2 && results.length === 0 && (
              <div className="p-8 text-center">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">"{query}" için sonuç bulunamadı.</p>
                <p className="text-gray-500 text-sm mt-1">Farklı anahtar kelimeler deneyin.</p>
              </div>
            )}

            {!isLoading && results.length > 0 && (
              <div className="py-2">
                {results.map((result, index) => (
                  <motion.a
                    key={result.id}
                    href={result.url}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                    onClick={onClose}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <div className="text-primary-600">
                          {getIcon(result.type)}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <h3 className="text-gray-900 font-medium">{result.title}</h3>
                          <span className="ml-2 bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                            {getTypeLabel(result.type)}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{result.description}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            )}

            {query.length < 2 && (
              <div className="p-8 text-center">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">Arama yapmak için en az 2 karakter girin.</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SearchModal;
