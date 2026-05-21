# SEEK Biotechnology — Global Website

International marketing site for **SEEK Biotechnology (Shanghai) Co., Ltd.** —
a state-level high-tech enterprise positioned as a circular-economy service
provider.

Built with **Vite + React + Tailwind CSS + Framer Motion**.

## Stack

- Vite 5 / React 18
- Tailwind CSS 3
- Framer Motion (scroll & state animations)
- lucide-react (icons)
- Lightweight in-app i18n (English / 中文 fully translated; 13 more languages
  show a "translation coming soon" toast)

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # preview the production build locally
```

## Structure

```
src/
  components/   # All page sections (Header, Hero, Solutions, ...)
  data/
    content.js  # All textual content in { en, zh } objects
  i18n/
    LangContext.jsx  # Language provider + t() / pick() hooks + toast
  App.jsx       # Section composition
public/
  images/       # Optimized photography and diagrams
    solutions/  cases/  certs/
```

All translatable copy lives in `src/data/content.js` and
`src/i18n/LangContext.jsx`. Components import from these files only — no
strings are hard-coded inside JSX.

## Deployment

The site is a static Vite build. Recommended target: **Vercel**.

1. Push to GitHub.
2. Import the repo in Vercel.
3. Defaults work — Framework: Vite, Build: `npm run build`, Output: `dist`.
4. Add custom domain in Project → Settings → Domains.

A `vercel.json` is included to enable SPA-style routing and long-term caching
for `/images/*`.

## Adding / replacing images

Drop optimized JPGs into `public/images/<section>/` and update the matching
path in `src/data/content.js`. Source materials are kept locally in
`时科对外使用素材/` (excluded from git via `.gitignore`).
