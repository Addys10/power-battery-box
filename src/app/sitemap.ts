import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://batterypowerbox.com";

  const routes = [
    "",
    "/vize",
    "/battery-boxy",
    "/powerbanky",
    "/nabijecky",
    "/kontakt",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
