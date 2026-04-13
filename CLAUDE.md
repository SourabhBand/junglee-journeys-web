# Junglee Journeys Web - Project Documentation

## Project Overview
Luxury tiger safari landing page for Junglee Journeys, an India-based wildlife safari company.

## Figma Design Reference
- **Figma URL:** https://www.figma.com/design/W0ovD5EpZqYpwOpYVeYh1V/Untitled?node-id=1-2
- **Approach:** Pixel-perfect implementation from Figma design

## Tech Stack
- **Framework:** Next.js 16.1.1 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:**
  - Reform Regular (local OTF — `src/fonts/Reform.otf`) — all H1/H2 headings via `.section-heading` and `.font-reform`
  - Gelasio 400 / 600 / 700 (Google Fonts) — body text (400), subheadings H3 (600), bold emphasis (700)
  - Outfit 300–700 (Google Fonts) — ornamental use only (`.font-ornament`, `.font-display`)
- **Icons:** Material Symbols (via Google Fonts CDN)

## URLs

| Environment | URL |
|-------------|-----|
| Production | https://junglee-journeys-web.vercel.app |
| GitHub Repo | https://github.com/SourabhBand/junglee-journeys-web |
| Vercel Dashboard | https://vercel.com/sourabhs-projects-dffe0de5/junglee-journeys-web |

## Deployment Workflow

### Automatic Deployments (GitHub → Vercel)
```bash
# Make changes, then:
git add .
git commit -m "Your commit message"
git push origin main
# Vercel automatically deploys in ~20-30 seconds
```

### Manual Deployment (if needed)
```bash
vercel --prod
```

## Project Structure
```
junglee-journeys-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout, fonts, metadata
│   │   ├── page.tsx                  # Main landing page component
│   │   ├── globals.css               # CSS variables, custom styles
│   │   ├── destinations/page.tsx     # Destinations hub page
│   │   └── safaris/page.tsx          # Safaris hub page
│   ├── components/
│   │   ├── WildlifeCarousel.tsx      # "It's Not Just About Tigers" carousel
│   │   ├── DestinationsCarousel.tsx  # "India's Premier Tiger Reserves" carousel
│   │   ├── TestimonialsCarousel.tsx  # "What Our Guests Say" carousel
│   │   ├── SafariFlipCards.tsx       # "Tailored Safari Experiences" 2×2 flip cards
│   │   ├── FAQAccordion.tsx          # FAQ accordion
│   │   ├── MarkdownContent.tsx       # Styled markdown renderer (detail pages)
│   │   ├── AnimateOnScroll.tsx       # Scroll-triggered fade/slide animations
│   │   └── OrnamentDivider.tsx       # Decorative gold divider
│   ├── fonts/
│   │   └── Reform.otf               # Reform Regular (local font, loaded via next/font/local)
│   └── lib/
│       ├── assets.ts                 # Centralized asset paths (SVG_ASSETS, IMAGE_ASSETS)
│       └── content.ts                # DESTINATIONS and SAFARIS data arrays
├── public/
│   └── images/                       # Local image assets
│       ├── hero-tiger-new.jpg
│       ├── asiatic-lion.jpg
│       ├── one-horned-rhino.jpg
│       ├── indian-leopard.jpg
│       ├── kanha-national-park.jpg
│       ├── tadoba-tiger-reserve.jpg
│       ├── ranthambore-national-park.jpg
│       ├── bandhavgarh-national-park.jpg
│       └── ... (SVGs and other assets)
├── next.config.ts                    # External image domains config
├── vercel.json                       # Vercel deployment config
└── package.json
```

## Key Files

### `src/app/layout.tsx`
- **Reform Regular** loaded via `next/font/local` → `--font-reform` CSS variable
- **Gelasio** (Google Fonts, weights 400/600/700) → `--font-gelasio`
- **Outfit** (Google Fonts, utility only) → `--font-outfit`
- SEO metadata (title, description, OpenGraph, Twitter cards)
- Material Symbols icon font link

### `src/app/globals.css`
- CSS variables for brand colors:
  - `--primary`: #e79e23 (safari gold)
  - `--forest-green`: #081d01
  - `--forest-accent`: #0d2a05
  - `--beige`: #ede4d1
  - `--beige-light`: #f5f0e3
  - `--beige-dark`: #e5dfd3
- Typography utility classes:
  - `.section-heading` — Reform Regular, uppercase, 0.04em tracking (used on all H2s)
  - `.font-reform` — Reform Regular utility class
  - `.font-serif` — Gelasio serif
  - `.font-display` — Outfit (ornamental use)
- Custom component classes: `.flip-card-inner`, `.flip-face`, `.gold-rule`, `.pill-card`, `.grain-overlay`, etc.

### `src/app/page.tsx`
Landing page sections (in order):
1. **Hero** — full-screen tiger image, SVG title, stats circles, CTA buttons. **Do not touch.**
2. **Hero copy** — editorial paragraph block on beige
3. **Why Travel With Us** — 4 pill-shaped feature cards (alternating rounded corners)
4. **India's Premier Tiger Reserves** — `<DestinationsCarousel />`
5. **Tailored Safari Experiences** — `<SafariFlipCards />`
6. **What Our Guests Say** — `<TestimonialsCarousel />`
7. **It's Not Just About Tigers** — `<WildlifeCarousel />`
8. **Questions We Get Asked** — `<FAQAccordion />`
9. **Ready?** — 3-step CTA in white card on dark bg
10. **Footer**

### `src/components/SafariFlipCards.tsx`
- 2×2 grid of 3D CSS flip cards (click/tap to flip)
- Front face: number label, heading, SVG icon, gold-rule, CTA text
- Back face: heading as link, body copy
- Icons (inline SVG, gold `#e79e23`):
  - 01 Private Tiger Safaris → PugmarkIcon — "Tap the Paw to explore"
  - 02 Photography Expeditions → ViewfinderIcon — "Find your frame"
  - 03 Weekend Escapes → CalendarIcon (Friday circled) — "Block that Friday"
  - 04 Multi-Park Adventures → RouteIcon (dotted path) — "Take the long route"

### `src/components/DestinationsCarousel.tsx`
- Full dark-bg section with 6 park slides: Kanha, Tadoba, Ranthambore, Bandhavgarh, Pench, Satpura
- Image (58% width) + info card (42%) layout, fading transitions
- Prev/next arrows + dot indicators

### `src/components/TestimonialsCarousel.tsx`
- White bg section, single testimonial card per slide, 3 reviews
- Prev/next arrows + dot indicators

### `src/components/WildlifeCarousel.tsx`
- Dark bg section, 3 slides: Asiatic Lions, One-Horned Rhinos, Leopards
- Same image+info layout as DestinationsCarousel

### `src/lib/assets.ts`
Centralized asset management:
```typescript
export const SVG_ASSETS = {
  heroTitleJunglee, heroTitleJourneys,
  ornamentDivider, quoteIcon,
  arrowCircle, arrowIcon
};

export const IMAGE_ASSETS = {
  heroTiger, kanhaNationalPark, tadobaTigerReserve,
  ranthamboreNationalPark, bandhavgarhNationalPark,
  asiaticLion, oneHornedRhino, indianLeopard, logo, logoSvg
};
```

### `next.config.ts`
- Configured to allow external images from `lh3.googleusercontent.com`

## Design System (from Figma)

### Brand Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Forest Green (Dark) | `#081d01` | Primary background, text |
| Beige/Cream | `#ede4d1` | Cards, accents, light backgrounds |
| Safari Gold | `#e79e23` | CTAs, buttons, highlights |
| White | `#ffffff` | Text on dark, container backgrounds |

### Typography Rules
| Element | Font | Weight | Class |
|---------|------|--------|-------|
| H1, H2 (all headings) | Reform Regular | 400 | `.section-heading` or `.font-reform` |
| H3 (all subheadings) | Gelasio | 600 (semi bold) | `.font-serif font-semibold` |
| Body / paragraphs | Gelasio | 400 | `.font-serif` or `.font-body` |
| Ornamental / nav | Outfit | varies | `.font-display` / `.font-ornament` |

**Rule:** Hero/banner section is exempt — do not change fonts there.

### Common Design Patterns
- **Pill-shaped cards:** `rounded-[9px_120px_9px_120px]` or `rounded-tl-[9px] rounded-tr-[9px] rounded-br-[9px] rounded-bl-[120px]`
- **Standard radius:** `rounded-[9px]`
- **CTA buttons:** `bg-[rgba(231,158,35,0.81)]` with hover `bg-[#e79e23]`

## Implementation Progress

### ✅ Completed Sections
1. **Header/Navigation** - Logo, nav links, "Enquire Now" button
2. **Hero Section** - Tiger image, SVG decorative title, stats circles, CTA (**do not touch fonts here**)
3. **Why Travel With Us** - 4 pill-shaped feature cards (overflow-hidden, responsive radii)
4. **India's Premier Tiger Reserves** - `DestinationsCarousel` (6 parks, prev/next + dots)
5. **Tailored Safari Experiences** - `SafariFlipCards` (2×2 flip grid, custom SVG icons per tile)
6. **What Our Guests Say** - `TestimonialsCarousel` (3 testimonials, prev/next + dots)
7. **It's Not Just About Tigers** - `WildlifeCarousel` (3 wildlife slides)
8. **Questions We Get Asked** - `FAQAccordion`
9. **Ready?** - 3-step CTA in white card
10. **Footer** - Logo, links, copyright
11. **Typography** - Reform Regular (H2), Gelasio 600 (H3), Gelasio 400 (body) site-wide

### 🖼️ Assets Downloaded from Figma
- `hero-tiger-new.jpg` - Main hero image
- `asiatic-lion.jpg` - Wildlife carousel slide 1
- `one-horned-rhino.jpg` - Wildlife carousel slide 2
- `indian-leopard.jpg` - Wildlife carousel slide 3
- `kanha-national-park.jpg`, `tadoba-tiger-reserve.jpg`, `ranthambore-national-park.jpg`, `bandhavgarh-national-park.jpg` - Tiger reserve cards
- Various SVGs for decorative elements

## External Dependencies
- Most images now stored locally in `/public/images/`
- Some legacy images may still reference Google CDN (`lh3.googleusercontent.com`)

## Development Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Git Configuration
- **Default branch:** main
- **Remote:** origin → https://github.com/SourabhBand/junglee-journeys-web.git

## Vercel Configuration
- **Project:** junglee-journeys-web
- **Team:** sourabhs-projects-dffe0de5
- **Framework Preset:** Next.js
- **Node.js Version:** 24.x
- **Production Branch:** main
- **Auto-deployments:** Enabled (pushes to main trigger production deploys)

## Future Improvements to Consider
1. ~~Replace temporary Google CDN images with permanent hosting~~ ✅ Done - images now in `/public/images/`
2. Add custom domain (e.g., jungleejourneys.com)
3. Add contact form functionality (integrate with "Enquire Now" button)
4. Implement booking/inquiry system
5. Add more pages (About, Destinations, Contact)
6. Set up analytics (Vercel Analytics or Google Analytics)
7. Mobile responsiveness fine-tuning
8. Add more wildlife to the carousel if needed

## Figma Node References (for future updates)
| Section | Node ID | Description |
|---------|---------|-------------|
| Full Page | `1-2` | Main landing page frame |
| Wildlife Carousel | `15-2542` | "It's Not Just About Tigers" section |
| Asiatic Lion Slide | `15-2543` | First carousel slide |
| Rhino Image | `15-2659` | One-horned rhino image asset |
| Leopard Slide | `15-2661` | Third carousel slide |
| Ready for Safari | `15-2716` | CTA section with white rectangle |

**Figma MCP Usage:**
```
# Get design context for a node
mcp__figma__get_design_context(nodeId="15:2716", fileKey="W0ovD5EpZqYpwOpYVeYh1V")

# Get screenshot
mcp__figma__get_screenshot(nodeId="15:2716", fileKey="W0ovD5EpZqYpwOpYVeYh1V")
```

## Related Files
- Original HTML design: `../extracted_landing/code.html`
- WordPress staging reference: `../reference.md` (not used for this deployment)

## Troubleshooting

### If automatic deployments stop working:
1. Check Vercel dashboard for error logs
2. Verify GitHub connection in Vercel Git settings
3. As fallback, use `vercel --prod` for manual deployment

### If images don't load:
- Check `next.config.ts` has the image domain whitelisted
- Verify image URLs are still valid (Google CDN links can expire)

### If fonts don't render:
- Check browser console for font loading errors
- Verify Google Fonts link in `layout.tsx` head section
