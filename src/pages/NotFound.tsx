import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Large 404 Number */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-9xl font-bold text-primary-600 mb-4"
          >
            404
          </motion.div>

          {/* Error Message */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Sayfa Bulunamadı
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-600 mb-8 text-lg"
          >
            Aradığınız sayfa mevcut değil veya taşınmış olabilir. 
            Ana sayfaya dönmek için aşağıdaki bağlantıları kullanabilirsiniz.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link to="/">
              <Button size="lg" className="w-full sm:w-auto">
                <Home className="w-5 h-5 mr-2" />
                Ana Sayfaya Dön
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Geri Git
            </Button>
          </motion.div>

          {/* Popular Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center justify-center">
              <HelpCircle className="w-5 h-5 mr-2" />
              Popüler Sayfalar
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Link 
                to="/hakkimizda" 
                className="text-primary-600 hover:text-primary-800 transition-colors text-sm p-2 hover:bg-primary-50 rounded"
              >
                Hakkımızda
              </Link>
              <Link 
                to="/hizmetler" 
                className="text-primary-600 hover:text-primary-800 transition-colors text-sm p-2 hover:bg-primary-50 rounded"
              >
                Hizmetlerimiz
              </Link>
              <Link 
                to="/yatirimci-iliskileri" 
                className="text-primary-600 hover:text-primary-800 transition-colors text-sm p-2 hover:bg-primary-50 rounded"
              >
                Yatırımcı İlişkileri
              </Link>
              <Link 
                to="/kariyer" 
                className="text-primary-600 hover:text-primary-800 transition-colors text-sm p-2 hover:bg-primary-50 rounded"
              >
                Kariyer
              </Link>
              <Link 
                to="/surdurulebilirlik" 
                className="text-primary-600 hover:text-primary-800 transition-colors text-sm p-2 hover:bg-primary-50 rounded"
              >
                Sürdürülebilirlik
              </Link>
              <Link 
                to="/iletisim" 
                className="text-primary-600 hover:text-primary-800 transition-colors text-sm p-2 hover:bg-primary-50 rounded"
              >
                İletişim
              </Link>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-8 text-gray-500 text-sm"
          >
            <p>Yardıma mı ihtiyacınız var?</p>
            <p>
              <a 
                href="mailto:info@iletisimgroup.com" 
                className="text-primary-600 hover:text-primary-800 transition-colors"
              >
                info@iletisimgroup.com
              </a> 
              {' '}adresinden bize ulaşabilirsiniz.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
