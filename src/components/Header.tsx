"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F7FA]/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/text-logo.svg" alt="Trustynx" width={140} height={37} priority />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm text-muted hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#features" className="text-sm text-muted hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#trust" className="text-sm text-muted hover:text-foreground transition-colors">
            Trust
          </a>
          <a href="#contact" className="text-sm text-muted hover:text-foreground transition-colors">
            Contact
          </a>
          <a
            href="#join"
            className="text-sm font-medium bg-accent text-white px-5 py-2 rounded-lg hover:bg-accent/90 transition-colors"
          >
            Join as a Doctor
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-muted hover:text-foreground"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#F5F7FA] border-t border-border px-6 py-4 space-y-3">
          <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="block text-sm text-muted hover:text-foreground">
            How It Works
          </a>
          <a href="#features" onClick={() => setMenuOpen(false)} className="block text-sm text-muted hover:text-foreground">
            Features
          </a>
          <a href="#trust" onClick={() => setMenuOpen(false)} className="block text-sm text-muted hover:text-foreground">
            Trust
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-sm text-muted hover:text-foreground">
            Contact
          </a>
          <a
            href="#join"
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-medium bg-accent text-white px-5 py-2 rounded-lg text-center hover:bg-accent/90"
          >
            Join as a Doctor
          </a>
        </div>
      )}
    </header>
  );
}
