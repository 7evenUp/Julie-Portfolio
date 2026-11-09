import { ImageResponse } from "next/og"

import { siteCopy } from "@/content/site"

import { getLanguage } from "@/lib/language"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  const copy = siteCopy[await getLanguage()].socialImage

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#121413",
        color: "#f2f2eb",
        padding: "58px 70px",
        fontFamily: "sans-serif",
        backgroundImage:
          "linear-gradient(#ffffff0d 1px, transparent 1px), linear-gradient(90deg, #ffffff0d 1px, transparent 1px)",
        backgroundSize: "210px 210px",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, color: "#d2fb78" }}>
        julia.design ✳
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 88,
          letterSpacing: -5,
          lineHeight: 1.12,
        }}
      >
        <span>{copy.title[0]}</span>
        <span style={{ color: "#d2fb78" }}>{copy.title[1]}</span>
      </div>
      <div style={{ display: "flex", fontSize: 22, color: "#a3a69f" }}>
        {copy.subtitle}
      </div>
    </div>,
    { ...size, headers: { "Cache-Control": "private, no-store" } },
  )
}
