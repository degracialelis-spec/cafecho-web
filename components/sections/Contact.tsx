"use client";

import { useState, type FormEvent } from "react";
import { Kicker } from "@/components/ui/Kicker";
import { Reveal } from "@/components/ui/Reveal";
import { buttonClass } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { CONTACT_EMAIL, CONTACT_WHATSAPP, CONTACT_WHATSAPP_DISPLAY } from "@/lib/constants";
import { contact } from "@/lib/content";

const field =
  "mt-2 w-full rounded-sm border border-dorado/40 bg-cacao/60 px-4 py-3 text-crema placeholder:text-crema/50 focus:border-dorado focus:outline-none focus-visible:outline-2 focus-visible:outline-dorado";
const label = "text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-crema/85";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const type = contact.inquiryTypes.find((t) => t.value === data.get("tipo"))?.label ?? "";
    // TODO: conectar a un backend o servicio de formularios (ej. Formspree, Resend).
    // Mientras tanto, si hay correo configurado se abre el cliente de correo con el mensaje.
    if (CONTACT_EMAIL) {
      const subject = encodeURIComponent(`${type} — ${data.get("nombre")}`);
      const body = encodeURIComponent(`${data.get("mensaje")}\n\n${data.get("nombre")} · ${data.get("correo")}`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    }
    setSent(true);
  }

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="bg-espresso">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:px-10 lg:py-28">
        <Reveal>
          <Kicker>{contact.kicker}</Kicker>
          <h2 id="contacto-title" className="mt-4 font-serif text-5xl text-crema sm:text-6xl">
            {contact.title}
          </h2>
          <span aria-hidden="true" className="mt-6 block h-px w-16 bg-dorado/60" />
          <p className="mt-6 max-w-sm leading-relaxed text-crema/80">{contact.intro}</p>
          <dl className="mt-10 space-y-6">
            <div>
              <dt className={label}>Correo</dt>
              <dd className="mt-1.5 text-crema">
                {CONTACT_EMAIL ? (
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-cobre">{CONTACT_EMAIL}</a>
                ) : (
                  <Text>{contact.emailLabel}</Text>
                )}
              </dd>
            </div>
            <div>
              <dt className={label}>WhatsApp</dt>
              <dd className="mt-1.5 text-crema">
                {CONTACT_WHATSAPP ? (
                  <a href={`https://wa.me/${CONTACT_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="hover:text-cobre">
                    {CONTACT_WHATSAPP_DISPLAY}
                    <span className="sr-only"> (abre WhatsApp)</span>
                  </a>
                ) : (
                  <Text>{contact.whatsappLabel}</Text>
                )}
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          {sent ? (
            <div role="status" className="flex h-full min-h-72 flex-col items-center justify-center rounded-sm border border-dorado/30 bg-cacao/50 p-10 text-center">
              <p className="font-serif text-3xl text-crema">{contact.thanks}</p>
              <button type="button" onClick={() => setSent(false)} className={buttonClass("outline", "mt-8")}>
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="nombre" className={label}>Nombre</label>
                <input id="nombre" name="nombre" required autoComplete="name" className={field} />
              </div>
              <div>
                <label htmlFor="correo" className={label}>Correo</label>
                <input id="correo" name="correo" type="email" required autoComplete="email" className={field} />
              </div>
              <fieldset className="sm:col-span-2">
                <legend className={label}>Tipo de consulta</legend>
                <div className="mt-3 flex flex-wrap gap-3">
                  {contact.inquiryTypes.map((t, i) => (
                    <label key={t.value} className="cursor-pointer">
                      <input type="radio" name="tipo" value={t.value} defaultChecked={i === 0} className="peer sr-only" />
                      <span className="inline-block rounded-sm border border-dorado/40 px-4 py-2.5 text-xs font-medium tracking-wide text-crema/85 transition-colors peer-checked:border-dorado peer-checked:bg-dorado peer-checked:text-negro peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-dorado">
                        {t.label}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <div className="sm:col-span-2">
                <label htmlFor="mensaje" className={label}>Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows={5} required className={field} />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className={buttonClass("solid", "w-full sm:w-auto")}>
                  Enviar mensaje
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
