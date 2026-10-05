# Deploy to Vercel

## 1. Put the code on GitHub

1. On **github.com**, create a new empty repository named `anas-waxes` (no README).
2. In a terminal opened in this folder, run:

```bash
git init
git add .
git commit -m "Anas Waxes site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/anas-waxes.git
git push -u origin main
```

## 2. Deploy

1. Open **vercel.com** and sign in with your GitHub account.
2. **Add New** → **Project**, find `anas-waxes`, and press **Import**.
3. Change nothing. Press **Deploy**.

Vercel detects Next.js on its own. After a minute or two you get a live link
like `anas-waxes.vercel.app`. Every later `git push` rebuilds the site.

## 3. Optional settings

In the Vercel project, under **Settings → Environment Variables**:

- `NEXT_PUBLIC_SITE_URL` — the live address, e.g. `https://anas-waxes.vercel.app`.
- `NEXT_PUBLIC_INQUIRY_ENDPOINT` — a Formspree (or similar) URL, so the inquiry
  form sends by itself instead of opening the visitor's email app.

Redeploy after changing either one.

## Product photos

Product cards show a plain tile until you give them a picture. Put the photo in
`src/assets/images/` and reference it in `src/data/products.js`; the comment at
the top of that file shows how. Direct links from imgbb, Cloudinary or
postimages also work.
