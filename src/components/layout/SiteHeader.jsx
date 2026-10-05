import Logo from '@/components/ui/Logo';
import { siteConfig } from '@/config/site';
import styles from './SiteHeader.module.css';

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <a href="#main" className={styles.home} aria-label={`${siteConfig.name} — back to top`}>
        <Logo priority />
      </a>
      <p className={`display ${styles.brand}`}>{siteConfig.brand}</p>
    </header>
  );
}
