import { siteConfig } from '@/config/site';
import { products } from '@/data/products';
import { productHref } from '@/lib/products';

export default function sitemap() {
  return [
    { url: siteConfig.url, priority: 1 },
    ...products.map((product) => ({
      url: new URL(productHref(product.slug), siteConfig.url).toString(),
      priority: 0.8,
    })),
  ];
}
