import { Heart, Sparkles, Star } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { AnchorButton, WhatsAppButton } from "@/components/WhatsAppButton";
import { Reveal } from "@/components/Reveal";
import { site } from "@/config/site";

const trust = [
  { icon: Heart, label: "Atendimento personalizado" },
  { icon: Star, label: "Profissionais qualificadas" },
  { icon: Sparkles, label: "Diversos tratamentos em um só lugar" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-sand pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 size-[28rem] rounded-full bg-blush/60 blur-3xl"
      />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-1">
          <p className="eyebrow">{site.tagline}</p>
          <h1 className="mt-5 text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
            Realce sua beleza com cuidado, técnica e elegância.
          </h1>
          <span className="gold-rule mt-7" aria-hidden="true" />
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tratamentos personalizados para unhas, cílios, pele, cabelo e beleza, realizados
            com atenção aos detalhes e foco em valorizar o que você tem de melhor.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton size="lg" message="Olá! Encontrei o site da Lika's Cia da Beleza e gostaria de agendar um horário.">
              Agendar meu horário
            </WhatsAppButton>
            <AnchorButton href="#servicos" size="lg">
              Conhecer os serviços
            </AnchorButton>
          </div>
          <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
            {trust.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Icon className="size-4 text-gold" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="order-2">
          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] rounded-tr-[6rem] shadow-card">
              <img
                src={heroImg}
                width={1200}
                height={1504}
                alt="Recepção elegante da Lika's Cia da Beleza com decoração em tons de rosa e detalhes dourados"
                className="h-[26rem] w-full object-cover sm:h-[32rem] lg:h-[38rem]"
              />
            </div>
            <div className="absolute -bottom-6 left-4 hidden rounded-2xl border border-border bg-background/95 px-6 py-4 shadow-soft backdrop-blur sm:block">
              <p className="font-display text-lg">Ambiente acolhedor</p>
              <p className="text-xs text-muted-foreground">{site.address}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
