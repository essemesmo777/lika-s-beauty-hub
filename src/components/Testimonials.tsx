import { Star } from "lucide-react";
import { Reveal, SectionTitle } from "@/components/Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/**
 * PLACEHOLDER: textos demonstrativos.
 * Substituir pelas avaliações reais das clientes antes de publicar.
 */
const testimonials = [
  {
    name: "[Nome da cliente]",
    service: "[Serviço realizado]",
    stars: 5,
    text: "[Texto demonstrativo de avaliação — substituir por um depoimento real da cliente.]",
  },
  {
    name: "[Nome da cliente]",
    service: "[Serviço realizado]",
    stars: 5,
    text: "[Texto demonstrativo de avaliação — substituir por um depoimento real da cliente.]",
  },
  {
    name: "[Nome da cliente]",
    service: "[Serviço realizado]",
    stars: 5,
    text: "[Texto demonstrativo de avaliação — substituir por um depoimento real da cliente.]",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-background py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Depoimentos"
          title="O carinho de quem já passou por aqui"
          subtitle="Espaço reservado para as avaliações reais das clientes."
        />

        <Reveal delay={100} className="mt-12">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-4">
              {testimonials.map((item, i) => (
                <CarouselItem key={i} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                  <figure className="flex h-full flex-col rounded-3xl border border-border bg-sand p-8">
                    <div className="flex gap-1" aria-label={`${item.stars} de 5 estrelas`}>
                      {Array.from({ length: item.stars }).map((_, s) => (
                        <Star key={s} className="size-4 fill-gold text-gold" aria-hidden="true" />
                      ))}
                    </div>
                    <blockquote className="mt-5 flex-1 text-base leading-relaxed text-muted-foreground">
                      {item.text}
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                      <span className="grid size-11 place-items-center rounded-full bg-blush font-display text-lg">
                        ★
                      </span>
                      <span>
                        <span className="block text-sm font-medium">{item.name}</span>
                        <span className="block text-xs text-muted-foreground">{item.service}</span>
                      </span>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-3">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
