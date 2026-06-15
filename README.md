# Sea Shark Shipping Services LLC — website

A cinematic, "luxury-maritime" marketing site. Dark and restrained, built to
convey trust through craft rather than invented scale (the company was founded
in 2023 — every fact on the site is real).

## Stack

- **React + Vite** — multi-page app via **React Router**
- **Tailwind CSS** — design tokens live in `src/index.css` (`:root`) and
  `tailwind.config.js`
- **GSAP (ScrollTrigger)** — scroll reveals + image parallax
- **Framer Motion** — route transitions, magnetic CTA, micro-interactions
- **three.js / react-three-fiber** — the animated ocean hero (lazy-loaded)
- **Lenis** — smooth scroll, synced to the GSAP ticker
- Mobile-first, responsive, `prefers-reduced-motion` respected throughout

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the build
```

Requires Node 18+.

## Design system

| Token        | Value     | Use                          |
| ------------ | --------- | ---------------------------- |
| `--ink`      | `#05090F` | base background              |
| `--hull`     | `#0A1119` | raised surfaces / cards      |
| `--steel`    | `#3E5A78` | mid-tone / the ocean         |
| `--mist`     | `#93A1B0` | secondary text               |
| `--foam`     | `#ECF1F6` | primary text                 |
| `--bronze`   | `#C49A55` | the single warm accent       |

Type: **Fraunces** (display) · **Hanken Grotesk** (body) · **Space Grotesk**
(data / eyebrows / counters). Loaded from Google Fonts in `index.html`.

Signature: the 3D ocean hero, and the recurring **Khorfakkan position eyebrow**
(`25.34°N · 56.35°E`) used in place of decorative section numbering.

## Where the client's real assets go

All facts come from `src/data/site.js` and `src/data/services.js` — edit there,
not in components.

| Slot | File | Note |
| ---- | ---- | ---- |
| Vessel & ocean photography | `components/ParallaxMedia.jsx` (used in `sections/FleetTeaser.jsx`, `pages/Fleet.jsx`, `pages/ServiceDetail.jsx`) | Pass a real `src` to `<ParallaxMedia>` — placeholders show the slot label until then. Use high-res 4:3 / 3:4 stills. |
| Hero footage (optional) | `components/ocean/OceanHero.jsx` | To use real video instead of the 3D ocean, swap the `<Canvas>` for a muted autoplay `<video>` and keep the vignette + grain overlays. |
| Social share image | `index.html` (`og:image`) + `public/og-cover.jpg` | 1200×630 cinematic still. |
| Map | `pages/Contact.jsx` | Keyless Google Maps embed centred on Khorfakkan Port; swap the query for a pinned office if preferred. |

## Wiring the contact form to a real backend

`pages/Contact.jsx` currently validates client-side and opens a pre-filled
email to `ops@seasharkuae.com` (look for the **BACKEND NOTE** comment). Replace
that block with a POST to your handler of choice (Formspree, a Cloud Function,
or your own endpoint) and keep the success state.

## Accessibility & performance

- Semantic landmarks, alt text on real images, visible focus rings, a skip link
- `prefers-reduced-motion`: Lenis, the 3D ocean, parallax and reveals all fall
  back to static states
- three.js + GSAP are split into their own chunks and lazy-loaded so they never
  block first paint

© Sea Shark Shipping Services LLC.
