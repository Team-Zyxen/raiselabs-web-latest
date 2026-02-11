import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a1f3a",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://raiselabequip.com"
  ),

  title: {
    default:
      "Raise Lab Equipment | Pharmaceutical Testing Instruments Manufacturer in Hyderabad, India",
    template: "%s | Raise Lab Equipment",
  },

  description:
    "Raise Lab Equipment is a leading pharmaceutical testing equipment manufacturer in India offering USP-compliant tablet hardness testers, dissolution testers, friability testers, disintegration testers and powder testing instruments. ISO-certified quality from DEVI Group, Hyderabad.",

  keywords: [
    "Raise Lab Equipment",
    "Pharmaceutical Testing Instruments",
    "Laboratory Equipment Manufacturer India",
    "Tablet Hardness Tester",
    "Dissolution Tester",
    "Friability Tester",
    "Disintegration Tester",
    "Powder Testing Instruments",
    "USP Compliant Testing Equipment",
    "Pharma QC Equipment",
    "Hyderabad Lab Equipment Manufacturer",
  ],

  authors: [
    { name: "Raise Lab Equipment", url: "https://raiselabequip.com" },
  ],

  creator: "Raise Lab Equipment - DEVI Group",
  publisher: "Raise Lab Equipment",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://raiselabequip.com",
    siteName: "Raise Lab Equipment",
    title:
      "Raise Lab Equipment | Pharmaceutical Testing Instruments Manufacturer in India",
    description:
      "ISO-certified pharmaceutical testing instruments trusted by 500+ pharma companies across India.",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Raise Lab Equipment - Pharmaceutical Testing Instruments",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Raise Lab Equipment | Pharmaceutical Testing Instruments Manufacturer",
    description:
      "Leading manufacturer of high-performance pharmaceutical testing instruments.",
    images: ["/images/og-image.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Laboratory Equipment",

  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad",
    "geo.position": "17.3850;78.4867",
    ICBM: "17.3850, 78.4867",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Raise Lab Equipment",
    url: "https://raiselabequip.com",
    logo: "https://raiselabequip.com/images/logo.png",
    description:
      "Manufacturer of pharmaceutical testing instruments including tablet hardness testers, dissolution testers and USP compliant QC equipment.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "India",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased font-sans">
        {/* JSON-LD Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Browser Logs */}
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="d0e54a58-7a94-41fa-a32b-54193350fb83"
        />

        <ErrorReporter />

        {/* Route Messenger (Fixed URL) */}
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "RaiseLab", "version": "1.1.0"}'
        />

        {children}

        <Toaster />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
