import styles from './ProductUses.module.css';

export default function ProductUses({ uses }) {
  return (
    <section className={styles.uses} aria-labelledby="uses-title">
      <div className={styles.inner}>
        <h2 id="uses-title" className={`display reveal ${styles.title}`}>
          Major Uses
        </h2>
        <ol className={styles.list}>
          {uses.map((use, index) => (
            <li key={use} className={`reveal ${styles.item}`}>
              <span className={styles.index} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={styles.text}>{use}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
