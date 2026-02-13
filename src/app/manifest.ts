import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Battery Power Box",
    short_name: "BPB",
    description: "Bateriová úložiště energie pro rybáře",
    start_url: "/",
    display: "standalone",
    background_color: "#e6fff0",
    theme_color: "#73f4b0",
    icons: [
      {
        src: "/bpb-logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
