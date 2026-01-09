import Image from "next/image";

export default function Home() {
  return (
    <main className="font-body bg-white text-[#0b1c09] overflow-x-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-50 text-white p-6 md:p-10">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex space-x-8 uppercase text-xs tracking-[0.2em] font-medium">
            <a className="hover:text-[#d4a04d] transition" href="#">About</a>
            <a className="hover:text-[#d4a04d] transition" href="#">Destination</a>
            <a className="hover:text-[#d4a04d] transition" href="#">Safaries</a>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-display font-bold leading-none tracking-tighter">
              <span className="block">J</span>
              <span className="block -mt-2 ml-2">J</span>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8 uppercase text-xs tracking-[0.2em] font-medium">
              <a className="hover:text-[#d4a04d] transition" href="#">Blog</a>
              <a className="hover:text-[#d4a04d] transition" href="#">Gallery</a>
            </div>
            <button className="border border-white/50 px-6 py-2 uppercase text-[10px] tracking-[0.3em] font-semibold hover:bg-white hover:text-[#0b1c09] transition-all">
              Enquire Now
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          alt="Close up of a majestic tiger in the wild"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnoLL9SRSkiPyyDZPEmqHGqB5ypYvn4wCnhLh-ILxYhhcM49uNrP0zLeQ8Zj8lIcqYyYDSp_oZwFpbqNIEnV0rIZYDYhh_YaC6L-Pg0-9zVqpl6pIgFrlLQSqIBI7bWgelq2CsHX9AWNIH5dOptFO2Hg53ENfVgV9anEQonTwPncExH9u9bNQ_8yW70BX-gY-H9w5qJSmKknr7KnPTsfGkFILfXrvljz5yQ6H8xUpKrYqX4JSac-8P2ClEhK_x-jOvct49HE_SUHZ7"
          fill
          priority
        />
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 max-w-4xl px-4">
          <p className="font-serif italic text-xl md:text-2xl mb-4 tracking-wide">First-hand wilderness</p>
          <h1 className="font-display text-6xl md:text-9xl tracking-tighter leading-none mb-12">
            JUNGLEE <br/> JOURNEYS
          </h1>
          <a className="bg-[#d4a04d] hover:bg-opacity-90 transition-all text-white px-10 py-4 uppercase text-sm tracking-[0.3em] font-bold inline-block" href="#plan">
            Plan Your Safari
          </a>
          <div className="mt-20 flex justify-center space-x-8 md:space-x-16">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center text-sm font-bold mb-2">70%</div>
              <span className="text-[10px] uppercase tracking-widest text-white/70">Repeat Guests</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center text-sm font-bold mb-2">15+</div>
              <span className="text-[10px] uppercase tracking-widest text-white/70">Years Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center text-sm font-bold mb-2">500+</div>
              <span className="text-[10px] uppercase tracking-widest text-white/70">Safaris</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Travel With Us */}
      <section className="py-24 bg-[#f4f1ea]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="ornament-divider">
            <span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span>
          </div>
          <h2 className="text-center font-display text-4xl md:text-5xl mb-12 tracking-tight">WHY TRAVEL WITH US?</h2>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              Here&apos;s the thing about a tiger safari in India... you could book it yourself. Plenty of people do.
              But then you&apos;re stuck figuring out permits (good luck with that government portal), hoping your guide actually knows where
              tigers were spotted yesterday, and praying the lodge doesn&apos;t turn out to be nothing like the photos.
              We&apos;ve been organizing private safaris in India for 15 years now. We know which naturalists have an almost eerie sense for
              tracking tigers. We know which lodges genuinely deliver and which ones just have good marketing. We handle the logistics so
              you can actually be present when a tiger emerges from the tall grass instead of worrying about your 4 AM pickup.
              Not everyone needs this. But if you want your wildlife safari in India to feel effortless? That&apos;s exactly what we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#0b1c09] text-white p-8 rounded-xl text-center flex flex-col items-center">
              <h3 className="font-display text-xl mb-4">Private Safaris</h3>
              <p className="font-bold text-xs mb-4">Your vehicle. Your pace. Your moment with the tiger.</p>
              <p className="text-[10px] leading-relaxed opacity-80">No strangers debating camera angles. No compromises on where to go next. Just you, your group, and whatever the jungle decides to reveal.</p>
            </div>
            <div className="bg-[#0b1c09] text-white p-8 rounded-xl text-center flex flex-col items-center">
              <h3 className="font-display text-xl mb-4">Expert Naturalists</h3>
              <p className="font-bold text-xs mb-4">Guides who read the forest like a first language.</p>
              <p className="text-[10px] leading-relaxed opacity-80">They notice the alarm call you missed. They know this tigress&apos;s territory by heart. The difference? You don&apos;t just see wildlife. You understand it.</p>
            </div>
            <div className="bg-[#0b1c09] text-white p-8 rounded-xl text-center flex flex-col items-center">
              <h3 className="font-display text-xl mb-4">Luxury Lodges</h3>
              <p className="font-bold text-xs mb-4">Where wilderness meets genuine comfort.</p>
              <p className="text-[10px] leading-relaxed opacity-80">We&apos;ve stayed at every lodge we recommend. Some have magical forest views. All of them let you exhale after a dusty game drive.</p>
            </div>
            <div className="bg-[#0b1c09] text-white p-8 rounded-xl text-center flex flex-col items-center">
              <h3 className="font-display text-xl mb-4">Hassle-Free Planning</h3>
              <p className="font-bold text-xs mb-4">Permits, transfers, timing - we&apos;ve got it.</p>
              <p className="text-[10px] leading-relaxed opacity-80">Safari bookings in India can be... let&apos;s say, bureaucratic. We handle the complexity so your only job is to show up ready for adventure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* India's Premier Tiger Reserves */}
      <section className="py-24 bg-[#0b1c09] text-[#f4f1ea]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="ornament-divider">
            <span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span>
          </div>
          <h2 className="text-center font-display text-4xl md:text-5xl mb-12 tracking-tight">INDIA&apos;S PREMIER TIGER RESERVES</h2>
          <div className="max-w-3xl mx-auto text-center mb-16 text-sm text-[#f4f1ea]/80 leading-relaxed">
            <p className="mb-4">India is home to over half the world&apos;s wild tigers. But here&apos;s what most people don&apos;t realize: each park offers something completely different.</p>
            <p className="mb-4">Kanha has those sweeping meadows where tigers stroll in golden light. Ranthambore has ancient forts with tigers lounging in the ruins. Tadoba? Intimate encounters that feel almost too close. The best tiger safari destinations in India aren&apos;t interchangeable.</p>
            <p>Let us help you find the right one for you.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Kanha */}
            <div className="bg-white text-[#0b1c09] rounded-t-sm overflow-hidden flex flex-col h-full">
              <div className="h-64 overflow-hidden relative group">
                <Image
                  alt="Kanha National Park"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDni8f2uzFVfWkgrPAKKlLv9RKzOzpfKksEWgHjvWpm70S70i08X5uIhfArD_JJFNNHZq9VAHZ6wimsBCb7pjKJtHJMtra4pwXSQj29oPhvFE2-i1pNeCSD4kBpK_GJpBj2NqolMDgid0avWVcOdWIIHbGauC-XZzajNZLCalEcqEw6ds3NFFnTsZZZr311lLK-otQGNqx_OHw1sInaGQ1-k2lpvrVP_rzAHK2nvxoSnMySC9TUiKH5Ppm_ubIbWS5GankqivlpGEy"
                  fill
                />
              </div>
              <div className="p-6 flex-grow flex flex-col items-center text-center">
                <h4 className="font-display text-lg mb-4">Kanha National Park</h4>
                <p className="text-[10px] leading-relaxed mb-6 opacity-80 flex-grow">The Land of Mowgli. Endless meadows, sal forests, and tiger sightings that feel straight out of a documentary. If you want the classic Indian safari experience, start here.</p>
                <button className="bg-[#0b1c09] text-white text-[9px] tracking-[0.2em] px-4 py-2 uppercase font-bold">Explore Kanha</button>
              </div>
            </div>
            {/* Tadoba */}
            <div className="bg-white text-[#0b1c09] rounded-t-sm overflow-hidden flex flex-col h-full">
              <div className="h-64 overflow-hidden relative group">
                <Image
                  alt="Tadoba Tiger Reserve"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVfuOTqTbrdh9Pud4lvvylUE1KkZ6foWHQoTbX4HyPPcpUBNFa8jM-jYTwgRF5-yjWnFhKAmQJq9pau4fOEMvGoZQxaGd4UfQk0U5HsTEKz0ZSwUhSvmY228uOMXwx5s_wR-di7T2AcxKuQtBTdPL8NjS0UOceM552UKxRREaTWr7-FQMLDis1oT9V9kM9FH0wuRdm6vE-P0aEFq0O8UI3m-S9CZr6vaXZH-T_U_az-zHr0YXq0w-6l3LP4qpu8GCP1ENwKqS2NgCq"
                  fill
                />
              </div>
              <div className="p-6 flex-grow flex flex-col items-center text-center">
                <h4 className="font-display text-lg mb-4">Tadoba Tiger Reserve</h4>
                <p className="text-[10px] leading-relaxed mb-6 opacity-80 flex-grow">Just 3 hours from Mumbai. Tigers here are famously relaxed around vehicles - we&apos;ve had them walk right past, close enough to hear them breathing. Weekend-friendly and unforgettable.</p>
                <button className="bg-[#0b1c09] text-white text-[9px] tracking-[0.2em] px-4 py-2 uppercase font-bold">Explore Tadoba</button>
              </div>
            </div>
            {/* Ranthambore */}
            <div className="bg-white text-[#0b1c09] rounded-t-sm overflow-hidden flex flex-col h-full">
              <div className="h-64 overflow-hidden relative group">
                <Image
                  alt="Ranthambore National Park"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkSMzpSlKS4Q3Cp74G7K4lc9eftaNLJrq2fN-jvw-6OtnYEtc69SRPHpN2Jy3NlV8L_CSJTD4PDSb1I3--xS-TB4llIeFAyU8n1Ie_5JvVcpomzx77BjcwwxPqML3WCdU2y_X7UUuJhAI9QkFZzdCxcL97Ouj3kRGkrYdRc-TiNe8Mz4fpmwymTZKEqH8vEVoE7uessyPuBd1lvPeXOneM4ju6eGYEkXxsqV2jPMfshiBd7qa1W1ZLov9s91oghRG42YNe425bsq9T"
                  fill
                />
              </div>
              <div className="p-6 flex-grow flex flex-col items-center text-center">
                <h4 className="font-display text-lg mb-4">Ranthambore National Park</h4>
                <p className="text-[10px] leading-relaxed mb-6 opacity-80 flex-grow">India&apos;s most photographed tigers. Ancient forts. Lakes reflecting the golden light. It&apos;s dramatic, it&apos;s accessible from Delhi, and there&apos;s a reason everyone knows this one.</p>
                <button className="bg-[#0b1c09] text-white text-[9px] tracking-[0.2em] px-4 py-2 uppercase font-bold">Explore Ranthambore</button>
              </div>
            </div>
            {/* Bandhavgarh */}
            <div className="bg-white text-[#0b1c09] rounded-t-sm overflow-hidden flex flex-col h-full relative">
              <div className="h-64 overflow-hidden relative group">
                <Image
                  alt="Bandhavgarh National Park"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVr1CniM-U7bSlQNJ_kh1-6TvYq0tzNsnjh9EWnolIRLO5FjDkBXpIBSoPttemzNYAnR9nhTnXRckRCXeXtVqiep3vvve6LlNRm0SJYwAwTQA1ekgIlVPVqthYyWbnQrrL3yFWrHWCQ9VB01wqlZ6UqD9G0-vQLbJrXyPS_rSW7r5IYcLTVkEvtdsT96KhrDNcxzXfTKBZ_EQqroayzrQIfBpp7HkVitOERIEvOsVaWxbEFhMEPf7G8Jsm6zSznpdbJnLWU5W4veDn"
                  fill
                />
              </div>
              <div className="p-6 flex-grow flex flex-col items-center text-center">
                <h4 className="font-display text-lg mb-4">Bandhavgarh National Park</h4>
                <p className="text-[10px] leading-relaxed mb-6 opacity-80 flex-grow">Highest tiger density in India. Full stop. If seeing a tiger matters more than anything else, this is where you go. Most guests spot them on day one.</p>
                <button className="bg-[#0b1c09] text-white text-[9px] tracking-[0.2em] px-4 py-2 uppercase font-bold">Explore Bandhavgarh</button>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a className="inline-block bg-[#d4a04d] text-white text-[10px] tracking-[0.2em] font-bold px-10 py-3 uppercase" href="#">View All Destinations</a>
          </div>
        </div>
      </section>

      {/* Tailored Safari Experiences */}
      <section className="py-24 bg-[#0b1c09] text-[#f4f1ea] border-t border-[#f4f1ea]/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="font-display text-5xl mb-12 tracking-tight">TAILORED SAFARI EXPERIENCES</h2>
            <div className="space-y-6 text-sm text-[#f4f1ea]/80 leading-relaxed mb-12">
              <p>Every wildlife safari in India we plan is different. A photography enthusiast needs completely different timing than a family with kids. Someone looking for a quick jungle safari getaway has different priorities than someone planning the trip of a lifetime.</p>
              <p>Tell us what you&apos;re after. We&apos;ll design something that actually fits.</p>
            </div>
            <div className="ornament-divider justify-start">
              <span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span>
            </div>
            <button className="bg-[#d4a04d] text-white text-[10px] tracking-[0.2em] font-bold px-10 py-3 uppercase mt-8">Browse Safari Packages</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#f4f1ea] text-[#0b1c09] p-6 rounded-sm">
              <h4 className="font-display text-base mb-4 uppercase tracking-wider">Private Tiger Safaris</h4>
              <p className="text-[10px] font-bold mb-3">The classic luxury safari India experience.</p>
              <p className="text-[10px] opacity-80">Your own vehicle, your own naturalist, game drives timed around the best wildlife activity. No sharing, no rushing, no group dynamics to navigate.</p>
            </div>
            <div className="bg-[#f4f1ea] text-[#0b1c09] p-6 rounded-sm">
              <h4 className="font-display text-base mb-4 uppercase tracking-wider">Photography Expeditions</h4>
              <p className="text-[10px] font-bold mb-3">For those serious about the shot.</p>
              <p className="text-[10px] opacity-80">We work with photographers who know exactly where to position for the light, which hides offer the best angles, and when patience will pay off.</p>
            </div>
            <div className="bg-[#f4f1ea] text-[#0b1c09] p-6 rounded-sm">
              <h4 className="font-display text-base mb-4 uppercase tracking-wider">Weekend Escapes</h4>
              <p className="text-[10px] font-bold mb-3">2-3 nights. Maximum wilderness. Minimum logistics.</p>
              <p className="text-[10px] opacity-80">You&apos;re a professional in Mumbai, Delhi, or Bangalore who needs to disappear into nature for a few days. We make it happen—every weekend if you want.</p>
            </div>
            <div className="bg-[#f4f1ea] text-[#0b1c09] p-6 rounded-sm">
              <h4 className="font-display text-base mb-4 uppercase tracking-wider">Multi-Park Adventures</h4>
              <p className="text-[10px] font-bold mb-3">7-14 days across India&apos;s finest reserves.</p>
              <p className="text-[10px] opacity-80">Kanha&apos;s meadows, Bandhavgarh&apos;s density, Satpura&apos;s walking safaris. For the trip you&apos;ll talk about for decades, we connect the best of India&apos;s tiger country.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center font-display text-4xl md:text-5xl mb-16 tracking-tight">WHAT OUR GUESTS SAY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-[#f4f1ea] p-8 flex flex-col items-start relative">
              <span className="material-symbols-outlined text-[#d4a04d] text-5xl mb-4 leading-none">format_quote</span>
              <p className="text-[11px] leading-relaxed mb-8 flex-grow">An absolutely magical experience. We saw four different tigers in Bandhavgarh, and our naturalist&apos;s knowledge made every sighting special. The lodge was stunning this was the trip of a lifetime.</p>
              <div>
                <p className="font-bold text-[10px] uppercase">— Sarah & Michael, London, UK</p>
                <p className="text-[9px] opacity-60 uppercase">Bandhavgarh Safari, 2024</p>
              </div>
            </div>
            <div className="bg-[#f4f1ea] p-8 flex flex-col items-start relative">
              <span className="material-symbols-outlined text-[#d4a04d] text-5xl mb-4 leading-none">format_quote</span>
              <p className="text-[11px] leading-relaxed mb-8 flex-grow">As a Mumbai professional, I wanted a hassle-free weekend escape. Junglee Journeys delivered beyond expectations. Tadoba is just 8 hours away, and I came back with tiger photos I&apos;m still showing everyone.</p>
              <div>
                <p className="font-bold text-[10px] uppercase">— Rahul Mehta, Mumbai, India</p>
                <p className="text-[9px] opacity-60 uppercase">Tadoba Weekend, 2024</p>
              </div>
            </div>
            <div className="bg-[#f4f1ea] p-8 flex flex-col items-start relative">
              <span className="material-symbols-outlined text-[#d4a04d] text-5xl mb-4 leading-none">format_quote</span>
              <p className="text-[11px] leading-relaxed mb-8 flex-grow">I&apos;ve been on safaris in Africa, but India&apos;s tigers are different—more personal, more intense. The team understood exactly what I needed as a photographer. Exceptional.</p>
              <div>
                <p className="font-bold text-[10px] uppercase">— James Chen, Sydney, Australia</p>
                <p className="text-[9px] opacity-60 uppercase">Photography Expedition, 2024</p>
              </div>
            </div>
          </div>
          <div className="ornament-divider text-gray-200">
            <span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span>
          </div>
        </div>
      </section>

      {/* Not Just About Tigers */}
      <section className="py-24 bg-[#0b1c09] text-[#f4f1ea] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0,100 Q20,20 40,80 T80,0 T100,50" fill="none" stroke="currentColor" strokeWidth="0.1"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-center font-display text-4xl md:text-5xl mb-8 tracking-tight">IT&apos;S NOT JUST ABOUT TIGERS</h2>
          <div className="max-w-3xl mx-auto text-center mb-16 text-[11px] text-[#f4f1ea]/70 uppercase tracking-widest leading-relaxed">
            Tigers get all the attention (fair enough, they&apos;re magnificent). But India&apos;s wildlife story is so much bigger. There are only about 700 Asiatic lions left in the world — all of them in one forest in Gujarat. And Kaziranga? It&apos;s got more one-horned rhinos than anywhere on Earth. Just saying.
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div className="relative group">
              <div className="relative h-[400px] w-full">
                <Image
                  alt="Asiatic Lion"
                  className="rounded-sm shadow-2xl object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpluZBgIyoEZXDIRnsL7p5ckZPIB1v19IeKscwo1XoKdouH95bO-mrlavJeetnOaipnveb5hGdIUyANfHSYAmSS4K11LY8_wwP4iBek5Sr5uvudYByMjufIx2EvxF_up6AJarmOKHS87BQ5LaLp6Xn8B21hIolI-J5I8AoqOl1Ej3NOpJzOi1_1WlGIgzezwhtPBTPGkAka0tkQxgFb_wwiTxwobXdBtGcpcgb6FFk1DSh8vHM1E2VRC8_ZQVGy2YSW6e0YjICwblv"
                  fill
                />
              </div>
              <div className="absolute inset-0 border border-[#f4f1ea]/20 -m-4 -z-10"></div>
            </div>
            <div className="lg:pl-16 flex flex-col items-center lg:items-start text-center lg:text-left bg-[#1a2e18]/50 p-12 rounded-sm backdrop-blur-sm">
              <h3 className="font-display text-4xl mb-6">Asiatic Lions</h3>
              <p className="text-sm mb-8 opacity-80">The last wild Asiatic lions. All 700 of them. One forest. Gir.</p>
              <div className="space-y-2 mb-10 text-xs tracking-widest uppercase">
                <p>Location - Gir National Park</p>
                <p>Population - 700</p>
              </div>
              <button className="bg-[#d4a04d] text-white text-[10px] tracking-[0.2em] font-bold px-10 py-3 uppercase">Browse Safari Packages</button>
              <button className="mt-12 w-10 h-10 border border-[#f4f1ea]/30 rounded-full flex items-center justify-center hover:bg-[#f4f1ea] hover:text-[#0b1c09] transition-all">
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ready for Safari CTA */}
      <section className="py-24 bg-white" id="plan">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center font-display text-4xl md:text-5xl mb-4 tracking-tight">READY FOR YOUR TIGER SAFARI?</h2>
          <p className="text-center text-[11px] uppercase tracking-widest opacity-60 mb-20">Planning your perfect wildlife journey is simpler than you might think:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 bg-[#0b1c09] text-white rounded-full flex items-center justify-center font-display text-xl mb-6">1</div>
              <h4 className="font-display text-lg mb-4">Tell Us What You&apos;re Dreaming Of</h4>
              <p className="text-[10px] opacity-80 leading-relaxed">Dates you&apos;re considering. What matters most to you. Whether you&apos;ve done this before or it&apos;s completely new.</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 bg-[#0b1c09] text-white rounded-full flex items-center justify-center font-display text-xl mb-6">2</div>
              <h4 className="font-display text-lg mb-4">We Craft Your Journey</h4>
              <p className="text-[10px] opacity-80 leading-relaxed">A personalized itinerary with lodges we&apos;d stay at ourselves and naturalists that match how you actually travel.</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 bg-[#0b1c09] text-white rounded-full flex items-center justify-center font-display text-xl mb-6">3</div>
              <h4 className="font-display text-lg mb-4">You Experience the Wild</h4>
              <p className="text-[10px] opacity-80 leading-relaxed">Show up. Breathe in the forest. Let the jungle do what it does.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b1c09] text-[#f4f1ea] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="ornament-divider mb-12">
            <span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span><span>&#10019;</span>
          </div>
          <div className="flex flex-col items-center mb-10">
            <div className="text-5xl font-display font-bold leading-none tracking-tighter mb-8">
              <span className="block">J</span>
              <span className="block -mt-2 ml-2">J</span>
            </div>
            <div className="flex space-x-8 uppercase text-[10px] tracking-[0.3em] opacity-60">
              <a className="hover:text-[#d4a04d] transition" href="#">About</a>
              <a className="hover:text-[#d4a04d] transition" href="#">Privacy</a>
              <a className="hover:text-[#d4a04d] transition" href="#">Terms</a>
              <a className="hover:text-[#d4a04d] transition" href="#">Contact</a>
            </div>
          </div>
          <p className="text-[9px] uppercase tracking-widest opacity-40">&copy; 2024 JUNGLEE JOURNEYS. ALL WILDLIFE SIGHTINGS ARE SUBJECT TO THE WHIMS OF NATURE.</p>
        </div>
      </footer>
    </main>
  );
}
