import ambiente from "@/assets/ambiente.jpg";
import pele from "@/assets/pele.jpg";
import cilios from "@/assets/cilios.jpg";
import unhas from "@/assets/unhas.jpg";
import { Reveal, SectionTitle } from "@/components/Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/** Placeholders editáveis — substituir pelos cursos e especializações reais. */
const items = [
  {
    image: pele,
    alt: "Registro de curso de estética avançada (imagem editável)",
    title: "[Nome da especialização]",
    institution: "[Instituição]",
    year: "[Ano de conclusão]",
    description: "[Pequena descrição do curso, evento ou mentoria]",
  },
  {
    image: cilios,
    alt: "Registro de curso de extensão de cílios (imagem editável)",
    title: "[Nome da especialização]",
    institution: "[Instituição]",
    year: "[Ano de conclusão]",
    description: "[Pequena descrição do curso, evento ou mentoria]",
  },
  {
    image: unhas,
    alt: "Registro de curso de alongamento de unhas (imagem editável)",
    title: "[Nome da especialização]",
    institution: "[Instituição]",
    year: "[Ano de conclusão]",
    description: "[Pequena descrição do curso, evento ou mentoria]",
  },
  {
    image: ambiente,
    alt: "Registro de evento profissional (imagem editável)",
    title: "[Nome do evento]",
    institution: "[Instituição]",
    year: "[Ano]",
    description: "[Pequena descrição do curso, evento ou mentoria]",
  },
];

export function Qualifications() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Autoridade"
          title="Conhecimento que se transforma em cuidado"
          subtitle="Cursos, especializações, mentorias e eventos que fazem parte da trajetória profissional da Lika's Cia da Beleza."
        />

        <Reveal delay={100} className="mt-12">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent className="-ml-4">
              {items.map((item, i) => (
                <CarouselItem key={i} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                  <article className="h-full overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{item.institution}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold">
                        {item.year}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </article>
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
