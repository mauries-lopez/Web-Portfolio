import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mauries Lopez — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0b",
          color: "white",
          fontFamily: "Geist, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 160,
              height: 160,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #f59e0b, #d97706)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 40,
              fontSize: 64,
              fontWeight: 800,
              color: "#0a0a0b",
            }}
          >
            ML
          </div>
          <h1
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              margin: 0,
              lineHeight: 1,
            }}
          >
            Mauries Lopez
          </h1>
          <p
            style={{
              fontSize: 32,
              color: "#f59e0b",
              marginTop: 16,
              marginBottom: 0,
              fontWeight: 500,
            }}
          >
            Software Engineer
          </p>
          <p
            style={{
              fontSize: 20,
              color: "#737373",
              marginTop: 24,
              marginBottom: 0,
            }}
          >
            De La Salle University · maurieslopez.netlify.app
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
