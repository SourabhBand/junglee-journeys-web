import fs from 'fs';
import path from 'path';
import { slugifyHeading } from './headings';

export { slugifyHeading };

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

// ============================================================================
// Section / heading / FAQ parsing (used by detail-page templates)
// ============================================================================

export interface SectionHeading {
  text: string;
  id: string;
}

/**
 * Return every `## ` H2 heading in a markdown body as { text, id }, in order.
 * Used to build the in-page table of contents. Ignores fenced code blocks.
 */
export function getSectionHeadings(body: string): SectionHeading[] {
  const headings: SectionHeading[] = [];
  let inFence = false;
  for (const line of body.split('\n')) {
    if (/^```/.test(line.trim())) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const match = line.match(/^##\s+(?!#)(.+?)\s*$/);
    if (match) {
      const text = match[1].replace(/[*_`]/g, '').trim();
      headings.push({ text, id: slugifyHeading(text) });
    }
  }
  return headings;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSplit {
  /** Body markdown before the FAQ H2 section. */
  before: string;
  /** Parsed FAQ question/answer pairs (empty if no FAQ section found). */
  faqItems: FaqItem[];
  /** Body markdown after the FAQ H2 section (e.g. the closing CTA section). */
  after: string;
  /** The FAQ section's H2 heading text, for the heading rendered above the accordion. */
  heading: string | null;
}

/**
 * Split a markdown body around its FAQ section so the FAQ can render as an
 * accordion (and emit FAQPage JSON-LD) in its original position.
 *
 * The FAQ section is the first `## ` whose text matches /FAQ/i. Within it,
 * each `### ` line is a question and the markdown that follows (until the next
 * `###` or `##`) is the answer. The section ends at the next `## `, so any
 * trailing sections (e.g. "Ready for Your Safari?") are returned in `after`.
 */
export function extractFaqSection(body: string): FaqSplit {
  const lines = body.split('\n');

  // Locate the FAQ H2 and the next H2 after it.
  let faqStart = -1;
  let faqEnd = lines.length;
  let inFence = false;
  for (let i = 0; i < lines.length; i++) {
    if (/^```/.test(lines[i].trim())) inFence = !inFence;
    if (inFence) continue;
    const h2 = lines[i].match(/^##\s+(?!#)(.+?)\s*$/);
    if (!h2) continue;
    if (faqStart === -1) {
      if (/faq/i.test(h2[1])) faqStart = i;
    } else {
      faqEnd = i;
      break;
    }
  }

  if (faqStart === -1) {
    return { before: body, faqItems: [], after: '', heading: null };
  }

  const heading = lines[faqStart].replace(/^##\s+/, '').replace(/[*_`]/g, '').trim();
  const before = lines.slice(0, faqStart).join('\n').trim();
  const after = lines.slice(faqEnd).join('\n').trim();

  // Parse ### question + following answer lines within the FAQ block.
  const faqItems: FaqItem[] = [];
  let current: FaqItem | null = null;
  for (let i = faqStart + 1; i < faqEnd; i++) {
    const q = lines[i].match(/^###\s+(.+?)\s*$/);
    if (q) {
      if (current) faqItems.push({ ...current, answer: current.answer.trim() });
      current = { question: q[1].replace(/[*_`]/g, '').trim(), answer: '' };
    } else if (current) {
      current.answer += lines[i] + '\n';
    }
  }
  if (current) faqItems.push({ ...current, answer: current.answer.trim() });

  return { before, faqItems, after, heading };
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
  region: 'Central India' | 'North and West India' | 'Northeast India';
  size?: string;
  knownFor: string;
  bestSeason: string;
  nearestAirport: string;
  nearestTrainStation: string;
  hasDetailPage: boolean;
  // Legacy fields preserved for components that still reference them:
  tagline?: string;
  tigerRating?: string;
  airportDistance?: string;
  bestFor?: string;
  heroImage?: string;
  priceFrom?: number;
}

export const DESTINATIONS: DestinationSummary[] = [
  // ── Central India ───────────────────────────────────────────────────────
  {
    slug: 'kanha',
    name: 'Kanha',
    fullName: 'Kanha Tiger Reserve',
    region: 'Central India',
    size: '2074 sq.km.',
    knownFor: 'Bengal Tiger',
    bestSeason: 'March to May',
    nearestAirport: 'Jabalpur, Nagpur',
    nearestTrainStation: 'Gondia, Nagpur, Jabalpur',
    hasDetailPage: true,
    tagline: 'The Land of Mowgli',
    tigerRating: '5/5',
    airportDistance: '160 km',
    bestFor: 'First-timers, meadow light',
    heroImage: '/images/kanha-national-park.jpg',
  },
  {
    slug: 'tadoba',
    name: 'Tadoba',
    fullName: 'Tadoba Andhari Tiger Reserve',
    region: 'Central India',
    size: '1727 sq.km.',
    knownFor: 'Bengal Tiger, Leopard',
    bestSeason: 'November to May',
    nearestAirport: 'Nagpur',
    nearestTrainStation: 'Chandrapur',
    hasDetailPage: true,
    tagline: "Maharashtra's Tiger Paradise",
    tigerRating: '5/5',
    airportDistance: '150 km',
    bestFor: 'Weekend escapes, bold encounters',
    heroImage: '/images/tadoba-tiger-reserve.jpg',
  },
  {
    slug: 'bandhavgarh',
    name: 'Bandhavgarh',
    fullName: 'Bandhavgarh Tiger Reserve',
    region: 'Central India',
    size: '1536 sq.km.',
    knownFor: 'Bengal Tiger',
    bestSeason: 'Mid February to Mid June',
    nearestAirport: 'Jabalpur',
    nearestTrainStation: 'Umaria',
    hasDetailPage: true,
    tagline: 'Highest Tiger Density in India',
    tigerRating: '5/5',
    airportDistance: '200 km',
    bestFor: 'Best sighting odds, photography',
    heroImage: '/images/bandhavgarh-national-park.jpg',
  },
  {
    slug: 'pench',
    name: 'Pench',
    fullName: 'Pench Tiger Reserve',
    region: 'Central India',
    size: '1179 sq.km.',
    knownFor: 'Bengal Tiger',
    bestSeason: 'February to May',
    nearestAirport: 'Nagpur',
    nearestTrainStation: 'Nagpur',
    hasDetailPage: true,
    tagline: 'The Original Jungle Book',
    tigerRating: '4/5',
    airportDistance: '100 km',
    bestFor: 'Families, leopards, wild dogs',
  },
  {
    slug: 'nagzira',
    name: 'Nagzira',
    fullName: 'Nagzira Tiger Reserve',
    region: 'Central India',
    size: '653 sq.km.',
    knownFor: 'Bengal Tiger, Birding',
    bestSeason: 'November to May',
    nearestAirport: 'Nagpur',
    nearestTrainStation: 'Gondia, Nagpur',
    hasDetailPage: false,
  },
  {
    slug: 'umred-pauni-karhandla',
    name: 'Umred-Pauni-Karhandla',
    fullName: 'Umred-Pauni-Karhandla Wildlife Sanctuary',
    region: 'Central India',
    size: '189 sq.km.',
    knownFor: 'Bengal Tiger, Birding',
    bestSeason: 'November to May',
    nearestAirport: 'Nagpur',
    nearestTrainStation: 'Nagpur',
    hasDetailPage: false,
  },
  {
    slug: 'satpura',
    name: 'Satpura',
    fullName: 'Satpura National Park',
    region: 'Central India',
    size: '2133 sq.km.',
    knownFor: 'Sloth Bear, Leopard, Indian Giant Squirrel, Birding',
    bestSeason: 'November to March',
    nearestAirport: 'Bhopal',
    nearestTrainStation: 'Sohagpur, Itarsi',
    hasDetailPage: true,
    tagline: 'Walking and Boat Safaris',
    tigerRating: '3/5',
    airportDistance: '150 km',
    bestFor: 'Off-beaten, walking format',
  },
  {
    slug: 'panna',
    name: 'Panna',
    fullName: 'Panna Tiger Reserve',
    region: 'Central India',
    size: '1598 sq.km.',
    knownFor: 'Bengal Tiger',
    bestSeason: 'March to May',
    nearestAirport: 'Khajuraho, Gwalior, Jabalpur',
    nearestTrainStation: 'Khajuraho, Satna',
    hasDetailPage: true,
    tagline: 'The Tiger Comeback Story',
    tigerRating: '4/5',
    airportDistance: '25 km',
    bestFor: 'Conservation story, Khajuraho pairing',
  },
  // ── North and West India ────────────────────────────────────────────────
  {
    slug: 'ranthambore',
    name: 'Ranthambore',
    fullName: 'Ranthambore Tiger Reserve',
    region: 'North and West India',
    size: '1334 sq.km.',
    knownFor: 'Bengal Tiger, Indian Striped Hyena',
    bestSeason: 'February to Mid June',
    nearestAirport: 'Jaipur, Delhi',
    nearestTrainStation: 'Sawai Madhopur',
    hasDetailPage: true,
    tagline: 'Tigers Among Ancient Ruins',
    tigerRating: '5/5',
    airportDistance: '180 km',
    bestFor: 'Iconic, fort backdrop',
    heroImage: '/images/ranthambore-national-park.jpg',
  },
  {
    slug: 'corbett',
    name: 'Corbett',
    fullName: 'Jim Corbett National Park',
    region: 'North and West India',
    size: '1318 sq.km.',
    knownFor: 'Bengal Tiger, Asian Elephant, Birding',
    bestSeason: 'November to May',
    nearestAirport: 'Pantnagar (Nainital)',
    nearestTrainStation: 'Ramnagar',
    hasDetailPage: true,
    tagline: "India's First National Park",
    tigerRating: '4/5',
    airportDistance: '80 km',
    bestFor: 'Elephants, history',
  },
  {
    slug: 'chopta-pangot-sattal',
    name: 'Chopta-Pangot-Sattal',
    fullName: 'Chopta-Pangot-Sattal',
    region: 'North and West India',
    knownFor: 'Himalayan Bird Life',
    bestSeason: 'November to January, March to May',
    nearestAirport: 'Pantnagar (Nainital)',
    nearestTrainStation: 'Khatgodam, Ramnagar',
    hasDetailPage: false,
  },
  {
    slug: 'gir',
    name: 'Gir',
    fullName: 'Gir National Park',
    region: 'North and West India',
    size: '1412 sq.km.',
    knownFor: 'Asiatic Lion, Leopard',
    bestSeason: 'November to January',
    nearestAirport: 'Diu, Rajkot',
    nearestTrainStation: 'Veraval, Junagadh, Somnath',
    hasDetailPage: true,
    tagline: 'Home of the Asiatic Lion',
    tigerRating: 'N/A (lions 5/5)',
    airportDistance: '160 km',
    bestFor: 'Only Asiatic lions on Earth',
  },
  {
    slug: 'desert-national-park',
    name: 'Desert National Park',
    fullName: 'Desert National Park',
    region: 'North and West India',
    size: '3162 sq.km.',
    knownFor: 'Great Indian Bustard, Desert Fox, Indian Fox',
    bestSeason: 'August to September, November to February',
    nearestAirport: 'Jaisalmer, Jodhpur',
    nearestTrainStation: 'Jaisalmer',
    hasDetailPage: false,
  },
  {
    slug: 'singalila',
    name: 'Singalila',
    fullName: 'Singalila',
    region: 'North and West India',
    size: '78 sq.km.',
    knownFor: 'Red Panda, Himalayan Bird Life',
    bestSeason: 'March to May, September to November',
    nearestAirport: 'Bagdogra',
    nearestTrainStation: 'New Jalpaiguri',
    hasDetailPage: false,
  },
  {
    slug: 'spiti-valley',
    name: 'Spiti Valley',
    fullName: 'Spiti Valley',
    region: 'North and West India',
    knownFor: 'Snow Leopard',
    bestSeason: 'Mid January to Mid March',
    nearestAirport: 'Chandigarh',
    nearestTrainStation: 'Chandigarh',
    hasDetailPage: false,
  },
  // ── Northeast India ─────────────────────────────────────────────────────
  {
    slug: 'kaziranga',
    name: 'Kaziranga',
    fullName: 'Kaziranga National Park',
    region: 'Northeast India',
    size: '1090 sq.km.',
    knownFor: 'Indian One Horned Rhino, Asian Elephant, Birding',
    bestSeason: 'November to February',
    nearestAirport: 'Jorhat, Guwahati',
    nearestTrainStation: 'Furkating, Jorhat, Guwahati',
    hasDetailPage: true,
    tagline: 'Kingdom of the One-Horned Rhino',
    tigerRating: '2/5 (rhinos 5/5)',
    airportDistance: '100 km',
    bestFor: 'Rhinos, elephants, birding',
  },
  {
    slug: 'pobitora',
    name: 'Pobitora',
    fullName: 'Pobitora Wildlife Sanctuary',
    region: 'Northeast India',
    size: '38 sq.km.',
    knownFor: 'Indian One Horned Rhino',
    bestSeason: 'November to February',
    nearestAirport: 'Guwahati',
    nearestTrainStation: 'Guwahati',
    hasDetailPage: false,
  },
  {
    slug: 'manas',
    name: 'Manas',
    fullName: 'Manas National Park',
    region: 'Northeast India',
    size: '2837 sq.km.',
    knownFor: 'Indian One Horned Rhino, Asian Elephant, Birding',
    bestSeason: 'November to February',
    nearestAirport: 'Guwahati',
    nearestTrainStation: 'Barpeta, Guwahati',
    hasDetailPage: true,
    tagline: 'UNESCO World Heritage',
    tigerRating: '2/5',
    airportDistance: '140 km',
    bestFor: 'Birding, truly remote',
  },
];

export interface SafariSummary {
  slug: string;
  name: string;
  duration: string;
  bestTime: string;
  destinations: string;
  hasDetailPage: boolean;
  // Legacy fields preserved for components that still reference them:
  parks?: string;
  bestFor?: string;
  description?: string;
  priceFrom?: number;
}

export const SAFARIS: SafariSummary[] = [
  {
    slug: 'central-indian-tiger-tour',
    name: 'Central Indian Tiger Tour',
    duration: '12N/13D',
    bestTime: 'February to May',
    destinations: 'Bandhavgarh, Kanha, Pench, Tadoba',
    hasDetailPage: false,
  },
  {
    slug: 'central-india-wildlife-tour',
    name: 'Central India Wildlife Tour',
    duration: '14N/15D',
    bestTime: 'November to February',
    destinations: 'Satpura, Kanha, Pench, Tadoba',
    hasDetailPage: false,
  },
  {
    slug: 'north-indian-wildlife-birding-tour',
    name: 'North Indian Wildlife and Birding Tour',
    duration: '9N/10D',
    bestTime: 'November to February',
    destinations: 'Corbett, Pangot, Sattal',
    hasDetailPage: false,
  },
  {
    slug: 'himalayan-birding-trail',
    name: 'Himalayan Birding Trail',
    duration: '12N/13D',
    bestTime: 'November, February and March',
    destinations: 'Chopta, Manila, Pangot, Sattal',
    hasDetailPage: false,
  },
  {
    slug: 'northeast-rhino-birding-tour',
    name: 'Northeast India Rhino and Birding Tour',
    duration: '6N/7D',
    bestTime: 'November to March',
    destinations: 'Kaziranga, Pobitora, Manas',
    hasDetailPage: false,
  },
  {
    slug: 'northeast-primate-trail',
    name: 'Northeast India Primate Trail',
    duration: '12N/13D',
    bestTime: 'November to March',
    destinations: 'Hollongapar, Kaziranga, Kakaijana',
    hasDetailPage: false,
  },
  {
    slug: 'west-india-wildlife-tour',
    name: 'West India Wildlife Tour',
    duration: '10N/11D',
    bestTime: 'November, February to April',
    destinations: 'Gir, Rann of Kutchh, Desert National Park',
    hasDetailPage: false,
  },
  {
    slug: 'gangotri-birding-road-trip',
    name: 'Gangotri Birding Road Trip',
    duration: '7N/8D',
    bestTime: 'October, November, February and March',
    destinations: 'Rishikesh, Uttarkashi, Gangotri, Mussoorie',
    hasDetailPage: false,
  },
  {
    slug: 'great-himalayan-road-trip',
    name: 'Great Himalayan Road Trip',
    duration: '7N/8D',
    bestTime: 'May to October',
    destinations: 'Shimla, Reckong Peo, Tabo, Kaza, Manali',
    hasDetailPage: false,
  },
  {
    slug: 'snow-leopard-expedition',
    name: 'Snow Leopard Expedition',
    duration: '6N/7D',
    bestTime: 'November to March',
    destinations: 'Spiti',
    hasDetailPage: false,
  },
];
