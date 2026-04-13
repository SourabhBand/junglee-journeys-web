import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { OrnamentDivider, Header, Footer } from "@/components";
import { IMAGE_ASSETS } from "@/lib/assets";
import WildlifeCarousel from "@/components/WildlifeCarousel";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import FAQAccordion from "@/components/FAQAccordion";
import DestinationsCarousel from "@/components/DestinationsCarousel";
import SafariFlipCards from "@/components/SafariFlipCards";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

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

        <div className="relative z-10 flex flex-col items-center px-6">
          <p className="font-serif italic text-[22px] md:text-[29px] mb-6 tracking-wide leading-normal opacity-90">
            First-hand wilderness
          </p>

          <div className="flex flex-col items-center mb-10 md:mb-12">
            <Image src="/images/hero-title-union.svg" alt="Junglee" width={616} height={95} className="mb-2 w-[280px] md:w-[460px] lg:w-[580px] h-auto" />
            <Image src="/images/hero-title-journeys.svg" alt="Journeys" width={661} height={94} className="w-[300px] md:w-[500px] lg:w-[620px] h-auto" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link className="bg-[rgba(231,158,35,0.81)] hover:bg-[#e79e23] transition-all text-white w-[240px] h-[52px] rounded-[9px] text-[16px] font-serif inline-flex items-center justify-center" href="/enquire/">
              Plan Your Safari
            </Link>
            <Link className="border border-white/40 text-white hover:bg-white/10 transition-all w-[240px] h-[52px] rounded-[9px] text-[16px] font-serif inline-flex items-center justify-center" href="https://wa.me/">
              WhatsApp Us
            </Link>
          </div>
        </div>

        {/* Stats: 15 years · 500+ safaris · 70% of guests come back */}
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

      {/* ===== HERO COPY (below hero image, on beige) ===== */}
      <section className="bg-[#ede4d1] relative">
        <div className="pt-[80px] md:pt-[120px] pb-[50px] md:pb-[70px] px-6">
          <div className="max-w-[900px] mx-auto">
            <AnimateOnScroll animation="fade-up">
              <p className="font-serif text-[18px] md:text-[22px] leading-[1.7] text-[#081d01] text-center mb-5">
                The honest truth is that you can absolutely book a <strong>tiger safari in India</strong> yourself. People do it all the time.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <p className="font-serif text-[15px] md:text-[17px] leading-[1.8] text-[#081d01]/55 text-center mb-5">
                The honest truth is also that it usually goes badly in small, expensive ways: the Forest Department permit portal that crashes on the third attempt, the lodge website that bears no relationship to the actual lodge, the cheerful young man at the front desk who calls himself an expert naturalist and got his certification last Tuesday.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={200}>
              <p className="font-serif italic text-[16px] md:text-[19px] leading-[1.7] text-[#081d01]/70 text-center mb-16 md:mb-24">
                We are not here to talk you out of doing this on your own. We are here for the people who decided their holiday was worth doing properly.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={300}>
              <p className="font-serif text-[18px] md:text-[22px] leading-[1.7] text-[#081d01] text-center mb-5">
                We have spent fifteen years running <strong>tiger safaris in India</strong> for those people.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={380}>
              <p className="font-serif text-[15px] md:text-[17px] leading-[1.8] text-[#081d01]/55 text-center mb-5">
                Your own jeep, a naturalist who knows the local tigress by name (and her two cubs from last March), and lodges we have personally slept in often enough to have opinions about the breakfast.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={440}>
              <p className="font-serif text-[15px] md:text-[17px] leading-[1.8] text-[#081d01]/55 text-center mb-12 md:mb-16">
                Permits, airport transfers, and the 4 AM wake-up call: all of it sits with us, handled by people who do this every week and have very little patience for it going wrong.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={500}>
              <p className="font-serif italic text-[20px] md:text-[26px] leading-[1.6] text-[#081d01] text-center">
                Your only job is to turn up with socks and a camera.
              </p>
            </AnimateOnScroll>
          </div>
        </div>

        <AnimateOnScroll animation="fade-in">
          <OrnamentDivider className="!my-4" />
        </AnimateOnScroll>

        {/* ===== WHY TRAVEL WITH US ===== */}
        <div className="pt-[30px] md:pt-[50px] pb-[20px] md:pb-[30px] px-6">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-center section-heading text-[32px] md:text-[52px] lg:text-[60px] tracking-[0.06em]">
              Why Travel With Us
            </h2>
          </AnimateOnScroll>
        </div>

        <div className="max-w-[900px] mx-auto px-6 pb-[40px] md:pb-[50px]">
          <AnimateOnScroll animation="fade-up" delay={80}>
            <p className="font-serif text-[16px] md:text-[18px] leading-[1.8] text-[#081d01]/65 text-center mb-5">
              Most of our guests arrive with a version of the same problem. They have between five and ten days, they have always wanted to see a tiger in the wild, and they have no idea which of India&apos;s fifty-odd tiger reserves to actually go to. They have read four blog posts that all say different things and looked at three TripAdvisor pages where the photographs are clearly from a different planet. They are slightly suspicious of how much this is going to cost. They are also slightly worried that if they pick wrong, they will have spent the budget on a forest with no tigers in it.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={160}>
            <p className="font-serif italic text-[16px] md:text-[18px] leading-[1.7] text-[#081d01]/60 text-center">
              We have planned hundreds of these trips. The boring middle (which park, which dates, which lodge, which guide, which permits, which 4 AM pickup) is the part we have completely solved. The exciting part is the part we hand back to you on the day you arrive.
            </p>
          </AnimateOnScroll>
        </div>

        {/* 4 pill-shaped feature cards */}
        <div className="max-w-[1280px] mx-auto px-6 pb-[80px] md:pb-[120px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
            {[
              {
                heading: "Your own jeep, and only your own jeep",
                body: "There is no second jeep behind you, no third jeep in front, and no group of strangers debating camera settings in loud whispers while a tigress walks past your bonnet. The vehicle is yours, the pace is yours, and the only person on the radio is your guide. This sounds obvious. It is not the default arrangement at most reserves, and the difference is the entire trip.",
                rotated: false,
                delay: 0,
              },
              {
                heading: "Naturalists who actually live here",
                body: "Our guides are not freelance contractors we round up the week before your trip. They are people who have been tracking these tigers for ten or fifteen years, who know which tigress uses which waterhole at 6:40 AM in March, and who can read an alarm call from three hundred metres away and tell you which species is doing the calling and roughly why. They notice the things you miss. The good ones make a sighting feel inevitable. The great ones make the waiting feel like the actual point of being there.",
                rotated: false,
                delay: 80,
              },
              {
                heading: "Lodges we have actually slept in",
                body: "We do not recommend lodges from photographs. Every property on our shortlist is one we have stayed at, eaten at, complained about, and decided was good enough to send our guests to. Some of them have astonishingly good food. Some have a single window that frames the forest in a way you remember years later. All of them let you exhale after a dusty game drive, and that is more important than the thread count.",
                rotated: true,
                delay: 160,
              },
              {
                heading: "Nothing for you to figure out",
                body: "The permits, the lodge bookings, the airport pickup, the inter-park transfers, the 4 AM wake-up call, the boring spreadsheet of permit zone allocations: all of it sits with us. Your job is to send us your dates and turn up at the airport. Our job is everything in between.",
                rotated: true,
                delay: 240,
              },
            ].map((card) => (
              <AnimateOnScroll key={card.heading} animation="fade-up" delay={card.delay}>
                <div
                  className={`pill-card bg-[#081d01] text-white px-[24px] lg:px-[30px] pt-[28px] lg:pt-[52px] pb-[28px] lg:pb-[52px] min-h-[300px] lg:min-h-[340px] flex flex-col overflow-hidden ${
                    card.rotated
                      ? 'rounded-tl-[60px] sm:rounded-tl-[80px] lg:rounded-tl-[120px] rounded-tr-[9px] rounded-br-[60px] sm:rounded-br-[80px] lg:rounded-br-[120px] rounded-bl-[9px]'
                      : 'rounded-tl-[9px] rounded-tr-[60px] sm:rounded-tr-[80px] lg:rounded-tr-[120px] rounded-br-[9px] rounded-bl-[60px] sm:rounded-bl-[80px] lg:rounded-bl-[120px]'
                  }`}
                >
                  <h3 className="font-serif font-semibold text-[18px] lg:text-[20px] text-[#ede4d1] mb-4 leading-tight">
                    {card.heading}
                  </h3>
                  <hr className="gold-rule mb-4 opacity-40" />
                  <p className="font-serif text-[11px] lg:text-[12px] text-white/65 leading-[175%]">
                    {card.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDIA'S PREMIER TIGER RESERVES ===== */}
      <DestinationsCarousel />

      {/* ===== TAILORED SAFARI EXPERIENCES ===== */}
      <section className="pt-[40px] md:pt-[50px] pb-[80px] md:pb-[120px] bg-[#081d01] text-[#ede4d1] grain-overlay relative">
        <div className="relative z-10">
          <OrnamentDivider variant="light" className="!mt-0 mb-[40px] md:mb-[56px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <AnimateOnScroll animation="fade-left" className="lg:w-[38%] flex flex-col">
              <h2 className="section-heading text-[32px] md:text-[48px] lg:text-[56px] mb-8 text-[#ede4d1] tracking-[0.06em] leading-[1.05]">
                Tailored Safari Experiences
              </h2>
              <p className="font-serif text-[14px] md:text-[15px] text-white/50 leading-[180%] mb-8">
                The trip we sell you is the trip you actually want, not the trip we wish you would buy. A photographer with a 400mm lens needs a completely different itinerary from a couple celebrating their tenth anniversary, who in turn need a completely different itinerary from a family with a six-year-old who can identify forty species of bird by call. We do not run group departures and we do not sell off-the-shelf packages. The starting points below are the experiences we have built often enough to have opinions about, and each one becomes your version of the trip the moment you tell us your dates.
              </p>
              <hr className="gold-rule mb-8" />
              <div className="mt-auto">
                <Link href="/safaris/" className="bg-[rgba(231,158,35,0.81)] hover:bg-[#e79e23] transition-all text-white w-[220px] h-[48px] rounded-[9px] text-[15px] font-serif inline-flex items-center justify-center">
                  Browse Safari Packages
                </Link>
              </div>
            </AnimateOnScroll>

            <SafariFlipCards />
          </div>
        </div>
      </section>

      {/* ===== WHAT OUR GUESTS SAY ===== */}
      <TestimonialsCarousel />

      {/* ===== WILDLIFE CAROUSEL ===== */}
      <WildlifeCarousel />

      {/* ===== QUESTIONS WE GET ASKED ===== */}
      <section className="py-[80px] md:py-[100px] bg-[#ede4d1]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-center section-heading text-[32px] md:text-[52px] lg:text-[60px] tracking-[0.06em] mb-12">
              Questions We Get Asked
            </h2>
          </AnimateOnScroll>
          <FAQAccordion />
        </div>
      </section>

      {/* ===== READY? ===== */}
      <section className="py-[80px] md:py-[120px] lg:py-[140px] bg-[#081d01] grain-overlay" id="plan">
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <AnimateOnScroll animation="scale-in">
            <div className="bg-white rounded-[12px] py-[50px] md:py-[70px] px-[24px] md:px-[60px] shadow-2xl shadow-black/20">
              <h2 className="text-center section-heading text-[36px] md:text-[48px] text-[#081d01] mb-3 tracking-[0.06em]">
                Ready?
              </h2>
              <p className="text-center font-serif text-[14px] md:text-[15px] text-[#081d01]/50 max-w-[600px] mx-auto mb-12 md:mb-14 leading-[175%]">
                The permits are limited and the good lodges book out earlier than you expect, so the sooner you tell us your dates the more options we can give you. The rest is on us.
              </p>

              <div className="relative steps-connector mb-12 md:mb-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                  {[
                    { num: "1", heading: "Tell us your dates", body: "Tell us your dates and the cities you are flying in and out of." },
                    { num: "2", heading: "We build the itinerary", body: "We build the itinerary and send you an itemised written quote within 24 hours." },
                    { num: "3", heading: "You confirm", body: "You confirm. We handle everything else." },
                  ].map((step, i) => (
                    <AnimateOnScroll key={step.num} animation="fade-up" delay={i * 120}>
                      <div className="flex flex-col items-center text-center relative z-10">
                        <div className="w-[48px] h-[48px] bg-[#ede4d1] rounded-full flex items-center justify-center mb-4">
                          <span className="font-serif text-[24px] text-[#081d01]">{step.num}</span>
                        </div>
                        <p className="font-serif text-[14px] md:text-[15px] text-[#081d01]/60 max-w-[280px] leading-[170%]">
                          {step.body}
                        </p>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                <Link className="bg-[#e79e23] hover:bg-[rgba(231,158,35,0.85)] transition-all text-white w-[220px] h-[48px] rounded-[9px] text-[15px] font-serif inline-flex items-center justify-center" href="/enquire/">
                  Plan Your Safari
                </Link>
                <Link className="border border-[#081d01]/15 text-[#081d01]/60 hover:bg-[#081d01] hover:text-white hover:border-[#081d01] transition-all w-[220px] h-[48px] rounded-[9px] text-[15px] font-serif inline-flex items-center justify-center" href="https://wa.me/">
                  WhatsApp Us
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ===== FLOATING WHATSAPP ===== */}
      <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <Footer />
    </main>
  );
}
