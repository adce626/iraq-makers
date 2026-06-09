import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { tutorials, getTutorialBySlug, getCategoryById } from '@/lib/data';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Badge } from '@/components/ui/Badge';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tutorials.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tutorial = getTutorialBySlug(slug);
  if (!tutorial) return {};
  return {
    title: `${tutorial.title} | مكونات العراق`,
    description: tutorial.description,
    openGraph: { title: tutorial.title, description: tutorial.description },
  };
}

const difficultyColors = {
  'مبتدئ': 'success' as const,
  'متوسط': 'info' as const,
  'متقدم': 'warning' as const,
};

export default async function TutorialDetailPage({ params }: Props) {
  const { slug } = await params;
  const tutorial = getTutorialBySlug(slug);
  if (!tutorial) notFound();

  const category = getCategoryById(tutorial.category);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary transition-all">الرئيسية</Link>
          <span>/</span>
          <Link href="/tutorials" className="hover:text-primary transition-all">الدروس</Link>
          <span className="text-white">/</span>
          <span className="text-white">{tutorial.title}</span>
        </nav>

        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6 md:p-10 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant={difficultyColors[tutorial.difficulty]}>{tutorial.difficulty}</Badge>
            <span className="text-sm text-gray-500">{tutorial.estimatedTime}</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">{tutorial.title}</h1>
          <p className="text-gray-400 leading-relaxed mb-6">{tutorial.description}</p>

          {category && (
            <Link
              href={`/tutorials?category=${category.id}`}
              className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-dark transition-all"
            >
              {category.name}
            </Link>
          )}
        </div>

        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6 md:p-10 mb-6">
          <h2 className="text-lg font-semibold text-white mb-4">المكونات المطلوبة</h2>
          <div className="flex flex-wrap gap-2">
            {tutorial.components.map((c, i) => (
              <span key={i} className="px-4 py-2 bg-gray-800 text-gray-300 rounded-xl text-sm border border-gray-700">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden mb-8">
          <div className="px-6 md:px-10 pt-6 md:pt-10 pb-2">
            <h2 className="text-lg font-semibold text-white mb-1">الكود البرمجي</h2>
            <p className="text-sm text-gray-500 mb-4">انسخ الكود وألصقه في الـ IDE الخاص بك</p>
          </div>
          <pre className="bg-gray-950 p-6 md:p-10 overflow-x-auto border-t border-gray-800 text-sm text-gray-300 leading-relaxed" dir="ltr">
            <code>{tutorial.code}</code>
          </pre>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-12">
          <span>نُشر {tutorial.publishedAt}</span>
          {tutorial.tags.map((tag) => (
            <span key={tag} className="text-gray-600 text-sm">#{tag}</span>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/tutorials"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-primary transition-all font-medium"
          >
            جميع الدروس
          </Link>
        </div>
      </div>
    </div>
  );
}