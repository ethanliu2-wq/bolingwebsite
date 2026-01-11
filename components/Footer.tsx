
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-border bg-white/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left space-y-2">
          <h3 className="font-serif text-lg tracking-tight text-foreground">Boling Foundation</h3>
          <p className="text-sm text-muted">Est. 2025</p>
        </div>

        <nav className="flex gap-8 text-sm text-muted">
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms & Conditions
          </Link>
          <a href="mailto:info@bolingfoundation.org" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <div className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Boling Foundation
        </div>
      </div>
    </footer>
  );
}
