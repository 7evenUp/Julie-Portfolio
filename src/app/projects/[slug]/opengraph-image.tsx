import { ImageResponse } from "next/og"

import { categoryLabels, getProject } from "@/content/projects"
import { siteCopy } from "@/content/site"

import { getLanguage } from "@/lib/language"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const language = await getLanguage()
  const project = getProject((await params).slug, language)
  const copy = siteCopy[language].project
  const category = project ? categoryLabels[language][project.category] : copy.portfolio

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "60px 70px",
        background: project?.background ?? "#d2fb78",
        color: "#171916",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 25 }}>julia.design / {category}</div>
      <div style={{ display: "flex", fontSize: 85, lineHeight: 1.08, letterSpacing: -4 }}>
        {project?.title ?? copy.fallbackTitle}
      </div>
      <div style={{ display: "flex", fontSize: 24 }}>{project?.summary}</div>
    </div>,
    { ...size, headers: { "Cache-Control": "private, no-store" } },
  )
}
