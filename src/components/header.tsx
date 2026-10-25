import Link from "next/link";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { ArrowUpRight, Asterisk } from "./icons";

export function Header() {
  return (
    <header className="header page-width">
      <Link href="/" className="wordmark" aria-label="Юлия — на главную"><Asterisk />{site.brand}</Link>
      <nav className="navigation" aria-label="Основная навигация">
        <Link href="/#work">Работы <span>{String(projects.length).padStart(2, "0")}</span></Link>
        <Link href="/#about">Обо мне</Link>
        <Link href="/#contact" className="nav-contact">Обсудить проект <ArrowUpRight /></Link>
      </nav>
    </header>
  );
}
