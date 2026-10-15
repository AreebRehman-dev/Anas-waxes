import SiteHeader from '@/components/layout/SiteHeader';
import About from '@/components/sections/About';
import Hero from '@/components/sections/Hero';
import Inquiry from '@/components/sections/Inquiry';
import Products from '@/components/sections/Products';
import { getCategory, getProductsByCategory } from '@/lib/products';

export default function HomePage() {
  const waxes = getCategory('waxes');
  const oils = getCategory('oils');

  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <div id="products">
          <Products {...waxes} items={getProductsByCategory('waxes')} tone="cream" />
          <Products {...oils} items={getProductsByCategory('oils')} tone="paper" />
        </div>
        <Inquiry />
      </main>
    </>
  );
}
