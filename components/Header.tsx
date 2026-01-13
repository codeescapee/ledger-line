"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

// Centralized logo source for easy future updates
const LOGO_SRC = "/brand/ledgerline-logo-horizontal-bg.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src={LOGO_SRC}
            alt="LedgerLine"
            width={240}
            height={60}
            className="h-10 w-auto lg:h-12"
            priority
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/work" className="text-foreground hover:text-accent-muted transition-colors">
            Work
          </Link>
          <Link href="/process" className="text-foreground hover:text-accent-muted transition-colors">
            Process
          </Link>
          <Link href="/services" className="text-foreground hover:text-accent-muted transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-foreground hover:text-accent-muted transition-colors">
            About
          </Link>
          <Link
            href="/contact"
            className="bg-accent-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all"
          >
            Talk to us
          </Link>
        </nav>
      </div>
    </header>
  );
}
