import ProductCard from '@/components/ui/ProductCard';
import { cn } from '@/lib/cn';
import styles from './Products.module.css';

/*
  One catalogue block. `tone` picks the background ('cream' or 'paper');
  `notePlacement` puts the description beside the last row of cards ('inline')
  or underneath the grid ('below').
*/
export default function Products({ id, title, note, items, tone = 'cream', notePlacement = 'inline' }) {
  const titleId = `${id}-title`;

  return (
    <section className={cn(styles.section, styles[tone])} id={id} aria-labelledby={titleId}>
      <div className={styles.inner}>
        <h2 id={titleId} className={`display reveal ${styles.title}`}>
          {title}
        </h2>

        <div className={styles.grid}>
          {items.map((item) => (
            <ProductCard key={item.name} {...item} />
          ))}
          {notePlacement === 'inline' ? (
            <p className={cn(styles.note, styles.noteInline)}>{note}</p>
          ) : null}
        </div>

        {notePlacement === 'below' ? (
          <p className={cn(styles.note, styles.noteBelow)}>{note}</p>
        ) : null}
      </div>
    </section>
  );
}
