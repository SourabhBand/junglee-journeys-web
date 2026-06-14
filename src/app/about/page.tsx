import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, MarkdownContent, OrnamentDivider, AnimateOnScroll, NumberCounter } from "@/components";
import { getAboutContent } from "@/lib/content";

const content = getAboutContent();

export const metadata: Metadata = {
  title: content.metadata.metaTitle ?? "About Us | Expert Wildlife Tours India | Junglee Journeys",
  description:
    content.metadata.metaDescription ??
    "Meet the team behind Junglee Journeys. 10+ years of tiger safari experience, expert naturalists and a passion for India's wildlife. Learn our story.",
  alternates: { canonical: "https://jungleejourneys.com/about/" },
  openGraph: {
    title: content.metadata.metaTitle,
    description: content.metadata.metaDescription,
    type: "website",
  },
};

// Narrative prose (hero + "How This Started") stays sourced from the markdown.
// The Team / Numbers / CTA sections below render as structured components.
const storyMarkdown = content.body.split(/^##\s+The Team\s*$/m)[0].trim();

interface TeamMember {
  name: string;
  role: string;
  experience: string;
  speciality: string;
  note: string;
}

const TEAM: TeamMember[] = [
  {
    name: "Raviraj Soman",
    role: "Founder and Head Naturalist",
    experience: "10+ years",
    speciality: "Ecology, Tigers, Birds, Wildlife Tracking",
    note: "Along with wildlife, strongly passionate about football and French fries.",
  },
  {
    name: "Shreyasi Khandekar",
    role: "Trip Designer & Brand Lead",
    experience: "8+ years",
    speciality: "Itinerary Design, Social Media, R&D",
    note: "Scarily good at finding a needle in the colossal haystack that is the internet.",
  },
  {
    name: "Romesh Atre",
    role: "Field Ecologist",
    experience: "7+ years",
    speciality: "Biodiversity Surveys, Census Techniques",
    note: "Can outrun a wild boar without needing to run zig-zag.",
  },
];

const STATS: { end: number; suffix: string; label: string }[] = [
  { end: 10, suffix: "+", label: "Years guiding in the field" },
  { end: 500, suffix: "+", label: "Safaris run" },
  { end: 70, suffix: "%", label: "Guests who come back" },
];

export default function AboutPage() {
  return (
    <main className="font-body bg-white text-[#081d01] min-h-screen">
      <Header />

      {/* Hero + founder story (sourced from markdown) */}
      <MarkdownContent>{storyMarkdown}</MarkdownContent>

      {/* The Team */}
      <section className="py-[60px] md:py-[80px] bg-[#ede4d1]">
        <div className="max-w-7xl mx-auto px-6">
          <OrnamentDivider />
          <h2 className="text-center section-heading text-[28px] md:text-[40px] mb-10 leading-tight">
            The Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <AnimateOnScroll key={member.name} animation="fade-up" delay={i * 100}>
                <div className="bg-white p-7 md:p-8 h-full flex flex-col rounded-tl-[60px] md:rounded-tl-[80px] rounded-tr-[9px] rounded-br-[60px] md:rounded-br-[80px] rounded-bl-[9px]">
                  <h3 className="font-serif font-semibold text-[20px] md:text-[22px] leading-tight mb-1 text-[#081d01]">
                    {member.name}
                  </h3>
                  <div className="font-display text-[11px] uppercase tracking-[0.18em] text-[#c8841a] mb-4">
                    {member.role}
                  </div>
                  <hr className="gold-rule mb-5" />
                  <dl className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 font-serif text-[13px] md:text-[14px] mb-5">
                    <dt className="font-display text-[10px] uppercase tracking-[0.2em] text-[#081d01]/45 self-center">
                      Experience
                    </dt>
                    <dd className="text-[#081d01]/85">{member.experience}</dd>
                    <dt className="font-display text-[10px] uppercase tracking-[0.2em] text-[#081d01]/45">
                      Speciality
                    </dt>
                    <dd className="text-[#081d01]/85">{member.speciality}</dd>
                  </dl>
                  <p className="font-serif text-[14px] md:text-[15px] text-[#081d01]/70 leading-snug mt-auto italic">
                    {member.note}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* The Numbers */}
      <section className="py-[70px] md:py-[90px] bg-[#081d01] text-[#ede4d1]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="section-heading text-[44px] md:text-[60px] leading-none text-[#e79e23] mb-3">
                  <NumberCounter end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="font-display text-[11px] uppercase tracking-[0.2em] text-[#ede4d1]/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <p className="font-serif text-[16px] md:text-[18px] leading-relaxed text-white/90 max-w-3xl mx-auto text-center mt-12">
            The repeat clientele rate is the one that matters most. People do not come back for a
            tiger safari if the first one was just fine. The first trip is a gamble. The second one
            is the verdict.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[80px] md:py-[100px] bg-[#ede4d1]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="section-heading text-[28px] md:text-[40px] mb-6 leading-tight">
            Where Do You Want to Go?
          </h2>
          <p className="font-serif text-[16px] md:text-[18px] leading-relaxed mb-8">
            Let&apos;s keep it simple. Tell us what park you would like to go to, and we&apos;ll
            design an itinerary that is ideal for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/enquire/"
              className="bg-[#e79e23] hover:bg-[#c8841a] transition-all text-white inline-flex items-center justify-center w-[220px] h-[52px] rounded-[9px] text-[16px] font-serif"
            >
              Start Your Journey
            </Link>
            <Link
              href="/destinations/"
              className="border border-[#081d01]/30 hover:bg-[#081d01] hover:text-[#ede4d1] transition-all text-[#081d01] inline-flex items-center justify-center w-[220px] h-[52px] rounded-[9px] text-[16px] font-serif"
            >
              Explore Destinations
            </Link>
            <Link
              href="/safaris/"
              className="border border-[#081d01]/30 hover:bg-[#081d01] hover:text-[#ede4d1] transition-all text-[#081d01] inline-flex items-center justify-center w-[220px] h-[52px] rounded-[9px] text-[16px] font-serif"
            >
              Browse Safaris
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
