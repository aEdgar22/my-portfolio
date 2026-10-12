import fs from "fs";
import path from "path";
import { ImageResponse } from "next/og";

// file convention: Next turns this into og:image for every route (generated once at build)
export const alt = "Edgar De Avila — AI First Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function bricolage() {
  try {
    const css = await (await fetch("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@800")).text();
    const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    return src ? await (await fetch(src)).arrayBuffer() : null;
  } catch {
    return null; // offline build: fall back to the default font
  }
}

export default async function OgImage() {
  const font = await bricolage();
  const face = `data:image/svg+xml;base64,${fs.readFileSync(path.join(process.cwd(), "src/app/icon.svg")).toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
        background: "#f5f1e6",
        color: "#161616",
        fontFamily: font ? "Bricolage" : undefined,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            border: "3px solid #161616",
            borderRadius: 999,
            background: "#ffd93d",
            padding: "6px 18px",
            fontSize: 24,
            boxShadow: "4px 4px 0 #161616",
          }}
        >
          status: shipping with AI
        </div>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 800, lineHeight: 1, marginTop: 36, letterSpacing: -3 }}>
          Edgar De Avila
        </div>
        <div style={{ display: "flex", marginTop: 34 }}>
          <div
            style={{
              display: "flex",
              border: "4px solid #161616",
              borderRadius: 18,
              background: "#b7f34a",
              padding: "8px 26px",
              fontSize: 52,
              fontWeight: 800,
              boxShadow: "8px 8px 0 #161616",
              transform: "rotate(-2deg)",
            }}
          >
            AI First Developer
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 300,
          height: 300,
          borderRadius: 999,
          border: "5px solid #161616",
          background: "#b7f34a",
          boxShadow: "10px 10px 0 #161616",
        }}
      >
        {/* biome-ignore lint/a11y/useAltText: decorative, alt is set on the image route */}
        <img src={face} width={210} height={217} />
      </div>
    </div>,
    { ...size, fonts: font ? [{ name: "Bricolage", data: font, weight: 800 }] : undefined },
  );
}
