import { Reveal, SectionTitle } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { site } from "@/config/site";

/** Respostas editáveis — completar com as regras reais da empresa. */
const faq = [
  {
    q: "Como posso agendar meu horário?",
    a: "O agendamento é feito pelo WhatsApp. Basta clicar em qualquer botão de agendamento do site, informar o serviço desejado e escolher o melhor horário conforme a disponibilidade.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "[Informar as formas de pagamento aceitas pela Lika's Cia da Beleza.] Você também pode consultar essa informação diretamente pelo WhatsApp.",
  },
  {
    q: "É necessário fazer uma avaliação antes do procedimento?",
    a: "Alguns procedimentos estéticos exigem avaliação profissional prévia para definir a indicação mais adequada. Ao entrar em contato, orientamos você sobre a necessidade da avaliação no seu caso.",
  },
  {
    q: "Como posso consultar os valores?",
    a: "Os valores variam conforme o serviço, a técnica e as necessidades de cada cliente. Envie uma mensagem pelo WhatsApp informando o procedimento desejado para receber as informações atualizadas.",
  },
  {
    q: "Existe política para cancelamento ou reagendamento?",
    a: "[Descrever aqui a política de cancelamento e reagendamento da empresa.]",
  },
  {
    q: "Onde a Lika's Cia da Beleza está localizada?",
    a: `Estamos em ${site.address}. Você pode abrir a rota diretamente pelo botão do Google Maps na seção de localização.`,
  },
  {
    q: "Como saber qual procedimento é mais indicado para mim?",
    a: "A indicação depende das suas características, expectativas e da avaliação profissional. Podemos conversar pelo WhatsApp e, se necessário, agendar uma avaliação presencial.",
  },
  {
    q: "Posso enviar uma foto pelo WhatsApp antes do atendimento?",
    a: "Sim. Enviar uma referência ou foto ajuda a entender melhor o que você deseja, mas a definição final do procedimento acontece no atendimento.",
  },
];

export function Faq() {
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" />

        <Reveal delay={100} className="mt-12">
          <Accordion type="single" collapsible className="space-y-3">
            {faq.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-border bg-card px-5"
              >
                <AccordionTrigger className="text-left font-sans text-sm font-medium hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
