'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { IMAGE_ASSETS } from '@/lib/assets';

const wildlifeData = [
  {
    id: 'asiatic-lions',
    image: IMAGE_ASSETS.asiaticLion,
    title: 'Asiatic Lion',
    subtitle: 'The last remaining population of the Asiatic Lion is found in Gujarat, India. Once pushed to the brink of extinction, the species has made an incredible recovery and stands as one of India\'s greatest wildlife conservation success stories.',
    location: 'Gir National Park',
  },
  {
    id: 'leopard',
    image: IMAGE_ASSETS.indianLeopard,
    title: 'Leopard',
    subtitle: "Often overlooked in a country famous for its tigers, the Leopard is one of India's most elusive big cats. A master of disappearing in plain sight, every sighting feels earned.",
    location: 'Jawai Bandh Leopard Conservation Reserve, Satpura National Park',
  },
  {
    id: 'one-horned-rhinos',
    image: IMAGE_ASSETS.oneHornedRhino,
    title: 'Indian One-Horned Rhino',
    subtitle: 'The Indian One-Horned Rhino is another conservation success story. Thanks to decades of protection and conservation efforts, populations continue to grow steadily across key landscapes. Seeing these giants in the wild is something you will never forget.',
    location: 'Kaziranga National Park, Manas National Park, Dudhwa National Park, Pobitora Wildlife Sanctuary',
  },
  {
    id: 'asian-elephant',
    image: IMAGE_ASSETS.asianElephant,
    title: 'Asian Elephant',
    subtitle: 'The Asian Elephant can be found across the forests and grasslands of North, Northeast, and South India. Watching one move through the wild is unforgettable. Few wildlife sightings in India leave quite the same impression.',
    location: 'Jim Corbett National Park, Kaziranga National Park, Manas National Park, Bandhavgarh National Park',
  },
  {
    id: 'hoolock-gibbon',
    image: IMAGE_ASSETS.hoolockGibbon,
    title: 'Hoolock Gibbon',
    subtitle: "India's only ape, the Hoolock Gibbon, lives high in the canopies of Northeast India. Their loud, echoing calls and effortless movement through the trees make every sighting memorable.",
    location: 'Kaziranga National Park, Hollongapar Gibbon Sanctuary',
  },
  {
    id: 'snow-leopard',
    image: IMAGE_ASSETS.snowLeopard,
    title: 'Snow Leopard',
    subtitle: 'The Ghost of the Himalayas needs no introduction. Master of camouflage and perfectly adapted to mountain life, the Snow Leopard moves across steep slopes with unbelievable ease. Spotting one is among the rarest wildlife experiences in India.',
    location: 'Spiti Valley',
  },
  {
    id: 'red-panda',
    image: IMAGE_ASSETS.redPanda,
    title: 'Red Panda',
    subtitle: "How do you describe the charm of a Red Panda? You probably can't. Seeing one in its natural habitat, moving quietly through the forests of the Eastern Himalayas, one of those moments that can only be experienced, not explained.",
    location: 'Singalila National Park',
  },
];

function ArrowButton({ onClick, direction = 'right' }: { onClick: () => void; direction?: 'left' | 'right' }) {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 md:w-12 md:h-12 bg-[#ede4d1] rounded-full flex items-center justify-center hover:bg-[#e5dfd3] transition-colors ${
        direction === 'left' ? 'rotate-180' : ''
      }`}
      aria-label={direction === 'right' ? 'Next slide' : 'Previous slide'}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12L10 8L6 4" stroke="#081d01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

export default function WildlifeCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % wildlifeData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + wildlifeData.length) % wildlifeData.length);
  }, []);

  const currentWildlife = wildlifeData[currentSlide];

  return (
    <section className="bg-[#081d01] text-white py-[80px] md:py-[100px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="section-heading text-[36px] md:text-[48px] text-center text-[#ede4d1] mb-6">
          It&apos;s Not Just About Tigers
        </h2>

        {/* Description */}
        <p className="max-w-[800px] mx-auto text-center font-serif text-[15px] md:text-[16px] text-white/85 leading-[165%] mb-12 md:mb-16">
          Tigers get all the attention (fair enough, they&rsquo;re magnificent). But India&rsquo;s wildlife story is so much bigger. From lions and rhinos to elephants, gibbons, snow leopards, and even red pandas, there&rsquo;s a whole wild side of India waiting to be explored.
        </p>

        {/* Crawlable full content for all wildlife cards (visually hidden) */}
        <div className="sr-only">
          {wildlifeData.map((w) => (
            <article key={`sr-${w.id}`}>
              <h3>{w.title}</h3>
              <p>{w.subtitle}</p>
              <p>Location: {w.location}</p>
            </article>
          ))}
        </div>

        {/* Carousel content */}
        <div className="relative">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
            {/* Wildlife Image */}
            <div className="w-full lg:w-[58%] flex-shrink-0">
              <div className="relative w-full aspect-[692/461] rounded-tl-[9px] rounded-tr-[9px] rounded-br-[9px] rounded-bl-[80px] md:rounded-bl-[120px] overflow-hidden">
                {wildlifeData.map((wildlife, index) => (
                  <div
                    key={wildlife.id}
                    className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                    style={{ opacity: index === currentSlide ? 1 : 0 }}
                  >
                    <Image
                      alt={wildlife.title}
                      className="w-full h-full object-cover"
                      src={wildlife.image}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Info Card */}
            <div className="w-full lg:w-[42%] flex-shrink-0">
              <div className="bg-[#ede4d1]/10 backdrop-blur-sm rounded-[9px] p-8 md:p-10 lg:p-12 text-center lg:text-left">
                <h3 className="font-serif font-semibold text-[28px] md:text-[36px] lg:text-[40px] text-white mb-4 transition-all duration-500 leading-tight">
                  {currentWildlife.title}
                </h3>
                <p className="font-serif text-[14px] md:text-[15px] text-white/85 leading-[175%] mb-6">
                  {currentWildlife.subtitle}
                </p>
                <hr className="gold-rule mb-4 opacity-50" />
                <p className="font-serif text-[13px] md:text-[14px] text-white/70">
                  <span className="text-[#ede4d1]/60 uppercase tracking-[0.15em] text-[11px] md:text-[12px]">Location</span> &middot; {currentWildlife.location}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
            <ArrowButton onClick={prevSlide} direction="left" />

            {/* Slide indicators */}
            <div className="flex gap-2">
              {wildlifeData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 p-1.5 box-content ${
                    index === currentSlide
                      ? 'bg-[#e79e23] w-6'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <ArrowButton onClick={nextSlide} direction="right" />
          </div>
        </div>
      </div>
    </section>
  );
}

