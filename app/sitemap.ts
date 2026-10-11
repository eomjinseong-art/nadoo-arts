import type { MetadataRoute } from "next";
import { painters } from "@/data/art";
import { COUNTRIES } from "@/data/countries";
import { composers } from "@/data/music";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/music",
    "/art",
    "/timeline",
    "/relations",
    "/quiz",
    "/films",
    "/countries",
    "/links",
    "/sources",
    ...COUNTRIES.map((c) => `/countries/${c.code}`),
    ...composers.map((c) => `/music/${c.slug}`),
    ...painters.map((p) => `/art/${p.slug}`),
  ];
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
