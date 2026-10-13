import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { painters } from "@/data/art";
import { FILMS } from "@/data/films";
import { composers } from "@/data/music";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { NadooHubFilmsLink } from "@/components/NadooHubLink";

const description = "라 비 앙 로즈, 반 고흐: 영원의 문에서, 러빙 빈센트, 카라바조, 고뇌와 환희, 볼레로, 엔니오… 유럽 예술가를 다룬 영화 목록. 아마데우스는 참고용.";
export const metadata = pageMetadata({ title: "예술가 영화", description, path: "/films" });

function who(slug: string) {
  const c = composers.find((x) => x.slug === slug);
  if (c) return { name: c.name, href: `/music/${c.slug}` };
  const p = painters.find((x) => x.slug === slug);
  if (p) return { name: p.name, href: `/art/${p.slug}` };
  return null;
}

export default function FilmsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "예술가 영화", path: "/films" }])])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "영화" }]} />
      <PageHead kicker="FILMS" title="예술가 영화" lead="실제로 있는 작품만 적었습니다. 연도·감독·수상은 확인했고, 한국어 제목은 국내 개봉명과 다를 수 있어 원제를 같이 적습니다. 영화는 극이라 사실과 다른 부분이 있습니다. 불법 영상은 안내하지 않습니다." />
      <p className="mt-6 text-sm text-muted">
        <a href="https://movie-checklist-sigma.vercel.app/?list=arts" target="_blank" rel="noopener noreferrer" className="text-laurel underline underline-offset-4">영화봇 체크리스트에서 이 영화들 체크하기 →</a>
      </p>
      <ul className="mt-8 space-y-4">
        {FILMS.map((f) => {
          const w = who(f.about);
          return (
            <li key={f.orig} className={`rounded-lg border bg-card p-4 ${f.context ? "border-dashed border-dusk/60" : "border-line"}`}>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <p className="font-serif text-xl text-ink">{f.title}</p>
                <span className="text-sm text-muted">{f.orig} · {f.year} · 감독 {f.director}</span>
                {f.context ? <span className="rounded-full border border-dusk px-2 py-0.5 text-[11px] text-dusk">참고 Context</span> : null}
              </div>
              <p className="mt-2 text-sm leading-7 text-ink">{f.note}</p>
              {w ? <Link href={w.href} className="mt-1 inline-block text-sm text-laurel underline underline-offset-4">{w.name} 글 보기 →</Link> : null}
            </li>
          );
        })}
      </ul>
      <NadooHubFilmsLink />
    </div>
  );
}
