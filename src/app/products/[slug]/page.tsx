import { notFound } from 'next/navigation';
import { getProductBySlug, getRelatedProducts } from '@/lib/data';
import { ProductDetail } from '@/components/product-detail/ProductDetail';
import productsData from '@/data/products.json';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.id, 3);

  return <ProductDetail product={product} related={related} />;
}

export function generateStaticParams() {
  return productsData.map((p: any) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'المنتج غير موجود - مكونات العراق' };

  return {
    title: `${product.name} - مكونات العراق`,
    description: product.shortDesc,
    openGraph: {
      title: product.name,
      description: product.shortDesc,
    },
  };
}