export const categories = ["Все работы", "Сайты", "Баннеры", "Афиши", "Свадебная полиграфия"] as const;
export type Category = (typeof categories)[number];

export type Project = {
  slug: string;
  title: string;
  category: Exclude<Category, "Все работы">;
  year: string;
  summary: string;
  description: string;
  services: string[];
  cover: { src: string; alt: string; width: number; height: number };
  gallery: { src: string; alt: string; width: number; height: number }[];
  /** An optional real project URL. Omit it when there is no public link. */
  url?: string;
  isDemo?: boolean;
  layout: "wide" | "portrait" | "medium" | "offset" | "last";
  background: string;
};

/**
 * Add projects here. Place images in public/images/projects/.
 * Keep slugs unique and stable: these are the search-friendly project URLs.
 * Replace demo content and set isDemo: false when publishing real work.
 */
export const projects: Project[] = [
  {
    slug: "orto-studio",
    title: "ORTO — ближе к природе",
    category: "Сайты",
    year: "2026",
    summary: "Цифровое пространство для студии озеленения.",
    description: "Демонстрационная концепция сайта студии озеленения. Природная палитра, свободная композиция и крупная типографика создают спокойный ритм. Здесь позже появятся задача клиента, процесс работы и результат вашего настоящего проекта.",
    services: ["Арт-дирекшн", "Веб-дизайн", "UI/UX"],
    cover: { src: "/images/projects/orto.svg", alt: "Концепция сайта ORTO: оливковая палитра, растения и крупная типографика", width: 1200, height: 860 },
    gallery: [{ src: "/images/projects/orto-detail.svg", alt: "Детали концепции ORTO: карточки растений и композиция каталога", width: 1200, height: 860 }],
    isDemo: true,
    layout: "wide",
    background: "#dce0d0",
  },
  {
    slug: "forma-poster",
    title: "Форма звука",
    category: "Афиши",
    year: "2026",
    summary: "Типографический эксперимент о музыке и движении.",
    description: "Демонстрационная серия афиш для вымышленного музыкального события. Контрастная типографика и объёмная форма передают ощущение звука. Макет показывает, как в портфолио могут выглядеть афиши и эксперименты с графикой.",
    services: ["Графический дизайн", "Типографика", "Афиша"],
    cover: { src: "/images/projects/forma.svg", alt: "Лавандовая музыкальная афиша «Форма звука» с лаймовой объёмной лентой", width: 800, height: 1040 },
    gallery: [{ src: "/images/projects/forma-detail.svg", alt: "Парные афиши «Форма звука» в лавандовом и лаймовом цветах", width: 1200, height: 860 }],
    isDemo: true,
    layout: "portrait",
    background: "#c0aee9",
  },
  {
    slug: "anna-and-mark",
    title: "Анна & Марк",
    category: "Свадебная полиграфия",
    year: "2026",
    summary: "Маленькая история большого дня.",
    description: "Демонстрационная концепция свадебной полиграфии: приглашение, карточка гостя и памятная открытка. Мягкая бумажная фактура, сдержанная палитра и цветочные линии объединяют детали в одну нежную историю.",
    services: ["Приглашения", "Карточки гостей", "Полиграфия"],
    cover: { src: "/images/projects/wedding.svg", alt: "Кремовые свадебные приглашения Анны и Марка с бордовой типографикой", width: 1100, height: 860 },
    gallery: [{ src: "/images/projects/wedding-detail.svg", alt: "Свадебная полиграфия крупным планом: приглашение и карточка гостя", width: 1200, height: 860 }],
    isDemo: true,
    layout: "medium",
    background: "#e8dcd2",
  },
  {
    slug: "lumi-campaign",
    title: "LUMI — немного солнца",
    category: "Баннеры",
    year: "2026",
    summary: "Визуальная кампания с тёплым настроением.",
    description: "Демонстрационная кампания для вымышленного косметического бренда. Солнечная палитра, выразительный продукт и чистая композиция работают в нескольких форматах — от широкого баннера до вертикального постера.",
    services: ["Баннеры", "Визуальная концепция", "Дизайн для соцсетей"],
    cover: { src: "/images/projects/lumi.svg", alt: "Солнечный баннер косметического бренда LUMI в абрикосовых тонах", width: 1200, height: 860 },
    gallery: [{ src: "/images/projects/lumi-detail.svg", alt: "Вертикальные рекламные баннеры LUMI с продуктом и типографикой", width: 1200, height: 860 }],
    isDemo: true,
    layout: "offset",
    background: "#f0b58d",
  },
  {
    slug: "objects-gallery",
    title: "Объекты. Вне времени",
    category: "Сайты",
    year: "2026",
    summary: "Сайт-галерея о предметах и их характере.",
    description: "Демонстрационная концепция сайта предметного дизайна. Редакционная подача, монохромная типографика и акцент на форме предметов. Пример подачи сайта в сетке проектов и в подробном просмотре.",
    services: ["Концепция", "Веб-дизайн", "Арт-дирекшн"],
    cover: { src: "/images/projects/objects.svg", alt: "Минималистичный сайт галереи «Объекты» с хромированным предметом", width: 1200, height: 860 },
    gallery: [{ src: "/images/projects/objects-detail.svg", alt: "Внутренний экран сайта «Объекты»: коллекция предметов дизайна", width: 1200, height: 860 }],
    isDemo: true,
    layout: "last",
    background: "#d2d8e5",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
