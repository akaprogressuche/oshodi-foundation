import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SmoothScroll } from "./components/SmoothScroll";
import { DonateButton } from "./components/DonateButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.theoshodifoundation.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Oshodi Family Foundation — Empowering Families. Nourishing Communities. Building Futures.",
    template: "%s · Oshodi Family Foundation",
  },
  description:
    "A community-centered nonprofit strengthening families, addressing food insecurity, and expanding access to education and leadership opportunities in underserved communities.",
  openGraph: {
    type: "website",
    siteName: "Oshodi Family Foundation",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "R0avsVSbltM7-zEGQKLoPcitIIobnbSfnQzoP8HP29A",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Oshodi Family Foundation",
  alternateName: "The Oshodi Family Foundation",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description:
    "A community-centered nonprofit strengthening families, addressing food insecurity, and expanding access to education and leadership opportunities in underserved communities.",
  email: "info@theoshodifoundation.org",
  telephone: "+1-214-764-8258",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-214-764-8258",
    email: "info@theoshodifoundation.org",
    contactType: "general inquiries",
    availableLanguage: ["English"],
  },
  founder: {
    "@type": "Person",
    name: "John Oshodi",
    jobTitle: "Founder, Relevant Technologies",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-foreground focus:text-background focus:rounded-md"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <DonateButton />
        <script
          type="application/ld+json"
          // Schema.org JSON-LD for nonprofit Organization (NGO).
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
