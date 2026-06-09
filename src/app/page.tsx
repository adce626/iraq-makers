import { Hero } from '@/components/home/Hero';
import { WhyUs } from '@/components/home/WhyUs';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { CategoriesShowcase } from '@/components/home/CategoriesShowcase';
import { getFeaturedProducts, categories, projects } from '@/lib/data';
import { SectionTitle } from '@/components/ui/SectionTitle';
import Link from 'next/link';
import { Project } from '@/types';

function LatestProjects({ projects }: { projects: Project[] }) {
  const featured = projects.filter(p => p.featured).slice(0, 3);

  if (featured.length === 0) return null;

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="مشاريع ناجحة"
          subtitle="شاهد ما أنجزه زبائننا بمكوناتنا"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((project) => (
            <Link
              key={project.id}
              href="/projects"
              className="group bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden hover:border-primary/30 transition-all"
            >
              <div className="aspect-video bg-gray-800 flex items-center justify-center overflow-hidden">
                {project.images[0] ? (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-white group-hover:text-primary transition-all">{project.title}</h3>
                <p className="text-sm text-gray-400 mt-1 line-clamp-2">{project.description}</p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-xs text-gray-500">{project.customerCity}</span>
                  <span className="text-xs text-gray-600">•</span>
                  <span className="text-xs text-gray-500">{project.difficulty}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-all font-medium">
            عرض جميع المشاريع
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <Hero />
      <CategoriesShowcase categories={categories} />
      <FeaturedProducts products={featuredProducts} />
      <WhyUs />
      <LatestProjects projects={projects} />
    </>
  );
}