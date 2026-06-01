import Link from 'next/link';

const SITE_URL = 'https://jungleejourneys.com';

export interface Crumb {
  name: string;
  href: string;
}

/**
 * Breadcrumb trail for detail pages. Renders a visible, crawlable nav of
 * <Link>s (the non-final crumbs link back up the hierarchy — e.g. Home and
 * the hub page) plus a BreadcrumbList JSON-LD block for rich results.
 *
 * The final crumb is the current page: shown as plain text (no link) but
 * still included in the schema with its own URL.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="max-w-7xl mx-auto px-6 pt-6 md:pt-8"
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-serif text-[13px] md:text-[14px] text-[#081d01]/60">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-x-2">
              {isLast ? (
                <span aria-current="page" className="text-[#081d01]/90">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-[#e79e23] transition">
                  {item.name}
                </Link>
              )}
              {!isLast && <span aria-hidden="true">›</span>}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
