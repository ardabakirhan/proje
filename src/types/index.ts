/**
 * İletişim Group - Type Definitions
 * Clean and modern TypeScript interfaces
 */

export interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}

export interface CompanyInfo {
  name: string
  description: string
  address: string
  phone: string
  email: string
  socialMedia: {
    facebook?: string
    instagram?: string
    linkedin?: string
    twitter?: string
  }
}

export interface NewsItem {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  image?: string
  category: string
  slug?: string
  author?: string
  tags?: string[]
}

export interface PressRelease {
  id: string
  title: string
  content: string
  date: string
  category: string
  slug?: string
  attachments?: string[]
}

export interface JobPosting {
  id: string
  title: string
  department: string
  location: string
  type: 'full-time' | 'part-time' | 'contract' | 'internship'
  description: string
  requirements: string[]
  responsibilities?: string[]
  benefits?: string[]
  postedDate: string
  deadline?: string
  isActive: boolean
}

export interface FinancialData {
  year: number
  revenue: number
  profit: number
  assets: number
  employees: number
  growth?: {
    revenue: number
    profit: number
    employees: number
  }
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  company?: string
  subject: string
  message: string
  privacyAccepted: boolean
  marketingAccepted?: boolean
}

export interface SectorFormData extends ContactForm {
  sector: 'construction' | 'law' | 'real-estate' | 'trade'
  services?: string[]
  projectBudget?: string
  timeline?: string
}

export interface NewsletterSubscription {
  email: string
  name?: string
  preferences?: {
    news: boolean
    events: boolean
    reports: boolean
  }
  language?: 'tr' | 'en' | 'fr'
}
