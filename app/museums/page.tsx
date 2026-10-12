import Link from "next/link";
import { ArtImage } from "@/components/ArtImage";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { countryByCode } from "@/data/countries";
import { MUSEUMS } from "@/data/museums";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

const description = "루브르, 우피치, 프라도, 런던 내셔널 갤러리, 에르미타주, 라이크스뮤지엄, 오르세, 빈 미술사박물관. 가면 꼭 봐야 할 그림과 걷는 순서.";
export const metadata = pageMetadata({ title: "미술관 투어: 유럽 8대 미술관", description, path: "/museums" });

export default function MuseumsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "미술관 투어", path: "/museums" }])])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "미술관 투어" }]} />
      <PageHead kicker="MUSEUM TOURS" title="미술관 투어" lead="유럽 8대 미술관에서 무엇을 먼저 볼까요. 꼭 볼 그림, 걷는 순서, 그리고 그 그림을 그린 사람 이야기로 이어집니다." />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {MUSEUMS.map((m) => {
          const cover = m.highlights.find((h) => h.img)?.img;
          const c = countryByCode(m.country)!;
          return (
            <Link key={m.slug} href={`/museums/${m.slug}`} className="group block overflow-hidden rounded-lg border border-line bg-card hover:border-terra">
              {cover ? <ArtImage id={cover} alt={`${m.name} 대표 소장품`} caption={false} className="rounded-none border-0" /> : null}
              <div className="p-4">
                <p className="text-[11px] tracking-[0.12em] text-terra">{c.flag} {m.city.toUpperCase()} · {m.en}</p>
                <p className="mt-1 font-serif text-xl text-ink group-hover:text-terra">{m.name}</p>
                <p className="mt-2 text-sm leading-6 text-muted">꼭 볼 그림 {m.highlights.length}점</p>
              </div>
            </Link>
          );
        })}
      </div>
      <p className="mt-8 text-xs text-muted">전시실 위치, 대여·보수로 인한 부재, 운영 시간은 자주 바뀝니다. 가기 전에 각 미술관 공식 누리집을 확인하세요.</p>
    </div>
  );
}
