'use client';

import { useState, useCallback } from 'react';
import { OrnamentDivider } from '@/components';

function ArrowButton({ onClick, direction = 'right' }: { onClick: () => void; direction?: 'left' | 'right' }) {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 md:w-12 md:h-12 bg-[#ede4d1] rounded-full flex items-center justify-center hover:bg-[#e5dfd3] transition-colors ${direction === 'left' ? 'rotate-180' : ''}`}
      aria-label={direction === 'right' ? 'Next testimonial' : 'Previous testimonial'}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12L10 8L6 4" stroke="#081d01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

const testimonials = [
  {
    quote: "Eight tiger sightings in six drives. Our guide Ramesh predicted a tigress at waterhole 3 at 6:40 AM in March. She showed up at 6:38, which I have brought up at every dinner party since. Singinawa Lodge was perfect. Already planning the next one.",
    name: "Sarah and James T.",
    location: "London",
    trip: "Kanha, March 2024",
  },
  {
    quote: "Left Mumbai on a Friday night. First tiger by Saturday at 6 AM. Zero hassle anywhere in the chain. Already planning trip three.",
    name: "Rahul M.",
    location: "Mumbai",
    trip: "Tadoba, December 2023",
  },
  {
    quote: "Forty-seven keepers in three days. The guide had me positioned twenty minutes before golden hour at the exact waterhole, and he knew which tiger and which direction. My 400mm finally earned its keep, and I have stopped pretending I am taking it on holiday for fun.",
    name: "Priya K.",
    location: "Bangalore",
    trip: "Bandhavgarh, February 2024",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent(p => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent(p => (p - 1 + testimonials.length) % testimonials.length), []);
  const t = testimonials[current];

  return (
    <section className="bg-white relative py-[80px] md:py-[120px]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center section-heading text-[32px] md:text-[52px] lg:text-[60px] text-[#081d01] mb-4 tracking-[0.06em]">
          What Our Guests Say
        </h2>
        <p className="text-center font-serif italic text-[13px] text-[#081d01]/40 mb-12 md:mb-16 tracking-wide">
          4.9 / 5 from 200+ reviews
        </p>

        {/* Testimonial card */}
        <div className="max-w-[900px] mx-auto mb-8">
          <div className="testimonial-card bg-[#ede4d1] rounded-[9px] p-8 md:p-12 flex flex-col min-h-[260px]">
            <p className="font-serif text-[16px] md:text-[18px] text-[#081d01]/80 leading-[175%] mb-auto">
              {t.quote}
            </p>
            <div className="mt-8 pt-5 border-t border-[#081d01]/10">
              <p className="font-serif font-bold text-[15px] text-[#081d01]">{t.name}</p>
              <p className="font-serif text-[13px] text-[#081d01]/40 tracking-wide">
                {t.location} &middot; {t.trip}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-12 md:mb-16">
          <ArrowButton onClick={prev} direction="left" />
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-[#e79e23] w-6' : 'bg-[#081d01]/20 hover:bg-[#081d01]/40 w-2.5'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <ArrowButton onClick={next} direction="right" />
        </div>

        <OrnamentDivider />
      </div>
    </section>
  );
}
