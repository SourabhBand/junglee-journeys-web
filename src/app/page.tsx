import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { OrnamentDivider, Header, Footer, WhatsAppLink } from "@/components";
import { IMAGE_ASSETS } from "@/lib/assets";
import WildlifeCarousel from "@/components/WildlifeCarousel";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { NumberCounter } from "@/components/NumberCounter";
import FAQAccordion from "@/components/FAQAccordion";
import DestinationsCarousel from "@/components/DestinationsCarousel";
import SafariFlipCards from "@/components/SafariFlipCards";


export const metadata: Metadata = {
  title: "Tiger Safari India | Luxury Wildlife Tours | Junglee Journeys",
  description:
    "Book tiger safaris in India with expert naturalists and luxury lodges. Private tours to Kanha, Tadoba, Ranthambore. 10+ years experience. Enquire now.",
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
            alt="Peahen standing on a forest path framed by lush trees"
            className="absolute inset-0 w-full h-full object-cover ken-burns"
            src={IMAGE_ASSETS.heroTiger}
            fill
            priority
            sizes="100vw"
            quality={60}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        <div className="relative z-10 flex flex-col items-center px-6">
          <p className="font-serif italic text-[22px] md:text-[29px] mb-6 tracking-wide leading-normal opacity-90">
            First-hand wilderness
          </p>

          <div className="flex flex-col items-center mb-10 md:mb-12">
            <Image src="/images/hero-title-union.svg" alt="Junglee" width={616} height={95} className="mb-2 w-[280px] md:w-[460px] lg:w-[580px] h-auto" priority />
            <Image src="/images/hero-title-journeys.svg" alt="Journeys" width={661} height={94} className="w-[300px] md:w-[500px] lg:w-[620px] h-auto" priority />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link className="bg-[rgba(231,158,35,0.81)] hover:bg-[#e79e23] transition-all text-white w-[240px] h-[52px] rounded-[9px] text-[16px] font-serif inline-flex items-center justify-center" href="/enquire/">
              Plan Your Safari
            </Link>
            <WhatsAppLink className="border border-white/40 text-white hover:bg-white/10 transition-all w-[240px] h-[52px] rounded-[9px] text-[16px] font-serif inline-flex items-center justify-center" label="hero">
              WhatsApp Us
            </WhatsAppLink>
          </div>
        </div>

        {/* Stats: 10+ years · 500+ safaris · 70% repeat guests */}
        <div className="absolute bottom-[36px] md:bottom-[52px] left-0 right-0 z-10">
          <div className="flex justify-center gap-8 md:gap-[100px]">
            {[
              { end: 10, suffix: "+", label: "Years" },
              { end: 500, suffix: "+", label: "Safaris" },
              { end: 70, suffix: "%", label: "Repeat Guests" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center w-[120px] md:w-[140px]"
              >
                <div className="w-[52px] h-[52px] md:w-[58px] md:h-[58px] rounded-full border border-white/25 backdrop-blur-sm bg-white/5 flex items-center justify-center mb-2">
                  <NumberCounter end={stat.end} suffix={stat.suffix} className="font-serif text-[14px] md:text-[15px] font-bold tracking-wide" />
                </div>
                <span className="font-serif text-[11px] md:text-[13px] tracking-[0.15em] uppercase opacity-70 whitespace-nowrap">{stat.label}</span>
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
              <h2 className="section-heading text-[22px] md:text-[28px] text-center text-[#081d01] tracking-[0.06em] mb-6 md:mb-8">
                Tiger Safaris in India
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={80}>
              <p className="font-serif text-[18px] md:text-[22px] leading-[1.7] text-[#081d01] text-center mb-5">
                Seeing your first tiger in the wild is an experience unlike any other, one that&rsquo;s almost impossible to put into words. It&rsquo;s an unforgettable encounter that every wildlife enthusiast hopes to witness at least once. But planning a safari that gives you the best chance of making it happen can feel overwhelming.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={160}>
              <p className="font-serif text-[15px] md:text-[17px] leading-[1.8] text-[#081d01]/55 text-center mb-5">
                Booking a tiger safari in India involves countless decisions, from choosing the right national park and the best travel dates to selecting safari zones, lodges, naturalists, and even coordinating airports or railway stations. With so many moving parts, planning the ideal trip can quickly become complicated. That&rsquo;s where we come in.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={240}>
              <p className="font-serif italic text-[16px] md:text-[19px] leading-[1.7] text-[#081d01]/70 text-center mb-10 md:mb-14">
                We curate private, naturalist-led wildlife safaris tailored to your interests and travel style. Whether it&rsquo;s your very first safari or you&rsquo;ve spent years exploring the wild, we design bespoke junglee journeys that make every moment in the field count.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={300}>
              <h2 className="section-heading text-[22px] md:text-[28px] text-center text-[#081d01] tracking-[0.06em] mb-6 md:mb-8">
                What 10 years of Jungle Safaris in India Teaches You
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={380}>
              <p className="font-serif text-[18px] md:text-[22px] leading-[1.7] text-[#081d01] text-center mb-5">
                Over the last decade, we&rsquo;ve traversed breathtaking landscapes, tracked some of the country&rsquo;s rarest birds, hiked in pursuit of snow leopards, and explored the best tiger reserves in India, learning firsthand what creates a truly exceptional wildlife safari experience. That journey has helped us identify the best parks, the ideal seasons, expert naturalists, and the finest lodges giving you the best possible chance of encountering your target species in the wild.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={500}>
              <p className="font-serif italic text-[20px] md:text-[26px] leading-[1.6] text-[#081d01] text-center">
                All you have to do is arrive with a pair of binoculars and a sense of adventure.
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
            <h3 className="text-center section-heading text-[32px] md:text-[52px] lg:text-[60px] tracking-[0.06em]">
              Why Travel With Us
            </h3>
          </AnimateOnScroll>
        </div>

        {/* 4 pill-shaped feature cards */}
        <div className="max-w-[1280px] mx-auto px-6 pt-[20px] md:pt-[30px] pb-[80px] md:pb-[120px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
            {[
              {
                heading: "Private Jeep Safaris",
                body: "Explore the forest at your own pace in a safari vehicle reserved exclusively for you and your group. Prefer fewer crowds and more secluded routes? Simply let your driver, guide, or naturalist know, and they’ll help you discover the quieter corners of the reserve. Experience the wilderness on your own terms and focus on the wildlife you’ve come to see.",
                rotated: false,
                delay: 0,
              },
              {
                heading: "Experienced Naturalists and Guides",
                body: "Years of exploring India's wild spaces have helped us identify the finest naturalists and guides across the country's leading parks. Many have grown up alongside these forests, while others have dedicated decades to studying and understanding wildlife. Their tracking expertise, local knowledge, and ability to interpret the rhythms of the forest elevate every safari into an immersive and rewarding experience that goes far beyond a drive through the jungle.",
                rotated: false,
                delay: 80,
              },
              {
                heading: "Lodges We’ve Actually Stayed In",
                body: "A great safari experience doesn’t end at the park gate, and where you stay matters just as much. But photos can be misleading, and reviews don’t always tell the full story. That’s why we only recommend lodges we’ve personally stayed in. We believe where you stay should feel every bit as considered as the safari itself, which is why we only partner with properties that offer the comfort, hospitality, and understated luxury we’d expect for ourselves.",
                rotated: true,
                delay: 160,
              },
              {
                heading: "Everything Taken Care Of",
                body: "Safari permits, vehicle allocations, zone selection, lodge bookings, airport transfers, inter-park logistics, and on-ground wildlife updates. Every detail behind your safari is taken care of by us, so all you have to do is arrive. We don’t just plan safaris, we create seamless journeys into the wild.",
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
                  <h4 className="font-serif font-semibold text-[18px] lg:text-[20px] text-[#ede4d1] mb-4 leading-tight">
                    {card.heading}
                  </h4>
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
                Customised Safari Experiences
              </h2>
              <p className="font-serif text-[14px] md:text-[15px] text-white/50 leading-[180%] mb-6">
                No two travellers experience the wild in the same way. Some travel with a 400mm lens hoping for the perfect photograph. Some arrive with binoculars and a long list of birds to spot. Some want an adventurous family holiday, while others are simply looking to slow down and spend time in nature. That&rsquo;s why we do not believe in fixed departures or off-the-shelf itineraries. Every safari is designed around what you want to experience. Whether your goal is to maximise sightings of your target species or simply enjoy a slower, more immersive experience in the forest, we create bespoke journeys shaped around your interests, pace, and travel style. From selecting the right parks and seasons to choosing the ideal lodges, safari zones, and naturalists, every detail is thoughtfully planned.
              </p>
              <p className="font-serif italic text-[15px] md:text-[16px] text-[#ede4d1]/80 leading-[170%] mb-4">
                No generic packages. Just Junglee Journeys designed for you.
              </p>
              <p className="font-serif text-[13px] md:text-[14px] text-white/40 leading-[170%] mb-8">
                The experiences featured here are simply starting points. Once you tell us your dates and preferences, we turn them into your version of the trip.
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
                <WhatsAppLink className="border border-[#081d01]/15 text-[#081d01]/60 hover:bg-[#081d01] hover:text-white hover:border-[#081d01] transition-all w-[220px] h-[48px] rounded-[9px] text-[15px] font-serif inline-flex items-center justify-center" label="bottom-cta">
                  WhatsApp Us
                </WhatsAppLink>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  );
}
