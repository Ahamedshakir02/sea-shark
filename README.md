# Sea Shark Shipping website

Simple static portfolio site with WhatsApp chat for Sea Shark Shipping Services LLC (UAE).
Built by Orbelis with React and Vite. No backend: the build is plain static files.

## Run it

```
npm install
npm run dev      # local preview while editing
npm run build    # static site in dist/, upload that folder to any host
```

## Where things live

- `src/content.js`: phone, WhatsApp number, email, services, offices, hours and page copy. Edit details here.
- `src/pages/`: Home, Services, one page per service, Our barge, About, Contact, 404.
- `src/components/`: shared parts (menu, footer, page banner, WhatsApp link, scroll reveal).
- `src/styles.css`: all styling.
- `src/assets/`: the barge photo (Malik). Other photos are free Unsplash images set in `content.js`.
- `vercel.json`: sends every page URL to the app so links like /about work on Vercel.
- `legacy-html/`: the earlier one-page HTML version, kept for reference.
