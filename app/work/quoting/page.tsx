import type { Metadata } from "next";
import { getCaseStudyBySlug } from "@/lib/caseStudies";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Automated Manufacturing Quoting - Docksmith",
  description: "A self-serve quoting system for a sheet-metal fabricator that turns uploaded design files into accurate, purchasable quotes in minutes instead of weeks.",
};

export default function QuotingPage() {
  const caseStudy = getCaseStudyBySlug("quoting");
  
  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyTemplate caseStudy={caseStudy} />;
}
