export type Film = {
  title: string;
  orig: string;
  year: string;
  director: string;
  about: string;
  link?: string;
  note: string;
  context?: boolean;
};

/** 연도·감독·수상은 공개 영화 데이터베이스와 백과로 확인했습니다. 한국어 제목은 국내 개봉명과 다를 수 있습니다. */
export const FILMS: Film[] = [
  { title: "라 비 앙 로즈", orig: "La Môme", year: "2007", director: "올리비에 다앙", about: "piaf", note: "에디트 피아프의 일생. 마리옹 코티야르가 아카데미 여우주연상을 받았습니다." },
  { title: "반 고흐: 영원의 문에서", orig: "At Eternity's Gate", year: "2018", director: "줄리언 슈나벨", about: "van-gogh", note: "아를과 오베르 시절. 윌렘 대포가 아카데미 남우주연상 후보에 올랐습니다." },
  { title: "러빙 빈센트", orig: "Loving Vincent", year: "2017", director: "도로타 코비엘라, 휴 웰치먼", about: "van-gogh", note: "화가들이 유화로 한 장 한 장 그린 장편 애니메이션." },
  { title: "열정의 랩소디", orig: "Lust for Life", year: "1956", director: "빈센트 미넬리", about: "van-gogh", note: "커크 더글러스가 고흐, 앤서니 퀸이 고갱. 퀸이 아카데미 남우조연상을 받았습니다." },
  { title: "카라바조", orig: "Caravaggio", year: "1986", director: "데릭 저먼", about: "caravaggio", note: "카라바조의 그림을 살아 있는 장면(타블로 비방)처럼 연출한 영국 영화." },
  { title: "카라바조의 그림자", orig: "L'ombra di Caravaggio", year: "2022", director: "미켈레 플라치도", about: "caravaggio", note: "교황청 조사관이 카라바조의 삶을 뒤쫓는 이탈리아 영화." },
  { title: "고뇌와 환희", orig: "The Agony and the Ecstasy", year: "1965", director: "캐럴 리드", about: "michelangelo", note: "시스티나 천장화를 두고 미켈란젤로(찰턴 헤스턴)와 교황 율리우스 2세(렉스 해리슨)가 부딪칩니다." },
  { title: "르누아르", orig: "Renoir", year: "2012", director: "질 부르도", about: "renoir", note: "말년의 르누아르와 아들 장 르누아르, 그리고 모델 이야기." },
  { title: "세잔과 졸라", orig: "Cézanne et moi", year: "2016", director: "다니엘 톰슨", about: "cezanne", note: "세잔과 에밀 졸라의 40년 우정과 갈등." },
  { title: "모딜리아니", orig: "Modigliani", year: "2004", director: "믹 데이비스", about: "modigliani", note: "앤디 가르시아 주연. 피카소와의 경쟁을 극적으로 꾸몄습니다(사실과 다른 부분이 많음)." },
  { title: "파가니니: 악마의 바이올리니스트", orig: "The Devil's Violinist", year: "2013", director: "버나드 로즈", about: "paganini", note: "바이올리니스트 데이비드 개릿이 파가니니를 연기하고 직접 연주했습니다." },
  { title: "볼레로", orig: "Boléro", year: "2024", director: "안 퐁텐", about: "ravel", note: "라벨이 ‘볼레로’를 쓰기까지. 라파엘 페르소나즈가 라벨을 맡았습니다." },
  { title: "엔니오: 더 마에스트로", orig: "Ennio", year: "2021", director: "주세페 토르나토레", about: "morricone", note: "모리코네의 삶과 음악을 담은 다큐멘터리. ‘시네마 천국’ 감독이 만들었습니다." },
  { title: "아마데우스", orig: "Amadeus", year: "1984", director: "밀로시 포르만", about: "", context: true, note: "참고용. 모차르트는 오스트리아 작곡가라 이 사이트의 이탈리아·프랑스 목록에는 없습니다. 다만 라이벌로 나오는 살리에리는 이탈리아(레냐고) 출신입니다. 둘의 ‘독살’ 이야기는 소문과 연극에서 온 허구입니다. 아카데미 작품상 등 8개 부문 수상." },
];
