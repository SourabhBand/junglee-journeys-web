import Image from 'next/image';
import { SVG_ASSETS } from '@/lib/assets';

interface OrnamentDividerProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function OrnamentDivider({ className = '', variant = 'dark' }: OrnamentDividerProps) {
  return (
    <div className={`flex justify-center my-8 ${className}`}>
      <Image
        src={SVG_ASSETS.ornamentDivider}
        alt=""
        width={355}
        height={40}
        className={`${variant === 'light' ? 'invert opacity-60' : 'opacity-100'}`}
        aria-hidden="true"
      />
    </div>
  );
}
