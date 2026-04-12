import Image from 'next/image';
import { SVG_ASSETS } from '@/lib/assets';

interface ArrowButtonProps {
  onClick?: () => void;
  className?: string;
  variant?: 'light' | 'dark';
}

export function ArrowButton({ onClick, className = '', variant = 'light' }: ArrowButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative w-[40px] h-[40px] flex items-center justify-center hover:scale-110 transition-transform ${className}`}
      aria-label="Next"
    >
      {/* Circle background */}
      <Image
        src={SVG_ASSETS.arrowCircle}
        alt=""
        width={40}
        height={40}
        className="absolute inset-0"
        style={{
          // Apply CSS custom property for fill color based on variant
          ['--fill-0' as string]: variant === 'dark' ? '#081d01' : 'rgba(237, 228, 209, 0.29)',
        }}
        aria-hidden="true"
      />
      {/* Arrow icon */}
      <Image
        src={SVG_ASSETS.arrowIcon}
        alt=""
        width={11}
        height={11}
        className="relative z-10"
        style={{
          ['--stroke-0' as string]: variant === 'dark' ? '#ede4d1' : 'white',
        }}
        aria-hidden="true"
      />
    </button>
  );
}
