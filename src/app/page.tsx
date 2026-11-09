import type { Metadata } from "next"

import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import PageMotion from "@/components/page-motion"
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
    <>
      <Header />

      <PageMotion>
        <div
          className="page-grid pointer-events-none absolute inset-0 -z-1"
          aria-hidden="true"
        />

        <main id="main">
          <Hero />
          <Work />
          <Contact />
        </main>

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </PageMotion>
    </>
  )
}

export default Home
