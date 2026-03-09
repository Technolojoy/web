import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://techjoy.vercel.app";
  const routes = [
    "",
    "/how-it-works",
    "/recycle-devices",
    "/phone-buyback",
    "/corporate-partnerships",
    "/donate",
    "/rewards",
    "/impact",
    "/about",
    "/blog",
    "/contact",
    "/content-export"
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7
  }));
}
