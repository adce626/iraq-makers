import Link from 'next/link';
import { Product } from '@/types';
import { formatCurrency } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative bg-gray-900 flex items-center justify-center px-2 py-4 h-44 sm:h-56">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent z-10" />
          {product.images[0] ? (
            <ImageWithFallback
              src={product.images[0]}
              alt={product.name}
              className="max-w-full max-h-full object-contain"
              containerClassName="w-full h-full flex items-center justify-center"
              iconSize="w-16 h-16"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-900">
              <svg className="w-16 h-16 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          {product.featured && (
            <div className="absolute top-3 end-3 z-20">
              <Badge variant="success">مميز</Badge>
            </div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 z-20 bg-black/60 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">غير متوفر</span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 hover:text-primary transition-all">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{product.shortDesc}</p>

        <div className="flex items-center flex-wrap gap-2 mb-4">
          {product.tags.slice(0, 2).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">{formatCurrency(product.price, product.currency)}</span>
        </div>

        <div className="mt-4">
          <WhatsAppButton
            productName={product.name}
            productId={product.id}
            variant={product.inStock ? 'whatsapp' : 'outline'}
            size="sm"
            fullWidth
          />
        </div>
      </div>
    </div>
  );
}