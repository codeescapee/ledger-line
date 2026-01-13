import Link from "next/link";
import { caseStudies } from "@/lib/caseStudies";

interface CaseStudyNavProps {
  currentSlug: string;
}

export default function CaseStudyNav({ currentSlug }: CaseStudyNavProps) {
  const currentIndex = caseStudies.findIndex(cs => cs.slug === currentSlug);
  const prevCase = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextCase = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  return (
    <div className="border-t border-slate-200 pt-8 mt-16">
      <div className="flex justify-between items-center gap-8">
        {prevCase ? (
          <Link
            href={`/work/${prevCase.slug}`}
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors group flex-1"
          >
            <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1">Previous</span>
            <span className="font-medium group-hover:underline">← {prevCase.title}</span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {nextCase ? (
          <Link
            href={`/work/${nextCase.slug}`}
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors group flex-1 text-right"
          >
            <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1">Next</span>
            <span className="font-medium group-hover:underline">{nextCase.title} →</span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </div>
  );
}
