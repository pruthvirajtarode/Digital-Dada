import dynamic from "next/dynamic";

const HomeHero = dynamic(() => import("@/components/hero/HomeHero").then(mod => ({ default: mod.HomeHero })), { ssr: false });
const ProblemSection = dynamic(() => import("@/components/home/ProblemSection").then(mod => ({ default: mod.ProblemSection })), { ssr: false });
const ProductShowcase = dynamic(() => import("@/components/home/ProductShowcase").then(mod => ({ default: mod.ProductShowcase })), { ssr: false });
const HowItWorks = dynamic(() => import("@/components/home/HowItWorks").then(mod => ({ default: mod.HowItWorks })), { ssr: false });
const HumanVsAi = dynamic(() => import("@/components/home/HumanVsAi").then(mod => ({ default: mod.HumanVsAi })), { ssr: false });

import { AccountingFirmsSection } from "@/components/home/AccountingFirmsSection";
import { MetricsSection } from "@/components/home/MetricsSection";
import { Integrations } from "@/components/home/Integrations";
import { CtaSection } from "@/components/home/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeHero />
      <ProblemSection />
      <ProductShowcase />
      <HowItWorks />
      <HumanVsAi />
      <AccountingFirmsSection />
      <MetricsSection />
      <Integrations />
      <CtaSection />
    </div>
  );
}
