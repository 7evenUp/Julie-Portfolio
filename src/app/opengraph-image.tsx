import { ImageResponse } from "next/og"

export const alt = "Юлия — веб- и графический дизайнер"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
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
        <span>Дизайн сайтов</span>
        <span style={{ color: "#d2fb78" }}>и графики</span>
      </div>
      <div style={{ display: "flex", fontSize: 22, color: "#a3a69f" }}>
        Веб-дизайн / Графика / Свадебная полиграфия
      </div>
    </div>,
    size,
  )
}
