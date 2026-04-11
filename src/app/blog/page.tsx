import type { Metadata } from "next";
import { Header, Footer, MarkdownContent } from "@/components";
import { getBlogIndexContent } from "@/lib/content";

const content = getBlogIndexContent();

export const metadata: Metadata = {
  title: content.metadata.metaTitle ?? "Safari Blog | Tiger and Wildlife Guides | Junglee Journeys",
  description:
    content.metadata.metaDescription ??
    "Expert guides on Indian tiger safaris. Best times, destinations, photography tips, packing lists and conservation stories. Plan smarter, safari better.",
  alternates: { canonical: "https://jungleejourneys.com/blog/" },
  openGraph: {
    title: content.metadata.metaTitle,
    description: content.metadata.metaDescription,
    type: "website",
  },
};

export default function BlogIndexPage() {
  return (
    <main className="font-body bg-white text-[#081d01] min-h-screen">
      <Header />
      <MarkdownContent>{content.body}</MarkdownContent>
      <Footer />
    </main>
  );
}
