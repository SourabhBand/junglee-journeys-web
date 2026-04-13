'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IMAGE_ASSETS } from '@/lib/assets';

const wildlifeData = [
  {
    id: 'asiatic-lions',
    image: IMAGE_ASSETS.asiaticLion,
    title: 'Asiatic Lions',
    subtitle: 'The last wild Asiatic lions. All 700 of them. One forest. Gir.',
    location: 'Gir National Park',
    population: '700',
    href: '/destination/gir/',
  },
  {
    id: 'one-horned-rhinos',
    image: IMAGE_ASSETS.oneHornedRhino,
    title: 'One-Horned Rhinos',
    subtitle: 'More one-horned rhinos than anywhere else on Earth. Kaziranga is their kingdom.',
    location: 'Kaziranga National Park',
    population: '720',
    href: '/destination/kaziranga/',
  },
  {
    id: 'indian-leopards',
    image: IMAGE_ASSETS.indianLeopard,
    title: 'Leopards',
    subtitle: 'Elusive, adaptable, and thriving. India\'s leopards roam from rocky hills to dense forests.',
    location: 'Bera, Jawai, Satpura',
    population: '1,600',
    href: '/destination/satpura/',
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
          Tigers get all the attention (fair enough, they&apos;re magnificent). But India&apos;s wildlife story is so much bigger. There are only about 700 Asiatic lions left in the world, all of them in one forest in Gujarat. And Kaziranga has more one-horned rhinos than anywhere on Earth.
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
                <h3 className="font-serif font-semibold text-[36px] md:text-[48px] text-white mb-4 transition-all duration-500">
                  {currentWildlife.title}
                </h3>
                <p className="font-serif text-[17px] md:text-[20px] text-white/90 leading-normal mb-8">
                  {currentWildlife.subtitle}
                </p>

                <div className="space-y-3 mb-8">
                  <p className="font-serif text-[16px] md:text-[18px] text-white/80">
                    <span className="text-[#ede4d1]/60">Location</span> &middot; {currentWildlife.location}
                  </p>
                  <p className="font-serif text-[16px] md:text-[18px] text-white/80">
                    <span className="text-[#ede4d1]/60">Population</span> &middot; {currentWildlife.population}
                  </p>
                </div>

                <Link
                  href={currentWildlife.href}
                  className="bg-[rgba(231,158,35,0.81)] hover:bg-[#e79e23] transition-all text-white font-serif text-[14px] md:text-[15px] w-[220px] md:w-[255px] h-[48px] md:h-[52px] rounded-[9px] inline-flex items-center justify-center hover:shadow-lg hover:shadow-[#e79e23]/20"
                >
                  Explore Destination
                </Link>
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
