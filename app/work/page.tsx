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
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-slate-100 overflow-hidden">
                    <Image
                      src={caseStudy.thumbnailImage?.src || caseStudy.heroImage.src}
                      alt={caseStudy.thumbnailImage?.alt || caseStudy.heroImage.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent-primary transition-colors">
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
    </div>
  );
}
