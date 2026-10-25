"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { categories, projects, type Category } from "@/content/projects";
import { ArrowUpRight } from "./icons";

export function ProjectGrid() {
  const [category, setCategory] = useState<Category>("Все работы");
  const visibleProjects = projects.filter((project) => category === "Все работы" || project.category === category);

  return (
    <>
      <div className="work-toolbar">
        <div className="project-filters" role="group" aria-label="Категории проектов">
          {categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={category === item ? "active" : ""} aria-pressed={category === item}>{item}{item === "Все работы" && <sup>{String(projects.length).padStart(2, "0")}</sup>}</button>)}
        </div>
        <span className="mono demo-label"><span />Демонстрационные концепции</span>
      </div>
      <p className="sr-only" role="status">Показано проектов: {visibleProjects.length}</p>
      <div className={`project-grid ${category !== "Все работы" ? "is-filtered" : ""}`}>
        {visibleProjects.map((project) => (
          <article className={`project-card project-card--${project.layout}`} key={project.slug}>
            <Link href={`/projects/${project.slug}`} scroll={false} className="project-link" aria-label={`${project.title} — подробнее о проекте`}>
              <div className="project-image" style={{ background: project.background }}>
                <Image src={project.cover.src} alt={project.cover.alt} width={project.cover.width} height={project.cover.height} sizes={project.layout === "portrait" ? "28vw" : "60vw"} />
                <span className="project-index mono">{String(projects.indexOf(project) + 1).padStart(2, "0")} / {project.category}</span>
                <span className="project-open"><ArrowUpRight /></span>
              </div>
              <div className="project-caption"><div><h3>{project.title}</h3><p>{project.summary}</p></div><span className="mono">{project.year}<ArrowUpRight /></span></div>
            </Link>
            <span className="project-grid-cross" aria-hidden="true">+</span>
          </article>
        ))}
      </div>
    </>
  );
}
