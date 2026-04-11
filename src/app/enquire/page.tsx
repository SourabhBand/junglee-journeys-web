import type { Metadata } from "next";
import { Header, Footer, MarkdownContent } from "@/components";
import { getEnquireContent } from "@/lib/content";

const content = getEnquireContent();

export const metadata: Metadata = {
  title: content.metadata.metaTitle ?? "Book Tiger Safari India | Plan Your Journey | Junglee Journeys",
  description:
    content.metadata.metaDescription ??
    "Start planning your tiger safari in India. Share your travel dates and preferences. Receive a personalized itinerary within 24 hours. No obligation.",
  alternates: { canonical: "https://jungleejourneys.com/enquire/" },
  openGraph: {
    title: content.metadata.metaTitle,
    description: content.metadata.metaDescription,
    type: "website",
  },
};

export default function EnquirePage() {
  return (
    <main className="font-body bg-white text-[#081d01] min-h-screen">
      <Header />
      <MarkdownContent>{content.body}</MarkdownContent>
      <Footer />
    </main>
  );
}
