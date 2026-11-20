import { Isotype } from "@/components/brand/Isotype";
import { MayanLineArt } from "@/components/brand/MayanLineArt";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { corporate } from "@/lib/content";

export function Corporate() {
  return (
    <section id="corporativo" aria-labelledby="corporativo-title" className="relative isolate overflow-hidden bg-negro">
      <MayanLineArt className="pointer-events-none absolute -bottom-6 left-1/2 -z-10 w-[1100px] max-w-none -translate-x-1/2 text-dorado/15" />
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:py-32">
        <Isotype variant="premium" className="h-24 w-auto" />
        <Kicker className="mt-8">{corporate.kicker}</Kicker>
        <h2 id="corporativo-title" className="mt-4 font-serif text-4xl leading-tight text-crema text-balance sm:text-5xl">
          {corporate.title}
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-crema/80">{corporate.text}</p>
        <Button href={corporate.cta.href} className="mt-10">
          {corporate.cta.label}
        </Button>
      </Reveal>
    </section>
  );
}
