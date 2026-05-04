"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const intents = [
  "Volunteer my time",
  "Make a donation",
  "Apply for a scholarship",
  "Partner / collaborate",
  "Something else",
];

export function VolunteerForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFormError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      intent: formData.get("intent"),
      availability: formData.get("availability"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setFormError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-accent/40 bg-accent/5 p-8">
        <h3 className="text-2xl font-semibold tracking-tight">
          Thank you for stepping up.
        </h3>
        <p className="mt-3 text-muted-foreground">
          We&rsquo;ve received your details and will be in touch soon to
          welcome you in.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-accent hover:opacity-80 transition-opacity"
        >
          Submit another response
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Phone (optional)" name="phone" type="tel" />
        <div>
          <label
            htmlFor="intent"
            className="block text-xs uppercase tracking-widest text-muted-foreground font-medium"
          >
            How would you like to help?
          </label>
          <select
            id="intent"
            name="intent"
            required
            defaultValue=""
            className="mt-2 block w-full rounded-md border border-border bg-background px-4 py-3 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
          >
            <option value="" disabled>
              Choose one…
            </option>
            {intents.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>
      </div>

      <Field
        label="Availability (optional — e.g. weekends, evenings)"
        name="availability"
      />

      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-widest text-muted-foreground font-medium"
        >
          Tell us a bit more (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-2 block w-full rounded-md border border-border bg-background px-4 py-3 text-base text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
          placeholder="Skills, interests, anything else you'd like us to know…"
        />
      </div>

      {formError && <p className="text-sm text-accent">{formError}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity"
      >
        {status === "submitting" ? "Sending…" : "Count Me In"}
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
