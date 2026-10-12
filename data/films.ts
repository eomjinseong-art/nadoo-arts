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
  { title: "아마데우스", orig: "Amadeus", year: "1984", director: "밀로시 포르만", about: "mozart", note: "모차르트와 궁정 작곡가 살리에리(이탈리아 레냐고 출신). 살리에리가 질투해 모차르트를 해쳤다는 이야기는 소문과 연극에서 온 허구입니다. 아카데미 작품상 등 8개 부문 수상." },
  { title: "불멸의 연인", orig: "Immortal Beloved", year: "1994", director: "버나드 로즈", about: "beethoven", note: "게리 올드먼이 베토벤. 베토벤이 남긴 ‘불멸의 연인’ 편지의 주인공을 찾는 이야기로, 영화의 결론은 학계 정설이 아닌 상상입니다." },
  { title: "카핑 베토벤", orig: "Copying Beethoven", year: "2006", director: "아그니에슈카 홀란드", about: "beethoven", note: "에드 해리스가 베토벤. 교향곡 9번 초연을 돕는 젊은 악보 필사가는 지어낸 인물입니다." },
  { title: "쇼팽의 푸른 노트", orig: "La note bleue", year: "1991", director: "안제이 줄랍스키", about: "chopin", note: "쇼팽과 조르주 상드의 마지막 여름. 피아니스트 야누시 올레이니차크가 쇼팽을 맡았습니다." },
  { title: "쇼팽, 파리 소나타", orig: "Chopin, Chopin!", year: "2025", director: "미하우 크비에친스키", about: "chopin", note: "파리 사교계의 스타였던 쇼팽의 마지막 몇 해를 그린 폴란드 영화." },
  { title: "차이콥스키의 아내", orig: "Жена Чайковского", year: "2022", director: "키릴 세레브렌니코프", about: "tchaikovsky", note: "차이콥스키와 짧은 결혼 생활을 한 안토니나의 시선으로 본 이야기. 칸 영화제 경쟁 부문 상영." },
  { title: "말러, 카우치에 눕다", orig: "Mahler auf der Couch", year: "2010", director: "퍼시 애들런, 펠릭스 애들런", about: "mahler", note: "1910년 말러가 프로이트를 찾아간 실제 만남에서 출발한 이야기. 대화 내용은 상상입니다." },
  { title: "노웨어 보이", orig: "Nowhere Boy", year: "2009", director: "샘 테일러존슨", about: "beatles", note: "10대의 존 레넌이 폴 매카트니를 만나 밴드를 시작하기까지." },
  { title: "보헤미안 랩소디", orig: "Bohemian Rhapsody", year: "2018", director: "브라이언 싱어", about: "queen", note: "퀸과 프레디 머큐리, 1985년 라이브 에이드까지. 라미 말렉이 아카데미 남우주연상을 받았습니다. 사건 순서를 바꾼 곳이 있습니다." },
  { title: "맘마 미아!", orig: "Mamma Mia!", year: "2008", director: "필리다 로이드", about: "abba", note: "아바의 노래로 만든 뮤지컬(1999)을 영화로. 그리스 섬이 배경입니다." },
  { title: "진주 귀걸이를 한 소녀", orig: "Girl with a Pearl Earring", year: "2003", director: "피터 웨버", about: "vermeer", note: "스칼릿 조핸슨, 콜린 퍼스. 트레이시 슈발리에 소설이 원작이며 하녀 그리트는 지어낸 인물입니다." },
  { title: "야경: 렘브란트의 음모", orig: "Nightwatching", year: "2007", director: "피터 그리너웨이", about: "rembrandt", note: "‘야경’ 속에 살인 음모가 숨어 있다는 상상으로 만든 영화." },
  { title: "미스터 터너", orig: "Mr. Turner", year: "2014", director: "마이크 리", about: "turner", note: "말년의 터너. 티모시 스폴이 칸 영화제 남우주연상을 받았습니다." },
  { title: "고야의 유령", orig: "Goya's Ghosts", year: "2006", director: "밀로시 포르만", about: "goya", note: "스페인 종교 재판과 나폴레옹 전쟁 시대. 고야(스텔란 스카스가드)는 관찰자로 나오고 주인공들은 지어낸 인물입니다." },
  { title: "클림트", orig: "Klimt", year: "2006", director: "라울 루이스", about: "klimt", note: "존 말코비치가 클림트. 죽어 가는 화가의 기억을 꿈처럼 엮었습니다." },
  { title: "우먼 인 골드", orig: "Woman in Gold", year: "2015", director: "사이먼 커티스", about: "klimt", note: "나치에게 빼앗긴 클림트의 ‘아델레 블로흐바우어의 초상 I’을 되찾는 실화. 헬렌 미렌 주연." },
  { title: "에곤 쉴레: 욕망이 그린 그림", orig: "Egon Schiele: Tod und Mädchen", year: "2016", director: "디터 베르너", about: "schiele", note: "실레의 짧은 삶과 모델들. 한국어 제목은 개봉명 기준이며 다를 수 있습니다." },
  { title: "에드바르 뭉크", orig: "Edvard Munch", year: "1974", director: "피터 왓킨스", about: "munch", note: "다큐멘터리처럼 찍은 노르웨이·스웨덴 TV 영화." },
  { title: "에피 그레이", orig: "Effie Gray", year: "2014", director: "리처드 랙스턴", about: "millais", note: "비평가 러스킨의 아내 에피와 밀레이의 사랑. 각본 에마 톰프슨." },
];
