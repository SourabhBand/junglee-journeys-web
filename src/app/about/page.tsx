import type { Metadata } from "next";
import { Header, Footer, MarkdownContent } from "@/components";
import { getAboutContent } from "@/lib/content";

const content = getAboutContent();

export const metadata: Metadata = {
  title: content.metadata.metaTitle ?? "About Us | Expert Wildlife Tours India | Junglee Journeys",
  description:
    content.metadata.metaDescription ??
    "Meet the team behind Junglee Journeys. 15+ years of tiger safari experience, expert naturalists and a passion for India's wildlife. Learn our story.",
  alternates: { canonical: "https://jungleejourneys.com/about/" },
  openGraph: {
    title: content.metadata.metaTitle,
    description: content.metadata.metaDescription,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="font-body bg-white text-[#081d01] min-h-screen">
      <Header />
      <MarkdownContent>{content.body}</MarkdownContent>
      <Footer />
    </main>
  );
}
