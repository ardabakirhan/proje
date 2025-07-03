import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Globe, 
  Search, 
  ArrowRight, 
  Play, 
  Building2, 
  Users, 
  Target 
} from 'lucide-react';
import SearchModal from '../common/SearchModal';
import { useLanguage } from '../../contexts/LanguageContext';
import { createNavigationItems } from '../../utils';
import type { Language } from '../../contexts/LanguageContext';

const MergedHeroHeader: React.FC = () => {
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
  const stats = [
    { icon: Building2, value: '10+', label: t('stats.sectors'), description: t('stats.sectorsDesc') },
    { icon: Users, value: '20+', label: t('stats.employees'), description: t('stats.employeesDesc') },
    { icon: Globe, value: '15+', label: t('stats.countries'), description: t('stats.countriesDesc') },
    { icon: Target, value: '₺50M+', label: t('stats.revenue'), description: t('stats.revenueDesc') },
  ];

  const languageOptions = [
    { code: 'tr' as Language, label: 'TUR', flag: '🇹🇷' },
    { code: 'en' as Language, label: 'ENG', flag: '🇬🇧' },
    { code: 'fr' as Language, label: 'FRA', flag: '🇫🇷' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-brand-gray-light">      {/* Professional Business Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/75 via-brand-charcoal-light/55 to-brand-charcoal/70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/8 via-transparent to-brand-yellow/12"></div>
      </div>

      {/* Fixed Header Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
            : 'bg-transparent'
        }`}
      >        {/* Language selector bar - only show when not scrolled */}
        <div className={`border-b transition-all duration-300 ${
          isScrolled 
            ? 'bg-transparent border-transparent h-0 overflow-hidden' 
            : 'bg-white/10 backdrop-blur-sm border-white/20 h-auto'
        }`}>
          <div className="container-custom">
            <div className="flex justify-end items-center py-2">
              <div className="flex items-center space-x-4 text-sm relative">
                <button 
                  className={`flex items-center space-x-1 transition-colors ${
                    isScrolled 
                      ? 'text-secondary-600 hover:text-brand-yellow' 
                      : 'text-white/80 hover:text-brand-yellow'
                  }`}
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
        <nav className={`border-b transition-all duration-300 ${
          isScrolled 
            ? 'border-secondary-100' 
            : 'border-white/20'
        }`}>
          <div className="container-custom">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}              <Link 
                to="/" 
                className={`flex items-center space-x-2 text-2xl font-bold transition-colors ${
                  isScrolled 
                    ? 'text-brand-charcoal' 
                    : 'text-white'
                }`}
              >
                <img 
                  src={isScrolled ? "/images/logo/iletisim-group-icon.svg" : "/images/logo/iletisim-group-logo-white.svg"} 
                  alt="İletişim Group" 
                  className="h-10 w-auto"
                />
                <span>İletişim Group</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <div key={item.label} className="relative group">
                    {item.children ? (
                      <button
                        className={`flex items-center space-x-1 font-medium transition-colors py-2 ${
                          isScrolled 
                            ? 'text-secondary-700 hover:text-brand-yellow' 
                            : 'text-white hover:text-brand-yellow'
                        }`}
                        onClick={() => toggleDropdown(item.label)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        className={`flex items-center space-x-1 font-medium transition-colors py-2 ${
                          isScrolled 
                            ? 'text-secondary-700 hover:text-brand-yellow' 
                            : 'text-white hover:text-brand-yellow'
                        }`}
                      >
                        <span>{item.label}</span>
                      </Link>
                    )}

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
                          >
                            {item.children.map((child) => (
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
                ))}
              </div>

              {/* Search Button */}              <button
                onClick={() => setIsSearchOpen(true)}
                className={`hidden lg:flex items-center p-2 transition-colors mr-4 ${
                  isScrolled 
                    ? 'text-secondary-600 hover:text-brand-yellow' 
                    : 'text-white hover:text-brand-yellow'
                }`}
                title={t('common.search')}
              >
                <Search size={20} />
              </button>

              {/* Mobile menu button */}              <div className="flex items-center">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className={`lg:hidden p-2 transition-colors mr-2 ${
                    isScrolled 
                      ? 'text-secondary-600 hover:text-brand-yellow' 
                      : 'text-white hover:text-brand-yellow'
                  }`}
                  title={t('common.search')}
                >
                  <Search size={20} />
                </button>
                <button
                  className={`lg:hidden p-2 transition-colors ${
                    isScrolled 
                      ? 'text-secondary-600 hover:text-brand-yellow' 
                      : 'text-white hover:text-brand-yellow'
                  }`}
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
              className="lg:hidden bg-white/95 backdrop-blur-sm border-b border-secondary-200 overflow-hidden"
            >
              <div className="container-custom py-4">
                {navigationItems.map((item) => (
                  <div key={item.label} className="border-b border-secondary-100 last:border-b-0">
                    {item.children ? (
                      <button
                        className="flex items-center justify-between w-full py-4 text-left text-secondary-700 hover:text-brand-yellow font-medium transition-colors"
                        onClick={() => toggleDropdown(item.label)}
                      >
                        <span>{item.label}</span>
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        className="flex items-center justify-between w-full py-4 text-left text-secondary-700 hover:text-brand-yellow font-medium transition-colors"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setActiveDropdown(null);
                        }}
                      >
                        <span>{item.label}</span>
                      </Link>
                    )}

                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pb-4 pl-4 space-y-2"
                      >
                        {item.children.map((child) => (
                          <Link
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
          )}
        </AnimatePresence>

        {/* Search Modal */}
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </header>

      {/* Hero Content */}
      <div className="container-custom relative z-10 flex-1 flex flex-col justify-center py-20 pt-40">
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto text-left lg:text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              <span className="block mb-2">{t('hero.title')}</span>
              <span className="block text-brand-yellow">{t('hero.subtitle')}</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300 mb-8 leading-relaxed">
              {t('hero.tagline')}
            </h2>
          </motion.div>          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >            <button className="group bg-brand-yellow hover:bg-brand-yellow-light text-brand-charcoal font-semibold py-4 px-8 rounded-md transition-all duration-300 flex items-center space-x-2 text-lg shadow-lg hover:shadow-xl">
              <span>{t('hero.exploreBtn')}</span>
              <ArrowRight 
                size={20} 
                className="group-hover:translate-x-1 transition-transform duration-300" 
              />
            </button>

            <button className="group flex items-center space-x-3 text-white hover:text-brand-yellow transition-colors duration-300">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-brand-yellow/20 transition-all duration-300">
                <Play size={18} className="ml-0.5 text-white" />
              </div>
              <span className="text-lg font-medium">{t('hero.videoBtn')}</span>
            </button>
          </motion.div>
        </div>

        {/* Stats Overlay Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="text-center group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-brand-yellow/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-yellow/30 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-brand-yellow" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-base font-semibold text-brand-yellow mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-300">
                    {stat.description}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}            className="w-1 h-3 bg-brand-yellow/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MergedHeroHeader;
