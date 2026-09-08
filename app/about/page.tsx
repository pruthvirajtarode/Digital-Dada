import { Headline } from "@/components/typography/Headline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Digital Dada",
  description: "We’re building the infrastructure for the next generation of work.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dada-near-black">
      <section className="pt-32 pb-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <Headline text="We’re Not Building Another AI Tool." as="h1" className="text-5xl md:text-7xl font-bold mb-8 tracking-tight" />
          <p className="text-2xl text-dada-accent mb-16 font-medium">
            We’re building the infrastructure for the next generation of work.
          </p>
          
          <div className="space-y-12 text-xl text-dada-off-white/80 leading-relaxed font-light">
            <p>
              Digital Dada was founded on a simple observation:<br />
              <span className="font-medium text-white block mt-4">
                Businesses spend enormous amounts of money paying people to perform repetitive work.
              </span>
            </p>
            <p>
              As AI becomes more capable, that equation is changing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dada-black border-t border-white/5 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-mono tracking-widest uppercase text-dada-accent mb-8">Our Mission</h2>
          <p className="text-3xl md:text-4xl leading-tight font-medium text-white mb-24">
            Our mission is to help businesses identify that work, intelligently automate it, and redeploy human talent toward higher-value activities.
          </p>

          <h2 className="text-sm font-mono tracking-widest uppercase text-dada-accent mb-12">Philosophy</h2>
          <ul className="space-y-8">
            {[
              "Start with the business problem.",
              "Use AI where it creates an advantage.",
              "Keep humans where humans create the most value.",
              "Measure the outcome.",
              "Keep improving."
            ].map((item, idx) => (
              <li key={idx} className="flex gap-6 items-center text-xl text-dada-off-white/80 border-b border-white/10 pb-8 last:border-0">
                <span className="text-dada-accent font-mono text-sm">0{idx + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
