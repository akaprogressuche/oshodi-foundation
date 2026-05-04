import { NextResponse } from "next/server";
import { Resend } from "resend";

type Payload = { email?: string; firstName?: string };

const RECIPIENT = process.env.CONTACT_EMAIL || "akaprogressuche@gmail.com";

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = body.email?.trim();
  const firstName = body.firstName?.trim();

  if (!email || !email.includes("@") || email.length > 320) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // eslint-disable-next-line no-console
    console.warn("[newsletter] RESEND_API_KEY not set — logging:", body);
    return NextResponse.json({ ok: true, mode: "dev-log" });
  }

  const resend = new Resend(apiKey);
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  // Best-effort: add to the Resend audience if configured
  if (audienceId) {
    try {
      await resend.contacts.create({
        email,
        firstName,
        audienceId,
        unsubscribed: false,
      });
    } catch (err) {
      // Duplicate-email errors are expected; only log others
      // eslint-disable-next-line no-console
      console.warn("[newsletter] contacts.create:", err);
    }
  }

  // Always notify admin so signups aren't missed even if audience isn't configured
  try {
    await resend.emails.send({
      from: "Oshodi Foundation <onboarding@resend.dev>",
      to: RECIPIENT,
      subject: `[Oshodi] Newsletter signup: ${email}`,
      text: [
        `Email: ${email}`,
        firstName ? `First name: ${firstName}` : null,
        audienceId ? "Added to Resend audience." : "(no audience configured)",
      ]
        .filter(Boolean)
        .join("\n"),
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[newsletter] notify admin failed:", err);
    return NextResponse.json(
      { error: "Couldn't subscribe right now. Please try again shortly." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
