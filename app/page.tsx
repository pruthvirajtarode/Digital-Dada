import { HomeHero } from "@/components/hero/HomeHero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { HowItWorks } from "@/components/home/HowItWorks";
import { HumanVsAi } from "@/components/home/HumanVsAi";
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
