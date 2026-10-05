import Image from 'next/image';
import heroImage from '@/assets/images/hero.jpg';
import Button from '@/components/ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        className={styles.image}
      />

      <div className={styles.content}>
        <h1 id="hero-title" className={`display ${styles.title}`}>
          Waxes &amp; Oils.
        </h1>
        <p className={styles.sub}>One of the finest in Pakistan.</p>
        <Button href="#products" className={styles.cta}>
          Products
        </Button>
      </div>
    </section>
  );
}
