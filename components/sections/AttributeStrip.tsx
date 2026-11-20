import { LineIcon } from "@/components/ui/LineIcon";
import { attributes } from "@/lib/content";

/** Franja de atributos con deslizamiento horizontal infinito (CSS). Se detiene con reduced-motion o hover. */
export function AttributeStrip() {
  const row = (hidden: boolean) => (
    <ul
      className={`flex shrink-0 items-center ${hidden ? "motion-reduce:hidden" : "motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-4"}`}
      aria-hidden={hidden || undefined}
    >
      {attributes.map((a) => (
        <li key={a.label} className="flex items-center gap-3 px-8 sm:px-10">
          <LineIcon name={a.icon} className="size-6 text-cobre" />
          <span className="whitespace-nowrap text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-crema">{a.label}</span>
          <span aria-hidden="true" className="ml-8 size-1 rotate-45 bg-dorado/60 sm:ml-10" />
        </li>
      ))}
    </ul>
  );
  return (
    <section aria-label="Atributos de Cafecho" className="overflow-hidden border-y border-dorado/25 bg-cacao py-6">
      <div className="marquee-track flex w-max animate-marquee motion-reduce:w-full">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
