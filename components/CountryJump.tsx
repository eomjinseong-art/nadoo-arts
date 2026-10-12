import { COUNTRIES } from "@/data/countries";

export function CountryJump() {
  return (
    <nav aria-label="나라로 건너뛰기" className="mt-5 flex flex-wrap gap-1.5 text-sm">
      {COUNTRIES.map((c) => (
        <a key={c.code} href={`#${c.code}`} className="rounded-full border border-line bg-card px-2.5 py-1 hover:border-terra">
          {c.flag} {c.name}
        </a>
      ))}
    </nav>
  );
}
