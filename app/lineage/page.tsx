import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { LINEAGE_LINKS, LINEAGE_ROWS, LINEAGE_STORY } from "@/data/lineage";
import { composers } from "@/data/music";
import { EDGE_KINDS } from "@/data/relations";
import { shortName } from "@/lib/people";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

const description = "바흐에서 하이든·모차르트, 베토벤, 쇼팽·리스트, 바그너와 브람스, 그리고 20세기까지. 서양 음악 400년의 계보를 한 장의 그림으로.";
export const metadata = pageMetadata({ title: "음악 계보: 바흐에서 쇼스타코비치까지", description, path: "/lineage" });

const W = 1000;
const ROW = 96;
const TOP = 30;
const LEFT = 120;

export default function LineagePage() {
  const pos = new Map<string, { x: number; y: number }>();
  LINEAGE_ROWS.forEach((r, ri) => {
    const span = W - LEFT - 20;
    r.ids.forEach((id, i) => pos.set(id, { x: LEFT + (span * (i + 0.5)) / r.ids.length, y: TOP + ri * ROW + 20 }));
  });
  const H = TOP + LINEAGE_ROWS.length * ROW;
  const name = (id: string) => shortName(composers.find((c) => c.slug === id)?.name ?? id);
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "음악 계보", path: "/lineage" }])])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "음악 계보" }]} />
      <PageHead kicker="MUSIC LINEAGE" title="음악 계보" lead="누가 누구에게 배우고, 누구를 보고 자랐을까요. 위에서 아래로 시대가 흐릅니다. 이름을 누르면 그 사람 글로 갑니다." />
      <ul className="mt-4 flex flex-wrap gap-3 text-xs">
        {(["teacher", "influence", "friend", "family", "rival"] as const).map((k) => (
          <li key={k} className="flex items-center gap-1.5">
            <svg width="28" height="8" aria-hidden="true"><line x1="0" y1="4" x2="28" y2="4" stroke={EDGE_KINDS[k].color} strokeWidth="2.5" strokeDasharray={EDGE_KINDS[k].dash} /></svg>
            {EDGE_KINDS[k].label}
          </li>
        ))}
      </ul>
      <figure className="mt-4 overflow-x-auto rounded-lg border border-line bg-card p-2">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full min-w-[760px]" role="img" aria-label="바흐부터 20세기까지 음악 계보도">
          <defs>
            {Object.entries(EDGE_KINDS).map(([k, v]) => (
              <marker key={k} id={`lin-${k}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill={v.color} />
              </marker>
            ))}
          </defs>
          {LINEAGE_ROWS.map((r, ri) => (
            <g key={r.label}>
              <rect x={0} y={TOP + ri * ROW - 14} width={W} height={ROW - 8} fill={ri % 2 ? "#faf6ef" : "#f3eee5"} rx={6} />
              <text x={10} y={TOP + ri * ROW + 16} fontSize={13} fontWeight={700} fill="#3b2e26">{r.label}</text>
              <text x={10} y={TOP + ri * ROW + 34} fontSize={11} fill="#7a6e62">{r.range}</text>
            </g>
          ))}
          {LINEAGE_LINKS.map((l, i) => {
            const a = pos.get(l.from);
            const b = pos.get(l.to);
            if (!a || !b) return null;
            const k = EDGE_KINDS[l.kind];
            const same = a.y === b.y;
            const y1 = same ? a.y - 14 : a.y + 16;
            const y2 = same ? b.y - 14 : b.y - 18;
            const my = same ? a.y - 50 : (y1 + y2) / 2;
            const d = `M${a.x},${y1} C${a.x},${my} ${b.x},${my} ${b.x},${y2}`;
            return (
              <path key={i} d={d} fill="none" stroke={k.color} strokeWidth={1.8} strokeDasharray={k.dash} opacity={0.75} markerEnd={l.kind === "teacher" || l.kind === "influence" ? `url(#lin-${l.kind})` : undefined}>
                <title>{`${name(l.from)} → ${name(l.to)}: ${l.note}`}</title>
              </path>
            );
          })}
          {[...pos.entries()].map(([id, p]) => {
            const n = name(id);
            const bw = Math.max(64, n.length * 13 + 18);
            return (
              <a key={id} href={`/music/${id}`}>
                <rect x={p.x - bw / 2} y={p.y - 14} width={bw} height={30} rx={15} fill="#e8eefc" stroke="#3f6fe0" />
                <text x={p.x} y={p.y + 6} textAnchor="middle" fontSize={13} fill="#1f2a44">{n}</text>
              </a>
            );
          })}
        </svg>
      </figure>
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {LINEAGE_STORY.map((s) => (
          <div key={s.title} className="rounded-lg border border-line bg-card p-4">
            <h2 className="font-serif text-lg text-ink">{s.title}</h2>
            <p className="mt-2 text-sm leading-7 text-muted">{s.text}</p>
          </div>
        ))}
      </section>
      <section className="mt-10">
        <h2 className="font-serif text-2xl text-ink">선 하나하나의 이야기 <span className="font-sans text-sm font-normal text-muted">/ Links</span></h2>
        <ul className="mt-4 grid gap-2 md:grid-cols-2">
          {LINEAGE_LINKS.map((l, i) => (
            <li key={i} className="rounded-md border border-line bg-card p-3 text-sm">
              <Link href={`/music/${l.from}`} className="text-ink underline-offset-4 hover:underline">{name(l.from)}</Link>
              <span className="mx-1.5" style={{ color: EDGE_KINDS[l.kind].color }}>{l.kind === "rival" || l.kind === "friend" || l.kind === "family" ? "↔" : "→"}</span>
              <Link href={`/music/${l.to}`} className="text-ink underline-offset-4 hover:underline">{name(l.to)}</Link>
              <span className="ml-2 text-[11px]" style={{ color: EDGE_KINDS[l.kind].color }}>{EDGE_KINDS[l.kind].label}</span>
              <p className="mt-1 text-muted">{l.note}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted">‘전한다’로 적은 것은 확실한 기록보다 전해지는 이야기에 가깝습니다. 더 많은 관계는 <Link href="/relations" className="underline">관계도</Link>에서 볼 수 있습니다.</p>
      </section>
    </div>
  );
}
