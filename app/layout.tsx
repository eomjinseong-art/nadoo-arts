import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OG_IMAGE } from "@/lib/seo";
import { SITE_NAME, SITE_SUB, SITE_TAGLINE, SITE_URL } from "@/lib/site";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const sans = Noto_Sans_KR({ subsets: ["latin"], variable: "--font-noto-sans", weight: ["400", "500", "700"] });
const serif = Noto_Serif_KR({ subsets: ["latin"], variable: "--font-noto-serif", weight: ["400", "600", "700"] });

const description = `${SITE_TAGLINE}. ${SITE_SUB}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} · 쉬운 음악·미술 이야기`, template: `%s · ${SITE_NAME}` },
  description,
  applicationName: SITE_NAME,
  keywords: [
    "나두예술", "Nadoo Arts", "클래식 음악", "서양 미술사", "르네상스", "바로크", "인상주의", "유럽 작곡가", "유럽 화가", "바흐", "베토벤", "모차르트", "렘브란트", "고야", "클림트", "루브르", "프라도", "미술관 투어", "음악 계보", "예술 퀴즈",
    "다빈치", "미켈란젤로", "모네", "고흐", "베르디", "푸치니", "드뷔시", "라벨", "비발디", "에디트 피아프",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} · 쉬운 음악·미술 이야기`,
    description,
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title: SITE_NAME, description, images: [OG_IMAGE.url] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={`${sans.variable} ${serif.variable} min-h-screen bg-bg font-sans text-ink antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
