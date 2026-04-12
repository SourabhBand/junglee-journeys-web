import Image from 'next/image';
import Link from 'next/link';
import { IMAGE_ASSETS } from '@/lib/assets';
import { OrnamentDivider } from './OrnamentDivider';

export function Footer() {
  return (
    <footer className="bg-[#081d01] text-[#ede4d1] py-[60px] md:py-[80px]">
      <div className="max-w-7xl mx-auto px-6">
        <OrnamentDivider variant="light" className="mb-[40px] md:mb-[50px]" />

        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Left: Logo + tagline */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <Image
                src={IMAGE_ASSETS.logo}
                alt="Junglee Journeys"
                width={51}
                height={72}
                className="object-contain mb-4"
              />
            </Link>
            <p className="font-serif text-[14px] text-[#ede4d1]/60 max-w-[280px] text-center md:text-left">
              Private tiger safaris across India. 15 years of first-hand wilderness.
            </p>
          </div>

          {/* Center: Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <p className="font-serif font-bold text-[14px] text-[#ede4d1] mb-4">
              Explore
            </p>
            <div className="flex flex-col gap-3 font-serif text-[14px] text-[#ede4d1]/80">
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

          {/* Right: Contact info */}
          <div className="flex flex-col items-center md:items-start">
            <p className="font-serif font-bold text-[14px] text-[#ede4d1] mb-4">
              Get in Touch
            </p>
            <div className="flex flex-col gap-3 font-serif text-[14px] text-[#ede4d1]/80">
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
        <div className="border-t border-[#ede4d1]/10 pt-6 text-center">
          <p className="font-serif text-[12px] text-[#ede4d1]/40">
            &copy; {new Date().getFullYear()} Junglee Journeys. All wildlife sightings are subject to the whims of nature.
          </p>
        </div>
      </div>
    </footer>
  );
}
