import type { Metadata } from "next";
import { Cinzel, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Junglee Journeys | Luxury Tiger Safaris in India",
  description: "Book your tiger safari in India with expert naturalists. Private safaris, luxury lodges, 95% tiger sighting rate. 15+ years experience. Plan your journey today.",
  keywords: "tiger safari india, wildlife safari, kanha national park, ranthambore safari, tadoba tiger reserve, bandhavgarh safari, luxury safari india",
  authors: [{ name: "Junglee Journeys" }],
  openGraph: {
    title: "Junglee Journeys | Luxury Tiger Safaris in India",
    description: "Experience India's magnificent wildlife with expert naturalists. Private safaris to Kanha, Tadoba, Ranthambore & more.",
    type: "website",
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
        className={`${cinzel.variable} ${playfair.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
