/**
 * API service for İletişim Group website
 * Handles all API communication with the backend server
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

// API client configuration
const apiClient = {
  baseURL: API_BASE_URL,
    async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    let response: Response | undefined;
    
    try {
      response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      // API istekleri için proper error handling
      if (error instanceof Error) {
        throw new ApiError(error.message, response?.status);
      }
      throw error;
    }
  },

  get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  },
  post<T>(endpoint: string, data: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  put<T>(endpoint: string, data: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  },
};

// API response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
}

export interface NewsletterSubscriptionData {
  email: string;
  consent: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface JobApplicationData {
  jobId: string;
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    address?: string;
  };
  resume?: string; // base64 encoded file
  coverLetter?: string;
}

export interface SearchParams {
  q: string;
  category?: string;
}

export interface SearchResult {
  id: string;
  title: string;
  content: string;
  url: string;
  category: string;
}

export interface SearchResponse {
  success: boolean;
  results: SearchResult[];
  total: number;
  query: string;
  category: string;
}

export interface SectorFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  company?: string;
}

// API service methods
export const apiService = {
  // Health check
  async health(): Promise<ApiResponse> {
    // Backend'de health endpoint /health olarak direkt kullanılıyor
    return fetch(`${API_BASE_URL.replace('/api', '')}/health`)
      .then(response => response.json());
  },

  // Newsletter subscription
  async subscribeNewsletter(data: NewsletterSubscriptionData): Promise<ApiResponse> {
    return apiClient.post('/newsletter', data);
  },

  // Contact form submission
  async submitContactForm(data: ContactFormData): Promise<ApiResponse> {
    return apiClient.post('/contact', data);
  },

  // Job application submission
  async submitJobApplication(data: JobApplicationData): Promise<ApiResponse> {
    return apiClient.post('/career/apply', data);
  },

  // Search functionality
  async search(params: SearchParams): Promise<SearchResponse> {
    const queryString = new URLSearchParams({
      q: params.q,
      ...(params.category && { category: params.category }),
    }).toString();
    
    return apiClient.get(`/search?${queryString}`);
  },

  // Sektörel form submissions
  async submitLegalForm(data: SectorFormData): Promise<ApiResponse> {
    return apiClient.post('/forms/legal', data);
  },

  async submitConstructionForm(data: SectorFormData): Promise<ApiResponse> {
    return apiClient.post('/forms/construction', data);
  },

  async submitRealEstateForm(data: SectorFormData): Promise<ApiResponse> {
    return apiClient.post('/forms/realestate', data);
  },

  async submitTradeForm(data: SectorFormData): Promise<ApiResponse> {
    return apiClient.post('/forms/trade', data);
  },

  async submitCommunicationForm(data: SectorFormData): Promise<ApiResponse> {
    return apiClient.post('/forms/communication', data);
  },
};

// Error handling utilities
export class ApiError extends Error {
  status?: number;
  response?: unknown;

  constructor(message: string, status?: number, response?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.response = response;
  }
}

// Utility function to handle API errors
export const handleApiError = (error: unknown): string => {
  if (error instanceof ApiError) {
    return error.message;
  }
  
  if (error instanceof Error && error.message) {
    return error.message;
  }
  
  return 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.';
};

// Check if API is available
export const checkApiHealth = async (): Promise<boolean> => {
  try {
    await apiService.health();
    return true;
  } catch (error) {
    console.warn('API is not available:', error);
    return false;
  }
};

export default apiService;
