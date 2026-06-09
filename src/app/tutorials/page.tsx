'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { tutorials } from '@/lib/data';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Badge } from '@/components/ui/Badge';

export default function TutorialsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null);

  const difficulties = [...new Set(tutorials.map((t) => t.difficulty))];

  const filtered = useMemo(() => {
    let result = tutorials;

    if (difficultyFilter) {
      result = result.filter((t) => t.difficulty === difficultyFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.includes(q) ||
          t.description.includes(q) ||
          t.tags.some((tag) => tag.includes(q)) ||
          t.components.some((c) => c.includes(q))
      );
    }

    return result;
  }, [searchQuery, difficultyFilter]);

  const difficultyColors = {
    'مبتدئ': 'success' as const,
    'متوسط': 'info' as const,
    'متقدم': 'warning' as const,
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="دروس وأكواد برمجة جاهزة"
          subtitle="دروس تعليمية وأكواد جاهزة لمشاريع Arduino و ESP32"
        />

        <div className="max-w-4xl mx-auto mb-8 space-y-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث في الدروس..."
              className="w-full bg-gray-900 text-white rounded-xl px-5 py-3.5 pe-12 placeholder-gray-500 border border-gray-700 focus:border-primary focus:outline-none transition-all"
            />
            <svg className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setDifficultyFilter(null)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                difficultyFilter === null
                  ? 'bg-primary text-white'
                  : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-primary/30'
              }`}
            >
              الجميع
            </button>
            {difficulties.map((d) => (
              <button
                key={d}
                onClick={() => setDifficultyFilter(d)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  difficultyFilter === d
                    ? 'bg-primary text-white'
                    : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-primary/30'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {filtered.map((tutorial) => (
            <div key={tutorial.id} className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden hover:border-primary/30 transition-all">
              <Link href={`/tutorials/${tutorial.slug}`} className="block p-6 hover:bg-white/[0.02] transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant={difficultyColors[tutorial.difficulty]}>{tutorial.difficulty}</Badge>
                  <span className="text-xs text-gray-500">{tutorial.estimatedTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 hover:text-primary transition-all">{tutorial.title}</h3>
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">{tutorial.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tutorial.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs text-gray-600">#{tag}</span>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-16 h-16 mx-auto text-gray-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-500">لا توجد دروس تطابق بحثك</p>
          </div>
        )}
      </div>
    </div>
  );
}