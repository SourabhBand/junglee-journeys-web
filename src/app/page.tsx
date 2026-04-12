import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { OrnamentDivider, Header, Footer } from "@/components";
import { IMAGE_ASSETS } from "@/lib/assets";
import WildlifeCarousel from "@/components/WildlifeCarousel";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Tiger Safari India | Luxury Wildlife Tours | Junglee Journeys",
  description:
    "Book tiger safaris in India with expert naturalists and luxury lodges. Private tours to Kanha, Tadoba, Ranthambore. 15+ years experience. Enquire now.",
  alternates: { canonical: "https://jungleejourneys.com/" },
  openGraph: {
    title: "Tiger Safari India | Luxury Wildlife Tours | Junglee Journeys",
    description:
      "Book tiger safaris in India with expert naturalists and luxury lodges. Private tours to Kanha, Tadoba, Ranthambore.",
    type: "website",
    siteName: "Junglee Journeys",
  },
};

export default function Home() {
  return (
    <main className="font-body bg-white text-[#081d01] overflow-x-hidden">
      {/* ===== HEADER + HERO ===== */}
      <Header transparent />

      <section className="relative h-[100vh] min-h-[700px] max-h-[960px] flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <h1 className="sr-only">Private Tiger Safaris Across India</h1>

        {/* Hero background with Ken Burns zoom */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            alt="Tiger walking through sal forest at dawn"
            className="absolute inset-0 w-full h-full object-cover ken-burns"
            src={IMAGE_ASSETS.heroTiger}
            fill
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center px-6">
          <p className="font-serif italic text-[22px] md:text-[29px] mb-6 tracking-wide leading-normal opacity-90">
            First-hand wilderness
          </p>

          <div className="flex flex-col items-center mb-10 md:mb-12">
            <Image
              src="/images/hero-title-union.svg"
              alt="Junglee"
              width={616}
              height={95}
              className="mb-2 w-[280px] md:w-[460px] lg:w-[580px] h-auto"
            />
            <Image
              src="/images/hero-title-journeys.svg"
              alt="Journeys"
              width={661}
              height={94}
              className="w-[300px] md:w-[500px] lg:w-[620px] h-auto"
            />
          </div>

          <Link
            className="bg-[rgba(231,158,35,0.81)] hover:bg-[#e79e23] transition-all text-white w-[240px] h-[52px] rounded-[9px] text-[16px] font-serif inline-flex items-center justify-center hover:shadow-lg hover:shadow-[#e79e23]/25"
            href="/enquire/"
          >
            Plan Your Safari
          </Link>
        </div>

        {/* Stats strip */}
        <div className="absolute bottom-[36px] md:bottom-[52px] left-0 right-0 z-10">
          <div className="flex justify-center gap-12 md:gap-[140px]">
            {[
              { value: "70%", label: "Repeat Guests" },
              { value: "15+", label: "Years" },
              { value: "500+", label: "Safaris" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="w-[52px] h-[52px] md:w-[58px] md:h-[58px] rounded-full border border-white/25 backdrop-blur-sm bg-white/5 flex items-center justify-center mb-2">
                  <span className="font-serif text-[14px] md:text-[15px] font-bold tracking-wide">{stat.value}</span>
                </div>
                <span className="font-serif text-[11px] md:text-[13px] tracking-[0.15em] uppercase opacity-70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EDITORIAL INTRO + WHY TRAVEL WITH US ===== */}
      <section className="bg-[#ede4d1] relative">
        {/* Pull-quote intro */}
        <div className="pt-[80px] md:pt-[120px] pb-[40px] md:pb-[60px] px-6">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-[900px] mx-auto text-center">
              <p className="pull-quote text-balance">
                We have spent fifteen years arranging <strong>tiger safari in India</strong> trips for those people. Your own jeep, a naturalist who knows the local tigress by name, and lodges we have personally slept in often enough to have opinions about the breakfast. Your only job is to turn up with socks and a camera.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll animation="fade-in">
          <OrnamentDivider className="!my-4" />
        </AnimateOnScroll>

        {/* Section heading */}
        <div className="pt-[30px] md:pt-[50px] pb-[30px] md:pb-[40px] px-6">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-center section-heading text-[32px] md:text-[52px] lg:text-[60px] tracking-[0.06em]">
              Why Travel With Us
            </h2>
          </AnimateOnScroll>
        </div>

        {/* Supporting text - lighter, secondary */}
        <AnimateOnScroll animation="fade-up" delay={100}>
          <div className="max-w-[720px] mx-auto text-center px-6 pb-[50px] md:pb-[70px]">
            <p className="font-serif text-[14px] md:text-[15px] leading-[185%] text-[#081d01]/55">
              Most of our guests arrive with a version of the same problem. They have between five and ten days, they have always wanted to see a tiger in the wild, and they have no idea which of India&apos;s fifty-odd tiger reserves to actually go to. We have planned hundreds of these trips. The boring middle is the part we have completely solved.
            </p>
          </div>
        </AnimateOnScroll>

        {/* 4 pill-shaped feature cards */}
        <div className="max-w-[1280px] mx-auto px-6 pb-[80px] md:pb-[120px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
            {[
              {
                heading: "Your Own Jeep",
                sub: "No second jeep behind you. No third jeep in front.",
                body: "No strangers debating camera angles while a tigress walks past. The vehicle is yours, the pace is yours, the only person on the radio is your guide.",
                rotated: false,
                delay: 0,
              },
              {
                heading: "Real Naturalists",
                sub: "Ten or fifteen years tracking these tigers.",
                body: "They know which tigress uses which waterhole at 6:40 AM in March. They notice the alarm call you missed. The difference is not subtle.",
                rotated: false,
                delay: 80,
              },
              {
                heading: "Lodges We Have Slept In",
                sub: "We do not recommend lodges from photographs.",
                body: "Every property on our shortlist is one we have stayed at, eaten at, complained about, and decided was good enough to send our guests to.",
                rotated: true,
                delay: 160,
              },
              {
                heading: "Nothing to Figure Out",
                sub: "Permits, airport transfers, the 4 AM wake-up call.",
                body: "Your job is to turn up at the airport. Our job is everything in between.",
                rotated: true,
                delay: 240,
              },
            ].map((card) => (
              <AnimateOnScroll key={card.heading} animation="fade-up" delay={card.delay}>
                <div
                  className={`pill-card bg-[#081d01] text-white px-[28px] lg:px-[36px] pt-[32px] lg:pt-[42px] pb-[28px] lg:pb-[36px] min-h-[280px] lg:min-h-[290px] flex flex-col ${
                    card.rotated
                      ? 'rounded-tl-[120px] rounded-tr-[9px] rounded-br-[120px] rounded-bl-[9px]'
                      : 'rounded-tl-[9px] rounded-tr-[120px] rounded-br-[9px] rounded-bl-[120px]'
                  }`}
                >
                  <h3 className="font-serif font-bold text-[20px] lg:text-[24px] text-[#ede4d1] mb-2 leading-tight">
                    {card.heading}
                  </h3>
                  <p className="font-serif font-bold text-[12px] lg:text-[14px] text-white/80 mb-3 leading-snug">
                    {card.sub}
                  </p>
                  <p className="font-serif text-[12px] lg:text-[13px] text-white/55 leading-relaxed mt-auto">
                    {card.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDIA'S PREMIER TIGER RESERVES ===== */}
      <section className="pt-[60px] md:pt-[100px] pb-[80px] md:pb-[120px] bg-[#081d01] text-[#ede4d1] grain-overlay atmospheric-glow">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-center section-heading text-[32px] md:text-[52px] lg:text-[60px] mb-6 md:mb-8 text-[#ede4d1] tracking-[0.06em]">
              Tiger Reserves
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={80}>
            <div className="max-w-[600px] mx-auto text-center mb-12 md:mb-16">
              <p className="font-serif text-[14px] md:text-[15px] text-white/50 leading-[180%]">
                India holds more than half the world&apos;s wild tigers. We operate in eleven reserves. Each one is a completely different argument for going.
              </p>
            </div>
          </AnimateOnScroll>

          {/* 4 curved-frame destination images */}
          <AnimateOnScroll animation="fade-up" delay={150}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 lg:gap-8 mb-0">
              {[
                { src: IMAGE_ASSETS.kanhaNationalPark, alt: "Kanha National Park", slug: "kanha" },
                { src: IMAGE_ASSETS.tadobaTigerReserve, alt: "Tadoba Tiger Reserve", slug: "tadoba" },
                { src: IMAGE_ASSETS.ranthamboreNationalPark, alt: "Ranthambore National Park", slug: "ranthambore" },
                { src: IMAGE_ASSETS.bandhavgarhNationalPark, alt: "Bandhavgarh National Park", slug: "bandhavgarh" },
              ].map((dest) => (
                <Link
                  key={dest.slug}
                  href={`/destination/${dest.slug}/`}
                  className="group flex-shrink-0 mx-auto sm:mx-0"
                >
                  <div className="curved-image-frame w-[220px] md:w-[260px] lg:w-[272px] h-[320px] md:h-[370px] lg:h-[400px] overflow-hidden relative">
                    <Image
                      src={dest.src}
                      alt={dest.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 272px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                      <span className="font-serif text-white text-[15px] font-bold tracking-wide">
                        {dest.alt}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </AnimateOnScroll>

          {/* White info strip */}
          <div className="bg-white rounded-[9px] mt-8 md:mt-14 py-10 md:py-14 px-6 md:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
              {[
                {
                  name: "Kanha",
                  slug: "kanha",
                  desc: "Mowgli's forest. Sal trees, wide meadows, and a tiger population that has held steady for two decades.",
                },
                {
                  name: "Tadoba",
                  slug: "tadoba",
                  desc: "Closest tiger reserve to Mumbai. Bold tigers, open terrain, sighting rates that embarrass the famous parks.",
                },
                {
                  name: "Ranthambore",
                  slug: "ranthambore",
                  desc: "The most photographed tigers on Earth, walking through tenth-century fort ruins in golden hour.",
                },
                {
                  name: "Bandhavgarh",
                  slug: "bandhavgarh",
                  desc: "Highest tiger density in India. Most guests see one before lunch on day one.",
                },
              ].map((park, i) => (
                <AnimateOnScroll key={park.slug} animation="fade-up" delay={i * 80}>
                  <div className="text-center lg:text-left">
                    <h3 className="font-serif font-bold text-[20px] md:text-[22px] text-[#081d01] mb-2">
                      {park.name}
                    </h3>
                    <p className="font-serif text-[13px] md:text-[14px] text-[#081d01]/60 leading-[165%] mb-4 line-clamp-3">
                      {park.desc}
                    </p>
                    <Link
                      href={`/destination/${park.slug}/`}
                      className="bg-[#081d01] text-white font-serif text-[13px] inline-flex items-center justify-center px-6 h-[38px] md:h-[40px] rounded-[9px] hover:bg-[#0d2a05] transition-colors tracking-wide"
                    >
                      Explore
                    </Link>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/destinations/"
                className="font-serif text-[13px] text-[#081d01]/50 hover:text-[#e79e23] transition-colors tracking-[0.08em] uppercase"
              >
                View All 11 Destinations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TAILORED SAFARI EXPERIENCES (Asymmetric) ===== */}
      <section className="py-[80px] md:py-[120px] bg-[#081d01] text-[#ede4d1] grain-overlay relative">
        {/* Gold rule divider at top */}
        <div className="flex justify-center mb-[60px] md:mb-[80px] relative z-10">
          <hr className="gold-rule-wide" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left column */}
            <AnimateOnScroll animation="fade-left" className="lg:w-[38%] flex flex-col">
              <h2 className="section-heading text-[32px] md:text-[48px] lg:text-[56px] mb-8 text-[#ede4d1] tracking-[0.06em] leading-[1.05]">
                Tailored Safari Experiences
              </h2>
              <p className="font-serif text-[15px] text-white/50 leading-[180%] mb-8">
                The trip we sell you is the trip you actually want. A photographer needs a completely different itinerary from a couple celebrating their tenth anniversary. We do not run group departures.
              </p>
              <hr className="gold-rule mb-8" />
              <div className="mt-auto">
                <Link
                  href="/safaris/"
                  className="bg-[rgba(231,158,35,0.81)] hover:bg-[#e79e23] transition-all text-white w-[220px] h-[48px] rounded-[9px] text-[15px] font-serif inline-flex items-center justify-center hover:shadow-lg hover:shadow-[#e79e23]/20"
                >
                  Browse Packages
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Right column: 2x2 card grid */}
            <div className="lg:w-[58%] grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  heading: "Private Tiger Safaris",
                  href: "/safaris/",
                  sub: "The default for most of our guests.",
                  body: "Your own jeep, your own naturalist, and game drives timed around actual wildlife activity. No sharing.",
                  delay: 0,
                },
                {
                  heading: "Photography Expeditions",
                  href: "/safari/photography-special/",
                  sub: "For photographers who care which hide they sit in.",
                  body: "Guides who understand light and animal behaviour at the level you actually need. The right waterhole, the right window.",
                  delay: 80,
                },
                {
                  heading: "Weekend Escapes",
                  href: "/safari/ranthambore-weekend/",
                  sub: "Two or three nights. Tadoba, Ranthambore, or Pench.",
                  body: "The kind of weekend that resets a year of city living.",
                  delay: 160,
                },
                {
                  heading: "Multi-Park Adventures",
                  href: "/safari/central-india-tiger-trail/",
                  sub: "Seven to fourteen nights across India's best reserves.",
                  body: "The trip you will still be telling people about a decade later.",
                  delay: 240,
                },
              ].map((card) => (
                <AnimateOnScroll key={card.heading} animation="fade-up" delay={card.delay}>
                  <div>
                    <h3 className="font-serif font-bold text-[18px] md:text-[20px] text-white/90 mb-3">
                      <Link href={card.href} className="hover:text-[#e79e23] transition-colors">
                        {card.heading}
                      </Link>
                    </h3>
                    <div className="safari-card bg-[#ede4d1] text-[#081d01] rounded-[9px] p-5 md:p-6">
                      <p className="font-serif font-bold text-[13px] md:text-[14px] leading-snug mb-2 text-[#081d01]/80">
                        {card.sub}
                      </p>
                      <p className="font-serif text-[12px] md:text-[13px] leading-[170%] text-[#081d01]/55">
                        {card.body}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT OUR GUESTS SAY ===== */}
      <section className="bg-white relative py-[80px] md:py-[120px]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-center section-heading text-[32px] md:text-[52px] lg:text-[60px] text-[#081d01] mb-4 tracking-[0.06em]">
              What Our Guests Say
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in" delay={50}>
            <p className="text-center font-serif italic text-[13px] text-[#081d01]/40 mb-12 md:mb-16 tracking-wide">
              4.9 / 5 from 200+ reviews
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {[
              {
                quote: "Eight tiger sightings in six drives. Our guide Ramesh predicted a tigress at waterhole 3 at 6:40 AM in March. She showed up at 6:38, which I have brought up at every dinner party since.",
                name: "Sarah and James T.",
                location: "London",
                trip: "Kanha, March 2024",
                delay: 0,
              },
              {
                quote: "Left Mumbai on a Friday night. First tiger by Saturday at 6 AM. Zero hassle anywhere in the chain. Already planning trip three.",
                name: "Rahul M.",
                location: "Mumbai",
                trip: "Tadoba, December 2023",
                delay: 120,
              },
              {
                quote: "Forty-seven keepers in three days. The guide had me positioned twenty minutes before golden hour at the exact waterhole. My 400mm finally earned its keep.",
                name: "Priya K.",
                location: "Bangalore",
                trip: "Bandhavgarh, February 2024",
                delay: 240,
              },
            ].map((testimonial, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={testimonial.delay}>
                <div className="testimonial-card bg-[#ede4d1] rounded-[9px] p-7 md:p-8 flex flex-col min-h-[220px]">
                  <p className="font-serif text-[14px] md:text-[15px] text-[#081d01]/80 leading-[175%] mb-auto">
                    {testimonial.quote}
                  </p>
                  <div className="mt-6 pt-4 border-t border-[#081d01]/10">
                    <p className="font-serif font-bold text-[14px] text-[#081d01]">
                      {testimonial.name}
                    </p>
                    <p className="font-serif text-[12px] text-[#081d01]/40 tracking-wide">
                      {testimonial.location} &middot; {testimonial.trip}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <OrnamentDivider />
        </div>
      </section>

      {/* ===== WILDLIFE CAROUSEL ===== */}
      <WildlifeCarousel />

      {/* ===== READY CTA ===== */}
      <section className="py-[80px] md:py-[120px] lg:py-[140px] bg-[#081d01] grain-overlay" id="plan">
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <AnimateOnScroll animation="scale-in">
            <div className="bg-white rounded-[12px] py-[50px] md:py-[70px] px-[24px] md:px-[60px] shadow-2xl shadow-black/20">
              <h2 className="text-center section-heading text-[36px] md:text-[48px] text-[#081d01] mb-3 tracking-[0.06em]">
                Ready?
              </h2>
              <p className="text-center font-serif text-[14px] md:text-[15px] text-[#081d01]/50 max-w-[560px] mx-auto mb-12 md:mb-14 leading-[175%]">
                The permits are limited and the good lodges book out earlier than you expect. Tell us your dates and the rest is on us.
              </p>

              {/* 3-step process */}
              <div className="relative steps-connector mb-12 md:mb-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                  {[
                    { num: "1", heading: "Tell us your dates", body: "Your dates and departure cities." },
                    { num: "2", heading: "We build the itinerary", body: "Itemised quote within 24 hours." },
                    { num: "3", heading: "You confirm and go", body: "We handle everything else." },
                  ].map((step, i) => (
                    <AnimateOnScroll key={step.num} animation="fade-up" delay={i * 120}>
                      <div className="flex flex-col items-center text-center relative z-10">
                        <div className="w-[48px] h-[48px] bg-[#ede4d1] rounded-full flex items-center justify-center mb-4">
                          <span className="font-serif text-[24px] text-[#081d01]">{step.num}</span>
                        </div>
                        <h4 className="font-serif font-bold text-[15px] md:text-[16px] text-[#081d01] mb-2">
                          {step.heading}
                        </h4>
                        <p className="font-serif text-[13px] md:text-[14px] text-[#081d01]/45 max-w-[240px]">
                          {step.body}
                        </p>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                <Link
                  className="bg-[#e79e23] hover:bg-[rgba(231,158,35,0.85)] transition-all text-white w-[220px] h-[48px] rounded-[9px] text-[15px] font-serif inline-flex items-center justify-center"
                  href="/enquire/"
                >
                  Plan Your Safari
                </Link>
                <Link
                  className="border border-[#081d01]/15 text-[#081d01]/60 hover:bg-[#081d01] hover:text-white hover:border-[#081d01] transition-all w-[220px] h-[48px] rounded-[9px] text-[15px] font-serif inline-flex items-center justify-center"
                  href="https://wa.me/"
                >
                  WhatsApp Us
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== FLOATING WHATSAPP ===== */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* ===== FOOTER ===== */}
      <Footer />
    </main>
  );
}
