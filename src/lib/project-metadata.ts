import type { Metadata } from "next"

import { getProject } from "@/content/projects"
import { siteUrl, site } from "@/content/site"

import { getLanguage } from "./language"

export async function projectMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const language = await getLanguage()
  const project = getProject((await params).slug, language)
  if (!project) return {}
  return {
    title: project.title,
    description: project.summary,
    ...(siteUrl
      ? { alternates: { canonical: `/projects/${project.slug}` } }
      : {}),
    openGraph: {
      type: "website",
      locale: language === "ru" ? "ru_RU" : "en_GB",
      siteName: site.brand,
      title: project.title,
      description: project.summary,
      ...(siteUrl ? { url: `/projects/${project.slug}` } : {}),
      images: [
        {
          url: `/projects/${project.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: [`/projects/${project.slug}/opengraph-image`],
    },
  }
}
