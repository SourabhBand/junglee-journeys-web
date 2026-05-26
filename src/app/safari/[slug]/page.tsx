import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header, Footer, MarkdownContent, CurrencyConverter } from "@/components";
import { getSafariContent, getAllSafariSlugs, SAFARIS } from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSafariSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getSafariContent(slug);
  if (!content) return {};

  return {
    title: content.metadata.metaTitle,
    description: content.metadata.metaDescription,
    alternates: { canonical: `https://jungleejourneys.com/safari/${slug}/` },
    openGraph: {
      title: content.metadata.metaTitle,
      description: content.metadata.metaDescription,
      type: "website",
    },
  };
}

export default async function SafariPage({ params }: PageProps) {
  const { slug } = await params;
  const content = getSafariContent(slug);

  if (!content) {
    notFound();
  }

  const safari = SAFARIS.find(s => s.slug === slug);

  const schemaData = safari ? {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": safari.name,
    "description": content.metadata.metaDescription,
    "url": `https://jungleejourneys.com/safari/${slug}/`,
    "touristType": "Wildlife Safari",
    "itinerary": {
      "@type": "ItemList",
      "description": safari.destinations,
      "numberOfItems": safari.destinations.split(",").length,
    },
    "provider": {
      "@type": "TravelAgency",
      "name": "Junglee Journeys",
      "url": "https://jungleejourneys.com"
    },
  } : null;

  return (
    <main className="font-body bg-white text-[#081d01] min-h-screen">
      <Header />
      <MarkdownContent>{content.body}</MarkdownContent>
      <CurrencyConverter defaultAmount={safari?.priceFrom} />
      <Footer />
      {schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}
    </main>
  );
}
