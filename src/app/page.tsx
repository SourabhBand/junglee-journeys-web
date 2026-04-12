import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { OrnamentDivider, ArrowButton, Header, Footer, FAQAccordion } from "@/components";
import { IMAGE_ASSETS } from "@/lib/assets";

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

      <section className="relative h-[854px] flex flex-col items-center justify-center text-center text-white overflow-hidden">
        {/* SEO H1 - visually hidden */}
        <h1 className="sr-only">Private Tiger Safaris Across India</h1>

        {/* Hero background image */}
        <Image
          alt="Tiger walking through sal forest at dawn"
          className="absolute inset-0 w-full h-full object-cover"
          src={IMAGE_ASSETS.heroTiger}
          fill
          priority
        />
        {/* Gradient overlay */}
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

          {/* CTA buttons - Plan Your Safari + WhatsApp */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              className="bg-[rgba(231,158,35,0.81)] hover:bg-[#e79e23] transition-all text-white w-[255px] h-[52px] rounded-[9px] text-[16px] font-serif inline-flex items-center justify-center"
              href="/enquire/"
            >
              Plan Your Safari
            </Link>
            <Link
              className="border border-white text-white hover:bg-white/10 transition-all w-[255px] h-[52px] rounded-[9px] text-[16px] font-serif inline-flex items-center justify-center"
              href="https://wa.me/"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>

        {/* Stats strip at bottom */}
        <div className="absolute bottom-[56px] left-0 right-0 z-10">
          <div className="flex justify-center gap-8 md:gap-[120px] lg:gap-[200px]">
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

      {/* ===== SECTION 2: HERO INTRO + WHY TRAVEL WITH US (continuous beige) ===== */}
      <section className="pt-[100px] pb-[100px] bg-[#ede4d1]">
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <p className="font-serif text-[16px] leading-[160%] text-center">
            We have spent fifteen years arranging <strong>tiger safari in India</strong> trips for those people. Your own jeep, a naturalist who knows the local tigress by name (and her two cubs from last March), and lodges we have personally slept in often enough to have opinions about the breakfast. Permits, airport transfers, and the 4 AM wake-up call: all of it sits with us, handled by people who do this every week and have very little patience for it going wrong. Your only job is to turn up with socks and a camera.
          </p>
        </div>
      </section>

      {/* ===== SECTION 3: WHY TRAVEL WITH US ===== */}
      <section className="pb-[100px] bg-[#ede4d1]">
        <div className="max-w-7xl mx-auto px-6">
          <OrnamentDivider />
          <h2 className="text-center section-heading text-[48px] mb-12">
            Why Travel With Us?
          </h2>

          {/* Intro paragraphs */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="font-serif text-[16px] leading-[160%] text-[#081d01] mb-4">
              Most of our guests arrive with a version of the same problem. They have between five and ten days, they have always wanted to see a tiger in the wild, and they have no idea which of India&apos;s fifty-odd tiger reserves to actually go to. They have read four blog posts that all say different things and looked at three TripAdvisor pages where the photographs are clearly from a different planet. They are slightly suspicious of how much this is going to cost. They are also slightly worried that if they pick wrong, they will have spent the budget on a forest with no tigers in it.
            </p>
            <p className="font-serif text-[16px] leading-[160%] text-[#081d01]">
              We have planned hundreds of these trips. The boring middle (which park, which dates, which lodge, which guide, which permits, which 4 AM pickup) is the part we have completely solved. The exciting part is the part we hand back to you on the day you arrive.
            </p>
          </div>

          {/* 4 feature blocks in 2x2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Block 1 */}
            <div>
              <h3 className="font-serif font-bold text-[22px] text-[#081d01] mb-3">
                Your own jeep, and only your own jeep
              </h3>
              <p className="font-serif text-[16px] text-[#081d01] leading-[160%]">
                There is no second jeep behind you, no third jeep in front, and no group of strangers debating camera settings in loud whispers while a tigress walks past your bonnet. The vehicle is yours, the pace is yours, and the only person on the radio is your guide. This sounds obvious. It is not the default arrangement at most reserves, and the difference is the entire trip.
              </p>
            </div>

            {/* Block 2 */}
            <div>
              <h3 className="font-serif font-bold text-[22px] text-[#081d01] mb-3">
                Naturalists who actually live here
              </h3>
              <p className="font-serif text-[16px] text-[#081d01] leading-[160%]">
                Our guides are not freelance contractors we round up the week before your trip. They are people who have been tracking these tigers for ten or fifteen years, who know which tigress uses which waterhole at 6:40 AM in March, and who can read an alarm call from three hundred metres away and tell you which species is doing the calling and roughly why. They notice the things you miss. The good ones make a sighting feel inevitable. The great ones make the waiting feel like the actual point of being there.
              </p>
            </div>

            {/* Block 3 */}
            <div>
              <h3 className="font-serif font-bold text-[22px] text-[#081d01] mb-3">
                Lodges we have actually slept in
              </h3>
              <p className="font-serif text-[16px] text-[#081d01] leading-[160%]">
                We do not recommend lodges from photographs. Every property on our shortlist is one we have stayed at, eaten at, complained about, and decided was good enough to send our guests to. Some of them have astonishingly good food. Some have a single window that frames the forest in a way you remember years later. All of them let you exhale after a dusty game drive, and that is more important than the thread count.
              </p>
            </div>

            {/* Block 4 */}
            <div>
              <h3 className="font-serif font-bold text-[22px] text-[#081d01] mb-3">
                Nothing for you to figure out
              </h3>
              <p className="font-serif text-[16px] text-[#081d01] leading-[160%]">
                The permits, the lodge bookings, the airport pickup, the inter-park transfers, the 4 AM wake-up call, the boring spreadsheet of permit zone allocations: all of it sits with us. Your job is to send us your dates and turn up at the airport. Our job is everything in between.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: INDIA'S PREMIER TIGER RESERVES ===== */}
      <section className="py-[100px] bg-[#081d01] text-[#ede4d1]">
        <div className="max-w-7xl mx-auto px-6">
          <OrnamentDivider variant="light" />
          <h2 className="text-center section-heading text-[48px] mb-12 text-[#ede4d1]">
            India&apos;s Premier Tiger Reserves
          </h2>

          {/* Intro text */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="font-serif text-[16px] text-white leading-[160%]">
              India holds more than half the world&apos;s wild tigers, which is the kind of statistic that sounds invented until you visit and realise it is, slightly improbably, true. The country gazettes more than fifty official tiger reserves, and we operate in eleven of them. Each one is a completely different argument for going. Six to start with.
            </p>
          </div>

          {/* 6 Destination Cards - alternating layout */}
          {/* Card 1: Kanha (image left) */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="w-full md:w-1/2">
              <Link href="/destination/kanha/">
                <Image
                  src={IMAGE_ASSETS.kanhaNationalPark}
                  alt="Kanha National Park"
                  width={552}
                  height={399}
                  className="rounded-[9px] w-full h-[300px] object-cover"
                />
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="font-serif font-bold text-[28px] text-[#ede4d1] mb-4">
                Kanha National Park
              </h3>
              <p className="font-serif text-[16px] text-white/90 leading-[150%] mb-6">
                Kanha is what Mowgli&apos;s forest looked like before the marketing department got involved. Sal trees in straight ranks, meadows wide enough that you forget what you came here for, and a tiger population that has held steady for two decades because the people running this park are very serious about their work and very polite about telling you so. The classic Central Indian jungle safari experience, and the one most first-timers should start with. Four hours by road from Jabalpur airport.
              </p>
              <Link
                href="/destination/kanha/"
                className="bg-[#081d01] border border-[#ede4d1] text-white font-serif text-[16px] inline-flex items-center justify-center w-[192px] h-[44px] rounded-[9px] hover:bg-[#ede4d1] hover:text-[#081d01] transition"
              >
                Explore Park
              </Link>
            </div>
          </div>

          {/* Card 2: Tadoba (image right - reversed) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
            <div className="w-full md:w-1/2">
              <Link href="/destination/tadoba/">
                <Image
                  src={IMAGE_ASSETS.tadobaTigerReserve}
                  alt="Tadoba Tiger Reserve"
                  width={904}
                  height={399}
                  className="rounded-[9px] w-full h-[300px] object-cover"
                />
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="font-serif font-bold text-[28px] text-[#ede4d1] mb-4">
                Tadoba Tiger Reserve
              </h3>
              <p className="font-serif text-[16px] text-white/90 leading-[150%] mb-6">
                Tadoba is the closest tiger reserve to Mumbai and Pune, which makes it the best safari near Mumbai by a wide margin and the only park where Friday-to-Monday is genuinely realistic. Open terrain, bold tigers that walk past jeeps without breaking stride, and sighting rates that quietly embarrass the more famous parks. Three hours by road from Nagpur airport.
              </p>
              <Link
                href="/destination/tadoba/"
                className="bg-[#081d01] border border-[#ede4d1] text-white font-serif text-[16px] inline-flex items-center justify-center w-[192px] h-[44px] rounded-[9px] hover:bg-[#ede4d1] hover:text-[#081d01] transition"
              >
                Explore Park
              </Link>
            </div>
          </div>

          {/* Card 3: Ranthambore (image left) */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="w-full md:w-1/2">
              <Link href="/destination/ranthambore/">
                <Image
                  src={IMAGE_ASSETS.ranthamboreNationalPark}
                  alt="Ranthambore National Park"
                  width={599}
                  height={400}
                  className="rounded-[9px] w-full h-[300px] object-cover"
                />
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="font-serif font-bold text-[28px] text-[#ede4d1] mb-4">
                Ranthambore National Park
              </h3>
              <p className="font-serif text-[16px] text-white/90 leading-[150%] mb-6">
                The most photographed tigers on Earth live in Ranthambore, and they walk through the ruins of a tenth-century fort in the kind of golden hour that photographers travel years to find. Five hours from Delhi by road, which makes Ranthambore the easiest safari near Delhi by a long way. The park is iconic for a reason, and the reason is genuinely good.
              </p>
              <Link
                href="/destination/ranthambore/"
                className="bg-[#081d01] border border-[#ede4d1] text-white font-serif text-[16px] inline-flex items-center justify-center w-[192px] h-[44px] rounded-[9px] hover:bg-[#ede4d1] hover:text-[#081d01] transition"
              >
                Explore Park
              </Link>
            </div>
          </div>

          {/* Card 4: Bandhavgarh (image right - reversed) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
            <div className="w-full md:w-1/2">
              <Link href="/destination/bandhavgarh/">
                <Image
                  src={IMAGE_ASSETS.bandhavgarhNationalPark}
                  alt="Bandhavgarh National Park"
                  width={605}
                  height={404}
                  className="rounded-[9px] w-full h-[300px] object-cover"
                />
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="font-serif font-bold text-[28px] text-[#ede4d1] mb-4">
                Bandhavgarh National Park
              </h3>
              <p className="font-serif text-[16px] text-white/90 leading-[150%] mb-6">
                Bandhavgarh has the highest tiger density in India, which is a polite way of saying you will probably see one before lunch on day one. If your priority is the odds, this is where you go. The fort on the hill is two thousand years old, the locals will tell you. (It is closer to a thousand. Either way, old enough.)
              </p>
              <Link
                href="/destination/bandhavgarh/"
                className="bg-[#081d01] border border-[#ede4d1] text-white font-serif text-[16px] inline-flex items-center justify-center w-[192px] h-[44px] rounded-[9px] hover:bg-[#ede4d1] hover:text-[#081d01] transition"
              >
                Explore Park
              </Link>
            </div>
          </div>

          {/* Card 5: Pench (image left) */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="w-full md:w-1/2">
              <Link href="/destination/pench/">
                <Image
                  src={IMAGE_ASSETS.kanhaNationalPark}
                  alt="Pench National Park"
                  width={552}
                  height={399}
                  className="rounded-[9px] w-full h-[300px] object-cover"
                />
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="font-serif font-bold text-[28px] text-[#ede4d1] mb-4">
                Pench National Park
              </h3>
              <p className="font-serif text-[16px] text-white/90 leading-[150%] mb-6">
                Pench is the actual Jungle Book setting, although Kipling never set foot in it and is therefore not strictly qualified to comment. Two hours from Nagpur, relaxed enough for families with young children, and the only one of our parks where you have a serious chance at seeing wild dogs hunting. Tigers, leopards, and the kind of forest that does not bother showing off.
              </p>
              <Link
                href="/destination/pench/"
                className="bg-[#081d01] border border-[#ede4d1] text-white font-serif text-[16px] inline-flex items-center justify-center w-[192px] h-[44px] rounded-[9px] hover:bg-[#ede4d1] hover:text-[#081d01] transition"
              >
                Explore Park
              </Link>
            </div>
          </div>

          {/* Card 6: Satpura (image right - reversed) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
            <div className="w-full md:w-1/2">
              <Link href="/destination/satpura/">
                <Image
                  src={IMAGE_ASSETS.tadobaTigerReserve}
                  alt="Satpura National Park"
                  width={904}
                  height={399}
                  className="rounded-[9px] w-full h-[300px] object-cover"
                />
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="font-serif font-bold text-[28px] text-[#ede4d1] mb-4">
                Satpura National Park
              </h3>
              <p className="font-serif text-[16px] text-white/90 leading-[150%] mb-6">
                Satpura is the wildlife safari for guests who have already done Kanha and Bandhavgarh and want a quieter version of the trip. Walking safaris and boat safaris and almost no jeeps. Sloth bears, gaur, leopards, and the occasional tiger when she feels like making an appearance.
              </p>
              <Link
                href="/destination/satpura/"
                className="bg-[#081d01] border border-[#ede4d1] text-white font-serif text-[16px] inline-flex items-center justify-center w-[192px] h-[44px] rounded-[9px] hover:bg-[#ede4d1] hover:text-[#081d01] transition"
              >
                Explore Park
              </Link>
            </div>
          </div>

          {/* Closing paragraph */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-serif text-[16px] text-white/90 leading-[160%]">
              These six are the parks we run most often, but they are not the only ones we work in. Five more (Corbett, Kaziranga, Manas, Panna, and Gir) round out our list of eleven. Pick the wrong park for your dates and the best tiger safari India has on offer will still feel generic. Pick the right one and you have the kind of week that quietly reorganises how you think about your free time.
            </p>
          </div>

          {/* CTA: View All Destinations */}
          <div className="text-center">
            <Link
              href="/destinations/"
              className="bg-[#e79e23] hover:bg-[rgba(231,158,35,0.81)] transition-all text-white w-[255px] h-[52px] rounded-[9px] text-[16px] font-serif inline-flex items-center justify-center"
            >
              View All 11 Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: TAILORED SAFARI EXPERIENCES ===== */}
      <section className="py-[100px] bg-[#081d01] text-[#ede4d1]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Centered H2 */}
          <h2 className="text-center section-heading text-[48px] mb-12 text-[#ede4d1]">
            Tailored Safari Experiences
          </h2>

          {/* Centered intro paragraph */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="font-serif text-[16px] text-white leading-[160%]">
              The trip we sell you is the trip you actually want, not the trip we wish you would buy. A photographer with a 400mm lens needs a completely different itinerary from a couple celebrating their tenth anniversary, who in turn need a completely different itinerary from a family with a six-year-old who can identify forty species of bird by call. We do not run group departures and we do not sell off-the-shelf packages. The starting points below are the experiences we have built often enough to have opinions about, and each one becomes your version of the trip the moment you tell us your dates.
            </p>
          </div>

          {/* 2x2 card grid - full width */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Card 1 */}
            <div>
              <h3 className="font-serif font-bold text-[24px] text-white leading-[136.9%] mb-4">
                <Link href="/safaris/" className="hover:opacity-70 transition">
                  Private Tiger Safaris
                </Link>
              </h3>
              <div className="bg-[#ede4d1] text-[#081d01] rounded-[9px] p-6 min-h-0">
                <p className="font-serif font-bold text-[16px] leading-[136.9%] mb-2">
                  The default for most of our guests.
                </p>
                <p className="font-serif text-[16px] leading-[136.9%]">
                  A private safari India trip with us means your own jeep, your own naturalist, and game drives timed around the actual wildlife activity rather than the tour bus schedule. No sharing. No rushing. No second jeep idling behind you while a tigress decides whether to cross the road.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div>
              <h3 className="font-serif font-bold text-[24px] text-white leading-[136.9%] mb-4">
                <Link href="/safari/photography-special/" className="hover:opacity-70 transition">
                  Photography Expeditions
                </Link>
              </h3>
              <div className="bg-[#ede4d1] text-[#081d01] rounded-[9px] p-6 min-h-0">
                <p className="font-serif font-bold text-[16px] leading-[136.9%] mb-2">
                  For photographers who care which hide they are sitting in and at what hour.
                </p>
                <p className="font-serif text-[16px] leading-[136.9%]">
                  With guides who understand light and animal behaviour at the level you actually need them to. The right waterhole, the right window, the right time of year for the species you came for.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div>
              <h3 className="font-serif font-bold text-[24px] text-white leading-[136.9%] mb-4">
                <Link href="/safari/ranthambore-weekend/" className="hover:opacity-70 transition">
                  Weekend Escapes
                </Link>
              </h3>
              <div className="bg-[#ede4d1] text-[#081d01] rounded-[9px] p-6 min-h-0">
                <p className="font-serif font-bold text-[16px] leading-[136.9%] mb-2">
                  Two or three nights in Tadoba, Ranthambore, or Pench.
                </p>
                <p className="font-serif text-[16px] leading-[136.9%]">
                  Depending on which city you fly out of. The kind of weekend that resets a year of city living and has you wondering, on the flight home, whether you can negotiate a Friday off for next month.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div>
              <h3 className="font-serif font-bold text-[24px] text-white leading-[136.9%] mb-4">
                <Link href="/safari/central-india-tiger-trail/" className="hover:opacity-70 transition">
                  Multi-Park Adventures
                </Link>
              </h3>
              <div className="bg-[#ede4d1] text-[#081d01] rounded-[9px] p-6 min-h-0">
                <p className="font-serif font-bold text-[16px] leading-[136.9%] mb-2">
                  Seven to fourteen nights across India&apos;s best reserves.
                </p>
                <p className="font-serif text-[16px] leading-[136.9%]">
                  Kanha to Bandhavgarh to Pench, or Ranthambore north into Corbett, or any combination that makes geographical sense for the dates you actually have. The trip you will still be telling people about a decade later.
                </p>
              </div>
            </div>
          </div>

          {/* CTA: Browse Safari Packages */}
          <div className="text-center">
            <Link
              href="/safaris/"
              className="bg-[#e79e23] hover:bg-[rgba(231,158,35,0.81)] transition-all text-white w-[255px] h-[52px] rounded-[9px] text-[16px] font-serif inline-flex items-center justify-center"
            >
              Browse Safari Packages
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: WHAT OUR GUESTS SAY ===== */}
      <section className="bg-white relative py-[100px]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center section-heading text-[48px] text-black mb-16">
            What Our Guests Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 */}
            <div className="bg-[#ede4d1] rounded-[9px] p-8 flex flex-col">
              <p className="font-serif text-[16px] text-black leading-[160%] mb-auto">
                Eight tiger sightings in six drives. Our guide Ramesh predicted a tigress at waterhole 3 at 6:40 AM in March. She showed up at 6:38, which I have brought up at every dinner party since. Singinawa Lodge was perfect. Already planning the next one.
              </p>
              <div className="mt-6 pt-6 border-t border-[#081d01]/20">
                <p className="font-serif font-bold text-[16px] text-black">
                  Sarah and James T., London
                </p>
                <p className="font-serif text-[14px] text-black/70">
                  Kanha, March 2024
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#ede4d1] rounded-[9px] p-8 flex flex-col">
              <p className="font-serif text-[16px] text-black leading-[160%] mb-auto">
                Left Mumbai on a Friday night. First tiger by Saturday at 6 AM. Zero hassle anywhere in the chain. Already planning trip three.
              </p>
              <div className="mt-6 pt-6 border-t border-[#081d01]/20">
                <p className="font-serif font-bold text-[16px] text-black">
                  Rahul M., Mumbai
                </p>
                <p className="font-serif text-[14px] text-black/70">
                  Tadoba, December 2023
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#ede4d1] rounded-[9px] p-8 flex flex-col">
              <p className="font-serif text-[16px] text-black leading-[160%] mb-auto">
                Forty-seven keepers in three days. The guide had me positioned twenty minutes before golden hour at the exact waterhole, and he knew which tiger and which direction. My 400mm finally earned its keep, and I have stopped pretending I am taking it on holiday for fun.
              </p>
              <div className="mt-6 pt-6 border-t border-[#081d01]/20">
                <p className="font-serif font-bold text-[16px] text-black">
                  Priya K., Bangalore
                </p>
                <p className="font-serif text-[14px] text-black/70">
                  Bandhavgarh, February 2024
                </p>
              </div>
            </div>
          </div>

          {/* Rating info */}
          <div className="text-center mb-8">
            <p className="font-serif text-[16px] text-[#081d01]">
              <strong>4.9 / 5</strong> from 200+ reviews
            </p>
          </div>

          <OrnamentDivider />
        </div>
      </section>

      {/* ===== SECTION 7: FAQ ACCORDION ===== */}
      <section className="py-[100px] bg-[#ede4d1]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center section-heading text-[48px] mb-12">
            Questions We Get Asked
          </h2>
          <FAQAccordion />
        </div>
      </section>

      {/* ===== SECTION 8: READY CTA ===== */}
      <section className="py-[100px] bg-[#081d01]" id="plan">
        <div className="max-w-[1184px] mx-auto px-6">
          <div className="bg-white rounded-[9px] py-[80px] px-[60px]">
            <h2 className="text-center section-heading text-[56px] text-black mb-4">
              Ready?
            </h2>
            <p className="text-center font-serif text-[16px] text-black mb-12">
              The permits are limited and the good lodges book out earlier than you expect, so the sooner you tell us your dates the more options we can give you. The rest is on us.
            </p>

            {/* 3-step process */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <div className="flex flex-col items-center text-center">
                <div className="w-[52px] h-[52px] bg-[#ede4d1] rounded-full flex items-center justify-center mb-6">
                  <span className="font-serif text-[40px] text-[#081d01]">1</span>
                </div>
                <h4 className="font-serif font-bold text-[20px] text-black mb-4">
                  Tell us your dates
                </h4>
                <p className="font-serif text-[16px] text-black">
                  Tell us your dates and the cities you are flying in and out of.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-[52px] h-[52px] bg-[#ede4d1] rounded-full flex items-center justify-center mb-6">
                  <span className="font-serif text-[40px] text-[#081d01]">2</span>
                </div>
                <h4 className="font-serif font-bold text-[20px] text-black mb-4">
                  We build the itinerary
                </h4>
                <p className="font-serif text-[16px] text-black">
                  We build the itinerary and send you an itemised written quote within 24 hours.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-[52px] h-[52px] bg-[#ede4d1] rounded-full flex items-center justify-center mb-6">
                  <span className="font-serif text-[40px] text-[#081d01]">3</span>
                </div>
                <h4 className="font-serif font-bold text-[20px] text-black mb-4">
                  You confirm
                </h4>
                <p className="font-serif text-[16px] text-black">
                  You confirm. We handle everything else.
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link
                className="bg-[#e79e23] hover:bg-[rgba(231,158,35,0.81)] transition-all text-white w-[255px] h-[52px] rounded-[9px] text-[16px] font-serif inline-flex items-center justify-center"
                href="/enquire/"
              >
                Plan Your Safari
              </Link>
              <Link
                className="border border-[#081d01] text-[#081d01] hover:bg-[#081d01] hover:text-white transition-all w-[255px] h-[52px] rounded-[9px] text-[16px] font-serif inline-flex items-center justify-center"
                href="https://wa.me/"
              >
                WhatsApp Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </main>
  );
}
