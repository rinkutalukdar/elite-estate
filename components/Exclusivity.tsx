export default function Exclusivity() {
  return (
    <section className="py-28 bg-dark-DEFAULT">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold text-sm tracking-[0.35em] uppercase font-sans">
                Exclusivity
              </span>
            </div>

            <h2 className="font-serif text-5xl md:text-7xl font-light text-cream leading-tight mb-8">
              Only{" "}
              <span className="gold-shimmer font-semibold">8 Residences</span>
              <br />
              <span className="text-3xl md:text-4xl text-white/60">Per Floor. 192 in Total.</span>
            </h2>

            <div className="gold-divider" />

            <p className="text-white/60 font-sans leading-relaxed text-base mt-6 mb-10">
              Low-density design ensures privacy, less crowding, faster lift access,
              and a premium community atmosphere. With 4 homes per wing and 6 lifts
              serving the building, every resident enjoys hotel-like convenience.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                "Maximum privacy per floor",
                "Near-instant lift access with 6 lifts",
                "4 residences per wing – no crowding",
                "Curated community of just 192 families",
              ].map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <div className="w-5 h-px bg-gold flex-shrink-0" />
                  <span className="text-white/70 text-sm font-sans tracking-wide">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
              alt="Wing corridor"
              className="w-full h-[500px] object-cover"
              loading="lazy"
            />
            {/* Overlay stat */}
            <div className="absolute bottom-8 left-8 right-8 bg-dark-DEFAULT/90 backdrop-blur-md border border-gold/20 p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { n: "2", l: "Wings" },
                  { n: "8", l: "Homes / Floor" },
                  { n: "6", l: "Lifts Total" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-serif text-3xl text-gold">{s.n}</div>
                    <div className="text-white/40 text-[9px] tracking-widest uppercase font-sans mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
