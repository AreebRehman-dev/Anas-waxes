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
          className={`parallax-photo ${styles.image}`}
        />
        <h2 className={`reveal ${styles.title}`}>contact us</h2>
      </div>

      <dl className={`reveal ${styles.details}`}>
        <div className={styles.group}>
          <dt className={styles.label}>Phone</dt>
          <dd>
            <a className={`link-line ${styles.value} ${styles.phone}`} href={phoneHref}>
              {siteConfig.contact.phone}
            </a>
          </dd>
        </div>
        <div className={styles.group}>
          <dt className={styles.label}>E-mail</dt>
          <dd>
            <a className={`link-line ${styles.value} ${styles.email}`} href={emailHref}>
              {siteConfig.contact.email}
            </a>
          </dd>
        </div>
      </dl>
    </footer>
  );
}
