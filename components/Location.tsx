export default function Location() {
  const connectivity = [
    { place: "Hebbal", time: "10 min" },
    { place: "Manyata Tech Park", time: "12 min" },
    { place: "Outer Ring Road", time: "15 min" },
    { place: "Kempegowda Airport", time: "30 min" },
    { place: "HRBR Layout", time: "8 min" },
    { place: "Kalyan Nagar", time: "10 min" },
  ];

  return (
    <section id="location" className="py-28 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold text-[10px] tracking-[0.35em] uppercase font-sans">
              Location
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>
          <h2 className="section-heading">
            Strategically Located in{" "}
            <span className="italic text-gold">North Bangalore</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Connectivity */}
          <div>
            <h3 className="font-serif text-xl text-cream mb-6 pb-4 border-b border-white/10">
              Key Connectivity
            </h3>
            <div className="space-y-3">
              {connectivity.map((c) => (
                <div
                  key={c.place}
                  className="flex items-center justify-between py-3 border-b border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="text-white/70 text-sm font-sans">{c.place}</span>
                  </div>
                  <span className="text-gold text-xs font-sans tracking-wider">{c.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="w-full h-96 border border-white/10 overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3041874597!2d77.63!3d13.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae173f84a4f4a1%3A0x1234!2sHennur%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.7)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Purva Hennur Location"
              />
            </div>
            <p className="text-white/30 text-[10px] tracking-wider uppercase font-sans mt-3 text-center">
              Hennur, North Bangalore · Exact location shared upon appointment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
