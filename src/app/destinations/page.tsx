import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, OrnamentDivider } from "@/components";
import { DESTINATIONS, type DestinationSummary } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tiger Reserves and National Parks of India | Junglee Journeys",
  description:
    "Explore 18 of India's best tiger reserves, national parks and wildlife sanctuaries. Size, season, access and what each park is best known for.",
  alternates: { canonical: "https://jungleejourneys.com/destinations/" },
  openGraph: {
    title: "Tiger Reserves and National Parks of India | Junglee Journeys",
    description:
      "Explore 18 of India's best tiger reserves, national parks and wildlife sanctuaries.",
    type: "website",
  },
};

const REGIONS = [
  "Central India",
  "North and West India",
  "Northeast India",
] as const;

const CHOOSE_BY = [
  { label: "Best odds of seeing a Tiger", parks: "Tadoba, Bandhavgarh" },
  { label: "Closest to Mumbai or Pune", parks: "Pench, Tadoba" },
  { label: "Closest to Delhi", parks: "Ranthambore, Corbett" },
  { label: "Best for First Timers", parks: "Tadoba, Kanha, Kaziranga" },
  { label: "Best for Families", parks: "Pench, Kaziranga, Corbett, Kanha" },
  { label: "Best for Photographers", parks: "Bandhavgarh, Manas, Pangot, Desert NP" },
  { label: "Best for Lions", parks: "Gir" },
  { label: "Rhinos and Elephants", parks: "Kaziranga, Manas, Pobitora, Dudhwa" },
  { label: "Remote Marvels", parks: "Manas, Namdhapha, Pangot, Desert NP" },
  { label: "Best Conservation Success Story", parks: "Kaziranga, Gir, Desert NP, Pobitora, Panna" },
];

function ParkBox({ park }: { park: DestinationSummary }) {
  const inner = (
    <>
      <h3 className="font-serif font-semibold text-[22px] mb-4 leading-tight">
        {park.fullName}
      </h3>
      <div className="space-y-1.5 font-serif text-[14px] text-[#081d01]/80">
        {park.size && (
          <p>
            <strong>Size:</strong> {park.size}
          </p>
        )}
        <p>
          <strong>Known For:</strong> {park.knownFor}
        </p>
        <p>
          <strong>Best Season:</strong> {park.bestSeason}
        </p>
        <p>
          <strong>Nearest Airport:</strong> {park.nearestAirport}
        </p>
        <p>
          <strong>Nearest Train Station:</strong> {park.nearestTrainStation}
        </p>
      </div>
      {park.hasDetailPage && (
        <span className="font-serif text-[14px] text-[#e79e23] underline inline-block mt-5">
          Explore {park.name}
        </span>
      )}
    </>
  );

  const baseClass =
    "block bg-[#ede4d1] rounded-[9px] p-6 destination-card h-full";

  if (park.hasDetailPage) {
    return (
      <Link
        href={`/destination/${park.slug}/`}
        className={`${baseClass} hover:scale-[1.02] transition`}
      >
        {inner}
      </Link>
    );
  }

  return <div className={baseClass}>{inner}</div>;
}

export default function DestinationsHubPage() {
  return (
    <main className="font-body bg-white text-[#081d01] min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-[#081d01] text-[#ede4d1] py-[80px] md:py-[120px]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="section-heading text-[36px] md:text-[56px] mb-6 leading-tight">
            Tiger Reserves and National Parks of India
          </h1>
          <p className="font-serif text-[16px] md:text-[18px] leading-relaxed text-white max-w-3xl mx-auto">
            India has over 100 national parks, 55 of which are{" "}
            <strong>tiger reserves</strong>. Home to over 3,500 wild tigers, India holds
            more than 70% of the total wild tiger population of the world. We commenced
            operations with just Tadoba Tiger Reserve in our nascent stages, but today we
            have a network across 17 of the best parks and wildlife areas in the country.
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
            Many guests pick parks based on social media posts or through second-hand
            information from other sources. We help refine the choice by understanding
            exactly what you need. Here are a few parks and destinations based on the
            requests we have gotten over the years:
          </p>
          <ul className="font-serif text-[15px] md:text-[16px] leading-relaxed space-y-3">
            {CHOOSE_BY.map((item) => (
              <li key={item.label}>
                <strong>{item.label}:</strong> {item.parks}
              </li>
            ))}
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
                  <ParkBox key={park.slug} park={park} />
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
            guide. You confirm.
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
