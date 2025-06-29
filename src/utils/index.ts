// Format date to Turkish locale
export const formatDate = (dateString: string, options?: Intl.DateTimeFormatOptions): string => {
  const date = new Date(dateString);
  
  // Invalid date kontrolü
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date string: ${dateString}`);
  }
  
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  return date.toLocaleDateString('tr-TR', { ...defaultOptions, ...options });
};

// Format currency
export const formatCurrency = (amount: number, currency: string = 'TRY'): string => {
  // Geçersiz sayı kontrolü
  if (!Number.isFinite(amount)) {
    throw new Error(`Invalid amount: ${amount}`);
  }
  
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(amount);
};

// Format number with Turkish locale
export const formatNumber = (num: number): string => {
  if (!Number.isFinite(num)) {
    throw new Error(`Invalid number: ${num}`);
  }
  
  return new Intl.NumberFormat('tr-TR').format(num);
};

// Truncate text
export const truncateText = (text: string, maxLength: number): string => {
  if (maxLength < 0) {
    throw new Error('maxLength must be non-negative');
  }
  
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

// Generate slug from string
export const generateSlug = (text: string): string => {
  if (!text || typeof text !== 'string') {
    return '';
  }
  
  return text
    .toLowerCase()
    .trim()
    // Türkçe karakterleri değiştir
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces, underscores, and hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

// Debounce function
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void => {
  if (wait < 0) {
    throw new Error('Wait time must be non-negative');
  }
  
  let timeout: NodeJS.Timeout | number;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout as NodeJS.Timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Check if element is in viewport
export const isInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Smooth scroll to element
export const scrollToElement = (elementId: string, offset: number = 0): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const targetPosition = element.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

// Validate email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Get random items from array
export const getRandomItems = <T>(array: T[], count: number): T[] => {
  if (count < 0) {
    throw new Error('Count must be non-negative');
  }
  
  if (count >= array.length) {
    return [...array];
  }
  
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Class name helper (similar to clsx)
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Navigation utilities
export const createNavigationItems = (t: (key: string) => string) => [
  {
    label: t('nav.about'),
    href: '/hakkimizda',
    children: [
      { label: t('nav.companyProfile'), href: '/hakkimizda' },
      { label: t('nav.history'), href: '/hakkimizda#tarihce' },
      { label: t('nav.values'), href: '/hakkimizda#degerler' },
      { label: t('nav.management'), href: '/hakkimizda#yonetim' }
    ]
  },
  {    label: t('nav.services'),
    href: '/hizmetler',
    children: [
      { label: t('nav.sharedOffice'), href: '/hizmetler#paylasimli-ofis' },
      { label: t('nav.legalDepartment'), href: '/legal-department' },
      { label: t('nav.importExport'), href: '/import-export' },
      { label: t('nav.advertising'), href: '/advertising-company' },
      { label: t('nav.corporateGovernance'), href: '/hizmetler#kurumsal-yonetim' }
    ]
  },
  {
    label: t('nav.elektrik'),
    href: '/elektrik'
  },
  {
    label: t('nav.boya'),
    href: '/boya'
  },
  {
    label: t('nav.mobilya'),
    href: '/mobilya'
  },
  {
    label: t('nav.ambalaj'),
    href: '/ambalaj'
  },
  {
    label: t('nav.lojistik'),
    href: '/lojistik'
  },
  {
    label: t('nav.contact'),
    href: '/iletisim',
    children: [
      { label: t('nav.contactInfo'), href: '/iletisim' },
      { label: t('nav.officeLocations'), href: '/iletisim#ofisler' },
      { label: t('nav.sendMessage'), href: '/iletisim#mesaj' },
      { label: t('nav.pressContact'), href: '/iletisim/basin' }
    ]
  }
];
