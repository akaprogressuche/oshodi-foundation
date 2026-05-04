import Link from "next/link";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="bg-inverted-bg text-inverted-fg">
      {/* Top: newsletter band */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start md:items-center">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              Stay Informed
            </p>
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight leading-tight text-balance">
              Updates from the Foundation, straight to your inbox.
            </h3>
          </div>
          <div className="md:col-span-7 md:pl-8 md:border-l md:border-white/10">
            <NewsletterForm />
            <p className="mt-3 text-xs text-white/50 max-w-md">
              Occasional updates on programs, beneficiary stories, and ways to
              help. Unsubscribe anytime. We respect your{" "}
              <Link href="/privacy" className="underline hover:text-white">
                privacy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Middle: nav + contact */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
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
            <li>
              <Link href="/#about" className="hover:text-accent transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/#initiatives" className="hover:text-accent transition-colors">
                Initiatives
              </Link>
            </li>
            <li>
              <Link href="/get-involved" className="hover:text-accent transition-colors">
                Get Involved
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-white/40 font-medium">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="mailto:info@theoshodifoundation.org"
                className="hover:text-accent transition-colors break-words"
              >
                info@theoshodifoundation.org
              </a>
            </li>
            <li>
              <a
                href="tel:+12147648258"
                className="hover:text-accent transition-colors"
              >
                +1 (214) 764-8258
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom: copyright + legal */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} The Oshodi Family Foundation. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <span>theoshodifoundation.org</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
