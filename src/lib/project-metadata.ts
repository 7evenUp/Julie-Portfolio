import type { Metadata } from "next";
import { getProject } from "@/content/projects";
import { siteUrl, site } from "@/content/site";

export async function projectMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    ...(project.isDemo ? { robots: { index: false, follow: true } } : {}),
    ...(siteUrl ? { alternates: { canonical: `/projects/${project.slug}` } } : {}),
    openGraph: {
      type: "website", locale: "ru_RU", siteName: site.brand,
      title: project.title, description: project.summary,
      ...(siteUrl ? { url: `/projects/${project.slug}` } : {}),
      images: [{ url: `/projects/${project.slug}/opengraph-image`, width: 1200, height: 630, alt: project.title }],
    },
    twitter: { card: "summary_large_image", title: project.title, description: project.summary, images: [`/projects/${project.slug}/opengraph-image`] },
  };
}
