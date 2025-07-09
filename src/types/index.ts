export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface CompanyInfo {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  socialMedia: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image?: string;
  category: string;
}

export interface PressRelease {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  postedDate: string;
}

export interface FinancialData {
  year: number;
  revenue: number;
  profit: number;
  assets: number;
  employees: number;
}
