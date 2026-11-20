import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Text } from "@/components/ui/Text";
import { social } from "@/lib/content";
import { images } from "@/lib/images";

export function Social() {
  return (
    <section aria-labelledby="social-title" className="paper border-t border-bronce/15">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading id="social-title" kicker={social.kicker} title={social.title} tone="light" />
            <a
              href={social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-serif text-xl text-bronce hover:text-espresso"
            >
              <Text>{social.handle}</Text>
            </a>
          </Reveal>
          <div className="flex gap-3">
            <Button href={social.instagramUrl} variant="outline-dark" external>
              Instagram
            </Button>
            {social.tiktokUrl && (
              <Button href={social.tiktokUrl} variant="outline-dark" external>
                TikTok
              </Button>
            )}
          </div>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {social.feed.map((item, i) => (
            <Reveal as="li" key={i} delay={i * 0.06}>
              <a
                href={social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-sm"
              >
                <Image
                  src={images[item.key]}
                  alt={item.alt}
                  placeholder="blur"
                  fill
                  sizes="(min-width: 1024px) 200px, (min-width: 768px) 33vw, 50vw"
                  style={{ objectPosition: item.position }}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/25" />
                <span className="sr-only"> — ver en Instagram (abre en una pestaña nueva)</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
