export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  industry: string;
  duration?: string;
  metrics?: { label: string; value: string }[];
  outcomes: string[];
  capabilities: string[];
  iconImage: { src: string; alt: string };
  thumbnailImage: { src: string; alt: string };
  heroImage: { src: string; alt: string };
  problem: string[];
  systemBullets: string[];
  whyItWorked: string[];
  featured?: boolean;
  featuredDescription?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "quoting",
    title: "Automated Manufacturing Quoting",
    summary: "A self-serve quoting system for a sheet-metal fabricator that turns uploaded design files into accurate, purchasable quotes in minutes instead of weeks.",
    industry: "Manufacturing",
    duration: "8 weeks",
    featured: true,
    featuredDescription: "Enforced pricing logic with automatic order synchronization and production handoff.",
    metrics: [
      { label: "Quote Turnaround", value: "~5 min" },
      { label: "Order Accuracy", value: "99.8%" },
      { label: "Pricing Errors", value: "0" },
      { label: "Auto-Synced Orders", value: "100%" },
    ],
    outcomes: ["Instant quotes", "Pricing risk eliminated", "Orders auto-synced"],
    capabilities: ["Pricing engine", "File parsing", "State-driven workflows"],
    iconImage: { src: "/brand/images/case-studies/quoting-icon.svg", alt: "Quoting system icon" },
    thumbnailImage: { src: "/brand/images/case-studies/quoting-thumb.svg", alt: "Manufacturing quoting system workflow" },
    heroImage: { src: "/brand/images/case-studies/quoting-hero.svg", alt: "Quoting engine architecture" },
    problem: [
      "Getting a quote took days. Customers would send files, then wait while engineers manually priced each part using disconnected spreadsheets. Margins were inconsistent, pricing errors slipped through, and the back-and-forth killed deals before they started.",
      "Once a quote was accepted, the handoff to production was just as broken. Orders arrived with incomplete specs or outdated pricing because nothing was connected. Engineers spent as much time fixing data as they did quoting."
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
      "Customers now upload a design file and get an accurate quote in about five minutes. No waiting on engineers, no back-and-forth emails. The pricing logic is baked into the system so every quote is consistent, and margins are protected automatically.",
      "When a customer accepts a quote and pays, the order flows straight into the manufacturing system. No one re-enters data, no specs get lost in translation. What the customer approved is exactly what gets built.",
      "The quoting team went from spending days per quote to handling volume they never could before. Pricing errors dropped to zero because the rules are enforced by the system, not by memory or training."
    ]
  },
  {
    slug: "inventory",
    title: "Multi-Tenant Inventory & Operations System",
    summary: "A multi-tenant inventory and order system with a customer portal, role-based workflows, and enforced ownership across internal teams and external users.",
    industry: "Logistics",
    duration: "10 weeks",
    featured: true,
    featuredDescription: "State-driven workflows with role enforcement and complete modification logging.",
    metrics: [
      { label: "Error Reduction", value: "94%" },
      { label: "Customer Portal Orders", value: "1,827" },
      { label: "Audit Trail Coverage", value: "100%" },
      { label: "Concurrent Users", value: "50+" },
    ],
    outcomes: ["Fewer errors", "Clear ownership", "Faster onboarding", "Reduced handoffs", "Inventory accuracy"],
    capabilities: ["Role-based workflows", "Permission enforcement", "Inventory states", "Order validation", "Admin overrides"],
    iconImage: { src: "/brand/images/case-studies/inventory-icon-v2.svg", alt: "Inventory system icon" },
    thumbnailImage: { src: "/brand/images/case-studies/inventory-thumb.svg", alt: "Inventory operations workflow" },
    heroImage: { src: "/brand/images/case-studies/inventory-hero.svg", alt: "Operations platform architecture" },
    problem: [
      "Everything ran on spreadsheets and email. Business rules lived in Excel formulas that nobody documented, and as the team grew, mistakes multiplied. When something went wrong, there was no way to figure out what happened or who touched what.",
      "Customers had zero self-service capability. Every order meant a phone call, an email chain, and someone on the back end manually entering data. The team was buried in busywork instead of actually running operations."
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
      "Customers now place orders themselves through the portal. 1,827 orders have come through without a single phone call or back-end data entry. The team went from drowning in manual order processing to focusing on actual operations.",
      "Errors dropped 94% because the system enforces the rules automatically. You literally cannot skip a step or enter invalid data. When something does need an exception, there is a clear path for that with a full record of who approved it and why.",
      "Everyone sees exactly what they need to see and nothing more. Warehouse staff see their tasks, customers see their orders, managers see the full picture. And every change is logged permanently, so when questions come up, the answer is always there."
    ]
  },
  {
    slug: "water",
    title: "Regulated Water Operations Engine",
    summary: "A centralized system for managing regulated water assets and locations, enforcing compliance workflows, and producing audit-ready records on demand.",
    industry: "Water & Compliance",
    duration: "12 weeks",
    featured: true,
    featuredDescription: "Immutable state tracking with enforced documentation gates and automated deadline monitoring.",
    metrics: [
      { label: "Pages Automated", value: "1,500+" },
      { label: "Compliance Rate", value: "100%" },
      { label: "Hours Saved Weekly", value: "70+" },
      { label: "Locations Managed", value: "64" },
    ],
    outcomes: ["Audit-ready records", "Zero missed deadlines", "High data confidence", "Cross-site visibility"],
    capabilities: ["State-driven workflows", "Approval gates", "Role-based access", "Audit logging", "Immutable records", "Invalid-state prevention"],
    iconImage: { src: "/brand/images/case-studies/water-icon.svg", alt: "Water operations icon" },
    thumbnailImage: { src: "/brand/images/case-studies/water-thumb.svg", alt: "Water operations tracking system" },
    heroImage: { src: "/brand/images/case-studies/water-hero.svg", alt: "Compliance management architecture" },
    problem: [
      "Everything was a mess. They couldn't put together reports, couldn't get a bird's eye view of what was missing, where violations were, or how to schedule anything. Teams spent hours and hours merging documents and going through everything manually across 64 locations.",
      "Operators in the field carried 40 sheets of paper to track their work. Chain of custody documents were scattered everywhere. When regulators asked for records, the team scrambled to reconstruct timelines from spreadsheets and filing cabinets."
    ],
    systemBullets: [
      "Centralized asset database with state machine architecture for lifecycle progression",
      "State transitions blocked until required documentation and approvals are recorded",
      "Immutable modification log. Historical records cannot be deleted or altered after creation",
      "All state changes, document uploads, and approvals logged with user attribution and timestamp",
      "Lifecycle validation enforced at database level preventing invalid state combinations",
      "Automated deadline monitoring with scheduled workflow scanning for approaching requirements",
      "Notification engine triggering alerts before deadlines escalate to operational issues",
      "Role-based state transition permissions requiring specific authorization for progression",
      "Multi-location asset visibility with permission-controlled access to sensitive records"
    ],
    whyItWorked: [
      "Now they can merge 1,500 pages and 1,500 chain of custodies all at once and print it up. What used to take days of manual assembly happens in minutes. Reports that regulators need are generated on demand, not reconstructed from memory.",
      "Operators in the field update results directly from their phones. They can see where they need to go next, what samples are due, and what is already completed. No more flipping through 40 sheets of paper or calling the office for updates.",
      "The system tracks 64 locations with complete visibility. Management can see the full picture: what is on track, what is at risk, and what needs attention. Deadlines are monitored automatically. Nothing slips through the cracks because the system catches it before anyone has to remember."
    ]
  },
  {
    slug: "lending",
    title: "Loan Lifecycle & Payments Engine",
    summary: "An end-to-end loan lifecycle system handling origination, contracts, repayments, exceptions, and reporting with strict enforcement of financial state transitions.",
    industry: "FinTech",
    duration: "10 weeks",
    outcomes: ["Accurate balances", "Reliable repayments", "Fewer manual reviews", "Clear loan status", "Audit-ready reporting"],
    capabilities: ["Loan state machine", "Contract enforcement", "Payment scheduling", "Exception handling", "Balance reconciliation", "Lifecycle reporting"],
    iconImage: { src: "/brand/images/case-studies/lending-icon.svg", alt: "Lending system icon" },
    thumbnailImage: { src: "/brand/images/case-studies/lending-thumb.svg", alt: "Loan lifecycle management system" },
    heroImage: { src: "/brand/images/case-studies/lending-hero.svg", alt: "Lending platform architecture" },
    problem: [
      "The lending team tracked loans across multiple disconnected systems. Repayment schedules lived in one place, contract terms in another, and balance calculations in spreadsheets. When a loan moved from origination to repayment, someone had to manually update each system and hope nothing fell through.",
      "When borrowers missed a payment or needed a modification, the team handled it through email. No one could say with confidence what the current balance was on a given loan without manually reconciling across systems. Errors were discovered weeks later, usually by the borrower."
    ],
    systemBullets: [
      "Designed a complete loan lifecycle covering origination, active repayment, delinquency, forbearance, and close-out",
      "Enforced financial state transitions to prevent invalid balances, skipped steps, or contradictory loan states",
      "Supported scheduled, partial, and missed payments with automatic recalculation and reconciliation",
      "Maintained a complete historical record of all loan events for reporting and review",
      "Built borrower and lender dashboards backed by the same enforced backend rules"
    ],
    whyItWorked: [
      "Everything lives in one system now. A loan moves from origination to active repayment to close-out through defined steps that the system enforces. No one can accidentally skip a step or create an invalid state. The balance is always accurate because the math is built into the system.",
      "When something goes wrong, like a missed payment or early payoff, there is a clear process. The team follows defined steps instead of emailing back and forth. Every modification is recorded, so there is never a question about what happened or when.",
      "Both lenders and borrowers see the same data from the same system. No more conflicting spreadsheets. The lending team went from spending hours reconciling balances to trusting the numbers on screen because the system keeps them honest automatically."
    ]
  },
  {
    slug: "ai-agents",
    title: "BUBS: Multi-Agent Production Framework",
    summary: "A multi-agent system with a 3-phase execution framework that transforms AI-generated scaffolding into production-ready systems with governance, observability, and verification built in from day one.",
    industry: "AI / Developer Tooling",
    duration: "Under 24 hours",
    featured: true,
    featuredDescription: "4 concurrent agent lanes with governance-first architecture turning AI scaffolding into production systems.",
    metrics: [
      { label: "Development Time", value: "<24 hrs" },
      { label: "Issues Identified", value: "259" },
      { label: "Auto-Generated Scripts", value: "747" },
      { label: "Governance Rules", value: "12" },
    ],
    outcomes: ["Production-ready in hours", "Full observability", "Self-improving governance", "Zero manual scaffolding"],
    capabilities: ["Multi-agent orchestration", "Governance framework", "Automated verification", "MCP server integration", "Headless browser automation"],
    iconImage: { src: "/brand/images/case-studies/ai-agents-icon.svg", alt: "AI agents icon" },
    thumbnailImage: { src: "/brand/images/case-studies/ai-agents-thumb.svg", alt: "Multi-agent system architecture" },
    heroImage: { src: "/brand/images/case-studies/ai-agents-hero.png", alt: "BUBS framework architecture" },
    problem: [
      "AI tools can generate a working interface in minutes, but what you get is a facade. There are no backend workflows, no error handling, no way to know if something breaks. It looks great in a demo but falls apart the moment real users touch it.",
      "We audited one AI-generated application and found 58 structural issues. No state management, no data validation, no observability. Every AI-built app had the same problem: impressive on the surface, hollow underneath. Shipping these into production means accumulating technical debt at machine speed."
    ],
    systemBullets: [
      "3-phase BOS framework: BUILD (observability + translation + governance), OPERATE (inspection → decomposition → proposal → mutation → verification → traceability), STABILIZE (folder hierarchy, documented workflows, audit trails)",
      "4 concurrent agent lanes (Discovery, Planner, Writer, Verifier) with role-based access (read-only vs. write-enabled)",
      "BuildPrint MCP server providing real-time observability into application structure and state",
      "WIRE_FORMAT.md translation layer converting structured instructions into platform-native operations via bubble-writer",
      "5 governance files defining operational boundaries, permitted actions, and escalation rules",
      "6-layer execution process: inspection, decomposition, proposal-first execution, controlled mutation, multi-level verification, full traceability",
      "Self-improving system that auto-captures unknown platform actions via headless browser automation",
      "747 auto-generated scripts (691 issue-specific) across 12 governance recipe categories",
      "Color-coded workflow organization with mandatory Notes fields and complete audit trails"
    ],
    whyItWorked: [
      "BUBS takes what AI generates and turns it into something you can actually ship. Four agents work in parallel: one discovers what needs fixing, one plans the approach, one writes the code, and one verifies everything meets standards. In under 24 hours, a hollow prototype becomes a production system.",
      "The key insight: more governance means more autonomy, not less. By defining clear rules for what agents can and cannot do, the system operates with confidence and minimal human babysitting. 747 scripts were auto-generated across 12 governance categories.",
      "The framework works regardless of which AI model powers it. Swap out the model, the governance layer still enforces quality. That means the investment compounds over time instead of becoming obsolete when the next model drops."
    ]
  },
  {
    slug: "credit-platform",
    title: "Personalized Credit Building Platform",
    summary: "A consumer fintech platform guiding users through personalized credit-building journeys with real-time score tracking, automated recommendations, and structured improvement plans.",
    industry: "FinTech / Consumer Finance",
    duration: "12 weeks",
    featured: true,
    featuredDescription: "Real-time credit analysis with personalized improvement plans and automated progress tracking.",
    metrics: [
      { label: "Score Improvement", value: "120+ pts" },
      { label: "Plan Categories", value: "3 tracks" },
      { label: "API Integrations", value: "4 bureaus" },
      { label: "User Engagement", value: "Mobile-first" },
    ],
    outcomes: ["Personalized plans", "Real-time tracking", "Automated alerts", "Score improvement"],
    capabilities: ["Credit data analysis", "Plan engine", "Progress tracking", "Bureau API integration", "Mobile-first UX", "Automated workflows"],
    iconImage: { src: "/brand/images/case-studies/credit-icon.svg", alt: "Credit platform icon" },
    thumbnailImage: { src: "/brand/images/case-studies/credit-thumb.svg", alt: "Credit building platform dashboard" },
    heroImage: { src: "/brand/images/case-studies/credit-hero.svg", alt: "Credit platform architecture" },
    problem: [
      "People with damaged credit had nowhere to go. They could check their score, but then what? There was no roadmap. They bounced between credit monitoring apps, dispute services, and random advice online with no way to know what actually moves the needle.",
      "Credit improvement is not one thing, it is a sequence of coordinated actions. Without a structured plan, people wasted months paying for services that barely helped or made moves that actually hurt their score. They needed a guide, not just a dashboard."
    ],
    systemBullets: [
      "Real-time credit data analysis pulling from multiple bureau APIs with normalized scoring",
      "Structured plan engine generating personalized improvement paths across three tracks: repair, reporting, and optimization",
      "Progress visualization showing score trajectory with milestone markers and projected timelines",
      "Automated alert system monitoring credit events and triggering relevant recommendations",
      "Action prioritization engine ranking improvement opportunities by estimated score impact",
      "Mobile-first responsive interface designed for trust and clarity with sensitive financial data",
      "Secure API integration layer handling bureau authentication, rate limiting, and data caching",
      "User journey tracking with engagement analytics and plan adherence monitoring"
    ],
    whyItWorked: [
      "The platform tells you exactly what to do next and why. It pulls your credit data from four bureaus, analyzes your profile, and generates a ranked list of actions with projected score impact. Users see improvements of 120+ points because they are following a real plan, not guessing.",
      "Three improvement tracks run simultaneously: repair (fix what is broken), reporting (make sure good behavior shows up), and optimization (strategic moves for maximum impact). The system adjusts recommendations as your profile changes, so the plan stays relevant.",
      "Trust was everything. People with damaged credit have been burned by shady services before. The interface is clean, transparent, and built mobile-first because that is how real users access it. No dark patterns, no upsells, just a clear path forward."
    ]
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}
