import type { Metadata } from "next";
import Link from "@/components/ui/SmartLink";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { ProductVisual } from "@/components/sections/Products";
import { Button } from "@/components/ui/Button";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { Kicker } from "@/components/ui/Kicker";
import { Meter } from "@/components/ui/Meter";
import { Text } from "@/components/ui/Text";
import { brand, nutrition, products } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — Cafecho | Hecho en Honduras`,
    description: `${product.name}: granos de café de altura de Copán cubiertos de chocolate. ${product.weight}, bolsa individual resellable.`,
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();
  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      <Header solid />
      <main id="contenido" className="bg-espresso pt-20">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10 lg:py-20">
          <nav aria-label="Migas de pan" className="text-xs text-crema/70">
            <Link href="/" className="hover:text-cobre">Inicio</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/#producto" className="hover:text-cobre">Producto</Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page" className="text-crema">{product.name}</span>
          </nav>
          <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="group relative aspect-[4/5] self-start overflow-hidden rounded-sm border border-dorado/25 md:sticky md:top-28">
              <ProductVisual product={product} sizes="(min-width: 768px) 50vw, 100vw" priority />
            </div>
            <div>
              <Kicker><Text>{product.cacao}</Text></Kicker>
              <h1 className="mt-4 font-serif text-5xl leading-tight text-crema sm:text-6xl">{product.name}</h1>
              <p className="mt-5 font-serif text-2xl italic leading-snug text-dorado">{product.tagline}</p>
              <p className="mt-5 text-lg leading-relaxed text-crema/85">{product.description}</p>
              <div className="mt-8 max-w-sm space-y-3 text-sm">
                <Meter label="Intensidad de café" value={product.coffeeIntensity} />
                <Meter label="Dulzor" value={product.sweetness} />
              </div>
              <h2 className="mt-10 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-dorado">Perfil de sabor</h2>
              <dl className="mt-5 divide-y divide-dorado/20 border-y border-dorado/20">
                {product.profile.map((d) => (
                  <div key={d.label} className="grid grid-cols-[9rem_1fr] gap-4 py-3.5 text-sm">
                    <dt className="text-crema/70">{d.label}</dt>
                    <dd className="text-crema">{d.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 font-serif text-2xl text-dorado">{product.price}</p>
              <GoldDivider className="my-10" />
              <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-dorado">Información del producto</h2>
              <dl className="mt-5 divide-y divide-dorado/20 border-y border-dorado/20">
                {product.details.map((d) => (
                  <div key={d.label} className="grid grid-cols-[9rem_1fr] gap-4 py-3.5 text-sm">
                    <dt className="text-crema/70">{d.label}</dt>
                    <dd className="text-crema"><Text>{d.value}</Text></dd>
                  </div>
                ))}
              </dl>
              <h2 className="mt-12 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-dorado">Información nutricional</h2>
              <div className="mt-5 rounded-sm border border-dorado/30 p-5 text-sm">
                <p className="text-crema/80">
                  Porción: {nutrition.servingSize} · Porciones por envase: {nutrition.servingsPerPack}
                </p>
                <p className="mt-4 flex items-baseline justify-between border-b border-dorado/40 pb-3">
                  <span className="text-crema/80">Energía por porción</span>
                  <span className="font-serif text-3xl text-crema">{nutrition.energy}</span>
                </p>
                <table className="mt-2 w-full">
                  <caption className="sr-only">Cantidad por porción de {nutrition.servingSize}</caption>
                  <tbody className="divide-y divide-dorado/15">
                    {nutrition.rows.map((r) => (
                      <tr key={r.label}>
                        <th scope="row" className="py-2.5 text-left font-normal text-crema/80">{r.label}</th>
                        <td className="py-2.5 text-right tabular-nums text-crema">{r.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <dl className="mt-8 space-y-5 text-sm leading-relaxed">
                <div>
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-dorado">Indicaciones de uso</dt>
                  <dd className="mt-1.5 text-crema/85">{nutrition.usage}</dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-dorado">Conservación</dt>
                  <dd className="mt-1.5 text-crema/85">{nutrition.storage}</dd>
                </div>
              </dl>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-crema/70">{brand.moderation}</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href="/#donde-encontrarnos">Dónde encontrarnos</Button>
                {others.map((o) => (
                  <Button key={o.slug} href={`/producto/${o.slug}`} variant="outline">
                    Ver {o.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
