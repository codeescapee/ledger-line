import type { Metadata } from "next";
import { getCaseStudyBySlug } from "@/lib/caseStudies";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Loan Lifecycle & Payments Engine - Docksmith",
  description: "An end-to-end loan lifecycle system handling origination, contracts, repayments, exceptions, and reporting with strict enforcement of financial state transitions.",
};

export default function LendingPage() {
  const caseStudy = getCaseStudyBySlug("lending");
  
  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyTemplate caseStudy={caseStudy} />;
}
