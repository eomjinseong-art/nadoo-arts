import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EuropeMap } from "@/components/EuropeMap";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { painters } from "@/data/art";
import { COUNTRIES, inCountry } from "@/data/countries";
import map from "@/data/europe-map.json";
import { composers } from "@/data/music";
import { shortName } from "@/lib/people";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

const description = "유럽 지도에서 나라를 눌러 보세요. 이탈리아·프랑스·독일·오스트리아·스페인·영국·러시아 등 18개 나라의 작곡가와 화가가 나옵니다.";
export const metadata = pageMetadata({ title: "유럽 예술 지도", description, path: "/map" });

export default function MapPage() {
  const countries = COUNTRIES.map((c) => ({
    code: c.code,
    name: c.name,
    flag: c.flag,
    music: composers.filter((x) => inCountry(x, c.code)).map((x) => ({ slug: x.slug, name: shortName(x.name), years: x.years })),
    art: painters.filter((x) => inCountry(x, c.code)).map((x) => ({ slug: x.slug, name: shortName(x.name), years: x.years })),
  }));
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "지도", path: "/map" }])])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "지도" }]} />
      <PageHead kicker="MAP OF EUROPE" title="유럽 예술 지도" lead="나라를 누르면 그 나라의 작곡가와 화가가 나옵니다. 활동한 나라가 둘 이상인 사람(쇼팽, 고흐, 피카소 등)은 양쪽에 모두 나옵니다." />
      <div className="mt-8">
        <EuropeMap w={map.w} h={map.h} shapes={map.shapes} labels={map.labels} countries={countries} />
      </div>
    </div>
  );
}
