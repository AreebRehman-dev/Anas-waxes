# Anas Waxes & Petroleum

One-page marketing site built with Next.js 14 (App Router).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Needs Node.js 18.17 or newer.

## Where things live

```
src/
  app/                 Routes: layout.js (fonts, metadata, header, footer) and page.js
  components/
    layout/            SiteHeader, SiteFooter (the "contact us" block)
    sections/          Hero, About, Products, Inquiry — one per band of the page
    forms/             InquiryForm
    ui/                Button, Logo, ProductCard
  config/site.js       Company name, phone, email, page title
  data/products.js     Wax and oil lists, with their descriptions
  lib/                 fonts.js, inquiry.js (form delivery), cn.js
  styles/              tokens.css (colours, sizes), globals.css
  assets/images/       Photos and logo
```

Each component has its styles next to it in a `.module.css` file.

## Common edits

| To change | Edit |
| --- | --- |
| Products, prices, product photos | `src/data/products.js` |
| Phone, email, page title | `src/config/site.js` |
| Colours and type sizes | `src/styles/tokens.css` |
| A photo | Replace the file in `src/assets/images/`, keeping its name |
| About text | `src/components/sections/About.jsx` |

## Inquiry form

With no setup, pressing Submit opens the visitor's email app with the message
addressed to the company. To have the form send by itself, create a form on a
service such as Formspree and put its URL in `.env.local` (and in Vercel's
environment variables):

```
NEXT_PUBLIC_INQUIRY_ENDPOINT=https://formspree.io/f/your-id
```

See `.env.example`. Deployment steps are in `DEPLOY.md`.
