import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4">Docksmith</h3>
            <p className="text-accent-muted text-sm">
              Systems and automation for operational control.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/work" className="text-accent-muted hover:text-foreground text-sm transition-colors">
                Work
              </Link>
              <Link href="/process" className="text-accent-muted hover:text-foreground text-sm transition-colors">
                Process
              </Link>
              <Link href="/services" className="text-accent-muted hover:text-foreground text-sm transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-accent-muted hover:text-foreground text-sm transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-accent-muted hover:text-foreground text-sm transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get in touch</h4>
            <Link
              href="/contact"
              className="inline-block bg-accent-primary text-foreground px-6 py-2 rounded-md hover:brightness-90 transition-all text-sm"
            >
              Talk to us
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-accent-muted text-sm">
          © {new Date().getFullYear()} Docksmith. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
