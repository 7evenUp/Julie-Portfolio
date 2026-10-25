"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { ArrowDown } from "./icons";

const archCards = [projects[2], projects[0], projects[1], projects[4], projects[3], projects[2], projects[0]];
const positions = [
  { x: -492, y: 330, angle: -63 },
  { x: -374, y: 174, angle: -43 },
  { x: -206, y: 72, angle: -22 },
  { x: 0, y: 31, angle: 0 },
  { x: 206, y: 72, angle: 22 },
  { x: 374, y: 174, angle: 43 },
  { x: 492, y: 330, angle: 63 },
];

export function ProjectArch() {
  const [paused, setPaused] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const hasVideo = Boolean(site.archVideo) && !videoFailed;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    function update() { setPaused(media.matches); }
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!video.current) return;
    if (paused) video.current.pause();
    else void video.current.play().catch(() => setPaused(true));
  }, [paused, hasVideo]);

  return (
    <section className={`arch-section ${paused ? "is-paused" : ""}`} aria-label="Знакомство с проектами">
      <div className="arch-heading mono"><span>Немного моего мира</span><span>[ Листайте и рассматривайте ]</span></div>
      <div className="arch-stage">
        {hasVideo ? (
          <video className="arch-video" ref={video} src={site.archVideo} poster={site.archPoster || undefined} muted loop playsInline preload="metadata" onError={() => setVideoFailed(true)} aria-label="Анимированная арка проектов" />
        ) : (
          <div className="arch-cards" aria-hidden="true">
            {archCards.map((project, i) => (
              <div className="arch-card-position" key={`${project.slug}-${i}`} style={{ "--arch-x": `${positions[i].x}px`, "--arch-y": `${positions[i].y}px`, "--arch-angle": `${positions[i].angle}deg`, "--delay": `${i * -0.65}s` } as CSSProperties}>
                <div className="arch-card"><Image src={project.cover.src} alt="" width={240} height={300} sizes="220px" /><span>{project.category}</span></div>
              </div>
            ))}
          </div>
        )}
        <div className="arch-center">
          <p>У каждой идеи —<br /><span>своя форма.</span></p>
          <a href="#work" className="pill-button">Посмотреть все проекты <ArrowDown /></a>
          <span className="arch-counter mono">Сайты · Графика · Важные моменты</span>
        </div>
      </div>
      <div className="arch-bottom mono"><span>{hasVideo ? "Проекты в движении" : "Демо-композиция · место для вашего видео"}</span><button type="button" onClick={() => setPaused(!paused)} aria-pressed={paused}><span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span> {paused ? "Включить анимацию" : "Пауза анимации"}</button></div>
    </section>
  );
}
