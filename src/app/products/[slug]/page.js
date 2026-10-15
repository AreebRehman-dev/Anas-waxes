import { notFound } from 'next/navigation';
import SiteHeader from '@/components/layout/SiteHeader';
import ProductIntro from '@/components/product/ProductIntro';
import ProductUses from '@/components/product/ProductUses';
import Inquiry from '@/components/sections/Inquiry';
import Products from '@/components/sections/Products';
import { siteConfig } from '@/config/site';
import { products } from '@/data/products';
import { getCategory, getProduct, getRelatedProducts, productHref } from '@/lib/products';

// Every product page is generated at build time; unknown slugs 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }) {
  const product = getProduct(params.slug);
  if (!product) return {};

  const title = `${product.name} — ${siteConfig.brand}`;
  return {
    title,
    description: product.description,
    alternates: { canonical: productHref(product.slug) },
    openGraph: {
      title,
      description: product.description,
      type: 'website',
      images: [
        { url: product.image.src, width: product.image.width, height: product.image.height },
      ],
    },
  };
}

export default function ProductPage({ params }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const category = getCategory(product.category);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: new URL(product.image.src, siteConfig.url).toString(),
    category: product.range,
    brand: { '@type': 'Brand', name: siteConfig.brand },
  };

  return (
    <>
      <SiteHeader tone="dark" />
      <main id="main">
        <ProductIntro product={product} />
        <ProductUses uses={product.uses} />
        {related.length > 0 ? (
          <Products
            id="related"
            title={`More ${category.shortTitle}`}
            items={related}
            tone="paper"
          />
        ) : null}
        <Inquiry product={product.name} />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
