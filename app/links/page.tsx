import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHead } from "@/components/PageHead";
import { GREECE_URL, LANG_URL, MYTH_URL, ROME_URL, TIMELINE_URL, WORLD_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "더 보기: 나두 사이트와 함께", description: "르네상스 화가가 그린 로마와 신화, 이탈리아·프랑스 나라 정보, 이탈리아어·프랑스어 공부, 세계사 연표까지. 나두의 다른 사이트로 이어 읽기.", path: "/links" });

const GROUPS = [
  {
    title: "로마와 바티칸",
    en: "Rome · Renaissance",
    items: [
      { href: ROME_URL, label: "로마이야기", desc: "르네상스 화가들이 즐겨 그린 고대 로마. 라파엘로·미켈란젤로가 일한 로마의 뿌리." },
      { href: `${ROME_URL}/myth-links`, label: "로마이야기 · 신화와 이어 읽기", desc: "푸생의 ‘사비니 여인의 납치’ 같은 로마 건국 이야기의 배경." },
    ],
  },
  {
    title: "신화 그림",
    en: "Myth paintings",
    items: [
      { href: `${MYTH_URL}/gods/aphrodite`, label: "나두신화 · 아프로디테", desc: "보티첼리 ‘비너스의 탄생’의 주인공." },
      { href: `${MYTH_URL}/gods/dionysos`, label: "나두신화 · 디오니소스(바쿠스)", desc: "티치아노와 카라바조의 ‘바쿠스’." },
      { href: `${MYTH_URL}/in-media`, label: "나두신화 · 그림과 영화 속 신화", desc: "명화 속 신화 장면 모음." },
      { href: GREECE_URL, label: "그리스이야기", desc: "아테네 학당의 철학자들, 다비드가 그린 고대 영웅들의 무대." },
      { href: `${GREECE_URL}/myth-links`, label: "그리스이야기 · 신화와 이어 읽기", desc: "신화와 역사의 경계." },
    ],
  },
  {
    title: "나라 정보",
    en: "Countries",
    items: [
      { href: `${WORLD_URL}/countries/it`, label: "나두세계 · 이탈리아", desc: "수도, 국기, 언어, 지도." },
      { href: `${WORLD_URL}/countries/fr`, label: "나두세계 · 프랑스", desc: "수도, 국기, 언어, 지도." },
    ],
  },
  {
    title: "언어 공부",
    en: "Italian · French",
    items: [{ href: LANG_URL, label: "나두랭귀지", desc: "오페라 가사가 궁금하면 이탈리아어부터. AI 튜터와 카드로 공부합니다." }],
  },
  {
    title: "연표",
    en: "Timeline",
    items: [{ href: TIMELINE_URL, label: "나두연표", desc: "세계사와 한반도, 같은 해에 무슨 일이 있었는지." }],
  },
];

export default function LinksPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "더 보기" }]} />
      <PageHead kicker="MORE" title="더 보기" lead="그림 속 이야기는 신화와 역사에서 왔습니다. 나두의 다른 사이트에서 이어 읽어 보세요." />
      <div className="mt-8 space-y-8">
        {GROUPS.map((g) => (
          <section key={g.title}>
            <h2 className="font-serif text-xl text-ink">{g.title} <span className="font-sans text-sm font-normal text-muted">/ {g.en}</span></h2>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {g.items.map((it) => (
                <li key={it.href}>
                  <a href={it.href} target="_blank" rel="noopener noreferrer" className="block h-full rounded-lg border border-line bg-card p-4 hover:border-terra">
                    <p className="text-laurel">{it.label} ↗</p>
                    <p className="mt-1 text-sm leading-6 text-muted">{it.desc}</p>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
