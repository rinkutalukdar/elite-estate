export default function Residences() {
  const configs = [
    {
      type: "3 BHK",
      size: "1950 – 2010 Sqft",
      units: "96 Units",
      img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80",
      features: ["2 Balconies", "Walk-in Wardrobe", "3 Lifts per Wing", "2 Car Parks"],
    },
    {
      type: "3 BHK + Maid",
      size: "2400 Sqft",
      units: "48 Units · Corner",
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
      features: ["Corner Residence", "Maid's Room", "Walk-in Wardrobe", "Premium Views"],
      highlight: true,
    },
    {
      type: "4 BHK + Maid",
      size: "2790 Sqft",
      units: "48 Units",
      img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
      features: ["Master Bathtub", "Maid's Room", "Walk-in Wardrobe", "2 Car Parks"],
    },
  ];

  return (
    <section id="residences" className="py-28 bg-dark-DEFAULT">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold text-sm tracking-[0.35em] uppercase font-sans">
              Configurations
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="section-heading">
            Expansive Homes Crafted for{" "}
            <span className="italic text-gold">Modern Families</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {configs.map((c) => (
            <div
              key={c.type}
              className={`group relative overflow-hidden border transition-all duration-500 hover:border-gold/60 ${
                c.highlight ? "border-gold/40" : "border-white/10"
              }`}
            >
              {c.highlight && (
                <div className="absolute top-4 right-4 z-20 bg-gold text-dark-DEFAULT text-[9px] tracking-widest uppercase px-3 py-1 font-sans font-semibold">
                  Most Popular
                </div>
              )}

              {/* Image */}
              <div className="overflow-hidden h-56">
                <img
                  src={c.img}
                  alt={c.type}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 bg-dark-card">
                <div className="text-gold text-[9px] tracking-widest uppercase font-sans mb-2">
                  {c.units}
                </div>
                <h3 className="font-serif text-2xl text-cream mb-1">{c.type}</h3>
                <div className="text-gold font-sans text-sm tracking-wider mb-5">{c.size}</div>

                <div className="border-t border-white/5 pt-5 space-y-2">
                  {c.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      <span className="text-white/60 text-xs font-sans tracking-wide">{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`mt-6 block text-center py-2.5 text-xs tracking-widest uppercase font-sans font-semibold transition-all duration-300 ${
                    c.highlight
                      ? "bg-gold text-dark-DEFAULT hover:bg-gold-light"
                      : "border border-gold/40 text-gold hover:bg-gold hover:text-dark-DEFAULT"
                  }`}
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interior Gallery */}
        <div className="mt-16">
          <p className="text-center text-white/30 text-[10px] tracking-[0.35em] uppercase font-sans mb-8">
            Signature Interiors
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80", label: "Living Room" },
              { src: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&q=80", label: "Master Bedroom" },
              { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80", label: "Bathroom" },
            ].map((item) => (
              <div key={item.label} className="relative overflow-hidden group">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-dark-DEFAULT/40 group-hover:bg-dark-DEFAULT/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <span className="text-cream text-[10px] tracking-widest uppercase font-sans">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
