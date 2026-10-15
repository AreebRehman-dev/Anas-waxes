import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { getCategory } from '@/lib/products';
import styles from './ProductIntro.module.css';

export default function ProductIntro({ product }) {
  const { name, range, description, specs, image, category } = product;
  const { shortTitle } = getCategory(category);

  return (
    <section className={styles.intro} aria-labelledby="product-title">
      <div className={styles.inner}>
        <nav aria-label="Breadcrumb" className={styles.crumbs}>
          <ol>
            <li>
              <Link href="/" className="link-line">
                Home
              </Link>
            </li>
            <li>
              <Link href={`/#${category}`} className="link-line">
                {shortTitle}
              </Link>
            </li>
            <li aria-current="page">{name}</li>
          </ol>
        </nav>

        <div className={styles.grid}>
          <div className={styles.media}>
            <Image
              src={image}
              alt={name}
              priority
              placeholder="blur"
              sizes="(max-width: 899px) 100vw, 45vw"
              className={styles.image}
            />
          </div>

          <div className={styles.body}>
            <p className={styles.eyebrow}>{range}</p>
            <h1 id="product-title" className={`display ${styles.title}`}>
              {name}
            </h1>
            <p className={styles.description}>{description}</p>

            <dl className={styles.specs}>
              {specs.map((spec) => (
                <div key={spec.label} className={styles.spec}>
                  <dt className={styles.specLabel}>{spec.label}</dt>
                  <dd className={`display ${styles.specValue}`}>{spec.value}</dd>
                </div>
              ))}
            </dl>

            <Button href="#inquiry" variant="outlineDark" className={styles.cta}>
              Request a quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
