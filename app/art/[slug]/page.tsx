import Link from "next/link";
import { notFound } from "next/navigation";
import { ArtImage } from "@/components/ArtImage";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { RelationList } from "@/components/RelationMap";
import { painterBySlug, painters } from "@/data/art";
import { countryByCode, eraName } from "@/data/countries";
import { FILMS } from "@/data/films";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { NadooHubPersonLink } from "@/components/NadooHubLink";
import { CoupangCard } from "@/components/CoupangCard";

export const dynamicParams = false;
export function generateStaticParams() {
  return painters.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = painterBySlug((await params).slug);
  if (!p) return {};
  return pageMetadata({ title: `${p.name} (${p.en})`, description: `${p.name}, ${p.years}. ${p.eraNote}. 대표작: ${p.works.map((w) => w.title).join(", ")}. 어디에 걸려 있고 어떻게 보면 좋은지.`, path: `/art/${p.slug}`, type: "article" });
}

export default async function PainterPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = painterBySlug((await params).slug);
  if (!p) notFound();
  const country = countryByCode(p.country)!;
  const i = painters.indexOf(p);
  const prev = painters[i - 1];
  const next = painters[i + 1];
  const films = FILMS.filter((f) => f.about === p.slug);
  const path = `/art/${p.slug}`;
  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "미술관", path: "/art" }, { name: p.name, path }]), articleLd({ headline: p.name, description: p.eraNote, path, about: [p.en] })])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/art", label: "미술관" }, { label: p.name }]} />
      <PageHead kicker={`${country.flag} ${country.en.toUpperCase()} · ${p.en}`} title={p.name} lead={`${p.years} · ${eraName(p.era)} · ${p.eraNote}`} />
      {p.activeIn ? <p className="mt-2 inline-block rounded-full border border-dusk px-3 py-1 text-xs text-dusk">프랑스에서 활동한 화가 · {p.activeIn}</p> : null}

      <Section title="삶" en="Life">
        <ul className="list-disc space-y-2 pl-5 text-base leading-8 text-ink">
          {p.life.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </Section>

      <Section title="대표작과 걸린 곳" en="Key works">
        {p.copyrighted ? (
          <div className="mb-5 rounded-md border border-dusk/40 bg-card p-4 text-sm leading-7">
            <p className="text-ink">{p.copyrighted.note}</p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              {p.copyrighted.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-laurel underline underline-offset-4 hover:text-terra">{l.label} ↗</a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <div className="space-y-6">
          {p.works.map((w) => (
            <div key={w.title} className={`grid gap-4 ${w.img ? "md:grid-cols-[1fr_1.1fr]" : ""}`}>
              {w.img ? <ArtImage id={w.img} alt={`${p.name}, ${w.title} (${w.year})`} /> : null}
              <div className="rounded-md border border-line bg-card p-4">
                <p className="font-serif text-xl text-ink">{w.title}</p>
                <p className="text-xs text-muted">{w.orig} · {w.year}</p>
                <p className="mt-2 text-sm text-terra">🏛 {w.museum}</p>
                <p className="mt-2 text-sm leading-7 text-ink">{w.look}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="이렇게 보세요" en="How to look">
        <ul className="list-disc space-y-2 pl-5 text-base leading-8 text-ink">
          {p.howToLook.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </Section>

      <Section title="관계" en="Relations">
        <RelationList id={p.slug} />
        <Link href="/relations" className="mt-3 inline-block text-sm text-terra">관계도 전체 보기 →</Link>
      </Section>

      {films.length ? (
        <Section title="영화로 보기" en="Films">
          <ul className="space-y-2 text-sm">
            {films.map((f) => (
              <li key={f.orig}>
                <Link href="/films" className="text-laurel underline underline-offset-4">{f.title}</Link> <span className="text-muted">({f.orig}, {f.year})</span>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <nav className="mt-12 flex justify-between gap-4 border-t border-line pt-4 text-sm">
        {prev ? <Link href={`/art/${prev.slug}`} className="text-terra">← {prev.name}</Link> : <span />}
        {next ? <Link href={`/art/${next.slug}`} className="text-terra">{next.name} →</Link> : <span />}
      </nav>
      <NadooHubPersonLink base="https://nadoo-arts.vercel.app/art/" slug={p.slug!} />
      <CoupangCard />
    </article>
  );
}
