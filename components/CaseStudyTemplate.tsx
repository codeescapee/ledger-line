import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "@/lib/caseStudies";
import { caseStudies } from "@/lib/caseStudies";
import TagPills from "./TagPills";
import CaseStudyNav from "./CaseStudyNav";

interface CaseStudyTemplateProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyTemplate({ caseStudy }: CaseStudyTemplateProps) {
  // Find next case study
  const currentIndex = caseStudies.findIndex(cs => cs.slug === caseStudy.slug);
  const nextCase = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : caseStudies[0];

  return (
    <div>
      {/* Header Section */}
      <section className="py-28 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <Link href="/work" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">
              ← Back to all work
            </Link>
            {nextCase && (
              <Link
                href={`/work/${nextCase.slug}`}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors hidden lg:block"
              >
                <span className="text-xs uppercase tracking-wider text-slate-400 block text-right mb-1">Next Case</span>
                <span className="font-medium">{nextCase.title} →</span>
              </Link>
            )}
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Column - Content (60%) */}
            <div className="lg:col-span-3">
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-foreground mb-6">
                {caseStudy.title}
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-prose">
                {caseStudy.summary}
              </p>

              {/* Tag Pills */}
              <div className="mb-8">
                <TagPills
                  outcomes={caseStudy.outcomes}
                  capabilities={caseStudy.capabilities}
                />
              </div>

              {/* CTA */}
              <div>
              <Link
                href="/contact"
                className="bg-accent-primary text-foreground px-6 py-3 rounded-md hover:brightness-90 transition-all font-medium inline-block"
              >
                Talk to us
              </Link>
              </div>
            </div>

            {/* Right Column - Framed Image (40%) */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-lg">
                <Image
                  src={caseStudy.heroImage.src}
                  alt={caseStudy.heroImage.alt}
                  width={600}
                  height={450}
                  className="rounded-lg w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Problem Section */}
          <div className="mb-16">
            <div className="mb-6">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
                The Problem
              </span>
              <div className="h-px bg-slate-200 mt-3" />
            </div>
            <div className="space-y-4">
              {caseStudy.problem.map((paragraph, index) => (
                <p key={index} className="text-base md:text-lg text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* The System Section */}
          <div className="mb-16">
            <div className="mb-6">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
                The System
              </span>
              <div className="h-px bg-slate-200 mt-3" />
            </div>
            <div className="bg-slate-50 border border-slate-200 border-l-4 border-l-slate-900/20 rounded-md p-8">
              <ul className="space-y-2 list-disc pl-5 text-slate-700">
                {caseStudy.systemBullets.map((bullet, index) => (
                  <li key={index} className="leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why It Worked Section */}
          <div className="mb-16">
            <div className="mb-6">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
                Why It Worked
              </span>
              <div className="h-px bg-slate-200 mt-3" />
            </div>
            <div className="space-y-4">
              {caseStudy.whyItWorked.map((paragraph, index) => (
                <p key={index} className="text-base md:text-lg text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <CaseStudyNav currentSlug={caseStudy.slug} />
        </div>
      </section>
    </div>
  );
}
