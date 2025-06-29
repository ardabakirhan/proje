import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Cookie, 
  Eye, 
  Lock, 
  Users, 
  Globe, 
  Mail, 
  Phone,
  Calendar,
  FileText,
  AlertTriangle,
  Info
} from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      id: 'overview',
      title: 'Genel Bakış',
      icon: Eye,
      content: [
        'Bu Gizlilik ve Çerez Politikası, İletişim Group olarak kişisel verilerinizi nasıl topladığımız, kullandığımız, koruduğumuz ve paylaştığımızı açıklar.',
        'Bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR) gerekliliklerine uygun olarak hazırlanmıştır.',
        'Web sitemizi kullanarak bu politikayı kabul etmiş sayılırsınız.'
      ]
    },
    {
      id: 'data-controller',
      title: 'Veri Sorumlusu',
      icon: Users,
      content: [
        'Veri Sorumlusu: İletişim Group A.Ş.',
        'Adres: İstanbul, Türkiye',
        'E-posta: privacy@iletisimgroup.com.tr',
        'Telefon: +90 212 123 45 67',
        'KVKK Veri Sorumluları Sicil Numarası: [Sicil Numarası]'
      ]
    },
    {
      id: 'data-types',
      title: 'Toplanan Kişisel Veriler',
      icon: FileText,
      content: [
        'Kimlik Bilgileri: Ad, soyad, T.C. kimlik numarası',
        'İletişim Bilgileri: E-posta adresi, telefon numarası, posta adresi',
        'Demografik Bilgiler: Yaş, cinsiyet, meslek',
        'Teknik Bilgiler: IP adresi, tarayıcı bilgileri, cihaz bilgileri',
        'Konum Bilgileri: Yaklaşık coğrafi konum (anonim)',
        'Kullanım Bilgileri: Site üzerindeki davranış ve tercihler'
      ]
    },
    {
      id: 'processing-purposes',
      title: 'İşleme Amaçları',
      icon: Info,
      content: [
        'Web sitesi hizmetlerinin sunulması ve güvenliğinin sağlanması',
        'Müşteri destek hizmetlerinin verilmesi',
        'Pazarlama ve reklam faaliyetlerinin yürütülmesi',
        'Yasal yükümlülüklerin yerine getirilmesi',
        'Site performansının iyileştirilmesi ve analiz edilmesi',
        'Kişiselleştirilmiş deneyim sunulması'
      ]
    },
    {
      id: 'legal-basis',
      title: 'Hukuki Dayanak',
      icon: Lock,
      content: [
        'Açık Rıza: Pazarlama e-postaları, çerez kullanımı',
        'Sözleşme: Hizmet sözleşmelerinin ifası',
        'Yasal Yükümlülük: Muhasebe, vergi, denetim kayıtları',
        'Meşru Menfaat: Site güvenliği, analitik veriler'
      ]
    }
  ];

  const cookieCategories = [
    {
      name: 'Zorunlu Çerezler',
      description: 'Web sitesinin temel işlevleri için gerekli',
      purpose: 'Site işlevselliği, güvenlik, oturum yönetimi',
      retention: '1 yıl',
      examples: ['sessionId', 'csrfToken', 'language', 'userConsent']
    },
    {
      name: 'Analitik Çerezler',
      description: 'Site kullanımını analiz etmek için',
      purpose: 'Performans analizi, kullanıcı davranışı',
      retention: '2 yıl',
      examples: ['_ga', '_gid', '_gat', 'gtag']
    },
    {
      name: 'İşlevsel Çerezler',
      description: 'Gelişmiş özellikler ve kişiselleştirme',
      purpose: 'Kullanıcı tercihleri, UI ayarları',
      retention: '1 yıl',
      examples: ['theme', 'user_preferences', 'ui_settings']
    },
    {
      name: 'Pazarlama Çerezleri',
      description: 'Hedefli reklamlar ve pazarlama',
      purpose: 'Kişiselleştirilmiş reklamlar, retargeting',
      retention: '90 gün',
      examples: ['_fbp', '_fbc', 'fr', 'ads_*']
    }
  ];

  const rights = [
    'Kişisel verilerinizin işlenip işlenmediğini öğrenme',
    'İşlenen kişisel verileriniz hakkında bilgi talep etme',
    'İşleme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme',
    'Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme',
    'Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme',
    'Kişisel verilerinizin silinmesini veya yok edilmesini isteme',
    'Düzeltme, silme veya yok etme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme',
    'İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi sonucu aleyhte bir sonuçla karşılaşma durumunda buna itiraz etme',
    'Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-brand-yellow/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-brand-yellow" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Gizlilik ve Çerez Politikası
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kişisel verilerinizin korunması bizim için önemlidir. Bu politika, 
            verilerinizi nasıl topladığımızı ve koruduğumuzu açıklar.
          </p>
          <div className="flex items-center justify-center space-x-4 mt-6 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Calendar size={16} />
              <span>Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FileText size={16} />
              <span>Versiyon 1.0</span>
            </div>
          </div>
        </motion.div>

        {/* Compliance Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-6 mb-8 shadow-sm border"
        >
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Globe className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">GDPR Uyumlu</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-red-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">KVKK Uyumlu</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <Lock className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">SSL Güvenli</span>
            </div>          </div>
        </motion.div>

        {/* Related Policies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-brand-yellow/10 to-brand-yellow/5 rounded-xl p-6 mb-8 border border-brand-yellow/20"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-brand-charcoal mb-2">İlgili Politikalar</h3>
              <p className="text-brand-gray-medium">
                Çerez kullanımımız hakkında detaylı bilgi için Çerez Politikamızı inceleyebilirsiniz.
              </p>
            </div>
            <Link
              to="/cerez-politikasi"
              className="inline-flex items-center space-x-2 bg-brand-yellow text-brand-charcoal px-4 py-2 rounded-lg font-medium hover:bg-brand-yellow-light transition-colors"
            >
              <Cookie size={18} />
              <span>Çerez Politikası</span>
            </Link>
          </div>
        </motion.div>

        {/* Main Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            
            return (
              <motion.section
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 2) }}
                className="bg-white rounded-xl p-8 shadow-sm border"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-brand-yellow/20 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-brand-yellow" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* Cookie Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-xl p-8 shadow-sm border mt-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-brand-yellow/20 rounded-lg flex items-center justify-center">
              <Cookie className="w-5 h-5 text-brand-yellow" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              Çerez Politikası
            </h2>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              Web sitemizde deneyiminizi iyileştirmek için çerezler kullanıyoruz. 
              Çerezler, tarayıcınızda saklanan küçük metin dosyalarıdır.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {cookieCategories.map((category, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:border-brand-yellow/50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {category.description}
                </p>
                
                <div className="space-y-2 text-xs text-gray-500">
                  <div>
                    <strong>Amaç:</strong> {category.purpose}
                  </div>
                  <div>
                    <strong>Saklama:</strong> {category.retention}
                  </div>
                  <div>
                    <strong>Örnekler:</strong> {category.examples.join(', ')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* User Rights */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-white rounded-xl p-8 shadow-sm border mt-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-brand-yellow/20 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-brand-yellow" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              Veri Sahibi Hakları
            </h2>
          </div>
          
          <p className="text-gray-700 mb-6">
            KVKK kapsamında aşağıdaki haklara sahipsiniz:
          </p>
          
          <ul className="space-y-3">
            {rights.map((right, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-yellow rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">{right}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-gradient-to-r from-brand-yellow/10 to-brand-yellow/5 rounded-xl p-8 mt-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-brand-yellow/20 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-brand-yellow" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              İletişim
            </h2>
          </div>
          
          <p className="text-gray-700 mb-6">
            Gizlilik ile ilgili sorularınız için bizimle iletişime geçin:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-brand-yellow" />
              <div>
                <div className="font-medium text-gray-900">E-posta</div>
                <div className="text-gray-600">privacy@iletisimgroup.com.tr</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-brand-yellow" />
              <div>
                <div className="font-medium text-gray-900">Telefon</div>
                <div className="text-gray-600">+90 212 123 45 67</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-8"
        >
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-amber-800">
              <p className="font-medium mb-1">Önemli Not</p>
              <p>
                Bu politika zaman zaman güncellenebilir. Değişiklikler web sitemizde 
                yayınlandığı tarihten itibaren geçerli olacaktır. Düzenli olarak 
                kontrol etmenizi öneririz.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
