'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale-in';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export function AnimateOnScroll({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.15,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, once]);

  const baseStyles: React.CSSProperties = {
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: `${delay}ms`,
  };

  const hiddenStyles: Record<string, React.CSSProperties> = {
    'fade-up': { opacity: 0, transform: 'translateY(40px)' },
    'fade-in': { opacity: 0, transform: 'none' },
    'fade-left': { opacity: 0, transform: 'translateX(-40px)' },
    'fade-right': { opacity: 0, transform: 'translateX(40px)' },
    'scale-in': { opacity: 0, transform: 'scale(0.92)' },
  };

  const visibleStyles: React.CSSProperties = {
    opacity: 1,
    transform: 'none',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...baseStyles,
        ...(isVisible ? visibleStyles : hiddenStyles[animation]),
      }}
    >
      {children}
    </div>
  );
}
