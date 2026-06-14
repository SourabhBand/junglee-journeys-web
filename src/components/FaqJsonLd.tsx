import type { FaqItem } from '@/lib/content';

/** Reduce markdown answer text to plain text for the JSON-LD schema. */
function toPlainText(markdown: string): string {
  return markdown
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1') // [label](url) -> label
    .replace(/[*_`>#]/g, '') // emphasis, code, blockquote, heading marks
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Emits FAQPage structured data so the page is eligible for FAQ rich results.
 * Server component — ships in the static HTML. Renders nothing visible.
 */
export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  if (!items || items.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: toPlainText(item.answer),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
