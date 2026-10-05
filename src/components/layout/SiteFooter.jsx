import Image from 'next/image';
import contactImage from '@/assets/images/contact.jpg';
import { emailHref, phoneHref, siteConfig } from '@/config/site';
import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.media}>
        <Image
          src={contactImage}
          alt=""
          fill
          sizes="100vw"
          placeholder="blur"
          className={styles.image}
        />
        <h2 className={styles.title}>contact us</h2>
      </div>

      <dl className={styles.details}>
        <div className={styles.group}>
          <dt className={styles.label}>Phone</dt>
          <dd>
            <a className={`${styles.value} ${styles.phone}`} href={phoneHref}>
              {siteConfig.contact.phone}
            </a>
          </dd>
        </div>
        <div className={styles.group}>
          <dt className={styles.label}>E-mail</dt>
          <dd>
            <a className={`${styles.value} ${styles.email}`} href={emailHref}>
              {siteConfig.contact.email}
            </a>
          </dd>
        </div>
      </dl>
    </footer>
  );
}
