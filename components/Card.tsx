import Link from "next/link";

export function PersonCard({ href, name, en, years, sub, badge }: { href: string; name: string; en: string; years: string; sub: string; badge?: string }) {
  return (
    <Link href={href} className="block rounded-lg border border-line bg-card p-4 transition-colors hover:border-terra">
      <p className="font-serif text-lg text-ink">{name}</p>
      <p className="text-[11px] tracking-[0.12em] text-terra">
        {en} · {years}
      </p>
      <p className="mt-2 text-sm leading-6 text-muted">{sub}</p>
      {badge ? <span className="mt-2 inline-block rounded-full border border-line px-2 py-0.5 text-[11px] text-dusk">{badge}</span> : null}
    </Link>
  );
}

export function Section({ title, en, children, id }: { title: string; en?: string; children: React.ReactNode; id?: string }) {
  return (
    <section className="mt-10 scroll-mt-20" id={id}>
      <h2 className="font-serif text-2xl text-ink">
        {title}
        {en ? <span className="ml-2 font-sans text-sm font-normal text-muted">/ {en}</span> : null}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
