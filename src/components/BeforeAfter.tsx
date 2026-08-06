import { useState } from "react";
import { MoveHorizontal } from "lucide-react";
import antes from "@/assets/pele.jpg";
import depois from "@/assets/unhas.jpg";
import { Reveal, SectionTitle } from "@/components/Reveal";

/** Substitua pelas fotos reais de antes e depois. */
const pair = {
  before: { src: antes, alt: "Registro do antes do procedimento (imagem editável)" },
  after: { src: depois, alt: "Registro do depois do procedimento (imagem editável)" },
};

export function BeforeAfter() {
  const [value, setValue] = useState(50);

  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <SectionTitle eyebrow="Antes e depois" title="Veja a transformação" />

        <Reveal delay={100} className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-card">
            <img
              src={pair.after.src}
              alt={pair.after.alt}
              loading="lazy"
              className="h-[22rem] w-full object-cover sm:h-[30rem]"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${value}%` }}
              aria-hidden="true"
            >
              <img
                src={pair.before.src}
                alt=""
                loading="lazy"
                className="h-[22rem] w-full object-cover sm:h-[30rem]"
                style={{ width: `${100 / (value / 100)}%`, maxWidth: "none" }}
              />
            </div>
            <span
              className="pointer-events-none absolute inset-y-0 w-px bg-background/90"
              style={{ left: `${value}%` }}
              aria-hidden="true"
            />
            <span
              className="pointer-events-none absolute top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-background text-foreground shadow-soft"
              style={{ left: `${value}%` }}
              aria-hidden="true"
            >
              <MoveHorizontal className="size-4" />
            </span>
            <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em]">
              Antes
            </span>
            <span className="absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em]">
              Depois
            </span>
            <label className="sr-only" htmlFor="comparador">
              Comparar antes e depois
            </label>
            <input
              id="comparador"
              type="range"
              min={0}
              max={100}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="absolute inset-0 size-full cursor-ew-resize opacity-0"
            />
          </div>
          <p className="mt-6 text-center text-sm leading-relaxed text-muted-foreground">
            Cada pessoa possui características e necessidades diferentes. Os resultados podem
            variar e os procedimentos devem ser definidos após avaliação profissional.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
