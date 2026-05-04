import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "../data/news";

export const metadata: Metadata = {
  title: "News",
  description:
    "Updates from the Oshodi Family Foundation — program milestones, beneficiary stories, and announcements.",
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function NewsPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Hero */}
      <section className="bg-inverted-bg text-inverted-fg">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            News &amp; Updates
          </p>
          <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-3xl text-balance">
            What&rsquo;s happening at the Foundation.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80">
            Program milestones, beneficiary stories, and announcements —
            straight from the work.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="bg-background text-foreground border-t border-border">
          <Link
            href={`/news/${featured.slug}`}
            className="block group mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden rounded-lg">
                <Image
                  src={featured.image}
                  alt={featured.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="lg:col-span-5">
                <PostMeta date={featured.date} category={featured.category} />
                <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-balance group-hover:text-accent transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center text-sm font-medium text-accent">
                  Read the story →
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Rest of the posts */}
      {rest.length > 0 && (
        <section className="bg-background text-foreground border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/news/${post.slug}`}
                  className="group block"
                >
                  <article>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted">
                      <Image
                        src={post.image}
                        alt={post.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="mt-5">
                      <PostMeta date={post.date} category={post.category} />
                      <h3 className="mt-3 text-xl md:text-2xl font-semibold tracking-tight leading-tight group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function PostMeta({ date, category }: { date: string; category: string }) {
  return (
    <div className="flex items-center gap-3 text-xs uppercase tracking-widest">
      <span className="text-accent font-semibold">{category}</span>
      <span className="text-muted-foreground">·</span>
      <time className="text-muted-foreground" dateTime={date}>
        {dateFormatter.format(new Date(date))}
      </time>
    </div>
  );
}
