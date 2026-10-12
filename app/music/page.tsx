import { inCountry } from "@/data/countries";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PersonCard, Section } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { CountryJump } from "@/components/CountryJump";
import { COUNTRIES, eraName } from "@/data/countries";
import { composers } from "@/data/music";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

const description = `바흐, 모차르트, 베토벤, 쇼팽, 차이콥스키, 베르디, 드뷔시, 그리고 비틀스와 퀸까지. 유럽 음악가 ${composers.length}명의 시대, 삶, 대표곡, 듣는 포인트.`;
export const metadata = pageMetadata({ title: "음악관", description, path: "/music" });

export default function MusicPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "음악관", path: "/music" }]), itemListLd("음악관", "/music", composers.map((c) => ({ name: c.name, path: `/music/${c.slug}` })))])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "음악관" }]} />
      <PageHead kicker="MUSIC HALL" title="음악관" lead={`유럽 ${COUNTRIES.length}개 나라 ${composers.length}명. 한 사람씩, 무엇부터 들으면 좋은지 적었습니다. 영상은 직접 넣지 않고 유튜브 검색으로 안내합니다. 두 나라에서 활동한 사람은 양쪽에 모두 나옵니다.`} />
      <CountryJump />
      {COUNTRIES.map((c) => (
        <Section key={c.code} id={c.code} title={`${c.flag} ${c.name}`} en={c.en}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {composers
              .filter((x) => inCountry(x, c.code))
              .map((x) => (
                <PersonCard key={x.slug} href={`/music/${x.slug}`} name={x.name} en={x.en} years={x.years} sub={x.eraNote} badge={eraName(x.era)} />
              ))}
          </div>
        </Section>
      ))}
    </div>
  );
}
