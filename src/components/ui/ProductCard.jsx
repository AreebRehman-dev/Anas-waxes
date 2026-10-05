import Image from 'next/image';
import styles from './ProductCard.module.css';

export default function ProductCard({ name, price, image }) {
  return (
    <article className={styles.card}>
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
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>[{price}]</p>
    </article>
  );
}
