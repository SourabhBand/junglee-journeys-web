/**
 * Assets Map
 * Local paths to all assets (SVGs and images) used in the application
 */

export const SVG_ASSETS = {
  // Hero Title SVGs
  heroTitleJunglee: '/images/hero-title-union.svg',
  heroTitleJourneys: '/images/hero-title-journeys.svg',

  // Decorative Elements
  ornamentDivider: '/images/ornament-divider.svg',
  quoteIcon: '/images/quote-icon.svg',

  // Arrow Components
  arrowCircle: '/images/arrow-circle.svg',
  arrowIcon: '/images/arrow-icon.svg',
} as const;

export const IMAGE_ASSETS = {
  // Hero — JPG outperforms WebP at this dimension/quality
  heroTiger: '/images/hero.jpg',

  // Tiger Reserves
  kanhaNationalPark: '/images/kanha-tiger-safari.webp',
  tadobaTigerReserve: '/images/tadoba-tiger-reserve.webp',
  ranthamboreNationalPark: '/images/ranthambore-tiger-safari.webp',
  bandhavgarhNationalPark: '/images/bandhavgarh-national-park.jpg',
  penchTigerReserve: '/images/pench-tiger-reserve.webp',

  // Other Wildlife
  asiaticLion: '/images/asiatic-lion.webp',
  oneHornedRhino: '/images/one-horned-rhino.webp',
  indianLeopard: '/images/indian-leopard.webp',
  asianElephant: '/images/asian-elephant.jpg',
  hoolockGibbon: '/images/hoolock-gibbon.webp',
  snowLeopard: '/images/snow-leopard.webp',
  redPanda: '/images/red-panda.webp',

  // Logo
  logo: '/logo-jj.png',
  logoSvg: '/images/logo-jj.svg',
} as const;

// Type for asset keys
export type SVGAssetKey = keyof typeof SVG_ASSETS;
export type ImageAssetKey = keyof typeof IMAGE_ASSETS;

// Helper functions to get asset paths
export const getSVGPath = (key: SVGAssetKey): string => SVG_ASSETS[key];
export const getImagePath = (key: ImageAssetKey): string => IMAGE_ASSETS[key];
