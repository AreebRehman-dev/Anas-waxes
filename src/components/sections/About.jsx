import Image from 'next/image';
import aboutImage from '@/assets/images/about.jpg';
import Logo from '@/components/ui/Logo';
import styles from './About.module.css';

const STATS = [
  { value: 'All variety', label: 'you can think of' },
  { value: 'EST. 2009', label: '17 Years of trust' },
];

export default function About() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className="reveal">
            <h2 id="about-title" className={`display ${styles.title}`}>
              About Us
            </h2>
            <div className={styles.copy}>
              <p>Welcome to Anas Waxes</p>
              <p>
                At Anas Waxes, we are committed to providing high quality waxes and oils that meet
                the needs of our customers and businesses. We focus on delivering reliable products,
                consistent quality, and professional service.
              </p>
              <p>
                With a wide range of waxes and oils for different applications, we strive to make it
                easy for our customers to find the right products for their needs.
              </p>
              <p>
                At Anas Waxes, quality, reliability, and customer satisfaction are at the heart of
                everything we do.
              </p>
              <p className={styles.signoff}>Anas Waxes Quality You Can Trust.</p>
            </div>
          </div>

          <div className={`reveal ${styles.media}`}>
            <Image
              src={aboutImage}
              alt="Drums and sacks of wax stacked inside the Anas Waxes warehouse"
              fill
              sizes="(max-width: 899px) 100vw, 45vw"
              placeholder="blur"
              className={styles.image}
            />
          </div>
        </div>

        <ul className={styles.stats}>
          <li>
            <Logo size="lg" />
          </li>
          {STATS.map((stat) => (
            <li key={stat.value}>
              <p className={`display ${styles.statValue}`}>{stat.value}</p>
              <p className={styles.statLabel}>{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
