import type { Metadata } from "next";
import { getCaseStudyBySlug } from "@/lib/caseStudies";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Automated Manufacturing Quoting System - LedgerLine",
  description: "Self-serve quoting engine with complex pricing logic, automated file parsing, and Stripe integration.",
};

export default function QuotingSystemPage() {
  const caseStudy = getCaseStudyBySlug("quoting-system");
  
  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyTemplate caseStudy={caseStudy} />;
}
