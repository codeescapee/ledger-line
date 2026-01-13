import type { Metadata } from "next";
import { getCaseStudyBySlug } from "@/lib/caseStudies";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Internal Operations System - LedgerLine",
  description: "Role-based internal tool with state-driven workflows and guardrails replacing spreadsheet-driven processes.",
};

export default function InternalOpsPage() {
  const caseStudy = getCaseStudyBySlug("internal-ops");
  
  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyTemplate caseStudy={caseStudy} />;
}
