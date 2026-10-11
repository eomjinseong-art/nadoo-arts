import { painters } from "@/data/art";
import { composers } from "@/data/music";
import { EXTRA_PEOPLE } from "@/data/relations";

export function personInfo(id: string): { name: string; href?: string; lane: "music" | "art" | "extra"; note?: string } {
  const c = composers.find((x) => x.slug === id);
  if (c) return { name: shortName(c.name), href: `/music/${c.slug}`, lane: "music" };
  const p = painters.find((x) => x.slug === id);
  if (p) return { name: shortName(p.name), href: `/art/${p.slug}`, lane: "art" };
  const e = EXTRA_PEOPLE[id];
  return { name: e?.name ?? id, lane: "extra", note: e?.note };
}

const SHORT: Record<string, string> = {
  "레오나르도 다빈치": "다빈치",
  "미켈란젤로 부오나로티": "미켈란젤로",
  "라파엘로 산치오": "라파엘로",
  "티치아노 베첼리오": "티치아노",
  "조토 디 본도네": "조토",
  "빈센트 반 고흐": "고흐",
  "도메니코 스카를라티": "D. 스카를라티",
  "에디트 피아프": "피아프",
};

export function shortName(full: string) {
  if (SHORT[full]) return SHORT[full];
  const parts = full.split(" ");
  return parts[parts.length - 1];
}
