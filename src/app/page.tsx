import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { OrnamentDivider, ArrowButton, Header, Footer } from "@/components";
import { IMAGE_ASSETS } from "@/lib/assets";
import WildlifeCarousel from "@/components/WildlifeCarousel";

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
      {/* ===== SECTION 1: HEADER + HERO (Figma Y: 0-854) ===== */}
      <Header transparent />

      <section className="relative h-[854px] flex flex-col items-center justify-center text-center text-white overflow-hidden">
        {/* Hero background image */}
        <Image
          alt="Tiger walking through sal forest at dawn"
          className="absolute inset-0 w-full h-full object-cover"
          src={IMAGE_ASSETS.heroTiger}
          fill
          priority
        />
        {/* Gradient overlay: top dark, middle light, bottom dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        {/* Beige subtle strip near bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-[rgba(237,228,209,0.18)]" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Italic tagline */}
          <p className="font-serif italic text-[29px] mb-6 tracking-wide leading-normal">
            First-hand wilderness
          </p>

          {/* JUNGLEE JOURNEYS wordmark SVGs */}
          <div className="flex flex-col items-center mb-12">
            <Image
              src="/images/hero-title-union.svg"
              alt="Junglee"
              width={616}
              height={95}
              className="mb-2"
            />
            <Image
              src="/images/hero-title-journeys.svg"
              alt="Journeys"
              width={661}
              height={94}
            />
          </div>

          {/* Gold CTA button */}
          <Link
            className="bg-[rgba(231,158,35,0.81)] hover:bg-[#e79e23] transition-all text-white w-[255px] h-[52px] rounded-[9px] text-[16px] font-serif inline-flex items-center justify-center"
            href="/enquire/"
          >
            Plan Your Safari
          </Link>
        </div>

        {/* Stats strip at bottom */}
        <div className="absolute bottom-[56px] left-0 right-0 z-10">
          <div className="flex justify-center gap-[200px]">
            {[
              { value: "70%", label: "Repeat Guests" },
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "Safaris" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="w-[50px] h-[50px] rounded-full border border-white/30 flex items-center justify-center mb-2">
                  <span className="font-serif text-[15px]">{stat.value}</span>
                </div>
                <span className="font-serif text-[15px]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: WHY TRAVEL WITH US (Figma Y: 854-1754, 900px tall) ===== */}
      <section className="pt-[70px] pb-[80px] bg-[#ede4d1]">
        <div className="max-w-7xl mx-auto px-6">
          <OrnamentDivider />
          <h2 className="text-center section-heading text-[48px] mb-[47px]">
            Why Travel With Us?
          </h2>

          {/* Intro body text */}
          <div className="max-w-[907px] mx-auto text-center mb-[60px]">
            <p className="font-serif text-[16px] leading-[137%] text-[#081d01] mb-4">
              The honest truth is that you can absolutely book a tiger safari in India yourself. People do it all the time. The honest truth is also that it usually goes badly in small, expensive ways: the Forest Department permit portal that crashes on the third attempt, the lodge website that bears no relationship to the actual lodge, the cheerful young man at the front desk who calls himself an expert naturalist and got his certification last Tuesday.
            </p>
            <p className="font-serif text-[16px] leading-[137%] text-[#081d01]">
              We are not here to talk you out of doing this on your own. We are here for the people who decided their holiday was worth doing properly.
            </p>
          </div>

          {/* 4 pill-shaped feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[50px] items-center">
            {/* Card 1 - standard orientation */}
            <div className="flex items-center justify-center">
              <div className="bg-[#081d01] text-white w-[284px] h-[290px] rounded-tl-[9px] rounded-tr-[120px] rounded-br-[9px] rounded-bl-[120px] pt-[42px] px-[36px] text-center flex flex-col items-center justify-start">
                <h3 className="font-serif font-bold text-[#ede4d1] text-[24px] mb-[25px] leading-[107.85%]">
                  Private Safaris
                </h3>
                <p className="font-serif font-bold text-[14px] mb-[1px] leading-[74.25%] w-[215px]">
                  Your vehicle. Your pace. Your moment with the tiger.
                </p>
                <p className="font-serif text-[13px] leading-[98.05%] w-[211px]">
                  No strangers debating camera angles. No compromises on where to go next. Just you, your group, and whatever the jungle decides to reveal.
                </p>
              </div>
            </div>

            {/* Card 2 - standard orientation */}
            <div className="flex items-center justify-center">
              <div className="bg-[#081d01] text-white w-[284px] h-[290px] rounded-tl-[9px] rounded-tr-[120px] rounded-br-[9px] rounded-bl-[120px] pt-[47px] px-[36px] text-center flex flex-col items-center justify-start">
                <h3 className="font-serif font-bold text-[#ede4d1] text-[24px] mb-[14px] leading-[75.33%]">
                  Expert<br />Naturalists
                </h3>
                <p className="font-serif font-bold text-[14px] mb-[5px] leading-[74.25%] w-[215px]">
                  Guides who read the forest like a first language.
                </p>
                <p className="font-serif text-[13px] leading-[98.05%] w-[221px]">
                  They notice the alarm call you missed. They know this tigress&apos;s territory by heart. The difference? You don&apos;t just see wildlife. You understand it.
                </p>
              </div>
            </div>

            {/* Card 3 - rotated orientation */}
            <div className="flex items-center justify-center">
              <div className="bg-[#081d01] text-white w-[284px] h-[290px] rounded-tl-[120px] rounded-tr-[9px] rounded-br-[120px] rounded-bl-[9px] pt-[42px] px-[36px] text-center flex flex-col items-center justify-start">
                <h3 className="font-serif font-bold text-[#ede4d1] text-[24px] mb-[25px] leading-[107.85%]">
                  Luxury Lodges
                </h3>
                <p className="font-serif font-bold text-[14px] mb-[1px] leading-[74.25%] w-[215px]">
                  Where wilderness meets genuine comfort.
                </p>
                <p className="font-serif text-[13px] leading-[98.05%] w-[211px]">
                  We&apos;ve stayed at every lodge we recommend. Some have incredible food. Some have that magical verandah view. All of them let you exhale after a dusty game drive.
                </p>
              </div>
            </div>

            {/* Card 4 - rotated orientation */}
            <div className="flex items-center justify-center">
              <div className="bg-[#081d01] text-white w-[284px] h-[290px] rounded-tl-[120px] rounded-tr-[9px] rounded-br-[120px] rounded-bl-[9px] pt-[47px] px-[36px] text-center flex flex-col items-center justify-start">
                <h3 className="font-serif font-bold text-[#ede4d1] text-[24px] mb-[22px] leading-[74.25%]">
                  Hassle-Free<br />Planning
                </h3>
                <p className="font-serif font-bold text-[14px] mb-[11px] leading-[74.25%] w-[215px]">
                  Permits, transfers, timing &ndash; we&apos;ve got it.
                </p>
                <p className="font-serif text-[13px] leading-[98.05%] w-[211px]">
                  Safari bookings in India can be&hellip; let&apos;s say, bureaucratic. We handle the complexity so your only job is to show up ready for adventure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: INDIA'S PREMIER TIGER RESERVES (Figma Y: 1754-2646) ===== */}
      <section className="py-[100px] bg-[#081d01] text-[#ede4d1]">
        <div className="max-w-7xl mx-auto px-6">
          <OrnamentDivider variant="light" />
          <h2 className="text-center section-heading text-[48px] mb-[51px] text-[#ede4d1]">
            India&apos;s Premier Tiger Reserves
          </h2>

          {/* Intro text */}
          <div className="max-w-[997px] mx-auto text-center mb-[152px] font-serif text-[16px] text-white leading-[136.9%]">
            <p className="mb-4">
              India holds more than half the world&apos;s wild tigers, which is the kind of statistic that sounds invented until you visit and realise it is, slightly improbably, true. Each park offers something completely different.
            </p>
            <p>
              Kanha has those sweeping meadows where tigers stroll in golden light. Ranthambore has ancient forts with tigers lounging in the ruins. Tadoba? Intimate encounters that feel almost too close. Let us help you find the right one for you.
            </p>
          </div>

          {/* 4 destination images in curved frames */}
          <div className="relative flex justify-center gap-8 mb-8">
            <Link href="/destination/kanha/" className="w-[272px] h-[400px] curved-image-frame overflow-hidden block">
              <Image
                alt="Kanha National Park"
                className="w-full h-full object-cover"
                src={IMAGE_ASSETS.kanhaNationalPark}
                width={552}
                height={399}
              />
            </Link>
            <Link href="/destination/tadoba/" className="w-[272px] h-[400px] curved-image-frame overflow-hidden block">
              <Image
                alt="Tadoba Tiger Reserve"
                className="w-full h-full object-cover"
                src={IMAGE_ASSETS.tadobaTigerReserve}
                width={904}
                height={399}
              />
            </Link>
            <Link href="/destination/ranthambore/" className="w-[272px] h-[400px] curved-image-frame overflow-hidden block">
              <Image
                alt="Ranthambore National Park"
                className="w-full h-full object-cover"
                src={IMAGE_ASSETS.ranthamboreNationalPark}
                width={599}
                height={400}
              />
            </Link>
            <Link href="/destination/bandhavgarh/" className="w-[272px] h-[400px] curved-image-frame overflow-hidden block">
              <Image
                alt="Bandhavgarh National Park"
                className="w-full h-full object-cover"
                src={IMAGE_ASSETS.bandhavgarhNationalPark}
                width={605}
                height={404}
              />
            </Link>
            <ArrowButton className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 hidden lg:block" />
          </div>
        </div>

        {/* Destination info cards on white strip */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Kanha */}
              <div className="text-center">
                <h4 className="font-serif font-bold text-[24px] text-[#081d01] mb-4 leading-[111%]">
                  Kanha National<br />Park
                </h4>
                <p className="font-serif text-[16px] text-black leading-[137%] mb-6 w-[268px] mx-auto">
                  The Land of Mowgli. Endless meadows, sal forests, and tiger sightings that feel straight out of a documentary. If you want the classic Indian safari experience, start here.
                </p>
                <Link
                  href="/destination/kanha/"
                  className="bg-[#081d01] text-white font-serif text-[16px] inline-flex items-center justify-center w-[192px] h-[44px] rounded-[9px] hover:bg-[#0d2a05] transition"
                >
                  Explore Kanha
                </Link>
              </div>

              {/* Tadoba */}
              <div className="text-center">
                <h4 className="font-serif font-bold text-[24px] text-[#081d01] mb-4 leading-[111%]">
                  Tadoba Tiger<br />Reserve
                </h4>
                <p className="font-serif text-[16px] text-black leading-[137%] mb-6 w-[268px] mx-auto">
                  Just 8 hours from Mumbai. Tigers here are famously relaxed around vehicles &ndash; we&apos;ve had them walk right past, close enough to hear them breathing. Weekend-friendly and unforgettable.
                </p>
                <Link
                  href="/destination/tadoba/"
                  className="bg-[#081d01] text-white font-serif text-[16px] inline-flex items-center justify-center w-[192px] h-[44px] rounded-[9px] hover:bg-[#0d2a05] transition"
                >
                  Explore Tadoba
                </Link>
              </div>

              {/* Ranthambore */}
              <div className="text-center">
                <h4 className="font-serif font-bold text-[24px] text-[#081d01] mb-4 leading-[111%]">
                  Ranthambore<br />National Park
                </h4>
                <p className="font-serif text-[16px] text-black leading-[137%] mb-6 w-[268px] mx-auto">
                  India&apos;s most photographed tigers. Ancient forts. Lakes reflecting the golden light. It&apos;s dramatic, it&apos;s accessible from Delhi, and there&apos;s a reason everyone knows this one.
                </p>
                <Link
                  href="/destination/ranthambore/"
                  className="bg-[#081d01] text-white font-serif text-[16px] inline-flex items-center justify-center w-[192px] h-[44px] rounded-[9px] hover:bg-[#0d2a05] transition"
                >
                  Explore Ranthambore
                </Link>
              </div>

              {/* Bandhavgarh */}
              <div className="text-center">
                <h4 className="font-serif font-bold text-[24px] text-[#081d01] mb-4 leading-[111%]">
                  Bandhavgarh<br />National Park
                </h4>
                <p className="font-serif text-[16px] text-black leading-[137%] mb-6 w-[240px] mx-auto">
                  Highest tiger density in India. Full stop. If seeing a tiger matters more than anything else, this is where you go. Most guests spot them on day one.
                </p>
                <Link
                  href="/destination/bandhavgarh/"
                  className="bg-[#081d01] text-white font-serif text-[16px] inline-flex items-center justify-center w-[192px] h-[44px] rounded-[9px] hover:bg-[#0d2a05] transition"
                >
                  Explore Bandhavgarh
                </Link>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link className="inline-block font-serif text-[14px] text-[#081d01] underline hover:text-[#e79e23] transition" href="/destinations/">
                View All Destinations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: TAILORED SAFARI EXPERIENCES (Figma Y: 2646-3111, 2-column layout) ===== */}
      <section className="bg-[#081d01] text-[#ede4d1] relative" style={{ minHeight: '793px' }}>
        <div className="max-w-7xl mx-auto px-6 py-[100px]">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left column: title + intro + CTA */}
            <div className="lg:w-[505px] flex-shrink-0">
              <h2 className="section-heading text-[48px] leading-[136.9%] text-[#ede4d1] mb-8">
                Tailored Safari<br />Experiences
              </h2>
              <p className="font-serif text-[16px] text-white leading-[136.9%] mb-4">
                Every wildlife safari in India we plan is different. A photography enthusiast needs completely different timing than a family with kids. Someone looking for a quick jungle safari getaway has different priorities than someone planning the trip of a lifetime.
              </p>
              <p className="font-serif text-[16px] text-white leading-[136.9%] mb-12">
                Tell us what you&apos;re after. We&apos;ll design something that actually fits.
              </p>
              <OrnamentDivider variant="light" className="justify-start mb-12" />
              <Link
                className="bg-[rgba(231,158,35,0.81)] hover:bg-[#e79e23] transition-all text-white w-[255px] h-[52px] rounded-[9px] text-[14px] font-serif inline-flex items-center justify-center underline"
                href="/safaris/"
              >
                Browse Safari Packages
              </Link>
            </div>

            {/* Right column: 2x2 card grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Row 1 */}
              <div>
                <p className="font-serif font-bold text-[24px] text-white leading-[136.9%] mb-2">
                  Private Tiger Safaris
                </p>
                <div className="bg-[#ede4d1] text-[#081d01] rounded-[9px] w-full h-[219px] pt-[22px] px-[30px]">
                  <p className="font-serif font-bold text-[16px] leading-[136.9%]">
                    The classic luxury safari India experience.
                  </p>
                  <p className="font-serif text-[16px] leading-[136.9%] mt-[5px]">
                    Your own vehicle, your own naturalist, game drives timed around the best wildlife activity. No sharing, no rushing, no group dynamics to navigate.
                  </p>
                </div>
              </div>

              <div>
                <p className="font-serif font-bold text-[24px] text-white leading-[136.9%] mb-2">
                  Photography Expeditions
                </p>
                <div className="bg-[#ede4d1] text-[#081d01] rounded-[9px] w-full h-[219px] pt-[22px] px-[30px]">
                  <p className="font-serif font-bold text-[16px] leading-[136.9%]">
                    For those serious about the shot.
                  </p>
                  <p className="font-serif text-[16px] leading-[136.9%] mt-[5px]">
                    We work with photographers who know exactly where to position for the light, which hides offer the best angles, and when patience will pay off.
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div>
                <p className="font-serif font-bold text-[24px] text-white leading-[136.9%] mb-2">
                  Weekend Escapes
                </p>
                <div className="bg-[#ede4d1] text-[#081d01] rounded-[9px] w-full h-[219px] pt-[17px] px-[30px]">
                  <p className="font-serif font-bold text-[16px] leading-[136.9%]">
                    2-3 nights. Maximum wilderness. Minimum logistics.
                  </p>
                  <p className="font-serif text-[16px] leading-[136.9%] mt-[19px]">
                    You&apos;re a professional in Mumbai, Delhi, or Bangalore who needs to disappear into nature for a few days. We make it happen&mdash;every weekend if you want.
                  </p>
                </div>
              </div>

              <div>
                <p className="font-serif font-bold text-[24px] text-white leading-[136.9%] mb-2">
                  Multi-Park Adventures
                </p>
                <div className="bg-[#ede4d1] text-[#081d01] rounded-[9px] w-full h-[219px] pt-[17px] px-[30px]">
                  <p className="font-serif font-bold text-[16px] leading-[136.9%]">
                    7-14 days across India&apos;s finest reserves.
                  </p>
                  <p className="font-serif text-[16px] leading-[136.9%] mt-[19px]">
                    Kanha&apos;s meadows. Bandhavgarh&apos;s density. Satpura&apos;s walking safaris. For the trip you&apos;ll talk about for decades, we connect the best of India&apos;s tiger country.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: WHAT OUR GUESTS SAY (Figma Y: ~3636-3980) ===== */}
      <section className="bg-white relative py-[92px]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center section-heading text-[48px] text-black mb-16">
            What Our Guests Say
          </h2>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1280px] mx-auto">
            {/* Quote icons */}
            {[0, 1, 2].map((i) => (
              <Image
                key={i}
                src="/images/quote-icon.svg"
                alt=""
                width={51}
                height={57}
                className="absolute -top-4 z-10 rotate-180 -scale-y-100"
                style={{ left: `calc(${i * 33.33}% + ${i === 0 ? 10 : i === 1 ? 10 : 10}px)` }}
              />
            ))}

            {/* Card 1 */}
            <div className="bg-[#ede4d1] rounded-[9px] w-full h-[226px] relative pt-[42px] px-[24px]">
              <p className="font-serif text-[16px] text-black leading-normal">
                An absolutely magical experience. We saw four different tigers in Bandhavgarh, and our naturalist&apos;s knowledge made every sighting special. The lodge was stunning &ndash; this was the trip of a lifetime.
              </p>
              <div className="absolute left-[24px] bottom-[16px]">
                <p className="font-serif font-bold text-[16px] text-black leading-normal">
                  &mdash; Sarah &amp; Michael, London, UK
                </p>
                <p className="font-serif text-[16px] text-black leading-normal">
                  Bandhavgarh Safari, 2024
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#ede4d1] rounded-[9px] w-full h-[226px] relative pt-[28px] px-[29px]">
              <p className="font-serif text-[16px] text-black leading-normal">
                As a Mumbai professional, I wanted a hassle-free weekend escape. Junglee Journeys delivered beyond expectations. Tadoba is just 8 hours away, and I came back with tiger photos I&apos;m still showing everyone.
              </p>
              <div className="absolute left-[29px] bottom-[16px]">
                <p className="font-serif font-bold text-[16px] text-black leading-normal">
                  &mdash; Rahul Mehta, Mumbai, India
                </p>
                <p className="font-serif text-[16px] text-black leading-normal">
                  Tadoba Weekend, 2024
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#ede4d1] rounded-[9px] w-full h-[226px] relative pt-[42px] px-[27px]">
              <p className="font-serif text-[16px] text-black leading-normal">
                I&apos;ve been on safaris in Africa, but India&apos;s tigers are different &ndash; more personal, more intense. The team understood exactly what I needed as a photographer. Exceptional.
              </p>
              <div className="absolute left-[27px] bottom-[16px]">
                <p className="font-serif font-bold text-[16px] text-black leading-normal">
                  &mdash; James Chen, Sydney, Australia
                </p>
                <p className="font-serif text-[16px] text-black leading-normal">
                  Photography Expedition, 2024
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <OrnamentDivider />
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: IT'S NOT JUST ABOUT TIGERS (Wildlife Carousel) ===== */}
      <WildlifeCarousel />

      {/* ===== SECTION 7: READY FOR YOUR TIGER SAFARI (Figma Y: ~4573-5423) ===== */}
      <section className="py-[138px] bg-[#081d01]" id="plan">
        <div className="max-w-[1184px] mx-auto px-6">
          <div className="bg-white rounded-[9px] py-[80px] px-[60px]">
            <h2 className="text-center section-heading text-[48px] text-black mb-[26px]">
              Ready for Your Tiger Safari?
            </h2>
            <p className="text-center font-serif text-[16px] text-black mb-[80px]">
              Planning your perfect wildlife journey is simpler than you might think:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-[52px] h-[52px] bg-[#ede4d1] rounded-full flex items-center justify-center mb-6">
                  <span className="font-serif text-[40px] text-[#081d01]">1</span>
                </div>
                <h4 className="font-serif font-bold text-[20px] text-black mb-4">
                  Tell Us What You&apos;re Dreaming Of
                </h4>
                <p className="font-serif text-[16px] text-black max-w-[354px]">
                  Dates you&apos;re considering. What matters most to you. Whether you&apos;ve done this before or it&apos;s completely new.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-[52px] h-[52px] bg-[#ede4d1] rounded-full flex items-center justify-center mb-6">
                  <span className="font-serif text-[40px] text-[#081d01]">2</span>
                </div>
                <h4 className="font-serif font-bold text-[20px] text-black mb-4">
                  We Craft Your Journey
                </h4>
                <p className="font-serif text-[16px] text-black max-w-[354px]">
                  A personalized itinerary with lodges we&apos;d stay at ourselves and experiences that match how you actually travel.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-[52px] h-[52px] bg-[#ede4d1] rounded-full flex items-center justify-center mb-6">
                  <span className="font-serif text-[40px] text-[#081d01]">3</span>
                </div>
                <h4 className="font-serif font-bold text-[20px] text-black mb-4">
                  You Experience the Wild
                </h4>
                <p className="font-serif text-[16px] text-black max-w-[354px]">
                  Show up. Breathe in the forest. Let the jungle do what it does.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: FOOTER ===== */}
      <Footer />
    </main>
  );
}
