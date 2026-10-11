export type CountryCode = "it" | "fr";

export type Era = "renaissance" | "baroque" | "classical" | "romantic" | "impressionism" | "modern";

export type Composer = {
  slug: string;
  country: CountryCode;
  name: string;
  en: string;
  years: string;
  era: Era;
  eraNote: string;
  life: string[];
  works: { title: string; year: string; note: string }[];
  listen: string[];
  yt: string;
  note?: string;
};

export type Artwork = {
  title: string;
  orig: string;
  year: string;
  museum: string;
  look: string;
  /** public/art/<img>.jpg 가 있을 때만 */
  img?: string;
};

export type Painter = {
  slug: string;
  country: CountryCode;
  name: string;
  en: string;
  years: string;
  era: Era;
  eraNote: string;
  life: string[];
  works: Artwork[];
  howToLook: string[];
  /** 프랑스에서 활동했지만 태어난 나라는 다름 */
  activeIn?: string;
  /** 저작권이 남은 작품: 이미지 대신 링크 */
  copyrighted?: { note: string; links: { label: string; href: string }[] };
};
