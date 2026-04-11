import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer, OrnamentDivider } from "@/components";
import { DESTINATIONS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Best Tiger Reserves India | Safari Destinations | Junglee Journeys",
  description:
    "Explore India's top tiger reserves. Compare Kanha, Tadoba, Ranthambore, Bandhavgarh and more. Tiger sighting rates, best seasons and lodge options.",
  alternates: { canonical: "https://jungleejourneys.com/destinations/" },
  openGraph: {
    title: "Best Tiger Reserves India | Safari Destinations | Junglee Journeys",
    description:
      "Explore India's top tiger reserves. Compare Kanha, Tadoba, Ranthambore, Bandhavgarh and more.",
    type: "website",
  },
};

const REGIONS = [
  "Central India",
  "North India",
  "Northeast India",
  "West India",
] as const;

export default function DestinationsHubPage() {
  return (
    <main className="font-body bg-white text-[#081d01] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-[#081d01] text-[#ede4d1] py-[80px] md:py-[120px]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="section-heading text-[36px] md:text-[56px] mb-6 leading-tight">
            Tiger Reserves in India
          </h1>
          <p className="font-serif italic text-[18px] md:text-[22px] text-[#ede4d1]/80 mb-8">
            Eleven parks. Six regions. One job: pick the right one for you.
          </p>
          <p className="font-serif text-[16px] md:text-[18px] leading-relaxed text-white max-w-3xl mx-auto">
            India officially gazettes more than fifty <strong>tiger reserves</strong>, holding
            roughly 3,000 wild tigers (more than half the world&apos;s total). We work in
            eleven of them. Not because the others are bad, but because these are the ones we
            know properly, the ones with the lodges we trust, and the ones where the guides
            we hire have walked the same trails for fifteen years.
          </p>
        </div>
      </section>

      {/* How to Choose */}
      <section className="py-[80px] md:py-[100px] bg-[#ede4d1]">
        <div className="max-w-4xl mx-auto px-6">
          <OrnamentDivider />
          <h2 className="text-center section-heading text-[28px] md:text-[40px] mb-8 leading-tight">
            How to Choose
          </h2>
          <p className="font-serif text-[16px] leading-relaxed mb-8">
            Most guests pick a park before they understand what they are choosing between.
            That is fine. But here is the short version, in case it helps.
          </p>
          <ul className="font-serif text-[15px] md:text-[16px] leading-relaxed space-y-3">
            <li>
              <strong>Best odds of seeing a tiger:</strong> Bandhavgarh, then Tadoba.
            </li>
            <li>
              <strong>Closest to Delhi:</strong> Ranthambore (5 hours by road) and Corbett
              (6 hours).
            </li>
            <li>
              <strong>Closest to Mumbai or Pune:</strong> Tadoba (fly to Nagpur, drive
              3 hours).
            </li>
            <li>
              <strong>Best for first-timers:</strong> Kanha. The classic Central Indian
              experience and the safest bet for your first trip.
            </li>
            <li>
              <strong>Best for families with young kids:</strong> Pench. Beautiful, relaxed,
              and the lodges are good with children.
            </li>
            <li>
              <strong>Best for photographers:</strong> Bandhavgarh for the density,
              Ranthambore for the fort backdrops, Kanha for the meadow light.
            </li>
            <li>
              <strong>Best for the trip nobody else has done:</strong> Satpura. Walking
              safaris and boat safaris and almost no jeeps.
            </li>
            <li>
              <strong>Lions, not tigers:</strong> Gir. The only place on Earth with wild
              Asiatic lions.
            </li>
            <li>
              <strong>Rhinos and elephants:</strong> Kaziranga.
            </li>
            <li>
              <strong>The truly remote one:</strong> Manas, on the Bhutan border. Birding
              paradise.
            </li>
            <li>
              <strong>The conservation comeback story:</strong> Panna, where the tigers
              were locally extinct fifteen years ago and are now thriving again.
            </li>
          </ul>
        </div>
      </section>

      {/* Regional groupings */}
      {REGIONS.map((region) => {
        const parks = DESTINATIONS.filter((d) => d.region === region);
        if (parks.length === 0) return null;
        return (
          <section key={region} className="py-[60px] md:py-[80px] bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="section-heading text-[28px] md:text-[40px] mb-8 leading-tight">
                {region}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {parks.map((park) => (
                  <Link
                    key={park.slug}
                    href={`/destination/${park.slug}/`}
                    className="block bg-[#ede4d1] rounded-[9px] p-6 hover:scale-[1.02] transition destination-card"
                  >
                    <h3 className="font-display text-[22px] mb-2">{park.fullName}</h3>
                    <p className="font-serif italic text-[14px] text-[#081d01]/70 mb-4">
                      {park.tagline}
                    </p>
                    <div className="space-y-1 font-serif text-[13px] mb-4">
                      <p>
                        <strong>Sighting:</strong> {park.tigerRating}
                      </p>
                      <p>
                        <strong>Best season:</strong> {park.bestSeason}
                      </p>
                      <p>
                        <strong>Nearest airport:</strong> {park.nearestAirport} (
                        {park.airportDistance})
                      </p>
                      <p>
                        <strong>Best for:</strong> {park.bestFor}
                      </p>
                    </div>
                    <span className="font-serif text-[14px] text-[#e79e23] underline">
                      Explore {park.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-[80px] md:py-[100px] bg-[#081d01] text-[#ede4d1]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="section-heading text-[28px] md:text-[40px] mb-6 leading-tight">
            Cannot Decide?
          </h2>
          <p className="font-serif text-[16px] md:text-[18px] leading-relaxed text-white mb-8">
            That is what we are here for. Tell us your dates, the city you are flying from,
            and what you are after. We will pick the park, the dates, the lodge, and the
            guide. You confirm. We send a written quote within 24 hours, no deposit until
            you say yes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/enquire/"
              className="bg-[#e79e23] hover:bg-[#c8841a] transition-all text-white inline-flex items-center justify-center w-[255px] h-[52px] rounded-[9px] text-[16px] font-serif"
            >
              Get Personalised Recommendations
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
