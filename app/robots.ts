import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://dev-portfolio-two-lovat-95.vercel.app/sitemap.xml",
  };
}