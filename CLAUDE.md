# Junglee Journeys — Repo Guide

> **Keeping this file fresh:** When you change the stack, add/remove components or routes, change deployment, modify third-party integrations, or shift the performance/architecture strategy — update this file in the same commit. Stale docs are worse than no docs. The user explicitly expects this file to reflect reality.

## Snapshot

Static Next.js site for **Junglee Journeys**, a private tiger-safari operator in India founded by Raviraj Soman. The site is live at **https://jungleejourneys.com**, deployed as a Cloudflare Pages static export with Pages Functions for the enquiry form and WhatsApp click tracking.

## Stack

- **Next.js 16.2.6** (App Router, `output: 'export'`, `trailingSlash: true`, `images.unoptimized: true`)
- **React 19.2.3**
- **TypeScript 5**, `target: "ES2022"` in `tsconfig.json` (do not lower — older targets ship unneeded polyfills)
- **Tailwind CSS v4** via `@tailwindcss/postcss`
- **Key deps:** `gray-matter` (markdown frontmatter), `react-markdown` + `remark-gfm` (content rendering), `sharp` (devDep, for `scripts/optimize-images.mjs` only — not used at build time)
- **Fonts:** Reform Regular (local OTF at `src/fonts/Reform.otf` → `.section-heading`, `.font-reform`), Gelasio 400/600/700 (Google), Outfit 300–700 (Google, ornamental)
- **No icon font.** Material Symbols was removed in an earlier session — do not add it back unless absolutely needed (it cost ~200ms render block).

## URLs

| | |
|---|---|
| Production | https://jungleejourneys.com |
| Cloudflare Pages project | `junglee-journeys-web` |
| GitHub | https://github.com/SourabhBand/junglee-journeys-web |
| Default branch | `main` |

## Deployment workflow

```bash
npm run build      # static export → out/
npm run deploy     # wrangler pages deploy out --project-name junglee-journeys-web
npm run preview    # wrangler pages dev out (local Pages emulator)
npm run dev        # next dev (regular Next.js dev server)
```

**Deploys are manual.** Pushing to `main` does NOT auto-deploy. Run `npm run deploy` explicitly after pushing.

Wrangler OAuth token expires periodically. If `npm run deploy` fails with an auth error, run `npx wrangler login` in an interactive terminal.

The parent folder's `CLAUDE.md` (one level up) describes an abandoned WordPress/Hostinger plan — **ignore it**. The Next.js + Cloudflare stack is the current reality.

## Project structure

```
junglee-journeys-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx                  Root layout (fonts, JSON-LD, hero preload, analytics)
│   │   ├── page.tsx                    Homepage
│   │   ├── globals.css                 Tailwind + custom utilities (ken-burns, carousel fade, etc.)
│   │   ├── about/page.tsx
│   │   ├── blog/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── enquire/page.tsx            Renders <EnquiryForm />
│   │   ├── destinations/page.tsx       Hub
│   │   ├── safaris/page.tsx            Hub
│   │   ├── destination/[slug]/page.tsx Dynamic destination detail (markdown from content/destinations/)
│   │   └── safari/[slug]/page.tsx      Dynamic safari detail (markdown from content/safaris/)
│   ├── components/                     18 components — see below
│   ├── fonts/Reform.otf
│   └── lib/
│       ├── assets.ts                   SVG_ASSETS + IMAGE_ASSETS maps (per-image format choice lives here)
│       └── content.ts                  DESTINATIONS + SAFARIS data arrays (loaded by hub/detail pages)
├── content/
│   ├── 01-homepage.md … 07-blog-index.md   Hub-page markdown
│   ├── destinations/01-kanha.md … 11-gir.md   (11 parks)
│   └── safaris/01-central-india-tiger-trail.md … 03-ranthambore-weekend.md   (3 packages)
├── functions/api/
│   ├── enquiry.ts                      POST /api/enquiry — Resend email + Sheets log
│   └── wa-click.ts                     POST /api/wa-click — Sheets log only
├── public/
│   ├── images/                         JPG/WebP/AVIF — see Performance Strategy below
│   ├── robots.txt
│   ├── sitemap_index.xml
│   ├── page-sitemap.xml
│   ├── destination-sitemap.xml
│   ├── safari-sitemap.xml
│   └── _headers                        Cloudflare Pages headers config
├── scripts/optimize-images.mjs         One-off image optimizer (sharp). Not wired to build.
├── next.config.ts
├── tsconfig.json
└── package.json
```

### Components (`src/components/`)

| Component | Purpose |
|---|---|
| `AnimateOnScroll` | Scroll-triggered fade/slide via IntersectionObserver |
| `ArrowButton` | Reusable round arrow button (carousels) |
| `Breadcrumbs` | Visible breadcrumb nav (Home › hub › page) + `BreadcrumbList` JSON-LD. Rendered on destination + safari detail pages for internal linking / SERP breadcrumbs. |
| `CurrencyConverter` | INR/USD/EUR converter for safari pricing display |
| `DestinationsCarousel` | Homepage carousel — 5 tiger reserves (Tadoba, Bandhavgarh, Kanha, Pench, Ranthambore). Renders only the active slide. |
| `EnquiryForm` | Safari enquiry form — POSTs to `/api/enquiry` |
| `FAQAccordion` | Expandable FAQ section |
| `Footer` | Site footer. Sitewide link mesh: a "Tiger Reserves" column linking all 11 detail-page destinations (data-driven from `DESTINATIONS.filter(hasDetailPage)`) + "Featured Safaris" linking the 3 `SAFARI_FILE_MAP` detail pages. This is the main internal-linking lever for indexing — every page links to every detail page. |
| `Header` | Nav header — accepts `transparent` prop for hero-overlay variant |
| `MarkdownContent` | Styled `react-markdown` renderer for destination/safari detail pages |
| `NumberCounter` | Animated count-up for hero stats |
| `OrnamentDivider` | Decorative gold SVG divider |
| `RelatedParks` | "Explore More Parks" block on destination detail pages — 3 data-driven links (same region first) from `DESTINATIONS.filter(hasDetailPage)`. Part of the internal-linking mesh. |
| `SafariCarousel` | Text-only carousel (no images) — 4 safari experience types |
| `SafariFlipCards` | 2×2 3D CSS flip cards — Tailored Safari Experiences |
| `TestimonialsCarousel` | Text testimonials — **not currently rendered** on any route (kept in case re-added) |
| `WhatsAppFloat` | Fixed-position WhatsApp FAB — uses `WhatsAppLink` with `ariaLabel="Chat on WhatsApp"` |
| `WhatsAppLink` | WhatsApp `<a>` wrapper — fires `navigator.sendBeacon('/api/wa-click')` + gtag event |
| `WildlifeCarousel` | Homepage carousel — 7 species (Lion, Leopard, Rhino, Elephant, Gibbon, Snow Leopard, Red Panda). Renders only the active slide. |

## Infrastructure (Cloudflare Pages)

### Secrets / bindings

Set via Cloudflare Pages dashboard → Settings → Environment Variables → Production.

| Variable | Used by | Purpose |
|---|---|---|
| `RESEND_API_KEY` | `functions/api/enquiry.ts` | Sends enquiry emails via Resend |
| `GOOGLE_SHEETS_WEBHOOK` | `enquiry.ts` + `wa-click.ts` | Google Apps Script webhook for logging enquiries + WhatsApp clicks |

**Gotcha:** When setting secrets via `wrangler pages secret put` on PowerShell, `echo "key" | wrangler ...` silently adds a BOM that breaks the value. Use `cmd /c "echo|set /p=value| npx wrangler pages secret put NAME"` instead, or paste the value into the interactive prompt.

### Functions endpoints

- **`POST /api/enquiry`** — accepts JSON `{ name, email, phone, park, dates, adults, children, rooms, safaris }`. Validates required fields, sends email via Resend from `Junglee Journeys <onboarding@resend.dev>` to `RECIPIENT`, then non-blocking logs to Google Sheet via `context.waitUntil`.
  - **TODO:** `RECIPIENT` in `functions/api/enquiry.ts` is currently hardcoded to `band.sourabh@gmail.com` pending Resend domain verification. After verification, switch back to `jungleejourneys@gmail.com` and update the `from:` to a `@jungleejourneys.com` address.
- **`POST /api/wa-click`** — accepts JSON `{ page }`, non-blocking logs to the same Sheet with `source: "WhatsApp click — <page>"`.

## Third-party scripts (in `src/app/layout.tsx`)

- **Google Analytics 4:** `G-1HZ28CBS39`, `strategy="lazyOnload"`
- **Microsoft Clarity:** `wx4tzcwcmr`, `strategy="lazyOnload"`
- **JSON-LD `TravelAgency` schema** in `<head>` (founder: Raviraj Soman, sameAs Instagram/Facebook/Mammoth Project)

Do NOT move analytics to `afterInteractive` — they're on `lazyOnload` deliberately so they don't block paint.

## Performance strategy

Current PSI mobile (May 2026): **Performance ~86–88**, Accessibility 100, Best Practices 96, SEO 100.

Patterns in place — preserve these:

1. **Hero is a manual `<picture>` element**, not `next/image`. Reason: `images.unoptimized: true` (static export) means `next/image` can't generate responsive sources. The hero ships as:
   - `<source srcset="/images/hero-mobile.avif" type="image/avif" media="(max-width: 768px)" />` (55 KB)
   - `<source srcset="/images/hero.avif" type="image/avif" />` (93 KB)
   - `<img src="/images/hero.jpg" ... fetchPriority="high" />` fallback (83 KB)
   - Both AVIFs are preloaded in `<head>` with matching media queries.
2. **Per-image format choice** in `src/lib/assets.ts` — WebP where it beats JPG, JPG where JPG wins (asian-elephant, bandhavgarh-national-park). Don't blindly switch everything to WebP without measuring.
3. **Carousels render only the active slide** (`WildlifeCarousel`, `DestinationsCarousel`). Do not revert to the opacity-toggle-all-slides pattern — that preloads all images on viewport entry.
4. **Below-fold sections via `next/dynamic`** on the homepage (`WildlifeCarousel`, `DestinationsCarousel`, `SafariFlipCards`, `FAQAccordion`). SSR stays enabled (default) so HTML still contains the content for crawlers; only the JS hydration chunks are deferred.
5. **Analytics on `lazyOnload`** (see above).
6. **`tsconfig.json` target ES2022** — keeps `Array.at`, `flat`, `Object.fromEntries`, etc. out of the polyfill bundle.

To re-run image optimization after adding new images:

```bash
node scripts/optimize-images.mjs
```

The script reads via `readFile` buffers (not file paths) because sharp+Windows file handles cause "UNKNOWN: unknown error, open" on repeated reads. The script also keeps original JPG if the optimized version is bigger, and tries multiple WebP qualities to find the smallest that beats the original.

## Design tokens

| Color | Hex | Usage |
|---|---|---|
| Forest Green (dark) | `#081d01` | Primary background, text on light |
| Beige / Cream | `#ede4d1` | Cards, accents |
| Safari Gold | `#e79e23` | CTAs, highlights |

| Element | Font | Class |
|---|---|---|
| H1, H2 | Reform Regular | `.section-heading` or `.font-reform` |
| H3 | Gelasio 600 | `.font-serif font-semibold` |
| Body | Gelasio 400 | `.font-serif` |
| Ornamental | Outfit | `.font-display` |

**Hero section is exempt** from heading rules — keep its custom styling.

## Known TODOs (carry forward across sessions)

- [ ] Verify the `jungleejourneys.com` domain in Resend, then change `RECIPIENT` in `functions/api/enquiry.ts` back to `jungleejourneys@gmail.com`
- [ ] Disable Cloudflare → Scrape Shield → Email Address Obfuscation for the zone (saves a request + small JS parse)
- [x] Submit `https://jungleejourneys.com/sitemap_index.xml` to Google Search Console (done 2026-06-12, along with Request Indexing on the 10 stuck destination URLs)
- [ ] ~2 weeks out (late June 2026): check GSC Page Indexing — the 10 destination pages should move out of "Discovered – currently not indexed", and the www/http duplicate buckets should drain now that www 301s to apex

## Operational gotchas

- `trailingSlash: true` is required for RSC payload paths under Cloudflare Pages static export. Removing it 404s `__next.<route>.__PAGE__.txt`.
- The 11 destinations are markdown under `content/destinations/` but only 5 appear in `DestinationsCarousel` on the homepage. The full set is available at `/destinations/` and individual `/destination/[slug]/` pages.
- `next/dynamic` with default options keeps SSR enabled — this is what we want here, since static export needs the prerendered HTML for SEO and SSR-disabled would exclude it from the export.
- **Internal linking for indexing (June 2026):** GSC reported the destination/hub pages as "Discovered – currently not indexed" — a crawl-priority problem, not a technical block (sitemaps/robots/canonicals are all clean). Fix was internal linking: sitewide footer mesh to all 11 destination + 3 safari detail pages, `Breadcrumbs` on detail pages, and crawlable `<Link>`s for all 5 featured parks in `DestinationsCarousel`'s `sr-only` block (the carousel only mounts the active slide, so without these only Tadoba was linked from the homepage). When adding new detail pages, add them to the footer mesh automatically by keeping `DESTINATIONS`/`SAFARI_FILE_MAP` current. Also part of the mesh: the "How to Choose" section on `/destinations/` links park names via a `PARK_SLUGS` lookup (name must exactly match `DESTINATIONS[].name`), and `RelatedParks` adds 3 contextual links at the bottom of every destination detail page.
- **www → apex redirect (June 2026):** `www.jungleejourneys.com` used to serve the full site as a 200 duplicate, and Google indexed www versions of several destination pages (kaziranga, manas, gir) despite correct canonicals. Fixed with `functions/_middleware.ts` (301 on host match). Pages `_redirects` does NOT support domain-level sources — don't try that again. Note the middleware means every request now invokes the Functions worker; a zone-level Redirect Rule in the Cloudflare dashboard would avoid that, and if one is added the middleware can be deleted.
- **`SAFARIS` array vs `SAFARI_FILE_MAP` mismatch:** the `/safaris/` hub displays the `SAFARIS` array (10 packages, all `hasDetailPage: false`, slugs like `central-indian-tiger-tour`). The 3 safari pages that actually have detail content come from a *different* set in `SAFARI_FILE_MAP` (`central-india-tiger-trail`, `photography-special`, `ranthambore-weekend`). The two lists do not overlap, so the hub cards are intentionally NOT linked to detail pages (the slugs wouldn't resolve). The 3 real safari pages are linked via the footer + breadcrumbs instead. If you reconcile these later, unify the two sources so hub cards can link directly.
