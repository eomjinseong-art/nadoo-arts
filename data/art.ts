import type { Painter } from "@/data/types";
import more from "@/data/art-europe.json";

const wiki = (t: string) => `https://ko.wikipedia.org/wiki/${encodeURIComponent(t)}`;
const enwiki = (t: string) => `https://en.wikipedia.org/wiki/${encodeURIComponent(t)}`;

export const painters: Painter[] = [
  {
    slug: "giotto", country: "it", name: "조토 디 본도네", en: "Giotto di Bondone", years: "1267년 무렵–1337",
    era: "renaissance", eraNote: "르네상스의 문을 연 선배",
    life: [
      "피렌체 근처 시골에서 태어났습니다. 양을 치며 돌에 그림을 그리던 소년을 화가 치마부에가 알아봤다는 이야기가 전합니다(후대 바사리의 기록).",
      "금빛 배경 위 납작한 성인 대신, 무게와 감정이 있는 사람을 그렸습니다.",
      "피렌체 대성당의 종탑 설계도 맡았습니다. 그래서 ‘조토의 종탑’이라고 부릅니다.",
    ],
    works: [
      { title: "애도", orig: "Compianto sul Cristo morto", year: "1305년 무렵", museum: "파도바 스크로베니 예배당", look: "하늘의 천사까지 울고 있습니다. 등을 보이고 앉은 두 사람이 우리를 장면 안으로 끌어들입니다.", img: "giotto-lamentation" },
      { title: "유다의 입맞춤", orig: "Bacio di Giuda", year: "1305년 무렵", museum: "파도바 스크로베니 예배당", look: "예수와 유다의 눈이 정면으로 마주칩니다. 주변 횃불과 창이 긴장을 키웁니다.", img: "giotto-kiss" },
      { title: "온니산티 성모", orig: "Madonna di Ognissanti", year: "1310년 무렵", museum: "피렌체 우피치 미술관", look: "성모의 무릎과 옷 주름에 무게가 있습니다. 옆 방의 치마부에 성모와 비교해 보세요.", img: "giotto-ognissanti" },
    ],
    howToLook: ["얼굴 표정과 손짓을 먼저 보세요. 조토 이전 그림보다 감정이 훨씬 또렷합니다.", "벽 전체가 만화처럼 이야기 순서대로 이어집니다. 스크로베니 예배당은 예약제로 짧게 들어갑니다."],
  },
  {
    slug: "botticelli", country: "it", name: "산드로 보티첼리", en: "Sandro Botticelli", years: "1445년 무렵–1510",
    era: "renaissance", eraNote: "메디치 시대 피렌체의 우아함",
    life: [
      "피렌체에서 태어나 화가 필리포 리피에게 배웠습니다.",
      "메디치 가문과 그 주변 사람들을 위해 신화 그림을 그렸습니다.",
      "로마 시스티나 예배당 벽화(1481–1482)에도 참여했습니다.",
      "말년에는 수도사 사보나롤라의 설교 영향으로 그림이 어둡고 엄격해졌다고 봅니다.",
    ],
    works: [
      { title: "비너스의 탄생", orig: "La nascita di Venere", year: "1484–1486년 무렵", museum: "피렌체 우피치 미술관", look: "바람의 신이 불어 조개가 해안에 닿습니다. 몸의 비율은 일부러 길게, 머리카락은 장식처럼 그렸습니다.", img: "botticelli-venus" },
      { title: "프리마베라(봄)", orig: "Primavera", year: "1480년 무렵", museum: "피렌체 우피치 미술관", look: "오른쪽에서 왼쪽으로 읽습니다. 서풍이 님프를 붙잡고, 님프는 꽃의 여신으로 바뀝니다. 풀밭에는 실제 식물이 수백 송이 그려져 있습니다.", img: "botticelli-primavera" },
      { title: "동방박사의 경배", orig: "Adorazione dei Magi", year: "1475년 무렵", museum: "피렌체 우피치 미술관", look: "박사들 얼굴에 메디치 가문 사람들을 넣었습니다. 오른쪽 끝에서 우리를 보는 노란 옷의 남자는 화가 자신으로 봅니다.", img: "botticelli-adoration" },
    ],
    howToLook: ["윤곽선을 따라가 보세요. 보티첼리는 선이 춤추듯 흐르는 화가입니다.", "신화 이야기를 알고 보면 두 배로 재미있습니다. 나두신화의 아프로디테 글과 같이 보세요."],
  },
  {
    slug: "leonardo", country: "it", name: "레오나르도 다빈치", en: "Leonardo da Vinci", years: "1452–1519",
    era: "renaissance", eraNote: "르네상스의 만능인",
    life: [
      "피렌체 근처 빈치 마을에서 태어나, 피렌체의 베로키오 공방에서 배웠습니다.",
      "밀라노 스포르차 궁정에서 그림·조각·축제 장치·운하까지 맡았습니다. 해부학과 비행 기계 노트도 남겼습니다.",
      "1504년 무렵 피렌체 정청 벽화를 두고 미켈란젤로와 맞대결했습니다(둘 다 완성되지 않음).",
      "프랑스 왕 프랑수아 1세의 초대로 앙부아즈에 가서 1519년 그곳에서 세상을 떠났습니다. 모나리자가 프랑스에 남은 이유입니다.",
    ],
    works: [
      { title: "모나리자", orig: "La Gioconda / Mona Lisa", year: "1503–1519년 무렵", museum: "파리 루브르 박물관", look: "윤곽을 연기처럼 흐리는 ‘스푸마토’ 기법. 입꼬리와 눈가를 가까이, 또 멀리서 번갈아 보세요.", img: "leonardo-monalisa" },
      { title: "최후의 만찬", orig: "Il Cenacolo / L'Ultima Cena", year: "1495–1498", museum: "밀라노 산타 마리아 델레 그라치에 수도원 식당", look: "‘너희 중 하나가 나를 배신하리라’는 말에 제자들이 셋씩 묶여 반응합니다. 모든 선이 예수의 머리로 모입니다.", img: "leonardo-supper" },
      { title: "흰 족제비를 안은 여인", orig: "Dama con l'ermellino", year: "1489–1491년 무렵", museum: "폴란드 크라쿠프 차르토리스키 박물관", look: "여인과 족제비가 같은 방향으로 고개를 돌립니다. 손가락 관절까지 해부학 공부가 보입니다.", img: "leonardo-ermine" },
    ],
    howToLook: ["모나리자 앞은 늘 붐빕니다. 루브르에서는 같은 방의 큰 그림(베로네세 ‘가나의 혼인 잔치’)도 꼭 보세요.", "최후의 만찬은 벽화라 옮길 수 없고, 예약한 짧은 시간만 볼 수 있습니다."],
  },
  {
    slug: "michelangelo", country: "it", name: "미켈란젤로 부오나로티", en: "Michelangelo Buonarroti", years: "1475–1564",
    era: "renaissance", eraNote: "조각가가 그린 천장",
    life: [
      "토스카나 카프레세에서 태어나, 피렌체의 기를란다요 공방과 메디치가 정원에서 배웠습니다.",
      "스스로를 ‘조각가’라고 여겼습니다. 20대에 ‘피에타’와 ‘다비드’를 만들었습니다.",
      "교황 율리우스 2세의 명령으로 1508–1512년 시스티나 예배당 천장을 혼자 그리다시피 했습니다.",
      "88세까지 살며 성 베드로 대성당의 돔 설계도 맡았습니다.",
    ],
    works: [
      { title: "아담의 창조 (시스티나 천장화)", orig: "Creazione di Adamo", year: "1508–1512년 무렵", museum: "바티칸 시스티나 예배당", look: "닿을 듯 말 듯한 두 손가락 사이의 틈이 주인공입니다. 하느님을 감싼 붉은 천이 사람의 뇌 모양이라는 해석도 있습니다(정설은 아님).", img: "michelangelo-adam" },
      { title: "최후의 심판", orig: "Giudizio Universale", year: "1536–1541", museum: "바티칸 시스티나 예배당 제단 벽", look: "가운데 그리스도의 손짓에 위로 오르는 사람, 아래로 떨어지는 사람이 갈립니다. 벗겨진 살가죽을 든 성 바르톨로메오의 얼굴은 화가 자신으로 봅니다.", img: "michelangelo-judgment" },
      { title: "도니 톤도(성가족)", orig: "Tondo Doni", year: "1506–1507년 무렵", museum: "피렌체 우피치 미술관", look: "둥근 판 그림. 성모의 비틀린 팔과 몸은 조각처럼 단단합니다. 그가 남긴 거의 유일한 완성 패널화입니다.", img: "michelangelo-doni" },
      { title: "다비드 (대리석 조각)", orig: "David", year: "1501–1504", museum: "피렌체 아카데미아 미술관", look: "싸우기 직전, 돌을 쥐고 적을 노려보는 순간. 손과 머리를 일부러 크게 만들었습니다." },
    ],
    howToLook: ["시스티나 예배당은 사진 촬영 금지입니다. 미리 그림 위치를 알고 가면 고개가 덜 아픕니다.", "인물의 근육을 보세요. 옷을 입어도 몸이 조각처럼 보입니다."],
  },
  {
    slug: "raphael", country: "it", name: "라파엘로 산치오", en: "Raffaello Sanzio", years: "1483–1520",
    era: "renaissance", eraNote: "조화와 균형의 화가",
    life: [
      "우르비노에서 화가의 아들로 태어나 페루지노에게 배웠습니다.",
      "피렌체에서 다빈치와 미켈란젤로의 그림을 보고 빠르게 흡수했습니다.",
      "로마에서 교황의 방(바티칸 스탄차)을 그리며 미켈란젤로와 같은 시기에 경쟁했습니다.",
      "1520년 37세 생일 무렵 세상을 떠나 판테온에 묻혔습니다.",
    ],
    works: [
      { title: "아테네 학당", orig: "Scuola di Atene", year: "1509–1511", museum: "바티칸 ‘서명의 방’(라파엘로의 방)", look: "가운데 플라톤(손가락은 하늘)과 아리스토텔레스(손바닥은 땅). 플라톤 얼굴은 다빈치, 앞쪽 턱 괸 사람은 미켈란젤로라는 해석이 유명합니다.", img: "raphael-athens" },
      { title: "시스티나 성모", orig: "Madonna Sistina", year: "1512–1513", museum: "독일 드레스덴 고전 거장 회화관", look: "아래쪽 턱을 괸 두 아기 천사는 그림보다 더 유명해져 엽서와 머그잔에 나옵니다.", img: "raphael-sistine" },
      { title: "발다사레 카스틸리오네의 초상", orig: "Ritratto di Baldassarre Castiglione", year: "1514–1515년 무렵", museum: "파리 루브르 박물관", look: "회색과 검정만으로 차분한 지식인을 그렸습니다. 뒤에 렘브란트와 마티스도 이 그림을 따라 그렸습니다.", img: "raphael-castiglione" },
    ],
    howToLook: ["삼각형 구도를 찾아보세요. 라파엘로 그림의 안정감은 거기서 나옵니다.", "아테네 학당에서 아는 철학자를 찾아보세요. 철학이야기와 같이 보면 좋습니다."],
  },
  {
    slug: "titian", country: "it", name: "티치아노 베첼리오", en: "Tiziano Vecellio", years: "1488/90년 무렵–1576",
    era: "renaissance", eraNote: "베네치아의 색",
    life: [
      "알프스 가까운 피에베 디 카도레에서 태어나, 어려서 베네치아로 가 조반니 벨리니 공방에서 배웠습니다.",
      "피렌체가 ‘선(디세뇨)’이라면 베네치아는 ‘색(콜로레)’. 그 대표가 티치아노입니다.",
      "신성로마제국 황제 카를 5세와 스페인 왕 펠리페 2세가 그를 아꼈습니다.",
      "1576년 베네치아에 흑사병이 돌던 때 세상을 떠났습니다.",
    ],
    works: [
      { title: "우르비노의 비너스", orig: "Venere di Urbino", year: "1538", museum: "피렌체 우피치 미술관", look: "신화의 여신이 아니라 실내의 여인처럼 그렸습니다. 300여 년 뒤 마네의 ‘올랭피아’가 이 그림에 답합니다.", img: "titian-urbino" },
      { title: "바쿠스와 아리아드네", orig: "Bacco e Arianna", year: "1520–1523", museum: "런던 내셔널 갤러리", look: "하늘의 짙은 파랑(울트라마린)을 보세요. 왼쪽 위 별자리는 아리아드네의 왕관입니다.", img: "titian-bacchus" },
      { title: "성모 승천(아순타)", orig: "Assunta", year: "1516–1518", museum: "베네치아 산타 마리아 글로리오사 데이 프라리 성당", look: "높이 7m에 가까운 제단화. 아래 사도들, 가운데 성모, 위 하느님으로 세 층이 붉은색으로 이어집니다.", img: "titian-assunta" },
    ],
    howToLook: ["가까이서 붓 자국을 보세요. 말년으로 갈수록 붓질이 거칠어져 인상주의를 앞질렀다는 말을 듣습니다.", "빨강과 파랑이 어디에 놓였는지 따라가면 그림 속 시선 길이 보입니다."],
  },
  {
    slug: "caravaggio", country: "it", name: "카라바조", en: "Michelangelo Merisi da Caravaggio", years: "1571–1610",
    era: "baroque", eraNote: "빛과 어둠의 바로크",
    life: [
      "본명은 미켈란젤로 메리시. 밀라노에서 태어나 카라바조 마을에서 자라 그 이름으로 불립니다.",
      "로마에서 길거리 사람을 모델로 성인을 그려 큰 인기와 큰 논란을 함께 얻었습니다.",
      "싸움이 잦았고, 1606년 사람을 죽여 로마에서 도망쳤습니다. 나폴리, 몰타, 시칠리아를 떠돌았습니다.",
      "사면을 기다리며 로마로 돌아가던 1610년 포르토 에르콜레에서 38세로 세상을 떠났습니다.",
    ],
    works: [
      { title: "성 마태오의 소명", orig: "Vocazione di san Matteo", year: "1599–1600", museum: "로마 산 루이지 데이 프란체시 성당 콘타렐리 예배당", look: "오른쪽 창에서 들어온 빛줄기가 예수의 손가락과 함께 마태오를 가리킵니다. 누가 마태오인지는 지금도 의견이 갈립니다.", img: "caravaggio-matthew" },
      { title: "바쿠스", orig: "Bacco", year: "1596년 무렵", museum: "피렌체 우피치 미술관", look: "술의 신이 아니라 분장한 동네 청년 같습니다. 과일 바구니의 벌레 먹은 사과까지 그렸습니다.", img: "caravaggio-bacchus" },
      { title: "엠마오의 저녁식사", orig: "Cena in Emmaus", year: "1601", museum: "런던 내셔널 갤러리", look: "식탁 끝 과일 바구니가 금방이라도 떨어질 듯 우리 쪽으로 튀어나와 있습니다.", img: "caravaggio-emmaus" },
    ],
    howToLook: ["빛이 어디서 들어오는지 먼저 찾으세요. 카라바조는 무대 조명 감독처럼 그립니다(키아로스쿠로).", "로마의 성당에는 동전을 넣으면 조명이 켜지는 곳이 있습니다. 공짜로 볼 수 있는 진품입니다."],
  },
  {
    slug: "modigliani", country: "it", also: ["fr"], name: "아메데오 모딜리아니", en: "Amedeo Modigliani", years: "1884–1920",
    era: "modern", eraNote: "파리의 이탈리아인, 긴 목의 초상",
    life: [
      "토스카나 항구 도시 리보르노에서 태어났습니다.",
      "1906년 파리로 가 몽마르트르와 몽파르나스에서 가난하게 살며 그림과 조각을 했습니다.",
      "화가 샤임 수틴과 친구였고, 연인 잔 에뷔테른을 여러 번 그렸습니다.",
      "1920년 1월 35세로 결핵성 뇌수막염으로 세상을 떠났고, 이틀 뒤 잔도 스스로 목숨을 끊었습니다.",
    ],
    works: [
      { title: "잔 에뷔테른의 초상", orig: "Portrait de Jeanne Hébuterne", year: "1918", museum: "프랑스 트루아 근대미술관 (같은 주제 그림이 여러 미술관에 있음)", look: "긴 목, 기울어진 고개, 아몬드 모양 눈. 아프리카 가면과 고대 조각의 영향을 봅니다.", img: "modigliani-jeanne" },
      { title: "누운 나부", orig: "Nu couché", year: "1917", museum: "개인 소장 (2015년 경매로 크게 알려짐)", look: "1917년 파리 첫 개인전 때 경찰이 창가 누드화를 문제 삼아 전시가 첫날 중단됐습니다. 그 연작의 하나입니다.", img: "modigliani-nude" },
      { title: "샤임 수틴", orig: "Chaïm Soutine", year: "1917", museum: "워싱턴 내셔널 갤러리 오브 아트", look: "친구의 어깨를 좁고 길게, 얼굴은 조용하게. 모딜리아니는 친구를 즐겨 그렸습니다.", img: "modigliani-soutine" },
    ],
    howToLook: ["눈동자가 없는 눈이 많습니다. 그가 ‘영혼을 알게 되면 눈동자를 그리겠다’고 했다는 이야기가 전합니다(확인된 인용은 아님).", "배경은 단순하고 사람만 남깁니다. 얼굴의 기울기를 따라 고개를 기울여 보세요."],
  },
  {
    slug: "poussin", country: "fr", name: "니콜라 푸생", en: "Nicolas Poussin", years: "1594–1665",
    era: "baroque", eraNote: "프랑스 고전주의의 아버지",
    life: [
      "노르망디 레장들리 근처에서 태어났습니다.",
      "1624년 로마로 가서 평생 대부분을 그곳에서 고대 조각과 라파엘로를 공부하며 보냈습니다.",
      "루이 13세의 부름으로 잠시 파리에 돌아왔지만 궁정 생활이 맞지 않아 다시 로마로 갔습니다.",
      "차분하고 생각하는 그림을 그려 ‘화가-철학자’라고 불렸습니다.",
    ],
    works: [
      { title: "아르카디아의 목자들", orig: "Les Bergers d'Arcadie (Et in Arcadia ego)", year: "1637–1638년 무렵", museum: "파리 루브르 박물관", look: "목자들이 무덤에 새긴 ‘나도 아르카디아에 있다’는 글을 읽습니다. ‘나’는 죽음입니다. 낙원에도 죽음은 있다는 뜻으로 읽습니다.", img: "poussin-arcadia" },
      { title: "사비니 여인의 납치", orig: "L'Enlèvement des Sabines", year: "1633–1634년 무렵", museum: "뉴욕 메트로폴리탄 미술관", look: "로마 건국 이야기. 혼란스러운 장면을 무대처럼 정리했습니다. 로마이야기의 건국 편과 함께 보세요.", img: "poussin-sabines" },
      { title: "겨울(대홍수)", orig: "L'Hiver ou Le Déluge", year: "1660–1664", museum: "파리 루브르 박물관", look: "‘사계’ 연작의 마지막. 어둠 속 번개와 뱀, 물에 잠기는 사람들. 떨리는 손으로 그린 말년의 그림입니다.", img: "poussin-winter" },
    ],
    howToLook: ["인물을 무대 배우처럼 한 줄로 세운 구도를 보세요. 이 질서가 프랑스 아카데미의 기준이 됐습니다.", "고대 로마·그리스 이야기가 많습니다. 제목을 먼저 읽고 누가 누구인지 찾아보세요."],
  },
  {
    slug: "david", country: "fr", name: "자크루이 다비드", en: "Jacques-Louis David", years: "1748–1825",
    era: "classical", eraNote: "신고전주의, 혁명과 나폴레옹의 화가",
    life: [
      "파리에서 태어나, 1774년 로마 대상을 받고 로마에서 고대 미술을 공부했습니다.",
      "프랑스 혁명 때 국민공회 의원으로 루이 16세 처형에 찬성표를 던졌습니다.",
      "뒤에 나폴레옹의 수석 화가가 되어 황제의 모습을 그렸습니다.",
      "나폴레옹이 몰락한 뒤 브뤼셀로 망명해 그곳에서 세상을 떠났습니다. 앵그르, 그로 같은 제자를 많이 길렀습니다.",
    ],
    works: [
      { title: "호라티우스 형제의 맹세", orig: "Le Serment des Horaces", year: "1784", museum: "파리 루브르 박물관", look: "왼쪽 세 형제의 곧은 팔(의무), 오른쪽 여인들의 무너진 몸(슬픔). 배경 아치 세 개가 장면을 셋으로 나눕니다.", img: "david-horatii" },
      { title: "마라의 죽음", orig: "La Mort de Marat", year: "1793", museum: "브뤼셀 벨기에 왕립미술관", look: "욕조에서 살해된 혁명가를 순교자처럼 그렸습니다. 위쪽 반이 텅 빈 벽이라 더 조용하고 무겁습니다.", img: "david-marat" },
      { title: "알프스를 넘는 나폴레옹", orig: "Bonaparte franchissant le Grand-Saint-Bernard", year: "1801", museum: "파리 근교 말메종 성 국립박물관 (모두 다섯 판)", look: "실제로는 노새를 탔다고 합니다. 바위에 새긴 한니발, 카롤루스 대제의 이름이 선전 그림임을 알려 줍니다.", img: "david-napoleon" },
    ],
    howToLook: ["윤곽이 칼처럼 선명하고 붓 자국이 거의 없습니다. 들라크루아와 나란히 보면 차이가 확 보입니다.", "그림이 ‘무슨 메시지를 주려는가’를 물어보세요. 다비드의 그림은 대부분 정치적 발언입니다."],
  },
  {
    slug: "delacroix", country: "fr", name: "외젠 들라크루아", en: "Eugène Delacroix", years: "1798–1863",
    era: "romantic", eraNote: "프랑스 낭만주의의 깃발",
    life: [
      "파리 근교 샤랑통에서 태어났습니다.",
      "선을 중시한 앵그르와 달리 색과 움직임을 중시해, 둘은 ‘선 대 색’ 라이벌로 불렸습니다.",
      "1832년 모로코와 알제리를 여행하며 강한 빛과 색을 공부했습니다.",
      "쇼팽과 친한 친구였습니다. 쇼팽과 조르주 상드를 함께 그린 그림은 뒤에 두 조각으로 잘렸습니다.",
    ],
    works: [
      { title: "민중을 이끄는 자유의 여신", orig: "La Liberté guidant le peuple", year: "1830", museum: "파리 루브르 박물관", look: "1830년 7월 혁명. 삼색기를 든 여신, 모자 쓴 남자는 화가 자신으로 보는 해석이 있습니다. 소설 ‘레 미제라블’의 소년 가브로슈를 떠올리게 하는 아이도 있습니다.", img: "delacroix-liberty" },
      { title: "사르다나팔루스의 죽음", orig: "La Mort de Sardanapale", year: "1827", museum: "파리 루브르 박물관", look: "멸망 직전 왕이 모든 것을 파괴하라 명합니다. 붉은 침대를 따라 대각선으로 소용돌이가 칩니다.", img: "delacroix-sardanapalus" },
      { title: "키오스섬의 학살", orig: "Scènes des massacres de Scio", year: "1824", museum: "파리 루브르 박물관", look: "그리스 독립전쟁 중의 실제 학살. 당시 뉴스를 그림으로 고발했습니다.", img: "delacroix-chios" },
    ],
    howToLook: ["가까이서 보면 붓질이 빠르고 색이 섞여 있습니다. 인상주의 화가들이 이 그림 앞에서 공부했습니다.", "대각선을 찾아보세요. 들라크루아의 그림은 늘 기울어져 움직입니다."],
  },
  {
    slug: "millet", country: "fr", name: "장프랑수아 밀레", en: "Jean-François Millet", years: "1814–1875",
    era: "romantic", eraNote: "농부를 주인공으로 한 사실주의",
    life: [
      "노르망디의 농가에서 태어났습니다.",
      "1849년 파리 근처 바르비종 마을로 옮겨 숲과 들판의 농민을 그렸습니다(바르비종파).",
      "가난한 농부를 크게 그린 그림이 ‘불온하다’는 말도 들었습니다.",
      "고흐가 가장 존경한 화가 가운데 하나로, ‘씨 뿌리는 사람’을 여러 번 따라 그렸습니다.",
    ],
    works: [
      { title: "이삭 줍기", orig: "Des glaneuses", year: "1857", museum: "파리 오르세 미술관", look: "추수 뒤 남은 낟알을 줍는 가난한 여인 셋. 멀리 뒤쪽에는 풍성한 수확 더미가 있습니다. 그 대비가 메시지입니다.", img: "millet-gleaners" },
      { title: "만종", orig: "L'Angélus", year: "1857–1859", museum: "파리 오르세 미술관", look: "저녁 종소리에 일을 멈추고 기도하는 부부. 멀리 교회 탑이 보입니다.", img: "millet-angelus" },
      { title: "씨 뿌리는 사람", orig: "Le Semeur", year: "1850", museum: "미국 보스턴 미술관", look: "어두운 언덕을 성큼 내려오는 큰 몸. 고흐가 노랗게 다시 그린 판과 비교해 보세요.", img: "millet-sower" },
    ],
    howToLook: ["얼굴보다 몸짓을 보세요. 허리를 굽힌 각도에 하루의 피곤이 있습니다.", "땅의 갈색과 하늘빛이 어떻게 사람을 감싸는지 보세요."],
  },
  {
    slug: "manet", country: "fr", name: "에두아르 마네", en: "Édouard Manet", years: "1832–1883",
    era: "impressionism", eraNote: "인상주의의 큰형, 근대 회화의 시작",
    life: [
      "파리 부유한 집안에서 태어났습니다. 해군 학교 시험에 떨어지고 화가가 됐습니다.",
      "공식 전시회(살롱)에서 거듭 떨어지고 스캔들을 일으켰습니다.",
      "젊은 화가들(모네, 르누아르, 드가)이 그를 따랐지만, 정작 마네는 인상주의 전시에 한 번도 내지 않았습니다.",
      "1883년 51세로 세상을 떠났습니다.",
    ],
    works: [
      { title: "풀밭 위의 점심", orig: "Le Déjeuner sur l'herbe", year: "1863", museum: "파리 오르세 미술관", look: "옷 입은 신사들 옆의 벗은 여인이 우리를 똑바로 봅니다. 1863년 ‘낙선전’에서 큰 소동이 났습니다.", img: "manet-dejeuner" },
      { title: "올랭피아", orig: "Olympia", year: "1863 (1865 전시)", museum: "파리 오르세 미술관", look: "티치아노의 ‘우르비노의 비너스’와 같은 자세. 하지만 여신이 아니라 파리의 실제 여인입니다. 발치의 검은 고양이도 찾아보세요.", img: "manet-olympia" },
      { title: "폴리베르제르의 술집", orig: "Un bar aux Folies Bergère", year: "1882", museum: "런던 코톨드 갤러리", look: "뒤의 거울 속 반사가 맞지 않습니다. 일부러 어긋나게 그렸다는 해석이 많습니다.", img: "manet-bar" },
    ],
    howToLook: ["명암을 부드럽게 넘기지 않고 밝음·어둠을 바로 붙였습니다. 그래서 그림이 납작하고 현대적으로 보입니다.", "옛 거장 그림과 짝지어 보세요. 마네는 옛 그림을 현대로 옮겨 놓는 데 능했습니다."],
  },
  {
    slug: "monet", country: "fr", name: "클로드 모네", en: "Claude Monet", years: "1840–1926",
    era: "impressionism", eraNote: "인상주의라는 이름의 주인",
    life: [
      "파리에서 태어나 노르망디 항구 도시 르아브르에서 자랐습니다.",
      "1874년 친구들과 연 첫 전시에서 ‘인상, 해돋이’를 보고 한 평론가가 ‘인상주의자’라고 비꼰 것이 이름이 됐습니다.",
      "같은 대상을 시간과 날씨에 따라 여러 번 그리는 ‘연작’을 했습니다(건초 더미, 루앙 대성당).",
      "지베르니에 집과 연못을 만들고 30년 가까이 수련을 그렸습니다. 말년에는 백내장을 앓았습니다.",
    ],
    works: [
      { title: "인상, 해돋이", orig: "Impression, soleil levant", year: "1872", museum: "파리 마르모탕 모네 미술관", look: "르아브르 항구의 새벽. 주황 해만 또렷하고 나머지는 안개 속입니다. 흑백으로 바꾸면 해가 사라질 만큼 밝기가 하늘과 비슷합니다.", img: "monet-impression" },
      { title: "양산을 쓴 여인", orig: "La Promenade, la femme à l'ombrelle", year: "1875", museum: "워싱턴 내셔널 갤러리 오브 아트", look: "아내 카미유와 아들 장. 바람에 날리는 치마와 구름이 같은 붓질로 그려졌습니다.", img: "monet-parasol" },
      { title: "루앙 대성당 연작", orig: "La Cathédrale de Rouen", year: "1892–1894", museum: "연작 30여 점이 오르세 미술관 등 여러 곳에 흩어짐 (사진은 미국 클라크 미술관의 ‘햇빛 속 정면’)", look: "돌로 된 성당이 시간마다 색이 바뀝니다. 대상이 아니라 빛을 그렸습니다.", img: "monet-rouen" },
      { title: "수련 대장식화", orig: "Les Nymphéas", year: "1914–1926", museum: "파리 오랑주리 미술관", look: "타원형 두 방을 둘러싼 거대한 연못. 가운데 의자에 앉아 천천히 고개를 돌리며 보세요." },
    ],
    howToLook: ["가까이서는 물감 덩어리, 몇 걸음 물러서면 풍경. 거리를 바꿔 가며 보세요.", "그림자 색을 보세요. 검정 대신 파랑과 보라를 썼습니다."],
  },
  {
    slug: "renoir", country: "fr", name: "피에르오귀스트 르누아르", en: "Pierre-Auguste Renoir", years: "1841–1919",
    era: "impressionism", eraNote: "행복을 그린 인상주의",
    life: [
      "리모주에서 태어나 파리에서 자랐습니다. 10대에 도자기에 그림을 그리는 일을 했습니다.",
      "글레르 화실에서 모네를 만나 평생 친구가 됐습니다. 1869년 둘은 센강 ‘라 그르누예르’에서 나란히 그림을 그렸습니다.",
      "말년에는 류머티즘 관절염으로 손이 굳었지만 붓을 손에 묶고 그렸다는 이야기가 전합니다.",
      "아들 장 르누아르는 유명한 영화감독이 됐습니다.",
    ],
    works: [
      { title: "물랭 드 라 갈레트의 무도회", orig: "Bal du moulin de la Galette", year: "1876", museum: "파리 오르세 미술관", look: "몽마르트르 야외 무도장. 나뭇잎 사이로 떨어진 햇빛 얼룩이 옷과 얼굴 위에서 춤춥니다.", img: "renoir-moulin" },
      { title: "뱃놀이 일행의 점심", orig: "Le Déjeuner des canotiers", year: "1880–1881", museum: "워싱턴 필립스 컬렉션", look: "왼쪽에서 강아지와 노는 여인은 뒤에 르누아르의 아내가 된 알린 샤리고입니다.", img: "renoir-boating" },
      { title: "피아노 치는 소녀들", orig: "Jeunes filles au piano", year: "1892", museum: "파리 오르세 미술관 (같은 구도의 다른 판이 뉴욕 메트로폴리탄 등에도 있음)", look: "국가가 사들인 첫 르누아르 그림입니다. 부드러운 분홍과 노랑이 방을 채웁니다.", img: "renoir-piano" },
    ],
    howToLook: ["피부와 옷에 비친 색을 보세요. 르누아르는 그림자에도 따뜻한 색을 썼습니다.", "‘그림은 즐거워야 한다’는 게 그의 생각이었다고 전합니다. 웃고 있는 사람을 세어 보세요."],
  },
  {
    slug: "degas", country: "fr", name: "에드가 드가", en: "Edgar Degas", years: "1834–1917",
    era: "impressionism", eraNote: "움직임을 붙잡은 관찰자",
    life: [
      "파리의 은행가 집안에서 태어났습니다. 앵그르를 존경하며 데생을 열심히 했습니다.",
      "인상주의 전시에 거의 매번 참여했지만 스스로는 ‘사실주의자’라고 불리길 원했습니다.",
      "발레리나, 경마, 카페, 세탁부 같은 도시의 순간을 그렸습니다. 파스텔을 많이 썼습니다.",
      "눈이 점점 나빠지자 조각에 힘을 쏟았습니다. 마네와는 친구이자 다툼도 잦은 사이였습니다.",
    ],
    works: [
      { title: "발레 수업", orig: "La Classe de danse", year: "1871–1874", museum: "파리 오르세 미술관", look: "지팡이를 짚은 선생님은 실제 발레 교사 쥘 페로. 수업이 끝날 무렵 지친 무용수들이 등을 긁고 귀걸이를 만집니다.", img: "degas-class" },
      { title: "압생트", orig: "L'Absinthe (Dans un café)", year: "1875–1876", museum: "파리 오르세 미술관", look: "카페 구석의 두 사람. 탁자가 지그재그로 앞을 막아 우리는 엿보는 사람이 됩니다.", img: "degas-absinthe" },
      { title: "무대 위의 무희(에투알)", orig: "L'Étoile", year: "1876–1878년 무렵", museum: "파리 오르세 미술관", look: "위에서 내려다본 각도. 무대 옆 검은 옷의 남자가 보입니다. 화려함 뒤의 그늘입니다.", img: "degas-star" },
    ],
    howToLook: ["사진처럼 잘린 구도를 보세요. 사람이 화면 밖으로 반쯤 나가 있습니다. 일본 판화와 사진의 영향입니다.", "주인공이 가운데 없을 때가 많습니다. 빈 바닥이 왜 그렇게 넓은지 생각해 보세요."],
  },
  {
    slug: "cezanne", country: "fr", name: "폴 세잔", en: "Paul Cézanne", years: "1839–1906",
    era: "impressionism", eraNote: "후기 인상주의, 현대 미술의 아버지",
    life: [
      "남프랑스 엑상프로방스의 은행가 집안에서 태어났습니다. 소설가 에밀 졸라와 어릴 적 친구였습니다.",
      "파리에서 인상주의 화가들과 함께 전시했지만, 오래 남는 단단한 그림을 원했습니다.",
      "고향에 돌아와 생트빅투아르산을 수십 번 그렸습니다.",
      "피카소와 마티스가 그를 ‘우리 모두의 아버지’라 불렀다는 말이 전합니다(누가 처음 말했는지는 확실하지 않음).",
    ],
    works: [
      { title: "생트빅투아르산", orig: "La Montagne Sainte-Victoire", year: "1887년 무렵", museum: "런던 코톨드 갤러리 (연작이 여러 미술관에 있음)", look: "산과 들을 작은 색면 조각으로 쌓았습니다. 가까운 소나무 가지가 먼 산의 선과 이어집니다.", img: "cezanne-victoire" },
      { title: "카드 놀이하는 사람들", orig: "Les Joueurs de cartes", year: "1890–1895년 무렵", museum: "파리 오르세 미술관 (모두 다섯 판)", look: "가운데 병을 축으로 두 사람이 마주 앉아 완벽한 대칭을 이룹니다. 움직임 없는 긴장.", img: "cezanne-cards" },
      { title: "사과와 오렌지", orig: "Pommes et oranges", year: "1899년 무렵", museum: "파리 오르세 미술관", look: "식탁이 기울고 과일이 굴러떨어질 것 같습니다. 여러 시점을 한 화면에 섞은 실험입니다.", img: "cezanne-apples" },
    ],
    howToLook: ["윤곽선이 여러 번 덧그려진 곳을 찾아보세요. 보는 위치를 바꿔 가며 그린 흔적입니다.", "‘자연을 원통, 구, 원뿔로 다뤄라’는 그의 편지 구절을 떠올리며 사과와 산을 보세요."],
  },
  {
    slug: "matisse", country: "fr", name: "앙리 마티스", en: "Henri Matisse", years: "1869–1954",
    era: "modern", eraNote: "야수파, 색의 해방",
    life: [
      "북프랑스 르카토캉브레지에서 태어났습니다. 법률 사무소 직원이었다가 맹장염으로 쉬던 중 그림을 시작했습니다.",
      "1905년 가을 전시(살롱 도톤)에서 거친 원색 그림으로 ‘야수(fauves)’라는 이름을 얻었습니다.",
      "피카소와 서로를 가장 의식한 라이벌이자 친구였습니다.",
      "말년에 병으로 앉아 지내며 색종이를 오려 붙이는 ‘컷아웃’과 방스 로제르 예배당을 만들었습니다.",
    ],
    works: [
      { title: "모자를 쓴 여인", orig: "Femme au chapeau", year: "1905", museum: "샌프란시스코 현대미술관(SFMOMA)", look: "얼굴에 초록과 보라 줄이 그어져 있습니다. 색이 실제를 따르지 않고 감정을 따릅니다." },
      { title: "붉은 방(붉은색의 조화)", orig: "La Desserte rouge", year: "1908", museum: "상트페테르부르크 에르미타주 미술관", look: "식탁보와 벽이 같은 무늬로 이어져 방이 납작한 평면이 됩니다." },
      { title: "춤", orig: "La Danse", year: "1909–1910", museum: "상트페테르부르크 에르미타주 미술관", look: "빨강, 초록, 파랑 세 색뿐. 손이 끊어질 듯한 자리가 원의 긴장을 만듭니다." },
      { title: "재즈 (컷아웃 책)", orig: "Jazz", year: "1947", museum: "여러 미술관 소장 판화본", look: "‘가위로 그린 그림’. 이카로스의 붉은 심장을 찾아보세요." },
    ],
    howToLook: ["색 하나를 정해 그림 속에서 그 색이 몇 번 나오는지 세어 보세요.", "그림자와 원근을 지운 이유를 생각해 보세요. 마티스는 ‘좋은 안락의자 같은 그림’을 원했다고 썼습니다."],
    copyrighted: {
      note: "마티스는 1954년에 세상을 떠났습니다. 나라마다 저작권 기간이 달라, 이 사이트는 그림을 싣지 않고 미술관·백과 페이지로 안내합니다.",
      links: [
        { label: "모자를 쓴 여인 (위키백과)", href: enwiki("Woman with a Hat") },
        { label: "춤 (위키백과)", href: enwiki("Dance (Matisse)") },
        { label: "붉은 방 (위키백과)", href: enwiki("The Dessert: Harmony in Red") },
        { label: "앙리 마티스 (한국어 위키백과)", href: wiki("앙리 마티스") },
      ],
    },
  },
  {
    slug: "van-gogh", country: "fr", also: ["nl"], name: "빈센트 반 고흐", en: "Vincent van Gogh", years: "1853–1890",
    era: "impressionism", eraNote: "후기 인상주의 · 프랑스에서 활동한 네덜란드 화가",
    activeIn: "네덜란드 출신 · 프랑스에서 활동",
    life: [
      "네덜란드 쥔더르트에서 목사의 아들로 태어났습니다. 화상 점원, 선교사를 거쳐 27세에 화가가 되기로 했습니다.",
      "1886년 파리에서 동생 테오와 살며 인상주의와 일본 판화를 만나 색이 밝아졌습니다.",
      "1888년 남프랑스 아를로 가서 ‘노란 집’에 고갱을 불렀지만, 두 달 만에 다툼 끝에 귀를 자르는 일이 생겼습니다.",
      "생레미 요양원을 거쳐 오베르쉬르우아즈에서 1890년 37세로 세상을 떠났습니다. 테오에게 쓴 편지가 수백 통 남아 있습니다.",
    ],
    works: [
      { title: "별이 빛나는 밤", orig: "De sterrennacht", year: "1889", museum: "뉴욕 현대미술관(MoMA)", look: "생레미 요양원 창밖 풍경에 상상을 더했습니다. 왼쪽 사이프러스 나무가 불꽃처럼 하늘로 솟습니다.", img: "vangogh-starry" },
      { title: "해바라기", orig: "Zonnebloemen", year: "1888", museum: "런던 내셔널 갤러리 (여러 판이 암스테르담·뮌헨·도쿄 등에 있음)", look: "고갱의 방을 꾸미려고 그렸습니다. 노랑 위에 노랑, 색 하나로 그림을 세웠습니다.", img: "vangogh-sunflowers" },
      { title: "밤의 카페 테라스", orig: "Terrasse du café le soir", year: "1888", museum: "네덜란드 오테를로 크뢸러뮐러 미술관", look: "검정 없이 그린 밤. 파란 하늘과 노란 차양이 서로를 더 빛나게 합니다.", img: "vangogh-cafe" },
      { title: "아를의 침실", orig: "La Chambre à Arles", year: "1889 (세 번째 판)", museum: "파리 오르세 미술관 (첫 판은 암스테르담 반 고흐 미술관)", look: "벽이 비뚤고 바닥이 기울어 있습니다. 편히 쉬고 싶은 마음을 색으로 그렸다고 편지에 적었습니다.", img: "vangogh-bedroom" },
    ],
    howToLook: ["붓 자국 방향을 따라가 보세요. 하늘도 나무도 같은 리듬으로 움직입니다.", "편지를 같이 읽으면 그림이 달라 보입니다. 그가 직접 색의 뜻을 설명한 구절이 많습니다."],
  },
  {
    slug: "picasso", country: "fr", also: ["es"], name: "파블로 피카소", en: "Pablo Picasso", years: "1881–1973",
    era: "modern", eraNote: "입체주의 · 프랑스에서 활동한 스페인 화가",
    activeIn: "스페인 출신 · 프랑스에서 활동",
    life: [
      "스페인 말라가에서 미술 교사의 아들로 태어났습니다.",
      "1904년 파리 몽마르트르 ‘세탁선(바토 라부아르)’에 자리 잡았습니다. 청색 시대, 장밋빛 시대를 거쳤습니다.",
      "조르주 브라크와 함께 입체주의를 만들었습니다. 1917년 사티의 발레 ‘파라드’ 무대와 의상도 맡았습니다.",
      "평생 그림·조각·도자기를 수만 점 남기고 1973년 남프랑스 무쟁에서 세상을 떠났습니다.",
    ],
    works: [
      { title: "늙은 기타리스트", orig: "The Old Guitarist", year: "1903–1904", museum: "시카고 미술관", look: "청색 시대. 파랑 하나로 가난과 외로움을 그렸습니다." },
      { title: "아비뇽의 처녀들", orig: "Les Demoiselles d'Avignon", year: "1907", museum: "뉴욕 현대미술관(MoMA)", look: "몸이 여러 각도에서 본 조각으로 쪼개져 있습니다. 입체주의로 가는 첫걸음입니다." },
      { title: "게르니카", orig: "Guernica", year: "1937", museum: "마드리드 레이나 소피아 국립미술관", look: "스페인 내전 중 폭격당한 마을. 흑백과 회색만 쓴 가로 7m가 넘는 고발입니다." },
    ],
    howToLook: ["한 얼굴에 옆모습과 앞모습이 같이 있는지 찾아보세요.", "시기별로 너무 달라서 같은 사람 그림 같지 않습니다. 연도를 먼저 보세요."],
    copyrighted: {
      note: "피카소의 작품은 아직 저작권 보호를 받습니다. 그림은 싣지 않고 미술관·백과 페이지로 안내합니다.",
      links: [
        { label: "아비뇽의 처녀들 (위키백과)", href: enwiki("Les Demoiselles d'Avignon") },
        { label: "게르니카 (레이나 소피아)", href: "https://www.museoreinasofia.es/en/collection/artwork/guernica" },
        { label: "늙은 기타리스트 (위키백과)", href: enwiki("The Old Guitarist") },
        { label: "파리 피카소 미술관", href: "https://www.museepicassoparis.fr/" },
      ],
    },
  },
];

painters.push(...(more as Painter[]));

export const painterBySlug = (slug: string) => painters.find((p) => p.slug === slug);
