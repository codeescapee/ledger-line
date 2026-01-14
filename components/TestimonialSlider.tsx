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
    <div className="relative max-w-5xl mx-auto">
      <div
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 pb-4 scrollbar-hide px-2"
        aria-label="Testimonials carousel"
        role="region"
      >
        {items.map((testimonial, index) => (
          <div
            key={index}
            className="flex-none snap-center w-full md:w-[500px] lg:w-[600px] first:ml-0 last:mr-0"
          >
            <div className="max-w-3xl mx-auto">
              <TestimonialCard
                quote={testimonial.quote}
                attribution={testimonial.attribution}
                role={testimonial.role}
                industry={testimonial.industry}
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Subtle gradient fade hints */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-900 to-transparent opacity-50" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-900 to-transparent opacity-50" />
    </div>
  );
}
