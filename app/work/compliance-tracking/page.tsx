import type { Metadata } from "next";
import { getCaseStudyBySlug } from "@/lib/caseStudies";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Compliance & Lifecycle Tracking - LedgerLine",
  description: "Centralized lifecycle management with enforced states and full audit trail.",
};

export default function ComplianceTrackingPage() {
  const caseStudy = getCaseStudyBySlug("compliance-tracking");
  
  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyTemplate caseStudy={caseStudy} />;
}
