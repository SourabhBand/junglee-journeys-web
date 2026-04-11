import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, OrnamentDivider } from "@/components";
import { SAFARIS } from "@/lib/content";

export const metadata: Metadata = {
  title: "India Safari Tours | Wildlife Packages | Junglee Journeys",
  description:
    "Browse tiger safari packages in India. Weekend escapes, photography tours and luxury multi-park adventures. Expertly curated itineraries. Enquire today.",
  alternates: { canonical: "https://jungleejourneys.com/safaris/" },
  openGraph: {
    title: "India Safari Tours | Wildlife Packages | Junglee Journeys",
    description:
      "Browse tiger safari packages in India. Weekend escapes, photography tours and luxury multi-park adventures.",
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
            Three flagships, a workshop of custom builds, and a quote in your inbox within
            24 hours.
          </p>
          <p className="font-serif text-[16px] md:text-[18px] leading-relaxed text-white max-w-3xl mx-auto">
            This is the page for our <strong>india safari tours</strong>: three flagship
            packages with dedicated pages of their own, plus the option to commission
            something built from scratch around your dates. Every itinerary is custom by
            default. The starting points below are simply the trips we have planned often
            enough to have strong opinions about.
          </p>
        </div>
      </section>

      {/* How This Works */}
      <section className="py-[80px] md:py-[100px] bg-[#ede4d1]">
        <div className="max-w-4xl mx-auto px-6">
          <OrnamentDivider />
          <h2 className="text-center section-heading text-[28px] md:text-[40px] mb-8 leading-tight">
            How This Works
          </h2>
          <p className="font-serif text-[16px] leading-relaxed mb-6">
            We do not run group departures. We do not sell fixed-date trips. The{" "}
            <strong>safari tours india</strong> version we sell is the one we build for you,
            after we have asked roughly fifteen questions about your dates, your city of
            departure, your tolerance for early starts, and whether you are coming for the
            photograph or the experience.
          </p>
          <p className="font-serif text-[16px] leading-relaxed mb-8">Here is the actual sequence.</p>
          <ol className="font-serif text-[15px] md:text-[16px] leading-relaxed space-y-3 list-decimal pl-6">
            <li>
              You tell us your dates, the rough number of nights, the cities you are flying
              in and out of, and what you care about. (If you are not sure what you care
              about, we will ask the questions that help you find out.)
            </li>
            <li>
              We send back a written quote within 24 hours. Itemised. Lodge by lodge, drive
              by drive, no hidden fees.
            </li>
            <li>You ask for changes. We change it. We do this until the trip is right.</li>
            <li>
              You confirm. We lock the permits and the lodge rooms. You pay a 30% deposit.
              Final payment is due 30 days before departure.
            </li>
          </ol>
        </div>
      </section>

      {/* Flagship Packages */}
      <section className="py-[80px] md:py-[100px] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center section-heading text-[28px] md:text-[40px] mb-16 leading-tight">
            Flagship Packages
          </h2>
          <div className="space-y-12">
            {SAFARIS.map((pkg) => (
              <Link
                key={pkg.slug}
                href={`/safari/${pkg.slug}/`}
                className="block bg-[#ede4d1] rounded-[9px] p-8 md:p-12 hover:scale-[1.01] transition"
              >
                <h3 className="font-display text-[26px] md:text-[32px] mb-4 leading-tight">
                  {pkg.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 font-serif text-[14px]">
                  <p>
                    <strong>Duration:</strong> {pkg.duration}
                  </p>
                  <p>
                    <strong>Parks:</strong> {pkg.parks}
                  </p>
                  <p>
                    <strong>Best for:</strong> {pkg.bestFor}
                  </p>
                </div>
                <p className="font-serif text-[16px] leading-relaxed mb-6">
                  {pkg.description}
                </p>
                <span className="font-serif text-[15px] text-[#e79e23] underline">
                  Explore {pkg.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Builds */}
      <section className="py-[80px] md:py-[100px] bg-[#ede4d1]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center section-heading text-[28px] md:text-[40px] mb-8 leading-tight">
            Custom Builds
          </h2>
          <p className="font-serif text-[16px] leading-relaxed mb-12 text-center">
            If none of the three flagships fit, we build you something. The most common
            custom requests are below. Each one starts with the same conversation: what do
            you actually want, and how many nights do you have?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Tadoba Weekend (2 to 3 nights)",
                body:
                  "The Mumbai and Pune weekend escape. Fly to Nagpur on Friday evening, drive 3 hours, two full days of game drives, fly home Sunday or Monday.",
              },
              {
                title: "Multi-Park Luxury (7 to 10 nights)",
                body:
                  "The flagship-plus version. Same Central Indian arc as the Tiger Trail, but in the lodges where you do not pick the room because every room is the right room.",
              },
              {
                title: "Golden Triangle + Ranthambore (8 to 10 days)",
                body:
                  "Delhi, Agra, Jaipur, Ranthambore. The classic India circuit with the wildlife chapter that the standard version skips.",
              },
              {
                title: "Northeast Explorer (6 to 8 nights)",
                body:
                  "Kaziranga and Manas. Rhinos in herds, wild elephants in larger herds, and birds in numbers that make a casual birder reconsider.",
              },
              {
                title: "Family Safari (4 to 5 nights)",
                body:
                  "Pench or Kanha, occasionally both. Lodges that are good with children. Naturalists who know how to make the forest exciting for a six-year-old.",
              },
              {
                title: "Walking and Boat Safari (Satpura)",
                body:
                  "The trip nobody else at your dinner party will have done. Walking safaris in the morning. Boat safaris on the Denwa river. Lower tiger sighting rate, which is the entire point.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-[9px] p-6">
                <h3 className="font-display text-[20px] mb-3 leading-tight">{item.title}</h3>
                <p className="font-serif text-[15px] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/enquire/"
              className="bg-[#e79e23] hover:bg-[#c8841a] transition-all text-white inline-flex items-center justify-center w-[255px] h-[52px] rounded-[9px] text-[16px] font-serif"
            >
              Tell Us What You Want
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-[80px] md:py-[100px] bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center section-heading text-[28px] md:text-[40px] mb-12 leading-tight">
            What Is Included
          </h2>
          <p className="font-serif text-[16px] leading-relaxed mb-8 text-center">
            Every package, custom or flagship, includes the following. This is not an
            asterisk-heavy list.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-[18px] mb-4 text-[#081d01]">Included</h3>
              <ul className="font-serif text-[15px] leading-relaxed space-y-2 list-disc pl-6">
                <li>Your own jeep and naturalist for the duration of the trip</li>
                <li>All safari drives (typically two per day)</li>
                <li>Accommodation at the lodge we have selected</li>
                <li>All meals during the safari portion</li>
                <li>All park fees, permits, and zone allocations</li>
                <li>All ground transfers between airport, station, and lodge</li>
                <li>A pre-trip wildlife briefing</li>
                <li>Our phone number, available for the duration of the trip</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-[18px] mb-4 text-[#081d01]">Not included</h3>
              <ul className="font-serif text-[15px] leading-relaxed space-y-2 list-disc pl-6">
                <li>Flights or trains to and from the destination</li>
                <li>Travel insurance (we strongly recommend it)</li>
                <li>Personal expenses, alcohol, and tips</li>
                <li>Cultural sightseeing add-ons outside the safari portion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[80px] md:py-[100px] bg-[#081d01] text-[#ede4d1]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="section-heading text-[28px] md:text-[40px] mb-6 leading-tight">
            Ready?
          </h2>
          <p className="font-serif text-[16px] md:text-[18px] leading-relaxed text-white mb-8">
            Pick a package above, or tell us what you have in mind. We will write back with a
            quote within 24 hours, and the quote will be itemised so you can see exactly what
            you are paying for.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/enquire/"
              className="bg-[#e79e23] hover:bg-[#c8841a] transition-all text-white inline-flex items-center justify-center w-[200px] h-[52px] rounded-[9px] text-[16px] font-serif"
            >
              Enquire Now
            </Link>
            <Link
              href="/contact/"
              className="border border-[#ede4d1] hover:bg-[#ede4d1] hover:text-[#081d01] transition-all text-[#ede4d1] inline-flex items-center justify-center w-[200px] h-[52px] rounded-[9px] text-[16px] font-serif"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
