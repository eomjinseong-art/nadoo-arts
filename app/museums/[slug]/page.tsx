import Link from "next/link";
import { notFound } from "next/navigation";
import { ArtImage } from "@/components/ArtImage";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { countryByCode } from "@/data/countries";
import { MUSEUMS, museumBySlug } from "@/data/museums";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { CoupangCard } from "@/components/CoupangCard";

export const dynamicParams = false;
export function generateStaticParams() {
  return MUSEUMS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const m = museumBySlug((await params).slug);
  if (!m) return {};
  return pageMetadata({ title: `${m.name} 투어: 꼭 볼 그림`, description: `${m.city} ${m.name}(${m.en}). ${m.highlights.slice(0, 4).map((h) => h.title).join(", ")} 등 꼭 볼 그림과 걷는 순서.`, path: `/museums/${m.slug}` });
}

export default async function MuseumPage({ params }: { params: Promise<{ slug: string }> }) {
  const m = museumBySlug((await params).slug);
  if (!m) notFound();
  const c = countryByCode(m.country)!;
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "미술관 투어", path: "/museums" }, { name: m.name, path: `/museums/${m.slug}` }]), { "@type": "Museum", name: m.en, alternateName: m.name, address: m.city, url: m.site }])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/museums", label: "미술관 투어" }, { label: m.name }]} />
      <PageHead kicker={`${c.flag} ${m.city.toUpperCase()} · ${m.en}`} title={m.name} lead={m.blurb} />
      <p className="mt-2 text-sm text-muted">문을 연 해: {m.opened} · <a href={m.site} target="_blank" rel="noopener noreferrer" className="text-laurel underline underline-offset-4">공식 누리집 ↗</a> · <Link href={`/countries/${m.country}`} className="text-laurel underline underline-offset-4">{c.name} 예술가들</Link></p>
      <section className="mt-8 rounded-lg border border-line bg-card p-5">
        <h2 className="font-serif text-xl text-ink">이렇게 걸어 보세요 <span className="font-sans text-sm font-normal text-muted">/ Route</span></h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-[15px] leading-7 text-ink">
          {m.route.map((r) => <li key={r}>{r}</li>)}
        </ol>
      </section>
      <CoupangCard />
      <section className="mt-10">
        <h2 className="font-serif text-2xl text-ink">꼭 볼 그림 <span className="font-sans text-sm font-normal text-muted">/ Highlights</span></h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          {m.highlights.map((h) => (
            <article key={h.title} className="rounded-lg border border-line bg-card p-4">
              {h.img ? <ArtImage id={h.img} alt={`${h.who}, ${h.title}`} /> : null}
              <h3 className="mt-3 font-serif text-lg text-ink">{h.title}</h3>
              <p className="text-sm text-terra">{h.slug ? <Link href={`/art/${h.slug}`} className="underline-offset-4 hover:underline">{h.who}</Link> : h.who}</p>
              <p className="mt-2 text-sm leading-7 text-muted">{h.note}</p>
            </article>
          ))}
        </div>
      </section>
      <nav className="mt-10 flex flex-wrap gap-2 text-sm">
        {MUSEUMS.filter((x) => x.slug !== m.slug).map((x) => (
          <Link key={x.slug} href={`/museums/${x.slug}`} className="rounded-full border border-line bg-card px-3 py-1 hover:border-terra">{x.name}</Link>
        ))}
      </nav>
      <p className="mt-6 text-xs text-muted">전시 위치와 대여 여부는 바뀔 수 있습니다. 가기 전에 공식 누리집을 확인하세요.</p>
    </div>
  );
}
