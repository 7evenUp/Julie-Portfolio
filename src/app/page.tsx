import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { AmbientSculpture } from "@/components/ambient"
import { ProjectArch } from "@/components/project-arch"
import { ProjectGrid } from "@/components/project-grid"
import { Contact } from "@/components/contact"
import { CatSticker } from "@/components/cat-sticker"
import { ArrowDown, ArrowUpRight, Asterisk, Globe } from "@/components/icons"
import { site, siteUrl, description } from "@/content/site"

export const metadata: Metadata = {
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
}

const services = [
  {
    number: "01",
    title: "Сайты",
    text: "От первого впечатления до последнего клика.",
    tags: "Лендинги / Многостраничные сайты",
  },
  {
    number: "02",
    title: "Графика",
    text: "Визуальный характер, который замечают.",
    tags: "Баннеры / Афиши / Соцсети",
  },
  {
    number: "03",
    title: "Особенные моменты",
    text: "Бережный дизайн для ваших важных историй.",
    tags: "Приглашения / Свадебная полиграфия",
  },
]

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    ...(siteUrl ? { url: siteUrl } : {}),
    name: "Юлия — веб- и графический дизайнер",
    description,
    inLanguage: "ru-RU",
    mainEntity: {
      "@type": "Person",
      name: site.name,
      jobTitle: site.role,
      knowsAbout: [
        "Веб-дизайн",
        "Графический дизайн",
        "Дизайн баннеров",
        "Дизайн афиш",
        "Свадебная полиграфия",
      ],
      ...(siteUrl ? { url: siteUrl } : {}),
      ...(site.email ? { email: site.email } : {}),
      ...(site.telegram || site.behance
        ? { sameAs: [site.telegram, site.behance].filter(Boolean) }
        : {}),
    },
  }

  return (
    <div className="site-shell">
      <div className="page-grid" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <Header />
      <main id="main">
        <section className="hero page-width" aria-labelledby="hero-title">
          <div className="hero-topline mono">
            <span>Независимый дизайнер</span>
            <span>
              Сайты, графика и немного магии{" "}
              <span className="small-star">✳</span>
            </span>
          </div>
          <div className="hero-main">
            <div className="portrait-column">
              <span className="portrait-signature">Привет, я Юля!</span>
              <div className="portrait-frame">
                <Image
                  src={site.portrait}
                  alt="Юля, веб- и графический дизайнер"
                  width={640}
                  height={800}
                  sizes="320px"
                  priority
                />
                <span className="portrait-corner portrait-corner--tl" />
                <span className="portrait-corner portrait-corner--br" />
              </div>
              <CatSticker cat="polite" placement="portrait" />
            </div>
            <div className="hero-copy">
              <div className="hero-eyebrow mono">
                <span className="live-dot" />
                Веб- и графический дизайн
              </div>
              <h1 id="hero-title">
                {site.headline[0]}
                <br />
                <span>{site.headline[1]}</span>
                <span className="hero-title-dot">*</span>
              </h1>
              <p className="hero-description">{site.introduction}</p>
              <AmbientSculpture />
            </div>
          </div>
          <ProjectArch />
          <div className="hero-footer mono">
            <span>Идея → Чувство → Форма</span>
            <a href="#work">
              Дальше — интереснее <ArrowDown />
            </a>
            <span>Портфолио / 2026</span>
          </div>
        </section>
        <section
          className="work-section page-width"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-topline mono">
            <span>[ 01 — Избранные работы ]</span>
            <span>Собраны с вниманием</span>
          </div>
          <div className="work-heading">
            <CatSticker cat="surprised" placement="work" />
            <h2 id="work-title">
              Разные задачи.
              <br />
              <span>Один почерк.</span>
            </h2>
            <p>
              У каждого проекта свой характер.
              <br />
              Нажмите на работу, чтобы узнать её историю.
              <ArrowUpRight />
            </p>
          </div>
          <ProjectGrid />
          <div className="work-end mono">
            <span>Авторские проекты и визуальные эксперименты.</span>
            <span>
              У каждой работы — своя история <Asterisk />
            </span>
          </div>
        </section>
        <section
          className="about-section page-width"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="section-topline mono">
            <span>[ 02 — Дизайнер за кадром ]</span>
            <span>Чуть ближе</span>
          </div>
          <div className="about-intro">
            <div className="about-label">
              <Asterisk />
              <span className="mono">Это я, Юлия.</span>
              <CatSticker cat="pop" placement="about" />
            </div>
            <div>
              <h2 id="about-title">
                Хороший дизайн начинается
                <br />с <span>любопытства.</span>
              </h2>
              <p>{site.about}</p>
            </div>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <div className="service-row" key={service.number}>
                <span className="mono service-number">/{service.number}</span>
                <h3>{service.title}</h3>
                <p>
                  {service.text}
                  <span className="mono">{service.tags}</span>
                </p>
                <ArrowUpRight />
              </div>
            ))}
          </div>
        </section>
        <Contact />
      </main>
      <footer className="footer page-width mono">
        <a href="#" className="footer-brand">
          {site.brand}
          <Asterisk />
        </a>
        <span>С вниманием к каждой детали © 2026</span>
        <a href="#main">
          Наверх <ArrowUpRight />
        </a>
        <Globe />
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  )
}
