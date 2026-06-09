'use client';

import { useState } from 'react';
import { projects } from '@/lib/data';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string | null>(null);

  const difficulties = [...new Set(projects.map((p) => p.difficulty))];
  const filtered = filter
    ? projects.filter((p) => p.difficulty === filter)
    : projects;

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="مشاريع الزبائن"
          subtitle="أفكار ومشاريع أنجزها زبائننا باستخدام مكوناتنا"
        />

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter(null)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
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
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
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
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                {project.videoUrl ? (
                  <div className="relative cursor-pointer group/video">
                    <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center group-hover/video:scale-110 transition-all">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <svg className="w-16 h-16 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="info">{project.difficulty}</Badge>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {project.customerName} - {project.customerCity}
                  </div>
                  <span className="text-gray-600">{project.completedAt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">لا توجد مشاريع في هذا التصنيف</p>
          </div>
        )}
      </div>
    </div>
  );
}