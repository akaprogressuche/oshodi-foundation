import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Oshodi Family Foundation",
    short_name: "Oshodi",
    description:
      "A community-centered nonprofit strengthening families, addressing food insecurity, and expanding access to education and leadership opportunities.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#e11d48",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
