import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { Quiz } from "@/components/Quiz";
import { ART_QUIZ, MUSIC_QUIZ } from "@/data/quiz";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

const description = "‘이 그림 누구 작품?’ ‘이 곡 누구 곡?’ 그림과 소리 없이 글 힌트만 보고 이탈리아·프랑스 예술가를 맞혀 보세요.";
export const metadata = pageMetadata({ title: "퀴즈: 이 그림 누구 작품? 이 곡 누구 곡?", description, path: "/quiz" });

export default function QuizPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "퀴즈", path: "/quiz" }])])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "퀴즈" }]} />
      <PageHead kicker="QUIZ" title="퀴즈" lead="그림도 소리도 없이, 글 힌트만으로 맞혀 보세요. 틀려도 바로 그 사람 글로 갈 수 있습니다." />
      <div className="mt-8 space-y-8">
        <Quiz title="이 그림 누구 작품?" en="Whose painting?" questions={ART_QUIZ} base="/art" />
        <Quiz title="이 곡 누구 곡?" en="Whose music?" questions={MUSIC_QUIZ} base="/music" />
      </div>
    </div>
  );
}
