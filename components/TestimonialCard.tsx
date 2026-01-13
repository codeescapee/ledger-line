interface TestimonialCardProps {
  quote: string;
  attribution: string;
  role: string;
  industry: string;
}

export default function TestimonialCard({ quote, attribution, role, industry }: TestimonialCardProps) {
  return (
    <div className="border border-slate-700 rounded-md p-10 bg-slate-800/50">
      <p className="text-lg text-slate-100 leading-relaxed mb-6 italic">
        "{quote}"
      </p>
      <div className="border-t border-slate-700 pt-4">
        <p className="text-sm font-medium text-white">{attribution}</p>
        <p className="text-sm text-slate-400">{role}, {industry}</p>
      </div>
    </div>
  );
}
