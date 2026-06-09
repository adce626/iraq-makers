import { projects } from '@/lib/data';
import { ProjectDetailClient } from './ProjectDetailClient';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'المشروع غير موجود' };
  return {
    title: `${project.title} - مكونات العراق`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  return <ProjectDetailClient params={params} />;
}