import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { siteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return [{ url: siteUrl, changeFrequency: "monthly", priority: 1 }, ...projects.filter((p) => !p.isDemo).map((project) => ({ url: `${siteUrl}/projects/${project.slug}`, changeFrequency: "monthly" as const, priority: 0.8 }))];
}
