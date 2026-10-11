import type { CountryCode } from "@/data/types";

/** 새 나라(독일 de, 스페인 es)는 여기와 types.ts의 CountryCode에 더하고, music/art 데이터에 country만 붙이면 됩니다. */
export const COUNTRIES: { code: CountryCode; name: string; en: string; flag: string; worldUrl: string; blurb: string }[] = [
  {
    code: "it",
    name: "이탈리아",
    en: "Italy",
    flag: "🇮🇹",
    worldUrl: "https://nadoo-world.vercel.app/countries/it",
    blurb: "르네상스의 고향이자 오페라가 태어난 나라. 피렌체·로마·베네치아·나폴리가 번갈아 예술의 중심이 됐습니다.",
  },
  {
    code: "fr",
    name: "프랑스",
    en: "France",
    flag: "🇫🇷",
    worldUrl: "https://nadoo-world.vercel.app/countries/fr",
    blurb: "왕의 궁정 음악에서 인상주의와 샹송까지. 19세기 이후 파리는 세계 화가들이 모여드는 도시가 됐습니다.",
  },
];

export const countryByCode = (code: string) => COUNTRIES.find((c) => c.code === code);

export const ERAS: { id: import("@/data/types").Era; name: string; en: string; range: string }[] = [
  { id: "renaissance", name: "르네상스", en: "Renaissance", range: "약 1300–1600" },
  { id: "baroque", name: "바로크", en: "Baroque", range: "약 1600–1750" },
  { id: "classical", name: "고전주의·신고전주의", en: "Classical", range: "약 1750–1820" },
  { id: "romantic", name: "낭만주의", en: "Romantic", range: "약 1820–1870" },
  { id: "impressionism", name: "인상주의", en: "Impressionism", range: "약 1870–1910" },
  { id: "modern", name: "근현대", en: "Modern", range: "약 1900–" },
];
export const eraName = (id: string) => ERAS.find((e) => e.id === id)?.name ?? id;
