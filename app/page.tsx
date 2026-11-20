import { Header } from "@/components/layout/Header";
import { AttributeStrip } from "@/components/sections/AttributeStrip";
import { Contact } from "@/components/sections/Contact";
import { Corporate } from "@/components/sections/Corporate";
import { Hero } from "@/components/sections/Hero";
import { Ingredients } from "@/components/sections/Ingredients";
import { Moments } from "@/components/sections/Moments";
import { Origin } from "@/components/sections/Origin";
import { Process } from "@/components/sections/Process";
import { Products } from "@/components/sections/Products";
import { Research } from "@/components/sections/Research";
import { Social } from "@/components/sections/Social";
import { WhereToFind } from "@/components/sections/WhereToFind";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <AttributeStrip />
        <Ingredients />
        <Products />
        <Process />
        <Origin />
        <Moments />
        <Research />
        <WhereToFind />
        <Corporate />
        <Social />
        <Contact />
      </main>
    </>
  );
}
