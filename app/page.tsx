"use client";

import dynamic from "next/dynamic";

const HomeHero = dynamic(() => import("@/components/hero/HomeHero").then(mod => ({ default: mod.HomeHero })), { ssr: false });
const ProductShowcase = dynamic(() => import("@/components/home/ProductShowcase").then(mod => ({ default: mod.ProductShowcase })), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HomeHero />
      <ProductShowcase />
    </div>
  );
}
