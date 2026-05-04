import Link from "next/link";
import Image from "next/image";
import { Reveal } from "../Reveal";
import { HighlightedText } from "../HighlightedText";
import { photos } from "../../data/photos";

export function CTASection() {
  return (
    <section className="relative bg-background text-foreground overflow-hidden">
      {/* Faint full-bleed photo backdrop */}
      <div className="absolute inset-0 opacity-[0.06]">
        <Image
          src={photos.contact}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: eyebrow + title */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
                Partner with us
              </p>
            </Reveal>
            <HighlightedText
              as="h2"
              className="mt-8 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-balance"
            >
              Let&rsquo;s get to work, together.
            </HighlightedText>
          </div>

          {/* Right: body + CTAs */}
          <div className="lg:col-span-5 lg:pt-3 space-y-8">
            <Reveal delay={0.15}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Every partnership strengthens our ability to serve families
                today while investing in the leaders of tomorrow. Whether
                you&rsquo;re here to collaborate, support a program, or learn
                more — we&rsquo;d welcome the conversation.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  Contact the Foundation
                </Link>
                <a
                  href="mailto:info@theoshodifoundation.org"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
