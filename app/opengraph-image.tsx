import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Joshua Moe — Creative Director";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#080808",
          color: "#F4F4F2",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#A3A3A3",
          }}
        >
          <span>JM</span>
          <span>Minneapolis, MN</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              lineHeight: 0.9,
              letterSpacing: "-0.05em",
              textTransform: "uppercase",
            }}
          >
            Joshua Moe
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 22,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#A3A3A3",
            }}
          >
            Creative Director
          </div>
        </div>
      </div>
    ),
    size,
  );
}
