"use client";

import { motion } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;
const TEAL = "#2FB6D8";
const SURFACE = "#1E293B";
const MUTED = "#94a3b8";

// ── Background dot grid ──
function DotGrid() {
  const dots: { cx: number; cy: number }[] = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      dots.push({ cx: 50 + col * 44, cy: 25 + row * 50 });
    }
  }
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={1} fill={SURFACE} />
      ))}
    </motion.g>
  );
}

// ── Animated path that draws itself ──
function DrawPath({
  d,
  delay,
  duration = 0.5,
  stroke = TEAL,
  strokeOpacity = 0.25,
  strokeWidth = 1,
  dashed = false,
}: {
  d: string;
  delay: number;
  duration?: number;
  stroke?: string;
  strokeOpacity?: number;
  strokeWidth?: number;
  dashed?: boolean;
}) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeOpacity={strokeOpacity}
      strokeDasharray={dashed ? "4 6" : undefined}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration, delay, ease: EASE }}
    />
  );
}

// ── Node that scales in ──
function NodeGroup({
  delay,
  children,
  x,
  y,
}: {
  delay: number;
  children: React.ReactNode;
  x: number;
  y: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay, ease: EASE }}
      style={{ transformOrigin: `${x}px ${y}px` }}
    >
      {children}
    </motion.g>
  );
}

// ── Tier label ──
function TierLabel({
  text,
  x,
  y,
  delay,
}: {
  text: string;
  x: number;
  y: number;
  delay: number;
}) {
  return (
    <motion.text
      x={x}
      y={y}
      fill={TEAL}
      fillOpacity={0.6}
      fontSize={9}
      fontFamily="monospace"
      fontWeight={600}
      letterSpacing={2}
      initial={{ opacity: 0, y: y + 8 }}
      animate={{ opacity: 1, y }}
      transition={{ duration: 0.4, delay, ease: EASE }}
    >
      {text}
    </motion.text>
  );
}

// ── Node inner label ──
function NodeLabel({ x, y, text }: { x: number; y: number; text: string }) {
  return (
    <text
      x={x}
      y={y}
      fill={MUTED}
      fontSize={8}
      fontFamily="monospace"
      textAnchor="middle"
      dominantBaseline="central"
    >
      {text}
    </text>
  );
}

// ── Sample points along a cubic bezier curve ──
type Pt = [number, number];

function sampleBezier(p0: Pt, p1: Pt, p2: Pt, p3: Pt, steps = 10) {
  const xs: number[] = [];
  const ys: number[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const u = 1 - t;
    const u2 = u * u;
    const u3 = u2 * u;
    const t2 = t * t;
    const t3 = t2 * t;
    xs.push(u3 * p0[0] + 3 * u2 * t * p1[0] + 3 * u * t2 * p2[0] + t3 * p3[0]);
    ys.push(u3 * p0[1] + 3 * u2 * t * p1[1] + 3 * u * t2 * p2[1] + t3 * p3[1]);
  }
  return { xs, ys };
}

// ── Pre-computed bezier paths for pulse animations ──
const PULSE_PATHS = {
  // DATA → LOGIC (hex bottom at y=265)
  schemaToValidate: sampleBezier([125, 304], [125, 282], [105, 270], [105, 265]),
  recordsToEnforce: sampleBezier([225, 304], [225, 282], [205, 270], [205, 265]),
  stateToCompute: sampleBezier([310, 304], [310, 282], [305, 270], [305, 265]),
  // LOGIC → WORKFLOW (hex top at y=205)
  validateToDraft: sampleBezier([105, 205], [105, 185], [100, 173], [100, 163]),
  enforceToReview: sampleBezier([205, 205], [205, 185], [200, 173], [200, 163]),
  computeToApproved: sampleBezier([305, 205], [305, 185], [305, 173], [305, 163]),
  // WORKFLOW → INTERFACE
  draftToDashboard: sampleBezier([100, 137], [100, 110], [130, 85], [130, 74]),
  reviewToApi: sampleBezier([200, 137], [200, 110], [280, 85], [280, 74]),
};

// ── Data pulse that follows actual bezier curve ──
function BezierPulse({
  path,
  delay,
  repeatDelay = 4,
}: {
  path: { xs: number[]; ys: number[] };
  delay: number;
  repeatDelay?: number;
}) {
  const n = path.xs.length;
  const opacities = path.xs.map((_, i) =>
    i === 0 || i === n - 1 ? 0 : 0.8
  );
  return (
    <motion.circle
      r={2.5}
      fill={TEAL}
      initial={{ cx: path.xs[0], cy: path.ys[0], opacity: 0 }}
      animate={{
        cx: path.xs,
        cy: path.ys,
        opacity: opacities,
      }}
      transition={{
        duration: 1.5,
        delay: 3.2 + delay,
        repeat: Infinity,
        repeatDelay,
        ease: "easeInOut",
      }}
    />
  );
}

// ── Hexagon path helper ──
function hexPath(cx: number, cy: number, r: number) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }
  return `M${pts.join("L")}Z`;
}

// ── Main component ──
export default function HeroAnimation({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Background grid ── */}
        <DotGrid />

        {/* ════════════════════════════════════════
            TIER 4: DATA (bottom) y=295–345
        ════════════════════════════════════════ */}

        {/* Tier divider */}
        <DrawPath
          d="M50 290 L350 290"
          delay={0.3}
          duration={0.5}
          stroke={SURFACE}
          strokeOpacity={0.4}
          dashed
        />

        {/* Tier label */}
        <TierLabel text="DATA" x={50} y={298} delay={0.4} />

        {/* Database node (cylinder) */}
        <NodeGroup delay={0.5} x={125} y={320}>
          <rect
            x={93}
            y={306}
            width={64}
            height={32}
            rx={3}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.8}
            strokeWidth={1.5}
          />
          <ellipse
            cx={125}
            cy={306}
            rx={32}
            ry={6}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.8}
            strokeWidth={1.5}
          />
          <ellipse
            cx={125}
            cy={338}
            rx={32}
            ry={6}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.6}
            strokeWidth={1}
          />
          {/* Table grid icon (centered at y=322 to align with text) */}
          <rect x={102} y={318} width={10} height={8} rx={1} fill="none" stroke={TEAL} strokeOpacity={0.5} strokeWidth={1} />
          <line x1={107} y1={318} x2={107} y2={326} stroke={TEAL} strokeOpacity={0.4} strokeWidth={0.8} />
          <line x1={102} y1={322} x2={112} y2={322} stroke={TEAL} strokeOpacity={0.4} strokeWidth={0.8} />
          <NodeLabel x={134} y={322} text="schema" />
        </NodeGroup>

        {/* Schema table node B */}
        <NodeGroup delay={0.65} x={225} y={320}>
          <rect
            x={197}
            y={304}
            width={56}
            height={32}
            rx={3}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.5}
            strokeWidth={1}
          />
          {/* List icon */}
          <line x1={203} y1={317} x2={211} y2={317} stroke={TEAL} strokeOpacity={0.5} strokeWidth={1} />
          <line x1={203} y1={320} x2={211} y2={320} stroke={TEAL} strokeOpacity={0.4} strokeWidth={1} />
          <line x1={203} y1={323} x2={211} y2={323} stroke={TEAL} strokeOpacity={0.3} strokeWidth={1} />
          <NodeLabel x={234} y={320} text="records" />
        </NodeGroup>

        {/* Schema table node C */}
        <NodeGroup delay={0.8} x={310} y={320}>
          <rect
            x={282}
            y={304}
            width={56}
            height={32}
            rx={3}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.5}
            strokeWidth={1}
          />
          {/* Toggle icon */}
          <rect x={291} y={317} width={10} height={5} rx={2.5} fill="none" stroke={TEAL} strokeOpacity={0.5} strokeWidth={1} />
          <circle cx={298} cy={319.5} r={1.5} fill={TEAL} fillOpacity={0.5} />
          <NodeLabel x={320} y={320} text="state" />
        </NodeGroup>

        {/* Horizontal connections in DATA tier */}
        <DrawPath
          d="M157 320 L197 320"
          delay={0.9}
          duration={0.3}
          strokeOpacity={0.3}
          dashed
        />
        <DrawPath
          d="M253 320 L282 320"
          delay={0.95}
          duration={0.3}
          strokeOpacity={0.3}
          dashed
        />

        {/* ════════════════════════════════════════
            TIER 3: LOGIC  y=210–260
        ════════════════════════════════════════ */}

        <DrawPath
          d="M50 205 L350 205"
          delay={1.0}
          duration={0.5}
          stroke={SURFACE}
          strokeOpacity={0.4}
          dashed
        />

        <TierLabel text="LOGIC" x={50} y={213} delay={1.1} />

        {/* Hexagon: validate (radius 30) */}
        <NodeGroup delay={1.2} x={105} y={235}>
          <path
            d={hexPath(105, 235, 30)}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.7}
            strokeWidth={1.5}
          />
          {/* Shield icon (centered at y=226) */}
          <path
            d="M105,221 L110,222 L110,227 Q110,230 105,232 Q100,230 100,227 L100,222 Z"
            fill="none"
            stroke={TEAL}
            strokeOpacity={0.55}
            strokeWidth={1}
          />
          <NodeLabel x={105} y={245} text="validate" />
        </NodeGroup>

        {/* Hexagon: enforce (radius 30) */}
        <NodeGroup delay={1.35} x={205} y={235}>
          <path
            d={hexPath(205, 235, 30)}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.7}
            strokeWidth={1.5}
          />
          {/* Lock icon (centered at y=226) */}
          <rect x={201} y={226} width={8} height={6} rx={1} fill="none" stroke={TEAL} strokeOpacity={0.55} strokeWidth={1} />
          <path d="M203,226 L203,223 Q203,221 205,221 Q207,221 207,223 L207,226" fill="none" stroke={TEAL} strokeOpacity={0.55} strokeWidth={1} />
          <NodeLabel x={205} y={245} text="enforce" />
        </NodeGroup>

        {/* Hexagon: compute (radius 30) */}
        <NodeGroup delay={1.5} x={305} y={235}>
          <path
            d={hexPath(305, 235, 30)}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.7}
            strokeWidth={1.5}
          />
          {/* Gear icon (centered at y=226 to match other hex icons) */}
          <circle cx={305} cy={226} r={4} fill="none" stroke={TEAL} strokeOpacity={0.55} strokeWidth={1} />
          <line x1={305} y1={221} x2={305} y2={222} stroke={TEAL} strokeOpacity={0.5} strokeWidth={1} />
          <line x1={305} y1={230} x2={305} y2={231} stroke={TEAL} strokeOpacity={0.5} strokeWidth={1} />
          <line x1={300} y1={226} x2={301} y2={226} stroke={TEAL} strokeOpacity={0.5} strokeWidth={1} />
          <line x1={309} y1={226} x2={310} y2={226} stroke={TEAL} strokeOpacity={0.5} strokeWidth={1} />
          <NodeLabel x={305} y={245} text="compute" />
        </NodeGroup>

        {/* Arrows between hexagons */}
        {/* validate right edge (135) → enforce left edge (175), arrowhead base at 169 */}
        <DrawPath d="M135 235 L169 235" delay={1.6} duration={0.3} strokeOpacity={0.4} />
        {/* enforce right edge (235) → compute left edge (275), arrowhead base at 269 */}
        <DrawPath d="M235 235 L269 235" delay={1.65} duration={0.3} strokeOpacity={0.4} />
        {/* Arrow heads — tip at hex left edge */}
        <motion.polygon
          points="169,231 175,235 169,239"
          fill={TEAL}
          fillOpacity={0.6}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.2 }}
        />
        <motion.polygon
          points="269,231 275,235 269,239"
          fill={TEAL}
          fillOpacity={0.6}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.75, duration: 0.2 }}
        />

        {/* Vertical paths: DATA → LOGIC (hex bottom at y=265) */}
        <DrawPath d="M125 304 C125 282, 105 270, 105 265" delay={1.3} duration={0.5} />
        <DrawPath d="M225 304 C225 282, 205 270, 205 265" delay={1.4} duration={0.5} />
        <DrawPath d="M310 304 C310 282, 305 270, 305 265" delay={1.5} duration={0.5} />

        {/* ════════════════════════════════════════
            TIER 2: WORKFLOW  y=125–175
        ════════════════════════════════════════ */}

        <DrawPath
          d="M50 120 L350 120"
          delay={1.7}
          duration={0.5}
          stroke={SURFACE}
          strokeOpacity={0.4}
          dashed
        />

        {/* Workflow node: draft */}
        <NodeGroup delay={1.9} x={100} y={150}>
          <rect
            x={64}
            y={137}
            width={72}
            height={26}
            rx={6}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.6}
            strokeWidth={1.5}
          />
          {/* Document icon */}
          <path d="M78,144 L78,156 L87,156 L87,147 L84,144 Z" fill="none" stroke={TEAL} strokeOpacity={0.55} strokeWidth={1} />
          <path d="M84,144 L84,147 L87,147" fill="none" stroke={TEAL} strokeOpacity={0.55} strokeWidth={0.8} />
          <NodeLabel x={109} y={150} text="draft" />
        </NodeGroup>

        {/* Workflow node: review */}
        <NodeGroup delay={2.05} x={200} y={150}>
          <rect
            x={164}
            y={137}
            width={72}
            height={26}
            rx={6}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.6}
            strokeWidth={1.5}
          />
          {/* Magnifying glass icon */}
          <circle cx={180} cy={148} r={3} fill="none" stroke={TEAL} strokeOpacity={0.55} strokeWidth={1} />
          <line x1={182} y1={150} x2={185} y2={153} stroke={TEAL} strokeOpacity={0.55} strokeWidth={1} />
          <NodeLabel x={209} y={150} text="review" />
        </NodeGroup>

        {/* Workflow node: approved */}
        <NodeGroup delay={2.2} x={305} y={150}>
          <rect
            x={266}
            y={137}
            width={78}
            height={26}
            rx={6}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.6}
            strokeWidth={1.5}
          />
          {/* Checkmark icon */}
          <polyline
            points="279,150 282,153 288,146"
            fill="none"
            stroke={TEAL}
            strokeOpacity={0.55}
            strokeWidth={1.2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <NodeLabel x={315} y={150} text="approved" />
        </NodeGroup>

        {/* Straight arrows between workflow nodes */}
        {/* draft right edge (136) → review left edge (164), line ends at arrowhead base */}
        <DrawPath d="M136 150 L158 150" delay={2.3} duration={0.3} strokeOpacity={0.5} />
        {/* review right edge (236) → approved left edge (266), line ends at arrowhead base */}
        <DrawPath d="M236 150 L260 150" delay={2.35} duration={0.3} strokeOpacity={0.5} />
        {/* Arrowhead: base at x=158, tip at x=164 (review left edge) */}
        <motion.polygon
          points="158,146 164,150 158,154"
          fill={TEAL}
          fillOpacity={0.7}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.2 }}
        />
        {/* Arrowhead: base at x=260, tip at x=266 (approved left edge) */}
        <motion.polygon
          points="260,146 266,150 260,154"
          fill={TEAL}
          fillOpacity={0.7}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.45, duration: 0.2 }}
        />

        {/* Vertical paths: LOGIC → WORKFLOW (hex top at y=205) */}
        <DrawPath d="M105 205 C105 185, 100 173, 100 163" delay={2.0} duration={0.5} />
        <DrawPath d="M205 205 C205 185, 200 173, 200 163" delay={2.1} duration={0.5} />
        <DrawPath d="M305 205 C305 185, 305 173, 305 163" delay={2.2} duration={0.5} />

        {/* ════════════════════════════════════════
            TIER 1: INTERFACE (top)  y=40–90
        ════════════════════════════════════════ */}

        <DrawPath
          d="M50 35 L350 35"
          delay={2.4}
          duration={0.5}
          stroke={SURFACE}
          strokeOpacity={0.4}
          dashed
        />

        {/* Interface node: dashboard */}
        <NodeGroup delay={2.6} x={130} y={62}>
          <rect
            x={84}
            y={52}
            width={92}
            height={22}
            rx={4}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.4}
            strokeWidth={1}
          />
          {/* Mini UI decoration dots */}
          <circle cx={98} cy={63} r={2} fill={TEAL} fillOpacity={0.55} />
          <circle cx={106} cy={63} r={2} fill={TEAL} fillOpacity={0.45} />
          <circle cx={114} cy={63} r={2} fill={TEAL} fillOpacity={0.35} />
          <NodeLabel x={143} y={63} text="dashboard" />
        </NodeGroup>

        {/* Interface node: api */}
        <NodeGroup delay={2.75} x={280} y={62}>
          <rect
            x={244}
            y={52}
            width={72}
            height={22}
            rx={4}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.4}
            strokeWidth={1}
          />
          {/* Angle bracket icon */}
          <polyline
            points="267,59 263,63 267,67"
            fill="none"
            stroke={TEAL}
            strokeOpacity={0.55}
            strokeWidth={1}
          />
          <polyline
            points="273,59 277,63 273,67"
            fill="none"
            stroke={TEAL}
            strokeOpacity={0.55}
            strokeWidth={1}
          />
          <NodeLabel x={289} y={63} text="api" />
        </NodeGroup>

        {/* Vertical paths: WORKFLOW → INTERFACE */}
        <DrawPath d="M100 137 C100 110, 130 85, 130 74" delay={2.7} duration={0.5} />
        <DrawPath d="M200 137 C200 110, 280 85, 280 74" delay={2.8} duration={0.5} />

        {/* ════════════════════════════════════════
            DATA FLOW PULSES (loop after build)
        ════════════════════════════════════════ */}

        {/* DATA → LOGIC pulses */}
        <BezierPulse path={PULSE_PATHS.schemaToValidate} delay={0} repeatDelay={4} />
        <BezierPulse path={PULSE_PATHS.recordsToEnforce} delay={1.3} repeatDelay={4} />
        <BezierPulse path={PULSE_PATHS.stateToCompute} delay={2.6} repeatDelay={4} />

        {/* LOGIC → WORKFLOW pulses */}
        <BezierPulse path={PULSE_PATHS.validateToDraft} delay={1.5} repeatDelay={4} />
        <BezierPulse path={PULSE_PATHS.enforceToReview} delay={2.8} repeatDelay={4} />
        <BezierPulse path={PULSE_PATHS.computeToApproved} delay={0.8} repeatDelay={4} />

        {/* WORKFLOW → INTERFACE pulses */}
        <BezierPulse path={PULSE_PATHS.draftToDashboard} delay={2.0} repeatDelay={5} />
        <BezierPulse path={PULSE_PATHS.reviewToApi} delay={3.5} repeatDelay={5} />
      </svg>
    </div>
  );
}
