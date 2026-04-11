import Image from 'next/image';
import Link from 'next/link';
import { IMAGE_ASSETS } from '@/lib/assets';
import { OrnamentDivider } from './OrnamentDivider';

export function Footer() {
  return (
    <footer className="bg-[#081d01] text-[#ede4d1] py-[60px] md:py-[90px]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <OrnamentDivider variant="light" className="mb-[40px] md:mb-[60px]" />
        <div className="flex flex-col items-center mb-10">
          <Link href="/">
            <Image
              src={IMAGE_ASSETS.logo}
              alt="Junglee Journeys"
              width={51}
              height={72}
              className="object-contain mb-8"
            />
          </Link>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-serif text-[14px]">
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
        <p className="font-serif text-[12px] text-[#ede4d1]/60">
          &copy; {new Date().getFullYear()} JUNGLEE JOURNEYS. ALL WILDLIFE SIGHTINGS ARE
          SUBJECT TO THE WHIMS OF NATURE.
        </p>
      </div>
    </footer>
  );
}
