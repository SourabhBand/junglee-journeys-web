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
      <Header transparent />

      {/* Hero Section */}
      <section className="relative h-[900px] flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <Image
          alt="Close up of a majestic tiger in the wild"
          className="absolute inset-0 w-full h-full object-cover"
          src={IMAGE_ASSETS.heroTiger}
          fill
          priority
        />
        <div className="absolute inset-0 hero-overlay"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-6">
          <p className="font-serif italic text-[24px] md:text-[29px] mb-6 tracking-wide">
            First-hand wilderness
          </p>

          <div className="flex flex-col items-center mb-12">
            <Image
              src="/images/hero-title-union.svg"
              alt="Junglee"
              width={616}
              height={95}
              className="mb-2 max-w-full h-auto"
            />
            <Image
              src="/images/hero-title-journeys.svg"
              alt="Journeys"
              width={661}
              height={94}
              className="max-w-full h-auto"
            />
          </div>

          <a
            className="bg-[rgba(231,158,35,0.81)] hover:bg-[#e79e23] transition-all text-white w-[255px] h-[52px] rounded-[9px] text-[16px] font-serif inline-flex items-center justify-center"
            href="/enquire/"
          >
            Plan Your Safari
          </a>
        </div>

        {/* Stats at bottom */}
        <div className="absolute bottom-20 left-0 right-0 z-10">
          <div className="flex justify-center space-x-16 md:space-x-32">
            <div className="flex flex-col items-center">
              <div className="w-[50px] h-[50px] rounded-full border border-white/30 flex items-center justify-center mb-2">
                <span className="font-serif text-[15px]">15</span>
              </div>
              <span className="font-serif text-[15px]">Years</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[50px] h-[50px] rounded-full border border-white/30 flex items-center justify-center mb-2">
                <span className="font-serif text-[15px]">500+</span>
              </div>
              <span className="font-serif text-[15px]">Safaris</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-[50px] h-[50px] rounded-full border border-white/30 flex items-center justify-center mb-2">
                <span className="font-serif text-[15px]">70%</span>
              </div>
              <span className="font-serif text-[15px]">Repeat Guests</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Subhead Section (the "honest truth" opener) */}
      <section className="bg-[#ede4d1] py-[80px]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="section-heading text-[32px] md:text-[48px] mb-8 leading-tight">
            Private Tiger Safaris Across India
          </h1>
          <p className="font-serif text-[16px] md:text-[18px] leading-relaxed text-[#081d01] mb-6">
            The honest truth is that you can absolutely book a tiger safari in India yourself.
            People do it all the time. The honest truth is also that it usually goes badly in
            small, expensive ways: the Forest Department permit portal that crashes on the third
            attempt, the lodge website that bears no relationship to the actual lodge, the
            cheerful young man at the front desk who calls himself an expert naturalist and got
            his certification last Tuesday. We are not here to talk you out of doing this on
            your own. We are here for the people who decided their holiday was worth doing
            properly.
          </p>
          <p className="font-serif text-[16px] md:text-[18px] leading-relaxed text-[#081d01]">
            We have spent fifteen years arranging <strong>tiger safari india</strong> trips for
            those people. Your own jeep, a naturalist who knows the local tigress by name (and
            her two cubs from last March), and lodges we have personally slept in often enough
            to have opinions about the breakfast. Permits, airport transfers, and the 4 AM
            wake-up call: all of it sits with us, handled by people who do this every week and
            have very little patience for it going wrong. Your only job is to turn up with socks
            and a camera.
          </p>
        </div>
      </section>

      {/* Why Travel With Us */}
      <section className="py-[100px] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <OrnamentDivider />
          <h2 className="text-center section-heading text-[32px] md:text-[48px] mb-[40px]">
            Why Travel With Us
          </h2>
          <div className="max-w-[907px] mx-auto text-center mb-[80px] md:mb-[100px]">
            <p className="font-serif text-[16px] leading-relaxed text-[#081d01]">
              Most of our guests arrive with a version of the same problem. They have between
              five and ten days, they have always wanted to see a tiger in the wild, and they
              have no idea which of India&apos;s fifty-odd tiger reserves to actually go to.
              They have read four blog posts that all say different things and looked at three
              TripAdvisor pages where the photographs are clearly from a different planet.
              They are slightly suspicious of how much this is going to cost. They are also
              slightly worried that if they pick wrong, they will have spent the budget on a
              forest with no tigers in it.
            </p>
            <p className="font-serif text-[16px] leading-relaxed text-[#081d01] mt-4">
              We have planned hundreds of these trips. The boring middle (which park, which
              dates, which lodge, which guide, which permits, which 4 AM pickup) is the part we
              have completely solved. The exciting part is the part we hand back to you on the
              day you arrive.
            </p>
          </div>
          {/* Feature Cards - 4 column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] lg:gap-[50px] items-center">
            {/* Card 1 - Your own jeep */}
            <div className="flex items-center justify-center">
              <div className="bg-[#081d01] text-white w-[284px] h-[290px] rounded-tl-[9px] rounded-tr-[120px] rounded-br-[9px] rounded-bl-[120px] pt-[42px] px-[36px] text-center flex flex-col items-center justify-start">
                <h3 className="font-serif font-bold text-[#ede4d1] text-[22px] mb-[20px] leading-tight">
                  Your Own Jeep
                </h3>
                <p className="font-serif text-[13px] leading-snug">
                  No second jeep behind you. No third jeep in front. No strangers debating
                  camera angles while a tigress walks past. The vehicle is yours, the pace is
                  yours, the only person on the radio is your guide.
                </p>
              </div>
            </div>
            {/* Card 2 - Real naturalists */}
            <div className="flex items-center justify-center">
              <div className="bg-[#081d01] text-white w-[284px] h-[290px] rounded-tl-[9px] rounded-tr-[120px] rounded-br-[9px] rounded-bl-[120px] pt-[42px] px-[36px] text-center flex flex-col items-center justify-start">
                <h3 className="font-serif font-bold text-[#ede4d1] text-[22px] mb-[20px] leading-tight">
                  Real Naturalists
                </h3>
                <p className="font-serif text-[13px] leading-snug">
                  Ten or fifteen years tracking these tigers. They know which tigress uses
                  which waterhole at 6:40 AM in March. They notice the alarm call you missed.
                  The difference is not subtle.
                </p>
              </div>
            </div>
            {/* Card 3 - Lodges we have slept in */}
            <div className="flex items-center justify-center">
              <div className="bg-[#081d01] text-white w-[284px] h-[290px] rounded-tl-[120px] rounded-tr-[9px] rounded-br-[120px] rounded-bl-[9px] pt-[42px] px-[36px] text-center flex flex-col items-center justify-start">
                <h3 className="font-serif font-bold text-[#ede4d1] text-[22px] mb-[20px] leading-tight">
                  Lodges We Have Slept In
                </h3>
                <p className="font-serif text-[13px] leading-snug">
                  Every property on our shortlist is one we have stayed at, eaten at,
                  complained about, and decided was good enough to send our guests to. We do
                  not recommend lodges from photographs.
                </p>
              </div>
            </div>
            {/* Card 4 - Nothing to figure out */}
            <div className="flex items-center justify-center">
              <div className="bg-[#081d01] text-white w-[284px] h-[290px] rounded-tl-[120px] rounded-tr-[9px] rounded-br-[120px] rounded-bl-[9px] pt-[42px] px-[36px] text-center flex flex-col items-center justify-start">
                <h3 className="font-serif font-bold text-[#ede4d1] text-[22px] mb-[20px] leading-tight">
                  Nothing to Figure Out
                </h3>
                <p className="font-serif text-[13px] leading-snug">
                  Permits, airport transfers, the 4 AM wake-up call, the boring spreadsheet of
                  permit zones. Your job is to turn up at the airport. Our job is everything
                  in between.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* India's Premier Tiger Reserves */}
      <section className="py-[100px] bg-[#081d01] text-[#ede4d1]">
        <div className="max-w-7xl mx-auto px-6">
          <OrnamentDivider variant="light" />
          <h2 className="text-center section-heading text-[32px] md:text-[48px] mb-[40px] text-[#ede4d1]">
            India&apos;s Premier Tiger Reserves
          </h2>
          <div className="max-w-[997px] mx-auto text-center mb-[80px] md:mb-[120px] font-serif text-[16px] text-white leading-relaxed">
            <p className="mb-4">
              India holds more than half the world&apos;s wild tigers, which is the kind of
              statistic that sounds invented until you visit and realise it is, slightly
              improbably, true. The country gazettes more than fifty official{" "}
              <strong>tiger reserves</strong>, and we operate in eleven of them.
            </p>
            <p>Each one is a completely different argument for going. Four to start with.</p>
          </div>
          {/* Reserve Images Row */}
          <div className="relative flex flex-wrap justify-center gap-6 lg:gap-8 mb-8">
            <Link href="/destination/kanha/" className="w-[272px] h-[400px] curved-image-frame overflow-hidden destination-card">
              <Image
                alt="Kanha National Park"
                className="w-full h-full object-cover"
                src={IMAGE_ASSETS.kanhaNationalPark}
                width={552}
                height={399}
              />
            </Link>
            <Link href="/destination/tadoba/" className="w-[272px] h-[400px] curved-image-frame overflow-hidden destination-card">
              <Image
                alt="Tadoba Tiger Reserve"
                className="w-full h-full object-cover"
                src={IMAGE_ASSETS.tadobaTigerReserve}
                width={904}
                height={399}
              />
            </Link>
            <Link href="/destination/ranthambore/" className="w-[272px] h-[400px] curved-image-frame overflow-hidden destination-card">
              <Image
                alt="Ranthambore National Park"
                className="w-full h-full object-cover"
                src={IMAGE_ASSETS.ranthamboreNationalPark}
                width={599}
                height={400}
              />
            </Link>
            <Link href="/destination/bandhavgarh/" className="w-[272px] h-[400px] curved-image-frame overflow-hidden destination-card">
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
        {/* Reserve Info Cards - on white background */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Kanha */}
              <div className="text-center">
                <h4 className="font-serif font-bold text-[22px] text-[#081d01] mb-4 leading-tight">
                  Kanha
                  <br />
                  National Park
                </h4>
                <p className="font-serif text-[15px] text-black leading-relaxed mb-6 max-w-[268px] mx-auto">
                  Mowgli&apos;s forest. Sal trees in straight ranks, meadows wide enough that
                  you forget what you came here for, and a tiger population that has held
                  steady for two decades.
                </p>
                <Link
                  href="/destination/kanha/"
                  className="bg-[#081d01] text-white font-serif text-[14px] inline-flex items-center justify-center w-[180px] h-[42px] rounded-[9px] hover:bg-[#0d2a05] transition"
                >
                  Explore Kanha
                </Link>
              </div>
              {/* Tadoba */}
              <div className="text-center">
                <h4 className="font-serif font-bold text-[22px] text-[#081d01] mb-4 leading-tight">
                  Tadoba Tiger
                  <br />
                  Reserve
                </h4>
                <p className="font-serif text-[15px] text-black leading-relaxed mb-6 max-w-[268px] mx-auto">
                  The closest tiger reserve to Mumbai and Pune. Bold tigers, open terrain, and
                  sighting rates that quietly embarrass the more famous parks. Three hours from
                  Nagpur airport.
                </p>
                <Link
                  href="/destination/tadoba/"
                  className="bg-[#081d01] text-white font-serif text-[14px] inline-flex items-center justify-center w-[180px] h-[42px] rounded-[9px] hover:bg-[#0d2a05] transition"
                >
                  Explore Tadoba
                </Link>
              </div>
              {/* Ranthambore */}
              <div className="text-center">
                <h4 className="font-serif font-bold text-[22px] text-[#081d01] mb-4 leading-tight">
                  Ranthambore
                  <br />
                  National Park
                </h4>
                <p className="font-serif text-[15px] text-black leading-relaxed mb-6 max-w-[268px] mx-auto">
                  The most photographed tigers on Earth, walking through the ruins of a
                  tenth-century fort. Five hours from Delhi by road. The park is iconic for a
                  reason.
                </p>
                <Link
                  href="/destination/ranthambore/"
                  className="bg-[#081d01] text-white font-serif text-[14px] inline-flex items-center justify-center w-[180px] h-[42px] rounded-[9px] hover:bg-[#0d2a05] transition"
                >
                  Explore Ranthambore
                </Link>
              </div>
              {/* Bandhavgarh */}
              <div className="text-center">
                <h4 className="font-serif font-bold text-[22px] text-[#081d01] mb-4 leading-tight">
                  Bandhavgarh
                  <br />
                  National Park
                </h4>
                <p className="font-serif text-[15px] text-black leading-relaxed mb-6 max-w-[268px] mx-auto">
                  The highest tiger density in India. Most of our guests see one before lunch
                  on day one. If your priority is the odds, this is where you go.
                </p>
                <Link
                  href="/destination/bandhavgarh/"
                  className="bg-[#081d01] text-white font-serif text-[14px] inline-flex items-center justify-center w-[180px] h-[42px] rounded-[9px] hover:bg-[#0d2a05] transition"
                >
                  Explore Bandhavgarh
                </Link>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/destinations/"
                className="inline-block font-serif text-[15px] text-[#081d01] underline hover:text-[#e79e23] transition"
              >
                View All 11 Destinations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Safari Experiences */}
      <section className="bg-[#081d01] text-[#ede4d1] py-[80px] md:py-[100px]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-heading text-[32px] md:text-[48px] text-[#ede4d1] text-center mb-8 leading-tight">
            Tailored Safari Experiences
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="font-serif text-[16px] text-white leading-relaxed mb-4">
              The trip we sell you is the trip you actually want, not the trip we wish you would
              buy. A photographer with a 400mm lens needs a completely different itinerary from
              a couple celebrating their tenth anniversary, who in turn need a completely
              different itinerary from a family with a six-year-old who can identify forty
              species of bird by call.
            </p>
            <p className="font-serif text-[16px] text-white leading-relaxed">
              We do not run group departures and we do not sell off-the-shelf packages. The
              starting points below are the experiences we have built often enough to have
              opinions about.
            </p>
          </div>

          {/* Experience cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Link
              href="/safaris/"
              className="bg-[#ede4d1] text-[#081d01] rounded-[9px] p-8 hover:scale-[1.02] transition"
            >
              <p className="font-serif font-bold text-[20px] mb-3">Private Tiger Safaris</p>
              <p className="font-serif text-[15px] leading-relaxed">
                The default for most of our guests. Your own jeep, your own naturalist, drives
                timed around the actual wildlife activity. No sharing, no rushing, no group
                dynamics to navigate.
              </p>
            </Link>
            <Link
              href="/safari/photography-special/"
              className="bg-[#ede4d1] text-[#081d01] rounded-[9px] p-8 hover:scale-[1.02] transition"
            >
              <p className="font-serif font-bold text-[20px] mb-3">Photography Expeditions</p>
              <p className="font-serif text-[15px] leading-relaxed">
                For photographers who care which hide they are sitting in and at what hour. The
                right waterhole, the right window, the right time of year for the species you
                came for.
              </p>
            </Link>
            <Link
              href="/safari/ranthambore-weekend/"
              className="bg-[#ede4d1] text-[#081d01] rounded-[9px] p-8 hover:scale-[1.02] transition"
            >
              <p className="font-serif font-bold text-[20px] mb-3">Weekend Escapes</p>
              <p className="font-serif text-[15px] leading-relaxed">
                Two or three nights in Tadoba, Ranthambore, or Pench, depending on which city
                you fly out of. The kind of weekend that resets a year of city living.
              </p>
            </Link>
            <Link
              href="/safari/central-india-tiger-trail/"
              className="bg-[#ede4d1] text-[#081d01] rounded-[9px] p-8 hover:scale-[1.02] transition"
            >
              <p className="font-serif font-bold text-[20px] mb-3">Multi-Park Adventures</p>
              <p className="font-serif text-[15px] leading-relaxed">
                Seven to fourteen nights across India&apos;s best reserves. The trip you will
                still be telling people about a decade later.
              </p>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/safaris/"
              className="bg-[rgba(231,158,35,0.81)] hover:bg-[#e79e23] transition-all text-white inline-flex items-center justify-center w-[255px] h-[52px] rounded-[9px] text-[15px] font-serif"
            >
              Browse Safari Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-[80px] md:py-[100px]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center section-heading text-[32px] md:text-[48px] text-black mb-16">
            What Our Guests Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#ede4d1] rounded-[9px] p-8 relative">
              <Image
                src="/images/quote-icon.svg"
                alt=""
                width={40}
                height={45}
                className="absolute -top-4 left-6 rotate-180 -scale-y-100"
              />
              <p className="font-serif text-[15px] text-black leading-relaxed mb-6 mt-6">
                Eight tiger sightings in six drives. Our guide Ramesh predicted a tigress at
                waterhole 3 at 6:40 AM in March. She showed up at 6:38, which I have brought up
                at every dinner party since. Singinawa Lodge was perfect. Already planning the
                next one.
              </p>
              <p className="font-serif font-bold text-[14px] text-black">
                Sarah and James T., London
              </p>
              <p className="font-serif text-[14px] text-black/70">Kanha, March 2024</p>
            </div>

            <div className="bg-[#ede4d1] rounded-[9px] p-8 relative">
              <Image
                src="/images/quote-icon.svg"
                alt=""
                width={40}
                height={45}
                className="absolute -top-4 left-6 rotate-180 -scale-y-100"
              />
              <p className="font-serif text-[15px] text-black leading-relaxed mb-6 mt-6">
                Left Mumbai on a Friday night. First tiger by Saturday at 6 AM. Zero hassle
                anywhere in the chain. Already planning trip three.
              </p>
              <p className="font-serif font-bold text-[14px] text-black">Rahul M., Mumbai</p>
              <p className="font-serif text-[14px] text-black/70">Tadoba, December 2023</p>
            </div>

            <div className="bg-[#ede4d1] rounded-[9px] p-8 relative">
              <Image
                src="/images/quote-icon.svg"
                alt=""
                width={40}
                height={45}
                className="absolute -top-4 left-6 rotate-180 -scale-y-100"
              />
              <p className="font-serif text-[15px] text-black leading-relaxed mb-6 mt-6">
                Forty-seven keepers in three days. The guide had me positioned twenty minutes
                before golden hour at the exact waterhole, and he knew which tiger and which
                direction. My 400mm finally earned its keep.
              </p>
              <p className="font-serif font-bold text-[14px] text-black">
                Priya K., Bangalore
              </p>
              <p className="font-serif text-[14px] text-black/70">Bandhavgarh, February 2024</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="font-serif italic text-[14px] text-black/60">
              4.9 / 5 from 200+ reviews
            </p>
          </div>

          <div className="mt-16">
            <OrnamentDivider />
          </div>
        </div>
      </section>

      {/* Not Just About Tigers - Wildlife Carousel */}
      <WildlifeCarousel />

      {/* Questions We Get Asked - FAQ section */}
      <section className="py-[80px] md:py-[100px] bg-[#ede4d1]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center section-heading text-[32px] md:text-[48px] mb-16">
            Questions We Get Asked
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-display font-bold text-[20px] md:text-[22px] mb-3">
                How much does a tiger safari in India cost?
              </h3>
              <p className="font-serif text-[15px] md:text-[16px] leading-relaxed text-[#081d01]">
                The actual cost depends on three things: which park, which lodge, and how long
                you go for. Premium lodges, peak season, and longer multi-park itineraries push
                the number up. Shoulder months and shorter single-park trips bring it down.
                Rather than quote a range that would be wrong for half our guests, we send a
                written and itemised quote within 24 hours of an enquiry. The quote is detailed
                enough that you can compare it line by line against any other operator&apos;s
                offer, and there is no deposit until you say yes.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-[20px] md:text-[22px] mb-3">
                Will I actually see a tiger?
              </h3>
              <p className="font-serif text-[15px] md:text-[16px] leading-relaxed text-[#081d01]">
                Probably. We do not guarantee wildlife sightings, because anyone who guarantees
                you a wild animal is selling you something we are not. Our guests see tigers
                on roughly 95% of trips, though, and that number is the result of fifteen years
                of knowing which park, which guide, which waterhole, and which hour. It is not
                luck.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-[20px] md:text-[22px] mb-3">
                Which is the best tiger reserve in India?
              </h3>
              <p className="font-serif text-[15px] md:text-[16px] leading-relaxed text-[#081d01]">
                Honestly, it depends what you want. Bandhavgarh for the best odds. Ranthambore
                for the fort photographs. Tadoba for weekend access from Mumbai. Kanha for the
                meadow light and the classic experience. <strong>Tiger reserve india</strong>{" "}
                is not really a single thing, and asking which one is best is a bit like asking
                which flavour of ice cream is best. Tell us what matters most to you and we
                will pick for you.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-[20px] md:text-[22px] mb-3">
                How far ahead should I book?
              </h3>
              <p className="font-serif text-[15px] md:text-[16px] leading-relaxed text-[#081d01]">
                Two to four weeks usually works. Peak season at Ranthambore (March to May)
                needs six to eight weeks because the permits are limited and the good lodges
                fill first. If your dates are inflexible, the earlier the better.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-[20px] md:text-[22px] mb-3">
                Is it safe for solo travellers, including women?
              </h3>
              <p className="font-serif text-[15px] md:text-[16px] leading-relaxed text-[#081d01]">
                Yes. A meaningful number of our guests come solo, and many of them are women
                travelling on their own. The guides are professional, the lodges are secure,
                and we are reachable by phone for the entire duration of the trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready for Safari CTA */}
      <section className="py-[100px] bg-[#081d01]" id="plan">
        <div className="max-w-[1184px] mx-auto px-6">
          <div className="bg-white rounded-[9px] py-[60px] md:py-[80px] px-[40px] md:px-[60px]">
            <h2 className="text-center section-heading text-[32px] md:text-[48px] text-black mb-6">
              Ready?
            </h2>
            <p className="text-center font-serif text-[16px] text-black mb-12 max-w-2xl mx-auto leading-relaxed">
              The permits are limited and the good lodges book out earlier than you expect, so
              the sooner you tell us your dates the more options we can give you. The rest is
              on us.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-[52px] h-[52px] bg-[#ede4d1] rounded-full flex items-center justify-center mb-6">
                  <span className="font-serif text-[28px] text-[#081d01]">1</span>
                </div>
                <h4 className="font-serif font-bold text-[18px] text-black mb-3">
                  Tell us your dates
                </h4>
                <p className="font-serif text-[15px] text-black max-w-[300px]">
                  Your dates and the cities you are flying in and out of.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-[52px] h-[52px] bg-[#ede4d1] rounded-full flex items-center justify-center mb-6">
                  <span className="font-serif text-[28px] text-[#081d01]">2</span>
                </div>
                <h4 className="font-serif font-bold text-[18px] text-black mb-3">
                  We build the itinerary
                </h4>
                <p className="font-serif text-[15px] text-black max-w-[300px]">
                  An itemised written quote within 24 hours.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-[52px] h-[52px] bg-[#ede4d1] rounded-full flex items-center justify-center mb-6">
                  <span className="font-serif text-[28px] text-[#081d01]">3</span>
                </div>
                <h4 className="font-serif font-bold text-[18px] text-black mb-3">
                  You confirm and go
                </h4>
                <p className="font-serif text-[15px] text-black max-w-[300px]">
                  We handle everything else.
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/enquire/"
                className="bg-[#e79e23] hover:bg-[#c8841a] transition-all text-white inline-flex items-center justify-center w-[255px] h-[52px] rounded-[9px] text-[16px] font-serif"
              >
                Plan Your Safari
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
