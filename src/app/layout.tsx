import Link from "next/link"

import type { Metadata } from "next"
import type { ReactNode } from "react"

import { site, siteCopy, siteUrl } from "@/content/site"

import { getLanguage } from "@/lib/language"

import "@fontsource-variable/manrope"
import "@fontsource/ibm-plex-mono/400.css"
import "@fontsource/caveat/500.css"
import "./globals.css"

export const generateMetadata = async (): Promise<Metadata> => {
  const language = await getLanguage()
  const copy = siteCopy[language]
  const image = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: copy.title,
  }

  return {
    metadataBase: new URL(siteUrl ?? "http://localhost:3000"),
    title: {
      default: copy.title,
      template: `%s · ${copy.formalName}`,
    },
    description: copy.description,
    applicationName: site.brand,
    authors: [{ name: copy.name }],
    creator: copy.name,
    robots: { index: Boolean(siteUrl), follow: Boolean(siteUrl) },
    openGraph: {
      type: "website",
      locale: language === "ru" ? "ru_RU" : "en_GB",
      siteName: site.brand,
      title: copy.socialTitle,
      description: copy.description,
      images: [image],
      ...(siteUrl ? { url: siteUrl } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: copy.socialTitle,
      description: copy.description,
      images: [image],
    },
  }
}

const RootLayout = async ({
  children,
  modal,
}: Readonly<{ children: ReactNode; modal: ReactNode }>) => {
  const language = await getLanguage()

  return (
    <html
      lang={language}
      data-scroll-behavior="smooth"
      className="scroll-smooth scroll-pt-[calc(var(--site-header-height)+1rem)] bg-page scheme-dark [--gutter:clamp(16px,calc(6vw-3.2px),64px)] [--project-gutter:clamp(16px,5vw,44px)] [--site-header-height:68px] has-[dialog[open]]:overflow-hidden motion-reduce:scroll-auto sm:[--site-header-height:84px] wide:[--gutter:80px]"
    >
      <body className="font-sans text-base leading-[normal] text-ink antialiased selection:bg-accent selection:text-page [&_a]:[-webkit-tap-highlight-color:transparent] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-accent [&_button]:cursor-pointer [&_button]:[-webkit-tap-highlight-color:transparent] [&_button:disabled]:cursor-default [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-4 [&_button:focus-visible]:outline-accent">
        <Link
          className="fixed top-2.5 left-5 z-100 translate-y-[-200%] bg-accent px-5 py-3 text-page focus:translate-y-0"
          href="#main"
        >
          {siteCopy[language].skipToContent}
        </Link>

        {children}
        {modal}
      </body>
    </html>
  )
}

export default RootLayout
