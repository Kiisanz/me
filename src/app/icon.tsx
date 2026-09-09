import { ImageResponse } from "next/og";

export const size = { width: 256, height: 256 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#191b17",
        borderRadius: "24%",
      }}
    >
      <div
        style={{
          position: "relative",
          width: 128,
          height: 128,
          display: "flex",
        }}
      >
        {[0, 45, 90, 135].map((deg) => (
          <div
            key={deg}
            style={{
              position: "absolute",
              left: 58,
              top: 10,
              width: 12,
              height: 108,
              borderRadius: 6,
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
