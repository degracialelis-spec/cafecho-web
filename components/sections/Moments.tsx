import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { moments } from "@/lib/content";
import { images } from "@/lib/images";

export function Moments() {
  const [a, b] = moments.images;
  return (
    <section id="momentos" aria-labelledby="momentos-title" className="paper">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Composición asimétrica: foto grande horizontal + foto vertical superpuesta */}
          <div className="relative pb-24 sm:pb-32 lg:col-span-7">
            <Reveal className="group relative aspect-[5/4] overflow-hidden rounded-sm">
              {/* aspect 5/4 + encuadre superior: corta la parte de la bolsa con texto erróneo */}
              <Image src={images[a.key]} alt={a.alt} placeholder="blur" fill sizes="(min-width: 1280px) 680px, (min-width: 1024px) 55vw, 100vw" style={{ objectPosition: a.position }} className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </Reveal>
            <Reveal delay={0.15} className="group absolute bottom-0 right-0 w-[38%] overflow-hidden rounded-sm border-[6px] border-crema shadow-[0_10px_30px_rgba(43,24,16,0.18)]">
              <div className="relative aspect-[3/4]">
                <Image src={images[b.key]} alt={b.alt} placeholder="blur" fill sizes="(min-width: 1024px) 260px, 38vw" style={{ objectPosition: b.position }} className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-6">
            <Reveal>
              <SectionHeading id="momentos-title" kicker={moments.kicker} title={moments.title} intro={moments.intro} tone="light" />
            </Reveal>
            <ol className="mt-10 divide-y divide-bronce/25 border-y border-bronce/25">
              {moments.items.map((m, i) => (
                <Reveal as="li" key={m.title} delay={i * 0.1} className="flex gap-5 py-6">
                  <span className="font-serif text-lg text-bronce">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-serif text-2xl">{m.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-espresso/80">{m.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-espresso/70">{moments.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
