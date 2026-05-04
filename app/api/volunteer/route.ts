import { NextResponse } from "next/server";
import { Resend } from "resend";

type VolunteerPayload = {
  name?: string;
  email?: string;
  phone?: string;
  intent?: string;
  availability?: string;
  message?: string;
};

const RECIPIENT = process.env.CONTACT_EMAIL || "akaprogressuche@gmail.com";

export async function POST(request: Request) {
  let body: VolunteerPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, phone, intent, availability, message } = body;

  if (!name?.trim() || !email?.trim() || !intent?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and how you'd like to help are required." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // eslint-disable-next-line no-console
    console.warn("[volunteer] RESEND_API_KEY not set — logging:", body);
    return NextResponse.json({ ok: true, mode: "dev-log" });
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "Oshodi Foundation <onboarding@resend.dev>",
      to: RECIPIENT,
      replyTo: email,
      subject: `[Oshodi] ${intent} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        `How they want to help: ${intent}`,
        availability ? `Availability: ${availability}` : null,
        "",
        message ?? "(no message)",
      ]
        .filter(Boolean)
        .join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[volunteer] Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send. Please try again or email us directly." },
      { status: 500 },
    );
  }
}
