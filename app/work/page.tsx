import type { Metadata } from "next";
import { caseStudies } from "@/lib/caseStudies";
import WorkGrid from "@/components/WorkGrid";
import FadeIn from "@/components/motion/FadeIn";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Work - Docksmith",
  description:
    "Backend systems, AI agent frameworks, and fintech platforms built for operational control and enforcement at scale.",
};

export default function WorkPage() {
  return (
    <div>
      {/* Dark Hero */}
      <section className="bg-gradient-hero pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-6">Portfolio</Eyebrow>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-display font-bold text-white mb-6 leading-tight max-w-3xl">
              Systems in Production
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-body-lg text-text-on-dark-muted leading-relaxed max-w-2xl">
              Complex backend systems, AI agent frameworks, and fintech
              platforms, running real operations daily across manufacturing,
              finance, compliance, and logistics.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <WorkGrid caseStudies={caseStudies} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 px-6 bg-gradient-dark">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-h2 md:text-h1 text-white mb-6">
              Have a system in mind?
            </h2>
            <p className="text-body-lg text-text-on-dark-muted mb-10 max-w-xl mx-auto">
              Every project here started with a conversation. Tell us
              what you&apos;re working on and we&apos;ll show you how we&apos;d approach it.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Start your build
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
