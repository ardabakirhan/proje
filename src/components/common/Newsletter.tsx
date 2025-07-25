import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { apiService, handleApiError } from '../../services/api';
import { useLanguage } from '../../contexts/LanguageContext';

interface NewsletterProps {
  className?: string;
}

const Newsletter: React.FC<NewsletterProps> = ({ className = '' }) => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setStatus('error');
      setMessage(t('footer.newsletter.errors.required'));
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setMessage(t('footer.newsletter.errors.invalid'));
      return;
    }    setStatus('loading');
    
    // Use real API service
    try {
      await apiService.subscribeNewsletter({
        email: email.trim(),
        consent: true
      });
      
      setStatus('success');
      setMessage(t('footer.newsletter.success'));
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(handleApiError(error));
    }
  };

  const resetStatus = () => {
    setStatus('idle');
    setMessage('');
  };

  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>      <div className="text-center mb-6">
        <div className="w-12 h-12 bg-brand-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-6 h-6 text-brand-yellow" />
        </div>        <h3 className="text-xl font-semibold text-brand-charcoal mb-2">{t('footer.newsletter.title')}</h3>
        <p className="text-brand-gray-medium text-sm">
          {t('footer.newsletter.description')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder={t('footer.newsletter.emailPlaceholder')}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== 'idle') resetStatus();
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-yellow focus:border-transparent text-gray-900 placeholder-gray-500"
            disabled={status === 'loading'}
          />
        </div>        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-brand-yellow hover:bg-brand-yellow-dark disabled:bg-gray-400 text-brand-charcoal font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          {status === 'loading' ? (
            <div className="flex items-center justify-center">
              <motion.div
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              {t('footer.newsletter.loading')}
            </div>
          ) : (
            t('footer.newsletter.subscribeButton')
          )}
        </button>
      </form>

      {/* Status Messages */}
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 p-3 rounded-lg flex items-start ${
            status === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {status === 'success' ? (
            <CheckCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
          )}
          <span className="text-sm">{message}</span>
        </motion.div>
      )}      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          {t('footer.newsletter.privacyText')}{' '}
          <a href="/gizlilik" className="text-brand-yellow hover:underline">
            {t('footer.newsletter.privacyLink')}
          </a>{t('footer.newsletter.privacyAccept')}
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
