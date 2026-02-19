import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] border-t border-white/8 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top gold line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-14" />

        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-5">
            {/* Logo + wordmark side by side */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/static/logo.webp"
                  alt="EliteEstateExpert Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-gold text-xl font-light tracking-widest">
                  Elite<span className="font-semibold">Estate</span>Expert
                </span>
                <span className="text-white/40 text-[9px] tracking-[0.35em] uppercase font-sans mt-0.5">
                  Premium Realty
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-10 h-px bg-gold/40" />

            <p className="text-white/40 text-xs font-sans leading-relaxed">
              Premium real estate advisory. We connect discerning buyers with
              India's finest residential projects.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              {[
                { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { label: "Instagram", path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z" },
                { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-8 h-8 border border-white/10 hover:border-gold/50 flex items-center justify-center text-white/30 hover:text-gold transition-all duration-300"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <h4 className="text-gold/70 text-[10px] tracking-[0.3em] uppercase font-sans mb-5 font-medium">
              Purva Hennur
            </h4>
            <div className="space-y-3">
              {[
                { icon: "📍", text: "Hennur, North Bangalore" },
                { icon: "🏠", text: "3 BHK · 3 BHK+Maid · 4 BHK+Maid" },
                { icon: "🏢", text: "192 Exclusive Residences" },
                { icon: "📋", text: "RERA: PRM/KA/RERA/XXXXX", gold: true },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-2.5">
                  <span className="text-sm mt-0.5 flex-shrink-0">{item.icon}</span>
                  <span className={`text-xs font-sans leading-relaxed ${item.gold ? "text-gold/60" : "text-white/40"}`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick links */}
            <div className="mt-6 pt-5 border-t border-white/5 space-y-2">
              {["Overview", "Residences", "Amenities", "Location"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="flex items-center gap-2 text-white/30 hover:text-gold text-xs font-sans tracking-wider uppercase transition-colors duration-200"
                >
                  <span className="w-3 h-px bg-current" />
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold/70 text-[10px] tracking-[0.3em] uppercase font-sans mb-5 font-medium">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+919999999999"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 border border-white/10 group-hover:border-gold/40 flex items-center justify-center flex-shrink-0 transition-colors">
                  <svg className="w-4 h-4 text-white/40 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/25 text-[9px] tracking-widest uppercase font-sans">Call Us</p>
                  <p className="text-white/70 group-hover:text-gold text-sm font-sans transition-colors">+91 99999 99999</p>
                </div>
              </a>

              <a
                href="mailto:info@eliteestateexpert.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 border border-white/10 group-hover:border-gold/40 flex items-center justify-center flex-shrink-0 transition-colors">
                  <svg className="w-4 h-4 text-white/40 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/25 text-[9px] tracking-widest uppercase font-sans">Email Us</p>
                  <p className="text-white/70 group-hover:text-gold text-xs font-sans transition-colors">info@eliteestateexpert.com</p>
                </div>
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 border border-white/10 group-hover:border-green-500/40 flex items-center justify-center flex-shrink-0 transition-colors">
                  <svg className="w-4 h-4 text-white/40 group-hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/25 text-[9px] tracking-widest uppercase font-sans">WhatsApp</p>
                  <p className="text-white/70 group-hover:text-green-400 text-sm font-sans transition-colors">Chat with Us</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/25 text-[10px] tracking-wider font-sans">
            © 2025 EliteEstateExpert. All rights reserved.
          </p>
          <p className="text-white/20 text-[10px] tracking-wider font-sans text-center max-w-xl">
            For representation purposes only. Specifications subject to change. Verify all details with developer before booking.
          </p>
        </div>
      </div>
    </footer>
  );
}