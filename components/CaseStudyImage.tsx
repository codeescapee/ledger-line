interface CaseStudyImageProps {
  slug: string;
  variant: "hero" | "thumbnail";
  className?: string;
}

/* ── Real SVG image paths (when available) ── */
const realImages: Record<string, Record<string, string>> = {
  quoting: {
    hero: "/brand/images/case-studies/quoting-hero.svg",
    thumbnail: "/brand/images/case-studies/quoting-thumb.svg",
  },
  inventory: {
    hero: "/brand/images/case-studies/inventory-hero.svg",
    thumbnail: "/brand/images/case-studies/inventory-thumb.svg",
  },
  water: {
    hero: "/brand/images/case-studies/water-hero.svg",
    thumbnail: "/brand/images/case-studies/water-thumb.svg",
  },
  lending: {
    hero: "/brand/images/case-studies/lending-hero.svg",
    thumbnail: "/brand/images/case-studies/lending-thumb.svg",
  },
  "credit-platform": {
    hero: "/brand/images/case-studies/credit-hero.svg",
    thumbnail: "/brand/images/case-studies/credit-thumb.svg",
  },
  "ai-agents": {
    hero: "/brand/images/case-studies/ai-agents-hero.png",
    thumbnail: "/brand/images/case-studies/ai-agents-thumb.svg",
  },
};

const themes: Record<
  string,
  { primary: string; secondary: string; accent: string; label: string }
> = {
  quoting: {
    primary: "#2FB6D8",
    secondary: "#0E2A38",
    accent: "#1A8BA8",
    label: "Quoting System",
  },
  inventory: {
    primary: "#22C55E",
    secondary: "#0E2E1A",
    accent: "#16A34A",
    label: "Inventory Dashboard",
  },
  water: {
    primary: "#3B82F6",
    secondary: "#0E1A38",
    accent: "#2563EB",
    label: "Compliance Portal",
  },
  lending: {
    primary: "#A855F7",
    secondary: "#1E0E38",
    accent: "#7C3AED",
    label: "Loan Lifecycle",
  },
  "ai-agents": {
    primary: "#F59E0B",
    secondary: "#2E1E0A",
    accent: "#D97706",
    label: "Agent Console",
  },
  "credit-platform": {
    primary: "#EC4899",
    secondary: "#2E0E1E",
    accent: "#DB2777",
    label: "Credit Platform",
  },
};

/* ── Shared UI primitives ── */

function WindowChrome({ color }: { color: string }) {
  return (
    <g>
      <circle cx="24" cy="18" r="4" fill="#EF4444" opacity="0.7" />
      <circle cx="38" cy="18" r="4" fill="#F59E0B" opacity="0.7" />
      <circle cx="52" cy="18" r="4" fill="#22C55E" opacity="0.7" />
      <rect x="80" y="12" width="160" height="12" rx="6" fill={color} opacity="0.08" />
    </g>
  );
}

function TextLine({ x, y, width, color, opacity = 0.2 }: { x: number; y: number; width: number; color: string; opacity?: number }) {
  return <rect x={x} y={y} width={width} height="6" rx="3" fill={color} opacity={opacity} />;
}

function TableRow({ y, color, accent, highlighted = false }: { y: number; color: string; accent: string; highlighted?: boolean }) {
  return (
    <g>
      {highlighted && <rect x="20" y={y - 4} width="560" height="26" rx="4" fill={color} opacity="0.08" />}
      <rect x="28" y={y} width="80" height="6" rx="3" fill={color} opacity={highlighted ? 0.5 : 0.2} />
      <rect x="140" y={y} width="120" height="6" rx="3" fill={accent} opacity={highlighted ? 0.4 : 0.12} />
      <rect x="300" y={y} width="60" height="6" rx="3" fill={color} opacity={highlighted ? 0.4 : 0.15} />
      <rect x="400" y={y} width="50" height="14" rx="7" fill={color} opacity={highlighted ? 0.2 : 0.08} />
      <rect x="402" y={y + 4} width="46" height="6" rx="3" fill={color} opacity={highlighted ? 0.6 : 0.2} />
      <rect x="490" y={y} width="70" height="6" rx="3" fill={color} opacity={highlighted ? 0.3 : 0.1} />
    </g>
  );
}

function StatusBadge({ x, y, width, color, opacity = 0.3 }: { x: number; y: number; width: number; color: string; opacity?: number }) {
  return (
    <g>
      <rect x={x} y={y} width={width} height="18" rx="9" fill={color} opacity={opacity * 0.3} />
      <rect x={x + 8} y={y + 6} width={width - 16} height="6" rx="3" fill={color} opacity={opacity} />
    </g>
  );
}

/* ── Quoting: File upload + pricing table + quote summary ── */
function QuotingMockup({ color, accent }: { color: string; accent: string }) {
  return (
    <g>
      {/* Sidebar */}
      <rect x="0" y="32" width="120" height="418" fill={color} opacity="0.04" />
      <rect x="16" y="52" width="88" height="8" rx="4" fill={color} opacity="0.15" />
      {[80, 104, 128, 152, 176].map((y, i) => (
        <g key={y}>
          <rect x="16" y={y} width="10" height="10" rx="2" fill={color} opacity={i === 0 ? 0.3 : 0.1} />
          <rect x="34" y={y + 2} width={50 + i * 5} height="6" rx="3" fill={color} opacity={i === 0 ? 0.4 : 0.15} />
        </g>
      ))}

      {/* Main: Upload area */}
      <rect x="140" y="50" width="220" height="100" rx="8" fill={color} stroke={color} strokeWidth="1" strokeDasharray="6 4" opacity="0.15" />
      <rect x="220" y="80" width="60" height="8" rx="4" fill={color} opacity="0.2" />
      <rect x="210" y="96" width="80" height="6" rx="3" fill={color} opacity="0.1" />
      {/* Upload icon */}
      <path d="M245 70 L255 70 L250 60 Z" fill={color} opacity="0.25" />
      <line x1="250" y1="62" x2="250" y2="75" stroke={color} strokeWidth="1.5" opacity="0.25" />

      {/* Pricing table */}
      <rect x="140" y="170" width="440" height="24" rx="4" fill={color} opacity="0.06" />
      <TextLine x={150} y={178} width={60} color={color} opacity={0.35} />
      <TextLine x={280} y={178} width={50} color={color} opacity={0.35} />
      <TextLine x={400} y={178} width={40} color={color} opacity={0.35} />
      <TextLine x={510} y={178} width={50} color={color} opacity={0.35} />
      {[204, 232, 260, 288].map((y, i) => (
        <g key={y}>
          <rect x="140" y={y - 4} width="440" height="24" rx="2" fill={color} opacity={i === 1 ? 0.05 : 0} />
          <TextLine x={150} y={y + 4} width={70 - i * 5} color={color} opacity={i === 1 ? 0.4 : 0.15} />
          <TextLine x={280} y={y + 4} width={40} color={accent} opacity={i === 1 ? 0.35 : 0.12} />
          <TextLine x={400} y={y + 4} width={35} color={color} opacity={0.15} />
          <TextLine x={510} y={y + 4} width={55} color={color} opacity={i === 1 ? 0.4 : 0.2} />
        </g>
      ))}

      {/* Quote summary card */}
      <rect x="380" y="50" width="200" height="100" rx="8" fill={color} opacity="0.06" />
      <TextLine x={396} y={66} width={80} color={color} opacity={0.4} />
      <rect x="396" y="84" width="100" height="16" rx="4" fill={color} opacity="0.1" />
      <TextLine x={400} y={88} width={60} color={color} opacity={0.6} />
      {/* Generate button */}
      <rect x="396" y="116" width="120" height="24" rx="6" fill={color} opacity="0.35" />
      <TextLine x={420} y={124} width={72} color="#0B1121" opacity={0.7} />

      {/* Totals row */}
      <rect x="140" y="320" width="440" height="2" fill={color} opacity="0.1" />
      <TextLine x={400} y={336} width={40} color={color} opacity={0.3} />
      <rect x="480" y="330" width="100" height="20" rx="4" fill={color} opacity="0.12" />
      <TextLine x={494} y={336} width={72} color={color} opacity={0.5} />
    </g>
  );
}

/* ── Inventory: Dashboard with order table, portal metrics ── */
function InventoryMockup({ color, accent }: { color: string; accent: string }) {
  return (
    <g>
      {/* Top metric cards */}
      {[
        { x: 20, label: "1,827", sub: "Portal Orders" },
        { x: 160, label: "94%", sub: "Error Reduction" },
        { x: 300, label: "50+", sub: "Active Users" },
        { x: 440, label: "100%", sub: "Audit Trail" },
      ].map((card, i) => (
        <g key={i}>
          <rect x={card.x} y="50" width="120" height="65" rx="6" fill={color} opacity="0.05" />
          <rect x={card.x + 12} y="62" width={40 + i * 6} height="10" rx="3" fill={color} opacity={0.45} />
          <rect x={card.x + 12} y="82" width={60} height="6" rx="3" fill={color} opacity={0.15} />
          <rect x={card.x + 12} y="96" width={30} height="6" rx="3" fill={i === 0 ? color : accent} opacity={0.25} />
        </g>
      ))}

      {/* Order table */}
      <rect x="20" y="134" width="560" height="24" rx="4" fill={color} opacity="0.06" />
      {["Order #", "Customer", "Status", "Items", "Date"].map((_, i) => (
        <TextLine key={i} x={30 + i * 110} y={142} width={60 + (i === 1 ? 30 : 0)} color={color} opacity={0.3} />
      ))}

      {[170, 200, 230, 260, 290, 320].map((y, i) => (
        <g key={y}>
          {i === 2 && <rect x="20" y={y - 6} width="560" height="26" rx="4" fill={color} opacity="0.06" />}
          <TextLine x={30} y={y} width={50} color={color} opacity={i === 2 ? 0.5 : 0.2} />
          <TextLine x={140} y={y} width={80} color={accent} opacity={i === 2 ? 0.4 : 0.12} />
          <StatusBadge x={260} y={y - 6} width={60} color={i === 0 ? "#22C55E" : i === 3 ? "#F59E0B" : color} opacity={i === 2 ? 0.6 : 0.35} />
          <TextLine x={350} y={y} width={30} color={color} opacity={0.2} />
          <TextLine x={470} y={y} width={70} color={color} opacity={0.15} />
        </g>
      ))}

      {/* Pagination */}
      {[0, 1, 2].map((i) => (
        <rect key={i} x={240 + i * 30} y="356" width="22" height="22" rx="4" fill={color} opacity={i === 0 ? 0.2 : 0.06} />
      ))}
    </g>
  );
}

/* ── Water: Compliance dashboard with locations, deadlines ── */
function WaterMockup({ color, accent }: { color: string; accent: string }) {
  return (
    <g>
      {/* Top bar with location count */}
      <rect x="20" y="46" width="560" height="36" rx="6" fill={color} opacity="0.04" />
      <TextLine x={32} y={58} width={100} color={color} opacity={0.3} />
      <StatusBadge x={460} y={50} width={70} color={color} opacity={0.4} />
      <TextLine x={344} y={58} width={80} color={accent} opacity={0.15} />

      {/* Two-column layout */}
      {/* Left: Asset list with compliance indicators */}
      <rect x="20" y="96" width="280" height="290" rx="6" fill={color} opacity="0.03" />
      <TextLine x={32} y={110} width={100} color={color} opacity={0.35} />

      {[136, 170, 204, 238, 272, 306, 340].map((y, i) => (
        <g key={y}>
          {i === 1 && <rect x="28" y={y - 6} width="264" height="28" rx="4" fill={color} opacity="0.06" />}
          {/* Status dot */}
          <circle cx="40" cy={y + 4} r="4" fill={i < 5 ? "#22C55E" : i === 5 ? "#F59E0B" : "#EF4444"} opacity="0.6" />
          <TextLine x={52} y={y} width={90 - i * 4} color={color} opacity={i === 1 ? 0.45 : 0.2} />
          <TextLine x={180} y={y} width={50} color={accent} opacity={0.12} />
          <TextLine x={248} y={y} width={40} color={color} opacity={0.15} />
        </g>
      ))}

      {/* Right: Deadline timeline + merge indicator */}
      <rect x="316" y="96" width="264" height="140" rx="6" fill={color} opacity="0.03" />
      <TextLine x={328} y={110} width={90} color={color} opacity={0.35} />

      {/* Timeline bars */}
      {[134, 158, 182, 206].map((y, i) => (
        <g key={y}>
          <TextLine x={328} y={y} width={40} color={color} opacity={0.2} />
          <rect x="380" y={y - 2} width={140 - i * 20} height="10" rx="5" fill={color} opacity={0.08 + i * 0.04} />
          <rect x="380" y={y - 2} width={(140 - i * 20) * (0.9 - i * 0.15)} height="10" rx="5" fill={i < 2 ? color : accent} opacity={0.25} />
        </g>
      ))}

      {/* Merge section */}
      <rect x="316" y="250" width="264" height="136" rx="6" fill={color} opacity="0.03" />
      <TextLine x={328} y={264} width={110} color={color} opacity={0.35} />
      {/* Document stack */}
      <rect x="328" y="284" width="100" height="14" rx="3" fill={color} opacity="0.06" />
      <rect x="332" y="280" width="100" height="14" rx="3" fill={color} opacity="0.08" />
      <rect x="336" y="276" width="100" height="14" rx="3" fill={color} opacity="0.1" />
      {/* Arrow */}
      <line x1="460" y1="290" x2="490" y2="290" stroke={color} strokeWidth="1.5" opacity="0.3" />
      <path d="M486 284 L496 290 L486 296" fill="none" stroke={color} strokeWidth="1.5" opacity="0.3" />
      {/* Merged result */}
      <rect x="504" y="278" width="60" height="24" rx="4" fill={color} opacity="0.15" />
      <TextLine x={512} y={286} width={44} color={color} opacity={0.5} />

      {/* Bottom metric: pages automated */}
      <rect x="328" y="316" width="120" height="12" rx="3" fill={color} opacity="0.06" />
      <TextLine x={336} y={318} width={80} color={color} opacity={0.3} />
      <rect x="328" y="340" width="60" height="18" rx="4" fill={color} opacity="0.12" />
      <TextLine x={338} y={345} width={40} color={color} opacity={0.5} />
    </g>
  );
}

/* ── Lending: Loan lifecycle tracker with payment table ── */
function LendingMockup({ color, accent }: { color: string; accent: string }) {
  return (
    <g>
      {/* Lifecycle progression */}
      <rect x="20" y="50" width="560" height="60" rx="6" fill={color} opacity="0.03" />
      <TextLine x={32} y={62} width={100} color={color} opacity={0.35} />
      {/* Progress steps */}
      {["Origination", "Active", "Repayment", "Close-out"].map((_, i) => {
        const x = 40 + i * 140;
        const active = i < 3;
        return (
          <g key={i}>
            <circle cx={x} cy="92" r="8" fill={active ? color : "transparent"} fillOpacity={active ? 0.3 : 0} stroke={color} strokeWidth="1.5" opacity={active ? 0.6 : 0.2} />
            {i < 3 && <line x1={x + 12} y1="92" x2={x + 128} y2="92" stroke={color} strokeWidth="1" opacity={i < 2 ? 0.3 : 0.1} />}
            <TextLine x={x - 20} y={86} width={6} color={color} opacity={active ? 0.5 : 0.15} />
          </g>
        );
      })}

      {/* Two-column layout */}
      {/* Left: Loan details */}
      <rect x="20" y="126" width="270" height="250" rx="6" fill={color} opacity="0.03" />
      <TextLine x={32} y={142} width={90} color={color} opacity={0.35} />
      {[164, 188, 212, 236, 260, 284].map((y, i) => (
        <g key={y}>
          <TextLine x={32} y={y} width={70} color={color} opacity={0.15} />
          <TextLine x={160} y={y} width={i === 0 ? 100 : 60 + i * 8} color={accent} opacity={i === 0 ? 0.4 : 0.2} />
        </g>
      ))}
      {/* Status badge */}
      <StatusBadge x={32} y={310} width={80} color="#22C55E" opacity={0.5} />

      {/* Right: Payment schedule */}
      <rect x="306" y="126" width="274" height="250" rx="6" fill={color} opacity="0.03" />
      <TextLine x={318} y={142} width={100} color={color} opacity={0.35} />
      {/* Table header */}
      <rect x="314" y="160" width="258" height="20" rx="3" fill={color} opacity="0.05" />
      <TextLine x={322} y={166} width={40} color={color} opacity={0.25} />
      <TextLine x={400} y={166} width={40} color={color} opacity={0.25} />
      <TextLine x={490} y={166} width={50} color={color} opacity={0.25} />
      {/* Payment rows */}
      {[192, 216, 240, 264, 288, 312, 336].map((y, i) => (
        <g key={y}>
          <TextLine x={322} y={y} width={45} color={color} opacity={0.15} />
          <TextLine x={400} y={y} width={50} color={accent} opacity={0.2} />
          <circle cx="510" cy={y + 3} r="5" fill={i < 4 ? "#22C55E" : "transparent"} fillOpacity={i < 4 ? 0.4 : 0} stroke={i < 4 ? "#22C55E" : color} strokeWidth="1" opacity={i < 4 ? 0.5 : 0.15} />
        </g>
      ))}
    </g>
  );
}

/* ── AI Agents: Multi-agent console with governance panel ── */
function AgentsMockup({ color, accent }: { color: string; accent: string }) {
  return (
    <g>
      {/* Top: Agent status cards */}
      {[
        { x: 20, name: "Discovery", status: "active" },
        { x: 160, name: "Planner", status: "active" },
        { x: 300, name: "Writer", status: "active" },
        { x: 440, name: "Verifier", status: "idle" },
      ].map((agent, i) => (
        <g key={i}>
          <rect x={agent.x} y="50" width="120" height="56" rx="6" fill={color} opacity="0.05" />
          {/* Dot indicator */}
          <circle cx={agent.x + 14} cy="66" r="4" fill={agent.status === "active" ? "#22C55E" : color} opacity={agent.status === "active" ? 0.7 : 0.2} />
          <TextLine x={agent.x + 24} y={63} width={60} color={color} opacity={0.35} />
          <TextLine x={agent.x + 12} y={82} width={50} color={accent} opacity={0.15} />
          {/* Mini progress bar */}
          <rect x={agent.x + 12} y="92" width="96" height="4" rx="2" fill={color} opacity="0.08" />
          <rect x={agent.x + 12} y="92" width={agent.status === "active" ? 60 + i * 10 : 20} height="4" rx="2" fill={color} opacity="0.3" />
        </g>
      ))}

      {/* Terminal output */}
      <rect x="20" y="122" width="360" height="200" rx="6" fill="#0A0E17" />
      <rect x="20" y="122" width="360" height="20" rx="6" fill={color} opacity="0.06" />
      <TextLine x={32} y={128} width={60} color={color} opacity={0.3} />
      {/* Terminal lines */}
      {[154, 172, 190, 208, 226, 244, 262, 280, 298].map((y, i) => (
        <g key={y}>
          <TextLine x={32} y={y} width={8} color={i === 8 ? color : "#22C55E"} opacity={i === 8 ? 0.5 : 0.35} />
          <TextLine x={46} y={y} width={60 + ((i * 37) % 80)} color={i === 8 ? color : "#94A3B8"} opacity={i === 3 || i === 6 ? 0.4 : 0.2} />
          {(i === 2 || i === 5) && <StatusBadge x={240} y={y - 5} width={50} color="#22C55E" opacity={0.5} />}
          {i === 7 && <StatusBadge x={240} y={y - 5} width={60} color="#F59E0B" opacity={0.5} />}
        </g>
      ))}

      {/* Right: Governance panel */}
      <rect x="396" y="122" width="184" height="200" rx="6" fill={color} opacity="0.03" />
      <TextLine x={408} y={138} width={80} color={color} opacity={0.35} />
      {/* Governance rules list */}
      {[160, 182, 204, 226, 248, 270, 292].map((y, i) => (
        <g key={y}>
          <rect x="408" y={y - 2} width="14" height="14" rx="3" fill={i < 5 ? color : "transparent"} fillOpacity={i < 5 ? 0.15 : 0} stroke={color} strokeWidth="0.8" opacity={i < 5 ? 0.5 : 0.15} />
          {i < 5 && <path d={`M${412} ${y + 4} l3 3 6-6`} stroke={color} strokeWidth="1.2" fill="none" opacity="0.5" />}
          <TextLine x={430} y={y + 2} width={60 + ((i * 13) % 40)} color={color} opacity={i < 5 ? 0.25 : 0.1} />
        </g>
      ))}

      {/* Bottom stats */}
      <rect x="20" y="338" width="560" height="44" rx="6" fill={color} opacity="0.03" />
      {[
        { x: 40, w: 40 },
        { x: 160, w: 50 },
        { x: 310, w: 60 },
        { x: 460, w: 40 },
      ].map((s, i) => (
        <g key={i}>
          <TextLine x={s.x} y={350} width={s.w} color={color} opacity={0.5} />
          <TextLine x={s.x} y={366} width={50} color={accent} opacity={0.15} />
        </g>
      ))}
    </g>
  );
}

/* ── Credit Platform: Score gauge + improvement plan ── */
function CreditMockup({ color, accent }: { color: string; accent: string }) {
  return (
    <g>
      {/* Score gauge section */}
      <rect x="20" y="50" width="240" height="200" rx="8" fill={color} opacity="0.03" />
      <TextLine x={32} y={66} width={90} color={color} opacity={0.35} />
      {/* Gauge arc */}
      <path d="M80 200 A60 60 0 0 1 200 200" fill="none" stroke={color} strokeWidth="6" opacity="0.1" />
      <path d="M80 200 A60 60 0 0 1 185 160" fill="none" stroke={color} strokeWidth="6" opacity="0.4" strokeLinecap="round" />
      {/* Score number */}
      <rect x="110" y="170" width="60" height="18" rx="4" fill={color} opacity="0.1" />
      <TextLine x={120} y={175} width={40} color={color} opacity={0.6} />
      {/* Score label */}
      <TextLine x={115} y={200} width={50} color={accent} opacity={0.2} />
      {/* Change indicator */}
      <path d="M170 218 L178 208 L186 218" fill="none" stroke="#22C55E" strokeWidth="1.5" opacity="0.5" />
      <TextLine x={190} y={213} width={35} color="#22C55E" opacity={0.4} />

      {/* Bureau integrations */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={32 + i * 54} y="232" width="46" height="10" rx="5" fill={color} opacity={0.06 + i * 0.02} />
          <TextLine x={38 + i * 54} y={234} width={34} color={color} opacity={0.2} />
        </g>
      ))}

      {/* Right: Improvement plan */}
      <rect x="276" y="50" width="304" height="200" rx="8" fill={color} opacity="0.03" />
      <TextLine x={288} y={66} width={110} color={color} opacity={0.35} />

      {/* Three track tabs */}
      {["Repair", "Reporting", "Optimize"].map((_, i) => (
        <rect key={i} x={288 + i * 92} y="82" width="80" height="20" rx="4" fill={color} opacity={i === 0 ? 0.15 : 0.04} />
      ))}

      {/* Plan checklist */}
      {[118, 146, 174, 202, 230].map((y, i) => (
        <g key={y}>
          {/* Checkbox */}
          <rect x="288" y={y - 2} width="16" height="16" rx="4" fill={i < 3 ? color : "transparent"} fillOpacity={i < 3 ? 0.15 : 0} stroke={color} strokeWidth="0.8" opacity={i < 3 ? 0.5 : 0.15} />
          {i < 3 && <path d={`M${292} ${y + 5} l3 3 7-7`} stroke={color} strokeWidth="1.2" fill="none" opacity="0.5" />}
          {/* Task text */}
          <TextLine x={314} y={y + 2} width={120 - i * 8} color={color} opacity={i < 3 ? 0.2 : 0.15} />
          {/* Impact indicator */}
          <rect x={510} y={y - 2} width={50} height="16" rx="8" fill={i === 0 ? "#22C55E" : i === 1 ? color : accent} opacity={i < 3 ? 0.12 : 0.05} />
          <TextLine x={518} y={y + 2} width={34} color={i === 0 ? "#22C55E" : color} opacity={i < 3 ? 0.4 : 0.1} />
        </g>
      ))}

      {/* Bottom: Progress timeline */}
      <rect x="20" y="268" width="560" height="108" rx="8" fill={color} opacity="0.03" />
      <TextLine x={32} y={284} width={100} color={color} opacity={0.35} />
      {/* Timeline */}
      <line x1="40" y1="320" x2="560" y2="320" stroke={color} strokeWidth="1" opacity="0.1" />
      {[40, 140, 240, 340, 440, 540].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="320" r={i < 4 ? 6 : 4} fill={i < 4 ? color : "transparent"} fillOpacity={i < 4 ? 0.3 : 0} stroke={color} strokeWidth="1" opacity={i < 4 ? 0.5 : 0.15} />
          <TextLine x={x - 15} y={334} width={30} color={color} opacity={0.15} />
          {i < 4 && <TextLine x={x - 10} y={348} width={20} color={accent} opacity={0.1} />}
        </g>
      ))}
    </g>
  );
}

const patternMap: Record<string, React.FC<{ color: string; accent: string }>> = {
  quoting: QuotingMockup,
  inventory: InventoryMockup,
  water: WaterMockup,
  lending: LendingMockup,
  "ai-agents": AgentsMockup,
  "credit-platform": CreditMockup,
};

export default function CaseStudyImage({
  slug,
  variant,
  className = "",
}: CaseStudyImageProps) {
  const realSrc = realImages[slug]?.[variant];

  if (realSrc) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={realSrc}
        alt={`${themes[slug]?.label || slug} interface mockup`}
        className={className}
      />
    );
  }

  // Fallback: inline SVG wireframe for case studies without custom images
  const theme = themes[slug] || themes.quoting;
  const width = 600;
  const height = variant === "hero" ? 450 : 400;
  const Pattern = patternMap[slug] || QuotingMockup;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`${theme.label} interface mockup`}
    >
      <defs>
        <linearGradient
          id={`bg-${slug}-${variant}`}
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="#0B1121" />
          <stop offset="100%" stopColor={theme.secondary} />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect
        width={width}
        height={height}
        fill={`url(#bg-${slug}-${variant})`}
        rx="8"
      />

      {/* Window chrome */}
      <WindowChrome color={theme.primary} />

      {/* Pattern */}
      <Pattern color={theme.primary} accent={theme.accent} />
    </svg>
  );
}
