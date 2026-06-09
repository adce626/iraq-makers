'use client';

import { useState } from 'react';
import { Category } from '@/types';

interface ProductFilterProps {
  categories: Category[];
  activeCategory: string | null;
  onCategoryChange: (categoryId: string | null) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  totalProducts: number;
  filteredCount: number;
}

const sortOptions = [
  { value: 'default', label: 'الترتيب الافتراضي' },
  { value: 'price-asc', label: 'السعر: من الأقل للأعلى' },
  { value: 'price-desc', label: 'السعر: من الأعلى للأقل' },
  { value: 'name', label: 'الاسم' },
];

export function ProductFilter({
  categories,
  activeCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  totalProducts,
  filteredCount,
}: ProductFilterProps) {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          className="w-full flex items-center justify-between px-5 py-4 bg-gray-900 rounded-xl border border-gray-700 text-white min-h-[48px]"
        >
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            تصفية المنتجات
          </span>
          <svg className={`w-5 h-5 transition-transform ${mobileFilterOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <aside className={`lg:block ${mobileFilterOpen ? 'block' : 'hidden'}`}>
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6 lg:sticky lg:top-24">
          <h3 className="text-white font-semibold mb-4">التصنيفات</h3>
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => onCategoryChange(null)}
                className={`w-full text-right px-4 py-3 rounded-lg text-sm transition-all ${
                  activeCategory === null
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                الكل
              </button>
            </li>
            {categories.map((cat) => (
              <li key={cat.id}>
                <button
                  onClick={() => onCategoryChange(cat.id)}
                  className={`w-full text-right px-4 py-3 rounded-lg text-sm transition-all ${
                    activeCategory === cat.id
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>

          <hr className="border-gray-800 my-6" />

          <h3 className="text-white font-semibold mb-4">ترتيب حسب</h3>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 text-sm border border-gray-700 focus:border-primary focus:outline-none min-h-[44px]"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>

          <hr className="border-gray-800 my-6" />

          <div className="text-center text-sm text-gray-500">
            عرض {filteredCount} من {totalProducts} منتج
          </div>
        </div>
      </aside>
    </>
  );
}