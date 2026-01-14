import type { Metadata } from "next";
import { getCaseStudyBySlug } from "@/lib/caseStudies";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Multi-Tenant Inventory & Operations System - Docksmith",
  description: "A multi-tenant inventory and order system with a customer portal, role-based workflows, and enforced ownership across internal teams and external users.",
};

export default function InventoryPage() {
  const caseStudy = getCaseStudyBySlug("inventory");
  
  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyTemplate caseStudy={caseStudy} />;
}
