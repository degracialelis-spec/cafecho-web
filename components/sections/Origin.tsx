import Image from "next/image";
import { MayanLineArt } from "@/components/brand/MayanLineArt";
import { Seal } from "@/components/brand/Seal";
import { Kicker } from "@/components/ui/Kicker";
import { Parallax } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";
import { origin } from "@/lib/content";
import { images } from "@/lib/images";

export function Origin() {
  const photo = origin.image ? images[origin.image] : null;
  return (
    <section id="origen" aria-labelledby="origen-title" className="relative isolate overflow-hidden bg-negro">
      <Parallax strength={6}>
        {photo ? (
          <>
            {/* Encuadre alto: la bolsa de esta foto dice "50% CACAO" y "DECURO" (ver README) */}
            <Image src={photo} alt={origin.alt} placeholder="blur" fill sizes="100vw" className="object-cover object-[50%_22%]" />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-negro from-30% via-negro/80 to-transparent" />
          </>
        ) : (
          // Mientras llega origin-copan.jpg: paisaje de línea fina (montañas, pirámide, estela, café y cacao).
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,#4a2e1f_0%,#1c110b_55%,#0f0a07_100%)]">
            <MayanLineArt className="absolute bottom-[12%] right-[-30%] w-[160%] text-cobre/50 md:right-[-4%] md:w-[78%]" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-negro to-transparent" />
          </div>
        )}
      </Parallax>
      <div aria-hidden="true" className="absolute inset-0 bg-negro/55 lg:bg-transparent lg:bg-gradient-to-r lg:from-negro/90 lg:via-negro/50 lg:to-transparent" />

      <div className="relative mx-auto flex min-h-[90svh] max-w-7xl flex-col justify-center gap-12 px-4 py-24 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Reveal className="max-w-xl">
          <Kicker>{origin.kicker}</Kicker>
          <h2 id="origen-title" className="mt-4 font-serif text-5xl leading-[1.05] text-crema sm:text-6xl lg:text-7xl">
            {origin.title}
          </h2>
          <span aria-hidden="true" className="mt-7 block h-px w-16 bg-dorado/60" />
          <div className="mt-7 space-y-5 text-base leading-relaxed text-crema/85 sm:text-lg">
            {origin.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {!photo && <p className="pending mt-8 text-xs text-crema/70">{origin.imageNote}</p>}
        </Reveal>
        <Reveal delay={0.2} className="self-start lg:self-end">
          <Seal jade className="size-36 drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)] sm:size-44" />
        </Reveal>
      </div>
    </section>
  );
}
