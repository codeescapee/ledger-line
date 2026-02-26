import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/lib/caseStudies";
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
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <Link
                key={caseStudy.slug}
                href={`/work/${caseStudy.slug}`}
                className="group"
              >
                <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  {/* Zone 2 — Thumbnail */}
                  <div className="relative aspect-[8/5] overflow-hidden">
                    <Image
                      src={caseStudy.thumbnailImage.src}
                      alt={caseStudy.thumbnailImage.alt}
                      width={800}
                      height={500}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      unoptimized={caseStudy.thumbnailImage.src.endsWith('.svg')}
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-accent-primary transition-colors mb-3">
                      {caseStudy.title}
                    </h2>
                    <p className="text-accent-muted mb-4 leading-relaxed text-sm flex-grow">
                      {caseStudy.summary}
                    </p>

                    {/* Pills row */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseStudy.outcomes.slice(0, 2).map((outcome, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1.5 bg-foreground text-white rounded-full font-medium"
                        >
                          {outcome}
                        </span>
                      ))}
                    </div>

                    <span className="text-sm text-accent-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read case study <span className="transition-transform">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
