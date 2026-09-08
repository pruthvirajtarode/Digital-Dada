import { Headline } from "@/components/typography/Headline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Technology Services | Digital Dada",
  description: "Legacy technology services provided by Digital Dada.",
};

export default function LegacyServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dada-black">
      <section className="pt-32 pb-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-widest text-white/50 mb-6 uppercase">
            Legacy Services
          </div>
          <Headline text="Business Technology Services" as="h1" className="text-4xl md:text-6xl font-bold mb-8 justify-center tracking-tight text-white/80" />
          <p className="text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            Before we built the AI Workforce, we spent years solving complex business technology problems. We continue to support and provide these foundational technology services to our partners.
          </p>
        </div>
      </section>
      
      <section className="py-24 border-t border-white/5 px-6">
        <div className="max-w-4xl mx-auto">
           {/* Placeholder for actual legacy services */}
           <div className="bg-white/5 border border-white/10 p-12 text-center text-white/40">
             If you are an existing client looking for our traditional technology consulting, systems integration, or support services, please contact your account manager.
           </div>
        </div>
      </section>
    </div>
  );
}
