import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header, Footer, MarkdownContent, CurrencyConverter } from "@/components";
import { getDestinationContent, getAllDestinationSlugs, DESTINATIONS } from "@/lib/content";

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
      <MarkdownContent>{content.body}</MarkdownContent>
      <CurrencyConverter defaultAmount={dest?.priceFrom} />
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
