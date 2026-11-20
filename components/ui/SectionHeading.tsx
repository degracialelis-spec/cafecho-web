import { Kicker } from "./Kicker";

type Props = {
  kicker: string;
  title: string;
  intro?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  id?: string;
  className?: string;
};

export function SectionHeading({ kicker, title, intro, tone = "dark", align = "left", id, className = "" }: Props) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      <Kicker tone={tone}>{kicker}</Kicker>
      <h2 id={id} className="mt-4 font-serif text-4xl leading-[1.08] text-balance sm:text-5xl">
        {title}
      </h2>
      <span
        aria-hidden="true"
        className={`mt-6 block h-px w-16 ${tone === "light" ? "bg-bronce/60" : "bg-dorado/60"} ${center ? "mx-auto" : ""}`}
      />
      {intro && (
        <p className={`mt-6 text-base leading-relaxed ${tone === "light" ? "text-espresso/80" : "text-crema/80"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
