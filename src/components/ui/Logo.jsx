import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/cn';
import styles from './Logo.module.css';

export default function Logo({ size = 'sm', priority = false, className }) {
  return (
    <Image
      src={logo}
      alt={siteConfig.name}
      priority={priority}
      sizes="120px"
      className={cn(styles.logo, styles[size], className)}
    />
  );
}
