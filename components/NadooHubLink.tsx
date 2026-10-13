/** 나두연표 허브로 가는 링크. 이야기 순 영화, 주인공 실존 여부, 동시대 인물. */
const HUB = "https://nadoo-timeline.vercel.app";
const YEARS: Record<string, Record<string, number>> = {"https://nadoo-arts.vercel.app/art/": {"michelangelo": 1520, "caravaggio": 1590, "rembrandt": 1638, "vermeer": 1654, "goya": 1787, "turner": 1813, "renoir": 1880, "cezanne": 1872, "van-gogh": 1872, "munch": 1904, "klimt": 1890, "modigliani": 1902, "schiele": 1904}, "https://nadoo-arts.vercel.app/music/": {"mozart": 1774, "beethoven": 1798, "paganini": 1811, "chopin": 1830, "tchaikovsky": 1866, "mahler": 1886, "ravel": 1906, "piaf": 1939}};

export function NadooHubPersonLink({ base, slug }: { base: string; slug: string }) {
  const year = YEARS[base]?.[slug];
  const contemporaries = year ? `${HUB}/contemporaries?year=${year}` : `${HUB}/contemporaries`;
  return (
    <aside aria-label="나두연표에서 보기" className="mt-8 rounded-md border border-line p-3 text-sm">
      <a href={contemporaries} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
        동시대 인물 보기 · 나두연표 →
      </a>
      {" · "}
      <a href={`${HUB}/films`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
        연표에서 보기 (이야기 순 영화)
      </a>
      {" · "}
      <a href={`${HUB}/protagonists`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
        영화 주인공 실존 여부
      </a>
    </aside>
  );
}

export function NadooHubFilmsLink() {
  return (
    <aside aria-label="나두연표 영화 허브" className="mt-8 rounded-md border border-line p-3 text-sm">
      <a href={`${HUB}/films`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
        모든 역사 영화를 이야기 속 해 순서로 보기 · 나두연표 →
      </a>
      {" · "}
      <a href={`${HUB}/protagonists`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
        주인공은 실존 인물일까
      </a>
      {" · "}
      <a href={`${HUB}/contemporaries`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
        동시대 인물
      </a>
    </aside>
  );
}
