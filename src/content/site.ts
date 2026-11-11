/** Personal details live here. */
export const site = {
  brand: "julia.design",
  portrait: "/images/julie.jpg",
  telegram: "https://t.me/Khorolskaya_YM",
  behance: "https://www.behance.net/yuliyaho",
  vk: "https://vk.ru/yuliyaho",
  instagram: "https://www.instagram.com/yuliya_ho",
  developer: "https://ashel-projects.vercel.app/",
}

export const socialLinks = [
  { label: "Behance", href: site.behance },
  { label: "Telegram", href: site.telegram },
  { label: "VK", href: site.vk },
  { label: "Instagram", href: site.instagram },
] as const

export const heroTypewriter = {
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

export const siteCopy = {
  ru: {
    name: "Юля",
    formalName: "Юлия",
    role: "Веб- и графический дизайнер",
    title: "Юлия — веб- и графический дизайнер",
    socialTitle: "Юлия — дизайн с характером",
    description:
      "Портфолио Юлии — веб- и графического дизайнера. Дизайн сайтов, баннеров, афиш и свадебной полиграфии.",
    expertise: [
      "Веб-дизайн",
      "Графический дизайн",
      "Дизайн баннеров",
      "Дизайн афиш",
      "Свадебная полиграфия",
    ],
    socialImage: {
      title: ["Дизайн сайтов", "и графики"],
      subtitle: "Веб-дизайн / Графика / Свадебная полиграфия",
    },
    skipToContent: "К содержимому",
    header: {
      home: "Юлия — на главную",
      navigation: "Основная навигация",
      projects: "Проекты",
      contact: "Контакты",
      language: "Английский язык",
    },
    hero: {
      greeting: "Привет, я Юля!",
      portraitAlt: "Юля, веб- и графический дизайнер",
      design: "Дизайн",
      words: [
        "сайтов",
        "баннеров",
        "афиш",
        "свадебного визуала",
        "инфографики для маркетплейсов",
      ],
      introduction:
        "Дизайню всё подряд — сайты, афиши, баннеры и даже приглашения на свадьбу!",
      arch: "Анимированная арка проектов",
      viewProjects: "Посмотреть все проекты",
    },
    contact: {
      title: "Обсудить проект",
      invitation: "Расскажи, что нужно сделать, и обсудим, с чего начать.",
      telegram: "Написать в Telegram",
    },
    backToTop: "Наверх",
    developerCredit: "Разработка сайта — Ashel",
    project: {
      portfolio: "Портфолио",
      fallbackTitle: "Проекты с характером",
      all: "Все проекты",
      more: "подробнее о проекте",
      about: "О проекте",
      services: "Что сделано",
      view: "Посмотреть проект",
      next: "Следующий проект",
      close: "Закрыть",
      closeLabel: "Закрыть проект",
    },
    notFound: {
      label: "Немного заблудились",
      title: ["Этой страницы", "пока нет."],
      home: "Вернуться на главную",
    },
  },
  en: {
    name: "Julia",
    formalName: "Julia",
    role: "Web and graphic designer",
    title: "Julia — web and graphic designer",
    socialTitle: "Julia — design with character",
    description:
      "Julia’s web and graphic design portfolio. Websites, banners, posters, and wedding stationery.",
    expertise: [
      "Web design",
      "Graphic design",
      "Banner design",
      "Poster design",
      "Wedding stationery",
    ],
    socialImage: {
      title: ["Web and graphic", "design"],
      subtitle: "Web design / Graphics / Wedding stationery",
    },
    skipToContent: "Skip to content",
    header: {
      home: "Julia — home",
      navigation: "Main navigation",
      projects: "Projects",
      contact: "Contact",
      language: "English language",
    },
    hero: {
      greeting: "Hi, I’m Julia!",
      portraitAlt: "Julia, web and graphic designer",
      design: "Design",
      words: [
        "for websites",
        "for banners",
        "for posters",
        "for weddings",
        "for product listings",
      ],
      introduction:
        "I design all sorts of things: websites, posters, banners, and even wedding invitations!",
      arch: "Animated project showcase",
      viewProjects: "View all projects",
    },
    contact: {
      title: "Let’s talk design",
      invitation: "Tell me what you need, and we’ll figure out where to start.",
      telegram: "Message me on Telegram",
    },
    backToTop: "Back to top",
    developerCredit: "Developed by Ashel",
    project: {
      portfolio: "Portfolio",
      fallbackTitle: "Projects with character",
      all: "All projects",
      more: "project details",
      about: "About the project",
      services: "What I did",
      view: "View project",
      next: "Next project",
      close: "Close",
      closeLabel: "Close project",
    },
    notFound: {
      label: "A little off track",
      title: ["This page", "doesn’t exist."],
      home: "Back to home",
    },
  },
}
