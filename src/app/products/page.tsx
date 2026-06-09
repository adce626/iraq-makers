'use client';

import { Suspense, useState, useMemo, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Product } from '@/types';
import { products, categories } from '@/lib/data';
import { ProductGrid } from '@/components/products/ProductGrid';
import { ProductFilter } from '@/components/products/ProductFilter';
import { SectionTitle } from '@/components/ui/SectionTitle';

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const categoryFromUrl = searchParams.get('category');
  const sortFromUrl = searchParams.get('sort');
  const searchFromUrl = searchParams.get('search');

  const [activeCategory, setActiveCategory] = useState<string | null>(categoryFromUrl);
  const [sortBy, setSortBy] = useState(sortFromUrl || 'default');
  const [searchQuery, setSearchQuery] = useState(searchFromUrl || '');

  const updateUrl = useCallback((category: string | null, sort: string, search: string) => {
    const params = new URLSearchParams();
    if (category) params.set('category', category);
    if (sort && sort !== 'default') params.set('sort', sort);
    if (search) params.set('search', search);
    const qs = params.toString();
    router.replace(qs ? `/products?${qs}` : '/products', { scroll: false });
  }, [router]);

  const handleCategoryChange = (cat: string | null) => {
    setActiveCategory(cat);
    updateUrl(cat, sortBy, searchQuery);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    updateUrl(activeCategory, sort, searchQuery);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUrl(activeCategory, sortBy, searchQuery);
  };

  const filtered = useMemo(() => {
    let result: Product[] = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.includes(q) ||
          p.nameEn.toLowerCase().includes(q) ||
          p.shortDesc.includes(q) ||
          p.tags.some((t) => t.includes(q))
      );
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [activeCategory, sortBy, searchQuery]);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="جميع المنتجات"
          subtitle="تصفح مجموعتنا الكاملة من المكونات الإلكترونية"
        />

        <div className="mb-8">
          <form onSubmit={handleSearchSubmit} className="relative max-w-xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن منتج..."
              className="w-full bg-gray-900 text-white rounded-xl px-5 py-3.5 pe-12 placeholder-gray-500 border border-gray-700 focus:border-primary focus:outline-none transition-all min-h-[48px]"
            />
            <button type="submit" className="absolute start-4 top-1/2 -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <ProductFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
              sortBy={sortBy}
              onSortChange={handleSortChange}
              totalProducts={products.length}
              filteredCount={filtered.length}
            />
          </div>
          <div className="lg:col-span-3 mt-6 lg:mt-0">
            <ProductGrid products={filtered} columns={3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-800 rounded-lg w-48 mb-4 mx-auto" />
            <div className="h-4 bg-gray-800 rounded-lg w-64 sm:w-96 mb-12 mx-auto" />
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="h-96 bg-gray-800 rounded-2xl" />
              <div className="lg:col-span-3 grid grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-80 bg-gray-800 rounded-2xl" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}