import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Globe, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchModal from '../common/SearchModal';
import { useLanguage } from '../../contexts/LanguageContext';
import { createNavigationItems } from '../../utils';
import type { Language } from '../../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  
  const { currentLanguage, setLanguage, t } = useLanguage();
  
  // Generate navigation items with translations
  const navigationItems = useMemo(() => createNavigationItems(t), [t]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const languageOptions = [
    { code: 'tr' as Language, label: 'TUR', flag: '🇹🇷' },
    { code: 'en' as Language, label: 'ENG', flag: '🇬🇧' },
    { code: 'fr' as Language, label: 'FRA', flag: '🇫🇷' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-white'
      }`}
    >
      {/* Language selector bar */}
      <div className="bg-secondary-50 border-b border-secondary-200">        <div className="container-custom">
          <div className="flex justify-end items-center py-2">
            <div className="flex items-center space-x-4 text-sm relative">
              <button 
                className="flex items-center space-x-1 text-secondary-600 hover:text-brand-yellow transition-colors"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <Globe size={16} />
                <span>{languageOptions.find(lang => lang.code === currentLanguage)?.label}</span>
                <ChevronDown 
                  size={12} 
                  className={`transition-transform duration-200 ${
                    isLanguageOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {/* Language Dropdown */}
              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-secondary-200 py-1 z-50"
                  >
                    {languageOptions.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLanguageOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-sm transition-colors flex items-center space-x-2 ${
                          currentLanguage === lang.code
                            ? 'bg-brand-yellow/10 text-brand-yellow font-medium'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-brand-yellow'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="border-b border-secondary-100">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">            {/* Logo */}            <Link 
              to="/" 
              className="flex items-center space-x-2 text-2xl font-bold text-brand-charcoal"
            >
              <div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center text-brand-charcoal font-bold">
                İ
              </div>
              <span>İletişim Group</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative group">                  <button
                    className="flex items-center space-x-1 text-secondary-700 hover:text-brand-yellow font-medium transition-colors py-2"
                    onClick={() => toggleDropdown(item.label)}
                  >
                    <span>{item.label}</span>
                    {item.children && (
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.children && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-secondary-200 py-2 z-50"
                        >                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              className="block px-4 py-3 text-secondary-700 hover:text-brand-yellow hover:bg-brand-yellow/10 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}            </div>            {/* Search Button */}            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden lg:flex items-center p-2 text-secondary-600 hover:text-brand-yellow transition-colors mr-4"
              title={t('common.search')}
            >
              <Search size={20} />
            </button>

            {/* Mobile menu button */}
            <div className="flex items-center">              <button
                onClick={() => setIsSearchOpen(true)}
                className="lg:hidden p-2 text-secondary-600 hover:text-brand-yellow transition-colors mr-2"
                title={t('common.search')}
              >
                <Search size={20} />
              </button>
              <button
                className="lg:hidden p-2 text-secondary-600 hover:text-brand-yellow transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-b border-secondary-200 overflow-hidden"
          >
            <div className="container-custom py-4">
              {navigationItems.map((item) => (
                <div key={item.label} className="border-b border-secondary-100 last:border-b-0">                  <button
                    className="flex items-center justify-between w-full py-4 text-left text-secondary-700 hover:text-brand-yellow font-medium transition-colors"
                    onClick={() => toggleDropdown(item.label)}
                  >
                    <span>{item.label}</span>
                    {item.children && (
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pb-4 pl-4 space-y-2"
                    >
                      {item.children.map((child) => (                        <Link
                          key={child.label}
                          to={child.href}
                          className="block py-2 text-secondary-600 hover:text-brand-yellow transition-colors"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}      </AnimatePresence>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
};

export default Header;
