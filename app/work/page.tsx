import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { caseStudies } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Work - Docksmith",
  description: "Backend systems and workflow orchestration platforms built for operational control and enforcement at scale.",
};

export default function WorkPage() {
  return (
    <div>
      <PageHero
        title="Systems in Production"
        subtitle="Backend platforms orchestrating operations through enforced state logic, validated transitions, and complete audit trails."
        imageSrc="/brand/images/system-architecture.png"
      />

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

                  {/* Content with Zone 1 icon */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start gap-4 mb-3">
                      {/* Zone 1 — Icon */}
                      <Image
                        src={caseStudy.iconImage.src}
                        alt={caseStudy.iconImage.alt}
                        width={80}
                        height={80}
                        className="flex-shrink-0 -mt-12 relative z-10"
                      />
                      <h2 className="text-xl font-semibold text-foreground group-hover:text-accent-primary transition-colors pt-1">
                        {caseStudy.title}
                      </h2>
                    </div>
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
    </div>
  );
}
