import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.theoshodifoundation.org"),
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
