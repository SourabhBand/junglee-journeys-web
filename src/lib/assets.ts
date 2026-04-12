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
  // Hero Section (Figma: 1446x1072)
  heroTiger: '/images/hero-tiger-new.jpg',

  // Tiger Reserves (Figma dimensions)
  kanhaNationalPark: '/images/kanha-national-park.jpg', // 552x399
  tadobaTigerReserve: '/images/tadoba-tiger-reserve.jpg', // 904x399
  ranthamboreNationalPark: '/images/ranthambore-national-park.jpg', // 599x400
  bandhavgarhNationalPark: '/images/bandhavgarh-national-park.jpg', // 605x404

  // Other Wildlife (Figma: 692x461)
  asiaticLion: '/images/asiatic-lion.jpg',
  oneHornedRhino: '/images/one-horned-rhino.jpg',
  indianLeopard: '/images/indian-leopard.jpg',

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
