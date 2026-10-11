import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { painters } from "@/data/art";
import { composers } from "@/data/music";
import { PERIODS } from "@/data/timeline";
import { shortName } from "@/lib/people";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { TIMELINE_URL } from "@/lib/site";

const description = "르네상스, 바로크, 고전, 낭만, 인상주의, 근현대. 음악과 미술을 나란히 놓고, 같은 시기 한반도에서는 무슨 일이 있었는지 함께 봅니다.";
export const metadata = pageMetadata({ title: "연표: 음악과 미술, 그때 한반도는?", description, path: "/timeline" });

export default function TimelinePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "연표", path: "/timeline" }])])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "연표" }]} />
      <PageHead kicker="TIMELINE" title="연표" lead="시대 구분은 대략입니다. 한 사람이 두 시대에 걸치기도 합니다. 왼쪽은 음악, 가운데는 미술, 오른쪽은 같은 시기의 한반도." />
      <ol className="mt-8 space-y-8">
        {PERIODS.map((p) => {
          const ms = composers.filter((c) => c.era === p.id);
          const as = painters.filter((a) => a.era === p.id);
          return (
            <li key={p.id} id={p.id} className="rounded-lg border border-line bg-card p-5">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h2 className="font-serif text-2xl text-ink">{p.name}</h2>
                <span className="text-xs tracking-[0.16em] text-terra">{p.en.toUpperCase()}</span>
                <span className="text-sm text-muted">{p.range}</span>
              </div>
              <p className="mt-2 text-sm leading-7 text-ink">{p.summary}</p>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div className="rounded-md border border-[#3f6fe0]/30 bg-[#e8eefc]/50 p-3">
                  <p className="text-xs font-semibold text-[#3f6fe0]">♪ 음악 Music</p>
                  <p className="mt-1 text-sm leading-6 text-ink">{p.music}</p>
                  <ul className="mt-2 flex flex-wrap gap-2 text-xs">
                    {ms.map((c) => (
                      <li key={c.slug}><Link href={`/music/${c.slug}`} className="rounded-full border border-line bg-bg px-2 py-0.5 hover:text-terra">{shortName(c.name)} {c.years.split("–")[0]}</Link></li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-md border border-terra/30 bg-[#f6e7e1]/50 p-3">
                  <p className="text-xs font-semibold text-terra">🖼 미술 Art</p>
                  <p className="mt-1 text-sm leading-6 text-ink">{p.art}</p>
                  <ul className="mt-2 flex flex-wrap gap-2 text-xs">
                    {as.map((a) => (
                      <li key={a.slug}><Link href={`/art/${a.slug}`} className="rounded-full border border-line bg-bg px-2 py-0.5 hover:text-terra">{shortName(a.name)} {a.years.split("–")[0].replace("년 무렵", "")}</Link></li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-md border border-laurel/30 bg-stone/60 p-3">
                  <p className="text-xs font-semibold text-laurel">그때 한반도는?</p>
                  <ul className="mt-1 space-y-1 text-sm leading-6 text-ink">
                    {p.korea.map((k) => (
                      <li key={k.year}><span className="mr-2 tabular-nums text-terra">{k.year}</span>{k.text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
      <p className="mt-6 text-sm text-muted">
        세계사와 한국사를 해마다 나란히 보려면{" "}
        <a href={TIMELINE_URL} target="_blank" rel="noopener noreferrer" className="text-laurel underline underline-offset-4">나두연표</a>로 가 보세요.
      </p>
    </div>
  );
}
