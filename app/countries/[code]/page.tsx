import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PersonCard, Section } from "@/components/Card";
import { PageHead } from "@/components/PageHead";
import { painters } from "@/data/art";
import { COUNTRIES, countryByCode, eraName } from "@/data/countries";
import { composers } from "@/data/music";
import { pageMetadata } from "@/lib/seo";

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
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/countries", label: "나라별" }, { label: c.name }]} />
      <PageHead kicker={c.en.toUpperCase()} title={`${c.flag} ${c.name}`} lead={c.blurb} />
      <a href={c.worldUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-laurel underline underline-offset-4">나두세계에서 {c.name} 기본 정보 보기 ↗</a>
      <Section title="음악" en="Music">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {composers.filter((x) => x.country === c.code).map((x) => (
            <PersonCard key={x.slug} href={`/music/${x.slug}`} name={x.name} en={x.en} years={x.years} sub={x.eraNote} badge={eraName(x.era)} />
          ))}
        </div>
      </Section>
      <Section title="미술" en="Art">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {painters.filter((x) => x.country === c.code).map((x) => (
            <PersonCard key={x.slug} href={`/art/${x.slug}`} name={x.name} en={x.en} years={x.years} sub={x.eraNote} badge={x.activeIn ?? eraName(x.era)} />
          ))}
        </div>
      </Section>
    </div>
  );
}
