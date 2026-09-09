import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";

export const alt = `${portfolio.name} — ${portfolio.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function Asterisk({ size: s }: { size: number }) {
  return (
    <div
      style={{
        position: "relative",
        width: s,
        height: s,
        display: "flex",
      }}
    >
      {[0, 45, 90, 135].map((deg) => (
        <div
          key={deg}
          style={{
            position: "absolute",
            left: s / 2 - s * 0.042,
            top: s * 0.08,
            width: s * 0.084,
            height: s * 0.84,
            borderRadius: s * 0.042,
            background: "#b5c994",
            transform: `rotate(${deg}deg)`,
          }}
        />
      ))}
    </div>
  );
}

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#191b17",
        color: "#eeeee5",
        padding: "72px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Asterisk size={32} />
        <span style={{ fontSize: "26px", color: "#a5aa9c" }}>
          {portfolio.name.toLowerCase()}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "36px" }}>
        <div style={{ width: 8, height: 128, background: "#b5c994" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div style={{ fontSize: "88px", fontWeight: 700, lineHeight: 0.95 }}>
            {portfolio.name}
          </div>
          <div style={{ fontSize: "34px", color: "#a5aa9c" }}>
            {portfolio.role}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "24px",
          borderTop: "1px solid #373c31",
          paddingTop: "28px",
          fontSize: "20px",
          color: "#a5aa9c",
        }}
      >
        <span>{portfolio.hero.eyebrow}</span>
        <span style={{ color: "#eeeee5" }}>{portfolio.email}</span>
      </div>
    </div>,
    { ...size },
  );
}
