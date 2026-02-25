"use client";

import Link from "next/link";
import type { CaseStudy } from "@/lib/caseStudies";
import { caseStudies } from "@/lib/caseStudies";
import CaseStudyImage from "./CaseStudyImage";
import TagPills from "./TagPills";
import CaseStudyNav from "./CaseStudyNav";
import FadeIn from "./motion/FadeIn";
import CountUp from "./motion/CountUp";
import Button from "./ui/Button";

interface CaseStudyTemplateProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyTemplate({ caseStudy }: CaseStudyTemplateProps) {
  const currentIndex = caseStudies.findIndex(cs => cs.slug === caseStudy.slug);
  const nextCase = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : caseStudies[0];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-hero pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <Link href="/work" className="text-text-on-dark-muted hover:text-white text-sm transition-colors">
              ← Back to all work
            </Link>
            {nextCase && (
              <Link
                href={`/work/${nextCase.slug}`}
                className="text-sm text-text-on-dark-muted hover:text-white transition-colors hidden lg:block"
              >
                <span className="text-xs uppercase tracking-wider text-text-on-dark-muted/60 block text-right mb-1">Next Case</span>
                <span className="font-medium">{nextCase.title} →</span>
              </Link>
            )}
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <FadeIn>
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block text-accent-primary text-xs font-mono uppercase tracking-widest">
                    {caseStudy.industry}
                  </span>
                  {caseStudy.duration && (
                    <>
                      <span className="text-text-on-dark-muted/40">·</span>
                      <span className="text-text-on-dark-muted/60 text-xs font-mono uppercase tracking-wider">
                        {caseStudy.duration}
                      </span>
                    </>
                  )}
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-white mb-6">
                  {caseStudy.title}
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-lg text-text-on-dark-muted leading-relaxed mb-8 max-w-prose">
                  {caseStudy.summary}
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mb-8">
                  <TagPills
                    outcomes={caseStudy.outcomes}
                    capabilities={caseStudy.capabilities}
                    dark
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.35}>
                <Button href="/contact" variant="primary" size="lg">
                  Talk to us
                </Button>
              </FadeIn>
            </div>

            <div className="lg:col-span-2">
              <FadeIn direction="right" delay={0.2}>
                <div className="bg-dark-surface border border-border-dark rounded-xl p-3 shadow-glow overflow-hidden">
                  <CaseStudyImage
                    slug={caseStudy.slug}
                    variant="hero"
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar (if available) */}
      {caseStudy.metrics && caseStudy.metrics.length > 0 && (
        <section className="bg-dark-surface border-t border-border-dark py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {caseStudy.metrics.map((metric) => {
                const numericMatch = metric.value.match(/^(\d+)/);
                const numericValue = numericMatch ? parseInt(numericMatch[1]) : null;
                const suffix = numericMatch ? metric.value.replace(numericMatch[1], "") : "";
                const prefix = metric.value.startsWith("<") ? "<" : "";

                return (
                  <FadeIn key={metric.label}>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                        {numericValue !== null ? (
                          <CountUp
                            end={numericValue}
                            prefix={prefix}
                            suffix={suffix}
                            duration={2}
                          />
                        ) : (
                          metric.value
                        )}
                      </div>
                      <div className="text-sm text-text-on-dark-muted uppercase tracking-wider font-medium">
                        {metric.label}
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Body Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Problem Section */}
          <FadeIn>
            <div className="mb-16">
              <div className="mb-6">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-primary">
                  The Problem
                </span>
                <div className="h-px bg-border mt-3" />
              </div>
              <div className="space-y-4">
                {caseStudy.problem.map((paragraph, index) => (
                  <p key={index} className="text-base md:text-lg text-text-secondary leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* The System Section */}
          <FadeIn>
            <div className="mb-16">
              <div className="mb-6">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-primary">
                  The System
                </span>
                <div className="h-px bg-border mt-3" />
              </div>
              <div className="bg-muted border border-border border-l-4 border-l-accent-primary rounded-md p-8">
                <ul className="space-y-3 list-disc pl-5 text-text-secondary">
                  {caseStudy.systemBullets.map((bullet, index) => (
                    <li key={index} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Why It Worked Section */}
          <FadeIn>
            <div className="mb-16">
              <div className="mb-6">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-primary">
                  Why It Worked
                </span>
                <div className="h-px bg-border mt-3" />
              </div>
              <div className="space-y-4">
                {caseStudy.whyItWorked.map((paragraph, index) => (
                  <p key={index} className="text-base md:text-lg text-text-secondary leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Bottom CTA */}
          <FadeIn>
            <div className="bg-gradient-hero rounded-xl p-10 md:p-14 text-center">
              <h2 className="text-h3 md:text-h2 text-white mb-4">
                Have a similar challenge?
              </h2>
              <p className="text-text-on-dark-muted mb-8 max-w-lg mx-auto">
                Tell us what you&apos;re dealing with. We&apos;ll share
                how we&apos;d approach it and whether we&apos;re the right team.
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Let&apos;s talk
              </Button>
            </div>
          </FadeIn>

          {/* Navigation */}
          <div className="mt-16">
            <CaseStudyNav currentSlug={caseStudy.slug} />
          </div>
        </div>
      </section>
    </div>
  );
}
