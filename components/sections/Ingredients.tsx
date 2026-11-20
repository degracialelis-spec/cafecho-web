import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ingredients } from "@/lib/content";
import { images } from "@/lib/images";

export function Ingredients() {
  return (
    <section id="ingredientes" aria-labelledby="ingredientes-title" className="paper">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:gap-16 lg:px-10 lg:py-28">
        <Reveal className="group relative aspect-[4/5] overflow-hidden rounded-sm md:aspect-square">
          <Image
            src={images[ingredients.image]}
            alt={ingredients.alt}
            placeholder="blur"
            fill
            sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-[55%_78%] transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading id="ingredientes-title" kicker={ingredients.kicker} title={ingredients.title} tone="light" />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-espresso/85">
            {ingredients.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="mt-10 grid grid-cols-2 border-t border-bronce/30">
            {ingredients.highlights.map((h, i) => (
              <div key={h.label} className={`pt-6 ${i > 0 ? "border-l border-bronce/30 pl-6" : ""}`}>
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-bronce">{h.label}</dt>
                <dd className="mt-2 font-serif text-2xl">{h.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
