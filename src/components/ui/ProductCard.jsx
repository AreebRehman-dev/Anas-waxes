import Image from 'next/image';
import Link from 'next/link';
import { productHref } from '@/lib/products';
import styles from './ProductCard.module.css';

/* Whole card links to the product page. The second line shows packaging. */
export default function ProductCard({ slug, name, image, specs }) {
  const packaging = specs.find((spec) => spec.label === 'Packaging')?.value;

  return (
    <Link href={productHref(slug)} className={`reveal ${styles.card}`}>
      <div className={styles.media}>
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 599px) 50vw, (max-width: 899px) 33vw, 15vw"
            className={styles.image}
          />
        ) : null}
      </div>
      <h3 className={styles.name}>
        <span className="link-line">{name}</span>
      </h3>
      {packaging ? <p className={styles.meta}>[{packaging}]</p> : null}
    </Link>
  );
}
