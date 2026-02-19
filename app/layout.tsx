import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Purva Hennur | Ultra-Luxury 3 & 4 BHK Residences in North Bangalore",
  description:
    "Purva Hennur – 192 exclusive residences in Hennur, North Bangalore. 3 BHK (1950–2010 Sqft), 3 BHK+Maid (2400 Sqft), 4 BHK+Maid (2790 Sqft). 75% open green spaces, dual clubhouse. Book a private viewing.",
  keywords:
    "Purva Hennur, luxury apartments Bangalore, 3 BHK Hennur, 4 BHK North Bangalore, premium flats Hennur, Purva projects Bangalore",
  openGraph: {
    title: "Purva Hennur | Ultra-Luxury Residences in Hennur",
    description:
      "192 exclusive 3 & 4 BHK homes in Hennur. 75% open spaces, dual clubhouse, premium design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics GA4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
