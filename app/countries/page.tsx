import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHead } from "@/components/PageHead";
import { painters } from "@/data/art";
import { COUNTRIES } from "@/data/countries";
import { composers } from "@/data/music";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "나라별로 보기", description: "이탈리아와 프랑스의 음악가·화가를 나라별로 모아 봅니다. 독일·스페인은 준비 중입니다.", path: "/countries" });

export default function CountriesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "나라별" }]} />
      <PageHead kicker="COUNTRIES" title="나라별로 보기" lead="지금은 이탈리아와 프랑스. 독일과 스페인 관은 나중에 열 예정입니다." />
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {COUNTRIES.map((c) => (
          <li key={c.code}>
            <Link href={`/countries/${c.code}`} className="block rounded-lg border border-line bg-card p-5 hover:border-terra">
              <p className="font-serif text-2xl text-ink">{c.flag} {c.name}</p>
              <p className="text-xs tracking-[0.16em] text-terra">{c.en.toUpperCase()}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{c.blurb}</p>
              <p className="mt-2 text-xs text-muted">음악 {composers.filter((x) => x.country === c.code).length} · 미술 {painters.filter((x) => x.country === c.code).length}</p>
            </Link>
          </li>
        ))}
        <li className="rounded-lg border border-dashed border-line p-5 text-sm text-muted">🇩🇪 독일 Germany · 🇪🇸 스페인 Spain — 준비 중</li>
      </ul>
    </div>
  );
}
