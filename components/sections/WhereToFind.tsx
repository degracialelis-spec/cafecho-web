import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { statusLabels, whereToFind, type StoreStatus } from "@/lib/content";
import { images } from "@/lib/images";

const statusStyle: Record<StoreStatus, string> = {
  disponible: "bg-espresso text-crema border-espresso",
  "disponible-pronto": "border-espresso text-espresso",
  proximamente: "border-bronce/60 text-bronce",
  "mas-adelante": "border-espresso/30 text-espresso/70",
};

export function WhereToFind() {
  return (
    <section id="donde-encontrarnos" aria-labelledby="donde-title" className="paper border-t border-bronce/15">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:gap-16 lg:px-10 lg:py-28">
        <div className="md:order-2">
          <Reveal>
            <SectionHeading id="donde-title" kicker={whereToFind.kicker} title={whereToFind.title} intro={whereToFind.intro} tone="light" />
          </Reveal>
          <ul className="mt-10 border-t border-bronce/25">
            {whereToFind.stores.map((s, i) => (
              <Reveal as="li" key={s.name} delay={i * 0.08} className="flex items-center justify-between gap-4 border-b border-bronce/25 py-5">
                <div>
                  <p className="font-serif text-xl">{s.name}</p>
                  <p className="mt-0.5 text-sm text-espresso/75">{s.detail}</p>
                </div>
                <span className={`shrink-0 rounded-sm border px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] ${statusStyle[s.status]}`}>
                  {statusLabels[s.status]}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal className="group relative aspect-[4/5] overflow-hidden rounded-sm md:order-1">
          <Image
            src={images[whereToFind.image]}
            alt={whereToFind.alt}
            placeholder="blur"
            fill
            sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
            style={{ objectPosition: whereToFind.imagePosition }}
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </Reveal>
      </div>
    </section>
  );
}
