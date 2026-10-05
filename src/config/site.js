export const siteConfig = {
  name: 'Anas Waxes',
  brand: 'Anas Waxes & Petroleum',
  title: 'Anas Waxes & Petroleum — Waxes & Oils',
  description:
    'Anas Waxes supplies high quality waxes and oils for industry across Pakistan. Established 2009.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  contact: {
    phone: '+92 3359926444',
    email: 'anaswaxes.support@gmail.com',
  },
};

export const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, '')}`;
export const emailHref = `mailto:${siteConfig.contact.email}`;
