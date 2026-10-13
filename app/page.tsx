import { inCountry } from "@/data/countries";
import Link from "next/link";
import { ArtImage } from "@/components/ArtImage";
import { JsonLd } from "@/components/JsonLd";
import { SisterSites } from "@/components/SisterSites";
import { painters } from "@/data/art";
import { COUNTRIES } from "@/data/countries";
import { composers } from "@/data/music";
import { ALL_QUIZ } from "@/data/quiz";
import { FILMS } from "@/data/films";
import { jsonLd, pageMetadata, websiteLd } from "@/lib/seo";
import { SITE_SUB, SITE_TAGLINE } from "@/lib/site";
import { CoupangCard } from "@/components/CoupangCard";

const description = `${SITE_TAGLINE}. ${SITE_SUB}`;
export const metadata = pageMetadata({ title: "나두예술", description, path: "/" });

const SECTIONS = [
  { href: "/music", en: "Music", title: "음악관", desc: `작곡가·가수 ${composers.length}명. 시대, 삶, 대표곡, 듣는 포인트, 유튜브 검색 링크.` },
  { href: "/art", en: "Art", title: "미술관", desc: `화가 ${painters.length}명. 대표작이 걸린 미술관과 보는 법, 퍼블릭 도메인 그림.` },
  { href: "/map", en: "Map", title: "유럽 예술 지도", desc: "나라를 누르면 그 나라의 작곡가와 화가가 나옵니다." },
  { href: "/museums", en: "Museum tours", title: "미술관 투어", desc: "루브르, 우피치, 프라도, 런던 내셔널 갤러리, 에르미타주, 라이크스, 오르세, 빈 미술사박물관." },
  { href: "/lineage", en: "Lineage", title: "음악 계보", desc: "바흐 → 하이든·모차르트 → 베토벤 → 쇼팽·리스트 → 바그너… 한 장의 계보도." },
  { href: "/timeline", en: "Timeline", title: "연표", desc: "르네상스부터 근현대까지 음악과 미술을 나란히. 그때 한반도는?" },
  { href: "/relations", en: "Relations", title: "관계도", desc: "스승과 제자, 라이벌, 친구, 가족. 다빈치 vs 미켈란젤로, 하이든과 모차르트, 칸딘스키와 쇤베르크." },
  { href: "/quiz", en: "Quiz", title: "퀴즈", desc: `${ALL_QUIZ.length}문제. 그림·곡·나라·시대·미술관 맞히기, OX, 오늘의 도전.` },
  { href: "/films", en: "Films", title: "예술가 영화", desc: `아마데우스, 진주 귀걸이를 한 소녀, 미스터 터너, 보헤미안 랩소디… ${FILMS.length}편, 사실 확인한 목록.` },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={jsonLd([websiteLd(description)])} />
      <div className="grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-xs tracking-[0.2em] text-terra">NADOO ARTS · EUROPE</p>
          <h1 className="mt-2 font-serif text-4xl leading-tight text-ink sm:text-5xl">나두예술</h1>
          <p className="mt-4 text-lg leading-8 text-ink">{SITE_TAGLINE}</p>
          <p className="mt-3 max-w-xl text-base leading-8 text-muted">{SITE_SUB}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href="/music" className="rounded-full bg-terra px-4 py-2 text-white hover:bg-terra-deep">음악관 들어가기</Link>
            <Link href="/art" className="rounded-full border border-terra px-4 py-2 text-terra hover:bg-terra/10">미술관 들어가기</Link>
          </div>
        </div>
        <ArtImage id="botticelli-venus" alt="보티첼리, 비너스의 탄생" priority />
      </div>

      <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SECTIONS.map((s) => (
          <Link key={s.href} href={s.href} className="rounded-lg border border-line bg-card p-5 transition-colors hover:border-terra">
            <p className="text-[11px] tracking-[0.18em] text-terra">{s.en}</p>
            <h2 className="mt-1 font-serif text-xl text-ink">{s.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{s.desc}</p>
          </Link>
        ))}
      </section>

      <CoupangCard />
      <section className="mt-12">
        <h2 className="font-serif text-2xl text-ink">나라별로 보기 <span className="font-sans text-sm font-normal text-muted">/ By country</span></h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {COUNTRIES.map((c) => (
            <Link key={c.code} href={`/countries/${c.code}`} className="rounded-lg border border-line bg-card p-5 hover:border-terra">
              <p className="font-serif text-xl text-ink">
                {c.flag} {c.name} <span className="text-sm text-muted">{c.en}</span>
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">{c.blurb}</p>
              <p className="mt-2 text-xs text-terra">
                음악 {composers.filter((x) => inCountry(x, c.code)).length}명 · 미술 {painters.filter((x) => inCountry(x, c.code)).length}명
              </p>
            </Link>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted">독일·스페인 관은 준비 중입니다. Germany & Spain, coming later.</p>
      </section>

      <div className="mt-12">
        <SisterSites variant="home" />
      </div>
    </div>
  );
}
