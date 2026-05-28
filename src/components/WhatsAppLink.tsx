'use client';

const PHONE = '919370037237';
const MESSAGE = 'Hi, I found Junglee Journeys online and I\'m interested in a wildlife safari. Could you help me plan a trip?';
const WA_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

interface WhatsAppLinkProps {
  className?: string;
  children: React.ReactNode;
  label?: string;
  ariaLabel?: string;
}

export function WhatsAppLink({ className, children, label, ariaLabel }: WhatsAppLinkProps) {
  const handleClick = () => {
    if (typeof window === 'undefined') return;
    const page = label || window.location.pathname;

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'contact_whatsapp', {
        event_category: 'engagement',
        event_label: page,
      });
    }

    navigator.sendBeacon(
      '/api/wa-click',
      JSON.stringify({ page })
    );
  };

  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
