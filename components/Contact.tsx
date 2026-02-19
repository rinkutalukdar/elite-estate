"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    config: "",
    budget: "",
    buyingFor: "",
    timeline: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-CONVERSION_ID/CONVERSION_LABEL",
        event_category: "Lead",
        event_label: "Contact Form",
      });
      (window as any).gtag("event", "generate_lead", { currency: "INR", value: 1 });
    }
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    router.push("/thank-you");
  };

  const inputClass =
    "w-full bg-[#1e2433] border border-white/15 focus:border-gold/70 focus:bg-[#232a3a] text-white text-sm font-sans px-4 py-3.5 outline-none transition-all duration-200 placeholder:text-white/35 rounded-sm";

  const labelClass =
    "block text-gold/80 text-[11px] tracking-[0.25em] uppercase font-sans mb-2 font-medium";

  const projectDetails = [
    { label: "Project", value: "Purva Hennur, Hennur, North Bangalore" },
    { label: "Configurations", value: "3 BHK, 3 BHK+Maid, 4 BHK+Maid" },
    { label: "Starting Price", value: "₹3 Crores Onwards" },
    { label: "RERA No.", value: "PRM/KA/RERA/XXXXX" },
  ];

  return (
    <section id="contact" className="py-24 bg-[#0d1117] relative overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=60')" }}
      />
      {/* Gold gradient glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-gold/60" />
            <span className="text-gold text-sm tracking-[0.35em] uppercase font-sans font-medium">
              Book a Private Viewing
            </span>
            <div className="h-px w-12 bg-gold/60" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
            Your Next Chapter{" "}
            <span className="italic text-gold">Begins Here</span>
          </h2>
          <p className="text-white/50 text-sm font-sans mt-4 tracking-wider">
            Speak to a Sales Advisor · Schedule a Private Viewing · Download Brochure
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* LEFT — Project info (2/5 width) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1499916078039-922301b0eb9b?w=800&q=80"
                alt="Balcony view"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent" />
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-gold" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-gold" />
            </div>

            {/* Project Details */}
            <div className="bg-[#161c2a] border border-white/8 p-6 space-y-4">
              <h4 className="font-serif text-lg text-white mb-5 pb-3 border-b border-white/10">
                Project Details
              </h4>
              {projectDetails.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <div className="text-gold/60 text-[10px] tracking-widest uppercase font-sans w-24 flex-shrink-0 mt-0.5 leading-relaxed">
                    {d.label}
                  </div>
                  <div className="text-white/90 text-sm font-sans leading-relaxed">{d.value}</div>
                </div>
              ))}
            </div>

            {/* Call CTA */}
            <a
              href="tel:+919999999999"
              className="flex items-center gap-4 bg-[#161c2a] border border-gold/20 hover:border-gold/50 p-5 transition-all duration-300 group"
            >
              <div className="w-11 h-11 bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-white/40 text-[10px] tracking-widest uppercase font-sans">Call Us Directly</p>
                <p className="text-white font-sans font-semibold text-base mt-0.5">+91 99999 99999</p>
              </div>
            </a>
          </div>

          {/* RIGHT — Form (3/5 width) */}
          <div className="lg:col-span-3 bg-[#161c2a] border border-white/8 p-8">
            {/* Form header */}
            <div className="flex items-center gap-3 mb-7 pb-6 border-b border-white/8">
              <div className="w-1 h-8 bg-gold" />
              <div>
                <h3 className="font-serif text-xl text-white">Request a Consultation</h3>
                <p className="text-white/40 text-xs font-sans mt-0.5">Fill in your details — we'll reach out within 2 hours</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Phone — side by side on md+ */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className={labelClass}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>

              {/* Config + Budget — side by side */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Configuration</label>
                  <select
                    name="config"
                    value={form.config}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="" className="bg-[#1e2433]">Select Configuration</option>
                    <option value="3bhk" className="bg-[#1e2433]">3 BHK (1950–2010 Sqft)</option>
                    <option value="3bhk-maid" className="bg-[#1e2433]">3 BHK + Maid (2400 Sqft)</option>
                    <option value="4bhk-maid" className="bg-[#1e2433]">4 BHK + Maid (2790 Sqft)</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Budget Range</label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="" className="bg-[#1e2433]">Select Budget</option>
                    <option value="3-3.5" className="bg-[#1e2433]">₹3 – 3.5 Crores</option>
                    <option value="3.5-4" className="bg-[#1e2433]">₹3.5 – 4 Crores</option>
                    <option value="4+" className="bg-[#1e2433]">₹4 Crores+</option>
                  </select>
                </div>
              </div>

              {/* Buying For — toggle buttons */}
              <div>
                <label className={labelClass}>Buying For</label>
                <div className="grid grid-cols-2 gap-3">
                  {["Self Use", "Investment"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setForm({ ...form, buyingFor: opt })}
                      className={`py-3 text-sm font-sans tracking-wider uppercase border transition-all duration-200 ${
                        form.buyingFor === opt
                          ? "bg-gold border-gold text-[#111827] font-semibold"
                          : "bg-transparent border-white/15 text-white/60 hover:border-gold/40 hover:text-white/80"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline — 3 toggle buttons */}
              <div>
                <label className={labelClass}>Purchase Timeline</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Immediate", value: "immediate" },
                    { label: "3–6 Months", value: "3-6months" },
                    { label: "6+ Months", value: "6+months" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setForm({ ...form, timeline: opt.value })}
                      className={`py-3 text-xs font-sans tracking-wider uppercase border transition-all duration-200 ${
                        form.timeline === opt.value
                          ? "bg-gold border-gold text-[#111827] font-semibold"
                          : "bg-transparent border-white/15 text-white/60 hover:border-gold/40 hover:text-white/80"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full relative overflow-hidden group bg-gold hover:bg-gold-light transition-colors duration-300 py-4 px-6 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {/* Shimmer */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                <span className="relative flex items-center justify-center gap-3">
                  {loading ? (
                    <>
                      <svg className="w-5 h-5 text-[#111827] animate-spin flex-shrink-0" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      <span className="text-[#111827] font-sans font-bold text-sm uppercase tracking-widest">Sending...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 text-[#111827] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-[#111827] font-sans font-bold text-sm uppercase tracking-widest">Book a Private Viewing</span>
                      <svg className="w-4 h-4 text-[#111827] group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </span>
              </button>

              <p className="text-white/30 text-[11px] text-center tracking-wide font-sans pt-2">
                🔒 Private viewing by confirmed appointment only.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
}