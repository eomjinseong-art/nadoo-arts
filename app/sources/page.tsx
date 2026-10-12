import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Section } from "@/components/Card";
import { PageHead } from "@/components/PageHead";
import credits from "@/data/image-credits.json";
import { painters } from "@/data/art";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "출처와 그림 저작권", description: "나두예술이 참고한 자료와, 사용한 퍼블릭 도메인 그림 파일의 위키미디어 공용 출처 전체 목록.", path: "/sources" });

type Credit = { file: string; page: string; license: string; author: string };

function workTitle(id: string) {
  for (const p of painters) for (const w of p.works) if (w.img === id) return `${p.name} · ${w.title} (${w.year})`;
  return id;
}

export default function SourcesPage() {
  const list = Object.entries(credits as Record<string, Credit>);
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "출처" }]} />
      <PageHead kicker="SOURCES" title="출처와 그림 저작권" lead="글은 아래 자료를 참고해 우리말로 다시 썼습니다. 확실하지 않은 이야기는 본문에 ‘전해지는 이야기’라고 적었습니다." />
      <Section title="참고한 자료" en="References">
        <ul className="list-disc space-y-1 pl-5 text-sm leading-7 text-ink">
          <li>각 미술관 공식 소장품 페이지: 루브르, 오르세, 우피치, 프라도, 런던 내셔널 갤러리, 에르미타주, 라이크스뮤지엄, 빈 미술사박물관, 바티칸 박물관, 메트로폴리탄, MoMA 등</li>
          <li>유럽 지도: Natural Earth 1:50m 나라 경계 (퍼블릭 도메인, naturalearthdata.com)</li>
          <li>영화: 공개 영화 데이터베이스와 백과로 연도·감독·수상 교차 확인</li>
          <li>조르조 바사리, 『미술가 열전』(1550/1568) — 르네상스 화가의 전승. 사실과 다른 부분이 있어 ‘전해지는 이야기’로 구분</li>
          <li>위키미디어 공용 파일 설명 페이지 (작품 연도·소장처·라이선스)</li>
          <li>반 고흐 편지 (반 고흐 미술관 공개본, vangoghletters.org)</li>
          <li>위키백과·위키데이터 (연도·소장처 교차 확인용)</li>
        </ul>
      </Section>
      <Section title="그림 파일 출처" en="Image credits">
        <p className="text-sm leading-7 text-muted">
          모든 그림 파일은 위키미디어 공용(Wikimedia Commons)에서 퍼블릭 도메인(또는 CC0)으로 표시된 것만 내려받아 이 사이트에 두었습니다. 원작은 작가 사후 70년이 훨씬 지난 작품입니다. 마티스와 피카소처럼 저작권이 남았거나 나라마다 다를 수 있는 작품은 그림을 싣지 않고 링크로 안내합니다.
        </p>
        <ol className="mt-4 space-y-2 text-xs leading-6">
          {list.map(([id, c]) => (
            <li key={id} className="rounded-md border border-line bg-card px-3 py-2">
              <span className="text-ink">{workTitle(id)}</span>
              <br />
              <a href={c.page} target="_blank" rel="noopener noreferrer" className="break-all text-laurel underline underline-offset-2">{c.file}</a>
              <span className="text-muted"> · {c.license}{c.author ? ` · ${c.author}` : ""}</span>
            </li>
          ))}
        </ol>
      </Section>
      <Section title="음악 듣기" en="Listening">
        <p className="text-sm leading-7 text-muted">음악은 영상을 이 사이트에 넣지 않고 유튜브 검색 결과로 안내합니다. 검색 결과에 어떤 영상이 나오는지는 유튜브가 정합니다.</p>
      </Section>
      <Section title="광고" en="Ads">
        <p className="text-sm leading-7 text-muted">페이지 아래에 쿠팡 파트너스 링크가 있습니다. 이 링크로 구매하면 일정액의 수수료를 받을 수 있습니다.</p>
      </Section>
    </div>
  );
}
