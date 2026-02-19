import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Location from "../../components/Location";
import Contact from "../../components/Contact";

export const metadata: Metadata = {
  title: "Thank You | Purva Hennur",
  description: "We've received your enquiry. Our sales advisor will contact you shortly.",
  robots: "noindex, nofollow",
};

export default function ThankYou() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-dark-DEFAULT flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #C8A14A 0, #C8A14A 1px, transparent 0, transparent 50%)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-lg">
          {/* Logo */}
          <div className="font-serif text-gold text-2xl font-light tracking-widest mb-12">
            Elite<span className="font-semibold">Estate</span>Expert
          </div>

          {/* Gold circle check */}
          <div className="w-24 h-24 rounded-full border-2 border-gold flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl text-cream font-light mb-4">
            Thank You
          </h1>

          <div className="h-px w-16 bg-gold mx-auto my-6" />

          <p className="text-white/60 font-sans text-base leading-relaxed mb-4">
            Your enquiry has been received. A dedicated sales advisor from{" "}
            <span className="text-gold">Purva Hennur</span> will contact you within 24 hours
            to schedule your private viewing.
          </p>

          <p className="text-white/30 text-sm font-sans mb-12">
            Private viewing by confirmed appointment only.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-gold text-xs">
              Return to Home
            </Link>
            <a
              href="https://wa.me/919999999999?text=Hi%2C%20I%20just%20submitted%20an%20enquiry%20for%20Purva%20Hennur"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold text-xs"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
