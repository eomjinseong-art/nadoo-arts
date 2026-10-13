"use client";

import Link from "next/link";
import { useState } from "react";
import type { QuizQ } from "@/data/quiz";
import { CoupangCard } from "@/components/CoupangCard";

export function Quiz({ title, en, questions, base }: { title: string; en: string; questions: QuizQ[]; base: string }) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const done = index >= questions.length;
  const q = questions[index];
  const shift = (index * 3 + 1) % 4;
  const options = q ? [...q.options.slice(shift), ...q.options.slice(0, shift)] : [];

  function choose(option: string) {
    if (picked) return;
    setPicked(option);
    if (option === q.answer) setScore((s) => s + 1);
  }

  return (
    <section className="rounded-lg border border-line bg-card p-5">
      <h2 className="font-serif text-2xl text-ink">
        {title} <span className="font-sans text-sm font-normal text-muted">/ {en}</span>
      </h2>
      {done ? (
        <div className="mt-4">
          <p className="text-lg text-ink">
            {questions.length}문제 중 <b className="text-terra">{score}</b>개 맞혔습니다.
          </p>
          <p className="mt-1 text-sm text-muted">{score === questions.length ? "완벽! 오늘의 도슨트는 당신입니다." : score >= questions.length / 2 ? "좋아요. 틀린 사람 글을 읽고 다시 도전해 보세요." : "괜찮아요. 미술관은 원래 두 번 가는 곳입니다."}</p>
          <button type="button" onClick={() => { setIndex(0); setPicked(null); setScore(0); }} className="mt-4 rounded-full border border-terra px-4 py-2 text-sm text-terra hover:bg-terra/10">
            다시 풀기
          </button>
          <CoupangCard />
        </div>
      ) : (
        <div className="mt-4">
          <p className="text-xs text-muted">
            {index + 1} / {questions.length} · 점수 {score}
          </p>
          <p className="mt-2 text-lg leading-8 text-ink">💡 {q.clue}</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {options.map((o) => {
              const state = !picked ? "idle" : o === q.answer ? "right" : o === picked ? "wrong" : "idle";
              return (
                <button
                  key={o}
                  type="button"
                  onClick={() => choose(o)}
                  disabled={!!picked}
                  className={`rounded-md border px-4 py-3 text-left text-base ${state === "right" ? "border-laurel bg-laurel/10 text-laurel" : state === "wrong" ? "border-terra bg-terra/10 text-terra" : "border-line bg-bg hover:border-terra"}`}
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
              <Link href={`${base}/${q.slug}`} className="text-laurel underline underline-offset-4">글 보기</Link>
              <button type="button" onClick={() => { setIndex((i) => i + 1); setPicked(null); }} className="ml-auto rounded-full bg-terra px-4 py-2 text-white hover:bg-terra-deep">
                다음 →
              </button>
            </div>
          ) : null}
        </div>
      )}
    </section>
  );
}
