import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/cn';
import styles from './SiteHeader.module.css';

/* `tone="light"` for use over a photograph, `tone="dark"` over a pale band. */
export default function SiteHeader({ tone = 'light' }) {
  return (
    <header className={cn(styles.header, styles[tone])}>
      <Link href="/" className={styles.home} aria-label={`${siteConfig.name} — home`}>
        <Logo priority />
      </Link>
      <p className={`display ${styles.brand}`}>{siteConfig.brand}</p>
    </header>
  );
}
