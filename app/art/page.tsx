import Link from "next/link";
import { ArtImage } from "@/components/ArtImage";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { painters } from "@/data/art";
import { COUNTRIES, eraName } from "@/data/countries";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

const description = "조토, 보티첼리, 다빈치, 미켈란젤로, 카라바조부터 모네, 고흐, 마티스, 피카소까지. 대표작과 걸린 미술관, 보는 법을 쉬운 한국어로.";
export const metadata = pageMetadata({ title: "미술관", description, path: "/art" });

export default function ArtPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "미술관", path: "/art" }]), itemListLd("미술관", "/art", painters.map((p) => ({ name: p.name, path: `/art/${p.slug}` })))])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "미술관" }]} />
      <PageHead kicker="ART GALLERY" title="미술관" lead="그림 사진은 위키미디어 공용의 퍼블릭 도메인 파일만 씁니다. 저작권이 남은 작품(마티스, 피카소)은 링크로 안내합니다. 고흐와 피카소는 프랑스에서 활동한 화가로 함께 둡니다." />
      {COUNTRIES.map((c) => (
        <Section key={c.code} title={`${c.flag} ${c.name}`} en={c.en}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {painters
              .filter((p) => p.country === c.code)
              .map((p) => {
                const cover = p.works.find((w) => w.img);
                return (
                  <Link key={p.slug} href={`/art/${p.slug}`} className="group block rounded-lg border border-line bg-card p-3 hover:border-terra">
                    {cover?.img ? (
                      <div className="aspect-[4/3] overflow-hidden rounded-md bg-stone">
                        <ArtImage id={cover.img} alt={`${p.name}, ${cover.title}`} caption={false} className="h-full border-0 [&_img]:h-full [&_img]:object-cover" />
                      </div>
                    ) : (
                      <div className="flex aspect-[4/3] items-center justify-center rounded-md bg-stone px-4 text-center text-xs leading-5 text-muted">저작권 보호 작품 · 그림은 링크로 안내</div>
                    )}
                    <p className="mt-3 font-serif text-lg text-ink group-hover:text-terra">{p.name}</p>
                    <p className="text-[11px] tracking-[0.12em] text-terra">{p.en} · {p.years}</p>
                    <p className="mt-1 text-sm text-muted">{p.eraNote}</p>
                    <span className="mt-2 inline-block rounded-full border border-line px-2 py-0.5 text-[11px] text-dusk">{p.activeIn ?? eraName(p.era)}</span>
                  </Link>
                );
              })}
          </div>
        </Section>
      ))}
    </div>
  );
}
