import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, OrnamentDivider, CurrencyConverter, AnimateOnScroll } from "@/components";
import { SAFARIS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Safari Tours and Packages | India Wildlife Itineraries | Junglee Journeys",
  description:
    "Ten flagship India safari and wildlife itineraries plus fully custom builds. Tigers, rhinos, snow leopards, birding. Quote in your inbox with no hidden charges.",
  alternates: { canonical: "https://jungleejourneys.com/safaris/" },
  openGraph: {
    title: "Safari Tours and Packages | India Wildlife Itineraries | Junglee Journeys",
    description:
      "Ten flagship India safari and wildlife itineraries plus fully custom builds.",
    type: "website",
  },
};

export default function SafarisHubPage() {
  return (
    <main className="font-body bg-white text-[#081d01] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-[#081d01] text-[#ede4d1] py-[80px] md:py-[120px]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="section-heading text-[36px] md:text-[56px] mb-6 leading-tight">
            Safari Tours and Packages
          </h1>
          <p className="font-serif italic text-[18px] md:text-[22px] text-[#ede4d1]/80 mb-8">
            Flagship itineraries ready to go, a workshop of custom builds, and a quote with no hidden charges in your inbox or on your phone.
          </p>
          <p className="font-serif text-[16px] md:text-[18px] leading-relaxed text-white max-w-3xl mx-auto">
            Explore the various <strong>india safari tours</strong> and wildlife excursions we offer.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-[80px] md:py-[100px] bg-[#ede4d1]">
        <div className="max-w-4xl mx-auto px-6">
          <OrnamentDivider />
          <h2 className="text-center section-heading text-[28px] md:text-[40px] mb-8 leading-tight">
            How It Works
          </h2>
          <p className="font-serif text-[16px] leading-relaxed mb-6">
            We do not run group departures or fixed-date trips. <strong>Safari tours in India</strong> are best experienced through customised itineraries as they encapsulate everything you want from an ideal safari vacation.
          </p>
          <p className="font-serif text-[16px] leading-relaxed mb-8">
            It is a simple, straightforward process:
          </p>
          <ol className="font-serif text-[15px] md:text-[16px] leading-relaxed space-y-3 list-decimal pl-6">
            <li>
              Choose a park, give us your dates, group size, number of rooms and number of safaris along with your target animals or birds.
            </li>
            <li>
              We send you a customised itinerary with multiple accommodation options.
            </li>
            <li>
              We make changes as per your need till we get the itinerary you are happy with.
            </li>
            <li>
              You confirm. 30% advance payment. Balance is due 30 days before departure.
            </li>
          </ol>
          <p className="font-serif text-[16px] leading-relaxed mt-8">
            Do not know what park to choose?{" "}
            <Link href="/enquire/" className="text-[#e79e23] underline">
              Drop us a text
            </Link>{" "}
            and we will help you figure that out too.
          </p>
        </div>
      </section>

      {/* Flagship Packages — box grid */}
      <section className="py-[80px] md:py-[100px] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center section-heading text-[28px] md:text-[40px] mb-12 leading-tight">
            Flagship Packages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {SAFARIS.map((pkg, i) => (
              <AnimateOnScroll key={pkg.slug} animation="fade-up" delay={i * 100}>
              <div
                className="bg-[#ede4d1] rounded-[9px] p-6 md:p-8 h-full"
              >
                <h3 className="font-serif font-semibold text-[22px] md:text-[24px] mb-4 leading-tight">
                  {pkg.name}
                </h3>
                <div className="space-y-1.5 font-serif text-[14px] md:text-[15px] text-[#081d01]/80">
                  <p>
                    <strong>Duration:</strong> {pkg.duration}
                  </p>
                  <p>
                    <strong>Best Time:</strong> {pkg.bestTime}
                  </p>
                  <p>
                    <strong>Destinations:</strong> {pkg.destinations}
                  </p>
                </div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CurrencyConverter />

      {/* CTA */}
      <section className="py-[80px] md:py-[100px] bg-[#081d01] text-[#ede4d1]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="section-heading text-[28px] md:text-[40px] mb-6 leading-tight">
            Ready?
          </h2>
          <p className="font-serif text-[16px] md:text-[18px] leading-relaxed text-white mb-8">
            Pick a package above, or tell us what you have in mind. We will write back with an itemised quote so you can see exactly what you are paying for.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/enquire/"
              className="bg-[#e79e23] hover:bg-[#c8841a] transition-all text-white inline-flex items-center justify-center w-[200px] h-[52px] rounded-[9px] text-[16px] font-serif"
            >
              Enquire Now
            </Link>
            <a
              href="https://wa.me/919370037237"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#ede4d1] hover:bg-[#ede4d1] hover:text-[#081d01] transition-all text-[#ede4d1] inline-flex items-center justify-center w-[200px] h-[52px] rounded-[9px] text-[16px] font-serif"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
