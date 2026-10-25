import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/projects";
import { site, siteUrl } from "@/content/site";
import { Header } from "@/components/header";
import { ProjectDetail } from "@/components/project-detail";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export { projectMetadata as generateMetadata } from "@/lib/project-metadata";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const jsonLd = { "@context": "https://schema.org", "@type": "CreativeWork", name: project.title, description: project.summary, genre: project.category, inLanguage: "ru-RU", creator: { "@type": "Person", name: site.name }, ...(siteUrl ? { url: `${siteUrl}/projects/${project.slug}`, image: `${siteUrl}${project.cover.src}` } : {}) };
  return <div className="site-shell"><Header /><main id="main" className="project-page"><Link href="/#work" className="project-back mono">← Все проекты</Link><ProjectDetail project={project} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /></main></div>;
}
