import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <section className="bg-background text-foreground min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-3xl px-6 lg:px-10 py-20 md:py-32 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
          404
        </p>
        <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-balance">
          We can&rsquo;t find that page.
        </h1>
        <p className="mt-8 mx-auto max-w-xl text-lg text-muted-foreground leading-relaxed">
          The page you&rsquo;re looking for may have moved, or the link might
          have a typo. From here you can head back home, or jump to the work
          we&rsquo;re doing.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
          <Link
            href="/get-involved"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
}
