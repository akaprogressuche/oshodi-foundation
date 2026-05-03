"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFormError(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      organization: formData.get("organization"),
      message: formData.get("message"),
    };

    try {
      // TODO: wire to email service (Resend or similar) via /api/contact route.
      // For now, simulate success so the UI is testable end-to-end.
      await new Promise((r) => setTimeout(r, 600));
      // eslint-disable-next-line no-console
      console.log("[ContactForm] submission (not yet wired to email):", payload);
      setStatus("success");
      event.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setFormError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-accent/40 bg-accent/5 p-8">
        <h3 className="text-2xl font-semibold tracking-tight">Thank you.</h3>
        <p className="mt-3 text-muted-foreground">
          Your message reached us. We&rsquo;ll be in touch shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-accent hover:opacity-80 transition-opacity"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Your name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>

      <Field label="Organization (optional)" name="organization" />

      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-widest text-muted-foreground font-medium"
        >
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-2 block w-full rounded-md border border-border bg-background px-4 py-3 text-base text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
          placeholder="Tell us a bit about why you're reaching out…"
        />
      </div>

      {formError && (
        <p className="text-sm text-accent">{formError}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-widest text-muted-foreground font-medium"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 block w-full rounded-md border border-border bg-background px-4 py-3 text-base text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
      />
    </div>
  );
}
