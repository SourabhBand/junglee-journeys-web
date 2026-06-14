import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header, Footer, MarkdownContent, CurrencyConverter, Breadcrumbs, RelatedParks, PageTOC, FAQAccordion, FaqJsonLd } from "@/components";
import { getDestinationContent, getAllDestinationSlugs, DESTINATIONS, getSectionHeadings, extractFaqSection, slugifyHeading } from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllDestinationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getDestinationContent(slug);
  if (!content) return {};

  return {
    title: content.metadata.metaTitle,
    description: content.metadata.metaDescription,
    alternates: { canonical: `https://jungleejourneys.com/destination/${slug}/` },
    openGraph: {
      title: content.metadata.metaTitle,
      description: content.metadata.metaDescription,
      type: "website",
    },
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const content = getDestinationContent(slug);

  if (!content) {
    notFound();
  }

  const dest = DESTINATIONS.find(d => d.slug === slug);

  const headings = getSectionHeadings(content.body);
  const { before, faqItems, after, heading: faqHeading } = extractFaqSection(content.body);

  const schemaData = dest ? {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": dest.fullName,
    "description": content.metadata.metaDescription,
    "url": `https://jungleejourneys.com/destination/${slug}/`,
    "touristType": "Wildlife Safari",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": dest.region,
      "addressCountry": "IN"
    },
    "isAccessibleForFree": false,
  } : null;

  return (
    <main className="font-body bg-white text-[#081d01] min-h-screen">
      <Header />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Destinations", href: "/destinations/" },
          { name: dest?.fullName ?? content.metadata.h1 ?? "Destination", href: `/destination/${slug}/` },
        ]}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
          <aside className="mb-10 lg:mb-0">
            <PageTOC headings={headings} />
          </aside>
          <div className="min-w-0">
            <MarkdownContent bare>{before}</MarkdownContent>
            {faqItems.length > 0 && (
              <section className="mt-12">
                <h2
                  id={faqHeading ? slugifyHeading(faqHeading) : "faqs"}
                  className="section-heading text-2xl md:text-3xl mb-6 leading-tight scroll-mt-28"
                >
                  {faqHeading ?? "FAQs"}
                </h2>
                <FAQAccordion items={faqItems} />
              </section>
            )}
            {after && (
              <div className="mt-12">
                <MarkdownContent bare>{after}</MarkdownContent>
              </div>
            )}
          </div>
        </div>
      </div>
      <CurrencyConverter defaultAmount={dest?.priceFrom} />
      <RelatedParks currentSlug={slug} />
      <Footer />
      {schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}
      <FaqJsonLd items={faqItems} />
    </main>
  );
}
