import Link from "next/link";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Mission", href: "/#mission" },
  { label: "Initiatives", href: "/#initiatives" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2 font-bold tracking-tight">
          <span className="text-foreground">OSHODI</span>
          <span className="text-accent">FAMILY</span>
          <span className="text-foreground">FOUNDATION</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Get Involved
        </Link>
      </div>
    </header>
  );
}
