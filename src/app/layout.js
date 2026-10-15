import SiteFooter from '@/components/layout/SiteFooter';
import { siteConfig } from '@/config/site';
import { fontVariables } from '@/lib/fonts';
import '@/styles/globals.css';

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.brand,
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#132f48',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
