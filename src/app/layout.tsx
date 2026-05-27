import type { Metadata } from "next";
import { Outfit, Gelasio } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { WhatsAppFloat } from "@/components";
import "./globals.css";

// Reform Regular - display font for all headings (H1, H2)
const reform = localFont({
  src: "../fonts/Reform.otf",
  variable: "--font-reform",
  weight: "400",
  display: "swap",
});

// Outfit - geometric sans-serif (utility / ornament use)
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Gelasio - serif font for body text and subheadings (H3)
const gelasio = Gelasio({
  variable: "--font-gelasio",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Junglee Journeys | Luxury Tiger Safaris in India",
  description: "Book your tiger safari in India with expert naturalists. Private safaris, luxury lodges, 95% tiger sighting rate. 10+ years experience. Plan your journey today.",
  authors: [{ name: "Junglee Journeys" }],
  creator: "Junglee Journeys",
  metadataBase: new URL("https://jungleejourneys.com"),
  openGraph: {
    title: "Junglee Journeys | Luxury Tiger Safaris in India",
    description: "Experience India's magnificent wildlife with expert naturalists. Private safaris to Kanha, Tadoba, Ranthambore & more.",
    type: "website",
    siteName: "Junglee Journeys",
    images: [{ url: "/images/hero.jpg", width: 1920, height: 1080 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junglee Journeys | Luxury Tiger Safaris in India",
    description: "Experience India's magnificent wildlife with expert naturalists.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Junglee Journeys",
              "url": "https://jungleejourneys.com",
              "logo": "https://jungleejourneys.com/images/logo-jj.svg",
              "image": "https://jungleejourneys.com/images/hero.jpg",
              "description": "Private tiger safaris across India with expert naturalists. 10+ years experience, 500+ safaris.",
              "telephone": "+919370037237",
              "email": "jungleejourneys@gmail.com",
              "priceRange": "$$$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://instagram.com/jungleejourneys",
                "https://www.facebook.com/share/1CtipyWcQb/",
                "https://themammothproject.org"
              ],
              "knowsAbout": [
                "Tiger Safari India",
                "Wildlife Photography Tours",
                "Indian National Parks",
                "Bengal Tiger Conservation",
                "Luxury Wildlife Tourism"
              ],
              "founder": {
                "@type": "Person",
                "name": "Raviraj Soman",
                "jobTitle": "Founder and Head Naturalist"
              }
            }),
          }}
        />
      </head>
      <body
        className={`${reform.variable} ${outfit.variable} ${gelasio.variable} antialiased`}
      >
        {children}
        <WhatsAppFloat />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1HZ28CBS39"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-1HZ28CBS39');`}
        </Script>
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","wx4tzcwcmr");`}
        </Script>
      </body>
      {/*
        Note: Header and Footer are NOT placed in this layout because the
        homepage uses a transparent header overlaid on the hero image, while
        interior pages use a solid header. Each page imports and renders its
        own Header and Footer to control the variant.
      */}
    </html>
  );
}
