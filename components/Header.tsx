
import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full px-6 py-5 flex justify-between items-center bg-background/80 backdrop-blur-md border-b border-transparent transition-all duration-300">
            <Link href="/" className="font-serif text-2xl tracking-tighter text-foreground hover:opacity-80 transition-opacity">
                Boling Foundation
            </Link>
            <nav className="hidden md:flex items-center gap-10">
                <Link href="/gifts" className="text-sm font-medium uppercase tracking-widest text-muted hover:text-foreground transition-colors">
                    Gifts
                </Link>
                <Link href="/process" className="text-sm font-medium uppercase tracking-widest text-muted hover:text-foreground transition-colors">
                    Process
                </Link>
            </nav>
            <div className="md:hidden">
                {/* Mobile Menu Placeholder - keeping simple for now */}
            </div>
        </header>
    );
}
