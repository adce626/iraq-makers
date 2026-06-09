import { Product, Category, SiteConfig, Tutorial, Project } from '@/types';
import productsData from '@/data/products.json';
import categoriesData from '@/data/categories.json';
import siteConfigData from '@/data/site-config.json';
import tutorialsData from '@/data/tutorials.json';
import projectsData from '@/data/projects.json';

export const config: SiteConfig = siteConfigData as unknown as SiteConfig;
export const categories: Category[] = categoriesData as unknown as Category[];
export const products: Product[] = productsData as unknown as Product[];
export const tutorials: Tutorial[] = tutorialsData as unknown as Tutorial[];
export const projects: Project[] = projectsData as unknown as Project[];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.category === categoryId);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getInStockProducts(): Product[] {
  return products.filter((p) => p.inStock);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getTutorialBySlug(slug: string): Tutorial | undefined {
  return tutorials.find((t) => t.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(productId: string, limit: number = 3): Product[] {
  const product = getProductById(productId);
  if (!product) return [];
  return products
    .filter((p) => p.id !== productId && p.category === product.category)
    .slice(0, limit);
}

export function getProductsByTag(tag: string): Product[] {
  return products.filter((p) => p.tags.includes(tag));
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q) ||
      p.tags.some((t) => t.includes(q)) ||
      p.nameEn.toLowerCase().includes(q)
  );
}