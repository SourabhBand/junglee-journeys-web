'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IMAGE_ASSETS } from '@/lib/assets';

interface HeaderProps {
  transparent?: boolean;
}

export function Header({ transparent = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={
        transparent
          ? 'absolute top-0 left-0 w-full z-50 text-white pt-8 md:pt-[64px] px-6 md:px-[193px]'
          : 'sticky top-0 left-0 w-full z-50 text-white bg-[#081d01] py-6 px-6 md:px-[193px]'
      }
    >
      <nav className="flex items-center justify-between">
        {/* Desktop left nav */}
        <div className="hidden md:flex gap-8 lg:gap-[80px] font-serif text-[16px]">
          <Link className="hover:text-[#e79e23] transition" href="/about/">
            About
          </Link>
          <Link className="hover:text-[#e79e23] transition" href="/destinations/">
            Destinations
          </Link>
          <Link className="hover:text-[#e79e23] transition" href="/safaris/">
            Safaris
          </Link>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>

        {/* Center logo */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0">
          <Link href="/">
            <Image
              src={IMAGE_ASSETS.logo}
              alt="Junglee Journeys"
              width={transparent ? 280 : 120}
              height={transparent ? 395 : 170}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop right nav + Enquire button */}
        <div className="flex items-center gap-6 lg:gap-[80px]">
          <div className="hidden md:flex gap-8 lg:gap-[80px] font-serif text-[16px]">
            <Link className="hover:text-[#e79e23] transition" href="/blog/">
              Blog
            </Link>
            <Link className="hover:text-[#e79e23] transition" href="/contact/">
              Contact
            </Link>
          </div>
          <Link
            href="/enquire/"
            className="bg-[rgba(8,29,1,0.67)] rounded-[9px] w-[120px] md:w-[141px] h-[44px] md:h-[52px] text-[14px] font-serif hover:bg-[#081d01] transition-all flex items-center justify-center"
          >
            Enquire Now
          </Link>
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-[400px] opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-4 font-serif text-[18px] py-4 bg-[#081d01]/90 backdrop-blur-sm rounded-[9px] px-6">
          <Link
            className="hover:text-[#e79e23] transition py-2 border-b border-white/10"
            href="/about/"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            className="hover:text-[#e79e23] transition py-2 border-b border-white/10"
            href="/destinations/"
            onClick={() => setMenuOpen(false)}
          >
            Destinations
          </Link>
          <Link
            className="hover:text-[#e79e23] transition py-2 border-b border-white/10"
            href="/safaris/"
            onClick={() => setMenuOpen(false)}
          >
            Safaris
          </Link>
          <Link
            className="hover:text-[#e79e23] transition py-2 border-b border-white/10"
            href="/blog/"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            className="hover:text-[#e79e23] transition py-2"
            href="/contact/"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
