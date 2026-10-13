import { inCountry } from "@/data/countries";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PersonCard, Section } from "@/components/Card";
import { PageHead } from "@/components/PageHead";
import { painters } from "@/data/art";
import { COUNTRIES, countryByCode, eraName } from "@/data/countries";
import { composers } from "@/data/music";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { MUSEUMS } from "@/data/museums";
import { EDGES, EDGE_KINDS } from "@/data/relations";
import { FILMS } from "@/data/films";
import { personInfo } from "@/lib/people";
import { CoupangCard } from "@/components/CoupangCard";

export const dynamicParams = false;
export function generateStaticParams() {
  return COUNTRIES.map((c) => ({ code: c.code }));
}

export async function generateMetadata({ params }: { params: Promise<{ code: string }> }) {
  const c = countryByCode((await params).code);
  if (!c) return {};
  return pageMetadata({ title: `${c.name}의 음악과 미술`, description: `${c.blurb} ${c.name}의 작곡가와 화가를 한곳에.`, path: `/countries/${c.code}` });
}

export default async function CountryPage({ params }: { params: Promise<{ code: string }> }) {
  const c = countryByCode((await params).code);
  if (!c) notFound();
  const ms = composers.filter((x) => inCountry(x, c.code));
  const ps = painters.filter((x) => inCountry(x, c.code));
  const ids = new Set([...ms, ...ps].map((x) => x.slug));
  const rel = EDGES.filter((e) => ids.has(e.from) || ids.has(e.to));
  const mus = MUSEUMS.filter((m) => m.country === c.code);
  const films = FILMS.filter((f) => f.about && ids.has(f.about));
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/countries", label: "나라별" }, { label: c.name }]} />
      <PageHead kicker={c.en.toUpperCase()} title={`${c.flag} ${c.name}`} lead={c.blurb} />
      <a href={c.worldUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-laurel underline underline-offset-4">나두세계에서 {c.name} 기본 정보 보기 ↗</a>
      <div className="mt-6 flex flex-wrap gap-2 text-sm">
        <span className="rounded-full border border-line bg-card px-3 py-1">음악 {ms.length}명</span>
        <span className="rounded-full border border-line bg-card px-3 py-1">미술 {ps.length}명</span>
        <Link href="/map" className="rounded-full border border-line bg-card px-3 py-1 hover:border-terra">지도에서 보기</Link>
        <Link href="/lineage" className="rounded-full border border-line bg-card px-3 py-1 hover:border-terra">음악 계보</Link>
      </div>
      <Section title="음악" en="Music">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ms.map((x) => (
            <PersonCard key={x.slug} href={`/music/${x.slug}`} name={x.name} en={x.en} years={x.years} sub={x.eraNote} badge={eraName(x.era)} />
          ))}
        </div>
      </Section>
      <CoupangCard />
      <Section title="미술" en="Art">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ps.map((x) => (
            <PersonCard key={x.slug} href={`/art/${x.slug}`} name={x.name} en={x.en} years={x.years} sub={x.eraNote} badge={x.activeIn ?? eraName(x.era)} />
          ))}
        </div>
      </Section>
      {mus.length ? (
        <Section title="이 나라의 미술관 투어" en="Museums">
          <ul className="flex flex-wrap gap-2">
            {mus.map((m) => <li key={m.slug}><Link href={`/museums/${m.slug}`} className="inline-block rounded-full border border-line bg-card px-3 py-1.5 hover:border-terra">{m.name} · {m.city}</Link></li>)}
          </ul>
        </Section>
      ) : null}
      {rel.length ? (
        <Section title="관계" en="Relations">
          <ul className="grid gap-2 md:grid-cols-2">
            {rel.map((e, i) => (
              <li key={i} className="rounded-md border border-line bg-card p-3 text-sm">
                <b className="text-ink">{personInfo(e.from).name}</b> <span style={{ color: EDGE_KINDS[e.kind].color }}>— {EDGE_KINDS[e.kind].label} —</span> <b className="text-ink">{personInfo(e.to).name}</b>
                <p className="mt-1 text-muted">{e.note}</p>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}
      {films.length ? (
        <Section title="영화" en="Films">
          <ul className="flex flex-wrap gap-2 text-sm">
            {films.map((f) => <li key={f.orig}><Link href="/films" className="inline-block rounded-full border border-line bg-card px-3 py-1.5 hover:border-terra">{f.title} ({f.year})</Link></li>)}
          </ul>
        </Section>
      ) : null}
    </div>
  );
}
