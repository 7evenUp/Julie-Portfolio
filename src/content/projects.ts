export const categories = [
  "Все работы",
  "Сайты",
  "Баннеры",
  "Афиши",
  "Свадебная полиграфия",
] as const
export type Category = (typeof categories)[number]

export type Project = {
  slug: string
  title: string
  category: Exclude<Category, "Все работы">
  year: string
  summary: string
  description: string
  services: string[]
  cover: { src: string; alt: string; width: number; height: number }
  gallery: {
    src: string
    alt: string
    title?: string
    width: number
    height: number
  }[]
  galleryLayout?: "carousel"
  /** An optional real project URL. Omit it when there is no public link. */
  url?: string
  isDemo?: boolean
  layout: "wide" | "portrait" | "medium" | "offset" | "last"
  background: string
}

/**
 * Add projects here. Place images in public/images/projects/.
 * Keep slugs unique and stable: these are the search-friendly project URLs.
 * Keep isDemo: false for actual portfolio projects; demos may stay alongside them.
 */
export const projects: Project[] = [
  {
    slug: "orto-studio",
    title: "ORTO — ближе к природе",
    category: "Сайты",
    year: "2026",
    summary: "Концепция сайта студии озеленения.",
    description:
      "Демо-концепция сайта студии озеленения: главный экран и каталог растений. В макетах использованы оливковые оттенки, крупная типографика и карточки с фотографиями растений.",
    services: ["Арт-дирекшн", "Веб-дизайн", "UI/UX"],
    cover: {
      src: "/images/projects/orto.svg",
      alt: "Концепция сайта ORTO: оливковая палитра, растения и крупная типографика",
      width: 1200,
      height: 860,
    },
    gallery: [
      {
        src: "/images/projects/orto-detail.svg",
        alt: "Детали концепции ORTO: карточки растений и композиция каталога",
        width: 1200,
        height: 860,
      },
    ],
    isDemo: true,
    layout: "wide",
    background: "#dce0d0",
  },
  {
    slug: "forma-poster",
    title: "Форма звука",
    category: "Афиши",
    year: "2026",
    summary: "Серия типографических афиш музыкального события.",
    description:
      "Демо-серия афиш для вымышленного музыкального события. Два цветовых варианта: лавандовый и лаймовый. Основные элементы композиции — крупный набор и объёмная лента.",
    services: ["Графический дизайн", "Типографика", "Афиша"],
    cover: {
      src: "/images/projects/forma.svg",
      alt: "Лавандовая музыкальная афиша «Форма звука» с лаймовой объёмной лентой",
      width: 800,
      height: 1040,
    },
    gallery: [
      {
        src: "/images/projects/forma-detail.svg",
        alt: "Парные афиши «Форма звука» в лавандовом и лаймовом цветах",
        width: 1200,
        height: 860,
      },
    ],
    isDemo: true,
    layout: "portrait",
    background: "#c0aee9",
  },
  {
    slug: "anna-and-mark",
    title: "Анна & Марк",
    category: "Свадебная полиграфия",
    year: "2026",
    summary: "Приглашение, карточка гостя и открытка.",
    description:
      "Демо-комплект свадебной полиграфии: приглашение, карточка гостя и открытка. Кремовый фон, бордовая типографика и цветочные контуры повторяются на всех носителях.",
    services: ["Приглашения", "Карточки гостей", "Полиграфия"],
    cover: {
      src: "/images/projects/wedding.svg",
      alt: "Кремовые свадебные приглашения Анны и Марка с бордовой типографикой",
      width: 1100,
      height: 860,
    },
    gallery: [
      {
        src: "/images/projects/wedding-detail.svg",
        alt: "Свадебная полиграфия крупным планом: приглашение и карточка гостя",
        width: 1200,
        height: 860,
      },
    ],
    isDemo: true,
    layout: "medium",
    background: "#e8dcd2",
  },
  {
    slug: "lumi-campaign",
    title: "LUMI — немного солнца",
    category: "Баннеры",
    year: "2026",
    summary: "Рекламные баннеры косметического бренда.",
    description:
      "Демо-кампания для вымышленного косметического бренда. Широкий баннер и вертикальные постеры с изображением продукта на абрикосовом фоне.",
    services: ["Баннеры", "Визуальная концепция", "Дизайн для соцсетей"],
    cover: {
      src: "/images/projects/lumi.svg",
      alt: "Солнечный баннер косметического бренда LUMI в абрикосовых тонах",
      width: 1200,
      height: 860,
    },
    gallery: [
      {
        src: "/images/projects/lumi-detail.svg",
        alt: "Вертикальные рекламные баннеры LUMI с продуктом и типографикой",
        width: 1200,
        height: 860,
      },
    ],
    isDemo: true,
    layout: "offset",
    background: "#f0b58d",
  },
  {
    slug: "objects-gallery",
    title: "Объекты. Вне времени",
    category: "Сайты",
    year: "2026",
    summary: "Концепция сайта галереи предметного дизайна.",
    description:
      "Демо-концепция сайта галереи предметного дизайна: главный экран и страница коллекции. Монохромная типографика сочетается с крупными изображениями предметов.",
    services: ["Концепция", "Веб-дизайн", "Арт-дирекшн"],
    cover: {
      src: "/images/projects/objects.svg",
      alt: "Минималистичный сайт галереи «Объекты» с хромированным предметом",
      width: 1200,
      height: 860,
    },
    gallery: [
      {
        src: "/images/projects/objects-detail.svg",
        alt: "Внутренний экран сайта «Объекты»: коллекция предметов дизайна",
        width: 1200,
        height: 860,
      },
    ],
    isDemo: true,
    layout: "last",
    background: "#d2d8e5",
  },
  {
    slug: "midnight-session",
    title: "Midnight Session",
    category: "Афиши",
    year: "2026",
    summary: "Рекламная афиша джазового вечера при свечах.",
    description:
      "Афиша и билет для джазового вечера при свечах. В центре афиши расположен саксофон на тёмном фоне. Для заголовка и информации о событии использованы FoglihtenNo06 и Montserrat. В презентации показаны палитра, типографика и макеты обоих носителей.",
    services: [
      "Визуальная концепция",
      "Дизайн афиши",
      "Типографика",
      "Дизайн билета",
    ],
    cover: {
      src: "/images/projects/midnight-session/poster.webp",
      alt: "Афиша Midnight Session: золотой саксофон в тёплом свете свечей и контрастная типографика",
      width: 1920,
      height: 1845,
    },
    gallery: [
      {
        src: "/images/projects/midnight-session/presentation.webp",
        alt: "Midnight Session — презентация афиши джазового вечера в интерьере",
        width: 1920,
        height: 1845,
      },
      {
        src: "/images/projects/midnight-session/concept.webp",
        alt: "Типографика и колористика Midnight Session: Montserrat, FoglihtenNo06 и светлая палитра на тёмном фоне",
        width: 1920,
        height: 1845,
      },
      {
        src: "/images/projects/midnight-session/details.webp",
        alt: "Дизайн билетов Midnight Session и детали рекламной афиши",
        width: 1920,
        height: 1845,
      },
      {
        src: "/images/projects/midnight-session/mockup.webp",
        alt: "Афиша Midnight Session на объёмном макете и завершение авторской презентации",
        width: 1920,
        height: 1846,
      },
    ],
    url: "https://www.behance.net/gallery/255956425/Midnight-Session-Posters-Design-Concept",
    isDemo: false,
    layout: "wide",
    background: "#c8aa87",
  },
  {
    slug: "tete-a-tete",
    title: "Tête-à-tête — свадебное агентство",
    category: "Сайты",
    year: "2026",
    summary: "Лендинг свадебного агентства с мобильной адаптацией.",
    description:
      "Для свадебного агентства «Tête-à-tête» разработаны структура лендинга, прототип, десктопный дизайн и мобильная версия. На странице представлены портфолио, этапы подготовки, тарифы, команда, ответы на вопросы и форма заявки. В оформлении использованы молочный и бордовый цвета, шрифты Anticva и Inter, чёрно-белые фотографии и бумажные коллажи. В мобильной версии таблица тарифов заменена отдельными карточками.",
    services: [
      "Структура лендинга",
      "Прототипирование",
      "Визуальная концепция",
      "Веб-дизайн",
      "Мобильная адаптация",
    ],
    cover: {
      src: "/images/projects/tete-a-tete/cover.webp",
      alt: "Лендинг Tête-à-tête: свадебный коллаж с чёрно-белыми фотографиями пары, бумажными фактурами и бордовыми акцентами",
      width: 1254,
      height: 1254,
    },
    gallery: [
      {
        src: "/images/projects/tete-a-tete/mockup.webp",
        alt: "Tête-à-tête: первый экран лендинга на ноутбуке и свадебные фотографии в оформлении киноплёнки",
        width: 1749,
        height: 872,
      },
      {
        src: "/images/projects/tete-a-tete/prototype.webp",
        alt: "Палитра Tête-à-tête и прототип лендинга с преимуществами, портфолио, этапами работы и тарифами",
        width: 1749,
        height: 1820,
      },
      {
        src: "/images/projects/tete-a-tete/desktop-mobile.webp",
        alt: "Десктопный дизайн и мобильная адаптация Tête-à-tête: первый экран, портфолио, этапы подготовки, карточки тарифов, команда, FAQ и форма заявки",
        width: 1749,
        height: 4780,
      },
    ],
    url: "https://www.behance.net/gallery/255263293/Wedding-agensy-Landing-page",
    isDemo: false,
    layout: "medium",
    background: "#ede5d9",
  },
  {
    slug: "poster-studies",
    galleryLayout: "carousel",
    title: "Постеры — типографика и контраст",
    category: "Афиши",
    year: "2026",
    summary:
      "Пять постеров: от сдержанного монохрома до насыщенных цветовых сочетаний.",
    description:
      "Серия постеров на разные темы, объединённых выразительной типографикой и работой с контрастом. Крупные заголовки, фотографии и фактуры формируют характер каждой работы — от сдержанного монохрома до насыщенных цветовых сочетаний. В серии — горный пейзаж, абстрактная графика, мода, киновечер и «Trust the process». Вертикальный набор, сочетание шрифтов, работа с масштабом и зернистые текстуры связывают разные сюжеты в одну коллекцию.",
    services: [
      "Дизайн постеров",
      "Типографика",
      "Работа с цветом",
      "Коллажирование",
    ],
    cover: {
      src: "/images/projects/poster-studies/cover.webp",
      alt: "Коллаж серии постеров: оранжевый постер с синей типографикой, монохромные горы и розовый пион на синем фоне",
      width: 1024,
      height: 1024,
    },
    gallery: [
      {
        src: "/images/projects/poster-studies/mountain.webp",
        title: "Mountain",
        alt: "Монохромный постер Mountain со снежной вершиной и крупным вертикальным заголовком",
        width: 1306,
        height: 1848,
      },
      {
        src: "/images/projects/poster-studies/group.webp",
        title: "Group",
        alt: "Оранжевый постер Group с насыщенной синей типографикой и зернистым цветным изображением",
        width: 1413,
        height: 2000,
      },
      {
        src: "/images/projects/poster-studies/fashion.webp",
        title: "Fashion & Style",
        alt: "Постер Fashion & Style: модный портрет, оранжевый фон и крупная чёрная типографика",
        width: 1413,
        height: 2000,
      },
      {
        src: "/images/projects/poster-studies/cinema.webp",
        title: "Киновечер",
        alt: "Постер киновечера с красным вертикальным заголовком, архивным фото зрителей в 3D-очках и синими акцентами",
        width: 1306,
        height: 1848,
      },
      {
        src: "/images/projects/poster-studies/trust-the-process.webp",
        title: "Trust the process",
        alt: "Постер Trust the process с розовым пионом, оливковой типографикой и фактурным светлым фоном",
        width: 1413,
        height: 2000,
      },
    ],
    isDemo: false,
    layout: "portrait",
    background: "#3021d9",
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
