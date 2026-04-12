'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IMAGE_ASSETS } from '@/lib/assets';

// Wildlife data for carousel slides
const wildlifeData = [
  {
    id: 'asiatic-lions',
    image: IMAGE_ASSETS.asiaticLion,
    title: 'Asiatic Lions',
    subtitle: 'The last wild Asiatic lions. All 700 of them. One forest. Gir.',
    location: 'Gir National Park',
    population: '700',
  },
  {
    id: 'one-horned-rhinos',
    image: IMAGE_ASSETS.oneHornedRhino,
    title: 'One-Horned Rhinos',
    subtitle: 'More one-horned rhinos than anywhere else on Earth. Kaziranga is their kingdom.',
    location: 'Kaziranga National Park',
    population: '720',
  },
  {
    id: 'indian-leopards',
    image: IMAGE_ASSETS.indianLeopard,
    title: 'Leopards',
    subtitle: 'Elusive, adaptable, and thriving. India\'s leopards roam from rocky hills to dense forests.',
    location: 'Bera, Jawai, Satpura',
    population: '1,600',
  },
];

// Arrow Button Component
function ArrowButton({ onClick, direction = 'right' }: { onClick: () => void; direction?: 'left' | 'right' }) {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 bg-[#ede4d1] rounded-full flex items-center justify-center hover:bg-[#e5dfd3] transition-colors ${
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % wildlifeData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + wildlifeData.length) % wildlifeData.length);
  };

  const currentWildlife = wildlifeData[currentSlide];

  return (
    <section className="bg-[#081d01] text-white relative overflow-hidden" style={{ height: '850px' }}>
      {/* Title */}
      <h2 className="absolute left-1/2 -translate-x-1/2 top-[91px] section-heading text-[48px] text-white whitespace-nowrap z-10">
        It&apos;s Not Just About Tigers
      </h2>

      {/* Description */}
      <p className="absolute left-1/2 -translate-x-1/2 top-[183px] w-[1010px] text-center font-serif text-[16px] text-white leading-normal z-10">
        Tigers get all the attention (fair enough, they&apos;re magnificent). But India&apos;s wildlife story is so much bigger. There are only about 700 Asiatic lions left in the world — all of them in one forest in Gujarat. And Kaziranga? It&apos;s got more one-horned rhinos than anywhere on Earth. Just saying.
      </p>

      {/* Carousel Container */}
      <div className="absolute top-[297px] left-0 w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {wildlifeData.map((wildlife, index) => (
            <div key={wildlife.id} className="min-w-full flex justify-center gap-[56px] px-[128px]">
              {/* Wildlife Image with curved frame */}
              <div className="w-[692px] h-[461px] overflow-hidden rounded-tl-[9px] rounded-tr-[9px] rounded-br-[9px] rounded-bl-[120px] flex-shrink-0">
                <Image
                  alt={wildlife.title}
                  className="w-full h-full object-cover"
                  src={wildlife.image}
                  width={692}
                  height={461}
                />
              </div>

              {/* Info Card */}
              <div className="bg-[rgba(237,228,209,0.14)] rounded-[9px] w-[418px] h-[444px] relative flex-shrink-0">
                {/* Title */}
                <h3 className="absolute left-1/2 -translate-x-1/2 top-[45px] font-serif text-[48px] text-white whitespace-nowrap">
                  {wildlife.title}
                </h3>

                {/* Subtitle */}
                <p className="absolute left-1/2 -translate-x-1/2 top-[130px] w-[328px] text-center font-serif text-[20px] text-white leading-normal">
                  {wildlife.subtitle}
                </p>

                {/* Location */}
                <p className="absolute left-1/2 -translate-x-1/2 top-[220px] font-serif text-[20px] text-white text-center whitespace-nowrap">
                  Location - {wildlife.location}
                </p>

                {/* Population */}
                <p className="absolute left-1/2 -translate-x-1/2 top-[260px] font-serif text-[20px] text-white text-center">
                  Population - {wildlife.population}
                </p>

                {/* Button */}
                <a
                  href="#"
                  className="absolute left-1/2 -translate-x-1/2 top-[332px] bg-[rgba(231,158,35,0.81)] hover:bg-[#e79e23] transition-all text-white font-serif text-[14px] w-[255px] h-[52px] rounded-[9px] underline inline-flex items-center justify-center"
                >
                  Browse Safari Packages
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute left-[1323px] top-[505px] flex gap-2 z-10">
        {currentSlide > 0 && (
          <ArrowButton onClick={prevSlide} direction="left" />
        )}
        {currentSlide < wildlifeData.length - 1 && (
          <ArrowButton onClick={nextSlide} direction="right" />
        )}
        {currentSlide === wildlifeData.length - 1 && (
          <ArrowButton onClick={() => setCurrentSlide(0)} direction="right" />
        )}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {wildlifeData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-[#e79e23]' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
