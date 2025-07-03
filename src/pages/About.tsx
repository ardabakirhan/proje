import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  Award, 
  Target, 
  TrendingUp,
  Calendar,
  Globe,
  Heart,
  ArrowRight
} from 'lucide-react';
import Button from '../components/common/Button';

const About: React.FC = () => {
  const milestones = [
    {
      year: '2010',
      title: 'Kuruluş',
      description: 'İletişim Group, girişimci bir ekip tarafından İstanbul\'da kuruldu.'
    },
    {
      year: '2013',
      title: 'İlk Büyük Proje',
      description: 'Teknoloji sektöründe ilk büyük danışmanlık projemizi başarıyla tamamladık.'
    },
    {
      year: '2016',
      title: 'Ulusal Genişleme',
      description: 'Ankara ve İzmir ofislerimizi açarak Türkiye geneline yayıldık.'
    },
    {
      year: '2019',
      title: 'Uluslararası Ortaklık',
      description: 'Avrupa\'dan stratejik ortaklarla güçlü iş birliklerine başladık.'
    },
    {
      year: '2021',
      title: 'Dijital Dönüşüm',
      description: 'Kendi dijital platformlarımızı geliştirerek hizmet kalitemizi artırdık.'
    },
    {
      year: '2023',
      title: 'Sürdürülebilirlik Lideri',
      description: 'Çevresel ve sosyal sorumluluk alanında sektör lideri konumuna ulaştık.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Güven',
      description: 'Tüm iş ilişkilerimizde şeffaflık ve dürüstlük temel değerlerimizdir.'
    },
    {
      icon: Target,
      title: 'Mükemmellik',
      description: 'Her projede en yüksek kalite standartlarını hedefler ve uygularız.'
    },
    {
      icon: Users,
      title: 'İş Birliği',
      description: 'Takım ruhu ve ortaklaşa çalışma kültürü ile başarıya ulaşırız.'
    },
    {
      icon: TrendingUp,
      title: 'İnovasyon',
      description: 'Sürekli öğrenme ve yenilikçi çözümlerle geleceği şekillendiririz.'
    },
    {
      icon: Globe,
      title: 'Küresel Bakış',
      description: 'Yerel kökleri güçlü, küresel vizyonu olan bir şirketiz.'
    },
    {
      icon: Award,
      title: 'Sorumluluk',
      description: 'Çevre ve topluma karşı sorumluluklarımızı ciddiyetle yerine getiririz.'
    }
  ];

  const leadership = [
    {
      name: 'Ahmet Yılmaz',
      position: 'Genel Müdür',
      experience: '15+ yıl',
      education: 'MBA, Harvard Business School',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Elif Demir',
      position: 'Operasyon Direktörü',
      experience: '12+ yıl',
      education: 'MSc, London School of Economics',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Mehmet Kaya',
      position: 'Finansal İşler Direktörü',
      experience: '10+ yıl',
      education: 'CPA, Boğaziçi Üniversitesi',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Zeynep Öz',
      position: 'İnsan Kaynakları Direktörü',
      experience: '8+ yıl',
      education: 'MSc, INSEAD',
      image: '/api/placeholder/300/300'
    }
  ];

  const stats = [
    { number: '500+', label: 'Tamamlanan Proje', icon: Building2 },
    { number: '200+', label: 'Uzman Çalışan', icon: Users },
    { number: '50+', label: 'Sektör Deneyimi', icon: Award },
    { number: '15+', label: 'Ülke Tecrübesi', icon: Globe }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">
              Hakkımızda
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              2010 yılından bu yana, işletmelerin büyüme hedeflerine ulaşmalarında 
              güvenilir ortakları olmaya devam ediyoruz. Güçlü değerlerimiz ve 
              yenilikçi yaklaşımımızla sektörde fark yaratıyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8"
            >
              <Target className="w-12 h-12 text-primary-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Misyonumuz</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                İşletmelerin stratejik hedeflerine ulaşmalarında güvenilir ortakları olmak, 
                yenilikçi çözümler ve uzman kadromuzla değer yaratmak. Müşterilerimizin 
                sürdürülebilir büyümesine katkıda bulunarak sektörde öncü konumumuzu korumak.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8"
            >
              <Globe className="w-12 h-12 text-gray-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Vizyonumuz</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Küresel ölçekte tanınan, sürdürülebilir iş uygulamaları ile örnek gösterilen 
                ve teknoloji odaklı çözümlerle geleceği şekillendiren lider bir danışmanlık 
                firması olmak. Çevresel ve sosyal sorumluluklarımızı yerine getiren bir organizasyon olmak.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Değerlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İş kültürümüzü şekillendiren ve her kararımızda yol gösterici olan temel değerlerimiz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tarihçemiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              13 yıllık yolculuğumuzda attığımız önemli adımlar ve kazandığımız başarılar.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className={`bg-white rounded-xl p-6 shadow-lg ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}>
                    <div className="text-primary-600 font-bold text-lg mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center z-10">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Yönetim Ekibimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deneyimli ve vizyoner liderlerimiz, şirketimizi geleceğe taşıyan itici güç.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-3">
                    {leader.position}
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <span className="font-semibold">Deneyim:</span> {leader.experience}
                    </p>
                    <p>
                      <span className="font-semibold">Eğitim:</span> {leader.education}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Bizimle Çalışmaya Hazır mısınız?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Deneyimli ekibimiz ve kanıtlanmış başarılarımızla, 
              işletmenizin hedeflerine ulaşmasında size yardımcı olmaya hazırız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary-600 hover:bg-gray-50"
              >
                İletişime Geçin
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-200 text-white hover:bg-primary-600"
              >
                Hizmetlerimizi İnceleyin
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
