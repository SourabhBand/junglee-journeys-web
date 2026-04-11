import Image from 'next/image';
import Link from 'next/link';
import { IMAGE_ASSETS } from '@/lib/assets';

interface HeaderProps {
  /**
   * When true, the header sits transparently over a hero image (homepage style).
   * When false, it has a solid forest-green background (interior pages).
   */
  transparent?: boolean;
}

export function Header({ transparent = false }: HeaderProps) {
  return (
    <header
      className={
        transparent
          ? 'absolute top-0 left-0 w-full z-50 text-white pt-8 md:pt-[64px] px-6 md:px-[193px]'
          : 'sticky top-0 left-0 w-full z-50 text-white bg-[#081d01] py-6 px-6 md:px-[193px]'
      }
    >
      <nav className="flex items-center justify-between">
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
    </header>
  );
}
