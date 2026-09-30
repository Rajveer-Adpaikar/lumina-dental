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
- **Home is a wayfinding page, not a second copy of every subpage.** It renders only
  Hero → route map (6 links, one per page) → WhyUs → EmergencyCta → one short review
  pull-quote → BookingSection. Every section that owns a route (Treatments, Dentists,
  BeforeAfter, Gallery, Reviews, CostEnquiry, FAQ, Location) renders on that route only.
  Do not re-add them to `Home.tsx` — that duplication was the original complaint.
- Components in `src/components/`, pages in `src/pages/`. Sections reused across subpages.

## Design System ("Lumina Rose")

- Palette (Tailwind v4 `@theme` tokens in `src/index.css`), anchored on impeccable seed-198 (rose/plum, hue 340°):
  - `wine` (deep plum-primary; `wine-950` ≈ #2a0a18 → `wine-50`)
  - `blush` (rose accent — emergency CTA, highlights)
  - `gold` (champagne accent — branded CTAs, smile-arch)
  - `snow` / `porcelain` (pure white + faint plum-tinted surface), `ink` (plum-tinted near-black text)
- Type: **Alegreya** (`font-display`) + **Archivo** (`font-sans`). Alegreya replaced
  Bodoni Moda on purpose: Bodoni is a Didone whose hairline serifs thin to nothing at
  display sizes (it was the main reason the site read as illegible) and it codes
  fashion-editorial rather than clinical. Alegreya keeps a true italic for the
  "Exceptional Care." accent line and stays legible from 20px to 72px.
  Candidate comparison that led to this choice: `tools/font-comparison.html`
  (regenerate if you want to re-test; A=Source Serif 4 was the runner-up).
- **There is no monospace font** — Spline Sans Mono was removed because every label
  was rendering as thin mono at 10–12px, which was the other half of the illegibility
  complaint. Use the `.label` utility (Archivo 600, 0.08em tracking, uppercase) for
  kickers and small caps. Reserve `.font-display` for headings only.
- Headings carry `font-weight: 500` globally — Alegreya at 400 reads light against the
  plum. Numerals and the pull-quote stay at 400 deliberately.
- Signature motif: **smile-arch** (`.smile-arch` CSS class) — gold circular arch + smile line, used as the logo monogram and on the 404 page.
- Mobile: sticky bottom bar (Call | WhatsApp | Book) — `.sticky-bar`, hidden ≥768px. Booking modal is `z-[60]` so it sits above it.

### Contrast is enforced, not eyeballed

Every text token clears WCAG AA (4.5:1) against **porcelain**, the darker of the two
light backgrounds. Run `node tools/contrast-check.mjs` after touching a ramp in
`src/index.css`; it exits non-zero on failure.

- `wine-500/400`, `blush-500/400` are solved values — going lighter breaks AA.
- `gold-*` is **surface-only**. It carries `wine-950` on it (9.9:1); white text on
  gold never passes, so never put white on a gold background.
- A `text-<token>` class that doesn't exist in `@theme` fails silently and inherits
  the parent color. That bug made the "Emergency · Call Now" button white-on-white
  for a while (`text-blush-700` didn't exist until `blush-700` was added). If you
  reference a color token, confirm it's defined.

## Recent fixes (resume point)

- **Header is ALWAYS solid white** (`bg-white` + `border-b border-wine-100`) at every scroll position — it does NOT start transparent. Scrolling only toggles `shadow-sm`. The old transparent-over-hero header caused invisible nav text and the "wine ribbon that fades to white" complaint. Do not revert to `bg-transparent` at the top of `src/components/Header.tsx`.
- **Hero trust band is in normal flow** (NOT `absolute bottom-0`) — it's a `relative bg-white` strip after the content, so it never overlaps the CTAs on short phones.
- Hero heading uses `text-[2.6rem] ... text-balance sm:text-6xl lg:text-7xl` so it doesn't clip at 320px.
- Verified via Playwright: header bg `rgb(255,255,255)` at top + after scroll (blur none); zero horizontal overflow on all 7 routes at 320/375px; mobile menu shows all 5 nav items; sticky bar spans full width bottom.

## Gotchas

- The old PearlSmile repo lives at `Rajveer-Adpaikar/pearlsmile-dental` — keep them separate. This repo's git origin must stay `lumina-dental`.
- `src/components/ClinicInfo.tsx` and `src/components/Features.tsx` are dead files
  carried over from the PearlSmile fork — they reference `pine-*` / `pearl-*` /
  `gold-*` tokens that don't exist here and are imported by nothing. Don't wire them
  up without rewriting them against the current palette.
- PageIntro CTAs take either `to` (route) or `onClick` (action). "Book an appointment"
  uses `onClick={openBooking}` — it must open the modal, not navigate to a page that
  only mentions booking.
- The Cost Enquiry form opens WhatsApp with the prefilled message — there's no backend in the demo.
- Before/after gallery uses verified Unsplash stock photos + a "demo imagery" caveat; swap in real case photos before showing the client.
- Booking modal needs ≥ ~900px width (`max-w-5xl`) or Cal's month view collapses. Verify with `cal-inline` custom element + inner iframe, not screenshots.
- `lucide-react` was bumped to ^1.48.0 in this repo — the original 0.546.0 build broke (`icons/index.js` missing). Keep it ≥1.x, or the build fails.
- `.playwright-mcp/` is gitignored; the repo also ignores `.impeccable/`, `dist/`, `node_modules/`, `.env*`.

## Where I left off

All requested work is complete and deployed: multi-page Lumina site, distinct rose/plum design system, plain-white static header + white in-flow trust band, mobile sticky bar + overflow-safe layout, distinct 404, deployed to GitHub Pages (link above). Next session should:
1. Pull latest (`git pull`) — origin is `lumina-dental`, main branch.
2. `npm install` (uses `bun.lock` + `package-lock.json`; npm worked).
3. For client presentation: swap in real dentist/case photos and a real Cal.com slug in `src/config.ts` (`calLink`, `images`), then rebuild + redeploy (commands above).