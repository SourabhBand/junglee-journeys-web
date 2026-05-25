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


export function Footer() {
  return (
    <footer className="bg-[#081d01] text-[#ede4d1] pt-[20px] md:pt-[28px] pb-[40px] md:pb-[48px]">
      <div className="max-w-7xl mx-auto px-6">
        <OrnamentDivider variant="light" className="!mt-0 mb-[16px] md:mb-[24px]" />

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
              Private tiger safaris across India. 10 years of first-hand wilderness.
            </p>
            {/* Social media links */}
            <div className="flex gap-5">
              <a
                href="https://instagram.com/jungleejourneys"
                aria-label="Junglee Journeys on Instagram"
                className="text-[#ede4d1]/60 hover:text-[#e79e23] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com/jungleejourneys"
                aria-label="Junglee Journeys on Facebook"
                className="text-[#ede4d1]/60 hover:text-[#e79e23] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="flex flex-col items-start">
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
          <div className="flex flex-col items-start">
            <p className="font-serif font-bold text-[14px] text-[#ede4d1] mb-3">
              Get in Touch
            </p>
            <div className="flex flex-col gap-2.5 font-serif text-[14px] text-[#ede4d1]/80">
              <a
                href="https://wa.me/919370037237"
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
          <p className="font-serif text-[12px] text-[#ede4d1]/60">
            &copy; {new Date().getFullYear()} Junglee Journeys. All wildlife sightings are subject to the whims of nature.
          </p>
        </div>
      </div>
    </footer>
  );
}
