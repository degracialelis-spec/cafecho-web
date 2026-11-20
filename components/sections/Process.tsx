import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section id="proceso" aria-labelledby="proceso-title" className="paper">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <Reveal>
          <SectionHeading id="proceso-title" kicker={process.kicker} title={process.title} tone="light" align="center" />
        </Reveal>
        <ol className="relative mt-16 grid gap-12 md:grid-cols-4 md:gap-8">
          {/* Línea dorada que une los pasos */}
          <span aria-hidden="true" className="absolute left-7 top-7 bottom-7 w-px bg-bronce/40 md:inset-x-[12.5%] md:bottom-auto md:left-[12.5%] md:h-px md:w-auto" />
          {process.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.12} className="relative flex gap-6 md:flex-col md:items-center md:text-center">
              <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-bronce/60 bg-crema font-serif text-xl text-bronce">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-2xl">{step.title}</h3>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-espresso/80">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
