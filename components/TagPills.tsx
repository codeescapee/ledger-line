import { Zap, Workflow, Wrench } from "lucide-react";

interface TagPillsProps {
  outcomes?: string[];
  capabilities?: string[];
  tools?: string[];
}

export default function TagPills({ outcomes, capabilities, tools }: TagPillsProps) {
  return (
    <div className="space-y-4">
      {outcomes && outcomes.length > 0 && (
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-2 flex items-center gap-1.5">
            <Zap className="w-4 h-4" />
            Outcomes
          </span>
          <div className="flex flex-wrap gap-2">
            {outcomes.map((outcome, index) => (
              <span
                key={index}
                className="bg-slate-900 text-white text-sm px-3 py-1.5 rounded-full font-medium"
              >
                {outcome}
              </span>
            ))}
          </div>
        </div>
      )}

      {capabilities && capabilities.length > 0 && (
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-2 flex items-center gap-1.5">
            <Workflow className="w-4 h-4" />
            Capabilities
          </span>
          <div className="flex flex-wrap gap-2">
            {capabilities.map((capability, index) => (
              <span
                key={index}
                className="bg-slate-100 text-slate-800 text-sm px-3 py-1.5 rounded-full font-medium"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
      )}

      {tools && tools.length > 0 && (
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-2 flex items-center gap-1.5">
            <Wrench className="w-4 h-4" />
            Tools
          </span>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="border border-slate-200 text-slate-700 bg-white text-sm px-3 py-1.5 rounded-full font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
