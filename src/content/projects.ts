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
  layout: "wide" | "portrait" | "medium" | "offset" | "last"
  background: string
}

/**
 * Add projects here. Place images in public/images/projects/.
 * Keep slugs unique and stable: these are the search-friendly project URLs.
 */
export const projects: Project[] = [
  {
    slug: "wedding-stationery",
    title: "Свадебные приглашения и карточки гостей",
    category: "Свадебная полиграфия",
    summary: "Каллиграфия и деликатные детали свадебной полиграфии.",
    description:
      "Дизайн свадебных приглашений с акцентом на типографику и детали. Каллиграфические имена, сдержанная палитра и деликатное обрамление задают торжественное и романтичное настроение. История начинается с двух ранних вариантов приглашения — оливкового и светлого, с цветочными контурами. В финальном дизайне акцент переходит на именное обращение, тонкую орнаментальную рамку и светлую фактуру бумаги. Эти же приёмы продолжаются в карточках рассадки: каллиграфические имена, деликатное обрамление и красные ленты связывают полиграфию с оформлением свадебного стола.",
    services: ["Дизайн приглашений", "Карточки гостей", "Типографика"],
    cover: {
      src: "/images/projects/wedding-stationery/cover-main.webp",
      alt: "Свадебное приглашение и именная карточка Анны Леонидовны с красной лентой среди белых роз и праздничной сервировки",
      width: 1254,
      height: 1254,
    },
    gallery: [
      {
        src: "/images/projects/wedding-stationery/prototypes.webp",
        title: "01 / Первые варианты приглашения",
        alt: "Два ранних макета приглашения: оливковый и кремовый, с цветочным обрамлением и каллиграфическими именами",
        width: 1600,
        height: 1040,
      },
      {
        src: "/images/projects/wedding-stationery/invitation-design.webp",
        title: "02 / Финальный дизайн приглашения",
        alt: "Приглашение для Анны Леонидовны: чёрная каллиграфия, светлая фактура, тонкая рамка и дата 26.08.26",
        width: 1080,
        height: 1350,
      },
      {
        src: "/images/projects/wedding-stationery/invitation-in-hand.webp",
        title: "03 / Приглашение в свадебном зале — визуализация",
        alt: "Визуализация: рука держит приглашение для Анны Леонидовны на фоне свадебного зала с белыми цветами и праздничной сервировкой",
        width: 1086,
        height: 1448,
      },
      {
        src: "/images/projects/wedding-stationery/couple-place-cards.webp",
        title: "04 / Единый стиль карточек рассадки",
        alt: "Карточки «Невеста» и «Жених» на свадебном столе: каллиграфия, светлая бумага, тонкая рамка и красные банты",
        width: 1600,
        height: 1045,
      },
      {
        src: "/images/projects/wedding-stationery/guest-place-cards.webp",
        title: "05 / Имена и детали",
        alt: "Карточки гостей Ирины и Елены Усовой в едином стиле приглашения рядом с праздничной сервировкой",
        width: 1600,
        height: 1045,
      },
      {
        src: "/images/projects/wedding-stationery/table-setting.webp",
        title: "06 / Полиграфия в оформлении свадьбы",
        alt: "Свадебный стол с именными карточками, красными лентами, белыми цветами и бокалами с золотой отделкой",
        width: 1350,
        height: 1800,
      },
    ],
    layout: "medium",
    background: "#ece8de",
  },
  {
    slug: "midnight-session",
    title: "Midnight Session",
    category: "Афиши",
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
      src: "/images/projects/midnight-session/cover.webp",
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
    layout: "wide",
    background: "#c8aa87",
  },
  {
    slug: "tete-a-tete",
    title: "Tête-à-tête — свадебное агентство",
    category: "Сайты",
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
    layout: "medium",
    background: "#ede5d9",
  },
  {
    slug: "poster-studies",
    galleryLayout: "carousel",
    title: "Постеры — типографика и контраст",
    category: "Афиши",
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
    layout: "portrait",
    background: "#3021d9",
  },
  {
    slug: "forma",
    title: "FORMA — мебель для практики и жизни",
    url: "https://www.behance.net/gallery/257577373/FORMA-E-COMMERCE-Website-Design-Concept",
    category: "Сайты",
    summary: "Интернет-магазин мебели для йоги, медитации и дома.",
    description:
      "Интернет-магазин FORMA объединяет мебель для йоги, медитации и жизни за пределами практики. Это взгляд на домашнее пространство, в котором движение и отдых одинаково важны.",
    services: ["Веб-дизайн", "Дизайн интернет-магазина", "Мобильная адаптация"],
    cover: {
      src: "/images/projects/forma/cover.webp",
      alt: "FORMA: скульптурное кресло из дерева и металла на фоне крупной терракотовой типографики в светлом интерьере",
      width: 1600,
      height: 945,
    },
    gallery: [
      {
        src: "/images/projects/forma/homepage-mockup.webp",
        alt: "Главный экран интернет-магазина FORMA на ноутбуке: оливковый фон, голубое кресло и заголовок «Ваше тело чувствует разницу»",
        width: 1600,
        height: 1200,
      },
      {
        src: "/images/projects/forma/desktop-mobile.webp",
        alt: "Десктопная и мобильная версии FORMA: категории мебели, интерьерные фотографии и карточки лучших предложений",
        width: 1600,
        height: 1572,
      },
      {
        src: "/images/projects/forma/materials-details.webp",
        alt: "Детали главной страницы FORMA и мобильная адаптация: материалы мебели, блок о бренде, вопросы, отзывы и форма заявки",
        width: 1600,
        height: 1572,
      },
      {
        src: "/images/projects/forma/catalog-product.webp",
        alt: "Каталог FORMA с фильтрами и карточками мебели, мобильная версия каталога и быстрый просмотр голубого кресла",
        width: 1600,
        height: 1572,
      },
      {
        src: "/images/projects/forma/checkout-account.webp",
        alt: "Покупательские сценарии FORMA: корзина с мебелью, подтверждение оплаты и личный кабинет",
        width: 1600,
        height: 1308,
      },
    ],
    layout: "medium",
    background: "#faf3ed",
  },
  {
    slug: "vibe-coding-banners",
    title: "Вайб-кодинг — баннеры",
    category: "Баннеры",
    summary: "Продвижение онлайн-школы вайб-кодинга во ВКонтакте и Telegram.",
    description:
      "Баннеры для продвижения онлайн-школы вайб-кодинга во ВКонтакте и Telegram. Задача — заинтересовать новичков и пригласить их на бесплатный урок. Крупные заголовки и заметные призывы к действию помогают быстро донести идею: начать создавать с AI можно без опыта программирования.",
    services: ["Дизайн баннеров", "Дизайн для соцсетей", "Типографика"],
    cover: {
      src: "/images/projects/vibe-coding-banners/cover.webp",
      alt: "Коллаж шести баннеров онлайн-школы вайб-кодинга с яркими заголовками, роботизированными руками и приглашениями на бесплатный урок",
      width: 1254,
      height: 1254,
    },
    gallery: [
      {
        src: "/images/projects/vibe-coding-banners/try-vibe-coding.webp",
        title: "Попробуйте вайб-кодинг",
        alt: "Баннер «Попробуйте вайб-кодинг»: белая роботизированная рука с чипом, зелёная сетка и кнопка «Перейти к уроку»",
        width: 1080,
        height: 1080,
      },
      {
        src: "/images/projects/vibe-coding-banners/code-without-code.webp",
        title: "Код без кода",
        alt: "Баннер «Код без кода» с белой и зелёной типографикой, хромированными фигурами и предложением начать обучение бесплатно",
        width: 1080,
        height: 1080,
      },
      {
        src: "/images/projects/vibe-coding-banners/first-ai-project.webp",
        title: "Первый проект через AI",
        alt: "Баннер «Сделайте свой первый проект через AI за 7 дней»: оранжевая лента на чёрном фоне и приглашение на бесплатный урок",
        width: 1080,
        height: 1080,
      },
      {
        src: "/images/projects/vibe-coding-banners/learn-ai-coding.webp",
        title: "Научим писать код через AI",
        alt: "Фиолетовый баннер «Научим писать код через AI» с руками человека и робота, без опыта и сложной теории",
        width: 1080,
        height: 1080,
      },
      {
        src: "/images/projects/vibe-coding-banners/create-with-ai.webp",
        title: "Создавайте с помощью AI",
        alt: "Баннер «Создавайте с помощью AI» с ветвящейся схемой: боты, автоматизации, сайты и приложения",
        width: 1080,
        height: 1080,
      },
      {
        src: "/images/projects/vibe-coding-banners/start-in-it.webp",
        title: "Хотите в IT?",
        alt: "Баннер «Хотите в IT, но не умеете программировать?» с жёлто-оранжевой пушистой формой и призывом «Начните бесплатно»",
        width: 1080,
        height: 1080,
      },
    ],
    galleryLayout: "carousel",
    layout: "medium",
    background: "#141414",
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
