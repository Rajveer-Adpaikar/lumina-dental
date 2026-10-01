# Lumina Dental & Implant Studio (lumina-dental)

React 19 + Vite 6 + TypeScript + Tailwind CSS v4 + motion + react-router-dom v7.
A demo/fictional clinic website for **Lumina Dental & Implant Studio**, Bengaluru.
All clinic data is fictional (see `Dental_Final_Demo_3_Client_Brief.pdf`). Branding
says **Lumina** — a physical Bengaluru clinic, not a SaaS. This demo exists so the
client can choose between this site and the PearlSmile (Goa) one.

## Stack & Run

- Install: `npm install`
- Dev server: `npm run dev` → **port 5173** (3000/3100 are taken by other apps).
- **The site is served at `http://localhost:5173/lumina-dental/` — the subpath is
  required.** `vite.config.ts` hardcodes `base: '/lumina-dental/'`, so a bare
  `localhost:5173` 404s. That 404 is the base config working, not a broken server.
- Typecheck / "lint": `npx tsc --noEmit` (no test suite)
- Build: `npm run build` → `dist/`
- Preview prod build: `npx vite preview --port 5173`
- **Fastest check after any token/layout edit:** `node tools/contrast-check.mjs`
  (exits non-zero on failure) → `npx tsc --noEmit` → `npm run build`.

## Live Deployment (GitHub Pages)

- **Live: https://rajveer-adpaikar.github.io/lumina-dental/** — repo `Rajveer-Adpaikar/lumina-dental`, Pages serves the `gh-pages` branch root
- Redeploy: `npm run build` → `npx gh-pages -d dist --dotfiles` → `git push origin main`.
- **`GH_PAGES=1` does nothing in this repo.** `vite.config.ts` hardcodes
  `base: '/lumina-dental/'` and never reads that env var (it is not referenced in
  `vite.config.ts`, `package.json`, or `src/App.tsx` — verified). Setting it is a
  harmless no-op; an older version of this file wrongly claimed it stamped the base.
  Ignore it. To change the site name, edit `base` in `vite.config.ts` directly.
- `vite.config.ts` hardcodes `base: '/lumina-dental/'` and `App.tsx` passes it to `<BrowserRouter basename={import.meta.env.BASE_URL}>` — these two must stay in sync. If the repo/site name ever changes, change BOTH or you get broken assets or "No routes matched".
- Never use root-absolute hrefs (`/#treatments`) anywhere — they escape the `/lumina-dental/` base on Pages. Use page-relative routes (`/treatments`).
- Multi-page SPA: `/`, `/treatments`, `/dentists`, `/results`, `/cost`, `/faq`, `/contact`. Deep links work via the `404.html` trick (serves the app, router resolves the path or NotFound).
- **CDN lag is real** — measured 4 polls (~60s) and 6 polls (~90s) on two deploys.
  Poll the raw HTML for the new hashed asset name before concluding a deploy failed:
  `Invoke-WebRequest https://rajveer-adpaikar.github.io/lumina-dental/ | Select-String 'assets/index-\w+\.js'`
- **Your browser will cache the old bundle even after the server has the new one.**
  A stale page in Playwright is not proof of a failed deploy — check the raw HTML,
  then hard-reload before investigating.
- Git on Windows/PowerShell: a multi-line `git commit -m "..."` gets split into
  separate arguments and fails. Write the message to a file and use
  `git commit -F <file>`, and delete the file **before** `git add -A` or it lands in
  the commit. (Cost one cleanup commit on 2026-09-30.)
- `GH_PAGES`-free verification before publishing: confirm the built HTML carries
  `/lumina-dental/` on every asset ref and that no `href="/` escapes the base.

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
  The A/B page that drove this choice has been deleted; regenerate a scratch
  comparison if you ever want to re-test. Runner-up was Source Serif 4.
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
`src/index.css`; it parses the real `@theme` values and exits non-zero on failure.
Run it *before* `npm run build` — it is the fastest gate in the repo.

- `wine-500/400`, `blush-500/400` are solved values — going lighter breaks AA.
- `gold-*` is **surface-only**. It carries `wine-950` on it (9.9:1); white text on
  gold never passes, so never put white on a gold background.
- A `text-<token>` class that doesn't exist in `@theme` fails silently and inherits
  the parent color. That bug made the "Emergency · Call Now" button white-on-white
  for a while (`text-blush-700` didn't exist until `blush-700` was added). If you
  reference a color token, confirm it's defined.

### Browser-side contrast audit (catches what the token check can't)

`tools/contrast-check.mjs` only validates declared token pairs. It cannot see a
color inherited from a parent, or text sitting on a gradient. For that, paste the
`browser_evaluate` snippet into Playwright: it walks every text node, resolves the
effective background by walking ancestors for the first non-transparent
`background-color`, converts `oklch()` to sRGB in-page (the canvas trick does **not**
work here — canvas leaves `oklch()` unresolved), and reports ratios under AA.

Two things it taught us, both worth rechecking after layout edits:
- Elements on a **gradient scrim** can't be measured from the DOM (it falls back to
  white and reports a false failure). The gallery caption scrim is real and was
  fixed by hand — an 80%-to-transparent ramp put white text at 4.48:1 over a bright
  photo. It now holds opaque to 45% (`from-wine-950 from-45% to-transparent`).
  Compute gradient cases by hand; don't trust or dismiss the DOM result.

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
- **Per-route `document.title` comes from `ROUTE_TITLES` in `src/App.tsx`**, set by a
  `RouteTitle` effect. Pages serves `404.html` for *every* deep link, and that file
  hardcodes the title "Page not found" — without this effect, hard-refreshing
  `/treatments` rendered the right page under the wrong tab title. Add a new route to
  `ROUTE_TITLES` or it silently falls through to "Page not found".
- The Cost Enquiry form opens WhatsApp with the prefilled message — there's no backend in the demo.
- Before/after gallery uses verified Unsplash stock photos + a "demo imagery" caveat; swap in real case photos before showing the client.
- Booking modal needs ≥ ~900px width (`max-w-5xl`) or Cal's month view collapses. Verify with `cal-inline` custom element + inner iframe, not screenshots.
- `lucide-react` was bumped to ^1.48.0 in this repo — the original 0.546.0 build broke (`icons/index.js` missing). Keep it ≥1.x, or the build fails.
- `.playwright-mcp/` is gitignored; the repo also ignores `.impeccable/`, `dist/`, `node_modules/`, `.env*`.

## Where I left off

**State as of 2026-09-30: clean tree at `3a260d4`, pushed to `main`, and deployed to
GitHub Pages.** The last session fixed a client-reported problem in two parts, then
found and fixed a third bug during deployment verification.

Shipped that session:
- **Readability.** Client reported the site was "extremely hard to read" and that the
  homepage "shows everything combined into the home section."
  - Display face Bodoni Moda → **Alegreya** (chosen by the user from a 4-way A/B;
    Bodoni's Didone hairlines were the core legibility problem).
  - **Removed Spline Sans Mono entirely**; added a `.label` utility (Archivo 600,
    0.08em tracking) for kickers. Monospace was rendering every label thin at 10–12px.
  - **14 WCAG AA contrast failures → 0** across all 7 routes. Re-solved
    `wine-400/500` + `blush-400/500/600` against porcelain. Added the missing
    `blush-700` token that made the Emergency CTA button invisible (white-on-white).
    Fixed the gallery scrim (was 4.48:1).
  - **Homepage de-duplicated:** 12 stacked sections → Hero, route map, WhyUs,
    EmergencyCta, one pull-quote, BookingSection. Page height ~7400px → ~4480px.
- **Per-route `document.title`** — found only because deep links were hard-refreshed
  during deploy verification, not by clicking through.

Verified before calling it done: `tsc --noEmit` clean, build succeeds, 0 contrast
failures on all 7 routes (local **and** live), no horizontal overflow at 320px,
deep links render + title correctly, no console errors.

### Next session — start here

1. `git pull` (origin `lumina-dental`, branch `main`) and `npm install`.
   If the dev server is needed: `npm run dev` → port **5173**, and the site lives at
   **`http://localhost:5173/lumina-dental/`** — *not* bare `/`, because `base` is
   hardcoded to the subpath. A bare `localhost:5173` returns 404 and looks like a
   broken dev server.
2. **Before any client presentation, swap the placeholder content in
   `src/config.ts`** — this is the main outstanding task:
   - `calLink: "envoyc/demo-dental"` is a placeholder. Without a real Cal.com slug the
     booking modal shows a "coming soon" panel instead of a calendar.
   - `images.*` are Unsplash stock. The before/after gallery and dentist portraits are
     the most visible placeholders; the page carries a visible "demo imagery" caveat.
3. Everything else the client asked for is done and deployed. If they ask for visual
   changes, the design decisions above are deliberate — re-read "Design System" and
   "Gotchas" before undoing them.

### Open questions / not done

- No PRODUCT.md or DESIGN.md in this repo, so `impeccable`'s context script reports
  `NO_PRODUCT_MD`. Run `/impeccable init` if you want that scaffold; the design
  context currently lives in this file instead.
- The dead `ClinicInfo.tsx` / `Features.tsx` fork leftovers are still there
  (see Gotchas). Harmless, unreferenced, safe to delete if you want them gone.
- An **Impeccable v4.3.1** update was available (installed v3.9.1) at the time of
  writing; the user was never asked and it was not applied. `npx impeccable update`
  if you want it.