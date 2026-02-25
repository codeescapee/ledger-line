import { Zap, Workflow } from "lucide-react";

interface TagPillsProps {
  outcomes?: string[];
  capabilities?: string[];
  dark?: boolean;
}

export default function TagPills({ outcomes, capabilities, dark = false }: TagPillsProps) {
  const labelColor = dark ? "text-text-on-dark-muted/60" : "text-slate-500";
  const iconColor = dark ? "text-text-on-dark-muted/60" : "text-slate-500";
  const outcomePill = dark
    ? "bg-white/10 text-white border border-white/20"
    : "bg-slate-900 text-white";
  const capPill = dark
    ? "bg-accent-primary/15 text-accent-primary border border-accent-primary/30"
    : "bg-[#E5ECEF] text-foreground";

  return (
    <div className="space-y-5">
      {outcomes && outcomes.length > 0 && (
        <div>
          <div className="mb-3 flex items-center gap-1.5">
            <Zap className={`w-4 h-4 ${iconColor}`} />
            <span className={`text-xs font-semibold tracking-[0.2em] uppercase ${labelColor}`}>
              Outcomes
            </span>
          </div>
          <div className="pl-5 flex flex-wrap gap-1.5">
            {outcomes.map((outcome, index) => (
              <span
                key={index}
                className={`${outcomePill} text-sm px-2.5 py-1 rounded-full font-medium inline-block`}
              >
                {outcome}
              </span>
            ))}
          </div>
        </div>
      )}

      {capabilities && capabilities.length > 0 && (
        <div>
          <div className="mb-3 flex items-center gap-1.5">
            <Workflow className={`w-4 h-4 ${iconColor}`} />
            <span className={`text-xs font-semibold tracking-[0.2em] uppercase ${labelColor}`}>
              Capabilities
            </span>
          </div>
          <div className="pl-5 flex flex-wrap gap-1.5">
            {capabilities.map((capability, index) => (
              <span
                key={index}
                className={`${capPill} text-sm px-2.5 py-1 rounded-full font-medium inline-block`}
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
