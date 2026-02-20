"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage:
            "url('/static/hero.webp')",
        }}
      />
      {/* Minimal overlay — image should dominate */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto px-5 sm:px-8 pt-24 sm:pt-28 md:pt-36 pb-20">

        {/* Eyebrow badge */}
        <div className="flex items-center justify-center gap-3 sm:gap-5 mb-7 sm:mb-10">
          <div className="h-px w-8 sm:w-14 bg-gold" />
          <span className="bg-gold/25 border border-gold text-gold text-[11px] sm:text-[13px] tracking-[0.25em] uppercase font-sans font-bold px-5 py-2.5 backdrop-blur-sm">
            Purva Hennur · North Bangalore
          </span>
          <div className="h-px w-8 sm:w-14 bg-gold" />
        </div>

        {/* Headline — the hero of the hero */}
        <h1 className="font-serif text-[2.4rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light text-white leading-[1.1] mb-5 sm:mb-7 drop-shadow-2xl">
          A Rare Address of
          <br />
          <span className="italic gold-shimmer">Space, Privacy</span>
          <br />
          <span className="text-white/95">&amp; Prestige</span>
        </h1>

        {/* Subheadline */}
        <p className="font-sans text-white/90 text-xs sm:text-sm md:text-base tracking-[0.18em] uppercase mb-8 sm:mb-10 drop-shadow-lg">
          Ultra-Luxury 3 &amp; 4 BHK Residences &nbsp;·&nbsp; 1950 – 2790 Sqft &nbsp;·&nbsp; Only 192 Homes
        </p>

        {/* CTAs — the focus, not the boxes */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14">
          {/* Primary */}
          <a
            href="#contact"
            className="group relative flex items-center overflow-hidden bg-gold hover:bg-gold-light transition-colors duration-300 shadow-2xl shadow-gold/50 w-full sm:w-auto"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            <span className="flex items-center justify-center w-12 sm:w-14 h-13 sm:h-14 bg-[#a8822e]/40 border-r border-[#a8822e]/50 flex-shrink-0 py-4">
              <svg className="w-5 h-5 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
            <span className="flex-1 sm:flex-none px-6 sm:px-8 py-4 text-[#111827] font-sans font-bold text-xs sm:text-sm tracking-[0.18em] uppercase whitespace-nowrap text-center">
              Book a Private Viewing
            </span>
            <span className="flex items-center justify-center w-10 sm:w-12 py-4 h-full bg-[#a8822e]/40 border-l border-[#a8822e]/50 flex-shrink-0 group-hover:bg-[#a8822e]/70 transition-colors duration-300 px-3">
              <svg className="w-4 h-4 text-[#111827] group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>

          {/* Secondary */}
          <a
            href="#contact"
            className="group relative flex items-center overflow-hidden border border-white/50 hover:border-gold/80 bg-white/10 hover:bg-white/18 backdrop-blur-md transition-all duration-300 w-full sm:w-auto shadow-lg"
          >
            <span className="flex items-center justify-center w-12 sm:w-14 py-4 border-r border-white/20 group-hover:border-gold/30 flex-shrink-0 transition-colors duration-300">
              <svg className="w-5 h-5 text-white group-hover:text-gold transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
            <span className="flex-1 sm:flex-none px-6 sm:px-8 py-4 text-white font-sans font-bold text-xs sm:text-sm tracking-[0.18em] uppercase whitespace-nowrap text-center transition-colors duration-300">
              Download Brochure
            </span>
          </a>
        </div>

        {/* 4 highlights — NOW as a clean horizontal strip at the BOTTOM, not cluttering the headline */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/15 backdrop-blur-md overflow-hidden">
          {[
            { icon: "🌿", text: "75% Open Green Spaces" },
            { icon: "🚗", text: "No Vehicles on Surface" },
            { icon: "🏠", text: "Premium Corner Units" },
            { icon: "🏊", text: "Dual Clubhouse" },
          ].map((item, i) => (
            <div
              key={item.text}
              className="bg-black/50 hover:bg-black/30 transition-colors duration-300 px-3 py-3.5 flex flex-col items-center justify-center text-center gap-1.5"
            >
              <span className="text-lg">{item.icon}</span>
              <p className="text-white/90 text-[9px] sm:text-[10px] tracking-[0.12em] uppercase font-sans font-semibold leading-tight">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll Indicator — pinned to bottom center */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[9px] tracking-[0.35em] uppercase font-sans">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/70 to-transparent" />
      </div>
    </section>
  );
}