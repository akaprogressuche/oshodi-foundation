import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost } from "../../data/news";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: post.image.startsWith("http")
        ? [post.image]
        : [`https://www.theoshodifoundation.org${post.image}`],
    },
  };
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    image: [post.image.startsWith("http") ? post.image : `https://www.theoshodifoundation.org${post.image}`],
    datePublished: post.date,
    description: post.excerpt,
    publisher: {
      "@type": "NGO",
      name: "Oshodi Family Foundation",
    },
  };

  return (
    <>
      <article className="bg-background text-foreground">
        {/* Hero */}
        <header className="relative bg-inverted-bg text-inverted-fg overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <Image
              src={post.image}
              alt=""
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />
          </div>
          <div className="relative mx-auto max-w-4xl px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-24">
            <Link
              href="/news"
              className="text-xs uppercase tracking-[0.3em] text-white/70 hover:text-accent transition-colors"
            >
              ← All news
            </Link>
            <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-widest">
              <span className="text-accent font-semibold">{post.category}</span>
              <span className="text-white/40">·</span>
              <time className="text-white/70" dateTime={post.date}>
                {dateFormatter.format(new Date(post.date))}
              </time>
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] max-w-3xl text-balance">
              {post.title}
            </h1>
          </div>
        </header>

        {/* Hero image */}
        <div className="bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 -mt-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-xl">
              <Image
                src={post.image}
                alt={post.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="bg-background text-foreground">
          <div className="mx-auto max-w-3xl px-6 lg:px-10 py-16 md:py-20">
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-foreground">
              {post.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-16 border-t border-border pt-10">
              <p className="text-sm text-muted-foreground">
                Want to support the work?{" "}
                <Link href="/get-involved" className="text-accent hover:underline">
                  Get involved
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
