import ProductCard from '@/components/ui/ProductCard';
import { cn } from '@/lib/cn';
import styles from './Products.module.css';

/*
  A grid of product cards. `tone` picks the background ('cream' or 'paper');
  `notePlacement` puts the optional description beside the last row of cards
  ('inline', for when that row has free columns) or underneath ('below').
*/
export default function Products({
  id,
  title,
  note,
  items,
  tone = 'cream',
  notePlacement = 'below',
}) {
  const titleId = `${id}-title`;

  return (
    <section className={cn(styles.section, styles[tone])} id={id} aria-labelledby={titleId}>
      <div className={styles.inner}>
        <h2 id={titleId} className={`display reveal ${styles.title}`}>
          {title}
        </h2>

        <div className={styles.grid}>
          {items.map((item) => (
            <ProductCard key={item.slug} {...item} />
          ))}
          {note && notePlacement === 'inline' ? (
            <p className={cn('reveal', styles.note, styles.noteInline)}>{note}</p>
          ) : null}
        </div>

        {note && notePlacement === 'below' ? (
          <p className={cn('reveal', styles.note, styles.noteBelow)}>{note}</p>
        ) : null}
      </div>
    </section>
  );
}
