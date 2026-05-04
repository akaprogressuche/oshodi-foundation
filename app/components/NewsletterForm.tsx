"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Subscribe failed.");
      }
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Couldn't subscribe right now. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="text-sm">
        <p className="text-white">
          <span className="text-accent">✓</span> You&rsquo;re in. We&rsquo;ll
          keep you posted.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-md"
      noValidate
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "submitting"}
        className="flex-1 px-4 py-3 rounded-md bg-white/5 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={status === "submitting" || !email}
        className="px-6 py-3 rounded-md bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity whitespace-nowrap"
      >
        {status === "submitting" ? "Subscribing…" : "Subscribe"}
      </button>
      {error && (
        <p className="text-xs text-accent sm:basis-full" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
