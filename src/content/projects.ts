import type { Language } from "@/lib/language"

export const categories = [
  "Сайты",
  "Баннеры",
  "Афиши",
  "Свадебная полиграфия",
] as const
export type Category = (typeof categories)[number]

export const categoryLabels: Record<Language, Record<Category, string>> = {
  ru: {
    Сайты: "Сайты",
    Баннеры: "Баннеры",
    Афиши: "Афиши",
    "Свадебная полиграфия": "Свадебная полиграфия",
  },
  en: {
    Сайты: "Websites",
    Баннеры: "Banners",
    Афиши: "Posters",
    "Свадебная полиграфия": "Wedding stationery",
  },
}

type ProjectText = Record<Language, string>

type ProjectCover<Text> = {
  src: string
  alt: Text
  width: number
  height: number
}

type GalleryImage<Text> = ProjectCover<Text> & {
  title?: Text
  trimBottom?: number
}

export type Project<Text = string> = {
  slug: string
  title: Text
  category: Category
  summary: Text
  description: Text
  services: Text[]
  cover: ProjectCover<Text>
  gallery: GalleryImage<Text>[]
  galleryLayout?: "carousel" | "continuous"
  /** An optional real project URL. Omit it when there is no public link. */
  url?: string
  layout: "wide" | "portrait" | "medium" | "offset" | "last"
  background: string
}

/**
 * Add projects here. Place images in public/images/projects/.
 * Keep slugs unique and stable: these are the search-friendly project URLs.
 */
export const projects: Project<ProjectText>[] = [
  {
    slug: "wedding-stationery",
    title: {
      ru: "Свадебные приглашения и карточки гостей",
      en: "Wedding invitations and place cards",
    },
    category: "Свадебная полиграфия",
    summary: {
      ru: "Каллиграфия и деликатные детали свадебной полиграфии.",
      en: "Calligraphy and delicate details for wedding stationery.",
    },
    description: {
      ru:
        "Дизайн свадебных приглашений с акцентом на типографику и детали. Каллиграфические имена, сдержанная палитра и деликатное обрамление задают торжественное и романтичное настроение. История начинается с двух ранних вариантов приглашения — оливкового и светлого, с цветочными контурами. В финальном дизайне акцент переходит на именное обращение, тонкую орнаментальную рамку и светлую фактуру бумаги. Эти же приёмы продолжаются в карточках рассадки: каллиграфические имена, деликатное обрамление и красные ленты связывают полиграфию с оформлением свадебного стола.",
      en:
        "The wedding invitations put typography and fine details front and centre. Calligraphed names, a muted palette and a delicate border set a formal, romantic tone. The design began with two floral drafts, one in olive and one in cream. The final invitation focuses on the guest’s name, with a fine ornamental frame and lightly textured paper. The place cards carry the same calligraphy and framing, while red ribbons tie the stationery to the table setting.",
    },
    services: [
      { ru: "Дизайн приглашений", en: "Invitation design" },
      { ru: "Карточки гостей", en: "Guest place cards" },
      { ru: "Типографика", en: "Typography" },
    ],
    cover: {
      src: "/images/projects/wedding-stationery/cover-main.webp",
      alt: {
        ru:
          "Свадебное приглашение и именная карточка Анны Леонидовны с красной лентой среди белых роз и праздничной сервировки",
        en:
          "A wedding invitation and Anna Leonidovna’s place card with a red ribbon among white roses and a formal table setting",
      },
      width: 1254,
      height: 1254,
    },
    gallery: [
      {
        src: "/images/projects/wedding-stationery/prototypes.webp",
        title: { ru: "01 / Первые варианты приглашения", en: "01 / Early invitation designs" },
        alt: {
          ru:
            "Два ранних макета приглашения: оливковый и кремовый, с цветочным обрамлением и каллиграфическими именами",
          en:
            "Two early invitation designs, in olive and cream, with floral borders and calligraphed names",
        },
        width: 1600,
        height: 1040,
      },
      {
        src: "/images/projects/wedding-stationery/invitation-design.webp",
        title: { ru: "02 / Финальный дизайн приглашения", en: "02 / Final invitation design" },
        alt: {
          ru:
            "Приглашение для Анны Леонидовны: чёрная каллиграфия, светлая фактура, тонкая рамка и дата 26.08.26",
          en:
            "Invitation for Anna Leonidovna with black calligraphy, lightly textured paper, a fine border and the date 26 August 2026",
        },
        width: 1080,
        height: 1350,
      },
      {
        src: "/images/projects/wedding-stationery/invitation-in-hand.webp",
        title: {
          ru: "03 / Приглашение в свадебном зале — визуализация",
          en: "03 / Invitation at the venue — mockup",
        },
        alt: {
          ru:
            "Визуализация: рука держит приглашение для Анны Леонидовны на фоне свадебного зала с белыми цветами и праздничной сервировкой",
          en:
            "Mockup of a hand holding Anna Leonidovna’s invitation in a wedding venue with white flowers and formal table settings",
        },
        width: 1086,
        height: 1448,
      },
      {
        src: "/images/projects/wedding-stationery/couple-place-cards.webp",
        title: { ru: "04 / Единый стиль карточек рассадки", en: "04 / Matching place cards" },
        alt: {
          ru:
            "Карточки «Невеста» и «Жених» на свадебном столе: каллиграфия, светлая бумага, тонкая рамка и красные банты",
          en:
            "Bride and groom place cards on the wedding table with calligraphy, pale paper, fine borders and red bows",
        },
        width: 1600,
        height: 1045,
      },
      {
        src: "/images/projects/wedding-stationery/guest-place-cards.webp",
        title: { ru: "05 / Имена и детали", en: "05 / Names and details" },
        alt: {
          ru:
            "Карточки гостей Ирины и Елены Усовой в едином стиле приглашения рядом с праздничной сервировкой",
          en:
            "Irina’s and Elena Usova’s place cards match the invitation and sit beside the formal table setting",
        },
        width: 1600,
        height: 1045,
      },
      {
        src: "/images/projects/wedding-stationery/table-setting.webp",
        title: {
          ru: "06 / Полиграфия в оформлении свадьбы",
          en: "06 / Stationery in the table setting",
        },
        alt: {
          ru:
            "Свадебный стол с именными карточками, красными лентами, белыми цветами и бокалами с золотой отделкой",
          en:
            "Wedding table with personalised place cards, red ribbons, white flowers and gold-rimmed glasses",
        },
        width: 1350,
        height: 1800,
      },
    ],
    layout: "medium",
    background: "#ece8de",
  },
  {
    slug: "midnight-session",
    galleryLayout: "continuous",
    title: { ru: "Midnight Session", en: "Midnight Session" },
    category: "Афиши",
    summary: {
      ru: "Рекламная афиша джазового вечера при свечах.",
      en: "A promotional poster for a candlelit jazz night.",
    },
    description: {
      ru:
        "Афиша и билет для джазового вечера при свечах. В центре афиши расположен саксофон на тёмном фоне. Для заголовка и информации о событии использованы FoglihtenNo06 и Montserrat. В презентации показаны палитра, типографика и макеты обоих носителей.",
      en:
        "A poster and ticket for a candlelit jazz night. A saxophone takes centre stage against a dark background. FoglihtenNo06 and Montserrat set the headline and event details. The presentation shows the palette, typography and mockups of both pieces.",
    },
    services: [
      { ru: "Визуальная концепция", en: "Visual concept" },
      { ru: "Дизайн афиши", en: "Poster design" },
      { ru: "Типографика", en: "Typography" },
      { ru: "Дизайн билета", en: "Ticket design" },
    ],
    cover: {
      src: "/images/projects/midnight-session/cover.webp",
      alt: {
        ru:
          "Афиша Midnight Session: золотой саксофон в тёплом свете свечей и контрастная типографика",
        en:
          "Midnight Session poster with a golden saxophone in warm candlelight and contrasting type",
      },
      width: 1920,
      height: 1845,
    },
    gallery: [
      {
        src: "/images/projects/midnight-session/presentation.webp",
        alt: {
          ru: "Midnight Session — презентация афиши джазового вечера в интерьере",
          en: "The Midnight Session jazz poster shown in an interior mockup",
        },
        width: 1920,
        height: 1845,
      },
      {
        src: "/images/projects/midnight-session/concept.webp",
        trimBottom: 85,
        alt: {
          ru:
            "Типографика и колористика Midnight Session: Montserrat, FoglihtenNo06 и светлая палитра на тёмном фоне",
          en:
            "Midnight Session typography and colour palette with Montserrat, FoglihtenNo06 and light colours against a dark background",
        },
        width: 1920,
        height: 1845,
      },
      {
        src: "/images/projects/midnight-session/details.webp",
        alt: {
          ru: "Дизайн билетов Midnight Session и детали рекламной афиши",
          en: "Midnight Session ticket design and close-ups of the promotional poster",
        },
        width: 1920,
        height: 1845,
      },
      {
        src: "/images/projects/midnight-session/mockup.webp",
        alt: {
          ru: "Афиша Midnight Session на объёмном макете и завершение авторской презентации",
          en:
            "The Midnight Session poster in a dimensional mockup, closing the design presentation",
        },
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
    galleryLayout: "continuous",
    title: { ru: "Tête-à-tête — свадебное агентство", en: "Tête-à-tête — wedding agency" },
    category: "Сайты",
    summary: {
      ru: "Лендинг свадебного агентства с мобильной адаптацией.",
      en: "A responsive landing page for a wedding agency.",
    },
    description: {
      ru:
        "Для свадебного агентства «Tête-à-tête» разработаны структура лендинга, прототип, десктопный дизайн и мобильная версия. На странице представлены портфолио, этапы подготовки, тарифы, команда, ответы на вопросы и форма заявки. В оформлении использованы молочный и бордовый цвета, шрифты Anticva и Inter, чёрно-белые фотографии и бумажные коллажи. В мобильной версии таблица тарифов заменена отдельными карточками.",
      en:
        "For the wedding agency Tête-à-tête, I developed the landing page structure, prototype, desktop design and mobile layout. The page includes a portfolio, planning process, packages, team, FAQs and an enquiry form. The visual design combines cream and burgundy, Anticva and Inter typefaces, black-and-white photography and paper collages. On mobile, individual cards replace the pricing table.",
    },
    services: [
      { ru: "Структура лендинга", en: "Landing page structure" },
      { ru: "Прототипирование", en: "Prototyping" },
      { ru: "Визуальная концепция", en: "Visual concept" },
      { ru: "Веб-дизайн", en: "Web design" },
      { ru: "Мобильная адаптация", en: "Mobile design" },
    ],
    cover: {
      src: "/images/projects/tete-a-tete/cover.webp",
      alt: {
        ru:
          "Лендинг Tête-à-tête: свадебный коллаж с чёрно-белыми фотографиями пары, бумажными фактурами и бордовыми акцентами",
        en:
          "Tête-à-tête landing page with a wedding collage of black-and-white photos of the couple, paper textures and burgundy accents",
      },
      width: 1254,
      height: 1254,
    },
    gallery: [
      {
        src: "/images/projects/tete-a-tete/mockup.webp",
        alt: {
          ru:
            "Tête-à-tête: первый экран лендинга на ноутбуке и свадебные фотографии в оформлении киноплёнки",
          en:
            "Tête-à-tête landing page hero on a laptop beside wedding photographs arranged in a film strip",
        },
        width: 1749,
        height: 872,
      },
      {
        src: "/images/projects/tete-a-tete/prototype.webp",
        alt: {
          ru:
            "Палитра Tête-à-tête и прототип лендинга с преимуществами, портфолио, этапами работы и тарифами",
          en:
            "Tête-à-tête palette and landing page prototype showing benefits, portfolio, planning stages and packages",
        },
        width: 1749,
        height: 1820,
      },
      {
        src: "/images/projects/tete-a-tete/desktop-mobile.webp",
        alt: {
          ru:
            "Десктопный дизайн и мобильная адаптация Tête-à-tête: первый экран, портфолио, этапы подготовки, карточки тарифов, команда, FAQ и форма заявки",
          en:
            "Desktop and mobile designs for Tête-à-tête, showing the hero, portfolio, planning stages, package cards, team, FAQs and enquiry form",
        },
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
    title: { ru: "Постеры — типографика и контраст", en: "Posters — typography and contrast" },
    category: "Афиши",
    summary: {
      ru: "Пять постеров: от сдержанного монохрома до насыщенных цветовых сочетаний.",
      en: "Five posters, from restrained monochrome to bold colour combinations.",
    },
    description: {
      ru:
        "Серия постеров на разные темы, объединённых выразительной типографикой и работой с контрастом. Крупные заголовки, фотографии и фактуры формируют характер каждой работы — от сдержанного монохрома до насыщенных цветовых сочетаний. В серии — горный пейзаж, абстрактная графика, мода, киновечер и «Trust the process». Вертикальный набор, сочетание шрифтов, работа с масштабом и зернистые текстуры связывают разные сюжеты в одну коллекцию.",
      en:
        "A series of posters on different subjects, connected by expressive type and strong contrasts. Large headlines, photographs and textures give each piece its own character, from restrained monochrome to vivid colour. The series spans a mountain landscape, abstract graphics, fashion, a film night and “Trust the process”. Vertical lettering, type pairings, shifts in scale and grainy textures bring them together.",
    },
    services: [
      { ru: "Дизайн постеров", en: "Poster design" },
      { ru: "Типографика", en: "Typography" },
      { ru: "Работа с цветом", en: "Colour studies" },
      { ru: "Коллажирование", en: "Collage" },
    ],
    cover: {
      src: "/images/projects/poster-studies/cover.webp",
      alt: {
        ru:
          "Коллаж серии постеров: оранжевый постер с синей типографикой, монохромные горы и розовый пион на синем фоне",
        en:
          "A collage of posters with blue type on orange, monochrome mountains and a pink peony against blue",
      },
      width: 1024,
      height: 1024,
    },
    gallery: [
      {
        src: "/images/projects/poster-studies/mountain.webp",
        title: { ru: "Mountain", en: "Mountain" },
        alt: {
          ru: "Монохромный постер Mountain со снежной вершиной и крупным вертикальным заголовком",
          en: "Monochrome Mountain poster with a snowy peak and a large vertical headline",
        },
        width: 1306,
        height: 1848,
      },
      {
        src: "/images/projects/poster-studies/group.webp",
        title: { ru: "Group", en: "Group" },
        alt: {
          ru:
            "Оранжевый постер Group с насыщенной синей типографикой и зернистым цветным изображением",
          en: "Orange Group poster with deep blue type and a grainy colour image",
        },
        width: 1413,
        height: 2000,
      },
      {
        src: "/images/projects/poster-studies/fashion.webp",
        title: { ru: "Fashion & Style", en: "Fashion & Style" },
        alt: {
          ru: "Постер Fashion & Style: модный портрет, оранжевый фон и крупная чёрная типографика",
          en:
            "Fashion & Style poster with a fashion portrait, orange background and large black type",
        },
        width: 1413,
        height: 2000,
      },
      {
        src: "/images/projects/poster-studies/cinema.webp",
        title: { ru: "Киновечер", en: "Film night" },
        alt: {
          ru:
            "Постер киновечера с красным вертикальным заголовком, архивным фото зрителей в 3D-очках и синими акцентами",
          en:
            "Film night poster with a red vertical headline, a vintage photo of an audience wearing 3D glasses, and blue accents",
        },
        width: 1306,
        height: 1848,
      },
      {
        src: "/images/projects/poster-studies/trust-the-process.webp",
        title: { ru: "Trust the process", en: "Trust the process" },
        alt: {
          ru:
            "Постер Trust the process с розовым пионом, оливковой типографикой и фактурным светлым фоном",
          en:
            "Trust the process poster with a pink peony, olive typography and a textured pale background",
        },
        width: 1413,
        height: 2000,
      },
    ],
    layout: "portrait",
    background: "#3021d9",
  },
  {
    slug: "forma",
    title: {
      ru: "FORMA — мебель для практики и жизни",
      en: "FORMA — furniture for practice and everyday life",
    },
    url: "https://www.behance.net/gallery/257577373/FORMA-E-COMMERCE-Website-Design-Concept",
    category: "Сайты",
    summary: {
      ru: "Интернет-магазин мебели для йоги, медитации и дома.",
      en: "An online furniture store for yoga, meditation and home.",
    },
    description: {
      ru:
        "Интернет-магазин FORMA объединяет мебель для йоги, медитации и жизни за пределами практики. Это взгляд на домашнее пространство, в котором движение и отдых одинаково важны.",
      en:
        "The FORMA online store brings together furniture for yoga, meditation and everyday life. It imagines a home where movement and rest matter equally.",
    },
    services: [
      { ru: "Веб-дизайн", en: "Web design" },
      { ru: "Дизайн интернет-магазина", en: "E-commerce design" },
      { ru: "Мобильная адаптация", en: "Mobile design" },
    ],
    cover: {
      src: "/images/projects/forma/cover.webp",
      alt: {
        ru:
          "FORMA: скульптурное кресло из дерева и металла на фоне крупной терракотовой типографики в светлом интерьере",
        en:
          "FORMA: a sculptural wood and metal chair against oversized terracotta lettering in a light interior",
      },
      width: 1600,
      height: 945,
    },
    gallery: [
      {
        src: "/images/projects/forma/style-and-homepage.webp",
        alt: {
          ru:
            "Цветовая палитра и типографика FORMA, главная страница магазина на компьютере и смартфоне",
          en:
            "FORMA’s colour palette and typography, with the store homepage on desktop and mobile",
        },
        width: 1920,
        height: 3560,
      },
      {
        src: "/images/projects/forma/materials-details.webp",
        alt: {
          ru:
            "Детали главной страницы FORMA и мобильная адаптация: материалы мебели, блок о бренде, вопросы, отзывы и форма заявки",
          en:
            "FORMA homepage details and mobile layout, including furniture materials, the brand story, FAQs, reviews and the enquiry form",
        },
        width: 1920,
        height: 3560,
      },
      {
        src: "/images/projects/forma/catalog-product.webp",
        alt: {
          ru:
            "Каталог FORMA с фильтрами и карточками мебели, мобильная версия каталога и быстрый просмотр голубого кресла",
          en:
            "FORMA product catalogue with filters and furniture cards, the mobile catalogue and a quick view of the blue chair",
        },
        width: 1920,
        height: 3560,
      },
      {
        src: "/images/projects/forma/checkout-account.webp",
        alt: {
          ru:
            "Сайт FORMA на ноутбуке, корзина, подтверждение оплаты, личный кабинет, избранное и страница 404",
          en:
            "FORMA on a laptop, alongside the cart, payment confirmation, account, favourites and 404 page",
        },
        width: 1920,
        height: 3561,
      },
    ],
    galleryLayout: "continuous",
    layout: "medium",
    background: "#faf3ed",
  },
  {
    slug: "vibe-coding-banners",
    title: { ru: "Вайб-кодинг — баннеры", en: "Vibe coding — banners" },
    category: "Баннеры",
    summary: {
      ru: "Продвижение онлайн-школы вайб-кодинга во ВКонтакте и Telegram.",
      en: "VK and Telegram ads for an online vibe coding school.",
    },
    description: {
      ru:
        "Баннеры для продвижения онлайн-школы вайб-кодинга во ВКонтакте и Telegram. Задача — заинтересовать новичков и пригласить их на бесплатный урок. Крупные заголовки и заметные призывы к действию помогают быстро донести идею: начать создавать с AI можно без опыта программирования.",
      en:
        "A set of banners promoting an online vibe coding school on VK and Telegram. The goal was to catch beginners’ attention and invite them to a free lesson. Oversized headlines and clear calls to action get the idea across quickly: you can start building with AI without any coding experience.",
    },
    services: [
      { ru: "Дизайн баннеров", en: "Banner design" },
      { ru: "Дизайн для соцсетей", en: "Social media design" },
      { ru: "Типографика", en: "Typography" },
    ],
    cover: {
      src: "/images/projects/vibe-coding-banners/cover.webp",
      alt: {
        ru:
          "Коллаж шести баннеров онлайн-школы вайб-кодинга с яркими заголовками, роботизированными руками и приглашениями на бесплатный урок",
        en:
          "Collage of six ads for an online vibe coding school, featuring bold headlines, robotic hands and invitations to a free lesson",
      },
      width: 1254,
      height: 1254,
    },
    gallery: [
      {
        src: "/images/projects/vibe-coding-banners/try-vibe-coding.webp",
        title: { ru: "Попробуйте вайб-кодинг", en: "Try vibe coding" },
        alt: {
          ru:
            "Баннер «Попробуйте вайб-кодинг»: белая роботизированная рука с чипом, зелёная сетка и кнопка «Перейти к уроку»",
          en:
            "“Try vibe coding” banner with a white robotic hand holding a chip, a green grid and a button to open the lesson",
        },
        width: 1080,
        height: 1080,
      },
      {
        src: "/images/projects/vibe-coding-banners/code-without-code.webp",
        title: { ru: "Код без кода", en: "Code without coding" },
        alt: {
          ru:
            "Баннер «Код без кода» с белой и зелёной типографикой, хромированными фигурами и предложением начать обучение бесплатно",
          en:
            "“Code without coding” banner with white and green type, chrome forms and an invitation to start learning for free",
        },
        width: 1080,
        height: 1080,
      },
      {
        src: "/images/projects/vibe-coding-banners/first-ai-project.webp",
        title: { ru: "Первый проект через AI", en: "Your first AI project" },
        alt: {
          ru:
            "Баннер «Сделайте свой первый проект через AI за 7 дней»: оранжевая лента на чёрном фоне и приглашение на бесплатный урок",
          en:
            "“Build your first AI project in 7 days” banner with an orange ribbon on black and an invitation to a free lesson",
        },
        width: 1080,
        height: 1080,
      },
      {
        src: "/images/projects/vibe-coding-banners/learn-ai-coding.webp",
        title: { ru: "Научим писать код через AI", en: "Learn to code with AI" },
        alt: {
          ru:
            "Фиолетовый баннер «Научим писать код через AI» с руками человека и робота, без опыта и сложной теории",
          en:
            "Purple “Learn to code with AI” banner with human and robotic hands, aimed at beginners without coding experience",
        },
        width: 1080,
        height: 1080,
      },
      {
        src: "/images/projects/vibe-coding-banners/create-with-ai.webp",
        title: { ru: "Создавайте с помощью AI", en: "Build with AI" },
        alt: {
          ru:
            "Баннер «Создавайте с помощью AI» с ветвящейся схемой: боты, автоматизации, сайты и приложения",
          en:
            "“Build with AI” banner with a branching diagram of bots, automations, websites and apps",
        },
        width: 1080,
        height: 1080,
      },
      {
        src: "/images/projects/vibe-coding-banners/start-in-it.webp",
        title: { ru: "Хотите в IT?", en: "Want to work in tech?" },
        alt: {
          ru:
            "Баннер «Хотите в IT, но не умеете программировать?» с жёлто-оранжевой пушистой формой и призывом «Начните бесплатно»",
          en:
            "“Want to work in tech but can’t code?” banner with a fuzzy yellow-orange shape and a “Start for free” call to action",
        },
        width: 1080,
        height: 1080,
      },
    ],
    galleryLayout: "carousel",
    layout: "medium",
    background: "#141414",
  },
]

const localizeProject = (project: Project<ProjectText>, language: Language): Project => ({
  ...project,
  title: project.title[language],
  summary: project.summary[language],
  description: project.description[language],
  services: project.services.map((service) => service[language]),
  cover: { ...project.cover, alt: project.cover.alt[language] },
  gallery: project.gallery.map(({ alt, title, ...image }) => ({
    ...image,
    alt: alt[language],
    title: title?.[language],
  })),
})

export const getProjects = (language: Language) =>
  projects.map((project) => localizeProject(project, language))

export const getProject = (slug: string, language: Language) => {
  const project = projects.find((project) => project.slug === slug)
  return project && localizeProject(project, language)
}

export const getNextProject = (slug: string, language: Language) => {
  const index = projects.findIndex((project) => project.slug === slug)
  return localizeProject(projects[(index + 1) % projects.length], language)
}
