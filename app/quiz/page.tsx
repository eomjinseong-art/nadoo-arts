import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { QuizRunner } from "@/components/QuizRunner";
import { ALL_QUIZ, QUIZ_CATS } from "@/data/quiz";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

const description = `유럽 음악·미술 상식 퀴즈 ${ALL_QUIZ.length}문제. 이 그림 누구 작품?, 이 곡 누구 곡?, 나라·시대·미술관 맞히기, OX, 그리고 10문제 ‘오늘의 도전’.`;
export const metadata = pageMetadata({ title: "퀴즈: 유럽 음악·미술 상식", description, path: "/quiz" });

export default function QuizPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd data={jsonLd([breadcrumbLd([{ name: "홈", path: "/" }, { name: "퀴즈", path: "/quiz" }])])} />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "퀴즈" }]} />
      <PageHead kicker="QUIZ" title="퀴즈" lead={`모두 ${ALL_QUIZ.length}문제. 범주를 고르거나 ‘오늘의 도전’으로 10문제를 섞어 풀어 보세요. 답마다 짧은 해설이 붙습니다.`} />
      <div className="mt-8">
        <QuizRunner pool={ALL_QUIZ} cats={QUIZ_CATS} />
      </div>
    </div>
  );
}
