# Junglee Journeys Web - Project Documentation

## Project Overview
Luxury tiger safari landing page for Junglee Journeys, an India-based wildlife safari company.

## Tech Stack
- **Framework:** Next.js 16.1.1 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:**
  - Cinzel (display headings)
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
│   └── app/
│       ├── layout.tsx      # Root layout, fonts, metadata
│       ├── page.tsx        # Main landing page component
│       └── globals.css     # CSS variables, custom styles
├── next.config.ts          # External image domains config
├── vercel.json             # Vercel deployment config
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
1. Header (navigation)
2. Hero (full-screen with CTA)
3. Why Travel With Us (features grid)
4. Tiger Reserves (destination cards)
5. Tailored Experiences (safari types)
6. Testimonials (client reviews)
7. Asiatic Lions (Gujarat promotion)
8. CTA Section
9. Footer

### `next.config.ts`
- Configured to allow external images from `lh3.googleusercontent.com`

## External Dependencies
- Images currently hosted on Google's CDN (`lh3.googleusercontent.com`)
- Consider migrating to permanent hosting (Vercel Blob, Cloudinary, etc.)

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
1. Replace temporary Google CDN images with permanent hosting
2. Add custom domain (e.g., jungleejourneys.com)
3. Add contact form functionality
4. Implement booking/inquiry system
5. Add more pages (About, Destinations, Contact)
6. Set up analytics (Vercel Analytics or Google Analytics)

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
