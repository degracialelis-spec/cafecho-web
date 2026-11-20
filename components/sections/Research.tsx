import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { research } from "@/lib/content";

/** Resultados del estudio de mercado del equipo (no son reseñas). */
export function Research() {
  return (
    <section aria-labelledby="estudio-title" className="bg-espresso">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10 lg:py-24">
        <Reveal>
          <SectionHeading id="estudio-title" kicker={research.kicker} title={research.title} align="center" />
        </Reveal>
        <dl className="mx-auto mt-14 grid max-w-4xl gap-12 sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-dorado/25">
          {research.stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.12} className="flex flex-col-reverse items-center px-6 text-center">
              <dt className="mt-4 max-w-xs text-sm leading-relaxed text-crema/80">{s.text}</dt>
              <dd className="font-serif text-7xl text-dorado sm:text-8xl">{s.value}</dd>
            </Reveal>
          ))}
        </dl>
        <p className="mt-14 text-center text-xs text-crema/70">{research.source}</p>
      </div>
    </section>
  );
}
