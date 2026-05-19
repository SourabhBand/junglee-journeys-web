'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { IMAGE_ASSETS } from '@/lib/assets';

const wildlifeData = [
  {
    id: 'asiatic-lions',
    image: IMAGE_ASSETS.asiaticLion,
    title: 'Asiatic Lions',
    subtitle: 'The last living population of the Asiatic Lion in found in the state of Gujarat. Once at the brink of extinction, the lions have made an incredible comeback making this one of the biggest success stories of wildlife conservation in India.',
    location: 'Gir National Park',
  },
  {
    id: 'one-horned-rhinos',
    image: IMAGE_ASSETS.oneHornedRhino,
    title: 'Indian One-Horned Rhino',
    subtitle: 'Another massive success story from Indian conservation is that of the Indian One-Horned Rhino. Their population grows slowly but steadily, due to tireless efforts of the forest department as well as ngos across the country.',
    location: 'Kaziranga, Manas, Pobitora, Dudhwa',
  },
  {
    id: 'asian-elephant',
    image: IMAGE_ASSETS.asianElephant,
    title: 'Asian Elephant',
    subtitle: 'The majestic Asian Elephant can be found across various landscapes of north, northeast and south India. Seeing one in the wild is truly a breathtaking experience that will stay with you forever.',
    location: 'Corbett, Kaziranga, Manas, Bandhavgarh',
  },
  {
    id: 'hoolock-gibbon',
    image: IMAGE_ASSETS.hoolockGibbon,
    title: 'Hoolock Gibbon',
    subtitle: 'The only species of ape in the country, the hoolock gibbon adorns the canopies of Northeast India. Loud echoing calls and agile movements through the trees, sighting a Gibbon is a remarkable experience.',
    location: 'Kaziranga, Hollongapar',
  },
  {
    id: 'snow-leopard',
    image: IMAGE_ASSETS.snowLeopard,
    title: 'Snow Leopard',
    subtitle: 'An animal that needs no introduction. Aptly labelled the Ghost of the Himalayas, the Snow Leopard is a master of camouflage that traverses the steep mountain slopes as if gravity doesn’t exist. A true personification of agility, this is one of the rarest animals of wild India!',
    location: 'Spiti',
  },
  {
    id: 'red-panda',
    image: IMAGE_ASSETS.redPanda,
    title: 'Red Panda',
    subtitle: 'What can we say about the Red Panda that truly captures its charm? The feeling of seeing a Red Panda in its true habitat is something that can only be experienced, not explained.',
    location: 'Singalila',
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
          Tigers get all the attention (fair enough, they&rsquo;re magnificent). But India&rsquo;s wildlife story is so much bigger. We have lions, rhinos, elephants, gibbons, snow leopards and even red pandas!
        </p>

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
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
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
