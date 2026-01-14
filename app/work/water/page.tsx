import type { Metadata } from "next";
import { getCaseStudyBySlug } from "@/lib/caseStudies";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Regulated Water Operations Engine - Docksmith",
  description: "A centralized system for managing regulated water assets and locations, enforcing compliance workflows, and producing audit-ready records on demand.",
};

export default function WaterPage() {
  const caseStudy = getCaseStudyBySlug("water");
  
  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyTemplate caseStudy={caseStudy} />;
}
