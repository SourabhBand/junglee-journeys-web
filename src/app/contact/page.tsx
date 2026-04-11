import type { Metadata } from "next";
import { Header, Footer, MarkdownContent } from "@/components";
import { getContactContent } from "@/lib/content";

const content = getContactContent();

export const metadata: Metadata = {
  title: content.metadata.metaTitle ?? "Contact Us | Junglee Journeys | Tiger Safari India",
  description:
    content.metadata.metaDescription ??
    "Get in touch with Junglee Journeys. Call, WhatsApp or email our wildlife travel experts. We respond within 24 hours. Plan your tiger safari today.",
  alternates: { canonical: "https://jungleejourneys.com/contact/" },
  openGraph: {
    title: content.metadata.metaTitle,
    description: content.metadata.metaDescription,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="font-body bg-white text-[#081d01] min-h-screen">
      <Header />
      <MarkdownContent>{content.body}</MarkdownContent>
      <Footer />
    </main>
  );
}
