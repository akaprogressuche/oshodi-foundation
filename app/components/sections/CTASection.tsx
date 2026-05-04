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

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 py-24 md:py-32 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-medium">
            Partner with us
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-balance">
            Let&rsquo;s get to work, together.
          </h2>
        </Reveal>

        <HighlightedText
          as="p"
          className="mt-10 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-foreground"
        >
          Every partnership strengthens our ability to serve families today while investing in the leaders of tomorrow. Whether you&apos;re here to collaborate, support a program, or learn more — we&apos;d welcome the conversation.
        </HighlightedText>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
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
              info@theoshodifoundation.org
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
