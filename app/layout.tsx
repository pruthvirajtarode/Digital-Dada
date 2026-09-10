import type { Metadata } from "next";
import { Inter, Space_Grotesk, La_Belle_Aurore } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// We will map the Tailwind classes in tailwind.config.ts to the BBH fonts
// font-display will now be BBHSansHegarty and font-sans will be BBHSansBartle

const laBelleAurore = La_Belle_Aurore({
  weight: "400",
  variable: "--font-signature",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digital-dada.vercel.app"),
  title: "Digital Dada — The AI Workforce for Accounting Firms",
  description: "Digital Dada builds AI employees that perform repetitive business work for accounting firms and growing businesses.",
  keywords: ["AI automation", "accounting firms", "Digital Dada", "AI workforce", "robotic process automation", "CPA automation"],
  openGraph: {
    title: "Digital Dada — The AI Workforce for Accounting Firms",
    description: "Digital Dada builds AI employees that perform repetitive business work for accounting firms and growing businesses.",
    url: "https://digital-dada.vercel.app",
    siteName: "Digital Dada",
    images: [
      {
        url: "/dada-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Dada AI Workforce",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Dada — The AI Workforce",
    description: "Digital Dada builds AI employees that perform repetitive business work for accounting firms and growing businesses.",
    images: ["/dada-og-image.jpg"],
  },
};

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { GlobalCursor } from "@/components/ui/GlobalCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { ChatbotWidget } from "@/components/ui/ChatbotWidget";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${laBelleAurore.variable} bg-white text-black antialiased selection:bg-dada-accent selection:text-dada-black`}>
      <body className="min-h-screen flex flex-col relative">
        <div className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        <GlobalCursor />
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow w-full relative z-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
