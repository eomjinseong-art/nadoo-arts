"use client";

import Link from "next/link";
import { useState } from "react";

type Shape = { iso: string; code: string | null; name: string; d: string };
type Person = { slug: string; name: string; years: string };
export type MapCountry = { code: string; name: string; flag: string; music: Person[]; art: Person[] };

export function EuropeMap({ w, h, shapes, labels, countries }: { w: number; h: number; shapes: Shape[]; labels: Record<string, number[]>; countries: MapCountry[] }) {
  const [sel, setSel] = useState<string>("it");
  const [hover, setHover] = useState<string | null>(null);
  const byCode = new Map(countries.map((c) => [c.code, c]));
  const cur = byCode.get(sel);
  const total = (c: MapCountry) => c.music.length + c.art.length;
  const max = Math.max(...countries.map(total));
  return (
    <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
      <figure className="overflow-hidden rounded-lg border border-line bg-[#e9eef2]">
        <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full" role="img" aria-label="유럽 지도. 나라를 누르면 그 나라 예술가 목록이 나옵니다.">
          {shapes.map((s, i) => {
            const c = s.code ? byCode.get(s.code) : undefined;
            if (!c) return <path key={i} d={s.d} fill="#f4f1ea" stroke="#c9c2b6" strokeWidth={0.6} />;
            const t = 0.35 + 0.65 * (total(c) / max);
            const active = sel === c.code;
            return (
              <path
                key={i}
                d={s.d}
                fill={active ? "#a34732" : hover === c.code ? "#c9775f" : `rgba(163,71,50,${t * 0.55})`}
                stroke="#fffaf2"
                strokeWidth={active ? 1.6 : 0.9}
                className="cursor-pointer transition-colors"
                onClick={() => setSel(c.code)}
                onMouseEnter={() => setHover(c.code)}
                onMouseLeave={() => setHover(null)}
                tabIndex={0}
                role="button"
                aria-label={`${c.name}: 음악 ${c.music.length}명, 미술 ${c.art.length}명`}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSel(c.code); } }}
              >
                <title>{`${c.name} · 음악 ${c.music.length} · 미술 ${c.art.length}`}</title>
              </path>
            );
          })}
          {countries.map((c) => {
            const p = labels[c.code];
            if (!p) return null;
            return (
              <g key={c.code} pointerEvents="none">
                <text x={p[0]} y={p[1]} textAnchor="middle" fontSize={c.code === "be" || c.code === "nl" || c.code === "ch" || c.code === "cz" || c.code === "at" || c.code === "dk" ? 9 : 13} fontWeight={700} fill={sel === c.code ? "#fffaf2" : "#3b2e26"} stroke={sel === c.code ? "none" : "#fffaf2"} strokeWidth={2.5} paintOrder="stroke">
                  {c.name}
                </text>
              </g>
            );
          })}
        </svg>
        <figcaption className="px-3 py-2 text-xs text-muted">색이 진할수록 소개된 예술가가 많습니다. 지도 데이터: Natural Earth (퍼블릭 도메인).</figcaption>
      </figure>
      <div aria-live="polite">
        {cur ? (
          <div className="rounded-lg border border-line bg-card p-5">
            <h2 className="font-serif text-2xl text-ink">
              {cur.flag} {cur.name}
            </h2>
            <p className="mt-1 text-sm text-muted">
              음악 {cur.music.length}명 · 미술 {cur.art.length}명 · <Link href={`/countries/${cur.code}`} className="text-laurel underline underline-offset-4">나라 페이지</Link>
            </p>
            {cur.music.length ? (
              <>
                <h3 className="mt-4 text-sm font-bold text-[#3f6fe0]">🎵 음악</h3>
                <ul className="mt-1 flex flex-wrap gap-1.5">
                  {cur.music.map((p) => (
                    <li key={p.slug}><Link href={`/music/${p.slug}`} className="inline-block rounded-full border border-line bg-bg px-2.5 py-1 text-sm hover:border-terra">{p.name} <span className="text-[11px] text-muted">{p.years}</span></Link></li>
                  ))}
                </ul>
              </>
            ) : null}
            {cur.art.length ? (
              <>
                <h3 className="mt-4 text-sm font-bold text-terra">🎨 미술</h3>
                <ul className="mt-1 flex flex-wrap gap-1.5">
                  {cur.art.map((p) => (
                    <li key={p.slug}><Link href={`/art/${p.slug}`} className="inline-block rounded-full border border-line bg-bg px-2.5 py-1 text-sm hover:border-terra">{p.name} <span className="text-[11px] text-muted">{p.years}</span></Link></li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        ) : null}
        <ul className="mt-4 flex flex-wrap gap-1.5 text-sm">
          {countries.map((c) => (
            <li key={c.code}>
              <button type="button" onClick={() => setSel(c.code)} className={`rounded-full border px-2.5 py-1 ${sel === c.code ? "border-terra bg-terra text-white" : "border-line bg-card hover:border-terra"}`}>
                {c.flag} {c.name} {total(c)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
