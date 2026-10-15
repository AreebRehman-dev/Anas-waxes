import { categories, products } from '@/data/products';

export const productHref = (slug) => `/products/${slug}`;

export function getProduct(slug) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category) {
  return products.filter((product) => product.category === category);
}

export function getCategory(id) {
  return categories[id];
}

// Other products from the same category, for the "more" strip on a product page.
export function getRelatedProducts(product, limit = 5) {
  return getProductsByCategory(product.category)
    .filter((other) => other.slug !== product.slug)
    .slice(0, limit);
}
