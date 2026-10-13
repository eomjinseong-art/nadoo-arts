import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { RelationList } from "@/components/RelationMap";
import { countryByCode, eraName } from "@/data/countries";
import { composerBySlug, composers } from "@/data/music";
import { FILMS } from "@/data/films";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { NadooHubPersonLink } from "@/components/NadooHubLink";

export const dynamicParams = false;
export function generateStaticParams() {
  return composers.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const c = composerBySlug((await params).slug);
  if (!c) return {};
  return pageMetadata({ title: `${c.name} (${c.en})`, description: `${c.name}, ${c.years}. ${c.eraNote}. 대표곡: ${c.works.map((w) => w.title.split(" ")[0]).join(", ")}. ${c.life[0]}`, path: `/music/${c.slug}`, type: "article" });
}

export default async function ComposerPage({ params }: { params: Promise<{ slug: string }> }) {
  const c = composerBySlug((await params).slug);
  if (!c) notFound();
  const country = countryByCode(c.country)!;
  const i = composers.indexOf(c);
  const prev = composers[i - 1];
  const next = composers[i + 1];
  const films = FILMS.filter((f) => f.about === c.slug);
  const path = `/music/${c.slug}`;
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "음악관", path: "/music" }, { name: c.name, path }]), articleLd({ headline: c.name, description: c.eraNote, path, about: [c.en] })])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/music", label: "음악관" }, { label: c.name }]} />
      <PageHead kicker={`${country.flag} ${country.en.toUpperCase()} · ${c.en}`} title={c.name} lead={`${c.years} · ${eraName(c.era)} · ${c.eraNote}`} />
      {c.note ? <p className="mt-2 text-xs text-muted">{c.note}</p> : null}

      <Section title="삶" en="Life">
        <ul className="prose-site list-disc space-y-2 pl-5 text-base leading-8 text-ink">
          {c.life.map((t) => <li key={t}>{t}</li>)}
        </ul>
      </Section>

      <Section title="대표곡" en="Signature works">
        <ul className="space-y-3">
          {c.works.map((w) => (
            <li key={w.title} className="rounded-md border border-line bg-card p-4">
              <p className="font-serif text-lg text-ink">{w.title}</p>
              <p className="text-xs text-terra">{w.year}</p>
              <p className="mt-1 text-sm leading-7 text-muted">{w.note}</p>
              <a href={`https://www.youtube.com/results?search_query=${encodeURIComponent(`${c.en} ${w.title.replace(/^[^A-Za-z]*/, "")}`)}`} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-xs text-laurel underline underline-offset-4 hover:text-terra">
                유튜브에서 찾기 ▶
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="이렇게 들어 보세요" en="Listening points">
        <ul className="list-disc space-y-2 pl-5 text-base leading-8 text-ink">
          {c.listen.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <a href={c.yt} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full border border-terra px-4 py-2 text-sm text-terra hover:bg-terra/10">
          ▶ 유튜브 검색으로 듣기 <span className="text-xs text-muted">(YouTube search)</span>
        </a>
      </Section>

      <Section title="관계" en="Relations">
        <RelationList id={c.slug} />
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
        {prev ? <Link href={`/music/${prev.slug}`} className="text-terra">← {prev.name}</Link> : <span />}
        {next ? <Link href={`/music/${next.slug}`} className="text-terra">{next.name} →</Link> : <span />}
      </nav>
      <NadooHubPersonLink base="https://nadoo-arts.vercel.app/music/" slug={c.slug!} />
    </article>
  );
}
