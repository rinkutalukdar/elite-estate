"use client";
import { useState, useEffect } from "react";

export default function FloatingButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919999999999?text=Hi%2C%20I%20am%20interested%20in%20Purva%20Hennur"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-28 right-5 z-50 group flex items-center gap-0 overflow-hidden"
      >
        {/* Label — slides in on hover */}
        <span className="max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-500 ease-in-out whitespace-nowrap">
          <span className="bg-[#25D366] text-white text-xs font-sans font-semibold tracking-wider px-4 py-2 mr-0 block">
            Chat with Us
          </span>
        </span>
        {/* Icon circle */}
        <span className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full flex items-center justify-center shadow-xl shadow-green-900/40 hover:scale-110 transition-all duration-300 flex-shrink-0">
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </span>
      </a>

      {/* Sticky Bottom CTA Bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
          show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop blur bar */}
        <div className="bg-[#0d1117]/90 backdrop-blur-md border-t border-gold/20 px-4 py-3 shadow-2xl shadow-black/60">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">

            {/* Left — Project info (hidden on small mobile) */}
            <div className="hidden sm:flex items-center gap-4">
              <div className="w-1 h-10 bg-gold flex-shrink-0" />
              <div>
                <p className="text-white font-serif text-base leading-tight">Purva Hennur</p>
                <p className="text-white/40 text-[10px] tracking-widest uppercase font-sans">
                  3 & 4 BHK · From ₹3 Cr · 192 Homes
                </p>
              </div>
            </div>

            {/* Right — CTAs */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* Call button */}
              <a
                href="tel:+919999999999"
                className="flex items-center gap-2 border border-white/15 hover:border-gold/50 text-white/70 hover:text-gold px-4 py-3 text-xs font-sans tracking-wider uppercase transition-all duration-300 whitespace-nowrap"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="hidden sm:inline">Call Now</span>
              </a>

              {/* Primary Book Viewing button */}
              <a
                href="#contact"
                className="relative flex-1 sm:flex-none group overflow-hidden flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-light text-[#0d1117] font-sans font-bold text-sm tracking-[0.15em] uppercase px-6 sm:px-10 py-3.5 transition-all duration-300 shadow-lg shadow-gold/25"
              >
                {/* Shimmer sweep on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <svg className="w-4 h-4 relative z-10 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="relative z-10 whitespace-nowrap">Book Private Viewing</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}