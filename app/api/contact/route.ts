import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  organization?: string;
  message?: string;
};

const RECIPIENT = process.env.CONTACT_EMAIL || "akaprogressuche@gmail.com";

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, organization, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Dev fallback: log instead of sending so the form is testable without keys.
    // eslint-disable-next-line no-console
    console.warn("[contact] RESEND_API_KEY not set — logging:", body);
    return NextResponse.json({ ok: true, mode: "dev-log" });
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "Oshodi Foundation <onboarding@resend.dev>",
      to: RECIPIENT,
      replyTo: email,
      subject: `[Oshodi] Contact from ${name}${organization ? ` — ${organization}` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        organization ? `Organization: ${organization}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[contact] Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send. Please try again or email us directly." },
      { status: 500 },
    );
  }
}
