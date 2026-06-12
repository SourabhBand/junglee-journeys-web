import Link from "next/link";
import { DESTINATIONS } from "@/lib/content";

interface RelatedParksProps {
  currentSlug: string;
}

export function RelatedParks({ currentSlug }: RelatedParksProps) {
  const current = DESTINATIONS.find((d) => d.slug === currentSlug);
  const candidates = DESTINATIONS.filter(
    (d) => d.hasDetailPage && d.slug !== currentSlug,
  );

  // Same region first, then the rest, capped at 3
  const related = [
    ...candidates.filter((d) => d.region === current?.region),
    ...candidates.filter((d) => d.region !== current?.region),
  ].slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="py-[60px] md:py-[80px] bg-[#ede4d1]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-heading text-[28px] md:text-[36px] mb-8 leading-tight text-[#081d01]">
          Explore More Parks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {related.map((park) => (
            <Link
              key={park.slug}
              href={`/destination/${park.slug}/`}
              className="group block bg-white p-7 rounded-[9px] transition-shadow hover:shadow-lg"
            >
              <div className="font-display text-[10px] uppercase tracking-[0.2em] text-[#081d01]/45 mb-2">
                {park.region}
              </div>
              <h3 className="font-serif font-semibold text-[18px] md:text-[20px] leading-tight mb-3 text-[#081d01]">
                {park.fullName}
              </h3>
              <p className="font-serif text-[14px] text-[#081d01]/75 leading-snug mb-5">
                {park.knownFor}
              </p>
              <span className="inline-flex items-center gap-2 font-serif text-[14px] text-[#c8841a] group-hover:text-[#e79e23] transition-colors">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
