'use client';

import { useState, use } from 'react';
import { notFound } from 'next/navigation';
import { projects, getProductById } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';

interface Props {
  params: Promise<{ slug: string }>;
}

export function ProjectDetailClient({ params }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const usedProducts = project.productsUsed
    .map((id) => getProductById(id))
    .filter(Boolean);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 mb-16">
          <div className="flex flex-col lg:flex-row gap-4">
            {project.images.length > 1 && (
              <div className="flex lg:flex-col gap-3 order-first lg:order-none">
                {project.images.slice(0, 4).map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-gray-900 rounded-xl border overflow-hidden cursor-pointer transition-all ${
                      i === selectedImage ? 'border-primary ring-2 ring-primary/30' : 'border-gray-800 hover:border-primary/50'
                    }`}
                  >
                    <ImageWithFallback
                      src={img}
                      alt={`${project.title} - ${i + 1}`}
                      className="w-full h-full object-contain"
                      containerClassName="w-full h-full"
                      iconSize="w-5 h-5"
                    />
                  </button>
                ))}
              </div>
            )}
            <div className="flex-1 flex items-center justify-center bg-gray-900 rounded-2xl border border-gray-800 min-h-[300px] lg:min-h-[400px] p-4">
              {project.images[selectedImage] ? (
                <ImageWithFallback
                  src={project.images[selectedImage]}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  containerClassName="w-full h-full min-h-[300px] lg:min-h-[400px] flex items-center justify-center"
                  iconSize="w-24 h-24"
                />
              ) : (
                <div className="flex items-center justify-center">
                  <svg className="w-24 h-24 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge variant="info">{project.difficulty}</Badge>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400 text-sm">{project.customerCity}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{project.title}</h1>
            <div className="text-gray-400 leading-relaxed whitespace-pre-line mb-6">{project.description}</div>

            {usedProducts.length > 0 && (
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-3">المنتجات المستخدمة:</h3>
                <div className="flex flex-wrap gap-2">
                  {usedProducts.map((p) => (
                    <Button key={p!.id} href={`/products/${p!.slug}`} variant="outline" size="sm">
                      {p!.name}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <WhatsAppButton
              productName={project.title}
              productId={project.id}
              variant="whatsapp"
              size="lg"
              fullWidth
            />
          </div>
        </div>

        {project.videoUrl && (
          <div className="max-w-3xl mx-auto bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden mb-16">
            <video controls className="w-full aspect-video" poster={project.images[0]} playsInline>
              <source src={`/api/video?file=${encodeURIComponent(project.videoUrl.split('/').pop()!)}`} type="video/mp4" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
}