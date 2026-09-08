import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Dada — The AI Workforce for Accounting Firms",
  description: "Digital Dada builds AI employees that perform repetitive business work for accounting firms and growing businesses.",
};

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-dada-black text-dada-warm-white antialiased selection:bg-dada-accent selection:text-dada-black`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
