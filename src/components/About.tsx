import { BookOpen, Heart, Home, Sparkles, UserRound } from "lucide-react";
import sobreAsset from "@/assets/sobre-lika.png.asset.json";
import { Reveal } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const highlights = [
  { icon: BookOpen, label: "Atualização profissional constante" },
  { icon: UserRound, label: "Atendimento individualizado" },
  { icon: Sparkles, label: "Técnicas e procedimentos modernos" },
  { icon: Heart, label: "Atenção aos detalhes" },
  { icon: Home, label: "Ambiente acolhedor" },
];

export function About() {
  return (
    <section id="sobre" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] rounded-bl-[6rem] shadow-card">
              <img
                src={sobreAsset.url}
                alt="Profissional responsável pela Lika's Cia da Beleza no espaço de atendimento"
                loading="lazy"
                width={1456}
                height={1092}
                className="h-[26rem] w-full object-cover sm:h-[34rem]"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute -left-4 -top-4 -z-10 size-32 rounded-full bg-blush"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">Sobre</p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
            Beleza, conhecimento e cuidado em cada atendimento
          </h2>
          <span className="gold-rule mt-6" aria-hidden="true" />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              A Lika&apos;s Cia da Beleza nasceu com o propósito de oferecer serviços de beleza e
              estética em um ambiente acolhedor, profissional e dedicado ao bem-estar de cada
              cliente.
            </p>
            <p>
              Além dos atendimentos, a busca constante por atualização, cursos, especializações e
              novas técnicas faz parte da essência da empresa. Cada procedimento é realizado com
              atenção, responsabilidade e respeito às necessidades individuais.
            </p>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 rounded-2xl bg-sand px-4 py-3">
                <Icon className="size-4 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
                <span className="text-sm">{label}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs italic text-muted-foreground">
            [Espaço editável para formações, certificações e especializações da profissional]
          </p>
          <WhatsAppButton
            className="mt-8"
            size="lg"
            message="Olá! Conheci a Lika's Cia da Beleza pelo site e gostaria de conversar sobre um atendimento."
          >
            Falar com a equipe
          </WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}
