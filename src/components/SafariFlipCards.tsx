'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { IMAGE_ASSETS } from '@/lib/assets';

const experiences: {
  num: string;
  heading: string;
  href: string;
  body: ReactNode;
  cardImage?: string;
  cta?: string;
}[] = [
  {
    num: '01',
    heading: 'Private Tiger Safaris',
    href: '/safaris/',
    body: <>The default for most of our guests. A <strong>private safari in India</strong> trip with us means your own jeep, your own naturalist, and game drives timed around the actual wildlife activity rather than the tour bus schedule. No sharing. No rushing. No second jeep idling behind you while a tigress decides whether to cross the road.</>,
    cardImage: IMAGE_ASSETS.tigerPaw,
    cta: 'Tap the Paw to explore',
  },
  {
    num: '02',
    heading: 'Photography Expeditions',
    href: '/safari/photography-special/',
    body: 'For photographers who care which hide they are sitting in and at what hour, with guides who understand light and animal behaviour at the level you actually need them to. The right waterhole, the right window, the right time of year for the species you came for.',
    cta: 'Find your frame',
  },
  {
    num: '03',
    heading: 'Weekend Escapes',
    href: '/safari/ranthambore-weekend/',
    body: 'Two or three nights in Tadoba, Ranthambore, or Pench, depending on which city you fly out of. The kind of weekend that resets a year of city living and has you wondering, on the flight home, whether you can negotiate a Friday off for next month.',
    cta: 'Block that Friday',
  },
  {
    num: '04',
    heading: 'Multi-Park Adventures',
    href: '/safari/central-india-tiger-trail/',
    body: "Seven to fourteen nights across India's best reserves. Kanha to Bandhavgarh to Pench, or Ranthambore north into Corbett, or any combination that makes geographical sense for the dates you actually have. The trip you will still be telling people about a decade later.",
    cta: 'Map your decade',
  },
];

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
          {/* min-h ensures the absolute back face has enough room for all body text */}
          <div
            className={`flip-card-inner min-h-[320px]${flipped.has(i) ? ' is-flipped' : ''}`}
          >
            {/* ── FRONT FACE ── */}
            <div className={`flip-face rounded-[9px] bg-[#ede4d1]/10 border border-[#ede4d1]/10 min-h-[320px] flex flex-col overflow-hidden hover:bg-[#ede4d1]/15 transition-colors duration-300`}>
              {/* Top content */}
              <div className="p-6 md:p-7 flex-1">
                <span className="font-serif text-[11px] text-[#e79e23]/60 tracking-[0.25em] uppercase block mb-4">
                  {exp.num}
                </span>
                <h3 className="font-serif font-bold text-[20px] md:text-[22px] text-[#ede4d1] leading-tight">
                  {exp.heading}
                </h3>
              </div>

              {/* Bottom: image or standard hint */}
              {exp.cardImage ? (
                <div className="relative h-[170px] flex-shrink-0 overflow-hidden">
                  <Image
                    src={exp.cardImage}
                    alt={`${exp.heading} — tiger paw close-up`}
                    fill
                    className="object-cover object-[center_35%]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  />
                  {/* Top fade: image blends into the dark card bg */}
                  <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#0d1a0c] to-transparent pointer-events-none" />
                  {/* Bottom gradient + CTA */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#081d01]/85 via-[#081d01]/40 to-transparent px-6 pb-5 pt-10 pointer-events-none">
                    <div className="flex items-center gap-1.5">
                      <span className="font-serif text-[12px] text-[#ede4d1]/80 tracking-[0.1em]">
                        {exp.cta}
                      </span>
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M6 12L10 8L6 4" stroke="rgba(237,228,209,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="px-6 md:px-7 pb-6 md:pb-7">
                  <hr className="gold-rule mb-5 opacity-50" />
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif text-[12px] text-[#ede4d1]/40 tracking-[0.1em]">
                      {exp.cta ?? 'Tap to explore'}
                    </span>
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M6 12L10 8L6 4" stroke="rgba(237,228,209,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* ── BACK FACE ── */}
            <div className="flip-face flip-face-back rounded-[9px] bg-[#ede4d1] p-6 md:p-7 flex flex-col">
              <h3 className="font-serif font-bold text-[17px] md:text-[19px] text-[#081d01] leading-tight mb-3">
                <Link
                  href={exp.href}
                  onClick={e => e.stopPropagation()}
                  className="hover:text-[#e79e23] transition-colors"
                >
                  {exp.heading} →
                </Link>
              </h3>
              <hr className="border-t border-[#081d01]/10 mb-4" />
              <p className="font-serif text-[13px] md:text-[14px] leading-[170%] text-[#081d01]/65">
                {exp.body}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
