export interface Product {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  category: string;
  price: number;
  currency: 'IQD' | 'USD';
  shortDesc: string;
  description: string;
  images: string[];
  videoUrl?: string;
  specs: Record<string, string>;
  codeExamples: CodeExample[];
  faq: FAQ[];
  tags: string[];
  inStock: boolean;
  featured: boolean;
  createdAt: string;
}

export interface CodeExample {
  title: string;
  code: string;
  lang: 'cpp' | 'python' | 'javascript';
  description?: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  description: string;
  order: number;
}

export interface SiteConfig {
  name: string;
  nameEn: string;
  description: string;
  whatsappNumber: string;
  whatsappMessage: string;
  phone: string;
  email: string;
  address: string;
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    telegram?: string;
  };
  currency: 'IQD' | 'USD';
  shippingInfo: string;
}

export interface Tutorial {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'مبتدئ' | 'متوسط' | 'متقدم';
  estimatedTime: string;
  components: string[];
  code: string;
  images: string[];
  videoUrl?: string;
  tags: string[];
  publishedAt: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  customerName: string;
  customerCity: string;
  images: string[];
  videoUrl?: string;
  productsUsed: string[];
  difficulty: 'سهل' | 'متوسط' | 'صعب';
  completedAt: string;
  featured: boolean;
}