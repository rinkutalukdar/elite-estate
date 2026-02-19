export default function Amenities() {
  const amenities = [
    { icon: "🏛️", name: "Multi-purpose Hall" },
    { icon: "💪", name: "Gymnasium" },
    { icon: "👶", name: "Kids Play Area" },
    { icon: "🏃", name: "Jogging Track" },
    { icon: "🌳", name: "Landscaped Gardens" },
    { icon: "🏸", name: "Badminton Court" },
    { icon: "🎾", name: "Squash Court" },
    { icon: "🏊", name: "Sports Clubhouse" },
  ];

  return (
    <section id="amenities" className="py-28 bg-dark-lighter relative overflow-hidden">
      {/* Background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.02] font-serif text-[15vw] font-bold whitespace-nowrap pointer-events-none select-none">
        LIFESTYLE
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold text-sm tracking-[0.35em] uppercase font-sans">
              World-Class Amenities
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="section-heading">
            A Lifestyle{" "}
            <span className="italic text-gold">Beyond Four Walls</span>
          </h2>
        </div>

        {/* Amenity Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {amenities.map((a) => (
            <div
              key={a.name}
              className="group border border-white/5 bg-dark-DEFAULT hover:border-gold/40 p-6 text-center transition-all duration-300 hover:bg-dark-card cursor-default"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {a.icon}
              </div>
              <p className="text-white/60 group-hover:text-cream text-[11px] tracking-wider uppercase font-sans transition-colors duration-300">
                {a.name}
              </p>
            </div>
          ))}
        </div>

        {/* Images */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
              alt="Sports Clubhouse"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-DEFAULT/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white/40 text-[9px] tracking-widest uppercase font-sans">
                Amenity
              </p>
              <p className="font-serif text-cream text-xl">Sports Clubhouse</p>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=800&q=80"
              alt="Kids Play Area"
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-DEFAULT/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white/40 text-[9px] tracking-widest uppercase font-sans">
                Amenity
              </p>
              <p className="font-serif text-cream text-xl">Kids Play Area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
