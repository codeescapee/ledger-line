interface SectionProps {
  dark?: boolean;
  compact?: boolean;
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export default function Section({
  dark = false,
  compact = false,
  className = "",
  children,
  id,
}: SectionProps) {
  const padding = compact
    ? "py-16 md:py-20"
    : "py-20 md:py-28 lg:py-32";

  const bg = dark ? "bg-gradient-dark" : "";

  return (
    <section id={id} className={`${padding} px-6 ${bg} ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
