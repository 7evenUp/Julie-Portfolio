import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/content/projects";
import { ArrowUpRight } from "./icons";

export function ProjectDetail({ project, inModal = false }: { project: Project; inModal?: boolean }) {
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];
  const Heading = inModal ? "h2" : "h1";
  return (
    <article className="project-detail">
      <div className="detail-intro">
        <div className="detail-eyebrow mono"><span>{project.category} / {project.year}</span>{project.isDemo && <span className="detail-demo">Демо-концепция</span>}</div>
        <Heading id="project-title">{project.title}</Heading>
        <p className="detail-summary">{project.summary}</p>
      </div>
      <Image className="detail-cover" src={project.cover.src} alt={project.cover.alt} width={project.cover.width} height={project.cover.height} sizes="(min-width: 1300px) 1100px, 90vw" priority />
      <div className="detail-description"><div><span className="mono section-kicker">О проекте</span><p>{project.description}</p>{project.url && <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">Посмотреть проект <ArrowUpRight /></a>}</div><div><span className="mono section-kicker">Что сделано</span><ul>{project.services.map((service) => <li key={service}>{service}</li>)}</ul></div></div>
      <div className="detail-gallery">{project.gallery.map((image) => <Image key={image.src} src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(min-width: 1300px) 1100px, 90vw" />)}</div>
      <Link href={`/projects/${nextProject.slug}`} className="next-project" replace={inModal} scroll={!inModal}><div><span className="mono">Следующий проект</span><p>{nextProject.title}</p></div><ArrowUpRight /></Link>
    </article>
  );
}
