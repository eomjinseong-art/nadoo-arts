import Link from "next/link";
import { EDGES, EDGE_KINDS, type Edge } from "@/data/relations";
import { personInfo } from "@/lib/people";

const LANE_FILL = { music: "#e8eefc", art: "#f6e7e1", extra: "#efe9df" } as const;
const LANE_STROKE = { music: "#3f6fe0", art: "#a34732", extra: "#9b8f80" } as const;

function components(edges: Edge[]) {
  const parent = new Map<string, string>();
  const find = (x: string): string => {
    if (!parent.has(x)) parent.set(x, x);
    const p = parent.get(x)!;
    if (p === x) return x;
    const r = find(p);
    parent.set(x, r);
    return r;
  };
  for (const e of edges) parent.set(find(e.from), find(e.to));
  const groups = new Map<string, string[]>();
  for (const e of edges) {
    for (const id of [e.from, e.to]) {
      const root = find(id);
      const list = groups.get(root) ?? [];
      if (!list.includes(id)) list.push(id);
      groups.set(root, list);
    }
  }
  return [...groups.values()]
    .map((nodes) => ({ nodes, edges: edges.filter((e) => nodes.includes(e.from)) }))
    .sort((a, b) => b.nodes.length - a.nodes.length);
}

function Cluster({ nodes, edges, index }: { nodes: string[]; edges: Edge[]; index: number }) {
  const n = nodes.length;
  const W = n <= 2 ? 380 : n <= 4 ? 440 : n <= 8 ? 580 : 720;
  const H = n <= 2 ? 150 : n <= 4 ? 320 : n <= 8 ? 460 : 580;
  const rx = n <= 2 ? 110 : W / 2 - 80;
  const ry = n <= 2 ? 0 : H / 2 - 50;
  const pos = new Map(
    nodes.map((id, i) => {
      const a = n <= 2 ? Math.PI * i : (2 * Math.PI * i) / n - Math.PI / 2;
      return [id, { x: W / 2 + rx * Math.cos(a), y: H / 2 + ry * Math.sin(a) }];
    }),
  );
  const markerId = `arrow-${index}`;
  return (
    <figure className="rounded-lg border border-line bg-card p-2">
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`관계도 묶음 ${index + 1}: ${nodes.map((id) => personInfo(id).name).join(", ")}`}>
        <defs>
          {Object.entries(EDGE_KINDS).map(([k, v]) => (
            <marker key={k} id={`${markerId}-${k}`} viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill={v.color} />
            </marker>
          ))}
        </defs>
        {edges.map((e, i) => {
          const a = pos.get(e.from)!;
          const b = pos.get(e.to)!;
          const k = EDGE_KINDS[e.kind];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const len = Math.hypot(dx, dy) || 1;
          const pad = 52;
          const x1 = a.x + (dx / len) * pad;
          const y1 = a.y + (dy / len) * 22;
          const x2 = b.x - (dx / len) * pad;
          const y2 = b.y - (dy / len) * 22;
          const directed = e.kind === "teacher" || e.kind === "influence";
          const mx = (x1 + x2) / 2;
          const my = (y1 + y2) / 2;
          return (
            <g key={i}>
              <title>{`${personInfo(e.from).name} — ${personInfo(e.to).name}: ${k.label}. ${e.note}`}</title>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={k.color} strokeWidth={2} strokeDasharray={k.dash} markerEnd={directed ? `url(#${markerId}-${e.kind})` : undefined} />
              <rect x={mx - 26} y={my - 9} width={52} height={18} rx={9} fill="#fbf7f2" stroke={k.color} strokeWidth={0.8} />
              <text x={mx} y={my + 4} textAnchor="middle" fontSize={10} fill={k.color}>
                {k.label.replace(" → 제자", "")}
              </text>
            </g>
          );
        })}
        {nodes.map((id) => {
          const p = pos.get(id)!;
          const info = personInfo(id);
          const bw = Math.max(92, info.name.length * 13 + 18);
          const box = (
            <g>
              <rect x={p.x - bw / 2} y={p.y - 20} width={bw} height={40} rx={8} fill={LANE_FILL[info.lane]} stroke={LANE_STROKE[info.lane]} strokeWidth={info.href ? 1.6 : 1} />
              <text x={p.x} y={p.y + (info.note ? -2 : 5)} textAnchor="middle" fontSize={13} fill="#241c16" fontWeight={info.href ? 700 : 400}>
                {info.name}
              </text>
              {info.note ? (
                <text x={p.x} y={p.y + 13} textAnchor="middle" fontSize={8.5} fill="#6e6258">
                  {info.note.length > 12 ? `${info.note.slice(0, 12)}…` : info.note}
                </text>
              ) : null}
            </g>
          );
          return info.href ? (
            <a key={id} href={info.href} aria-label={`${info.name} 글 보기`}>
              {box}
            </a>
          ) : (
            <g key={id}>{box}</g>
          );
        })}
      </svg>
    </figure>
  );
}

export function RelationMap() {
  const groups = components(EDGES);
  return (
    <div>
      <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted">
        {Object.entries(EDGE_KINDS).map(([k, v]) => (
          <li key={k} className="flex items-center gap-2">
            <svg width="34" height="10" aria-hidden>
              <line x1="0" y1="5" x2="34" y2="5" stroke={v.color} strokeWidth="2" strokeDasharray={v.dash} />
            </svg>
            {v.label} <span className="text-[10px] text-terra">{v.en}</span>
          </li>
        ))}
        <li className="flex items-center gap-2">
          <span className="inline-block h-3 w-5 rounded-sm border" style={{ background: LANE_FILL.music, borderColor: LANE_STROKE.music }} /> 음악가
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-block h-3 w-5 rounded-sm border" style={{ background: LANE_FILL.art, borderColor: LANE_STROKE.art }} /> 화가
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-block h-3 w-5 rounded-sm border" style={{ background: LANE_FILL.extra, borderColor: LANE_STROKE.extra }} /> 이 사이트에 글이 없는 사람
        </li>
      </ul>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {groups.map((g, i) => (
          <Cluster key={i} nodes={g.nodes} edges={g.edges} index={i} />
        ))}
      </div>
    </div>
  );
}

export function RelationList({ id }: { id?: string }) {
  const list = id ? EDGES.filter((e) => e.from === id || e.to === id) : EDGES;
  if (!list.length) return null;
  return (
    <ul className="space-y-2 text-sm leading-6">
      {list.map((e, i) => {
        const a = personInfo(e.from);
        const b = personInfo(e.to);
        const k = EDGE_KINDS[e.kind];
        const Name = ({ p }: { p: ReturnType<typeof personInfo> }) =>
          p.href ? (
            <Link href={p.href} className="text-laurel underline decoration-line underline-offset-4 hover:text-terra">
              {p.name}
            </Link>
          ) : (
            <span>{p.name}</span>
          );
        return (
          <li key={i} className="rounded-md border border-line bg-card px-3 py-2">
            <span className="mr-2 rounded-full px-2 py-0.5 text-[11px]" style={{ color: k.color, border: `1px solid ${k.color}` }}>
              {k.label}
            </span>
            <Name p={a} /> {e.kind === "teacher" || e.kind === "influence" ? "→" : "·"} <Name p={b} />
            <span className="ml-2 text-muted">{e.note}</span>
          </li>
        );
      })}
    </ul>
  );
}
