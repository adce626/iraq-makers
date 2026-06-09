import { Product } from '@/types';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ProductCard } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/Button';

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="منتجاتنا المميزة"
          subtitle="أفضل المنتجات الأكثر طلباً والمختارة بعناية لمشاريعك"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Button href="/products" variant="outline" size="lg">
            عرض جميع المنتجات
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}