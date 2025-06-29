import type { CompanyInfo, NavigationItem, NewsItem, PressRelease } from '../types';

export const companyInfo: CompanyInfo = {
  name: 'İletişim Group',
  description: 'Daha hızlı. Daha kolay. Daha yenilikçi. Müşterilerimiz, iş ortaklarımız ve çalışanlarımız için dijital dönüşüm hedeflerimiz ve projelerimiz.',
  address: 'Nakkaştepe, Azizbey Sokak, No: 1, Kuzguncuk 34674, İstanbul',
  phone: '0 (216) 531 00 00',
  email: 'info@iletisimgroup.com.tr',
  socialMedia: {
    facebook: 'https://www.facebook.com/iletisimgroup',
    instagram: 'https://www.instagram.com/iletisimgroup/',
    linkedin: 'https://www.linkedin.com/company/iletisim-group',
    twitter: 'https://x.com/iletisimgroup',
    youtube: 'https://www.youtube.com/iletisimgroup',
    spotify: 'https://open.spotify.com/user/iletisimgroup'
  }
};

export const navigationItems: NavigationItem[] = [
  {
    label: 'Hakkımızda',
    href: '/hakkimizda',
    children: [
      { label: 'Şirket Profili', href: '/hakkimizda' },
      { label: 'Tarihçe', href: '/hakkimizda#tarihce' },
      { label: 'Değerlerimiz', href: '/hakkimizda#degerler' },
      { label: 'Yönetim Ekibi', href: '/hakkimizda#yonetim' }
    ]
  },  {
    label: 'Hizmetlerimiz',
    href: '/hizmetler',
    children: [
      { label: 'Paylaşımlı Ofis', href: '/hizmetler#paylasimli-ofis' },
      { label: 'Hukuk Departmanı', href: '/legal-department' },
      { label: 'İthalat İhracat Şirketi', href: '/import-export' },
      { label: 'Reklam Şirketi', href: '/advertising-company' },
      { label: 'Kurumsal Yönetim', href: '/hizmetler#kurumsal-yonetim' }
    ]
  },
  {
    label: 'Yatırımcı İlişkileri',
    href: '/yatirimci-iliskileri',
    children: [
      { label: 'Neden İletişim Group?', href: '/yatirimci-iliskileri/neden-iletisim-group' },
      { label: 'Finansal Bilgiler', href: '/yatirimci-iliskileri/finansal-bilgiler' },
      { label: 'Sunumlar ve Raporlar', href: '/yatirimci-iliskileri/sunumlar-raporlar' },
      { label: 'Duyurular', href: '/yatirimci-iliskileri/duyurular' }
    ]
  },
  {
    label: 'Kariyer',
    href: '/kariyer',
    children: [
      { label: 'Açık Pozisyonlar', href: '/kariyer/acik-pozisyonlar' },
      { label: 'İletişim\'de Çalışmak', href: '/kariyer/iletisimde-calismak' },
      { label: 'Başvuru Süreci', href: '/kariyer/basvuru-sureci' },
      { label: 'Gelişim Programları', href: '/kariyer/gelisim-programlari' }
    ]
  },
  {
    label: 'Sürdürülebilirlik',
    href: '/surdurulebilirlik',
    children: [
      { label: 'Stratejimiz', href: '/surdurulebilirlik/stratejimiz' },
      { label: 'Çevre Koruma', href: '/surdurulebilirlik/cevre-koruma' },
      { label: 'Sosyal Sorumluluk', href: '/surdurulebilirlik/sosyal-sorumluluk' },
      { label: 'Raporlar', href: '/surdurulebilirlik/raporlar' }
    ]
  },
  {
    label: 'İletişim',
    href: '/iletisim',
    children: [
      { label: 'İletişim Bilgileri', href: '/iletisim' },
      { label: 'Ofis Lokasyonları', href: '/iletisim#ofisler' },
      { label: 'Mesaj Gönder', href: '/iletisim#mesaj' },
      { label: 'Basın İletişim', href: '/iletisim/basin' }
    ]
  }
];

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'İletişim Group Dijital Dönüşüm Projelerinde Öncülük Ediyor',
    excerpt: 'Şirketimiz, sektördeki dijital dönüşüm süreçlerinde öncü rol oynamaya devam ediyor.',
    content: 'İletişim Group, dijital dönüşüm alanındaki yatırımlarını artırarak sektörde öncü pozisyonunu güçlendiriyor...',
    date: '2025-06-01',
    image: '/images/news/digital-transformation.svg',
    category: 'Teknoloji'
  },
  {
    id: '2',
    title: 'Yeni Sürdürülebilirlik Raporu Yayınlandı',
    excerpt: '2024 yılı sürdürülebilirlik raporumuz tüm paydaşlarımızın beğenisine sunuldu.',
    content: 'İletişim Group, çevresel ve sosyal sorumluluk alanındaki çalışmalarını detaylandıran raporu yayınladı...',
    date: '2025-05-28',
    image: '/images/news/sustainability.svg',
    category: 'Sürdürülebilirlik'
  },
  {
    id: '3',
    title: 'İletişim Group Genç Yeteneklere Kapılarını Açıyor',
    excerpt: 'Yeni mezun programımızla genç yetenekleri aramıza katmaya devam ediyoruz.',
    content: 'İletişim Group, genç yeteneklerin kariyer hedeflerine ulaşması için kapsamlı programlar sunuyor...',
    date: '2025-05-25',
    image: '/images/news/young-talents.svg',
    category: 'İnsan Kaynakları'
  }
];

export const pressReleases: PressRelease[] = [
  {
    id: '1',
    title: 'İletişim Group 2024 Yılı Finansal Sonuçları',
    content: 'İletişim Group, 2024 yılında güçlü finansal performans sergiledi...',
    date: '2025-03-15',
    category: 'Finansal'
  },
  {
    id: '2',
    title: 'Yeni Stratejik Ortaklık Anlaşması İmzalandı',
    content: 'İletişim Group, uluslararası pazarlardaki varlığını güçlendirmek için...',
    date: '2025-02-28',
    category: 'Stratejik'
  }
];
