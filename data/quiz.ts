import { painters } from "@/data/art";
import { COUNTRIES, ERAS, countryByCode, eraName } from "@/data/countries";
import { composers } from "@/data/music";
import { MUSEUMS } from "@/data/museums";
import { shortName } from "@/lib/people";

export type QuizQ = { clue: string; answer: string; options: string[]; why: string; slug: string };
/** 범주가 붙은 문제. href는 해설 링크 */
export type CatQ = { id: string; cat: QuizCat; clue: string; answer: string; options: string[]; why: string; href?: string };
export type QuizCat = "art" | "music" | "country" | "era" | "museum" | "ox";

export const ART_QUIZ: QuizQ[] = [
  { clue: "조개를 타고 바다에서 막 도착한 여신. 왼쪽에서 바람의 신이 입김을 붑니다.", answer: "보티첼리", options: ["보티첼리", "티치아노", "라파엘로", "조토"], why: "‘비너스의 탄생’, 우피치 미술관.", slug: "botticelli" },
  { clue: "닿을 듯 말 듯한 두 손가락. 바티칸 예배당 천장에 있습니다.", answer: "미켈란젤로", options: ["다빈치", "미켈란젤로", "라파엘로", "카라바조"], why: "‘아담의 창조’, 시스티나 예배당.", slug: "michelangelo" },
  { clue: "창문 빛줄기와 손가락이 세금 걷는 사람을 가리킵니다. 배경은 어둡습니다.", answer: "카라바조", options: ["푸생", "카라바조", "티치아노", "다비드"], why: "‘성 마태오의 소명’, 로마 산 루이지 데이 프란체시.", slug: "caravaggio" },
  { clue: "안개 낀 항구, 주황색 해 하나. 한 사조의 이름이 이 그림 제목에서 나왔습니다.", answer: "모네", options: ["마네", "모네", "르누아르", "드가"], why: "‘인상, 해돋이’, 마르모탕 모네 미술관.", slug: "monet" },
  { clue: "지팡이를 짚은 노선생 주위로 지친 발레리나들이 등을 긁습니다.", answer: "드가", options: ["르누아르", "드가", "마네", "세잔"], why: "‘발레 수업’, 오르세 미술관.", slug: "degas" },
  { clue: "추수 끝난 들판에서 허리 굽혀 낟알을 줍는 여인 셋.", answer: "밀레", options: ["밀레", "고흐", "세잔", "들라크루아"], why: "‘이삭 줍기’, 오르세 미술관.", slug: "millet" },
  { clue: "삼색기를 든 여인이 시체를 넘어 앞으로 나아갑니다. 1830년 7월.", answer: "들라크루아", options: ["다비드", "들라크루아", "마네", "푸생"], why: "‘민중을 이끄는 자유의 여신’, 루브르.", slug: "delacroix" },
  { clue: "욕조에 기댄 채 숨진 혁명가. 손에는 편지, 위쪽은 텅 빈 벽.", answer: "다비드", options: ["다비드", "들라크루아", "카라바조", "앵그르"], why: "‘마라의 죽음’, 브뤼셀 왕립미술관.", slug: "david" },
  { clue: "사이프러스 나무가 불꽃처럼 솟고 하늘이 소용돌이칩니다. 요양원 창밖 풍경.", answer: "고흐", options: ["고흐", "모네", "마티스", "세잔"], why: "‘별이 빛나는 밤’, 뉴욕 MoMA.", slug: "van-gogh" },
  { clue: "두 남자가 병을 사이에 두고 카드를 봅니다. 고향 산도 수십 번 그린 화가.", answer: "세잔", options: ["드가", "세잔", "피카소", "마네"], why: "‘카드 놀이하는 사람들’, 오르세 외.", slug: "cezanne" },
  { clue: "긴 목, 기울어진 고개, 눈동자 없는 아몬드 눈. 연인을 여러 번 그렸습니다.", answer: "모딜리아니", options: ["모딜리아니", "피카소", "마티스", "르누아르"], why: "‘잔 에뷔테른의 초상’.", slug: "modigliani" },
  { clue: "손가락을 하늘로 든 철학자와 땅을 가리키는 철학자가 계단 위를 걸어옵니다.", answer: "라파엘로", options: ["라파엘로", "미켈란젤로", "다빈치", "보티첼리"], why: "‘아테네 학당’, 바티칸.", slug: "raphael" },
  { clue: "열세 명이 긴 식탁에. 한마디 말에 모두 놀라 셋씩 묶여 웅성거립니다.", answer: "다빈치", options: ["조토", "다빈치", "티치아노", "카라바조"], why: "‘최후의 만찬’, 밀라노.", slug: "leonardo" },
  { clue: "빨강·초록·파랑 세 색뿐. 다섯 사람이 손을 잡고 둥글게 돕니다.", answer: "마티스", options: ["마티스", "피카소", "고흐", "모딜리아니"], why: "‘춤’, 에르미타주 미술관.", slug: "matisse" },
  { clue: "흑백과 회색의 거대한 그림. 폭격당한 스페인 마을의 비명.", answer: "피카소", options: ["피카소", "마티스", "다비드", "들라크루아"], why: "‘게르니카’, 레이나 소피아.", slug: "picasso" },
];

export const MUSIC_QUIZ: QuizQ[] = [
  { clue: "바이올린이 새소리, 천둥, 얼음 위 걸음을 흉내 냅니다. 계절마다 시가 붙어 있습니다.", answer: "비발디", options: ["비발디", "스카를라티", "라모", "륄리"], why: "‘사계’.", slug: "vivaldi" },
  { clue: "작은북 리듬 하나가 15분 동안 반복되며 점점 커지기만 합니다.", answer: "라벨", options: ["드뷔시", "라벨", "사티", "포레"], why: "‘볼레로’(1928).", slug: "ravel" },
  { clue: "‘공주는 잠 못 이루고…’ 마지막에 ‘빈체로!(이기리라)’.", answer: "푸치니", options: ["베르디", "푸치니", "로시니", "도니체티"], why: "‘투란도트’의 ‘Nessun dorma’.", slug: "puccini" },
  { clue: "담배 공장의 집시 여인이 하바네라 리듬으로 ‘사랑은 길들지 않는 새’라고 노래합니다.", answer: "비제", options: ["비제", "생상스", "베를리오즈", "포레"], why: "‘카르멘’.", slug: "bizet" },
  { clue: "자정을 알리는 하프 열두 번. 해골들이 바이올린에 맞춰 춤춥니다.", answer: "생상스", options: ["베를리오즈", "생상스", "라벨", "드뷔시"], why: "‘죽음의 무도’.", slug: "saint-saens" },
  { clue: "느리고 단순한 피아노 곡 세 개. 고대 그리스 소년들의 춤에서 이름을 땄다고 합니다.", answer: "사티", options: ["사티", "드뷔시", "포레", "라벨"], why: "‘짐노페디’.", slug: "satie" },
  { clue: "‘가라, 생각이여, 금빛 날개를 타고’. 포로가 된 히브리 사람들의 합창.", answer: "베르디", options: ["베르디", "푸치니", "벨리니", "몬테베르디"], why: "‘나부코’.", slug: "verdi" },
  { clue: "말 달리는 행진으로 끝나는 서곡. 사과를 머리에 얹은 아들 이야기.", answer: "로시니", options: ["로시니", "도니체티", "베르디", "파가니니"], why: "‘기욤 텔(윌리엄 텔)’ 서곡.", slug: "rossini" },
  { clue: "바이올린 독주곡 24번. 짧은 주제를 리스트, 브람스, 라흐마니노프가 다시 썼습니다.", answer: "파가니니", options: ["파가니니", "비발디", "베를리오즈", "생상스"], why: "‘24개의 카프리스’ 24번.", slug: "paganini" },
  { clue: "사랑하는 배우를 뜻하는 가락이 다섯 악장 내내 쫓아다닙니다. 단두대로 가는 행진도 있습니다.", answer: "베를리오즈", options: ["베를리오즈", "비제", "륄리", "라모"], why: "‘환상 교향곡’.", slug: "berlioz" },
  { clue: "플루트 독주로 시작하는 나른한 여름 오후. 말라르메의 시에서 왔습니다.", answer: "드뷔시", options: ["드뷔시", "라벨", "포레", "사티"], why: "‘목신의 오후 전주곡’.", slug: "debussy" },
  { clue: "‘장밋빛 인생’. 작은 키 때문에 ‘꼬마 참새’라고 불린 가수.", answer: "에디트 피아프", options: ["에디트 피아프", "사티", "라벨", "비제"], why: "La Vie en rose.", slug: "piaf" },
  { clue: "남미 정글의 선교사가 오보에를 불자 원주민들이 귀를 기울입니다. 영화음악.", answer: "모리코네", options: ["모리코네", "푸치니", "로시니", "베르디"], why: "‘미션’의 ‘가브리엘의 오보에’.", slug: "morricone" },
  { clue: "지하 세계로 아내를 찾으러 간 가수의 이야기. 1607년, 금관 토카타로 막이 오릅니다.", answer: "몬테베르디", options: ["몬테베르디", "륄리", "비발디", "스카를라티"], why: "‘오르페오’.", slug: "monteverdi" },
  { clue: "무서운 심판 대신 평화를 노래하는 진혼곡. 소프라노 한 명의 ‘피에 예주’.", answer: "포레", options: ["포레", "베르디", "생상스", "드뷔시"], why: "포레의 ‘레퀴엠’.", slug: "faure" },
];

/** 새로 더한 유럽 화가·작곡가 손글씨 힌트 */
export const ART_QUIZ_EU: QuizQ[] = [
  { clue: "둥근 거울에 부부의 뒷모습과 문가의 두 사람이 비칩니다. 거울 위에 ‘내가 여기 있었다’는 글씨.", answer: "반 에이크", options: ["반 에이크", "홀바인", "뒤러", "브뤼헐"], why: "‘아르놀피니 부부의 초상’, 런던 내셔널 갤러리.", slug: "van-eyck" },
  { clue: "세 폭 그림. 왼쪽 낙원, 가운데 이상한 쾌락, 오른쪽 악기로 고문하는 지옥.", answer: "보스", options: ["보스", "브뤼헐", "반 에이크", "루벤스"], why: "‘쾌락의 정원’, 프라도.", slug: "bosch" },
  { clue: "지친 사냥꾼과 개들이 언덕을 내려옵니다. 아래 얼음판에선 마을 사람들이 놉니다.", answer: "브뤼헐", options: ["브뤼헐", "보스", "렘브란트", "페르메이르"], why: "‘눈 속의 사냥꾼’, 빈 미술사박물관.", slug: "bruegel" },
  { clue: "원래 낮 장면인데 그림이 어두워져 밤 그림 같은 이름이 붙은 민병대 단체 초상.", answer: "렘브란트", options: ["렘브란트", "할스", "페르메이르", "루벤스"], why: "‘야경’, 라이크스뮤지엄.", slug: "rembrandt" },
  { clue: "파란 터번과 커다란 진주 하나. 어깨 너머로 돌아보는 소녀.", answer: "페르메이르", options: ["페르메이르", "렘브란트", "할스", "벨라스케스"], why: "‘진주 귀걸이를 한 소녀’, 마우리츠하위스.", slug: "vermeer" },
  { clue: "공주와 시녀들, 붓을 든 화가 자신, 뒤쪽 거울 속 왕과 왕비.", answer: "벨라스케스", options: ["벨라스케스", "고야", "엘 그레코", "무리요"], why: "‘시녀들’, 프라도.", slug: "velazquez" },
  { clue: "흰 셔츠를 입고 두 팔을 벌린 남자 앞에 얼굴 없는 총살대.", answer: "고야", options: ["고야", "벨라스케스", "들라크루아", "다비드"], why: "‘1808년 5월 3일’, 프라도.", slug: "goya" },
  { clue: "아래는 땅의 장례식, 위는 하늘의 환영. 톨레도의 작은 성당에 있습니다.", answer: "엘 그레코", options: ["엘 그레코", "벨라스케스", "티치아노", "수르바란"], why: "‘오르가스 백작의 매장’.", slug: "el-greco" },
  { clue: "그리스도처럼 정면을 보는 28세의 자화상. 모피 옷과 긴 곱슬머리.", answer: "뒤러", options: ["뒤러", "홀바인", "크라나흐", "렘브란트"], why: "1500년 자화상, 뮌헨 알테 피나코테크.", slug: "durer" },
  { clue: "두 외교관 사이의 바닥에 비스듬한 얼룩. 옆에서 보면 해골입니다.", answer: "홀바인", options: ["홀바인", "반 에이크", "뒤러", "반 데이크"], why: "‘대사들’, 런던 내셔널 갤러리.", slug: "holbein" },
  { clue: "바위 위에 뒷모습의 남자가 서서 안개 바다를 내려다봅니다.", answer: "프리드리히", options: ["프리드리히", "터너", "컨스터블", "뭉크"], why: "‘안개 바다 위의 방랑자’.", slug: "friedrich" },
  { clue: "네모 무늬 옷의 남자와 동그라미 무늬 옷의 여자가 금빛 속에서 하나가 됩니다.", answer: "클림트", options: ["클림트", "실레", "무하", "뭉크"], why: "‘키스’, 빈 벨베데레.", slug: "klimt" },
  { clue: "낡은 범선이 작은 증기선에 끌려 해체되러 갑니다. 지는 해.", answer: "터너", options: ["터너", "컨스터블", "모네", "카날레토"], why: "‘전함 테메레르’, 런던 내셔널 갤러리.", slug: "turner" },
  { clue: "얕은 강을 건너는 마차, 서퍽의 여름 하늘.", answer: "컨스터블", options: ["컨스터블", "터너", "게인즈버러", "밀레"], why: "‘건초 마차’.", slug: "constable" },
  { clue: "붉은 하늘 아래 다리 위에서 귀를 막은 사람.", answer: "뭉크", options: ["뭉크", "고흐", "실레", "앙소르"], why: "‘절규’, 오슬로.", slug: "munch" },
  { clue: "무거운 배를 밧줄로 끄는 사람들. 가운데 고개를 든 젊은이.", answer: "레핀", options: ["레핀", "아이바좁스키", "레비탄", "칸딘스키"], why: "‘볼가강의 배 끄는 인부들’.", slug: "repin" },
  { clue: "새벽 폭풍 뒤, 돛대 잔해에 매달린 사람들 앞에 솟은 거대한 파도.", answer: "아이바좁스키", options: ["아이바좁스키", "터너", "레핀", "프리드리히"], why: "‘아홉 번째 파도’.", slug: "aivazovsky" },
  { clue: "흰 바탕 위에 검은 네모 하나. 성화를 거는 방 구석 자리에 걸었습니다.", answer: "말레비치", options: ["말레비치", "칸딘스키", "몬드리안", "클레"], why: "‘검은 사각형’, 1915.", slug: "malevich" },
  { clue: "점을 수없이 찍어 그린 강변 공원의 일요일. 원숭이를 데리고 산책하는 여인.", answer: "쇠라", options: ["쇠라", "모네", "피사로", "르누아르"], why: "‘그랑드자트섬의 일요일 오후’, 시카고.", slug: "seurat" },
  { clue: "젖은 파리 대로를 우산 쓴 사람들이 걷습니다. 가운데 가로등이 화면을 가릅니다.", answer: "카유보트", options: ["카유보트", "피사로", "마네", "드가"], why: "‘파리의 거리, 비 오는 날’.", slug: "caillebotte" },
  { clue: "사막에 잠든 사람과 그 냄새를 맡는 사자, 그리고 둥근 달.", answer: "앙리 루소", options: ["앙리 루소", "고갱", "샤갈", "마티스"], why: "‘잠자는 집시’, MoMA.", slug: "rousseau" },
  { clue: "강물에 누워 꽃과 함께 떠내려가는 햄릿의 연인.", answer: "밀레이", options: ["밀레이", "로세티", "워터하우스", "터너"], why: "‘오필리아’, 테이트 브리튼.", slug: "millais" },
  { clue: "구름 속에서 컴퍼스를 내리뻗어 세상을 재는 창조주.", answer: "블레이크", options: ["블레이크", "터너", "호가스", "뒤러"], why: "‘태고의 날들’.", slug: "blake" },
  { clue: "배우 사라 베르나르의 길쭉한 연극 포스터로 하룻밤에 유명해졌습니다.", answer: "무하", options: ["무하", "툴루즈로트레크", "클림트", "앙소르"], why: "‘지스몽다’, 1894–1895.", slug: "mucha" },
];

export const MUSIC_QUIZ_EU: QuizQ[] = [
  { clue: "‘따따따 딴’ 네 음으로 시작하는 교향곡.", answer: "베토벤", options: ["베토벤", "모차르트", "하이든", "브람스"], why: "교향곡 5번.", slug: "beethoven" },
  { clue: "조용한 2악장 한가운데 갑자기 ‘쾅!’. 졸던 청중을 깨웠다는 이야기.", answer: "하이든", options: ["하이든", "모차르트", "베토벤", "글루크"], why: "교향곡 94번 ‘놀람’.", slug: "haydn" },
  { clue: "‘밤의 여왕’이 아주 높은 음을 콕콕 찍는 아리아.", answer: "모차르트", options: ["모차르트", "로시니", "베르디", "글루크"], why: "‘마술피리’.", slug: "mozart" },
  { clue: "한 가수가 아버지·아들·마왕·해설자 네 목소리를 냅니다. 피아노는 말발굽.", answer: "슈베르트", options: ["슈베르트", "슈만", "브람스", "멘델스존"], why: "가곡 ‘마왕’.", slug: "schubert" },
  { clue: "결혼식 퇴장 때 울리는 트럼펫 팡파르. 셰익스피어 희극을 위한 음악.", answer: "멘델스존", options: ["멘델스존", "바그너", "헨델", "엘가"], why: "‘한여름 밤의 꿈’ 결혼 행진곡.", slug: "mendelssohn" },
  { clue: "헬기 장면으로도 유명한, 말 달리는 전사 처녀들의 금관.", answer: "바그너", options: ["바그너", "베를리오즈", "R. 슈트라우스", "브루크너"], why: "‘발퀴레의 기행’.", slug: "wagner" },
  { clue: "모두 일어서서 듣는다는 ‘할렐루야’ 합창.", answer: "헨델", options: ["헨델", "바흐", "퍼셀", "하이든"], why: "‘메시아’.", slug: "handel" },
  { clue: "첼로 하나로 화음을 펼쳐 흐르게 한 전주곡.", answer: "바흐", options: ["바흐", "비발디", "텔레만", "코렐리"], why: "무반주 첼로 모음곡 1번.", slug: "bach" },
  { clue: "빈 신년음악회의 단골. 오스트리아의 ‘제2의 국가’라 불리는 왈츠.", answer: "J. 슈트라우스 2세", options: ["J. 슈트라우스 2세", "R. 슈트라우스", "브람스", "말러"], why: "‘아름답고 푸른 도나우’.", slug: "strauss2" },
  { clue: "백조 공주와 흑조. 오보에가 ‘정경’ 가락을 부릅니다.", answer: "차이콥스키", options: ["차이콥스키", "프로코피예프", "스트라빈스키", "림스키코르사코프"], why: "‘백조의 호수’.", slug: "tchaikovsky" },
  { clue: "1913년 파리 초연 때 객석이 술렁였습니다. 바순의 아주 높은 음으로 시작.", answer: "스트라빈스키", options: ["스트라빈스키", "드뷔시", "라벨", "쇼스타코비치"], why: "‘봄의 제전’.", slug: "stravinsky" },
  { clue: "새는 플루트, 오리는 오보에, 늑대는 호른. 어린이 음악 동화.", answer: "프로코피예프", options: ["프로코피예프", "생상스", "브리튼", "라벨"], why: "‘피터와 늑대’.", slug: "prokofiev" },
  { clue: "두 샘에서 시작한 강이 프라하를 지나 흐릅니다.", answer: "스메타나", options: ["스메타나", "드보르자크", "야나체크", "리스트"], why: "‘나의 조국’ 중 ‘블타바’.", slug: "smetana" },
  { clue: "뉴욕에서 고향을 그리며 쓴 교향곡. 2악장 잉글리시 호른.", answer: "드보르자크", options: ["드보르자크", "스메타나", "차이콥스키", "말러"], why: "교향곡 9번 ‘신세계로부터’.", slug: "dvorak" },
  { clue: "트롤의 궁전에서 같은 가락이 점점 빨라지고 커집니다.", answer: "그리그", options: ["그리그", "시벨리우스", "닐센", "무소륵스키"], why: "‘페르 귄트’.", slug: "grieg" },
  { clue: "러시아 지배 시절, 검열을 피해 다른 제목으로 연주되기도 한 애국적 교향시.", answer: "시벨리우스", options: ["시벨리우스", "그리그", "스메타나", "쇼팽"], why: "‘핀란디아’.", slug: "sibelius" },
  { clue: "빠른 행진 뒤 느린 가락. 미국 졸업식에 늘 나오는 행진곡.", answer: "엘가", options: ["엘가", "홀스트", "퍼셀", "헨델"], why: "‘위풍당당 행진곡’ 1번.", slug: "elgar" },
  { clue: "‘화성’은 5박자로 쉬지 않고 두드립니다. 명왕성은 없습니다.", answer: "홀스트", options: ["홀스트", "엘가", "브리튼", "본 윌리엄스"], why: "‘행성’.", slug: "holst" },
  { clue: "‘갈릴레오!’ 오페라 부분이 들어간 6분짜리 록.", answer: "퀸", options: ["퀸", "비틀스", "아바", "에디트 피아프"], why: "‘Bohemian Rhapsody’ (1975).", slug: "queen" },
  { clue: "기타 하나와 현악 사중주 반주의 짧은 노래. ‘어제’.", answer: "비틀스", options: ["비틀스", "퀸", "아바", "엘가"], why: "‘Yesterday’ (1965).", slug: "beatles" },
  { clue: "1974년 유로비전 우승곡. 나폴레옹이 패한 전투 이름.", answer: "아바", options: ["아바", "비틀스", "퀸", "그리그"], why: "‘Waterloo’.", slug: "abba" },
  { clue: "왼손이 폭풍처럼 달리는 피아노 연습곡. 조국의 봉기 소식을 듣고 썼다고 전합니다.", answer: "쇼팽", options: ["쇼팽", "리스트", "슈만", "라흐마니노프"], why: "에튀드 ‘혁명’ Op.10-12.", slug: "chopin" },
  { clue: "파가니니 주제로 만든 피아노 종소리.", answer: "리스트", options: ["리스트", "쇼팽", "라흐마니노프", "파가니니"], why: "‘라 캄파넬라’.", slug: "liszt" },
  { clue: "세 살에 시력을 잃은 작곡가의 기타 협주곡. 2악장 잉글리시 호른.", answer: "로드리고", options: ["로드리고", "파야", "알베니스", "그라나도스"], why: "‘아랑후에스 협주곡’.", slug: "rodrigo" },
  { clue: "느린 집시 가락 뒤 불꽃 같은 바이올린. 왼손 피치카토.", answer: "사라사테", options: ["사라사테", "파가니니", "에네스쿠", "리스트"], why: "‘치고이너바이젠’.", slug: "sarasate" },
  { clue: "종소리 같은 화음 여덟 번으로 시작하는 피아노 협주곡. 치료해 준 의사에게 바쳤습니다.", answer: "라흐마니노프", options: ["라흐마니노프", "차이콥스키", "쇼팽", "그리그"], why: "피아노 협주곡 2번.", slug: "rachmaninoff" },
  { clue: "그림 전시회를 걷는 ‘프롬나드’. 친구의 그림이 곡이 됐습니다.", answer: "무소륵스키", options: ["무소륵스키", "림스키코르사코프", "보로딘", "라벨"], why: "‘전람회의 그림’.", slug: "mussorgsky" },
  { clue: "천일야화. 바이올린 독주가 이야기꾼 왕비입니다.", answer: "림스키코르사코프", options: ["림스키코르사코프", "보로딘", "차이콥스키", "글린카"], why: "‘셰에라자드’.", slug: "rimsky" },
];

/** O/X 상식 */
const OX: { s: string; o: boolean; why: string; href?: string }[] = [
  { s: "베토벤은 귀가 들리지 않게 된 뒤에도 교향곡 9번을 썼다.", o: true, why: "9번 초연(1824) 때 거의 듣지 못했습니다.", href: "/music/beethoven" },
  { s: "모차르트는 살리에리에게 독살당했다는 것이 역사적 사실이다.", o: false, why: "근거 없는 소문으로, 연극과 영화 ‘아마데우스’에서 유명해졌습니다.", href: "/music/mozart" },
  { s: "바흐와 헨델은 같은 해에 독일에서 태어났다.", o: true, why: "둘 다 1685년생입니다.", href: "/music/bach" },
  { s: "쇼팽은 평생 폴란드에서만 살았다.", o: false, why: "1830년 떠난 뒤 파리에서 살다 세상을 떠났습니다.", href: "/music/chopin" },
  { s: "‘라데츠키 행진곡’은 요한 슈트라우스 2세의 작품이다.", o: false, why: "아버지 요한 슈트라우스 1세의 작품입니다.", href: "/music/strauss2" },
  { s: "홀스트의 ‘행성’에는 명왕성이 없다.", o: true, why: "명왕성은 1930년에야 발견됐습니다.", href: "/music/holst" },
  { s: "하이든의 선율이 지금 독일 국가로 쓰인다.", o: true, why: "‘황제 찬가’(1797) 선율입니다.", href: "/music/haydn" },
  { s: "로드리고는 시력을 잃은 작곡가였다.", o: true, why: "세 살 때 디프테리아로 시력을 잃었습니다.", href: "/music/rodrigo" },
  { s: "보로딘의 본업은 화학자였다.", o: true, why: "화학 교수였고, 그의 이름이 붙은 화학 반응도 있습니다.", href: "/music/borodin" },
  { s: "차이콥스키와 후원자 폰 메크 부인은 자주 만나 식사를 했다.", o: false, why: "14년 동안 편지만 주고받고 만나지 않기로 했습니다.", href: "/music/tchaikovsky" },
  { s: "스메타나는 귀가 들리지 않게 된 뒤 ‘나의 조국’을 썼다.", o: true, why: "1874년 청력을 잃은 뒤의 작품입니다.", href: "/music/smetana" },
  { s: "‘아침 기분’은 노르웨이 피오르의 아침을 그린 곡이다.", o: false, why: "연극 ‘페르 귄트’에서 모로코 사막의 아침 장면입니다.", href: "/music/grieg" },
  { s: "비틀스는 리버풀에서 결성됐다.", o: true, why: "리버풀 출신 4인조입니다.", href: "/music/beatles" },
  { s: "퀸의 기타리스트 브라이언 메이는 천체물리학 박사다.", o: true, why: "2007년 박사 학위를 받았습니다.", href: "/music/queen" },
  { s: "멘델스존은 바흐의 ‘마태 수난곡’을 다시 무대에 올렸다.", o: true, why: "1829년, 바흐 재조명의 계기.", href: "/music/mendelssohn" },
  { s: "리하르트 슈트라우스는 요한 슈트라우스 2세의 아들이다.", o: false, why: "성만 같은 남남입니다.", href: "/music/r-strauss" },
  { s: "라벨의 ‘볼레로’는 같은 리듬이 처음부터 끝까지 반복된다.", o: true, why: "작은북 리듬이 15분 내내 이어집니다.", href: "/music/ravel" },
  { s: "프로코피예프와 스탈린은 같은 날 세상을 떠났다.", o: true, why: "1953년 3월 5일.", href: "/music/prokofiev" },
  { s: "‘모나리자’는 우피치 미술관에 있다.", o: false, why: "파리 루브르 박물관에 있습니다.", href: "/art/leonardo" },
  { s: "렘브란트의 ‘야경’은 원래 밤 장면을 그린 것이다.", o: false, why: "낮 장면인데 바니시가 어두워져 붙은 별명입니다.", href: "/art/rembrandt" },
  { s: "페르메이르가 남긴 그림은 35점 안팎뿐이다.", o: true, why: "그래서 한 점 한 점이 귀합니다.", href: "/art/vermeer" },
  { s: "고흐는 살아 있을 때 많은 그림을 팔아 부자가 됐다.", o: false, why: "생전에 거의 팔지 못했고 동생 테오의 도움을 받았습니다.", href: "/art/van-gogh" },
  { s: "엘 그레코는 스페인 톨레도에서 태어났다.", o: false, why: "그리스 크레타섬 출신입니다. ‘그리스 사람’이라는 별명.", href: "/art/el-greco" },
  { s: "뒤러는 코뿔소를 직접 보지 않고 목판화로 그렸다.", o: true, why: "편지와 스케치만으로 그렸습니다(1515).", href: "/art/durer" },
  { s: "홀바인의 ‘대사들’ 아래쪽 얼룩은 옆에서 보면 해골이다.", o: true, why: "왜상(아나모르포시스) 기법.", href: "/art/holbein" },
  { s: "클림트의 ‘키스’는 빈 벨베데레 궁전에 있다.", o: true, why: "1908년 국가가 사들였습니다.", href: "/art/klimt" },
  { s: "뭉크의 ‘절규’는 단 한 점뿐이다.", o: false, why: "회화·파스텔·판화 등 여러 판이 있습니다.", href: "/art/munch" },
  { s: "밀레(‘이삭 줍기’)와 밀레이(‘오필리아’)는 같은 사람이다.", o: false, why: "프랑스의 밀레와 영국의 밀레이는 다른 화가입니다.", href: "/art/millais" },
  { s: "오르세 미술관 건물은 원래 기차역이었다.", o: true, why: "1900년 만국박람회 때 지은 오르세역.", href: "/museums/orsay" },
  { s: "런던 내셔널 갤러리 상설 전시는 무료다.", o: true, why: "영국 국립 미술관 상설 전시는 무료입니다.", href: "/museums/national-gallery" },
  { s: "빈 미술사박물관에는 브뤼헐 그림이 세계에서 가장 많다.", o: true, why: "‘바벨탑’, ‘눈 속의 사냥꾼’ 등.", href: "/museums/khm" },
  { s: "고야는 말년에 청력을 잃었다.", o: true, why: "1792–1793년 큰 병 뒤 청력을 잃었습니다.", href: "/art/goya" },
  { s: "터너는 영국 20파운드 지폐에 실렸다.", o: true, why: "2020년 새 지폐부터.", href: "/art/turner" },
  { s: "피카소는 스페인에서 태어났다.", o: true, why: "말라가 출생, 프랑스에서 주로 활동했습니다.", href: "/art/picasso" },
  { s: "달리의 그림은 저작권이 끝나 마음껏 쓸 수 있다.", o: false, why: "1989년에 세상을 떠나 아직 보호 기간입니다.", href: "/art/dali" },
  { s: "모네의 ‘인상, 해돋이’에서 ‘인상주의’라는 이름이 나왔다.", o: true, why: "비평가가 비꼬며 쓴 말이 이름이 됐습니다.", href: "/art/monet" },
  { s: "‘진주 귀걸이를 한 소녀’는 실제 모델이 누구인지 확실히 밝혀졌다.", o: false, why: "누구인지 모릅니다. 영화 속 하녀는 지어낸 인물입니다.", href: "/art/vermeer" },
  { s: "루벤스는 화가이면서 외교관이었다.", o: true, why: "영국·스페인 왕에게 기사 작위를 받았습니다.", href: "/art/rubens" },
  { s: "칸딘스키는 법학을 공부하다 30세에 그림을 시작했다.", o: true, why: "법학 교수 자리를 사양하고 뮌헨으로 갔습니다.", href: "/art/kandinsky" },
  { s: "프라도 미술관은 런던에 있다.", o: false, why: "스페인 마드리드에 있습니다.", href: "/museums/prado" },
];

/* ---------- 데이터로 만드는 문제 ---------- */
function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}
function pickDistinct(pool: string[], answer: string, n: number, seed: string) {
  const cands = [...new Set(pool.filter((x) => x !== answer))];
  const out: string[] = [];
  let h = hash(seed);
  while (out.length < n && cands.length) {
    const i = h % cands.length;
    out.push(cands.splice(i, 1)[0]);
    h = hash(String(h));
  }
  return [answer, ...out];
}
const clean = (s: string, names: string[]) => names.some((n) => n && s.includes(n));

const people = [
  ...painters.map((p) => ({ ...p, kind: "art" as const })),
  ...composers.map((c) => ({ ...c, kind: "music" as const })),
];

function fromOld(list: QuizQ[], cat: QuizCat, base: string, pre: string): CatQ[] {
  return list.map((q, i) => ({ id: `${pre}${i}`, cat, clue: q.clue, answer: q.answer, options: q.options, why: q.why, href: `${base}/${q.slug}` }));
}

function genArt(): CatQ[] {
  const names = painters.map((p) => shortName(p.name));
  const out: CatQ[] = [];
  for (const p of painters) {
    const sn = shortName(p.name);
    const sameEra = painters.filter((x) => x.era === p.era).map((x) => shortName(x.name));
    p.works.slice(0, 2).forEach((w, i) => {
      if (clean(w.title + w.look, [sn, p.name])) return;
      out.push({ id: `ga-${p.slug}-${i}`, cat: "art", clue: `『${w.title}』 (${w.year}) · ${w.museum}`, answer: sn, options: pickDistinct(sameEra.length >= 4 ? sameEra : names, sn, 3, p.slug + i), why: `${p.name} — ${w.look}`, href: `/art/${p.slug}` });
    });
  }
  return out;
}
function genMusic(): CatQ[] {
  const names = composers.map((c) => shortName(c.name));
  const out: CatQ[] = [];
  for (const c of composers) {
    const sn = shortName(c.name);
    const sameEra = composers.filter((x) => x.era === c.era).map((x) => shortName(x.name));
    c.works.slice(0, 2).forEach((w, i) => {
      if (clean(w.title + w.note, [sn, c.name])) return;
      out.push({ id: `gm-${c.slug}-${i}`, cat: "music", clue: `『${w.title}』 (${w.year}) — ${w.note}`, answer: sn, options: pickDistinct(sameEra.length >= 4 ? sameEra : names, sn, 3, c.slug + i), why: `${c.name}의 작품입니다.`, href: `/music/${c.slug}` });
    });
  }
  return out;
}
function genCountry(): CatQ[] {
  const all = COUNTRIES.map((c) => c.name);
  return people
    .filter((p) => !("activeIn" in p && p.activeIn) && !(p.also && p.also.length))
    .map((p) => {
      const cn = countryByCode(p.country)!.name;
      return { id: `gc-${p.slug}`, cat: "country" as const, clue: `${p.name} (${p.en}, ${p.years}) — ${p.kind === "art" ? "화가" : "음악가"}. 어느 나라 사람일까요?`, answer: cn, options: pickDistinct(all, cn, 3, "c" + p.slug), why: `${cn}. ${p.eraNote}.`, href: `/${p.kind}/${p.slug}` };
    });
}
function genEra(): CatQ[] {
  const all = ERAS.map((e) => e.name);
  return people.map((p) => {
    const en = eraName(p.era);
    return { id: `ge-${p.slug}`, cat: "era" as const, clue: `${p.name} (${p.years}). 어느 시대로 분류될까요?`, answer: en, options: pickDistinct(all, en, 3, "e" + p.slug), why: `${en} (${ERAS.find((e) => e.id === p.era)?.range}). ${p.eraNote}.`, href: `/${p.kind}/${p.slug}` };
  });
}
function genMuseum(): CatQ[] {
  const names = MUSEUMS.map((m) => m.name);
  const out: CatQ[] = [];
  for (const m of MUSEUMS) {
    m.highlights.forEach((h, i) => {
      out.push({ id: `gu-${m.slug}-${i}`, cat: "museum", clue: `${h.who}의 『${h.title}』, 어느 미술관에서 볼 수 있을까요?`, answer: m.name, options: pickDistinct(names, m.name, 3, m.slug + i), why: `${m.city} ${m.name}. ${h.note}`, href: `/museums/${m.slug}` });
    });
  }
  return out;
}
function genOx(): CatQ[] {
  return OX.map((x, i) => ({ id: `ox-${i}`, cat: "ox" as const, clue: x.s, answer: x.o ? "O" : "X", options: ["O", "X"], why: x.why, href: x.href }));
}

export const QUIZ_CATS: { id: QuizCat; title: string; en: string }[] = [
  { id: "art", title: "이 그림 누구 작품?", en: "Whose painting?" },
  { id: "music", title: "이 곡 누구 곡?", en: "Whose music?" },
  { id: "country", title: "나라 맞히기", en: "Which country?" },
  { id: "era", title: "시대 맞히기", en: "Which era?" },
  { id: "museum", title: "미술관 맞히기", en: "Which museum?" },
  { id: "ox", title: "인물 상식 OX", en: "True or false" },
];

export const ALL_QUIZ: CatQ[] = [
  ...fromOld(ART_QUIZ, "art", "/art", "ha"),
  ...fromOld(ART_QUIZ_EU, "art", "/art", "he"),
  ...genArt(),
  ...fromOld(MUSIC_QUIZ, "music", "/music", "hm"),
  ...fromOld(MUSIC_QUIZ_EU, "music", "/music", "hn"),
  ...genMusic(),
  ...genCountry(),
  ...genEra(),
  ...genMuseum(),
  ...genOx(),
];
