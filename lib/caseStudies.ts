export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  outcomes: string[];
  capabilities: string[];
  thumbnailImage: { src: string; alt: string };
  heroImage: { src: string; alt: string };
  problem: string[];
  systemBullets: string[];
  whyItWorked: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "quoting",
    title: "Automated Manufacturing Quoting",
    summary: "A self-serve quoting system for a sheet-metal fabricator that turns uploaded design files into accurate, purchasable quotes in minutes instead of weeks.",
    outcomes: ["Instant quotes", "Pricing risk eliminated", "Orders auto-synced"],
    capabilities: ["Pricing engine", "File parsing", "State-driven workflows"],
    thumbnailImage: { src: "/brand/images/case-studies/quoting-thumb.png", alt: "Manufacturing quoting system workflow" },
    heroImage: { src: "/brand/images/case-studies/quoting-hero.png", alt: "Quoting engine architecture" },
    problem: [
      "Manual quoting process required days of engineering time with no standardized pricing logic. Quotes were calculated in disconnected spreadsheets, leading to inconsistent margins and pricing errors that sometimes went undetected until production.",
      "No validation existed between quote acceptance and production handoff. Orders entered manufacturing with incomplete specifications or incorrect pricing."
    ],
    systemBullets: [
      "CAD file upload triggering automated geometry analysis via Paperless Parts API",
      "Pricing calculator with material, quantity, finishing, and complexity variables encoded as backend logic",
      "Margin enforcement rules preventing quotes below defined thresholds",
      "Shipping cost calculation through carrier API integration with live rate lookup",
      "Payment processing orchestration via Stripe with automatic invoice generation",
      "State-driven workflow preventing production handoff without complete specifications",
      "Automated order synchronization to manufacturing ERP on payment completion",
      "Role-based override permissions for engineering-approved exceptions with full logging",
      "Complete state transition history for every quote from upload to production"
    ],
    whyItWorked: [
      "State transitions were modeled explicitly from file upload through production handoff. Each transition validates required data and enforces business rules at the backend layer before allowing progression.",
      "Pricing logic is encoded in the database schema and calculation engine rather than spreadsheets. Margin thresholds are enforced programmatically, making under-pricing a system impossibility rather than a training issue.",
      "The production handoff is automated through API orchestration. Quote data flows directly into manufacturing systems after payment, eliminating manual data entry and the specification drift that came with it."
    ]
  },
  {
    slug: "inventory",
    title: "Multi-Tenant Inventory & Operations System",
    summary: "A multi-tenant inventory and order system with a customer portal, role-based workflows, and enforced ownership across internal teams and external users.",
    outcomes: ["Fewer errors", "Clear ownership", "Faster onboarding", "Reduced handoffs", "Inventory accuracy"],
    capabilities: ["Role-based workflows", "Permission enforcement", "Inventory states", "Order validation", "Admin overrides"],
    thumbnailImage: { src: "/brand/images/case-studies/inventory-thumb.png", alt: "Inventory operations workflow" },
    heroImage: { src: "/brand/images/case-studies/inventory-hero.png", alt: "Operations platform architecture" },
    problem: [
      "Operations ran on spreadsheets and email handoffs with business logic embedded in undocumented Excel formulas. As team size grew, errors increased. When processes failed, no audit trail existed to determine what happened or who was responsible.",
      "Critical state transitions occurred through manual coordination. Incomplete handoffs created downstream failures that surfaced days later in production."
    ],
    systemBullets: [
      "State machine architecture with explicitly modeled transitions and validation gates",
      "Each workflow step defines required inputs, validation rules, and authorized roles",
      "State progression prevented when validation fails or required data is missing",
      "Admin override pathways for genuine exceptions with mandatory justification and full logging",
      "Permission system enforcing read/write access at the field level based on user role and current state",
      "Complete modification log capturing every change with user attribution and timestamp",
      "Database constraints preventing invalid state combinations at the schema level",
      "Automated handoff notifications triggered by state transitions",
      "Role-scoped dashboards showing only relevant records and available actions"
    ],
    whyItWorked: [
      "State logic is enforced in the backend through database constraints and API-level validation. Users cannot skip required steps or create invalid state combinations—the system architecture prevents it.",
      "Every modification is logged immutably with full attribution. Teams gained complete operational visibility: who changed what, when, and what state it was in at the time.",
      "Permission enforcement at the data layer means users see only records and fields relevant to their role. This reduced errors from users modifying data outside their domain while maintaining complete system transparency for administrators."
    ]
  },
  {
    slug: "water",
    title: "Regulated Water Operations Engine",
    summary: "A centralized system for managing regulated water assets and locations, enforcing compliance workflows, and producing audit-ready records on demand.",
    outcomes: ["Audit-ready records", "Zero missed deadlines", "High data confidence", "Cross-site visibility"],
    capabilities: ["State-driven workflows", "Approval gates", "Role-based access", "Audit logging", "Immutable records", "Invalid-state prevention"],
    thumbnailImage: { src: "/brand/images/case-studies/water-thumb.png", alt: "Water operations tracking system" },
    heroImage: { src: "/brand/images/case-studies/water-hero.png", alt: "Compliance management architecture" },
    problem: [
      "Asset lifecycle tracking ran on disconnected spreadsheets across multiple locations. No centralized state management existed. Teams manually coordinated deadlines through email, leading to missed requirements and data fragmentation.",
      "When operational reviews occurred, teams reconstructed timelines from scattered records with no reliable audit trail. Historical changes were untraceable."
    ],
    systemBullets: [
      "Centralized asset database with state machine architecture for lifecycle progression",
      "State transitions blocked until required documentation and approvals are recorded",
      "Immutable modification log—historical records cannot be deleted or altered after creation",
      "All state changes, document uploads, and approvals logged with user attribution and timestamp",
      "Lifecycle validation enforced at database level preventing invalid state combinations",
      "Automated deadline monitoring with scheduled workflow scanning for approaching requirements",
      "Notification engine triggering alerts before deadlines escalate to operational issues",
      "Role-based state transition permissions requiring specific authorization for progression",
      "Multi-location asset visibility with permission-controlled access to sensitive records"
    ],
    whyItWorked: [
      "The architecture treats historical data as immutable. Users append new state transitions and documentation but cannot modify or delete past records. This creates an unbroken audit chain from acquisition through disposal.",
      "State transitions are validated against lifecycle rules encoded in the database schema. Assets cannot skip required steps or enter invalid states—progression is blocked at the data layer.",
      "Deadline monitoring runs on scheduled backend workflows rather than user discipline. The system scans for approaching requirements and triggers notifications automatically, eliminating the manual tracking overhead that previously caused missed deadlines."
    ]
  },
  {
    slug: "lending",
    title: "Loan Lifecycle & Payments Engine",
    summary: "An end-to-end loan lifecycle system handling origination, contracts, repayments, exceptions, and reporting with strict enforcement of financial state transitions.",
    outcomes: ["Accurate balances", "Reliable repayments", "Fewer manual reviews", "Clear loan status", "Audit-ready reporting"],
    capabilities: ["Loan state machine", "Contract enforcement", "Payment scheduling", "Exception handling", "Balance reconciliation", "Lifecycle reporting"],
    thumbnailImage: { src: "/brand/images/case-studies/lending-thumb.png", alt: "Loan lifecycle management system" },
    heroImage: { src: "/brand/images/case-studies/lending-hero.png", alt: "Lending platform architecture" },
    problem: [
      "Loan management ran on fragmented systems with manual tracking of repayment schedules, contract terms, and balance calculations. State transitions between origination, active repayment, and closure required manual intervention with high error rates.",
      "Exception handling for late payments, early payoffs, and contract modifications occurred through email coordination with no systematic way to track modifications or ensure balance accuracy across the loan lifecycle."
    ],
    systemBullets: [
      "Designed a complete loan lifecycle covering origination, active repayment, delinquency, forbearance, and close-out",
      "Enforced financial state transitions to prevent invalid balances, skipped steps, or contradictory loan states",
      "Supported scheduled, partial, and missed payments with automatic recalculation and reconciliation",
      "Maintained a complete historical record of all loan events for reporting and review",
      "Built borrower and lender dashboards backed by the same enforced backend rules"
    ],
    whyItWorked: [
      "Financial state transitions are enforced at the database layer. Loans cannot progress through lifecycle stages without required documentation, approvals, and balance validation. The system architecture prevents invalid state combinations.",
      "Payment calculations are encoded as backend logic rather than spreadsheet formulas. Balance reconciliation happens automatically on each transaction, eliminating manual review overhead and ensuring mathematical accuracy.",
      "Exception handling follows defined workflows with mandatory documentation and approval gates. All modifications are logged immutably, creating an audit trail that meets regulatory requirements while reducing manual investigation time."
    ]
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}
