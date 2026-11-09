import type { Metadata } from "next"
import type { ReactNode } from "react"

import { site, siteUrl, description } from "@/content/site"

import "@fontsource-variable/manrope"
import "@fontsource/ibm-plex-mono/400.css"
import "@fontsource/caveat/500.css"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl ?? "http://localhost:3000"),
  title: {
    default: "Юлия — веб- и графический дизайнер",
    template: "%s · Юлия",
  },
  description,
  applicationName: site.brand,
  authors: [{ name: site.name }],
  creator: site.name,
  robots: { index: Boolean(siteUrl), follow: Boolean(siteUrl) },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: site.brand,
    title: "Юлия — дизайн с характером",
    description,
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Юлия — дизайн с характером",
    description,
  },
}

const RootLayout = ({
  children,
  modal,
}: Readonly<{ children: ReactNode; modal: ReactNode }>) => {
  return (
    <html
      lang="ru"
      data-scroll-behavior="smooth"
      className="scroll-smooth scroll-pt-[calc(var(--site-header-height)+1rem)] bg-page scheme-dark [--gutter:64px] [--site-header-height:84px] motion-reduce:scroll-auto wide:[--gutter:80px]"
    >
      <body className="font-sans text-base leading-[normal] text-ink antialiased selection:bg-accent selection:text-page has-[dialog[open]]:overflow-hidden [&_a]:[-webkit-tap-highlight-color:transparent] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-[7px] [&_a:focus-visible]:outline-accent [&_button]:cursor-pointer [&_button]:[-webkit-tap-highlight-color:transparent] [&_button:disabled]:cursor-default [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-[7px] [&_button:focus-visible]:outline-accent">
        <a
          className="fixed top-2.5 left-5 z-100 -translate-y-[200%] bg-accent px-5 py-3 text-page focus:translate-y-0"
          href="#main"
        >
          К содержимому
        </a>

        {children}
        {modal}
      </body>
    </html>
  )
}

export default RootLayout
