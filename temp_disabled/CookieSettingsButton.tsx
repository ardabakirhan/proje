import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Cookie } from 'lucide-react';
import CookieSettings from './CookieSettings';

interface CookieSettingsButtonProps {
  variant?: 'footer' | 'floating';
  className?: string;
}

const CookieSettingsButton: React.FC<CookieSettingsButtonProps> = ({ 
  variant = 'footer',
  className = '' 
}) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  if (variant === 'floating') {
    return (
      <>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, type: 'spring', stiffness: 200 }}
          className={`fixed bottom-6 right-6 z-40 ${className}`}
        >
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="bg-white hover:bg-gray-50 text-gray-700 rounded-full p-3 shadow-lg border hover:shadow-xl transition-all duration-300 group"
            title="Çerez Ayarları"
            aria-label="Çerez ayarlarını aç"
          >
            <div className="relative">
              <Cookie className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <Settings className="w-3 h-3 absolute -bottom-1 -right-1 bg-brand-yellow text-white rounded-full p-0.5" />
            </div>
          </button>
        </motion.div>

        <CookieSettings 
          isOpen={isSettingsOpen} 
          onClose={() => setIsSettingsOpen(false)} 
        />
      </>
    );
  }

  return (
    <>
      <button
        onClick={() => setIsSettingsOpen(true)}
        className={`inline-flex items-center space-x-2 text-gray-600 hover:text-brand-yellow transition-colors ${className}`}
      >
        <Cookie size={16} />
        <span className="text-sm">Çerez Ayarları</span>
      </button>

      <CookieSettings 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
      />
    </>
  );
};

export default CookieSettingsButton;
