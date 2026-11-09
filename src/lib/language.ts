import { cache } from "react"
import { cookies, headers } from "next/headers"

export type Language = "ru" | "en"

const languageCookie = "portfolio-language"

const isLanguage = (value: unknown): value is Language =>
  value === "ru" || value === "en"

export const getLanguage = cache(async (): Promise<Language> => {
  const savedLanguage = (await cookies()).get(languageCookie)?.value
  if (isLanguage(savedLanguage)) return savedLanguage

  const browserLanguages = (await headers()).get("accept-language") ?? ""
  let language: Language = "en"
  let highestQuality = 0

  for (const preference of browserLanguages.split(",")) {
    const [tag, weight] = preference.trim().toLowerCase().split(";")
    const quality = weight ? Number(weight.trim().replace(/^q=/, "")) : 1
    if (!tag || !(quality > highestQuality && quality <= 1)) continue

    language = tag.trim().split("-")[0] === "ru" ? "ru" : "en"
    highestQuality = quality
  }

  return language
})

export const setLanguage = async (language: Language) => {
  "use server"

  if (!isLanguage(language)) return

  const cookieStore = await cookies()
  cookieStore.set(languageCookie, language, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    httpOnly: true,
  })
}
