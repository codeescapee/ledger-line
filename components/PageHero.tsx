import Image from "next/image";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function PageHero({ 
  eyebrow,
  title, 
  subtitle,
  imageSrc,
  imageAlt = "System architecture diagram"
}: PageHeroProps) {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-100/40 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            {eyebrow && (
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-4 block">
                {eyebrow}
              </span>
            )}
            <h1 className="text-5xl font-semibold text-foreground mb-6 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-accent-muted leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* Visual with motion */}
          <div className="hidden md:block">
            <div className="relative group">
              {imageSrc ? (
                <div className="relative">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={500}
                    height={375}
                    className="w-full h-auto opacity-90"
                  />
                </div>
              ) : (
                /* Placeholder panel */
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-radial from-slate-100/40 via-transparent to-transparent blur-xl" />
                  <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-xl border border-slate-200 shadow-md p-16 h-80 flex items-center justify-center group-hover:shadow-lg transition-shadow duration-500">
                    <div className="w-32 h-32 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16 bg-slate-200 rounded-md" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
}
