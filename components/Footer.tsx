import Link from "next/link";
import { CoupangBanner } from "@/components/CoupangBanner";
import { SisterSites } from "@/components/SisterSites";
import { BRAND_LINE, NAV, SITE_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-stone/80">
      <CoupangBanner />
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm leading-6 text-muted">
        <p className="font-serif text-base text-ink">{SITE_NAME}</p>
        <p className="mt-1 text-xs tracking-wide text-terra">{BRAND_LINE}</p>
        <div className="mt-4 max-w-3xl space-y-2">
          <p>
            나두예술의 글은 공개된 미술관·음악 자료와 개설서를 참고해 우리말로 다시 쓴 것입니다. 남의 문장을 그대로 옮기지 않았고, 확실하지 않은 이야기는 &lsquo;전해지는 이야기&rsquo;라고 적습니다.
          </p>
          <p>그림 사진은 위키미디어 공용의 퍼블릭 도메인 파일만 씁니다. 저작권이 남은 작품은 링크로만 안내합니다. 영화 제목과 상표는 각 권리자의 것입니다.</p>
        </div>
        <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs">
          <Link href="/" className="underline decoration-line underline-offset-4 hover:text-terra">
            홈
          </Link>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="underline decoration-line underline-offset-4 hover:text-terra">
              {item.label}
            </Link>
          ))}
        </nav>
        <SisterSites variant="footer" />
      </div>
    </footer>
  );
}
