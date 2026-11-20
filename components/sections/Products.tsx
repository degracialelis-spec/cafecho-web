import Image from "next/image";
import Link from "@/components/ui/SmartLink";
import { Isotype } from "@/components/brand/Isotype";
import { Meter } from "@/components/ui/Meter";
import { buttonClass } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Text } from "@/components/ui/Text";
import { products, productsSection, type Product } from "@/lib/content";
import { images } from "@/lib/images";

export function ProductVisual({ product, sizes, priority }: { product: Product; sizes: string; priority?: boolean }) {
  if (!product.image) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-gradient-to-b from-[#4a3122] to-cacao p-8 text-center">
        <Isotype variant="negative" paper="#432c1e" className="h-28 w-auto opacity-90" />
        <p className="font-serif text-2xl text-crema">{product.name}</p>
        <p className="pending text-xs text-crema/80">[PENDIENTE: foto de la bolsa {product.shortName}]</p>
      </div>
    );
  }
  return (
    <>
    <Image
      src={images[product.image]}
      alt={product.alt}
      placeholder="blur"
      fill
      sizes={sizes}
      priority={priority}
      style={{ objectPosition: product.imagePosition }}
      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
    />
    {/* Oscurece la parte baja de la bolsa: su texto pequeño tiene errores (ver README) */}
    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-cacao from-45% via-cacao/90 to-transparent" />
    </>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-dorado/25 bg-cacao">
      <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/6]">
        <ProductVisual product={product} sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw" />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-sm bg-dorado px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-negro">
            {product.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-dorado">
          <Text>{product.cacao}</Text>
        </p>
        <h3 className="mt-3 font-serif text-3xl text-crema">{product.name}</h3>
        <p className="mt-3 font-serif text-lg italic leading-snug text-dorado">{product.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-crema/80">{product.description}</p>
        <div className="mt-6 space-y-2.5 border-t border-dorado/20 pt-5 text-sm">
          <Meter label="Intensidad de café" value={product.coffeeIntensity} />
          <Meter label="Dulzor" value={product.sweetness} />
        </div>
        <ul className="mt-5 space-y-2 border-t border-dorado/20 pt-5 text-sm text-crema/85">
          <li>
            <span className="text-crema/70">Notas:</span> <Text>{product.flavorNotes}</Text>
          </li>
          <li>
            {product.weight} · <Text>{product.caffeine}</Text>
          </li>
        </ul>
        <div className="mt-auto flex items-center justify-between gap-4 pt-8">
          <p className="text-sm font-medium text-dorado">{product.price}</p>
          <Link
            href={`/producto/${product.slug}`}
            className={buttonClass("outline", "px-5 py-2.5")}
            aria-label={`Ver detalles de ${product.name}`}
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </article>
  );
}

export function Products() {
  return (
    <section id="producto" aria-labelledby="producto-title" className="bg-espresso">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <Reveal>
          <SectionHeading id="producto-title" kicker={productsSection.kicker} title={productsSection.title} intro={productsSection.intro} align="center" />
        </Reveal>
        <ul className="mx-auto mt-14 grid max-w-5xl gap-8 sm:grid-cols-2">
          {products.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 0.12}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
