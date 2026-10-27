"use client"

import Image from "next/image"
import { type CSSProperties } from "react"
import { arch } from "@/content/arch"
import { ArrowDown } from "./icons"

// Identical halves make a 180° rotation seamless: eight distinct slots,
// with the returning half hidden beneath the first-screen clipping boundary.
const wheelItems = [...arch.items, ...arch.items]

export const ProjectArch = () => {
  return (
    <section
      id="project-arch"
      className="arch-section"
      aria-label="Анимированная арка из восьми карточек проектов"
      style={{ "--arch-duration": `${arch.durationSeconds}s` } as CSSProperties}
    >
      <div className="arch-stage">
        <div className="arch-wheel" aria-hidden="true">
          {wheelItems.map((item, index) => (
            <div
              className="arch-card-position"
              key={`${item.id}-${index}`}
              style={
                {
                  "--arch-angle": `${(index * 360) / wheelItems.length}deg`,
                } as CSSProperties
              }
            >
              <div className="arch-card">
                <Image
                  src={item.image}
                  alt=""
                  width={400}
                  height={400}
                  sizes="(min-width: 1600px) 190px, 155px"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="arch-center">
          <a href="#work" className="pill-button">
            Посмотреть все проекты <ArrowDown />
          </a>
        </div>
      </div>
    </section>
  )
}
