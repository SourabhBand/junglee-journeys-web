import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header, Footer, MarkdownContent } from "@/components";
import { getSafariContent, getAllSafariSlugs } from "@/lib/content";

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

  return (
    <main className="font-body bg-white text-[#081d01] min-h-screen">
      <Header />
      <MarkdownContent>{content.body}</MarkdownContent>
      <Footer />
    </main>
  );
}
