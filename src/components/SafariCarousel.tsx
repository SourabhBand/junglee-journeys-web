'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import type { ReactNode } from 'react';

function ArrowButton({ onClick, direction = 'right' }: { onClick: () => void; direction?: 'left' | 'right' }) {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 md:w-12 md:h-12 bg-[#ede4d1] rounded-full flex items-center justify-center hover:bg-[#e5dfd3] transition-colors ${direction === 'left' ? 'rotate-180' : ''}`}
      aria-label={direction === 'right' ? 'Next experience' : 'Previous experience'}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12L10 8L6 4" stroke="#081d01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

const experiences: { heading: string; href: string; body: ReactNode }[] = [
  {
    heading: 'Private Tiger Safaris',
    href: '/safaris/',
    body: <>The default for most of our guests. A <strong>private safari in India</strong> trip with us means your own jeep, your own naturalist, and game drives timed around the actual wildlife activity rather than the tour bus schedule. No sharing. No rushing. No second jeep idling behind you while a tigress decides whether to cross the road.</>,
  },
  {
    heading: 'Photography Expeditions',
    href: '/safari/photography-special/',
    body: 'For photographers who care which hide they are sitting in and at what hour, with guides who understand light and animal behaviour at the level you actually need them to. The right waterhole, the right window, the right time of year for the species you came for.',
  },
  {
    heading: 'Weekend Escapes',
    href: '/safari/ranthambore-weekend/',
    body: 'Two or three nights in Tadoba, Ranthambore, or Pench, depending on which city you fly out of. The kind of weekend that resets a year of city living and has you wondering, on the flight home, whether you can negotiate a Friday off for next month.',
  },
  {
    heading: 'Multi-Park Adventures',
    href: '/safari/central-india-tiger-trail/',
    body: 'Seven to fourteen nights across India\'s best reserves. Kanha to Bandhavgarh to Pench, or Ranthambore north into Corbett, or any combination that makes geographical sense for the dates you actually have. The trip you will still be telling people about a decade later.',
  },
];

export default function SafariCarousel() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent(p => (p + 1) % experiences.length), []);
  const prev = useCallback(() => setCurrent(p => (p - 1 + experiences.length) % experiences.length), []);
  const exp = experiences[current];

  return (
    <div className="lg:w-[58%]">
      <div className="flex flex-col h-full">
        <h3 className="font-serif font-bold text-[20px] md:text-[22px] text-white/90 mb-3">
          <Link href={exp.href} className="hover:text-[#e79e23] transition-colors">
            {exp.heading}
          </Link>
        </h3>
        <div className="safari-card bg-[#ede4d1] text-[#081d01] rounded-[9px] p-6 md:p-8 min-h-[180px] flex items-start">
          <p className="font-serif text-[13px] md:text-[15px] leading-[175%] text-[#081d01]/65">
            {exp.body}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-start gap-4 mt-6">
          <ArrowButton onClick={prev} direction="left" />
          <div className="flex gap-2">
            {experiences.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-[#e79e23] w-6' : 'bg-white/30 hover:bg-white/50 w-2.5'}`}
                aria-label={`Go to experience ${i + 1}`}
              />
            ))}
          </div>
          <ArrowButton onClick={next} direction="right" />
        </div>
      </div>
    </div>
  );
}
