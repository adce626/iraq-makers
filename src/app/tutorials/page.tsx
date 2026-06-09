'use client';

import { useState } from 'react';
import { tutorials } from '@/lib/data';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Badge } from '@/components/ui/Badge';

export default function TutorialsPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = tutorials;

  const difficultyColors = {
    'مبتدئ': 'success',
    'متوسط': 'info',
    'متقدم': 'warning',
  } as const;

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="دروس وأكواد برمجة جاهزة"
          subtitle="دروس تعليمية وأكواد جاهزة لمشاريع Arduino و ESP32"
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {filtered.map((tutorial) => (
            <div key={tutorial.id} className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
              <button
                onClick={() => setExpanded(expanded === tutorial.id ? null : tutorial.id)}
                className="w-full text-right px-6 py-5 flex items-center justify-between hover:bg-white/5 transition-all"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant={difficultyColors[tutorial.difficulty]}>{tutorial.difficulty}</Badge>
                    <span className="text-xs text-gray-500">{tutorial.estimatedTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{tutorial.title}</h3>
                  <p className="text-sm text-gray-400 mt-1 line-clamp-1">{tutorial.description}</p>
                </div>
                <svg className={`w-6 h-6 text-gray-500 shrink-0 mr-4 transition-transform ${expanded === tutorial.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {expanded === tutorial.id && (
                <div className="px-6 pb-6 border-t border-gray-800 pt-4">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">المكونات المطلوبة:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tutorial.components.map((c, i) => (
                        <span key={i} className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-lg text-xs">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h4 className="text-sm font-semibold text-gray-400 mb-2">الكود البرمجي:</h4>
                  <pre className="bg-gray-950 rounded-xl p-4 overflow-x-auto border border-gray-800 text-sm text-gray-300 leading-relaxed mb-4" dir="ltr">
                    <code>{tutorial.code}</code>
                  </pre>

                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>منذ {tutorial.publishedAt}</span>
                    {tutorial.tags.map((tag) => (
                      <span key={tag} className="text-gray-600">#{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">لا توجد دروس متاحة حالياً</p>
          </div>
        )}
      </div>
    </div>
  );
}