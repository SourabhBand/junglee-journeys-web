'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IMAGE_ASSETS } from '@/lib/assets';
import type { ReactNode } from 'react';

function ArrowButton({ onClick, direction = 'right' }: { onClick: () => void; direction?: 'left' | 'right' }) {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 md:w-12 md:h-12 bg-[#ede4d1] rounded-full flex items-center justify-center hover:bg-[#e5dfd3] transition-colors ${direction === 'left' ? 'rotate-180' : ''}`}
      aria-label={direction === 'right' ? 'Next destination' : 'Previous destination'}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12L10 8L6 4" stroke="#081d01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

const destinations: { id: string; image: string; name: string; slug: string; desc: ReactNode }[] = [
  {
    id: 'kanha',
    image: IMAGE_ASSETS.kanhaNationalPark,
    name: 'Kanha National Park',
    slug: 'kanha',
    desc: <>Kanha is what Mowgli&apos;s forest looked like before the marketing department got involved. Sal trees in straight ranks, meadows wide enough that you forget what you came here for, and a tiger population that has held steady for two decades. The classic Central Indian <strong>jungle safari in India</strong> experience, and the one most first-timers should start with. Four hours by road from Jabalpur airport.</>,
  },
  {
    id: 'tadoba',
    image: IMAGE_ASSETS.tadobaTigerReserve,
    name: 'Tadoba Tiger Reserve',
    slug: 'tadoba',
    desc: <>Tadoba is the closest tiger reserve to Mumbai and Pune, which makes it the best <strong>safari near Mumbai</strong> by a wide margin and the only park where Friday-to-Monday is genuinely realistic. Open terrain, bold tigers that walk past jeeps without breaking stride, and sighting rates that quietly embarrass the more famous parks. Three hours by road from Nagpur airport.</>,
  },
  {
    id: 'ranthambore',
    image: IMAGE_ASSETS.ranthamboreNationalPark,
    name: 'Ranthambore National Park',
    slug: 'ranthambore',
    desc: <>The most photographed tigers on Earth live in Ranthambore, and they walk through the ruins of a tenth-century fort in golden hour that photographers travel years to find. Five hours from Delhi by road, which makes Ranthambore the easiest <strong>safari near Delhi</strong> by a long way. The park is iconic for a reason, and the reason is genuinely good.</>,
  },
  {
    id: 'bandhavgarh',
    image: IMAGE_ASSETS.bandhavgarhNationalPark,
    name: 'Bandhavgarh National Park',
    slug: 'bandhavgarh',
    desc: <>Bandhavgarh has the highest tiger density in India, which is a polite way of saying you will probably see one before lunch on day one. If your priority is the odds, this is where you go. The fort on the hill is two thousand years old, the locals will tell you. Either way, old enough.</>,
  },
  {
    id: 'pench',
    image: IMAGE_ASSETS.heroTiger,
    name: 'Pench National Park',
    slug: 'pench',
    desc: <>Pench is the actual Jungle Book setting, although Kipling never set foot in it and is therefore not strictly qualified to comment. Two hours from Nagpur, relaxed enough for families with young children, and the only one of our parks where you have a serious chance at seeing wild dogs hunting. Tigers, leopards, and the kind of forest that does not bother showing off.</>,
  },
  {
    id: 'satpura',
    image: IMAGE_ASSETS.indianLeopard,
    name: 'Satpura National Park',
    slug: 'satpura',
    desc: <>Satpura is the <strong>wildlife safari</strong> for guests who have already done Kanha and Bandhavgarh and want a quieter version of the trip. Walking safaris and boat safaris and almost no jeeps. Sloth bears, gaur, leopards, and the occasional tiger when she feels like making an appearance.</>,
  },
];

export default function DestinationsCarousel() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent(p => (p + 1) % destinations.length), []);
  const prev = useCallback(() => setCurrent(p => (p - 1 + destinations.length) % destinations.length), []);
  const curr = destinations[current];

  return (
    <section className="pt-[60px] md:pt-[100px] pb-[36px] md:pb-[48px] bg-[#081d01] text-[#ede4d1] grain-overlay atmospheric-glow">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Title */}
        <h2 className="text-center section-heading text-[32px] md:text-[52px] lg:text-[60px] mb-8 md:mb-10 text-[#ede4d1] tracking-[0.06em]">
          India&apos;s Premier Tiger Reserves
        </h2>

        {/* Intro paragraph */}
        <div className="max-w-[700px] mx-auto text-center mb-10 md:mb-14">
          <p className="font-serif text-[14px] md:text-[15px] text-white/50 leading-[180%]">
            India holds more than half the world&apos;s wild tigers, which is the kind of statistic that sounds invented until you visit and realise it is, slightly improbably, true. We operate in eleven of more than fifty official <strong>tiger reserves</strong>, each one a completely different argument for going. The six below are the parks we run most often. Five more (Corbett, Kaziranga, Manas, Panna, and Gir) round out the list. Pick the wrong park for your dates and the <strong>best tiger safari India</strong> has on offer will still feel generic. Pick the right one and you have the kind of week that quietly reorganises how you think about your free time.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">

            {/* Image */}
            <div className="w-full lg:w-[58%] flex-shrink-0">
              <div className="relative w-full aspect-[692/461] rounded-tl-[9px] rounded-tr-[9px] rounded-br-[9px] rounded-bl-[80px] md:rounded-bl-[120px] overflow-hidden">
                {destinations.map((d, i) => (
                  <div
                    key={d.id}
                    className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                    style={{ opacity: i === current ? 1 : 0 }}
                  >
                    <Image
                      src={d.image}
                      alt={d.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Info panel */}
            <div className="w-full lg:w-[42%] flex-shrink-0">
              <div className="bg-[#ede4d1]/10 backdrop-blur-sm rounded-[9px] p-8 md:p-10 lg:p-12 text-center lg:text-left">
                <h3 className="font-serif font-semibold text-[28px] md:text-[36px] lg:text-[40px] text-white mb-4 leading-tight">
                  {curr.name}
                </h3>
                <p className="font-serif text-[14px] md:text-[15px] text-white/80 leading-[175%] mb-8">
                  {curr.desc}
                </p>
                <Link
                  href={`/destination/${curr.slug}/`}
                  className="bg-[rgba(231,158,35,0.81)] hover:bg-[#e79e23] transition-all text-white font-serif text-[14px] md:text-[15px] w-[200px] md:w-[220px] h-[48px] md:h-[52px] rounded-[9px] inline-flex items-center justify-center hover:shadow-lg hover:shadow-[#e79e23]/20"
                >
                  Explore Park
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
            <ArrowButton onClick={prev} direction="left" />
            <div className="flex gap-2">
              {destinations.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-[#e79e23] w-6' : 'bg-white/30 hover:bg-white/50 w-2.5'}`}
                  aria-label={`Go to destination ${i + 1}`}
                />
              ))}
            </div>
            <ArrowButton onClick={next} direction="right" />
          </div>
        </div>

        {/* CTA button — no white box */}
        <div className="mt-10 md:mt-12 text-center">
          <Link
            href="/destinations/"
            className="bg-[rgba(231,158,35,0.81)] hover:bg-[#e79e23] transition-all text-white w-[240px] h-[48px] rounded-[9px] text-[15px] font-serif inline-flex items-center justify-center"
          >
            View All 11 Destinations
          </Link>
        </div>

      </div>
    </section>
  );
}
