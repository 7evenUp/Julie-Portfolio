/** Personal details live here. Missing contacts render as honest placeholders. */
export const site = {
  name: "Юля",
  brand: "julia.design",
  role: "Веб- и графический дизайнер",
  introduction:
    "Разрабатываю лендинги и многостраничные сайты, оформляю баннеры, афиши и свадебную полиграфию.",
  portrait: "/images/julie.jpg",
  email: "",
  telegram: "",
  behance: "",
}

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(
  /\/$/,
  "",
)

export const siteUrl = (() => {
  if (!configuredUrl) return undefined
  try {
    const url = new URL(configuredUrl)
    return ["http:", "https:"].includes(url.protocol) ? url.origin : undefined
  } catch {
    return undefined
  }
})()

export const description =
  "Портфолио Юлии — веб- и графического дизайнера. Дизайн сайтов, баннеров, афиш и свадебной полиграфии."
