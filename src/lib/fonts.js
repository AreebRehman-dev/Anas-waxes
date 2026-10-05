import {
  Gilda_Display,
  IBM_Plex_Mono,
  Imbue,
  Inter,
  Montserrat,
  Sorts_Mill_Goudy,
} from 'next/font/google';

// Headlines.
const display = Imbue({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-display',
  display: 'swap',
  adjustFontFallback: false,
});

// Body copy and UI.
const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// Prices.
const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-mono',
  display: 'swap',
  preload: false,
});

// Footer only, so none of these are preloaded.
const label = Montserrat({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-label',
  display: 'swap',
  preload: false,
});

const serif = Sorts_Mill_Goudy({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif',
  display: 'swap',
  preload: false,
  adjustFontFallback: false,
});

const accent = Gilda_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-accent',
  display: 'swap',
  preload: false,
  adjustFontFallback: false,
});

export const fontVariables = [display, sans, mono, label, serif, accent]
  .map((font) => font.variable)
  .join(' ');
