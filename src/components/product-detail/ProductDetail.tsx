'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import { formatCurrency } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { ProductCard } from '@/components/products/ProductCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { config, getCategoryById } from '@/lib/data';

interface ProductDetailProps {
  product: Product;
  related: Product[];
}

export function ProductDetail({ product, related }: ProductDetailProps) {
  const [activeTab, setActiveTab] = useState<'specs' | 'code' | 'faq'>('specs');
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary transition-all">الرئيسية</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-all">المنتجات</Link>
          <span>/</span>
          <Link href={`/products?category=${product.category}`} className="hover:text-primary transition-all">
            {getCategoryById(product.category)?.name || product.category}
          </Link>
          <span className="text-white">/</span>
          <span className="text-white">{product.name}</span>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 mb-16">
          <div className="flex flex-col lg:flex-row gap-4">
            {product.images.length > 1 && (
              <div className="flex lg:flex-col gap-3 overflow-x-auto flex-nowrap pb-2 -mb-2 scrollbar-thin">
                {product.images.slice(0, 4).map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-gray-900 rounded-xl border overflow-hidden cursor-pointer transition-all ${
                      i === selectedImage ? 'border-primary ring-2 ring-primary/30' : 'border-gray-800 hover:border-primary/50'
                    }`}
                  >
                    <ImageWithFallback
                      src={img}
                      alt={`${product.name} - ${i + 1}`}
                      className="w-full h-full object-contain"
                      containerClassName="w-full h-full"
                      iconSize="w-5 h-5"
                    />
                  </button>
                ))}
              </div>
            )}
            <div className="flex-1 flex items-center justify-center bg-gray-900 rounded-2xl border border-gray-800 min-h-[250px] lg:min-h-[500px] p-4">
              {product.images[selectedImage] ? (
                <ImageWithFallback
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  containerClassName="w-full h-full min-h-[250px] lg:min-h-[500px] flex items-center justify-center"
                  iconSize="w-24 h-24"
                />
              ) : (
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-24 h-24 mx-auto text-gray-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-500 text-sm">صورة المنتج</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {product.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
              <Badge variant={product.inStock ? 'success' : 'warning'}>
                {product.inStock ? 'متوفر في المخزون' : 'غير متوفر حالياً'}
              </Badge>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{product.name}</h1>
            <p className="text-xl text-gray-400 mb-6">{product.shortDesc}</p>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-3xl font-bold text-primary">{formatCurrency(product.price, product.currency)}</span>
              <span className="text-gray-500">شامل التوصيل داخل العراق</span>
            </div>

            <div className="space-y-4 mb-8">
              <WhatsAppButton productName={product.name} productId={product.id} size="lg" fullWidth />
              <Button href={`tel:${config.phone}`} variant="outline" size="lg" className="w-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                اتصل بنا: {config.phone}
              </Button>
            </div>

            <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6">
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{product.description}</p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {config.shippingInfo}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden mb-16">
          <div className="flex border-b border-gray-800">
            {([['specs', 'المواصفات الفنية'], ['code', 'أكواد برمجة جاهزة'], ['faq', 'أسئلة شائعة']] as const).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex-1 px-6 py-4 text-sm font-medium transition-all ${
                  activeTab === key
                    ? 'text-primary border-b-2 border-primary bg-primary/5'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="p-6 md:p-8">
            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-4 bg-gray-950 rounded-xl border border-gray-800">
                    <span className="text-gray-400 text-sm">{key}</span>
                    <span className="text-white font-medium text-sm">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'code' && (
              <div className="space-y-8">
                {product.codeExamples.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">لا توجد أمثلة برمجية متاحة حالياً</p>
                ) : (
                  product.codeExamples.map((example, i) => (
                    <div key={i}>
                      <h4 className="text-white font-semibold mb-1">{example.title}</h4>
                      {example.description && (
                        <p className="text-gray-400 text-sm mb-3">{example.description}</p>
                      )}
                      <pre className="bg-gray-950 rounded-xl p-4 overflow-x-auto border border-gray-800 text-sm text-gray-300 leading-relaxed" dir="ltr">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                  ))
                )}
              </div>
            )}

            {activeTab === 'faq' && (
              <div className="space-y-4">
                {product.faq.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">لا توجد أسئلة شائعة متاحة</p>
                ) : (
                  product.faq.map((item, i) => (
                    <details key={i} className="group bg-gray-950 rounded-xl border border-gray-800 overflow-hidden">
                      <summary className="flex items-center justify-between px-6 py-4 text-white font-medium cursor-pointer hover:bg-white/5 transition-all">
                        {item.q}
                        <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed border-t border-gray-800 pt-4">
                        {item.a}
                      </div>
                    </details>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        {related.length > 0 && (
          <div>
            <SectionTitle
              title="منتجات ذات صلة"
              subtitle="قد تهمك أيضاً هذه المنتجات"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

        {product.videoUrl && (
          <div className="mt-16">
            <SectionTitle title="فيديو تعريفي" subtitle="شاهد المنتج في العمل" />
            <div className="max-w-3xl mx-auto bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
              <video
                controls
                className="w-full aspect-video"
                poster={product.images[0]}
                playsInline
              >
                <source src={`/api/video?file=${encodeURIComponent(product.videoUrl!.split('/').pop()!)}`} type="video/mp4" />
                متصفحك لا يدعم تشغيل الفيديو.
              </video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}