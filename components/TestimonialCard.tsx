interface TestimonialCardProps {
  quote: string;
  attribution: string;
  role: string;
  industry: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .join("")
    .toUpperCase();
}

export default function TestimonialCard({
  quote,
  attribution,
  role,
  industry,
}: TestimonialCardProps) {
  const initials = getInitials(attribution);

  return (
    <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-6 md:p-8 flex flex-col h-full">
      {/* Quote */}
      <blockquote className="text-base md:text-lg text-white/90 leading-relaxed mb-6 flex-1 font-light">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Attribution row */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
        <div className="w-10 h-10 rounded-full bg-accent-primary/20 border border-accent-primary/30 flex items-center justify-center flex-shrink-0">
          <span className="text-accent-primary font-semibold text-sm">
            {initials}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{attribution}</p>
          <p className="text-xs text-slate-400">
            {role}, {industry}
          </p>
        </div>
      </div>
    </div>
  );
}
