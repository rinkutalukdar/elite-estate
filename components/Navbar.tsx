"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Overview", href: "#overview" },
    { label: "Residences", href: "#residences" },
    { label: "Amenities", href: "#amenities" },
    { label: "Location", href: "#location" },
  ];

  return (
    <>
      {/* Always-solid navbar — never transparent on mobile */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d1117] border-b border-white/10 shadow-xl shadow-black/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <Image
              src="/static/logo.webp"
              alt="EliteEstateExpert Logo"
              width={40}
              height={40}
              priority
              className="object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-gold text-lg md:text-2xl font-light tracking-widest">
                Elite<span className="font-semibold">Estate</span>Expert
              </span>
              <span className="text-white/50 text-[9px] tracking-[0.3em] uppercase font-sans">
                Premium Realty
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/70 hover:text-gold text-sm tracking-widest uppercase font-sans transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-0 group overflow-hidden relative"
          >
            <span className="bg-gold flex items-center justify-center w-11 h-11 flex-shrink-0 transition-all duration-300 group-hover:w-0 group-hover:opacity-0">
              <svg className="w-5 h-5 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
            <span className="bg-gold text-[#111827] font-sans font-bold text-sm tracking-[0.2em] uppercase px-5 h-11 flex items-center border-l border-[#a8822e]/40 transition-all duration-300 group-hover:px-8 group-hover:tracking-[0.3em] group-hover:bg-gold-light whitespace-nowrap">
              Book Viewing
            </span>
            <span className="bg-[#a8822e] h-11 w-0 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:w-10">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>

          {/* Mobile: CTA + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="#contact"
              className="bg-gold text-[#111827] font-sans font-bold text-[11px] tracking-[0.15em] uppercase px-4 py-2.5 whitespace-nowrap"
            >
              Book Viewing
            </a>
            <button
              className="text-white p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden bg-[#0d1117] border-t border-white/10 overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 py-5 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 text-white text-sm tracking-widest uppercase font-sans py-3 border-b border-white/5 hover:text-gold transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-gold text-[#111827] font-bold text-sm tracking-[0.2em] uppercase px-6 py-3.5 mt-4 w-full"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Private Viewing
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}