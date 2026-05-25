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

function ParkBox({ park, index }: { park: DestinationSummary; index: number }) {
  const rotated = index % 2 === 1;
  const pillCorners = rotated
    ? "rounded-tl-[60px] md:rounded-tl-[80px] rounded-tr-[9px] rounded-br-[60px] md:rounded-br-[80px] rounded-bl-[9px]"
    : "rounded-tl-[9px] rounded-tr-[60px] md:rounded-tr-[80px] rounded-br-[9px] rounded-bl-[60px] md:rounded-bl-[80px]";

  const containerClass = `bg-[#ede4d1] p-7 md:p-8 h-full flex flex-col overflow-hidden ${pillCorners}`;

  const fields: Array<[string, string | undefined]> = [
    ["Size", park.size],
    ["Season", park.bestSeason],
    ["Airport", park.nearestAirport],
    ["Station", park.nearestTrainStation],
  ];

  const inner = (
    <>
      <h3 className="font-serif font-semibold text-[20px] md:text-[22px] leading-tight mb-4 text-[#081d01]">
        {park.fullName}
      </h3>

      <hr className="gold-rule mb-5" />

      <div className="mb-5">
        <div className="font-display text-[10px] uppercase tracking-[0.2em] text-[#081d01]/45 mb-1">
          Known For
        </div>
        <div className="font-serif font-semibold text-[15px] md:text-[16px] text-[#081d01] leading-snug">
          {park.knownFor}
        </div>
      </div>

      <dl className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 font-serif text-[13px] md:text-[14px] mb-6">
        {fields.map(([label, value]) =>
          value ? (
            <div key={label} className="contents">
              <dt className="font-display text-[10px] uppercase tracking-[0.2em] text-[#081d01]/45 self-center">
                {label}
              </dt>
              <dd className="text-[#081d01]/85">{value}</dd>
            </div>
          ) : null,
        )}
      </dl>

      <div className="mt-auto">
        {park.hasDetailPage ? (
          <span className="inline-flex items-center gap-2 bg-[rgba(231,158,35,0.81)] group-hover:bg-[#e79e23] transition-colors text-white font-serif text-[14px] h-[42px] px-5 rounded-[9px]">
            Explore {park.name}
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        ) : (
          <span className="inline-flex items-center font-display text-[10px] uppercase tracking-[0.25em] text-[#081d01]/40">
            Profile coming soon
          </span>
        )}
      </div>
    </>
  );

  if (park.hasDetailPage) {
    return (
      <Link
        href={`/destination/${park.slug}/`}
        className={`block group destination-card ${containerClass}`}
      >
        {inner}
      </Link>
    );
  }

  return <div className={containerClass}>{inner}</div>;
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
                {parks.map((park, i) => (
                  <ParkBox key={park.slug} park={park} index={i} />
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
