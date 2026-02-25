"use client";

import Link from "next/link";
import type { CaseStudy } from "@/lib/caseStudies";
import CaseStudyImage from "./CaseStudyImage";
import StaggerContainer from "./motion/StaggerContainer";
import StaggerItem from "./motion/StaggerItem";
import Card from "./ui/Card";

interface WorkGridProps {
  caseStudies: CaseStudy[];
}

export default function WorkGrid({ caseStudies }: WorkGridProps) {
  return (
    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {caseStudies.map((caseStudy) => (
        <StaggerItem key={caseStudy.slug}>
          <Link href={`/work/${caseStudy.slug}`} className="group block h-full">
            <Card className="h-full overflow-hidden !p-0">
              {/* Thumbnail */}
              <div className="relative aspect-video bg-dark overflow-hidden rounded-t-lg">
                <CaseStudyImage
                  slug={caseStudy.slug}
                  variant="thumbnail"
                  className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block text-xs font-mono uppercase tracking-wider text-accent-primary bg-accent-glow px-2 py-1 rounded">
                    {caseStudy.industry}
                  </span>
                  {caseStudy.duration && (
                    <span className="text-xs text-text-tertiary">
                      {caseStudy.duration}
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent-primary transition-colors">
                  {caseStudy.title}
                </h2>
                <p className="text-text-secondary mb-4 leading-relaxed text-sm flex-grow">
                  {caseStudy.summary}
                </p>

                {/* Outcome pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseStudy.outcomes.slice(0, 3).map((outcome, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1.5 bg-foreground text-white rounded-full font-medium"
                    >
                      {outcome}
                    </span>
                  ))}
                </div>

                <span className="text-sm text-accent-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read case study <span>→</span>
                </span>
              </div>
            </Card>
          </Link>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
