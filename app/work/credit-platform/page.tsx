import type { Metadata } from "next";
import { getCaseStudyBySlug } from "@/lib/caseStudies";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Personalized Credit Building Platform - Docksmith",
  description: "A consumer fintech platform guiding users through personalized credit-building journeys with real-time score tracking and automated recommendations.",
};

export default function CreditPlatformPage() {
  const caseStudy = getCaseStudyBySlug("credit-platform");

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyTemplate caseStudy={caseStudy} />;
}
