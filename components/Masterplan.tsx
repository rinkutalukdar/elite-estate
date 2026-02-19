export default function Masterplan() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "No Vehicle Movement on Surface",
      desc: "All parking below ground. Pristine, pedestrian-safe surface level.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "75% Open Space & Multi-Level Greenery",
      desc: "Vast green corridors, sky gardens, and landscaped terraces.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Drop-Off Clubhouse at Entrance",
      desc: "Grand arrival experience with a dedicated drop-off and welcome lounge.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Dedicated Sports Clubhouse",
      desc: "Professional Badminton & Squash courts in a dedicated sports zone.",
    },
  ];

  return (
    <section className="py-28 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold text-sm tracking-[0.35em] uppercase font-sans">
              Masterplan
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="section-heading">
            Designed for Safe &amp;{" "}
            <span className="italic text-gold">Serene</span> Living
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Features */}
          <div className="space-y-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-5 p-6 border border-white/5 bg-dark-DEFAULT hover:border-gold/30 transition-colors duration-300 group"
              >
                <div className="text-gold group-hover:scale-110 transition-transform duration-300 mt-1 flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-serif text-lg text-cream mb-1">{f.title}</h3>
                  <p className="text-white/50 text-sm font-sans leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
              alt="Masterplan visualization"
              className="w-full h-[500px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 border border-gold/10" />
            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
