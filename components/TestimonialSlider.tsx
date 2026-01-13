import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  quote: string;
  attribution: string;
  role: string;
  industry: string;
}

interface TestimonialSliderProps {
  items: Testimonial[];
}

export default function TestimonialSlider({ items }: TestimonialSliderProps) {
  return (
    <div className="relative">
      <div
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-4 scrollbar-hide"
        aria-label="Testimonials carousel"
        role="region"
      >
        {items.map((testimonial, index) => (
          <div
            key={index}
            className="flex-none snap-center w-full md:min-w-[420px] lg:min-w-[480px] first:ml-0 last:mr-0"
          >
            <TestimonialCard
              quote={testimonial.quote}
              attribution={testimonial.attribution}
              role={testimonial.role}
              industry={testimonial.industry}
            />
          </div>
        ))}
      </div>
      
      {/* Gradient fade hints */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-900 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-900 to-transparent" />
    </div>
  );
}
