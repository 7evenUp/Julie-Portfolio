import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/caveat/500.css";
import { site, siteUrl, description } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl ?? "http://localhost:3000"),
  title: { default: "Юлия — веб- и графический дизайнер", template: "%s · Юлия" },
  description,
  applicationName: site.brand,
  authors: [{ name: site.name }],
  creator: site.name,
  robots: { index: Boolean(siteUrl), follow: Boolean(siteUrl) },
  openGraph: { type: "website", locale: "ru_RU", siteName: site.brand, title: "Юлия — дизайн с характером", description, ...(siteUrl ? { url: siteUrl } : {}) },
  twitter: { card: "summary_large_image", title: "Юлия — дизайн с характером", description },
};

export default function RootLayout({ children, modal }: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return <html lang="ru" data-scroll-behavior="smooth"><body><a className="skip-link" href="#main">К содержимому</a>{children}{modal}</body></html>;
}
