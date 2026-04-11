import fs from 'fs';
import path from 'path';

export interface PageMetadata {
  url?: string;
  focusKeyword?: string;
  metaTitle?: string;
  metaDescription?: string;
  h1?: string;
  searchIntent?: string;
  contentType?: string;
}

export interface PageContent {
  metadata: PageMetadata;
  body: string;
  slug: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'content');

/**
 * Split a markdown table row on unescaped pipes. Treats `\|` as a literal pipe.
 * Returns the cells, stripped of leading/trailing whitespace and surrounding empty cells.
 */
function splitTableRow(line: string): string[] {
  const cells: string[] = [];
  let current = '';
  let i = 0;
  while (i < line.length) {
    if (line[i] === '\\' && line[i + 1] === '|') {
      current += '|';
      i += 2;
    } else if (line[i] === '|') {
      cells.push(current.trim());
      current = '';
      i++;
    } else {
      current += line[i];
      i++;
    }
  }
  if (current.trim()) cells.push(current.trim());
  // Drop empty cells at the start and end (the leading/trailing pipes produce empty cells)
  while (cells.length && cells[0] === '') cells.shift();
  while (cells.length && cells[cells.length - 1] === '') cells.pop();
  return cells;
}

/**
 * Parse the metadata table at the top of a markdown file.
 * Pattern: | **Field** | value |   (with optional `| **Field** (50 char) | value |` for char counts)
 * Handles escaped pipes (`\|`) inside cell values so titles like
 * "Kanha Safari | The Land of Mowgli | Junglee Journeys" survive.
 */
function parseMetadataTable(markdown: string): PageMetadata {
  const metadata: PageMetadata = {};

  const lines = markdown.split('\n');
  let inTable = false;

  for (const line of lines) {
    if (line.match(/^\|\s*Field\s*\|\s*Value\s*\|/i)) {
      inTable = true;
      continue;
    }
    if (inTable) {
      if (line.match(/^\|\s*-+\s*\|/)) continue; // separator row
      if (!line.startsWith('|')) break; // table ended

      const cells = splitTableRow(line);
      if (cells.length < 2) continue;

      // Strip the **bold** wrapper and any parenthetical "(60 char)" suffix from the field name
      const fieldRaw = cells[0]
        .replace(/\*\*/g, '')
        .replace(/\s*\([^)]*\)\s*/g, '')
        .trim()
        .toLowerCase();
      const value = cells.slice(1).join(' | ').trim();

      switch (fieldRaw) {
        case 'url':
          metadata.url = value.replace(/^`|`$/g, '');
          break;
        case 'focus keyword':
          metadata.focusKeyword = value;
          break;
        case 'meta title':
          metadata.metaTitle = value;
          break;
        case 'meta description':
          metadata.metaDescription = value;
          break;
        case 'h1':
          metadata.h1 = value;
          break;
        case 'search intent':
          metadata.searchIntent = value;
          break;
        case 'content type':
          metadata.contentType = value;
          break;
      }
    }
  }

  return metadata;
}

/**
 * Strip editorial section labels from rendered body content.
 * "## Hero" is used in the markdown source as a section divider for the
 * editor's benefit, but it should not render as a visible H2 on the page.
 */
function stripEditorialLabels(markdown: string): string {
  return markdown
    .split('\n')
    .filter((line) => !/^##\s+Hero\s*$/i.test(line))
    .join('\n');
}

/**
 * Strip the top "# Page: ..." heading and metadata table.
 * Returns everything after the first horizontal rule.
 */
function stripFrontMatter(markdown: string): string {
  const lines = markdown.split('\n');
  let firstHrIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      firstHrIndex = i;
      break;
    }
  }
  if (firstHrIndex === -1) return markdown;
  return lines.slice(firstHrIndex + 1).join('\n').trim();
}

/**
 * Strip the trailing "## SEO Check" section and any horizontal rule before it.
 */
function stripSeoCheck(markdown: string): string {
  const seoIdx = markdown.indexOf('## SEO Check');
  if (seoIdx === -1) return markdown;
  // Trim back to remove any --- and trailing whitespace before ## SEO Check
  let cutoff = seoIdx;
  while (cutoff > 0 && /\s|-/.test(markdown[cutoff - 1])) cutoff--;
  return markdown.slice(0, cutoff).trim();
}

/**
 * Read a markdown file (relative to /content) and return parsed content.
 */
function readPageFile(relPath: string): PageContent {
  const filePath = path.join(CONTENT_DIR, relPath);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const metadata = parseMetadataTable(raw);
  let body = stripFrontMatter(raw);
  body = stripSeoCheck(body);
  body = stripEditorialLabels(body);
  return {
    metadata,
    body,
    slug: path.basename(relPath, '.md'),
  };
}

// ============================================================================
// Top-level page accessors
// ============================================================================

export function getHomepageContent(): PageContent {
  return readPageFile('01-homepage.md');
}

export function getAboutContent(): PageContent {
  return readPageFile('02-about.md');
}

export function getDestinationsHubContent(): PageContent {
  return readPageFile('03-destinations-hub.md');
}

export function getSafarisHubContent(): PageContent {
  return readPageFile('04-safaris-hub.md');
}

export function getContactContent(): PageContent {
  return readPageFile('05-contact.md');
}

export function getEnquireContent(): PageContent {
  return readPageFile('06-enquire.md');
}

export function getBlogIndexContent(): PageContent {
  return readPageFile('07-blog-index.md');
}

// ============================================================================
// Destination detail pages
// ============================================================================

const DESTINATION_FILE_MAP: Record<string, string> = {
  kanha: '01-kanha.md',
  tadoba: '02-tadoba.md',
  bandhavgarh: '03-bandhavgarh.md',
  ranthambore: '04-ranthambore.md',
  pench: '05-pench.md',
  satpura: '06-satpura.md',
  corbett: '07-corbett.md',
  kaziranga: '08-kaziranga.md',
  manas: '09-manas.md',
  panna: '10-panna.md',
  gir: '11-gir.md',
};

export function getDestinationContent(slug: string): PageContent | null {
  const filename = DESTINATION_FILE_MAP[slug];
  if (!filename) return null;
  return readPageFile(`destinations/${filename}`);
}

export function getAllDestinationSlugs(): string[] {
  return Object.keys(DESTINATION_FILE_MAP);
}

// ============================================================================
// Safari package detail pages
// ============================================================================

const SAFARI_FILE_MAP: Record<string, string> = {
  'central-india-tiger-trail': '01-central-india-tiger-trail.md',
  'photography-special': '02-photography-special.md',
  'ranthambore-weekend': '03-ranthambore-weekend.md',
};

export function getSafariContent(slug: string): PageContent | null {
  const filename = SAFARI_FILE_MAP[slug];
  if (!filename) return null;
  return readPageFile(`safaris/${filename}`);
}

export function getAllSafariSlugs(): string[] {
  return Object.keys(SAFARI_FILE_MAP);
}

// ============================================================================
// Destination + Safari summary data (for hub pages and homepage)
// ============================================================================

export interface DestinationSummary {
  slug: string;
  name: string;
  fullName: string;
  tagline: string;
  region: 'Central India' | 'North India' | 'Northeast India' | 'West India';
  tigerRating: string;
  bestSeason: string;
  nearestAirport: string;
  airportDistance: string;
  bestFor: string;
  heroImage?: string;
}

export const DESTINATIONS: DestinationSummary[] = [
  {
    slug: 'kanha',
    name: 'Kanha',
    fullName: 'Kanha National Park',
    tagline: 'The Land of Mowgli',
    region: 'Central India',
    tigerRating: '5/5',
    bestSeason: 'Oct to Jun',
    nearestAirport: 'Jabalpur',
    airportDistance: '160 km',
    bestFor: 'First-timers, meadow light',
    heroImage: '/images/kanha-national-park.jpg',
  },
  {
    slug: 'tadoba',
    name: 'Tadoba',
    fullName: 'Tadoba Andhari Tiger Reserve',
    tagline: "Maharashtra's Tiger Paradise",
    region: 'Central India',
    tigerRating: '5/5',
    bestSeason: 'Oct to Jun',
    nearestAirport: 'Nagpur',
    airportDistance: '150 km',
    bestFor: 'Weekend escapes, bold encounters',
    heroImage: '/images/tadoba-tiger-reserve.jpg',
  },
  {
    slug: 'bandhavgarh',
    name: 'Bandhavgarh',
    fullName: 'Bandhavgarh National Park',
    tagline: 'Highest Tiger Density in India',
    region: 'Central India',
    tigerRating: '5/5',
    bestSeason: 'Oct to Jun',
    nearestAirport: 'Jabalpur',
    airportDistance: '200 km',
    bestFor: 'Best sighting odds, photography',
    heroImage: '/images/bandhavgarh-national-park.jpg',
  },
  {
    slug: 'ranthambore',
    name: 'Ranthambore',
    fullName: 'Ranthambore National Park',
    tagline: 'Tigers Among Ancient Ruins',
    region: 'North India',
    tigerRating: '5/5',
    bestSeason: 'Oct to Jun',
    nearestAirport: 'Jaipur',
    airportDistance: '180 km',
    bestFor: 'Iconic, fort backdrop',
    heroImage: '/images/ranthambore-national-park.jpg',
  },
  {
    slug: 'pench',
    name: 'Pench',
    fullName: 'Pench National Park',
    tagline: 'The Original Jungle Book',
    region: 'Central India',
    tigerRating: '4/5',
    bestSeason: 'Oct to Jun',
    nearestAirport: 'Nagpur',
    airportDistance: '100 km',
    bestFor: 'Families, leopards, wild dogs',
  },
  {
    slug: 'satpura',
    name: 'Satpura',
    fullName: 'Satpura National Park',
    tagline: 'Walking and Boat Safaris',
    region: 'Central India',
    tigerRating: '3/5',
    bestSeason: 'Oct to Apr',
    nearestAirport: 'Bhopal',
    airportDistance: '150 km',
    bestFor: 'Off-beaten, walking format',
  },
  {
    slug: 'corbett',
    name: 'Corbett',
    fullName: 'Jim Corbett National Park',
    tagline: "India's First National Park",
    region: 'North India',
    tigerRating: '4/5',
    bestSeason: 'Nov to Jun',
    nearestAirport: 'Pantnagar',
    airportDistance: '80 km',
    bestFor: 'Elephants, history',
  },
  {
    slug: 'kaziranga',
    name: 'Kaziranga',
    fullName: 'Kaziranga National Park',
    tagline: 'Kingdom of the One-Horned Rhino',
    region: 'Northeast India',
    tigerRating: '2/5 (rhinos 5/5)',
    bestSeason: 'Nov to Apr',
    nearestAirport: 'Jorhat',
    airportDistance: '100 km',
    bestFor: 'Rhinos, elephants, birding',
  },
  {
    slug: 'manas',
    name: 'Manas',
    fullName: 'Manas National Park',
    tagline: 'UNESCO World Heritage',
    region: 'Northeast India',
    tigerRating: '2/5',
    bestSeason: 'Nov to Apr',
    nearestAirport: 'Guwahati',
    airportDistance: '140 km',
    bestFor: 'Birding, truly remote',
  },
  {
    slug: 'panna',
    name: 'Panna',
    fullName: 'Panna National Park',
    tagline: 'The Tiger Comeback Story',
    region: 'Central India',
    tigerRating: '4/5',
    bestSeason: 'Oct to Jun',
    nearestAirport: 'Khajuraho',
    airportDistance: '25 km',
    bestFor: 'Conservation story, Khajuraho pairing',
  },
  {
    slug: 'gir',
    name: 'Gir',
    fullName: 'Gir National Park',
    tagline: 'Home of the Asiatic Lion',
    region: 'West India',
    tigerRating: 'N/A (lions 5/5)',
    bestSeason: 'Dec to Jun',
    nearestAirport: 'Rajkot',
    airportDistance: '160 km',
    bestFor: 'Only Asiatic lions on Earth',
  },
];

export interface SafariSummary {
  slug: string;
  name: string;
  duration: string;
  parks: string;
  bestFor: string;
  description: string;
}

export const SAFARIS: SafariSummary[] = [
  {
    slug: 'central-india-tiger-trail',
    name: 'Central India Tiger Trail',
    duration: '7 to 9 nights',
    parks: 'Kanha, Bandhavgarh, Pench',
    bestFor: 'Serious tiger fans, first-timers who want to do it properly',
    description:
      'Our flagship multi-park itinerary. Three tiger reserves in one trip, in the order that makes sense for both the wildlife and the geography.',
  },
  {
    slug: 'photography-special',
    name: 'Photography Special',
    duration: '5 to 7 nights',
    parks: 'Bandhavgarh, Tadoba (or Kanha)',
    bestFor: 'Photographers with real equipment and serious intent',
    description:
      'A safari built around your camera, your hide preferences, and your understanding of light. For photographers who already know what they came for.',
  },
  {
    slug: 'ranthambore-weekend',
    name: 'Ranthambore Weekend',
    duration: '2 to 3 nights',
    parks: 'Ranthambore',
    bestFor: 'Delhi-based weekenders, first-time safari guests with limited time',
    description:
      "The shortest trip we run, and the one that has converted the largest number of 'I have always wanted to do this' guests into 'I have already done this twice.'",
  },
];
