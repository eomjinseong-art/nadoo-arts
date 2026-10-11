import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { RelationList, RelationMap } from "@/components/RelationMap";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

const description = "베로키오 → 다빈치, 다빈치 vs 미켈란젤로, 모네와 르누아르, 생상스 → 포레 → 라벨. 예술가들의 스승·라이벌·친구·가족 관계도.";
export const metadata = pageMetadata({ title: "관계도: 스승, 라이벌, 친구", description, path: "/relations" });

export default function RelationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "관계도", path: "/relations" }])])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "관계도" }]} />
      <PageHead kicker="RELATIONS" title="관계도" lead="선의 색과 모양이 관계의 종류입니다. 화살표는 배움과 영향의 방향. 굵은 이름을 누르면 그 사람의 글로 갑니다. 선 위에 마우스를 올리면 설명이 나옵니다." />
      <div className="mt-6">
        <RelationMap />
      </div>
      <Section title="관계 하나씩 읽기" en="All relations">
        <RelationList />
      </Section>
    </div>
  );
}
