"use client";

import { useState } from "react";
import { SuccessModal } from "./SuccessModal";

type Status = "idle" | "submitting" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFormError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      organization: formData.get("organization"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong.");
      }

      form.reset();
      setStatus("idle");
      setShowSuccess(true);
    } catch (err) {
      setStatus("error");
      setFormError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <>
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

        {formError && <p className="text-sm text-accent">{formError}</p>}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="lift-btn justify-center px-8 py-4 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
        </button>
      </form>

      <SuccessModal
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Thank you."
        message="Your message reached us. We'll be in touch shortly."
      />
    </>
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
