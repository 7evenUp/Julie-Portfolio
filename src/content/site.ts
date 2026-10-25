/** Personal details live here. Missing contacts render as honest placeholders. */
export const site = {
  name: "Юлия",
  brand: "julia.design",
  role: "Веб- и графический дизайнер",
  headline: ["Делаю красиво.", "И со смыслом."],
  introduction:
    "Превращаю ваши идеи в сайты, визуальные истории и детали, которые хочется рассматривать.",
  about:
    "Мне нравится находить характер в каждом проекте. Вдумчивая типографика, выразительные образы и внимание к мелочам — так рождается дизайн, который чувствуется вашим.",
  portrait: "/images/demo-portrait.png",
  portraitIsDemo: true,
  email: "",
  telegram: "",
  behance: "",
  /** Put an MP4 in public/video/, then set e.g. /video/project-arch.mp4. */
  archVideo: "",
  /** Optional static cover for the video. The animated card arch is the fallback. */
  archPoster: "",
};

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");

export const siteUrl = (() => {
  if (!configuredUrl) return undefined;
  try {
    const url = new URL(configuredUrl);
    return ["http:", "https:"].includes(url.protocol) ? url.origin : undefined;
  } catch {
    return undefined;
  }
})();

export const description =
  "Портфолио Юлии — веб- и графического дизайнера. Дизайн сайтов, баннеров, афиш и свадебной полиграфии. Визуальные истории с характером и вниманием к деталям.";
