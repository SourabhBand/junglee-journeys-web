/**
 * Pure heading helpers with no Node dependencies, so they are safe to import
 * from both server and client components (unlike content.ts, which uses `fs`).
 */

/**
 * Turn an H2 heading's text into a stable anchor id.
 * Strips markdown emphasis/links, lowercases, hyphenates.
 * "Best Time to Visit Kanha" -> "best-time-to-visit-kanha"
 */
export function slugifyHeading(text: string): string {
  return text
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1') // [label](url) -> label
    .replace(/[*_`]/g, '') // drop markdown emphasis/code marks
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
