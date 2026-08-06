import { Reveal, SectionTitle } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const steps = [
  {
    number: "01",
    title: "Escolha seu serviço",
    text: "Conheça as opções e selecione o atendimento que mais combina com você.",
  },
  {
    number: "02",
    title: "Fale pelo WhatsApp",
    text: "Envie uma mensagem para consultar horários, valores e disponibilidade.",
  },
  {
    number: "03",
    title: "Confirme seu horário",
    text:
      "Após a confirmação, você receberá todas as orientações necessárias para o atendimento.",
  },
];

export function BookingSteps() {
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionTitle eyebrow="Agendamento" title="Como funciona o agendamento" />

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 120}>
              <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-soft">
                <span className="font-display text-4xl text-gold">{step.number}</span>
                <h3 className="mt-5 text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-12 text-center">
          <WhatsAppButton
            size="lg"
            message="Olá! Gostaria de consultar os horários disponíveis na Lika's Cia da Beleza."
          >
            Consultar horários disponíveis
          </WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}
