"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80')",
        }}
      />
      {/* Lighter overlay — let the image breathe */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* Content — pt-20 on mobile (clears 64px navbar), pt-32 on desktop */}
      <div className="relative z-10 text-center w-full max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-36 pb-20">

        {/* Eyebrow badge */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
          <div className="h-px w-8 sm:w-16 bg-gold" />
          <span className="bg-gold/20 border border-gold text-gold text-[11px] sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase font-sans font-bold px-4 sm:px-6 py-2 backdrop-blur-sm shadow-lg shadow-gold/10">
            Purva Hennur · North Bangalore
          </span>
          <div className="h-px w-8 sm:w-16 bg-gold" />
        </div>

        {/* Headline — brighter cream, tighter on mobile */}
        <h1 className="font-serif text-[2.2rem] sm:text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.15] mb-4 sm:mb-6 drop-shadow-2xl">
          A Rare Address of{" "}
          <br className="sm:hidden" />
          <span className="italic gold-shimmer">Space, Privacy</span>
          <br />
          <span className="text-white">&amp; Prestige in Hennur</span>
        </h1>

        {/* Subheadline — brighter and bolder */}
        <p className="font-sans text-white text-xs sm:text-sm md:text-base lg:text-lg tracking-[0.15em] sm:tracking-widest uppercase mt-4 mb-8 sm:mb-10 drop-shadow-lg">
          Ultra-Luxury 3 &amp; 4 BHK&nbsp;·&nbsp;1950–2790 Sqft&nbsp;·&nbsp;192 Homes
        </p>

        {/* Highlight Points — 2 col on mobile always, full on md */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-8 sm:mb-10 max-w-3xl mx-auto">
          {[
            { icon: "🌿", text: "75% Open Green Spaces" },
            { icon: "🚗", text: "No Vehicle on Surface" },
            { icon: "🏠", text: "Premium Corner Units" },
            { icon: "🏊", text: "Dual Clubhouse" },
          ].map((item) => (
            <div
              key={item.text}
              className="border border-gold/50 bg-black/40 backdrop-blur-md px-2 sm:px-3 py-3 sm:py-4 text-center hover:border-gold hover:bg-black/50 transition-all duration-300"
            >
              <div className="text-xl sm:text-2xl mb-1.5">{item.icon}</div>
              <p className="text-white text-[10px] sm:text-xs tracking-wider uppercase font-sans leading-snug font-semibold">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs — stack on mobile, row on sm+ */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">

          {/* Primary — Book Viewing */}
          <a
            href="#contact"
            className="group relative flex items-center overflow-hidden bg-gold hover:bg-gold-light transition-colors duration-300 shadow-2xl shadow-gold/40 w-full sm:w-auto"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            <span className="flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 bg-[#a8822e]/40 border-r border-[#a8822e]/50 flex-shrink-0">
              <svg className="w-5 h-5 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
            <span className="flex-1 sm:flex-none px-5 sm:px-7 text-[#111827] font-sans font-bold text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase whitespace-nowrap text-center sm:text-left">
              Book a Private Viewing
            </span>
            <span className="flex items-center justify-center w-10 sm:w-12 h-12 sm:h-14 bg-[#a8822e]/40 border-l border-[#a8822e]/50 flex-shrink-0 group-hover:bg-[#a8822e]/70 transition-colors duration-300">
              <svg className="w-4 h-4 text-[#111827] group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>

          {/* Secondary — Download Brochure */}
          <a
            href="#contact"
            className="group relative flex items-center overflow-hidden border border-white/40 hover:border-gold/70 bg-white/10 hover:bg-white/15 backdrop-blur-md transition-all duration-300 w-full sm:w-auto shadow-lg"
          >
            <span className="flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 border-r border-white/20 group-hover:border-gold/30 flex-shrink-0 transition-colors duration-300">
              <svg className="w-5 h-5 text-white group-hover:text-gold transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
            <span className="flex-1 sm:flex-none px-5 sm:px-7 text-white font-sans font-bold text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase whitespace-nowrap text-center sm:text-left transition-colors duration-300">
              Download Brochure
            </span>
          </a>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center gap-2 text-white/60">
          <span className="text-[10px] tracking-[0.3em] uppercase font-sans">Discover</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </div>
    </section>
  );
}