'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/data';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const difficulties = [...new Set(projects.map((p) => p.difficulty))];
  const filtered = filter
    ? projects.filter((p) => p.difficulty === filter)
    : projects;

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="مشاريعنا"
          subtitle="مشاريع متكاملة للبيع مع إمكانية التطوير والتعديل حسب طلبك - نوفر كود المصدر والدعم الفني"
        />
        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-10 text-center">
          <p className="text-primary font-semibold text-lg mb-2">جميع المشاريع متوفرة للبيع</p>
          <p className="text-gray-400">نطور المشاريع حسب طلبك ونساعدك في تنفيذ أفكارك. تواصل معنا للمزيد من التفاصيل.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter(null)}
            className={`px-5 py-3 rounded-xl text-sm font-medium transition-all min-h-[44px] ${
              filter === null
                ? 'bg-primary text-white'
                : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-primary/30'
            }`}
          >
            الكل
          </button>
          {difficulties.map((d) => (
            <button
              key={d}
              onClick={() => setFilter(d)}
              className={`px-5 py-3 rounded-xl text-sm font-medium transition-all min-h-[44px] ${
                filter === d
                  ? 'bg-primary text-white'
                  : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-primary/30'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div key={project.id} className="group bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden hover:border-primary/30 transition-all">
              <Link href={`/projects/${project.slug}`} className="block relative aspect-video bg-gray-800 overflow-hidden">
                {project.images[0] ? (
                  <>
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {project.videoUrl && (
                      <button
                        onClick={(e) => { e.preventDefault(); setPlayingVideo(project.videoUrl!); }}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 group/video"
                      >
                        <div className="w-14 h-14 rounded-full bg-primary/80 flex items-center justify-center group-hover/video:scale-110 transition-all">
                          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </button>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                )}
              </Link>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="info">{project.difficulty}</Badge>
                </div>
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-lg font-semibold text-white mb-2 hover:text-primary transition-all">{project.title}</h3>
                </Link>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm mb-4">
                  <div className="flex items-center gap-2 text-gray-500">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="break-words">{project.customerName} - {project.customerCity}</span>
                  </div>
                  <span className="text-gray-600">{project.completedAt}</span>
                </div>
                <WhatsAppButton
                  productName={project.title}
                  productId={project.id}
                  variant="whatsapp"
                  size="sm"
                  fullWidth
                />
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">لا توجد مشاريع في هذا التصنيف</p>
          </div>
        )}

        {playingVideo && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => { setPlayingVideo(null); }}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setPlayingVideo(null)}
                className="absolute -top-12 start-0 text-white hover:text-primary transition-all"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <video controls autoPlay className="w-full rounded-2xl" playsInline>
                <source src={`/api/video?file=${encodeURIComponent(playingVideo.split('/').pop()!)}`} type="video/mp4" />
              </video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}