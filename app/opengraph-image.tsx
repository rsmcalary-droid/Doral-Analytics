import { ImageResponse } from "next/og";

// Branded social-share card (WhatsApp / iMessage / Slack / Twitter previews).
export const alt = "Doral Systems — Innovating Business Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#1F3A5F",
          padding: "90px",
        }}
      >
        <div
          style={{
            fontSize: "40px",
            color: "#AEBED1",
            letterSpacing: "8px",
            marginBottom: "30px",
          }}
        >
          DORAL SYSTEMS
        </div>
        <div style={{ fontSize: "78px", color: "white", lineHeight: 1.08 }}>
          Bespoke technical solutions,
        </div>
        <div style={{ fontSize: "78px", color: "white", lineHeight: 1.08 }}>
          built around your business.
        </div>
        <div style={{ fontSize: "34px", color: "#AEBED1", marginTop: "46px" }}>
          Innovating Business Solutions · Cheltenham &amp; London
        </div>
      </div>
    ),
    size,
  );
}
