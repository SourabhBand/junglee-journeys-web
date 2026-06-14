import type { SectionHeading } from '@/lib/content';

interface PageTOCProps {
  headings: SectionHeading[];
}

/**
 * In-page "On this page" jump-link nav for long detail pages.
 * Server-rendered, zero JS: crawlable internal anchors + sticky on desktop.
 * Anchor ids are produced by slugifyHeading and match MarkdownContent's H2 ids.
 */
export function PageTOC({ headings }: PageTOCProps) {
  if (headings.length < 3) return null;

  return (
    <nav
      aria-label="On this page"
      className="bg-[#ede4d1] rounded-[9px] p-6 md:p-7 lg:sticky lg:top-24"
    >
      <div className="font-display text-[10px] uppercase tracking-[0.25em] text-[#081d01]/45 mb-4">
        On This Page
      </div>
      <hr className="gold-rule mb-4" />
      <ul className="space-y-2.5">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className="font-serif text-[14px] md:text-[15px] text-[#081d01]/80 hover:text-[#c8841a] leading-snug transition-colors"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
