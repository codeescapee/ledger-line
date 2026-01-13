export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  outcomes: string[];
  capabilities: string[];
  tools: string[];
  heroImage: string;
  problem: string[];
  systemBullets: string[];
  whyItWorked: string[];
  gallery?: { src: string; alt: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "quoting-system",
    title: "Automated Manufacturing Quoting System",
    summary: "Self-serve quoting engine that turns days-long manual processes into instant, error-free quotes with automatic order synchronization.",
    outcomes: ["Instant quotes", "Zero under-quoting risk"],
    capabilities: ["Complex pricing logic", "File parsing", "State-driven workflow"],
    tools: ["Bubble", "Paperless Parts", "Stripe", "Shipping APIs"],
    heroImage: "/brand/images/hero-system-flow.png",
    problem: [
      "Manual quoting was taking days and causing significant bottlenecks in the sales cycle. Sales teams were waiting on engineering for quotes, leading to inconsistent pricing and under-quoting risk.",
      "The process involved multiple handoffs, manual calculations, and no standardized pricing logic."
    ],
    systemBullets: [
      "Self-serve quoting engine allowing customers to upload CAD files and receive instant pricing",
      "Complex pricing rules based on quantity, material, finishing options, and manufacturing complexity",
      "Integration with Paperless Parts for file processing and manufacturing analysis",
      "Stripe integration for payment processing and subscription management",
      "Real-time freight calculations via shipping provider APIs",
      "Automatic order synchronization with production systems",
      "State-driven workflow ensuring data integrity from upload to production",
      "Role-based permissions with sales management and engineering oversight",
      "Complete audit trail of all pricing decisions and modifications"
    ],
    whyItWorked: [
      "The core challenge was ensuring data integrity from file upload to production sync. We designed a state-driven workflow where each quote progresses through validation stages, ensuring pricing logic is consistently applied and no orders enter production without complete information.",
      "Quotes that previously took days now generate instantly. The risk of under-quoting has been eliminated through standardized pricing logic. Orders sync automatically with production systems, removing manual data entry and the errors that came with it.",
      "The sales team can now focus on customer relationships rather than chasing quotes, and the engineering team is freed from routine pricing requests."
    ]
  },
  {
    slug: "internal-ops",
    title: "Internal Operations System",
    summary: "Role-based internal tool with state-driven workflows and granular permissions that replaced spreadsheet-driven processes prone to errors and unclear ownership.",
    outcomes: ["Errors down", "Ownership clear", "Onboarding faster"],
    capabilities: ["State-driven workflow", "Role-based permissions", "Audit trail"],
    tools: ["Bubble", "Custom validation logic"],
    heroImage: "/brand/images/hero-system-flow.png",
    problem: [
      "The organization was running on a combination of spreadsheets and email-driven handoffs. As the team grew, errors increased. Ownership was unclear. New team members struggled to understand the workflow, and there was no reliable way to track who did what or when.",
      "Critical business logic lived in undocumented Excel formulas and institutional knowledge. When mistakes happened, there was no audit trail to understand what went wrong."
    ],
    systemBullets: [
      "Role-based internal tool enforcing state-driven workflows with clear permission boundaries",
      "Each step has defined inputs, validation rules, and handoff points",
      "System prevents users from skipping required steps or entering invalid data",
      "Admin override capabilities for genuine exceptions—logged and attributed",
      "State transition enforcement preventing invalid changes",
      "Complete modification logging with full attribution",
      "Granular, role-based permissions showing only relevant data and actions",
      "Validation at the data layer ensuring integrity even as business rules change"
    ],
    whyItWorked: [
      "The architecture centers on enforcing state transitions. Each record moves through a defined lifecycle, and the system prevents invalid state changes while logging every modification with full attribution.",
      "Permissions are granular and role-based. Team members see only the data and actions relevant to their role, reducing cognitive load and preventing accidental changes to areas outside their responsibility.",
      "Errors dropped significantly. The team has clear ownership at every stage of the workflow. New hires onboard faster because the system itself guides them through the correct process.",
      "The audit trail provides confidence during reviews and investigations. The organization can now see exactly what happened, when, and who was responsible."
    ]
  },
  {
    slug: "compliance-tracking",
    title: "Compliance & Lifecycle Tracking System",
    summary: "Centralized lifecycle management system with enforced states and full audit trail that replaced manual spreadsheet tracking across multiple assets and locations.",
    outcomes: ["Audit-ready in minutes", "Zero missed deadlines"],
    capabilities: ["Lifecycle management", "Compliance automation", "Immutable audit trail"],
    tools: ["Bubble", "Automated reminders", "Document management"],
    heroImage: "/brand/images/hero-system-flow.png",
    problem: [
      "The organization needed to track compliance across multiple assets and locations, but the process was entirely manual. Data lived in disconnected spreadsheets, email chains, and local files.",
      "There was no reliable audit trail. When regulators asked for proof of compliance, teams scrambled to reconstruct timelines from fragmented records. The risk of missing critical deadlines was high, and data confidence was low."
    ],
    systemBullets: [
      "Centralized lifecycle management enforcing state-driven compliance workflows",
      "Each asset moves through defined states with mandatory documentation and approval gates",
      "State transitions prevented without required documentation",
      "All compliance activities logged with full attribution and timestamps",
      "Immutable historical records—users can only add new information",
      "Lifecycle rules enforced at the database level",
      "Automated reminders for upcoming deadlines before they become compliance issues",
      "Role-based access controls for state transition approvals",
      "Organization-wide visibility with appropriate access restrictions"
    ],
    whyItWorked: [
      "The core design principle is traceability. Every change to an asset's state, every document upload, and every approval is logged and immutable. Users cannot delete or modify historical records—they can only add new information.",
      "The system enforces lifecycle rules at the database level. Validation ensures that assets cannot skip required steps or enter invalid states.",
      "Manual effort dropped significantly. The team now has absolute confidence in their data during audits. When regulators request documentation, the system generates complete compliance reports in minutes.",
      "Missed deadlines are virtually eliminated through automated tracking and reminders. The organization has clear visibility into compliance status across all assets and locations."
    ]
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}
