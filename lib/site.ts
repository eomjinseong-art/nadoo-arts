export const SITE_NAME = "나두예술";
export const SITE_NAME_EN = "Nadoo Arts";
export const SITE_MARK = "藝";
export const SITE_TAGLINE = "이탈리아·프랑스의 음악과 그림을, 쉬운 한국어로";
export const SITE_SUB =
  "몬테베르디부터 모리코네까지, 조토부터 피카소까지. 누가 언제 무엇을 만들었고, 어디에 걸려 있고, 어떻게 듣고 보면 좋은지 짧게 적습니다.";
export const BRAND_LINE = "나두 — 나의 모든 일상을 AI와 함께";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nadoo-arts.vercel.app";

export const SISTER_SITES_LABEL = "나두 역사·신화";

export const MYTH_URL = "https://nadoo-myth.vercel.app";
export const ILIAD_URL = "https://iliad-stories.vercel.app";
export const GREECE_URL = "https://greece-stories.vercel.app";
export const ROME_URL = "https://rome-stories.vercel.app";
export const GERMANIC_URL = "https://germanic-stories.vercel.app";
export const VIKING_URL = "https://viking-stories.vercel.app";
export const EGYPT_URL = "https://egypt-stories.vercel.app";
export const PERSIA_URL = "https://persia-stories.vercel.app";
export const CHOSEN_URL = "https://the-chosen-korean.vercel.app";
export const PHILOSOPHY_URL = "https://philosophy-stories.vercel.app";
export const KOREA_URL = "https://korea-stories.vercel.app";
export const WORLD_URL = "https://nadoo-world.vercel.app";
export const TIMELINE_URL = "https://nadoo-timeline.vercel.app";
export const HUB_URL = "https://tinalinkeom.vercel.app";
export const LANG_URL = "https://language-study-snowy.vercel.app";

/** 나두 사이트 공통 순서. 나두예술은 나두세계 다음 자리. */
export const SISTER_SITES = [
  { href: MYTH_URL, label: "나두신화", en: "Myth" },
  { href: ILIAD_URL, label: "일리아스이야기", en: "Iliad" },
  { href: GREECE_URL, label: "그리스이야기", en: "Greece" },
  { href: ROME_URL, label: "로마이야기", en: "Rome" },
  { href: GERMANIC_URL, label: "게르만이야기", en: "Germanic" },
  { href: VIKING_URL, label: "바이킹이야기", en: "Vikings" },
  { href: EGYPT_URL, label: "이집트이야기", en: "Egypt" },
  { href: PERSIA_URL, label: "페르시아이야기", en: "Persia" },
  { href: CHOSEN_URL, label: "더 초즌 · 성경", en: "The Chosen · Bible" },
  { href: PHILOSOPHY_URL, label: "철학이야기", en: "Philosophy" },
  { href: KOREA_URL, label: "대한민국이야기", en: "Korea" },
  { href: WORLD_URL, label: "나두세계", en: "World" },
  { href: TIMELINE_URL, label: "나두연표", en: "Timeline" },
  { href: HUB_URL, label: "나두 허브", en: "Nadoo Hub" },
] as const;

export const COUPANG_URL = "https://link.coupang.com/a/hsdzLh1vB6";

export const NAV = [
  { href: "/music", label: "음악관" },
  { href: "/art", label: "미술관" },
  { href: "/timeline", label: "연표" },
  { href: "/relations", label: "관계도" },
  { href: "/quiz", label: "퀴즈" },
  { href: "/films", label: "영화" },
  { href: "/countries", label: "나라별" },
  { href: "/links", label: "더 보기" },
  { href: "/sources", label: "출처" },
] as const;
