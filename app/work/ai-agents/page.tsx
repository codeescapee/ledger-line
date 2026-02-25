import type { Metadata } from "next";
import { getCaseStudyBySlug } from "@/lib/caseStudies";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "BUBS: Multi-Agent Production Framework - Docksmith",
  description: "A multi-agent system with a 3-phase execution framework that transforms AI-generated scaffolding into production-ready systems.",
};

export default function AIAgentsPage() {
  const caseStudy = getCaseStudyBySlug("ai-agents");

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyTemplate caseStudy={caseStudy} />;
}
