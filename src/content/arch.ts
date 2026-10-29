import { getProject, projects } from "./projects";

/**
 * Eight slots in the first-screen carousel, in their travel order.
 * Change these covers independently of the project grid.
 */
export const arch = {
  durationSeconds: 16,
  items: [
    { id: "tete-a-tete", image: "/images/projects/tete-a-tete/arch.webp" },
    { id: "forma", image: projects[1].cover.src },
    { id: "wedding", image: projects[2].cover.src },
    { id: "lumi", image: projects[3].cover.src },
    { id: "midnight-session", image: getProject("midnight-session")!.cover.src },
    { id: "objects", image: projects[4].cover.src },
    { id: "forma-series", image: projects[1].gallery[0].src },
    { id: "invitations", image: projects[2].gallery[0].src },
  ],
};
