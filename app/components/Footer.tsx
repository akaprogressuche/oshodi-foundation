import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-inverted-bg text-inverted-fg">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-bold tracking-tight text-lg leading-tight">
            OSHODI<br />
            <span className="text-accent">FAMILY</span><br />
            FOUNDATION
          </p>
          <p className="mt-6 text-sm text-white/60 max-w-xs">
            Empowering families. Nourishing communities. Building futures.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-white/40 font-medium">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/#about" className="hover:text-accent transition-colors">About</Link></li>
            <li><Link href="/#mission" className="hover:text-accent transition-colors">Mission &amp; Vision</Link></li>
            <li><Link href="/#initiatives" className="hover:text-accent transition-colors">Initiatives</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-white/40 font-medium">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="mailto:info@theoshodifoundation.org" className="hover:text-accent transition-colors">
                info@theoshodifoundation.org
              </a>
            </li>
            <li>
              <a href="tel:+12147648258" className="hover:text-accent transition-colors">
                +1 (214) 764-8258
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/40">
          <p>© {new Date().getFullYear()} The Oshodi Family Foundation. All rights reserved.</p>
          <p>theoshodifoundation.org</p>
        </div>
      </div>
    </footer>
  );
}
