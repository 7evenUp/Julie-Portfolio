/** Personal details live here. Missing contacts render as honest placeholders. */
export const site = {
  name: "Юля",
  brand: "julia.design",
  role: "Веб- и графический дизайнер",
  introduction:
    "Дизайню всё подряд — сайты, афиши, баннеры и даже приглашения на свадьбу!",
  portrait: "/images/julie.jpg",
  telegram: "https://t.me/Khorolskaya_YM",
  behance: "https://www.behance.net/yuliyaho",
}

export const heroTypewriter = {
  words: [
    "сайтов",
    "баннеров",
    "афиш",
    "свадебного визуала",
    "инфографики для маркетплейсов",
  ],
  typingMs: 40,
  deletingMs: 30,
  holdMs: 1000,
  emptyMs: 150,
  initialHoldMs: 1000,
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
