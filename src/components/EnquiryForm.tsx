'use client';

import { useState, type FormEvent } from 'react';

const RECIPIENT = 'hello@jungleejourneys.com';

const ADULT_OPTIONS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
const CHILD_OPTIONS = ['0', '1', '2', '3', '4', '5+'];
const ROOM_OPTIONS = ['1', '2', '3', '4', '5+'];
const SAFARI_OPTIONS = ['1', '2', '3', '4', '5', '6', '7', '8+'];

const inputClass =
  'w-full h-[48px] px-4 rounded-[9px] border border-[#081d01]/15 font-serif text-[15px] text-[#081d01] bg-white focus:outline-none focus:border-[#e79e23] transition';

const labelClass =
  'font-display text-[11px] uppercase tracking-[0.2em] text-[#081d01]/55 mb-2 block';

export function EnquiryForm() {
  const [name, setName] = useState('');
  const [park, setPark] = useState('');
  const [dates, setDates] = useState('');
  const [adults, setAdults] = useState(ADULT_OPTIONS[1]);
  const [children, setChildren] = useState(CHILD_OPTIONS[0]);
  const [rooms, setRooms] = useState(ROOM_OPTIONS[0]);
  const [safaris, setSafaris] = useState(SAFARI_OPTIONS[1]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `Safari enquiry from ${name}`;
    const lines = [
      `Name: ${name}`,
      `Park: ${park}`,
      `Dates: ${dates}`,
      `Adults (above 12): ${adults}`,
      `Children (below 12): ${children}`,
      `Rooms: ${rooms}`,
      `Safaris: ${safaris}`,
      '',
      'Sent via the jungleejourneys.com enquiry form.',
    ];
    const body = lines.join('\n');

    const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section
      id="enquiry-form"
      className="max-w-4xl mx-auto px-6 md:px-8 mb-16"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-[#ede4d1] rounded-[9px] p-8 md:p-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
          {/* Name */}
          <div className="md:col-span-2">
            <label htmlFor="enq-name" className={labelClass}>
              Name
            </label>
            <input
              id="enq-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className={inputClass}
            />
          </div>

          {/* Park */}
          <div>
            <label htmlFor="enq-park" className={labelClass}>
              Park
            </label>
            <input
              id="enq-park"
              type="text"
              required
              value={park}
              onChange={(e) => setPark(e.target.value)}
              placeholder="e.g. Tadoba, Kanha, not sure yet"
              className={inputClass}
            />
          </div>

          {/* Dates */}
          <div>
            <label htmlFor="enq-dates" className={labelClass}>
              Dates
            </label>
            <input
              id="enq-dates"
              type="text"
              required
              value={dates}
              onChange={(e) => setDates(e.target.value)}
              placeholder="e.g. 12-16 March 2026, or rough month"
              className={inputClass}
            />
          </div>

          {/* Adults */}
          <div>
            <label htmlFor="enq-adults" className={labelClass}>
              Adults (above 12 yrs)
            </label>
            <select
              id="enq-adults"
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              className={inputClass}
            >
              {ADULT_OPTIONS.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          {/* Children */}
          <div>
            <label htmlFor="enq-children" className={labelClass}>
              Children (below 12 yrs)
            </label>
            <select
              id="enq-children"
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              className={inputClass}
            >
              {CHILD_OPTIONS.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          {/* Rooms */}
          <div>
            <label htmlFor="enq-rooms" className={labelClass}>
              Number of rooms
            </label>
            <select
              id="enq-rooms"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              className={inputClass}
            >
              {ROOM_OPTIONS.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          {/* Safaris */}
          <div>
            <label htmlFor="enq-safaris" className={labelClass}>
              Number of safaris
            </label>
            <select
              id="enq-safaris"
              value={safaris}
              onChange={(e) => setSafaris(e.target.value)}
              className={inputClass}
            >
              {SAFARI_OPTIONS.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <button
            type="submit"
            className="bg-[#e79e23] hover:bg-[#c8841a] transition-colors text-white font-serif text-[15px] h-[52px] px-8 rounded-[9px] inline-flex items-center justify-center gap-2"
          >
            Send Enquiry
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <p className="font-serif text-[13px] text-[#081d01]/55 leading-snug">
            Submitting opens your email client with the details pre-filled. Hit send and we will reply within 24 hours.
          </p>
        </div>
      </form>
    </section>
  );
}
