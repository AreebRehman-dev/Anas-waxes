import About from '@/components/sections/About';
import Hero from '@/components/sections/Hero';
import Inquiry from '@/components/sections/Inquiry';
import Products from '@/components/sections/Products';
import { oils, waxes } from '@/data/products';

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <About />
      <div id="products">
        <Products {...waxes} tone="cream" notePlacement="inline" />
        <Products {...oils} tone="paper" notePlacement="below" />
      </div>
      <Inquiry />
    </main>
  );
}
