import Image from 'next/image';
import Link from 'next/link';
import { IMAGE_ASSETS } from '@/lib/assets';
import { OrnamentDivider } from './OrnamentDivider';

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#081d01] text-[#ede4d1] py-[40px] md:py-[52px]">
      <div className="max-w-7xl mx-auto px-6">
        <OrnamentDivider variant="light" className="!mt-0 mb-[20px] md:mb-[28px]" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 mb-8">
          {/* Left: Logo + tagline + social — full width on mobile */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start mb-2 md:mb-0">
            <Link href="/" className="mb-3">
              <Image
                src={IMAGE_ASSETS.logo}
                alt="Junglee Journeys"
                width={220}
                height={124}
                className="object-contain"
              />
            </Link>
            <p className="font-serif text-[13px] text-[#ede4d1]/60 max-w-[240px] text-center md:text-left mb-4 leading-relaxed">
              Private tiger safaris across India. 15 years of first-hand wilderness.
            </p>
            {/* Social media links */}
            <div className="flex gap-5">
              <a
                href="#"
                aria-label="Junglee Journeys on Instagram"
                className="text-[#ede4d1]/40 hover:text-[#e79e23] transition"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="Junglee Journeys on Facebook"
                className="text-[#ede4d1]/40 hover:text-[#e79e23] transition"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Junglee Journeys on YouTube"
                className="text-[#ede4d1]/40 hover:text-[#e79e23] transition"
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="flex flex-col items-center md:items-start">
            <p className="font-serif font-bold text-[14px] text-[#ede4d1] mb-3">
              Explore
            </p>
            <div className="flex flex-col gap-2.5 font-serif text-[14px] text-[#ede4d1]/80">
              <Link className="hover:text-[#e79e23] transition" href="/about/">
                About
              </Link>
              <Link className="hover:text-[#e79e23] transition" href="/destinations/">
                Destinations
              </Link>
              <Link className="hover:text-[#e79e23] transition" href="/safaris/">
                Safaris
              </Link>
              <Link className="hover:text-[#e79e23] transition" href="/blog/">
                Blog
              </Link>
              <Link className="hover:text-[#e79e23] transition" href="/contact/">
                Contact
              </Link>
              <Link className="hover:text-[#e79e23] transition" href="/enquire/">
                Enquire
              </Link>
            </div>
          </div>

          {/* Get in Touch */}
          <div className="flex flex-col items-center md:items-start">
            <p className="font-serif font-bold text-[14px] text-[#ede4d1] mb-3">
              Get in Touch
            </p>
            <div className="flex flex-col gap-2.5 font-serif text-[14px] text-[#ede4d1]/80">
              {/* TODO: replace wa.me/ with the actual WhatsApp number e.g. wa.me/919876543210 */}
              <a
                href="https://wa.me/"
                className="hover:text-[#e79e23] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
              <a
                href="mailto:hello@jungleejourneys.com"
                className="hover:text-[#e79e23] transition"
              >
                hello@jungleejourneys.com
              </a>
              <Link className="hover:text-[#e79e23] transition" href="/enquire/">
                Send an Enquiry
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-[#ede4d1]/10 pt-5 text-center">
          <p className="font-serif text-[12px] text-[#ede4d1]/40">
            &copy; {new Date().getFullYear()} Junglee Journeys. All wildlife sightings are subject to the whims of nature.
          </p>
        </div>
      </div>
    </footer>
  );
}
