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
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/90" />
      {/* Side vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

      {/* Content — pt-20 clears the 64px fixed navbar on mobile, pt-28 on desktop */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-28 md:pt-36 pb-16">

        {/* Eyebrow badge */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-10 md:w-16 bg-gold/70" />
          <span className="bg-gold/15 border border-gold/50 text-gold text-xs md:text-sm tracking-[0.25em] uppercase font-sans font-semibold px-5 py-2 backdrop-blur-sm">
            Purva Hennur · North Bangalore
          </span>
          <div className="h-px w-10 md:w-16 bg-gold/70" />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-tight mb-6">
          A Rare Address of{" "}
          <span className="italic gold-shimmer">Space, Privacy</span>
          <br />& Prestige in Hennur
        </h1>

        {/* Subheadline */}
        <p className="font-sans text-white/80 text-sm md:text-base lg:text-lg tracking-widest uppercase mt-6 mb-10">
          Ultra-Luxury 3 &amp; 4 BHK Residences&nbsp;·&nbsp;1950 – 2790 Sqft&nbsp;·&nbsp;Limited 192 Homes
        </p>

        {/* Highlight Points */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-3xl mx-auto">
          {[
            { icon: "🌿", text: "75% Open Green Spaces" },
            { icon: "🚗", text: "No Vehicle Movement on Surface" },
            { icon: "🏠", text: "Premium Corner Residences" },
            { icon: "🏊", text: "Dual Clubhouse Experience" },
          ].map((item) => (
            <div
              key={item.text}
              className="border border-gold/30 bg-black/30 backdrop-blur-sm px-3 py-4 text-center"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-white text-xs md:text-sm tracking-wider uppercase font-sans leading-snug font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Primary — Book Viewing */}
          <a
            href="#contact"
            className="group relative flex items-center overflow-hidden bg-gold hover:bg-gold-light transition-colors duration-300 shadow-xl shadow-gold/25"
          >
            {/* Shimmer sweep */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            {/* Icon box */}
            <span className="flex items-center justify-center w-14 h-14 bg-[#a8822e]/40 border-r border-[#a8822e]/40 flex-shrink-0">
              <svg className="w-5 h-5 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
            {/* Text */}
            <span className="px-7 text-[#111827] font-sans font-bold text-sm tracking-[0.2em] uppercase whitespace-nowrap">
              Book a Private Viewing
            </span>
            {/* Arrow */}
            <span className="flex items-center justify-center w-12 h-14 bg-[#a8822e]/40 border-l border-[#a8822e]/40 flex-shrink-0 group-hover:bg-[#a8822e]/70 transition-colors duration-300">
              <svg className="w-4 h-4 text-[#111827] group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>

          {/* Secondary — Download Brochure */}
          <a
            href="#contact"
            className="group relative flex items-center overflow-hidden border border-white/25 hover:border-gold/60 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
          >
            {/* Icon box */}
            <span className="flex items-center justify-center w-14 h-14 border-r border-white/10 group-hover:border-gold/30 flex-shrink-0 transition-colors duration-300">
              <svg className="w-5 h-5 text-white/60 group-hover:text-gold transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
            {/* Text */}
            <span className="px-7 text-white/80 group-hover:text-white font-sans font-semibold text-sm tracking-[0.2em] uppercase whitespace-nowrap transition-colors duration-300">
              Download Brochure
            </span>
          </a>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] tracking-[0.3em] uppercase">Discover</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}