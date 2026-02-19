# Purva Hennur — Premium Real Estate Landing Page

## Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata & GA4
│   ├── page.tsx            # Home page (assembles all sections)
│   ├── globals.css         # Global styles + custom classes
│   └── thank-you/
│       └── page.tsx        # Thank you page after form submission
└── components/
    ├── Navbar.tsx           # Sticky transparent → solid nav
    ├── Hero.tsx             # Full-width hero with dual CTAs
    ├── ProjectIntro.tsx     # Project overview + stats
    ├── Masterplan.tsx       # Masterplanned living features
    ├── Residences.tsx       # 3 configuration cards + gallery
    ├── Amenities.tsx        # 8 amenities grid + images
    ├── Exclusivity.tsx      # Low-density exclusivity section
    ├── Location.tsx         # Connectivity + Google Maps embed
    ├── Contact.tsx          # Lead form with all 7 fields
    ├── Footer.tsx           # Footer with links + disclaimer
    └── FloatingButtons.tsx  # Sticky CTA + WhatsApp button
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Configuration Required

1. **GA4 & Google Ads**: Replace `GA_MEASUREMENT_ID` and `AW-CONVERSION_ID/CONVERSION_LABEL` in `layout.tsx` and `Contact.tsx`

2. **Form Backend**: In `Contact.tsx`, replace the simulated `setTimeout` with your actual API call (e.g., EmailJS, Resend, or a Next.js API route)

3. **Google Maps**: Update the Maps embed URL in `Location.tsx` with the exact project coordinates

4. **WhatsApp Number**: Replace `919999999999` with actual number in `FloatingButtons.tsx` and `Footer.tsx`

5. **RERA Number**: Update placeholder RERA number in `Contact.tsx` and `Footer.tsx`

## Features
- ✅ Mobile-first responsive design
- ✅ Dark/neutral theme with gold accents
- ✅ Cormorant Garamond serif + Jost sans-serif typography
- ✅ Smooth scroll for anchor links
- ✅ Lazy loaded images
- ✅ GA4 + Google Ads conversion tracking hooks
- ✅ Thank You page after form submission
- ✅ Sticky CTA bar (appears after scroll)
- ✅ WhatsApp floating button
- ✅ SEO meta tags + OG tags
- ✅ 8-section modular architecture
