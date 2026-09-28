# Lumina Dental & Implant Studio (lumina-dental)

React 19 + Vite 6 + TypeScript + Tailwind CSS v4 + motion + react-router-dom v7.
A demo/fictional clinic website for **Lumina Dental & Implant Studio**, Bengaluru.
All clinic data is fictional (see `Dental_Final_Demo_3_Client_Brief.pdf`). Branding
says **Lumina** — a physical Bengaluru clinic, not a SaaS. This demo exists so the
client can choose between this site and the PearlSmile (Goa) one.

## Stack & Run

- Install: `npm install`
- Dev server: `npm run dev` → **port 5173** (3000/3100 are taken by other apps).
- Typecheck / "lint": `npx tsc --noEmit` (no test suite)
- Build: `npm run build` → `dist/`
- Preview prod build: `npx vite preview --port 5173`

## Live Deployment (GitHub Pages)

- **Live: https://rajveer-adpaikar.github.io/lumina-dental/** — repo `Rajveer-Adpaikar/lumina-dental`, Pages serves the `gh-pages` branch root
- Redeploy after changes: `npm run build && npx gh-pages -d dist --dotfiles`, then push source to `main`. Pages auto-builds on push to `gh-pages`.
- `vite.config.ts` hardcodes `base: '/lumina-dental/'` and `App.tsx` passes it to `<BrowserRouter basename={import.meta.env.BASE_URL}>` — these two must stay in sync. If the repo/site name ever changes, change BOTH or you get broken assets or "No routes matched".
- Never use root-absolute hrefs (`/#treatments`) anywhere — they escape the `/lumina-dental/` base on Pages. Use page-relative routes (`/treatments`).
- Multi-page SPA: `/`, `/treatments`, `/dentists`, `/results`, `/cost`, `/faq`, `/contact`. Deep links work via the `404.html` trick (serves the app, router resolves the path or NotFound).
- CDN lag is real: right after publishing, Pages can serve a stale bundle for a couple minutes. Poll for the new hashed asset name in curl'd HTML before concluding a deploy failed.

## Data & Content

- `src/config.ts` — single source of truth: `CLINIC` object (name, tagline, address, phone, whatsappLink, email, `hours[]`, `dentists[]`, `services[]` (6 categories), `stats[]`, `reviews[]`, `gallery[]`, `faqs[]`, `beforeAfter[]`, `calLink`, `images` — verified Unsplash URLs).
- Phone numbers must be dummy values (`+91 80 4587 2196`, fictional). All emails use `.example`.
- Home flow (per brief §9): Hero → Trust → Dentists → Treatments → Why Us → Before/After → Reviews → Emergency CTA → Cost Enquiry → FAQ → Gallery → Location → Booking → Footer.
- Components in `src/components/`, pages in `src/pages/`. Sections reused across subpages.

## Design System ("Lumina Rose")

- Palette (Tailwind v4 `@theme` tokens in `src/index.css`), anchored on impeccable seed-198 (rose/plum, hue 340°):
  - `wine` (deep plum-primary; `wine-950` ≈ #2a0a18 → `wine-50`)
  - `blush` (rose accent — emergency CTA, highlights)
  - `gold` (champagne accent — branded CTAs, smile-arch)
  - `snow` / `porcelain` (pure white + faint plum-tinted surface), `ink` (plum-tinted near-black text)
- Type: **Bodoni Moda** (`font-display`) + **Archivo** (`font-sans`) + **Spline Sans Mono** (`font-data`).
- Signature motif: **smile-arch** (`.smile-arch` CSS class) — gold circular arch + smile line, used as the logo monogram and on the 404 page.
- Mobile: sticky bottom bar (Call | WhatsApp | Book) — `.sticky-bar`, hidden ≥768px. Booking modal is `z-[60]` so it sits above it.

## Gotchas

- The old PearlSmile repo lives at `Rajveer-Adpaikar/pearlsmile-dental` — keep them separate. This repo's git origin must stay `lumina-dental`.
- The Cost Enquiry form opens WhatsApp with the prefilled message — there's no backend in the demo.
- Before/after gallery uses verified Unsplash stock photos + a "demo imagery" caveat; swap in real case photos before showing the client.
- Booking modal needs ≥ ~900px width (`max-w-5xl`) or Cal's month view collapses. Verify with `cal-inline` custom element + inner iframe, not screenshots.
- `.playwright-mcp/` is gitignored; the repo also ignores `.impeccable/`, `dist/`, `node_modules/`, `.env*`.