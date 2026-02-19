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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-gold animate-pulse-gold text-sm">
            Book a Private Viewing
          </a>
          <a href="#contact" className="btn-outline-gold text-sm">
            Download Brochure
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