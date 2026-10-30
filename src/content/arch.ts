import { getProject } from "./projects"

/**
 * Eight slots in the first-screen carousel, in their travel order.
 * Change these covers independently of the project grid.
 */
export const arch = {
  durationSeconds: 16,
  items: [
    { id: "tete-a-tete", image: "/images/projects/tete-a-tete/arch.webp" },
    { id: "forma", image: "/images/projects/forma/arch.webp" },
    {
      id: "wedding-stationery",
      image: "/images/projects/wedding-stationery/arch.webp",
    },
    {
      id: "vibe-coding-banners",
      image: "/images/projects/vibe-coding-banners/arch.webp",
    },
    {
      id: "midnight-session",
      image: "/images/projects/midnight-session/arch.webp",
    },
    { id: "objects", image: getProject("objects-gallery")!.cover.src },
    { id: "poster-studies", image: getProject("poster-studies")!.cover.src },
    {
      id: "invitations",
      image: "/images/projects/wedding-stationery/invitation-in-hand.webp",
    },
  ],
}
