import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PersonCard, Section } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { COUNTRIES, eraName } from "@/data/countries";
import { composers } from "@/data/music";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

const description = "몬테베르디, 비발디, 베르디, 푸치니, 드뷔시, 라벨, 에디트 피아프까지. 이탈리아·프랑스 음악가 20명의 시대, 삶, 대표곡, 듣는 포인트.";
export const metadata = pageMetadata({ title: "음악관", description, path: "/music" });

export default function MusicPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "음악관", path: "/music" }]), itemListLd("음악관", "/music", composers.map((c) => ({ name: c.name, path: `/music/${c.slug}` })))])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "음악관" }]} />
      <PageHead kicker="MUSIC HALL" title="음악관" lead="오페라를 만든 나라 이탈리아, 궁정 음악과 인상주의·샹송의 나라 프랑스. 한 사람씩, 무엇부터 들으면 좋은지 적었습니다. 영상은 직접 넣지 않고 유튜브 검색으로 안내합니다." />
      {COUNTRIES.map((c) => (
        <Section key={c.code} title={`${c.flag} ${c.name}`} en={c.en}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {composers
              .filter((x) => x.country === c.code)
              .map((x) => (
                <PersonCard key={x.slug} href={`/music/${x.slug}`} name={x.name} en={x.en} years={x.years} sub={x.eraNote} badge={eraName(x.era)} />
              ))}
          </div>
        </Section>
      ))}
    </div>
  );
}
