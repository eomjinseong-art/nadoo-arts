import Image from "next/image";
import credits from "@/data/image-credits.json";

type Credit = { file: string; page: string; license: string; author: string; w: number; h: number };
const CREDITS = credits as Record<string, Credit>;

export function ArtImage({ id, alt, priority = false, caption = true, className = "" }: { id: string; alt: string; priority?: boolean; caption?: boolean; className?: string }) {
  const c = CREDITS[id];
  if (!c) return null;
  return (
    <figure className={`overflow-hidden rounded-md border border-line bg-stone ${className}`}>
      <Image src={`/art/${id}.jpg`} alt={alt} width={c.w} height={c.h} priority={priority} sizes="(min-width: 768px) 50vw, 100vw" className="h-auto w-full" />
      {caption ? (
      <figcaption className="px-3 py-1.5 text-[11px] leading-5 text-muted">
        {c.author ? `${c.author} · ` : ""}
        <a href={c.page} target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-2 hover:text-terra">
          Wikimedia Commons
        </a>{" "}
        · {c.license}
      </figcaption>
      ) : null}
    </figure>
  );
}
