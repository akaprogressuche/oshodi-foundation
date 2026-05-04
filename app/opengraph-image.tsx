import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Oshodi Family Foundation — Empowering Families. Nourishing Communities. Building Futures.";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          color: "#f5f5f5",
          padding: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top: brand + eyebrow */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 24,
              letterSpacing: 8,
              color: "#e11d48",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            The Oshodi Family Foundation
          </div>
        </div>

        {/* Middle: headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            fontSize: 88,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -3,
          }}
        >
          <div>Empowering families.</div>
          <div>Nourishing communities.</div>
          <div style={{ color: "#e11d48" }}>Building futures.</div>
        </div>

        {/* Bottom: URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(245,245,245,0.6)",
          }}
        >
          <div>theoshodifoundation.org</div>
          <div style={{ color: "#e11d48" }}>●</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
