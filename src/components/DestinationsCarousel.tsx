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

const destinations: { id: string; image: string; name: string; slug: string; rank: string; desc: ReactNode }[] = [
  {
    id: 'tadoba',
    image: IMAGE_ASSETS.tadobaTigerReserve,
    name: 'Tadoba-Andhari Tiger Reserve',
    slug: 'tadoba',
    rank: '01',
    desc: <>Currently the best park in the country for tiger sightings, Tadoba truly is the land of the tiger. With a high density of tigers and numbers on the rise, this is one of the few parks in the country where choosing a specific zone doesn&rsquo;t really matter. Be it the Core or Buffer, the probability of sighting is high. Although a sighting is never guaranteed, Tadoba is your best bet for seeing the striped cat. Tadoba is merely 2.5 hours from Nagpur, a city that has great connectivity with Pune and Mumbai, making this destination ideal for a quick weekend getaway.</>,
  },
  {
    id: 'bandhavgarh',
    image: IMAGE_ASSETS.bandhavgarhNationalPark,
    name: 'Bandhavgarh Tiger Reserve',
    slug: 'bandhavgarh',
    rank: '02',
    desc: <>Boasting the highest density of tigers in India, Bandhavgarh is arguably the most well-known tiger destinations in the world. Mountains, hills, grasslands, streams, and a good chance of seeing the gorgeous tiger, this forest truly is a breathtaking destination for wildlifers! Just around 3.5 hours from Jabalpur, Bandhavgarh is a must visit for tiger enthusiasts. This one needs to go on the bucket list for sure!</>,
  },
  {
    id: 'kanha',
    image: IMAGE_ASSETS.kanhaNationalPark,
    name: 'Kanha Tiger Reserve',
    slug: 'kanha',
    rank: '03',
    desc: <>A landscape that inspired Rudyard Kipling to immortalise it in the pages of the Jungle Book, Kanha Tiger Reserve provides the classic central Indian jungle safari experience. From the tall Sal Trees towering over you to the expansive meadows teeming with herbivores, you&rsquo;re always in for a memorable safari. The tiger population here has held steady for over 2 decades with conservation practices ensuring a rich and biodiverse habitat. Around 4hrs from Jabalpur/Raipur or 4.5hrs from Nagpur, Kanha is one of the best tiger destinations of India.</>,
  },
  {
    id: 'pench',
    image: IMAGE_ASSETS.heroTiger,
    name: 'Pench Tiger Reserve',
    slug: 'pench',
    rank: '04',
    desc: <>A mere 2 hours from the city of Nagpur, Pench is a destination that everyone must visit at least once. The Pench River meanders through this beautiful landscape that teems with biodiversity making it an ideal setting for photographers, birders, widlifers and tiger enthusiasts alike. This park crossed over from Madhya Pradesh into Maharashtra, making it a tiger reserve that allows for safari experiences in both states. Although the biodiversity stays the same, a change in terrain between MP and Maharashtra makes for a unique safari experience in each state.</>,
  },
  {
    id: 'ranthambore',
    image: IMAGE_ASSETS.ranthamboreNationalPark,
    name: 'Ranthambore Tiger Reserve',
    slug: 'ranthambore',
    rank: '05',
    desc: <>A park that needs no introduction, Ranthambore is a name that has echoed through the wildlife tourism world for decades. Famous for having had some of the most photographed and videographed tigers in the world, this forest boasts a picturesque landscape that merges with history through the beautiful castle ruins scattered across. A few hours drive from Delhi and Jaipur, Ranthambore makes for a great destination for wildlife photography.</>,
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
          India&rsquo;s Best Tiger Reserves
        </h2>

        {/* Intro paragraph */}
        <div className="max-w-[700px] mx-auto text-center mb-10 md:mb-14">
          <p className="font-serif text-[14px] md:text-[15px] text-white/50 leading-[180%]">
            India holds more than 70% of the world&rsquo;s wild tiger population in over 100 National Parks. Each of these parks have their own charm, with varying habitats and biodiversity. Although the tiger occupies forest across the country, the probability of seeing one in a safari vary vastly from park to park. These five tiger reserves have the highest probability of tiger sightings in the country.
          </p>
        </div>

        {/* Crawlable H3s for all destinations (hidden from sighted users) */}
        <div className="sr-only">
          {destinations.map((d) => (
            <h3 key={`sr-${d.id}`}>{d.name}</h3>
          ))}
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
                <span className="font-serif text-[11px] text-[#e79e23]/60 tracking-[0.25em] uppercase block mb-4">
                  {curr.rank}
                </span>
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
            View All Destinations
          </Link>
        </div>

      </div>
    </section>
  );
}
