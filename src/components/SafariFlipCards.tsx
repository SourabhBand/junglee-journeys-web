'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { ReactNode } from 'react';

/* ─── Icons ─────────────────────────────────────────────────────────────── */

// Tiger pugmark — four toe pads arcing above the central palm pad
const PugmarkIcon = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
    {/* Palm pad */}
    <ellipse cx="26" cy="37" rx="11" ry="9" fill="#e79e23" opacity="0.9" />
    {/* Toe pads — arranged in a natural arc */}
    <ellipse cx="10" cy="23" rx="5" ry="6.5" fill="#e79e23" opacity="0.9" transform="rotate(-20 10 23)" />
    <ellipse cx="19" cy="15" rx="5" ry="6.5" fill="#e79e23" opacity="0.9" transform="rotate(-7 19 15)" />
    <ellipse cx="30" cy="14" rx="5" ry="6.5" fill="#e79e23" opacity="0.9" transform="rotate(7 30 14)" />
    <ellipse cx="40" cy="21" rx="5" ry="6.5" fill="#e79e23" opacity="0.9" transform="rotate(20 40 21)" />
  </svg>
);

// Camera viewfinder — corner brackets + focus ring ("Find your frame")
const ViewfinderIcon = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
    <path d="M6 20 L6 6 L20 6" stroke="#e79e23" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 6 L46 6 L46 20" stroke="#e79e23" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 32 L6 46 L20 46" stroke="#e79e23" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 46 L46 46 L46 32" stroke="#e79e23" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="26" cy="26" r="7" stroke="#e79e23" strokeWidth="1.5" fill="none" opacity="0.65" />
    <circle cx="26" cy="26" r="2" fill="#e79e23" opacity="0.65" />
  </svg>
);

// Binoculars with focus rings ("Train your binoculars")
const BinocularsIcon = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
    {/* Eyepieces (small caps on top) */}
    <line x1="9" y1="11" x2="17" y2="11" stroke="#e79e23" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="35" y1="11" x2="43" y2="11" stroke="#e79e23" strokeWidth="2.5" strokeLinecap="round" />
    {/* Left barrel */}
    <rect x="6" y="14" width="14" height="26" rx="3" stroke="#e79e23" strokeWidth="2" fill="none" />
    {/* Right barrel */}
    <rect x="32" y="14" width="14" height="26" rx="3" stroke="#e79e23" strokeWidth="2" fill="none" />
    {/* Bridge */}
    <rect x="19" y="20" width="14" height="6" rx="1" stroke="#e79e23" strokeWidth="1.5" fill="none" />
    {/* Left focus ring */}
    <circle cx="13" cy="28" r="4" stroke="#e79e23" strokeWidth="1.5" fill="none" opacity="0.65" />
    <circle cx="13" cy="28" r="1.5" fill="#e79e23" opacity="0.65" />
    {/* Right focus ring */}
    <circle cx="39" cy="28" r="4" stroke="#e79e23" strokeWidth="1.5" fill="none" opacity="0.65" />
    <circle cx="39" cy="28" r="1.5" fill="#e79e23" opacity="0.65" />
  </svg>
);

// Dotted route with waypoints ("Take the long route")
const RouteIcon = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
    <path
      d="M8 44 C 12 34, 22 38, 24 28 C 26 18, 36 22, 44 8"
      stroke="#e79e23" strokeWidth="1.5" strokeDasharray="3.5 3"
      fill="none" strokeLinecap="round" opacity="0.8"
    />
    {/* Origin — filled */}
    <circle cx="8" cy="44" r="4" fill="#e79e23" />
    {/* Waypoint — hollow */}
    <circle cx="24" cy="28" r="3.5" stroke="#e79e23" strokeWidth="1.5" fill="rgba(231,158,35,0.15)" />
    {/* Destination — ring + dot */}
    <circle cx="44" cy="8" r="5" stroke="#e79e23" strokeWidth="2" fill="none" />
    <circle cx="44" cy="8" r="2" fill="#e79e23" />
  </svg>
);

/* ─── Data ───────────────────────────────────────────────────────────────── */

const experiences: {
  num: string;
  heading: string;
  href: string;
  body: ReactNode;
  icon: ReactNode;
  cta: string;
}[] = [
  {
    num: '01',
    heading: 'Wildlife Safaris',
    href: '/safaris/',
    body: 'India is home to over a lakh species of fauna, which makes it one of the most biodiverse nations on the planet. With over 100 national parks spread across, the Indian wildlife list is rather big. Ticking everything off may not be possible but we can surely try. Explore our safari destinations and contact us for customised safari packages.',
    icon: <PugmarkIcon />,
    cta: 'Tap the Paw to explore',
  },
  {
    num: '02',
    heading: 'Photography Expeditions',
    href: '/safari/photography-special/',
    body: 'Every photographer has a dream frame they wish to capture. It may be the Oriental Dwarf Kingfisher with a fish in its beak or just the perfect reflection of a Tiger drinking water. Over the years we have had many photographers go home with a smile on their faces and that dream shot in the memory stick. We design target specific itineraries across the country to give you the best chance of getting that shot!',
    icon: <ViewfinderIcon />,
    cta: 'Find your frame',
  },
  {
    num: '03',
    heading: 'Birding in India',
    href: '/safari/ranthambore-weekend/',
    body: 'India boasts over 1300 species of birds and we know where to find them. We specialise in designing itineraries based on your birding wish list. From the Bengal Florican to the Great Indian Bustard, we curate itineraries that take you to the right locations at the right times to give you the best chance of ticking elusive birds off your list.',
    icon: <BinocularsIcon />,
    cta: 'Train your binoculars',
  },
  {
    num: '04',
    heading: 'Multi-Park Itineraries',
    href: '/safari/central-india-tiger-trail/',
    body: "Seven to fourteen nights across India's best wildlife locations, with a bespoke itinerary curated to you. From the Tigers of Central India to the Birds of the Himalayas, we have an assortment of itineraries awaiting your perusal.",
    icon: <RouteIcon />,
    cta: 'Take the long route',
  },
];

/* ─── Component ──────────────────────────────────────────────────────────── */

export default function SafariFlipCards() {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setFlipped(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <div className="lg:w-[58%] grid grid-cols-1 sm:grid-cols-2 gap-5">
      {experiences.map((exp, i) => (
        <div
          key={exp.heading}
          style={{ perspective: '1200px' }}
          onClick={() => toggle(i)}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && toggle(i)}
          role="button"
          tabIndex={0}
          aria-label={`${exp.heading}. Press to ${flipped.has(i) ? 'flip back' : 'reveal details'}`}
          className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e79e23] focus-visible:ring-offset-2 rounded-[9px]"
        >
          <div className={`flip-card-inner min-h-[320px]${flipped.has(i) ? ' is-flipped' : ''}`}>

            {/* ── FRONT FACE ── */}
            <div className="flip-face rounded-[9px] bg-[#ede4d1]/10 border border-[#ede4d1]/10 p-6 md:p-7 min-h-[320px] flex flex-col justify-between hover:bg-[#ede4d1]/15 transition-colors duration-300">
              <div>
                <span className="font-serif text-[11px] text-[#e79e23]/60 tracking-[0.25em] uppercase block mb-4">
                  {exp.num}
                </span>
                <h3 className="font-serif font-semibold text-[20px] md:text-[22px] text-[#ede4d1] leading-tight">
                  {exp.heading}
                </h3>
              </div>

              <div>
                <div className="mb-5">{exp.icon}</div>
                <hr className="gold-rule mb-5 opacity-50" />
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-[12px] text-[#ede4d1]/40 tracking-[0.1em]">
                    {exp.cta}
                  </span>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M6 12L10 8L6 4" stroke="rgba(237,228,209,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* ── BACK FACE ── */}
            <div className="flip-face flip-face-back rounded-[9px] bg-[#ede4d1] p-6 md:p-7 flex flex-col">
              <h3 className="font-serif font-semibold text-[17px] md:text-[19px] text-[#081d01] leading-tight mb-3">
                {exp.heading}
              </h3>
              <hr className="border-t border-[#081d01]/10 mb-4" />
              <p className="font-serif text-[13px] md:text-[14px] leading-[170%] text-[#081d01]/65">
                {exp.body}
              </p>
              <Link
                href={exp.href}
                onClick={e => e.stopPropagation()}
                className="bg-[rgba(231,158,35,0.81)] hover:bg-[#e79e23] transition-all text-white font-serif text-[13px] md:text-[14px] inline-flex items-center justify-center h-[40px] px-5 rounded-[9px] mt-auto self-start"
              >
                Tap for more info →
              </Link>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}
