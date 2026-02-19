export default function ProjectIntro() {
  return (
    <section id="overview" className="py-28 bg-dark-DEFAULT">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold/20" />
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
              alt="Purva Hennur Interior"
              className="w-full h-[500px] object-cover relative z-10"
              loading="lazy"
            />
            {/* Gold accent bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-gradient z-20" />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold text-sm tracking-[0.35em] uppercase font-sans">
                About the Project
              </span>
            </div>

            <h2 className="section-heading mb-8">
              Where Luxury Meets{" "}
              <span className="italic text-gold">Thoughtful</span> Design
            </h2>

            <div className="gold-divider" />

            <p className="text-white/60 font-sans leading-relaxed text-base mb-8">
              Spread across ~3.02 acres in Hennur, Purva Hennur offers 192 exclusive
              residences. Designed for privacy, openness, and refined urban living,
              every detail ensures abundant light, ventilation, and spacious comfort.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { num: "3.02", unit: "Acres", label: "Prime Land" },
                { num: "192", unit: "Homes", label: "Exclusive Units" },
                { num: "24", unit: "Floors", label: "Single Tower" },
              ].map((s) => (
                <div key={s.label} className="border-l border-gold/30 pl-4">
                  <div className="font-serif text-3xl text-cream">
                    {s.num}
                    <span className="text-gold text-base ml-1">{s.unit}</span>
                  </div>
                  <div className="text-white/40 text-[10px] tracking-wider uppercase mt-1 font-sans">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
