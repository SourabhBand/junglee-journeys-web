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
  - Cinzel (display headings / section-heading class)
  - Playfair Display (serif text)
  - Montserrat (body text)
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
│   │   ├── layout.tsx          # Root layout, fonts, metadata
│   │   ├── page.tsx            # Main landing page component
│   │   └── globals.css         # CSS variables, custom styles
│   ├── components/
│   │   ├── WildlifeCarousel.tsx # "It's Not Just About Tigers" carousel
│   │   └── OrnamentDivider.tsx  # Decorative divider component
│   └── lib/
│       └── assets.ts           # Centralized asset paths (SVG_ASSETS, IMAGE_ASSETS)
├── public/
│   └── images/                 # Local image assets (downloaded from Figma)
│       ├── hero-tiger-new.jpg
│       ├── asiatic-lion.jpg
│       ├── one-horned-rhino.jpg
│       ├── indian-leopard.jpg
│       ├── kanha-national-park.jpg
│       ├── tadoba-tiger-reserve.jpg
│       ├── ranthambore-national-park.jpg
│       ├── bandhavgarh-national-park.jpg
│       └── ... (SVGs and other assets)
├── next.config.ts              # External image domains config
├── vercel.json                 # Vercel deployment config
└── package.json
```

## Key Files

### `src/app/layout.tsx`
- Custom fonts configuration (Cinzel, Playfair, Montserrat)
- SEO metadata (title, description, OpenGraph, Twitter cards)
- Material Symbols icon font link

### `src/app/globals.css`
- CSS variables for brand colors:
  - `--primary`: #d4a04d (gold)
  - `--forest-green`: #0b1c09
  - `--forest-accent`: #1a2e18
  - `--beige-light`: #f4f1ea
  - `--beige-dark`: #e5dfd3
- Custom utility classes: `.hero-overlay`, `.ornament-divider`, `.font-display`, `.font-serif`

### `src/app/page.tsx`
Landing page sections:
1. Header (navigation with logo and "Enquire Now" button)
2. Hero (full-screen tiger image with stats circles: 70%, 15+, 500+)
3. Why Travel With Us (4 feature cards with pill-shaped design)
4. India's Premier Tiger Reserves (4 destination cards with curved image masks)
5. Tailored Safari Experiences (experience type cards)
6. What Our Guests Say (testimonials with quote icons)
7. It's Not Just About Tigers (WildlifeCarousel component - Lions, Rhinos, Leopards)
8. Ready for Your Tiger Safari? (3-step CTA in white rectangle)
9. Footer (logo, links, copyright)

### `src/components/WildlifeCarousel.tsx`
- Client component (`'use client'`) for carousel interactivity
- 3 slides: Asiatic Lions, One-Horned Rhinos, Leopards
- Each slide has: wildlife image (692x461), info card with title, subtitle, location, population
- Navigation arrows and slide indicators
- Uses `IMAGE_ASSETS` from `lib/assets.ts`

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

### Typography Classes
- `.section-heading` - Cinzel font for major headings (48px)
- `.font-serif` - Playfair Display for body text
- `.font-display` - Display font for special elements

### Common Design Patterns
- **Pill-shaped cards:** `rounded-[9px_120px_9px_120px]` or `rounded-tl-[9px] rounded-tr-[9px] rounded-br-[9px] rounded-bl-[120px]`
- **Standard radius:** `rounded-[9px]`
- **CTA buttons:** `bg-[rgba(231,158,35,0.81)]` with hover `bg-[#e79e23]`

## Implementation Progress

### ✅ Completed Sections
1. **Header/Navigation** - Logo, nav links, "Enquire Now" button
2. **Hero Section** - Tiger image, decorative title, stats circles, CTA
3. **Why Travel With Us** - 4 feature cards with pill shapes
4. **India's Premier Tiger Reserves** - 4 park cards with curved image masks
5. **Tailored Safari Experiences** - Experience type cards
6. **What Our Guests Say** - Testimonial cards with quote icons
7. **It's Not Just About Tigers** - Wildlife carousel (Lions, Rhinos, Leopards)
8. **Ready for Your Tiger Safari?** - 3-step process in white rectangle on dark bg
9. **Footer** - Logo, links, copyright

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
