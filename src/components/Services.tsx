import { Brush, Eye, Flower, Scissors, Sparkles, Waves } from "lucide-react";
import unhas from "@/assets/unhas.jpg";
import cilios from "@/assets/cilios.jpg";
import pele from "@/assets/pele.jpg";
import cabelo from "@/assets/cabelo.jpg";
import depilacao from "@/assets/depilacao.jpg";
import maquiagem from "@/assets/maquiagem.jpg";
import { Reveal, SectionTitle } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const services = [
  {
    id: "unhas",
    icon: Sparkles,
    image: unhas,
    alt: "Mãos com unhas alongadas e esmaltação em tom nude sobre mármore branco",
    title: "Unhas",
    description:
      "Cuidados, alongamentos e acabamentos pensados para deixar suas unhas bonitas, elegantes e bem cuidadas.",
    items: [
      "Alongamento de unhas",
      "Esmaltação",
      "Nail design",
      "Manutenção",
      "Cuidados com unhas naturais",
    ],
    message:
      "Olá! Encontrei o site da Lika's Cia da Beleza e gostaria de saber mais sobre os serviços de unhas.",
  },
  {
    id: "cilios",
    icon: Eye,
    image: cilios,
    alt: "Detalhe de olhar feminino com extensão de cílios volume",
    title: "Cílios",
    description:
      "Procedimentos que valorizam o olhar respeitando o estilo e as características de cada cliente.",
    items: ["Extensão de cílios", "Volume", "Manutenção", "Design personalizado"],
    message:
      "Olá! Encontrei o site da Lika's Cia da Beleza e gostaria de saber mais sobre o serviço de extensão de cílios.",
  },
  {
    id: "pele",
    icon: Flower,
    image: pele,
    alt: "Maca de atendimento estético com toalhas brancas, séruns e orquídeas",
    title: "Pele e Estética",
    description:
      "Tratamentos realizados após avaliação profissional, considerando as necessidades e os objetivos de cada cliente.",
    items: [
      "Tratamentos para rejuvenescimento",
      "Estímulo de colágeno",
      "Bioestimuladores",
      "Laser de CO₂",
      "Carboxiterapia",
      "Cuidados corporais",
      "Procedimentos estéticos personalizados",
    ],
    note: "Os procedimentos disponíveis e suas indicações dependem de avaliação profissional.",
    message:
      "Olá! Encontrei o site da Lika's Cia da Beleza e gostaria de saber mais sobre os tratamentos para pele e estética.",
  },
  {
    id: "cabelo",
    icon: Scissors,
    image: cabelo,
    alt: "Cabelos longos e brilhantes sendo escovados em salão de beleza",
    title: "Cabelo",
    description: "Cuidados para renovar, tratar e valorizar seus cabelos.",
    items: ["Tratamentos capilares", "Finalização", "Cuidados personalizados"],
    message:
      "Olá! Encontrei o site da Lika's Cia da Beleza e gostaria de saber mais sobre os serviços de cabelo.",
  },
  {
    id: "depilacao",
    icon: Waves,
    image: depilacao,
    alt: "Materiais de depilação organizados com toalhas brancas em ambiente clean",
    title: "Depilação",
    description:
      "Procedimentos de depilação realizados com cuidado, conforto e atenção.",
    items: ["Depilação facial", "Depilação corporal", "Cuidados pós-procedimento"],
    message:
      "Olá! Encontrei o site da Lika's Cia da Beleza e gostaria de saber mais sobre os serviços de depilação.",
  },
  {
    id: "maquiagem",
    icon: Brush,
    image: maquiagem,
    alt: "Pincéis e paleta de maquiagem em tons nude sobre mármore",
    title: "Maquiagem",
    description:
      "Produções personalizadas para eventos, comemorações e momentos especiais.",
    items: ["Maquiagem social", "Produções para eventos", "Maquiagem personalizada"],
    message:
      "Olá! Encontrei o site da Lika's Cia da Beleza e gostaria de saber mais sobre os serviços de maquiagem.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-sand py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Serviços"
          title="Cuidados pensados para você"
          subtitle="Encontre diferentes serviços de beleza e estética em um único espaço."
        />

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="article" key={service.id} delay={(i % 3) * 100}>
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    width={900}
                    height={900}
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute bottom-4 left-4 grid size-11 place-items-center rounded-full bg-background/95 shadow-soft">
                    <service.icon className="size-5 text-gold" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-2xl">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-secondary px-3 py-1.5 text-[0.7rem] text-secondary-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  {service.note ? (
                    <p className="mt-5 border-l-2 border-gold/60 pl-3 text-xs italic leading-relaxed text-muted-foreground">
                      {service.note}
                    </p>
                  ) : null}
                  <div className="mt-auto pt-7">
                    <WhatsAppButton
                      variant="outline"
                      size="sm"
                      withIcon={false}
                      className="w-full"
                      message={service.message}
                      ariaLabel={`Quero saber mais sobre ${service.title}`}
                    >
                      Quero saber mais
                    </WhatsAppButton>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
