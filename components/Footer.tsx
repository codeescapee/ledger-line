import Link from "next/link";
import Image from "next/image";

const LOGO_SRC = "/brand/docksmith-logo-square.png";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-border-dark">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src={LOGO_SRC}
                alt="Docksmith"
                width={40}
                height={40}
                className="h-9 w-9"
              />
              <span className="text-white font-semibold text-lg">
                Docksmith
              </span>
            </Link>
            <p className="text-text-on-dark-muted text-sm leading-relaxed mb-6">
              Product engineering for complex systems. Bubble development, AI
              agents, and full-stack migrations.
            </p>
            <a
              href="https://www.linkedin.com/in/jacob-singer-nyc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text-on-dark-muted hover:text-white text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/work", label: "Work" },
                { href: "/process", label: "Process" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text-on-dark-muted hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="/services"
                className="text-text-on-dark-muted hover:text-white text-sm transition-colors"
              >
                Bubble Development
              </Link>
              <Link
                href="/services"
                className="text-text-on-dark-muted hover:text-white text-sm transition-colors"
              >
                AI Agent Systems
              </Link>
              <Link
                href="/services"
                className="text-text-on-dark-muted hover:text-white text-sm transition-colors"
              >
                Migration & Modernization
              </Link>
              <Link
                href="/services"
                className="text-text-on-dark-muted hover:text-white text-sm transition-colors"
              >
                Backend Architecture
              </Link>
            </nav>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Get Started
            </h4>
            <p className="text-text-on-dark-muted text-sm mb-6 leading-relaxed">
              Have a project in mind? We&apos;d love to hear about it.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent-primary text-white px-6 py-3 rounded-md hover:bg-accent-hover transition-all text-sm font-medium"
            >
              Send us a message
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-dark text-center text-text-on-dark-muted text-sm">
          © {new Date().getFullYear()} Docksmith. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
