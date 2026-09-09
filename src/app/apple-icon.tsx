import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#191b17",
        borderRadius: "22%",
      }}
    >
      <div
        style={{
          position: "relative",
          width: 90,
          height: 90,
          display: "flex",
        }}
      >
        {[0, 45, 90, 135].map((deg) => (
          <div
            key={deg}
            style={{
              position: "absolute",
              left: 41,
              top: 7,
              width: 9,
              height: 76,
              borderRadius: 4,
              background: "#b5c994",
              transform: `rotate(${deg}deg)`,
            }}
          />
        ))}
      </div>
    </div>,
    { ...size },
  );
}
