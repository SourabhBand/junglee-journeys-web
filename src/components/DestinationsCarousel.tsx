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

const destinations: { id: string; image: string; name: string; alt?: string; slug: string; rank: string; desc: ReactNode }[] = [
  {
    id: 'tadoba',
    image: IMAGE_ASSETS.tadobaTigerReserve,
    name: 'Tadoba-Andhari Tiger Reserve',
    slug: 'tadoba',
    rank: '01',
    desc: <>If your dream is to see a tiger in the wild, Tadoba is where we&rsquo;d start. Widely regarded as one of India&rsquo;s most reliable parks for tiger sightings, this reserve has earned its reputation through consistently rewarding safari experiences. With a healthy and growing tiger population, it is also one of the few parks where choosing the perfect zone becomes less important than simply spending time in the forest. Just 2.5 hours from Nagpur, with excellent connectivity to Pune and Mumbai, Tadoba is one of the easiest reserves to escape into for a short wildlife getaway.</>,
  },
  {
    id: 'bandhavgarh',
    image: IMAGE_ASSETS.bandhavgarhNationalPark,
    name: 'Bandhavgarh Tiger Reserve',
    slug: 'bandhavgarh',
    rank: '02',
    desc: <>Bandhavgarh has long held legendary status among tiger reserves in India and boasts one of the highest tiger densities in the country. For generations, wildlife travellers have returned to this forest for its extraordinary sightings and timeless charm. Rolling hills, open grasslands, quiet streams, and dense woodland come together to create a landscape that feels alive with possibility. Around 3.5 hours from Jabalpur, Bandhavgarh remains a remarkable destination for those hoping to experience the thrill of seeing a tiger in the wild.</>,
  },
  {
    id: 'kanha',
    image: IMAGE_ASSETS.kanhaNationalPark,
    name: 'Kanha Tiger Reserve',
    alt: 'Kanha tiger safari',
    slug: 'kanha',
    rank: '03',
    desc: <>Kanha is a forest that stays with you long after the safari ends. Said to have inspired Rudyard Kipling&rsquo;s vision of The Jungle Book, this reserve offers what many consider the classic Central Indian safari experience. Towering sal forests, expansive meadows, and thriving herbivore populations come together to create one of the most beautiful wilderness experiences in the country. Combined with decades of conservation success and a healthy tiger population, Kanha stands among India&rsquo;s finest safari destinations. Despite its sense of remoteness, Kanha is accessible from Jabalpur, Raipur, and Nagpur.</>,
  },
  {
    id: 'pench',
    image: IMAGE_ASSETS.penchTigerReserve,
    name: 'Pench Tiger Reserve',
    slug: 'pench',
    rank: '04',
    desc: <>Just a short drive from Nagpur, Pench is a forest that rewards those who enjoy more than just the search for a tiger. The Pench River winds through a landscape rich in biodiversity, creating exceptional opportunities for photographers, birders, and wildlife enthusiasts. Spanning both Madhya Pradesh and Maharashtra, Pench offers two distinct safari experiences, each with its own terrain and character while sharing a thriving ecosystem.</>,
  },
  {
    id: 'ranthambore',
    image: IMAGE_ASSETS.ranthamboreNationalPark,
    name: 'Ranthambore Tiger Reserve',
    alt: 'Ranthambore tiger safari',
    slug: 'ranthambore',
    rank: '05',
    desc: <>A park that needs little introduction, Ranthambore is one of India&rsquo;s most iconic wildlife destinations. Famous for its tigers and dramatic setting, it is a place where history and wilderness exist side by side. Ancient fort ruins scattered across the landscape give Ranthambore a character that few national parks can match, creating a safari experience unlike anywhere else in the country. Accessible from both Delhi and Jaipur, it remains a favourite among wildlife photographers and first-time safari travellers alike.</>,
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
            India is home to more than 70% of the world&rsquo;s wild tiger population, spread across over 100 national parks and wildlife sanctuaries. Each landscape has its own character, shaped by distinct habitats, ecosystems, and biodiversity. While tigers inhabit forests across the country, the chances of encountering one on safari can vary dramatically from park to park. These five tiger reserves offer some of the highest chances of tiger sightings in India.
          </p>
        </div>

        {/* Crawlable full content + links for all destinations (visually hidden).
            The carousel below only mounts the active slide, so these anchors are
            what make every featured park's detail page discoverable in the static HTML. */}
        <div className="sr-only">
          {destinations.map((d) => (
            <article key={`sr-${d.id}`}>
              <h3>
                <Link href={`/destination/${d.slug}/`}>{d.name}</Link>
              </h3>
              <p>{d.desc}</p>
            </article>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">

            {/* Image */}
            <div className="w-full lg:w-[58%] flex-shrink-0">
              <div className="relative w-full aspect-[692/461] rounded-tl-[9px] rounded-tr-[9px] rounded-br-[9px] rounded-bl-[80px] md:rounded-bl-[120px] overflow-hidden bg-[#081d01]">
                <Image
                  key={curr.id}
                  src={curr.image}
                  alt={curr.alt || curr.name}
                  fill
                  className="object-cover carousel-fade-in"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
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
                  className={`h-2.5 rounded-full transition-all duration-300 p-1.5 box-content ${i === current ? 'bg-[#e79e23] w-6' : 'bg-white/30 hover:bg-white/50 w-2.5'}`}
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
