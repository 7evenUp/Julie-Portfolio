import type { Metadata } from "next"

import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import About from "./sections/about"
import Hero from "./sections/hero"
import Work from "./sections/work"

import { site, siteUrl, description } from "@/content/site"

export const metadata: Metadata = {
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
}

const Home = () => {
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
    <div className="relative isolate min-w-[1120px] overflow-clip bg-page">
      <div
        className="page-grid pointer-events-none absolute inset-y-0 inset-x-(--gutter) -z-1 mx-auto flex max-w-[1632px] justify-between"
        aria-hidden="true"
      >
        {Array.from({ length: 5 }, (_, index) => (
          <span
            className="relative h-full w-px bg-line opacity-70"
            key={index}
          />
        ))}
      </div>

      <Header />

      <main id="main">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  )
}

export default Home
