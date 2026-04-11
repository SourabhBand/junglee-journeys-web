import type { Metadata } from "next";
import { Outfit, Gelasio } from "next/font/google";
import "./globals.css";

// Outfit - geometric sans-serif for headings (Reform alternative)
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Gelasio - serif font for body text
const gelasio = Gelasio({
  variable: "--font-gelasio",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Junglee Journeys | Luxury Tiger Safaris in India",
  description: "Book your tiger safari in India with expert naturalists. Private safaris, luxury lodges, 95% tiger sighting rate. 15+ years experience. Plan your journey today.",
  keywords: "tiger safari india, wildlife safari, kanha national park, ranthambore safari, tadoba tiger reserve, bandhavgarh safari, luxury safari india",
  authors: [{ name: "Junglee Journeys" }],
  creator: "Junglee Journeys",
  metadataBase: new URL("https://junglee-journeys-web.vercel.app"),
  openGraph: {
    title: "Junglee Journeys | Luxury Tiger Safaris in India",
    description: "Experience India's magnificent wildlife with expert naturalists. Private safaris to Kanha, Tadoba, Ranthambore & more.",
    type: "website",
    siteName: "Junglee Journeys",
  },
  twitter: {
    card: "summary_large_image",
    title: "Junglee Journeys | Luxury Tiger Safaris in India",
    description: "Experience India's magnificent wildlife with expert naturalists.",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${outfit.variable} ${gelasio.variable} antialiased`}
      >
        {children}
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
