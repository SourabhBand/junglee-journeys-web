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

const primaryButtonClass =
  'bg-[#e79e23] hover:bg-[#c8841a] transition-colors text-white font-serif text-[15px] h-[52px] px-8 rounded-[9px] inline-flex items-center justify-center gap-2';

const secondaryButtonClass =
  'border border-[#081d01]/25 hover:border-[#081d01]/60 transition-colors text-[#081d01] font-serif text-[15px] h-[52px] px-8 rounded-[9px] inline-flex items-center justify-center gap-2 bg-white';

interface Submission {
  name: string;
  park: string;
  dates: string;
  adults: string;
  children: string;
  rooms: string;
  safaris: string;
}

function buildEmailBody(s: Submission): string {
  return [
    `Name: ${s.name}`,
    `Park: ${s.park}`,
    `Dates: ${s.dates}`,
    `Adults (above 12): ${s.adults}`,
    `Children (below 12): ${s.children}`,
    `Rooms: ${s.rooms}`,
    `Safaris: ${s.safaris}`,
    '',
    'Sent via the jungleejourneys.com enquiry form.',
  ].join('\n');
}

function buildMailtoUrl(s: Submission): string {
  const subject = `Safari enquiry from ${s.name}`;
  const body = buildEmailBody(s);
  return `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function buildGmailUrl(s: Submission): string {
  const subject = `Safari enquiry from ${s.name}`;
  const body = buildEmailBody(s);
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(RECIPIENT)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function EnquiryForm() {
  const [name, setName] = useState('');
  const [park, setPark] = useState('');
  const [dates, setDates] = useState('');
  const [adults, setAdults] = useState(ADULT_OPTIONS[1]);
  const [children, setChildren] = useState(CHILD_OPTIONS[0]);
  const [rooms, setRooms] = useState(ROOM_OPTIONS[0]);
  const [safaris, setSafaris] = useState(SAFARI_OPTIONS[1]);

  const [submitted, setSubmitted] = useState<Submission | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted({ name, park, dates, adults, children, rooms, safaris });
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!submitted) return;
    const text = `To: ${RECIPIENT}\nSubject: Safari enquiry from ${submitted.name}\n\n${buildEmailBody(submitted)}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard API can fail in some browser contexts; fall back silently.
    }
  };

  const handleReset = () => {
    setSubmitted(null);
    setCopied(false);
  };

  if (submitted) {
    const mailto = buildMailtoUrl(submitted);
    const gmail = buildGmailUrl(submitted);

    return (
      <section
        id="enquiry-form"
        className="max-w-4xl mx-auto px-6 md:px-8 mb-16"
      >
        <div className="bg-[#ede4d1] rounded-[9px] p-8 md:p-12">
          <p className="font-display text-[11px] uppercase tracking-[0.2em] text-[#e79e23] mb-3">
            Enquiry ready to send
          </p>
          <h3 className="font-serif font-semibold text-[22px] md:text-[26px] text-[#081d01] mb-4 leading-tight">
            One last step
          </h3>
          <p className="font-serif text-[15px] md:text-[16px] text-[#081d01]/75 leading-relaxed mb-6">
            Choose one of the options below. Your enquiry is pre-filled with the details you entered, addressed to{' '}
            <a href={`mailto:${RECIPIENT}`} className="text-[#e79e23] underline underline-offset-4">
              {RECIPIENT}
            </a>
            .
          </p>

          <div className="bg-white rounded-[9px] border border-[#081d01]/10 p-5 md:p-6 mb-6">
            <pre className="font-serif text-[13px] md:text-[14px] text-[#081d01]/80 leading-relaxed whitespace-pre-wrap break-words">
{`To: ${RECIPIENT}
Subject: Safari enquiry from ${submitted.name}

${buildEmailBody(submitted)}`}
            </pre>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <a href={mailto} className={primaryButtonClass}>
              Open in mail app
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href={gmail} target="_blank" rel="noopener noreferrer" className={secondaryButtonClass}>
              Open in Gmail
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <button type="button" onClick={handleCopy} className={secondaryButtonClass}>
              {copied ? 'Copied' : 'Copy details'}
            </button>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="font-serif text-[14px] text-[#081d01]/55 hover:text-[#081d01] underline underline-offset-4 mt-6 inline-block"
          >
            Edit details
          </button>
        </div>
      </section>
    );
  }

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

        <div className="mt-8">
          <button type="submit" className={primaryButtonClass}>
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
        </div>
      </form>
    </section>
  );
}
