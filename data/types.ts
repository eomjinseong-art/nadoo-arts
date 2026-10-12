export type CountryCode =
  | "it" | "fr" | "de" | "at" | "gb" | "es" | "nl" | "be" | "ru" | "pl" | "cz" | "hu" | "no" | "se" | "fi" | "dk" | "ro" | "ch";

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
  /** 함께 소개할 다른 나라(활동지 등) */
  also?: CountryCode[];
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
  /** 함께 소개할 다른 나라(활동지 등) */
  also?: CountryCode[];
  copyrighted?: { note: string; links: { label: string; href: string }[] };
};
