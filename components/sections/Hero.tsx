import { getImageProps } from "next/image";
import { preload } from "react-dom";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { Parallax } from "@/components/ui/Parallax";
import { hero } from "@/lib/content";
import { images } from "@/lib/images";

export function Hero() {
  const desktop = images[hero.imageDesktop];
  const mobile = images[hero.imageMobile];
  const common = { alt: hero.altDesktop, sizes: "100vw", priority: true, quality: 72 };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, src: desktop });
  const {
    props: { srcSet: mobileSrcSet, ...rest },
  } = getImageProps({ ...common, src: mobile, alt: hero.altMobile });

  // Precarga solo la imagen que corresponde al ancho de pantalla (LCP).
  preload(rest.src, { as: "image", imageSrcSet: desktopSrcSet, imageSizes: "100vw", media: "(min-width: 768px)", fetchPriority: "high" });
  preload(rest.src, { as: "image", imageSrcSet: mobileSrcSet, imageSizes: "100vw", media: "(max-width: 767px)", fetchPriority: "high" });

  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-negro md:items-center">
      <Parallax strength={3}>
        <picture>
          <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
          <source media="(max-width: 767px)" srcSet={mobileSrcSet} />
          {/* eslint-disable-next-line jsx-a11y/alt-text -- el alt viene en `rest` */}
          <img
            {...rest}
            fetchPriority="high"
            style={{ width: "100%", height: "100%" }}
            className="object-cover object-[50%_30%] md:object-[85%_50%]"
          />
        </picture>
      </Parallax>
      {/* Degradados para que el texto se lea */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-negro from-35% via-negro/85 via-60% to-negro/10 md:from-0% md:via-50% md:bg-gradient-to-r md:from-negro/95 md:via-negro/60 md:to-transparent" />
      {/* Oscurece la parte baja de la bolsa: su texto pequeño tiene errores (ver README) */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 hidden h-[45%] bg-gradient-to-t from-negro from-25% via-negro/85 to-transparent md:block" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-negro/80 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-40 sm:px-6 md:pb-24 lg:px-10">
        <div className="max-w-xl">
          <Kicker>{hero.kicker}</Kicker>
          <h1 id="hero-title" className="mt-5 font-serif text-[2.6rem] leading-[1.04] text-crema text-balance sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-crema/85 sm:text-lg">{hero.subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={hero.primary.href}>{hero.primary.label}</Button>
            <Button href={hero.secondary.href} variant="outline">
              {hero.secondary.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
