import { Flower2, HandHeart, Home, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const items = [
  { icon: HandHeart, title: "Atendimento personalizado" },
  { icon: Sparkles, title: "Procedimentos realizados com cuidado" },
  { icon: Home, title: "Ambiente acolhedor" },
  { icon: Flower2, title: "Beleza e estética em um só lugar" },
];

export function TrustBar() {
  return (
    <section aria-label="Diferenciais" className="border-y border-border bg-background">
      <ul className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:py-12">
        {items.map(({ icon: Icon, title }, i) => (
          <Reveal as="li" key={title} delay={i * 80} className="flex items-center gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-full border border-gold/40 bg-sand">
              <Icon className="size-5 text-gold" aria-hidden="true" strokeWidth={1.5} />
            </span>
            <span className="text-sm font-medium leading-snug">{title}</span>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
