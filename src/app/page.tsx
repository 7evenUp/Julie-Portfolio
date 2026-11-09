import type { Metadata } from "next"

import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import PageMotion from "@/components/page-motion"
import Hero from "./sections/hero"
import Work from "./sections/work"

import { site, siteCopy, siteUrl } from "@/content/site"

import { getLanguage } from "@/lib/language"

export const metadata: Metadata = {
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
}

const Home = async () => {
  const language = await getLanguage()
  const copy = siteCopy[language]
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    ...(siteUrl ? { url: siteUrl } : {}),
    name: copy.title,
    description: copy.description,
    inLanguage: language,
    mainEntity: {
      "@type": "Person",
      name: copy.name,
      jobTitle: copy.role,
      knowsAbout: copy.expertise,
      ...(siteUrl ? { url: siteUrl } : {}),
      ...(site.telegram || site.behance
        ? { sameAs: [site.telegram, site.behance].filter(Boolean) }
        : {}),
    },
  }

  return (
    <>
      <Header language={language} />

      <PageMotion>
        <div
          className="page-grid pointer-events-none absolute inset-0 -z-1"
          aria-hidden="true"
        />

        <main id="main" tabIndex={-1}>
          <Hero language={language} />
          <Work language={language} />
          <Contact language={language} />
        </main>

        <Footer language={language} />

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
