import type { CountryCode } from "@/data/types";

export type Highlight = { title: string; who: string; slug?: string; img?: string; note: string };
export type Museum = {
  slug: string;
  name: string;
  en: string;
  city: string;
  country: CountryCode;
  opened: string;
  blurb: string;
  route: string[];
  highlights: Highlight[];
  site: string;
};

/** 소장 정보는 각 미술관 공식 누리집과 위키미디어 파일 설명을 기준으로 적었습니다. 전시실 위치와 대여 여부는 바뀔 수 있습니다. */
export const MUSEUMS: Museum[] = [
  {
    slug: "louvre", name: "루브르 박물관", en: "Musée du Louvre", city: "파리", country: "fr", opened: "1793",
    blurb: "옛 왕궁이 혁명 뒤 박물관이 됐습니다. 세계에서 관람객이 가장 많은 박물관 가운데 하나. 1989년 유리 피라미드 입구가 생겼습니다.",
    route: ["‘사모트라케의 니케’ 계단에서 시작해 이탈리아 회화 대전시실(그랑드 갤러리)로 가세요.", "‘모나리자’ 방 맞은편 벽의 거대한 ‘가나의 혼인 잔치’(베로네세)도 놓치지 마세요.", "프랑스 대형 회화실(다비드·들라크루아)은 바로 옆입니다. 북유럽 회화는 리슐리외관 위층."],
    highlights: [
      { title: "모나리자", who: "레오나르도 다빈치", slug: "leonardo", img: "leonardo-monalisa", note: "생각보다 작습니다(77×53cm). 방탄유리 앞 인파가 함께 보는 풍경." },
      { title: "나폴레옹 1세의 대관식", who: "자크루이 다비드", slug: "david", img: "david-napoleon", note: "가로 약 10m. 나폴레옹이 왕관을 황후에게 씌워 주는 장면." },
      { title: "민중을 이끄는 자유의 여신", who: "외젠 들라크루아", slug: "delacroix", img: "delacroix-liberty", note: "1830년 7월 혁명." },
      { title: "키테라섬의 순례", who: "앙투안 와토", slug: "watteau", img: "watteau-1", note: "로코코의 시작." },
      { title: "그랑드 오달리스크", who: "앵그르", slug: "ingres", img: "ingres-1", note: "선의 화가." },
      { title: "사냥터의 찰스 1세", who: "반 데이크", slug: "van-dyck", img: "van-dyck-1", note: "왕을 멋지게 보이게 하는 법." },
      { title: "집시 소녀", who: "프란스 할스", slug: "hals", img: "hals-2", note: "빠른 붓질의 웃음." },
      { title: "성 세바스티아노", who: "만테냐", slug: "mantegna", img: "mantegna-3", note: "고대 폐허와 성인." },
    ],
    site: "https://www.louvre.fr/en",
  },
  {
    slug: "uffizi", name: "우피치 미술관", en: "Gallerie degli Uffizi", city: "피렌체", country: "it", opened: "1581 (일반 공개 1769)",
    blurb: "메디치 가문의 관청(우피치=사무실) 건물. 가문의 마지막 상속녀가 ‘피렌체 밖으로 내가지 말라’는 조건으로 소장품을 도시에 남겼습니다.",
    route: ["3층 복도 동쪽에서 조토·치마부에의 큰 성모화(13–14세기)부터 시대순으로 걸으세요.", "보티첼리 방은 늘 붐빕니다. 개관 직후나 저녁이 낫습니다.", "복도 창으로 보이는 베키오 다리 풍경도 볼거리입니다."],
    highlights: [
      { title: "비너스의 탄생", who: "보티첼리", slug: "botticelli", img: "botticelli-venus", note: "조개를 타고 도착한 여신." },
      { title: "프리마베라(봄)", who: "보티첼리", slug: "botticelli", img: "botticelli-primavera", note: "식물 수백 종이 그려졌습니다." },
      { title: "온니산티 마돈나", who: "조토", slug: "giotto", img: "giotto-ognissanti", note: "치마부에의 성모와 나란히 비교." },
      { title: "도니 톤도", who: "미켈란젤로", slug: "michelangelo", img: "michelangelo-doni", note: "미켈란젤로의 거의 유일한 완성 패널화." },
      { title: "우르비노의 비너스", who: "티치아노", slug: "titian", img: "titian-urbino", note: "마네 ‘올랭피아’의 원조." },
      { title: "홀로페르네스의 목을 베는 유디트", who: "아르테미시아 젠틸레스키", slug: "artemisia", img: "artemisia-1", note: "카라바조를 넘어선 힘." },
      { title: "바쿠스", who: "카라바조", slug: "caravaggio", img: "caravaggio-bacchus", note: "포도주 잔에 비친 작은 자화상을 찾아보세요." },
    ],
    site: "https://www.uffizi.it/en",
  },
  {
    slug: "prado", name: "프라도 미술관", en: "Museo del Prado", city: "마드리드", country: "es", opened: "1819",
    blurb: "스페인 왕실 컬렉션이 바탕. 벨라스케스·고야·엘 그레코, 그리고 왕들이 모은 보스·티치아노·루벤스가 한곳에 있습니다.",
    route: ["1층 중앙 큰 홀의 벨라스케스 방(12번 근처)에서 ‘시녀들’부터.", "고야는 시기별로 나뉩니다. 밝은 태피스트리 밑그림 → 궁정 초상 → 아래층 ‘검은 그림’ 순서로.", "보스의 ‘쾌락의 정원’ 앞은 시간을 넉넉히."],
    highlights: [
      { title: "시녀들", who: "벨라스케스", slug: "velazquez", img: "velazquez-1", note: "우리는 왕의 자리에 서 있습니다." },
      { title: "1808년 5월 3일", who: "고야", slug: "goya", img: "goya-1", note: "흰 셔츠의 남자." },
      { title: "옷 벗은 마하 / 옷 입은 마하", who: "고야", slug: "goya", img: "goya-2", note: "두 그림이 나란히." },
      { title: "아들을 삼키는 사투르누스", who: "고야", slug: "goya", img: "goya-3", note: "검은 그림 방." },
      { title: "쾌락의 정원", who: "보스", slug: "bosch", img: "bosch-1", note: "낙원, 쾌락, 지옥." },
      { title: "수태고지", who: "프라 안젤리코", slug: "fra-angelico", img: "fra-angelico-2", note: "낙원 추방 장면이 함께." },
      { title: "1498년 자화상", who: "뒤러", slug: "durer", note: "뮌헨의 유명한 1500년 자화상보다 2년 앞선 멋쟁이 자화상." },
      { title: "엘에스코리알의 무원죄 잉태", who: "무리요", slug: "murillo", img: "murillo-2", note: "세비야의 부드러운 빛." },
    ],
    site: "https://www.museodelprado.es/en",
  },
  {
    slug: "national-gallery", name: "런던 내셔널 갤러리", en: "The National Gallery", city: "런던", country: "gb", opened: "1824",
    blurb: "트라팔가르 광장의 국립 미술관. 상설 전시는 무료입니다. 13세기부터 1900년 무렵까지 유럽 회화를 고르게 갖췄습니다.",
    route: ["세인즈버리관(가장 오래된 그림)에서 시작해 시대순으로 동쪽으로 이동하세요.", "‘대사들’ 앞에서는 오른쪽 옆으로 비켜서서 해골을 찾아보세요.", "터너와 컨스터블은 영국 회화 방에서 나란히."],
    highlights: [
      { title: "아르놀피니 부부의 초상", who: "얀 반 에이크", slug: "van-eyck", img: "van-eyck-1", note: "볼록 거울 속 사람들." },
      { title: "대사들", who: "홀바인", slug: "holbein", img: "holbein-1", note: "비스듬한 해골." },
      { title: "해바라기", who: "고흐", slug: "van-gogh", img: "vangogh-sunflowers", note: "아를의 노란 집을 꾸미려고 그린 연작 가운데 하나." },
      { title: "전함 테메레르", who: "터너", slug: "turner", img: "turner-1", note: "영국인이 가장 사랑하는 그림 투표 1위에 오른 적이 있습니다." },
      { title: "비, 증기, 속도", who: "터너", slug: "turner", img: "turner-2", note: "토끼를 찾아보세요." },
      { title: "건초 마차", who: "컨스터블", slug: "constable", img: "constable-1", note: "서퍽의 여름." },
      { title: "앤드루스 부부", who: "게인즈버러", slug: "gainsborough", img: "gainsborough-2", note: "땅이 주인공." },
      { title: "아니에르의 물놀이", who: "쇠라", slug: "seurat", img: "seurat-2", note: "점묘법 직전의 큰 그림." },
      { title: "석공의 작업장", who: "카날레토", slug: "canaletto", img: "canaletto-1", note: "베네치아의 아침." },
    ],
    site: "https://www.nationalgallery.org.uk/",
  },
  {
    slug: "hermitage", name: "에르미타주 미술관", en: "State Hermitage Museum", city: "상트페테르부르크", country: "ru", opened: "1764 (예카테리나 2세 수집 시작)",
    blurb: "겨울 궁전을 포함한 여러 건물. 예카테리나 2세가 1764년 그림 225점을 사들이며 시작됐습니다. 방문 전 현지 상황과 운영 정보를 꼭 확인하세요.",
    route: ["요르단 계단으로 올라가 궁전의 방들 자체를 즐기세요.", "렘브란트 방에서 ‘돌아온 탕자’ 앞에 앉아 보세요.", "인상주의·마티스는 광장 건너 참모본부 건물에 있습니다."],
    highlights: [
      { title: "돌아온 탕자", who: "렘브란트", slug: "rembrandt", img: "rembrandt-3", note: "아버지의 두 손." },
      { title: "다나에", who: "렘브란트", slug: "rembrandt", note: "1985년 관람객의 공격으로 크게 훼손됐다가 오랜 복원 끝에 다시 걸렸습니다." },
      { title: "리타의 성모", who: "레오나르도 다빈치", slug: "leonardo", note: "젖을 먹이는 성모. 다빈치 작인지 공방 작인지 의견이 갈립니다." },
      { title: "춤", who: "마티스", slug: "matisse", note: "붉은 몸의 다섯 사람이 원을 그리며 춤춥니다(저작권 작품이라 이미지는 싣지 않습니다)." },
      { title: "류트 연주자", who: "카라바조", slug: "caravaggio", note: "악보까지 읽을 수 있게 그렸습니다." },
    ],
    site: "https://www.hermitagemuseum.org/",
  },
  {
    slug: "rijksmuseum", name: "라이크스뮤지엄", en: "Rijksmuseum", city: "암스테르담", country: "nl", opened: "1800 (지금 건물 1885)",
    blurb: "네덜란드 국립 미술관. 17세기 황금시대 컬렉션이 중심이며, 건물 가운데로 자전거 길이 지나갑니다.",
    route: ["2층 ‘명예의 갤러리’를 따라 걸으면 끝에 ‘야경’이 기다립니다.", "페르메이르 작품은 4점 정도가 같은 층에 있습니다.", "인형의 집, 배 모형 같은 공예 소장품도 재미있습니다."],
    highlights: [
      { title: "야경", who: "렘브란트", slug: "rembrandt", img: "rembrandt-1", note: "가로 4m가 넘는 단체 초상." },
      { title: "유대인 신부", who: "렘브란트", slug: "rembrandt", note: "고흐가 ‘이 그림 앞에 2주 앉아 있을 수 있다면 10년을 내놓겠다’고 했다고 전합니다." },
      { title: "우유 따르는 여인", who: "페르메이르", slug: "vermeer", img: "vermeer-2", note: "빵 위의 빛 알갱이." },
      { title: "작은 거리", who: "페르메이르", slug: "vermeer", note: "델프트의 골목 한 장면." },
      { title: "즐거운 술꾼", who: "프란스 할스", slug: "hals", note: "잔을 든 남자가 우리에게 손짓합니다." },
    ],
    site: "https://www.rijksmuseum.nl/en",
  },
  {
    slug: "orsay", name: "오르세 미술관", en: "Musée d'Orsay", city: "파리", country: "fr", opened: "1986",
    blurb: "1900년 만국박람회 때 지은 기차역을 고쳐 만든 미술관. 1848–1914년 프랑스 미술, 특히 인상주의가 가장 풍부합니다.",
    route: ["꼭대기 층(5층) 인상주의 갤러리부터 보고 내려오세요.", "5층 큰 시계 창 뒤에서 센강과 루브르가 보입니다.", "1층 중앙 통로는 사실주의와 아카데미 회화, 조각."],
    highlights: [
      { title: "풀밭 위의 점심", who: "마네", slug: "manet", img: "manet-dejeuner", note: "1863년 낙선전의 스캔들." },
      { title: "올랭피아", who: "마네", slug: "manet", img: "manet-olympia", note: "우리를 똑바로 보는 시선." },
      { title: "이삭 줍기", who: "밀레", slug: "millet", img: "millet-gleaners", note: "허리 굽힌 세 여인." },
      { title: "물랭 드 라 갈레트의 무도회", who: "르누아르", slug: "renoir", img: "renoir-moulin", note: "나뭇잎 사이 햇빛 얼룩." },
      { title: "발레 수업", who: "드가", slug: "degas", img: "degas-class", note: "지친 무용수들." },
      { title: "오르낭의 매장", who: "쿠르베", slug: "courbet", img: "courbet-1", note: "사실주의 선언." },
      { title: "요람", who: "베르트 모리조", slug: "morisot", img: "morisot-1", note: "투명한 커튼." },
      { title: "마루 깎는 사람들", who: "카유보트", slug: "caillebotte", img: "caillebotte-2", note: "도시 노동자의 등." },
      { title: "아를의 침실", who: "고흐", slug: "van-gogh", note: "고흐는 같은 방을 세 번 그렸습니다. 한 점이 오르세에." },
    ],
    site: "https://www.musee-orsay.fr/en",
  },
  {
    slug: "khm", name: "빈 미술사박물관", en: "Kunsthistorisches Museum Wien", city: "빈", country: "at", opened: "1891",
    blurb: "합스부르크 왕가의 컬렉션. 세계에서 브뤼헐 그림이 가장 많은 곳이고, 계단 벽에는 젊은 클림트가 그린 그림이 있습니다.",
    route: ["중앙 계단을 오르며 위를 보세요. 기둥 사이 벽 그림 일부를 젊은 클림트가 그렸습니다.", "브뤼헐 방(10번 근처)은 한 방에 대표작이 모여 있습니다.", "돔 아래 카페는 ‘세상에서 가장 아름다운 카페’로 자주 꼽힙니다."],
    highlights: [
      { title: "바벨탑", who: "브뤼헐", slug: "bruegel", img: "bruegel-1", note: "개미 같은 일꾼들." },
      { title: "눈 속의 사냥꾼", who: "브뤼헐", slug: "bruegel", img: "bruegel-2", note: "겨울 한 장면의 모든 것." },
      { title: "농가의 결혼식", who: "브뤼헐", slug: "bruegel", img: "bruegel-3", note: "신랑은 어디에?" },
      { title: "회화의 기술", who: "페르메이르", slug: "vermeer", note: "페르메이르가 끝까지 팔지 않고 간직한 그림으로 알려졌습니다." },
      { title: "초원의 성모", who: "라파엘로", slug: "raphael", note: "피라미드 구도의 성모자." },
      { title: "로사리오의 성모", who: "카라바조", slug: "caravaggio", note: "큰 제단화." },
      { title: "푸른 옷의 마르가리타 공주", who: "벨라스케스", slug: "velazquez", note: "‘시녀들’의 공주를 오스트리아 친척에게 보낸 초상들." },
      { title: "모피를 두른 엘레나 푸르망", who: "루벤스", slug: "rubens", note: "루벤스가 두 번째 아내를 그린 사적인 그림." },
    ],
    site: "https://www.khm.at/en/",
  },
];

export const museumBySlug = (s: string) => MUSEUMS.find((m) => m.slug === s);
