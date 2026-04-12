import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { OrnamentDivider, Header, Footer } from "@/components";
import { IMAGE_ASSETS, SVG_ASSETS } from "@/lib/assets";
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
      {/* ===== SECTION 1: HEADER + HERO ===== */}
      <Header transparent />

      <section className="relative h-[100vh] min-h-[700px] max-h-[960px] flex flex-col items-center justify-center text-center text-white overflow-hidden">
        {/* SEO H1 - visually hidden */}
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
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center px-6">
          {/* Italic tagline */}
          <p className="font-serif italic text-[24px] md:text-[29px] mb-6 tracking-wide leading-normal opacity-90">
            First-hand wilderness
          </p>

          {/* JUNGLEE JOURNEYS wordmark SVGs */}
          <div className="flex flex-col items-center mb-10 md:mb-12">
            <Image
              src="/images/hero-title-union.svg"
              alt="Junglee"
              width={616}
              height={95}
              className="mb-2 w-[320px] md:w-[500px] lg:w-[616px] h-auto"
            />
            <Image
              src="/images/hero-title-journeys.svg"
              alt="Journeys"
              width={661}
              height={94}
              className="w-[350px] md:w-[540px] lg:w-[661px] h-auto"
            />
          </div>

          {/* Single primary CTA */}
          <Link
            className="bg-[rgba(231,158,35,0.81)] hover:bg-[#e79e23] transition-all text-white w-[255px] h-[52px] rounded-[9px] text-[16px] font-serif inline-flex items-center justify-center hover:shadow-lg hover:shadow-[#e79e23]/20"
            href="/enquire/"
          >
            Plan Your Safari
          </Link>
        </div>

        {/* Stats strip at bottom with frosted glass */}
        <div className="absolute bottom-[40px] md:bottom-[56px] left-0 right-0 z-10">
          <div className="flex justify-center gap-10 md:gap-[128px]">
            {[
              { value: "70%", label: "Repeat Guests" },
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "Safaris" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="w-[56px] h-[56px] md:w-[60px] md:h-[60px] rounded-full border border-white/30 backdrop-blur-sm bg-white/5 flex items-center justify-center mb-2">
                  <span className="font-serif text-[15px] md:text-[16px] font-bold">{stat.value}</span>
                </div>
                <span className="font-serif text-[13px] md:text-[15px] tracking-wide opacity-80">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: WHY TRAVEL WITH US ===== */}
      <section className="py-[80px] md:py-[100px] bg-[#ede4d1]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Merged intro paragraph from the hero subhead */}
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <p className="font-serif text-[16px] md:text-[17px] leading-[170%] text-[#081d01]">
                We have spent fifteen years arranging <strong>tiger safari in India</strong> trips for those people. Your own jeep, a naturalist who knows the local tigress by name (and her two cubs from last March), and lodges we have personally slept in often enough to have opinions about the breakfast. Permits, airport transfers, and the 4 AM wake-up call: all of it sits with us, handled by people who do this every week and have very little patience for it going wrong. Your only job is to turn up with socks and a camera.
              </p>
            </div>
          </AnimateOnScroll>

          <OrnamentDivider />

          <AnimateOnScroll animation="fade-up">
            <h2 className="text-center section-heading text-[36px] md:text-[48px] mb-10 md:mb-12">
              Why Travel With Us?
            </h2>
          </AnimateOnScroll>

          {/* Intro paragraphs */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
              <p className="font-serif text-[16px] leading-[160%] text-[#081d01] mb-4">
                Most of our guests arrive with a version of the same problem. They have between five and ten days, they have always wanted to see a tiger in the wild, and they have no idea which of India&apos;s fifty-odd tiger reserves to actually go to. They have read four blog posts that all say different things and looked at three TripAdvisor pages where the photographs are clearly from a different planet. They are slightly suspicious of how much this is going to cost. They are also slightly worried that if they pick wrong, they will have spent the budget on a forest with no tigers in it.
              </p>
              <p className="font-serif text-[16px] leading-[160%] text-[#081d01]">
                We have planned hundreds of these trips. The boring middle (which park, which dates, which lodge, which guide, which permits, which 4 AM pickup) is the part we have completely solved. The exciting part is the part we hand back to you on the day you arrive.
              </p>
            </div>
          </AnimateOnScroll>

          {/* 4 pill-shaped feature cards in a row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[50px] max-w-[1280px] mx-auto">
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
                delay: 100,
              },
              {
                heading: "Lodges We Have Slept In",
                sub: "We do not recommend lodges from photographs.",
                body: "Every property on our shortlist is one we have stayed at, eaten at, complained about, and decided was good enough to send our guests to.",
                rotated: true,
                delay: 200,
              },
              {
                heading: "Nothing to Figure Out",
                sub: "Permits, airport transfers, the 4 AM wake-up call.",
                body: "Your job is to turn up at the airport. Our job is everything in between.",
                rotated: true,
                delay: 300,
              },
            ].map((card) => (
              <AnimateOnScroll key={card.heading} animation="fade-up" delay={card.delay}>
                <div
                  className={`pill-card bg-[#081d01] text-white px-[28px] lg:px-[36px] pt-[36px] lg:pt-[42px] pb-[28px] lg:pb-[36px] min-h-[260px] lg:min-h-[290px] flex flex-col ${
                    card.rotated
                      ? 'rounded-tl-[120px] rounded-tr-[9px] rounded-br-[120px] rounded-bl-[9px]'
                      : 'rounded-tl-[9px] rounded-tr-[120px] rounded-br-[9px] rounded-bl-[120px]'
                  }`}
                >
                  <h3 className="font-serif font-bold text-[20px] lg:text-[24px] text-[#ede4d1] mb-2">
                    {card.heading}
                  </h3>
                  <p className="font-serif font-bold text-[13px] lg:text-[14px] text-white/90 mb-3 leading-snug">
                    {card.sub}
                  </p>
                  <p className="font-serif text-[12px] lg:text-[13px] text-white/75 leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: INDIA'S PREMIER TIGER RESERVES ===== */}
      <section className="py-[80px] md:py-[100px] bg-[#081d01] text-[#ede4d1]">
        <div className="max-w-7xl mx-auto px-6">
          <OrnamentDivider variant="light" />

          <AnimateOnScroll animation="fade-up">
            <h2 className="text-center section-heading text-[36px] md:text-[48px] mb-10 md:mb-12 text-[#ede4d1]">
              India&apos;s Premier Tiger Reserves
            </h2>
          </AnimateOnScroll>

          {/* Intro text */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <p className="font-serif text-[16px] text-white leading-[160%]">
                India holds more than half the world&apos;s wild tigers, which is the kind of statistic that sounds invented until you visit and realise it is, slightly improbably, true. The country gazettes more than fifty official tiger reserves, and we operate in eleven of them. Each one is a completely different argument for going. Four to start with.
              </p>
            </div>
          </AnimateOnScroll>

          {/* 4 curved-frame destination images in a row */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 mb-0 overflow-x-auto pb-4">
              {[
                { src: IMAGE_ASSETS.kanhaNationalPark, alt: "Kanha National Park", slug: "kanha" },
                { src: IMAGE_ASSETS.tadobaTigerReserve, alt: "Tadoba Tiger Reserve", slug: "tadoba" },
                { src: IMAGE_ASSETS.ranthamboreNationalPark, alt: "Ranthambore National Park", slug: "ranthambore" },
                { src: IMAGE_ASSETS.bandhavgarhNationalPark, alt: "Bandhavgarh National Park", slug: "bandhavgarh" },
              ].map((dest, i) => (
                <Link
                  key={dest.slug}
                  href={`/destination/${dest.slug}/`}
                  className="group flex-shrink-0 mx-auto sm:mx-0"
                >
                  <div className="curved-image-frame w-[240px] md:w-[272px] h-[350px] md:h-[400px] overflow-hidden relative">
                    <Image
                      src={dest.src}
                      alt={dest.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Hover overlay with park name */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                      <span className="font-serif text-white text-[16px] font-bold tracking-wide">
                        {dest.alt}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </AnimateOnScroll>

          {/* White info strip below images */}
          <div className="bg-white rounded-[9px] mt-8 md:mt-12 py-10 md:py-16 px-6 md:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {[
                {
                  name: "Kanha National Park",
                  slug: "kanha",
                  desc: "Mowgli's forest. Sal trees in straight ranks, meadows wide enough that you forget what you came here for, and a tiger population that has held steady for two decades.",
                },
                {
                  name: "Tadoba Tiger Reserve",
                  slug: "tadoba",
                  desc: "The closest tiger reserve to Mumbai and Pune. Bold tigers, open terrain, and sighting rates that quietly embarrass the more famous parks. Three hours from Nagpur airport.",
                },
                {
                  name: "Ranthambore National Park",
                  slug: "ranthambore",
                  desc: "The most photographed tigers on Earth, walking through the ruins of a tenth-century fort. Five hours from Delhi by road. The park is iconic for a reason.",
                },
                {
                  name: "Bandhavgarh National Park",
                  slug: "bandhavgarh",
                  desc: "The highest tiger density in India. Most of our guests see one before lunch on day one. If your priority is the odds, this is where you go.",
                },
              ].map((park, i) => (
                <AnimateOnScroll key={park.slug} animation="fade-up" delay={i * 100}>
                  <div className="text-center lg:text-left">
                    <h3 className="font-serif font-bold text-[20px] md:text-[24px] text-[#081d01] mb-3">
                      {park.name}
                    </h3>
                    <p className="font-serif text-[15px] md:text-[16px] text-[#081d01]/80 leading-[155%] mb-5">
                      {park.desc}
                    </p>
                    <Link
                      href={`/destination/${park.slug}/`}
                      className="bg-[#081d01] text-white font-serif text-[15px] inline-flex items-center justify-center w-[180px] md:w-[192px] h-[42px] md:h-[44px] rounded-[9px] hover:bg-[#0d2a05] transition-colors"
                    >
                      Explore {park.name.split(' ')[0]}
                    </Link>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* View all link */}
            <div className="text-center mt-10">
              <Link
                href="/destinations/"
                className="font-serif text-[14px] text-[#081d01] underline underline-offset-4 hover:text-[#e79e23] transition-colors"
              >
                View All 11 Destinations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: TAILORED SAFARI EXPERIENCES (Asymmetric Layout) ===== */}
      <section className="py-[80px] md:py-[100px] bg-[#081d01] text-[#ede4d1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left column: heading, intro, CTA */}
            <AnimateOnScroll animation="fade-left" className="lg:w-[40%] flex flex-col">
              <h2 className="section-heading text-[36px] md:text-[48px] mb-8 text-[#ede4d1]">
                Tailored Safari Experiences
              </h2>
              <p className="font-serif text-[16px] text-white/90 leading-[165%] mb-8">
                The trip we sell you is the trip you actually want, not the trip we wish you would buy. A photographer with a 400mm lens needs a completely different itinerary from a couple celebrating their tenth anniversary. We do not run group departures and we do not sell off-the-shelf packages.
              </p>
              <OrnamentDivider variant="light" className="!justify-start !my-6" />
              <div className="mt-4">
                <Link
                  href="/safaris/"
                  className="bg-[rgba(231,158,35,0.81)] hover:bg-[#e79e23] transition-all text-white w-[255px] h-[52px] rounded-[9px] text-[16px] font-serif inline-flex items-center justify-center hover:shadow-lg hover:shadow-[#e79e23]/20"
                >
                  Browse Safari Packages
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Right column: 2x2 card grid */}
            <div className="lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  heading: "Private Tiger Safaris",
                  href: "/safaris/",
                  sub: "The default for most of our guests.",
                  body: "A private safari India trip with us means your own jeep, your own naturalist, and game drives timed around the actual wildlife activity. No sharing. No rushing.",
                  delay: 0,
                },
                {
                  heading: "Photography Expeditions",
                  href: "/safari/photography-special/",
                  sub: "For photographers who care which hide they are sitting in.",
                  body: "With guides who understand light and animal behaviour at the level you actually need them to. The right waterhole, the right window, the right time of year.",
                  delay: 100,
                },
                {
                  heading: "Weekend Escapes",
                  href: "/safari/ranthambore-weekend/",
                  sub: "Two or three nights in Tadoba, Ranthambore, or Pench.",
                  body: "The kind of weekend that resets a year of city living and has you wondering, on the flight home, whether you can negotiate a Friday off for next month.",
                  delay: 200,
                },
                {
                  heading: "Multi-Park Adventures",
                  href: "/safari/central-india-tiger-trail/",
                  sub: "Seven to fourteen nights across India's best reserves.",
                  body: "Kanha to Bandhavgarh to Pench, or any combination that makes geographical sense. The trip you will still be telling people about a decade later.",
                  delay: 300,
                },
              ].map((card) => (
                <AnimateOnScroll key={card.heading} animation="fade-up" delay={card.delay}>
                  <div>
                    <h3 className="font-serif font-bold text-[20px] md:text-[24px] text-white mb-3">
                      <Link href={card.href} className="hover:text-[#e79e23] transition-colors">
                        {card.heading}
                      </Link>
                    </h3>
                    <div className="bg-[#ede4d1] text-[#081d01] rounded-[9px] p-5 md:p-6 min-h-[180px] md:min-h-[200px] hover:shadow-lg transition-shadow">
                      <p className="font-serif font-bold text-[15px] md:text-[16px] leading-snug mb-2">
                        {card.sub}
                      </p>
                      <p className="font-serif text-[14px] md:text-[15px] leading-[155%] text-[#081d01]/80">
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

      {/* ===== SECTION 5: WHAT OUR GUESTS SAY ===== */}
      <section className="bg-white relative py-[80px] md:py-[100px]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-center section-heading text-[36px] md:text-[48px] text-[#081d01] mb-12 md:mb-16">
              What Our Guests Say
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-12">
            {[
              {
                quote: "Eight tiger sightings in six drives. Our guide Ramesh predicted a tigress at waterhole 3 at 6:40 AM in March. She showed up at 6:38, which I have brought up at every dinner party since. Singinawa Lodge was perfect. Already planning the next one.",
                name: "Sarah and James T., London",
                trip: "Kanha, March 2024",
                delay: 0,
              },
              {
                quote: "Left Mumbai on a Friday night. First tiger by Saturday at 6 AM. Zero hassle anywhere in the chain. Already planning trip three.",
                name: "Rahul M., Mumbai",
                trip: "Tadoba, December 2023",
                delay: 150,
              },
              {
                quote: "Forty-seven keepers in three days. The guide had me positioned twenty minutes before golden hour at the exact waterhole, and he knew which tiger and which direction. My 400mm finally earned its keep, and I have stopped pretending I am taking it on holiday for fun.",
                name: "Priya K., Bangalore",
                trip: "Bandhavgarh, February 2024",
                delay: 300,
              },
            ].map((testimonial, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={testimonial.delay}>
                <div className="testimonial-card bg-[#ede4d1] rounded-[9px] p-7 md:p-8 flex flex-col min-h-[226px]">
                  <p className="font-serif text-[15px] md:text-[16px] text-[#081d01] leading-[165%] mb-auto">
                    {testimonial.quote}
                  </p>
                  <div className="mt-6 pt-5 border-t border-[#081d01]/15">
                    <p className="font-serif font-bold text-[15px] md:text-[16px] text-[#081d01]">
                      {testimonial.name}
                    </p>
                    <p className="font-serif text-[13px] md:text-[14px] text-[#081d01]/60">
                      {testimonial.trip}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Rating line - italic per Figma */}
          <div className="text-center mb-8">
            <p className="font-serif italic text-[14px] text-[#081d01]/60">
              4.9 / 5 from 200+ reviews
            </p>
          </div>

          <OrnamentDivider />
        </div>
      </section>

      {/* ===== SECTION 6: WILDLIFE CAROUSEL ===== */}
      <WildlifeCarousel />

      {/* ===== SECTION 7: READY CTA ===== */}
      <section className="py-[80px] md:py-[100px] lg:py-[138px] bg-[#081d01]" id="plan">
        <div className="max-w-[1184px] mx-auto px-6">
          <AnimateOnScroll animation="scale-in">
            <div className="bg-white rounded-[9px] py-[50px] md:py-[80px] px-[24px] md:px-[60px]">
              <h2 className="text-center section-heading text-[40px] md:text-[48px] text-[#081d01] mb-4">
                Ready?
              </h2>
              <p className="text-center font-serif text-[15px] md:text-[16px] text-[#081d01]/80 max-w-[640px] mx-auto mb-12 md:mb-16 leading-[165%]">
                The permits are limited and the good lodges book out earlier than you expect, so the sooner you tell us your dates the more options we can give you. The rest is on us.
              </p>

              {/* 3-step process with connecting line */}
              <div className="relative steps-connector mb-12 md:mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
                  {[
                    { num: "1", heading: "Tell us your dates", body: "Your dates and the cities you are flying in and out of." },
                    { num: "2", heading: "We build the itinerary", body: "An itemised written quote within 24 hours." },
                    { num: "3", heading: "You confirm and go", body: "We handle everything else." },
                  ].map((step, i) => (
                    <AnimateOnScroll key={step.num} animation="fade-up" delay={i * 150}>
                      <div className="flex flex-col items-center text-center relative z-10">
                        <div className="w-[52px] h-[52px] bg-[#ede4d1] rounded-full flex items-center justify-center mb-5">
                          <span className="font-serif text-[28px] text-[#081d01]">{step.num}</span>
                        </div>
                        <h4 className="font-serif font-bold text-[17px] md:text-[18px] text-[#081d01] mb-3">
                          {step.heading}
                        </h4>
                        <p className="font-serif text-[15px] md:text-[16px] text-[#081d01]/70 max-w-[300px]">
                          {step.body}
                        </p>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link
                  className="bg-[#e79e23] hover:bg-[rgba(231,158,35,0.81)] transition-all text-white w-[255px] h-[52px] rounded-[9px] text-[16px] font-serif inline-flex items-center justify-center hover:shadow-lg hover:shadow-[#e79e23]/20"
                  href="/enquire/"
                >
                  Plan Your Safari
                </Link>
                <Link
                  className="border border-[#081d01]/20 text-[#081d01] hover:bg-[#081d01] hover:text-white transition-all w-[255px] h-[52px] rounded-[9px] text-[16px] font-serif inline-flex items-center justify-center"
                  href="https://wa.me/"
                >
                  WhatsApp Us
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== FLOATING WHATSAPP BUTTON ===== */}
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
