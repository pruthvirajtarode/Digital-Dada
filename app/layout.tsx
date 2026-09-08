import type { Metadata } from "next";
import { Inter, La_Belle_Aurore } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

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
    <html lang="en" className={`${inter.variable} ${laBelleAurore.variable} bg-dada-black text-dada-warm-white antialiased selection:bg-dada-accent selection:text-dada-black`}>
      <body className="min-h-screen flex flex-col">
        <GlobalCursor />
        <ScrollProgress />
        <BackToTop />
        <ChatbotWidget />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
