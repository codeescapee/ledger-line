import { Zap, Workflow } from "lucide-react";

interface TagPillsProps {
  outcomes?: string[];
  capabilities?: string[];
}

export default function TagPills({ outcomes, capabilities }: TagPillsProps) {
  return (
    <div className="space-y-5">
      {outcomes && outcomes.length > 0 && (
        <div>
          <div className="mb-3 flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
              Outcomes
            </span>
          </div>
          <div className="pl-5 flex flex-wrap gap-2">
            {outcomes.map((outcome, index) => (
              <span
                key={index}
                className="bg-slate-900 text-white text-sm px-3 py-1.5 rounded-full font-medium inline-block"
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
            <Workflow className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
              Capabilities
            </span>
          </div>
          <div className="pl-5 flex flex-wrap gap-2">
            {capabilities.map((capability, index) => (
              <span
                key={index}
                className="bg-[#E5ECEF] text-foreground text-sm px-3 py-1.5 rounded-full font-medium inline-block"
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
