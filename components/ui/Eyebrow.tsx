interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span
      className={`inline-block text-accent-primary text-lg font-mono font-bold uppercase tracking-widest ${className}`}
    >
      {children}
    </span>
  );
}
