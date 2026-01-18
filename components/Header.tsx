'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-transparent transition-all duration-300">
            <div className="px-6 py-5 flex items-center justify-between md:justify-center relative">
                {/* Logo - positioned left on desktop, centered layout on mobile */}
                <Link href="/" className="font-serif text-xl md:text-2xl tracking-tighter text-foreground hover:opacity-80 transition-opacity md:absolute md:left-6">
                    Boling Foundation
                </Link>

                {/* Centered Nav - Desktop */}
                <nav className="hidden md:flex items-center gap-10">
                    <Link href="/gifts" className="text-sm font-medium uppercase tracking-widest text-muted hover:text-foreground transition-colors">
                        Gifts
                    </Link>
                    <Link href="/process" className="text-sm font-medium uppercase tracking-widest text-muted hover:text-foreground transition-colors">
                        Process
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                    aria-label="Toggle menu"
                >
                    <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                    <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <nav className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 py-4 flex flex-col gap-4 border-t border-muted/20">
                    <Link
                        href="/gifts"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm font-medium uppercase tracking-widest text-muted hover:text-foreground transition-colors"
                    >
                        Gifts
                    </Link>
                    <Link
                        href="/process"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm font-medium uppercase tracking-widest text-muted hover:text-foreground transition-colors"
                    >
                        Process
                    </Link>
                </div>
            </nav>
        </header>
    );
}
