import type { CountryCode } from "@/data/types";

/** 나라를 더하려면(독일 de, 스페인 es)는 여기와 types.ts의 CountryCode에 더하고, music/art 데이터에 country만 붙이면 됩니다. */
export const COUNTRIES: { code: CountryCode; name: string; en: string; flag: string; worldUrl: string; blurb: string }[] = [
  {
    code: "it",
    name: "이탈리아",
    en: "Italy",
    flag: "🇮🇹",
    worldUrl: "https://nadoo-world.vercel.app/countries/it",
    blurb: "르네상스의 고향이자 오페라가 태어난 나라. 피렌체·로마·베네치아·나폴리가 번갈아 예술의 중심이 됐습니다.",
  },
  {
    code: "fr",
    name: "프랑스",
    en: "France",
    flag: "🇫🇷",
    worldUrl: "https://nadoo-world.vercel.app/countries/fr",
    blurb: "왕의 궁정 음악에서 인상주의와 샹송까지. 19세기 이후 파리는 세계 화가들이 모여드는 도시가 됐습니다.",
  },
  { code: "de", name: "독일", en: "Germany", flag: "🇩🇪", worldUrl: "https://nadoo-world.vercel.app/countries/de", blurb: "바흐에서 베토벤·바그너까지 ‘교향곡과 푸가의 나라’. 미술에서는 뒤러와 프리드리히, 표현주의가 나왔습니다." },
  { code: "at", name: "오스트리아", en: "Austria", flag: "🇦🇹", worldUrl: "https://nadoo-world.vercel.app/countries/at", blurb: "음악의 수도 빈. 하이든·모차르트·슈베르트·슈트라우스, 그리고 클림트와 실레의 황금빛 세기말." },
  { code: "gb", name: "영국", en: "United Kingdom", flag: "🇬🇧", worldUrl: "https://nadoo-world.vercel.app/countries/gb", blurb: "퍼셀과 엘가, 그리고 비틀스와 퀸. 미술은 터너와 컨스터블의 하늘, 라파엘 전파의 이야기 그림." },
  { code: "es", name: "스페인", en: "Spain", flag: "🇪🇸", worldUrl: "https://nadoo-world.vercel.app/countries/es", blurb: "엘 그레코·벨라스케스·고야에서 피카소·달리·미로까지. 기타와 플라멩코의 색은 음악에도 스며 있습니다." },
  { code: "nl", name: "네덜란드", en: "Netherlands", flag: "🇳🇱", worldUrl: "https://nadoo-world.vercel.app/countries/nl", blurb: "17세기 황금시대의 렘브란트와 페르메이르, 그리고 고흐와 몬드리안." },
  { code: "be", name: "벨기에", en: "Belgium", flag: "🇧🇪", worldUrl: "https://nadoo-world.vercel.app/countries/be", blurb: "옛 플랑드르. 반 에이크와 브뤼헐, 루벤스의 고향이자 마그리트의 초현실주의가 태어난 곳." },
  { code: "ru", name: "러시아", en: "Russia", flag: "🇷🇺", worldUrl: "https://nadoo-world.vercel.app/countries/ru", blurb: "차이콥스키와 5인조, 스트라빈스키와 쇼스타코비치. 미술은 레핀의 사실주의에서 칸딘스키·말레비치의 추상까지." },
  { code: "pl", name: "폴란드", en: "Poland", flag: "🇵🇱", worldUrl: "https://nadoo-world.vercel.app/countries/pl", blurb: "쇼팽의 나라. 마주르카와 폴로네즈 같은 춤이 음악이 됐습니다." },
  { code: "cz", name: "체코", en: "Czechia", flag: "🇨🇿", worldUrl: "https://nadoo-world.vercel.app/countries/cz", blurb: "보헤미아와 모라비아. 스메타나·드보르자크·야나체크, 그리고 아르누보의 무하." },
  { code: "hu", name: "헝가리", en: "Hungary", flag: "🇭🇺", worldUrl: "https://nadoo-world.vercel.app/countries/hu", blurb: "리스트의 화려함과 바르토크·코다이의 민요 연구." },
  { code: "no", name: "노르웨이", en: "Norway", flag: "🇳🇴", worldUrl: "https://nadoo-world.vercel.app/countries/no", blurb: "그리그의 피오르와 트롤, 뭉크의 절규." },
  { code: "se", name: "스웨덴", en: "Sweden", flag: "🇸🇪", worldUrl: "https://nadoo-world.vercel.app/countries/se", blurb: "칼 라르손의 행복한 집, 그리고 아바의 팝." },
  { code: "fi", name: "핀란드", en: "Finland", flag: "🇫🇮", worldUrl: "https://nadoo-world.vercel.app/countries/fi", blurb: "숲과 호수의 나라. 시벨리우스의 ‘핀란디아’." },
  { code: "dk", name: "덴마크", en: "Denmark", flag: "🇩🇰", worldUrl: "https://nadoo-world.vercel.app/countries/dk", blurb: "닐센의 교향곡과 함메르쇠이의 고요한 회색 방." },
  { code: "ro", name: "루마니아", en: "Romania", flag: "🇷🇴", worldUrl: "https://nadoo-world.vercel.app/countries/ro", blurb: "에네스쿠의 랩소디와 민속 바이올린." },
  { code: "ch", name: "스위스", en: "Switzerland", flag: "🇨🇭", worldUrl: "https://nadoo-world.vercel.app/countries/ch", blurb: "알프스 아래 베른에서 태어난 파울 클레." },
];

export const countryByCode = (code: string) => COUNTRIES.find((c) => c.code === code);

export const ERAS: { id: import("@/data/types").Era; name: string; en: string; range: string }[] = [
  { id: "renaissance", name: "르네상스", en: "Renaissance", range: "약 1300–1600" },
  { id: "baroque", name: "바로크", en: "Baroque", range: "약 1600–1750" },
  { id: "classical", name: "고전주의·신고전주의", en: "Classical", range: "약 1750–1820" },
  { id: "romantic", name: "낭만주의", en: "Romantic", range: "약 1820–1870" },
  { id: "impressionism", name: "인상주의·세기말", en: "Impressionism & fin de siècle", range: "약 1870–1910" },
  { id: "modern", name: "근현대", en: "Modern", range: "약 1900–" },
];
export const eraName = (id: string) => ERAS.find((e) => e.id === id)?.name ?? id;

/** 사람이 그 나라에 속하는지 (태어난 나라 + also) */
export const inCountry = (p: { country: string; also?: string[] }, code: string) => p.country === code || (p.also ?? []).includes(code);
