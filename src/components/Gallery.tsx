import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import unhas from "@/assets/unhas.jpg";
import cilios from "@/assets/cilios.jpg";
import pele from "@/assets/pele.jpg";
import cabelo from "@/assets/cabelo.jpg";
import depilacao from "@/assets/depilacao.jpg";
import maquiagem from "@/assets/maquiagem.jpg";
import ambiente from "@/assets/ambiente.jpg";
import sobreLikaAsset from "@/assets/sobre-lika.png.asset.json";
import hero from "@/assets/hero.jpg";
import { Reveal, SectionTitle } from "@/components/Reveal";
import { cn } from "@/lib/utils";

/** Substitua estas imagens pelas fotos reais dos trabalhos da Lika's. */
const photos = [
  { src: unhas, category: "Unhas", alt: "Unhas com esmaltação nude e acabamento brilhante" },
  { src: cilios, category: "Cílios", alt: "Olhar com extensão de cílios volume" },
  { src: pele, category: "Pele", alt: "Sala de tratamentos para pele" },
  { src: ambiente, category: "Ambiente", alt: "Ambiente do espaço de beleza com poltronas rosé e dourado" },
  { src: maquiagem, category: "Estética", alt: "Produtos de maquiagem em tons nude" },
  { src: cabelo, category: "Bastidores", alt: "Atendimento de cabelo em andamento" },
  { src: depilacao, category: "Estética", alt: "Materiais preparados para depilação" },
  { src: sobreLikaAsset.url, category: "Bastidores", alt: "Profissional responsável pelo espaço de beleza" },
  { src: hero, category: "Ambiente", alt: "Recepção com flores e detalhes dourados" },
];

const filters = ["Todos", "Unhas", "Cílios", "Pele", "Estética", "Bastidores", "Ambiente"];

export function Gallery() {
  const [filter, setFilter] = useState("Todos");
  const [index, setIndex] = useState<number | null>(null);

  const visible = photos.filter((p) => filter === "Todos" || p.category === filter);
  const current = index === null ? undefined : visible[index];

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % visible.length)),
    [visible.length],
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + visible.length) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, next, prev]);

  return (
    <section id="resultados" className="bg-background py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Resultados"
          title="Resultados que refletem cuidado e dedicação"
          subtitle="Conheça alguns dos trabalhos e momentos da Lika's Cia da Beleza."
        />

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2.5">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => {
                setFilter(f);
                setIndex(null);
              }}
              aria-pressed={filter === f}
              className={cn(
                "rounded-full border px-5 py-2 text-xs font-medium tracking-wide transition-colors",
                filter === f
                  ? "border-gold bg-foreground text-background"
                  : "border-border bg-background text-muted-foreground hover:border-gold hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid auto-rows-[13rem] grid-cols-2 gap-3.5 sm:auto-rows-[15rem] lg:grid-cols-4">
          {visible.map((photo, i) => (
            <button
              key={`${photo.category}-${i}`}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ampliar imagem: ${photo.alt}`}
              className={cn(
                "group relative overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                i % 5 === 0 && "lg:row-span-2 lg:col-span-2",
              )}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
              />
              <span className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/35" />
              <span className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-left text-xs font-medium uppercase tracking-[0.2em] text-background opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {photo.category}
              </span>
            </button>
          ))}
        </div>
      </div>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visualização de imagem"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[82vh] w-auto max-w-full rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={close}
            aria-label="Fechar imagem"
            className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-background/90 text-foreground"
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Imagem anterior"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 grid size-11 place-items-center rounded-full bg-background/90 text-foreground sm:left-8"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Próxima imagem"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 grid size-11 place-items-center rounded-full bg-background/90 text-foreground sm:right-8"
          >
            <ChevronRight className="size-5" />
          </button>
          <p className="absolute bottom-6 left-0 right-0 text-center text-xs uppercase tracking-[0.25em] text-background">
            {current.category}
          </p>
        </div>
      ) : null}
    </section>
  );
}
