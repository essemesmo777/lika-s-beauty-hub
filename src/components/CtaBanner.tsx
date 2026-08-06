import { Instagram } from "lucide-react";
import ambiente from "@/assets/ambiente.jpg";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/config/site";

export function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={ambiente}
        alt="Interior elegante do espaço de beleza da Lika's Cia da Beleza"
        loading="lazy"
        width={1600}
        height={1008}
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <span aria-hidden="true" className="absolute inset-0 -z-10 bg-foreground/55" />
      <div className="mx-auto w-full max-w-3xl px-5 py-24 text-center sm:px-8 lg:py-32">
        <Reveal>
          <h2 className="text-3xl leading-tight text-background sm:text-4xl lg:text-5xl">
            Seu momento de cuidado começa aqui.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-background/85">
            Fale com a nossa equipe, consulte os horários disponíveis e encontre o atendimento
            ideal para você.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton size="lg">Agendar pelo WhatsApp</WhatsAppButton>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-background/70 px-8 py-4 text-sm font-medium text-background transition-colors hover:bg-background hover:text-foreground"
            >
              <Instagram className="size-4" aria-hidden="true" />
              Ver Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
