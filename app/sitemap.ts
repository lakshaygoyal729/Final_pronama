import type { MetadataRoute } from "next";

const baseUrl = "https://pronama.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/services",
    "/certifications",
    "/contact",
    "/faq",
    "/privacy-policy",
    "/terms",
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
