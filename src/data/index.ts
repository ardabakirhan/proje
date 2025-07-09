import type { CompanyInfo, NavigationItem, NewsItem, PressRelease } from '../types';

export const companyInfo: CompanyInfo = {
  name: 'İletişim Group',
  description: 'Daha hızlı. Daha kolay. Daha yenilikçi. Müşterilerimiz, iş ortaklarımız ve çalışanlarımız için dijital dönüşüm hedeflerimiz ve projelerimiz.',
  address: 'Karaman Mah. İzmir Yolu Cd. No:90 Nilpark AVM & Ofis Kat:6 Daire:8 Nilüfer/BURSA',
  phone: '0 549 856 00 16',
  email: 'info@iletisimgroup.com',
  socialMedia: {
    facebook: 'https://www.facebook.com/share/1EK2HmQ6Nq/',
    instagram: 'https://www.instagram.com/iletisimofiss?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    linkedin: 'https://www.linkedin.com/company/iletisim-group'
  }
};

export const navigationItems: NavigationItem[] = [
  {
    label: 'Hakkımızda',
    href: '/hakkimizda',
    children: [
      { label: 'Şirket Profili', href: '/hakkimizda' },
      { label: 'Yönetim Ekibi', href: '/hakkimizda#yonetim' }
    ]
  },
  {
    label: 'Hukuk',
    href: '/hukuk'
  },
  {
    label: 'Ofis ve Gayrimenkul',
    href: '/ofis-gayrimenkul'
  },
  {
    label: 'Media',
    href: '/media'
  },
  {
    label: 'Trade',
    href: '/trade'
  },
  {
    label: 'İnşaat',
    href: '/insaat'
  },
  {
    label: 'İletişim',
    href: '/iletisim'
  }
];

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'İletişim Group Hukuk Hizmetlerinde Uzmanlaşıyor',
    excerpt: 'Hukuk departmanımız, kurumsal ve bireysel müşterilerimize kapsamlı hukuki danışmanlık sunuyor.',
    content: 'İletişim Group, hukuk alanındaki uzman kadrosuyla müşterilerine en kaliteli hukuki hizmetleri sunmaya devam ediyor...',
    date: '2025-06-01',
    image: '/images/news/legal-services.svg',
    category: 'Hukuk'
  },
  {
    id: '2',
    title: 'Ofis ve Gayrimenkul Sektöründe Yeni Projeler',
    excerpt: 'Modern ofis alanları ve gayrimenkul yatırımlarında öncü konumumuzu sürdürüyoruz.',
    content: 'İletişim Group, ofis ve gayrimenkul sektöründeki yenilikçi projelerle müşterilerine değer katmaya devam ediyor...',
    date: '2025-05-28',
    image: '/images/news/real-estate.svg',
    category: 'Ofis ve Gayrimenkul'
  },
  {
    id: '3',
    title: 'Media Sektöründe Dijital Dönüşüm',
    excerpt: 'Medya ve iletişim alanındaki yenilikçi çözümlerimizle sektöre yön veriyoruz.',
    content: 'İletişim Group, media sektöründeki dijital dönüşüm süreçlerinde öncü rol oynamaya devam ediyor...',
    date: '2025-05-25',
    image: '/images/news/media-digital.svg',
    category: 'Media'
  },
  {
    id: '4',
    title: 'Trade Sektöründe Uluslararası Genişleme',
    excerpt: 'Ticaret ve ithalat-ihracat faaliyetlerimizle global pazarlarda güçlü konumumuzu sürdürüyoruz.',
    content: 'İletişim Group, trade sektöründeki geniş ürün yelpazesi ve kaliteli hizmetiyle müşteri memnuniyetini artırıyor...',
    date: '2025-05-20',
    image: '/images/news/trade-global.svg',
    category: 'Trade'
  },
  {
    id: '5',
    title: 'İnşaat Sektöründe Sürdürülebilir Projeler',
    excerpt: 'Çevre dostu inşaat projeleriyle gelecek nesillere yaşanabilir alanlar sunuyoruz.',
    content: 'İletişim Group, inşaat sektöründeki sürdürülebilir projelerle çevreye duyarlı yapılar inşa ediyor...',
    date: '2025-05-15',
    image: '/images/news/construction-sustainable.svg',
    category: 'İnşaat'
  }
];

export const pressReleases: PressRelease[] = [
  {
    id: '1',
    title: 'İletişim Group 5 Ana Sektörde Faaliyet Gösteriyor',
    content: 'İletişim Group, Hukuk, Ofis ve Gayrimenkul, Media, Trade ve İnşaat sektörlerinde güçlü konumunu sürdürüyor...',
    date: '2025-03-15',
    category: 'Kurumsal'
  },
  {
    id: '2',
    title: 'Hukuk Departmanında Uzman Kadro Genişliyor',
    content: 'İletişim Group, hukuk hizmetlerindeki kaliteyi artırmak için uzman kadrosunu genişletiyor...',
    date: '2025-02-28',
    category: 'Hukuk'
  },
  {
    id: '3',
    title: 'Yeni Ofis ve Gayrimenkul Projeleri Başlıyor',
    content: 'İletişim Group, modern ofis alanları ve gayrimenkul yatırımlarında yeni projeler başlatıyor...',
    date: '2025-02-15',
    category: 'Gayrimenkul'
  }
];
