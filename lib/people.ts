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
  "요한 슈트라우스 2세": "J. 슈트라우스 2세",
  "리하르트 슈트라우스": "R. 슈트라우스",
  "피터르 브뤼헐 (아버지)": "브뤼헐",
  "한스 홀바인 (아들)": "홀바인",
  "루카스 크라나흐 (아버지)": "크라나흐",
  "레이프 본 윌리엄스": "본 윌리엄스",
  "안토니 반 데이크": "반 데이크",
  "얀 반 에이크": "반 에이크",
  "엘 그레코": "엘 그레코",
  "렘브란트 판 레인": "렘브란트",
  "요한 제바스티안 바흐": "바흐",
};

export function shortName(full: string) {
  if (SHORT[full]) return SHORT[full];
  const parts = full.split(" ");
  return parts[parts.length - 1];
}
