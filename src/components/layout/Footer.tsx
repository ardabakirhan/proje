import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Music } from 'lucide-react';
import { companyInfo } from '../../data';
import Newsletter from '../common/Newsletter';
import CookieSettingsButton from '../common/CookieSettingsButton';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    facebook: Facebook,
    instagram: Instagram,
    linkedin: Linkedin,
    twitter: Twitter,
    youtube: Youtube,
    spotify: Music,
  };
  const footerLinks = {
    [t('footer.corporate')]: [
      { label: t('footer.links.about'), href: '/hakkinda' },
      { label: t('footer.links.companies'), href: '/faaliyet-alanlari/sirketler' },
      { label: t('footer.links.lifeAtIletisim'), href: '/iletisimde-hayat/icinde-iletisim-var' },
      { label: t('footer.links.whyIletisim'), href: '/yatirimci-iliskileri/neden-iletisim-group' },
      { label: t('footer.links.foundation'), href: '/surdurulebilirlik/iletisim-vakfi' },
      { label: t('footer.links.whistleblowing'), href: '/ihbar-bildirim' }
    ],
    [t('footer.services')]: [
      { label: t('footer.links.investorRelations'), href: '/yatirimci-iliskileri' },
      { label: t('footer.links.mediaCenter'), href: '/medya-merkezi' },
      { label: t('footer.links.sustainability'), href: '/surdurulebilirlik' },
      { label: t('footer.links.lifeAtIletisimFull'), href: '/iletisimde-hayat' }
    ],
    [t('footer.legal')]: [
      { label: t('footer.links.informationSociety'), href: '/bilgi-toplumu-hizmetleri' },
      { label: t('footer.links.dataProtection'), href: '/kisisel-verilerin-korunmasi' },
      { label: t('footer.links.disclaimer'), href: '/yatirimci-iliskileri/cekince' },
      { label: t('footer.links.contact'), href: '/iletisim' },
      { label: t('footer.links.importantNotice'), href: '/onemli-uyari' }
    ]
  };

  return (    <footer className="bg-brand-charcoal text-white">      {/* Newsletter Section */}
      <div className="border-b border-secondary-700">
        <div className="container-custom section-padding">          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{t('footer.newsletter.title')}</h2>
            <p className="text-secondary-300 mb-8 text-lg">
              {t('footer.newsletter.description')}
            </p>
            <Newsletter />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">            <Link to="/" className="flex items-center mb-6">
              <img 
                src="/images/logo/iletisim-group-logo-white.svg" 
                alt="İletişim Group" 
                className="h-10 w-auto"
              />
            </Link>
              <div className="space-y-4 text-secondary-300">
              <div>
                <h4 className="font-semibold text-white mb-2">{t('footer.contactUs')}</h4>
                <p className="text-sm">{companyInfo.address}</p>
              </div>
              
              <div>
                <p className="text-sm">
                  <Link to={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                    {companyInfo.phone}
                  </Link>
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">              <h4 className="font-semibold text-white mb-4">{t('footer.followUs')}</h4>
              <p className="text-sm text-secondary-300 mb-4">
                {t('footer.socialDescription')}
              </p>
              <div className="flex space-x-4">
                {Object.entries(companyInfo.socialMedia).map(([platform, url]) => {
                  if (!url) return null;
                  const IconComponent = socialIcons[platform as keyof typeof socialIcons];
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-400 hover:text-brand-yellow hover:bg-brand-yellow/20 transition-colors"
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Career Link */}            <div className="mt-8">
              <h4 className="font-semibold text-white mb-2">{t('footer.applyTitle')}</h4>
              <p className="text-sm text-secondary-300 mb-4">
                {t('footer.careerDescription')}
              </p>
              <a
                href="https://www.iletisimkariyerim.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-yellow hover:text-brand-yellow-light font-medium transition-colors"
              >
                iletisimkariyerim.com
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-6">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-secondary-300 hover:text-brand-yellow transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-700">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">            <div className="text-secondary-400 text-sm">
              © {currentYear} İletişim Group A.Ş. {t('footer.copyright')}
            </div>            <div className="flex flex-wrap items-center gap-4 text-sm text-secondary-400">
              <Link to="/cerez-politikasi" className="hover:text-brand-yellow transition-colors">
                {t('footer.cookiePolicy')}
              </Link>
              <span>•</span>
              <CookieSettingsButton />
              <span>•</span>
              <Link to="/gizlilik-politikasi" className="hover:text-brand-yellow transition-colors">
                {t('footer.privacyPolicy')}
              </Link>
              <span>•</span>
              <Link to="/kullanim-kosullari" className="hover:text-brand-yellow transition-colors">
                {t('footer.termsOfUse')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
