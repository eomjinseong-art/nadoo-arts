"use client";

import Link from "next/link";
import { useState } from "react";
import type { CatQ, QuizCat } from "@/data/quiz";

type Mode = QuizCat | "daily";
type Round = { qs: CatQ[]; opts: string[][] };

function shuffle<T>(a: T[]) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

export function QuizRunner({ pool, cats }: { pool: CatQ[]; cats: { id: QuizCat; title: string; en: string }[] }) {
  const [mode, setMode] = useState<Mode>("daily");
  const [round, setRound] = useState<Round | null>(null);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);

  const modes: { id: Mode; title: string; en: string; n: number }[] = [
    { id: "daily", title: "오늘의 도전", en: "Daily mix", n: pool.length },
    ...cats.map((c) => ({ ...c, n: pool.filter((q) => q.cat === c.id).length })),
  ];
  const current = modes.find((m) => m.id === mode)!;

  function start(m: Mode) {
    const src = m === "daily" ? pool : pool.filter((q) => q.cat === m);
    // 오늘의 도전은 범주가 고루 섞이도록 범주별로 돌아가며 뽑습니다.
    let qs: CatQ[];
    if (m === "daily") {
      const byCat = cats.map((c) => shuffle(src.filter((q) => q.cat === c.id)));
      qs = [];
      let k = 0;
      while (qs.length < 10) {
        const list = byCat[k % byCat.length];
        if (list.length) qs.push(list.pop()!);
        k++;
      }
      qs = shuffle(qs);
    } else qs = shuffle(src).slice(0, 10);
    setMode(m);
    setRound({ qs, opts: qs.map((q) => (q.cat === "ox" ? q.options : shuffle(q.options))) });
    setIndex(0);
    setPicked(null);
    setAnswers([]);
  }

  function choose(o: string) {
    if (picked || !round) return;
    setPicked(o);
    setAnswers((a) => [...a, o]);
  }

  const done = round && index >= round.qs.length;
  const score = round ? answers.filter((a, i) => a === round.qs[i]?.answer).length : 0;

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="퀴즈 범주">
        {modes.map((m) => (
          <button
            key={m.id}
            type="button"
            role="tab"
            aria-selected={mode === m.id}
            onClick={() => { setMode(m.id); setRound(null); }}
            className={`rounded-full border px-3 py-1.5 text-sm ${mode === m.id ? "border-terra bg-terra text-white" : "border-line bg-card text-ink hover:border-terra"}`}
          >
            {m.title} <span className="opacity-70">{m.n}</span>
          </button>
        ))}
      </div>

      <section className="mt-6 rounded-lg border border-line bg-card p-5">
        <h2 className="font-serif text-2xl text-ink">
          {current.title} <span className="font-sans text-sm font-normal text-muted">/ {current.en}</span>
        </h2>
        {!round ? (
          <div className="mt-4">
            <p className="text-muted">
              {mode === "daily" ? "모든 범주에서 고루 섞어 10문제를 뽑습니다." : `이 범주 ${current.n}문제 가운데 10문제를 무작위로 뽑습니다.`} 끝나면 점수와 틀린 문제 해설을 보여 드립니다.
            </p>
            <button type="button" onClick={() => start(mode)} className="mt-4 rounded-full bg-terra px-5 py-2 text-white hover:bg-terra-deep">
              시작하기 →
            </button>
          </div>
        ) : done ? (
          <div className="mt-4">
            <p className="text-lg text-ink">
              10문제 중 <b className="text-terra">{score}</b>개 맞혔습니다.
            </p>
            <p className="mt-1 text-sm text-muted">
              {score === 10 ? "완벽! 오늘의 도슨트는 당신입니다." : score >= 7 ? "훌륭해요. 틀린 문제만 다시 볼까요?" : score >= 4 ? "좋아요. 아래 해설을 읽고 다시 도전해 보세요." : "괜찮아요. 미술관은 원래 두 번 가는 곳입니다."}
            </p>
            {score < 10 ? (
              <div className="mt-5">
                <h3 className="font-serif text-lg text-ink">틀린 문제 다시 보기</h3>
                <ul className="mt-2 space-y-3">
                  {round.qs.map((q, i) =>
                    answers[i] === q.answer ? null : (
                      <li key={q.id} className="rounded-md border border-line bg-bg p-3 text-sm">
                        <p className="text-ink">{q.clue}</p>
                        <p className="mt-1">
                          <span className="text-terra">내 답: {answers[i]}</span> · <span className="text-laurel">정답: {q.answer}</span>
                        </p>
                        <p className="mt-1 text-muted">{q.why}</p>
                        {q.href ? <Link href={q.href} className="mt-1 inline-block text-laurel underline underline-offset-4">자세히 보기</Link> : null}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ) : null}
            <div className="mt-5 flex flex-wrap gap-2">
              <button type="button" onClick={() => start(mode)} className="rounded-full bg-terra px-4 py-2 text-sm text-white hover:bg-terra-deep">새 문제로 다시</button>
              {mode !== "daily" ? <button type="button" onClick={() => start("daily")} className="rounded-full border border-terra px-4 py-2 text-sm text-terra hover:bg-terra/10">오늘의 도전</button> : null}
            </div>
          </div>
        ) : (
          (() => {
            const q = round.qs[index];
            const opts = round.opts[index];
            return (
              <div className="mt-4">
                <p className="text-xs text-muted">
                  {index + 1} / 10 · 점수 {score}
                  {mode === "daily" ? ` · ${cats.find((c) => c.id === q.cat)?.title}` : ""}
                </p>
                <p className="mt-2 text-lg leading-8 text-ink">💡 {q.clue}</p>
                <div className={`mt-4 grid gap-2 ${q.cat === "ox" ? "grid-cols-2" : "sm:grid-cols-2"}`}>
                  {opts.map((o) => {
                    const st = !picked ? "idle" : o === q.answer ? "right" : o === picked ? "wrong" : "idle";
                    return (
                      <button
                        key={o}
                        type="button"
                        onClick={() => choose(o)}
                        disabled={!!picked}
                        className={`rounded-md border px-4 py-3 text-left text-base ${q.cat === "ox" ? "text-center text-2xl font-bold" : ""} ${st === "right" ? "border-laurel bg-laurel/10 text-laurel" : st === "wrong" ? "border-terra bg-terra/10 text-terra" : "border-line bg-bg hover:border-terra"}`}
                      >
                        {o}
                      </button>
                    );
                  })}
                </div>
                {picked ? (
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                    <span className={picked === q.answer ? "text-laurel" : "text-terra"}>{picked === q.answer ? "정답!" : `아쉬워요. 정답은 ${q.answer}.`}</span>
                    <span className="text-muted">{q.why}</span>
                    <button type="button" onClick={() => { setIndex((i) => i + 1); setPicked(null); }} className="ml-auto rounded-full bg-terra px-4 py-2 text-white hover:bg-terra-deep">
                      {index === 9 ? "결과 보기" : "다음 →"}
                    </button>
                  </div>
                ) : null}
              </div>
            );
          })()
        )}
      </section>
    </div>
  );
}
