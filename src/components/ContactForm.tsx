import { useState } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Reveal, SectionTitle } from "@/components/Reveal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { whatsappLink } from "@/config/site";

const services = [
  "Unhas",
  "Cílios",
  "Pele e Estética",
  "Cabelo",
  "Depilação",
  "Maquiagem",
  "Outro",
];
const periods = ["Manhã", "Tarde", "Noite", "A combinar"];

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100, "Nome muito longo"),
  whatsapp: z
    .string()
    .trim()
    .min(10, "Informe um WhatsApp válido com DDD")
    .max(20, "Número muito longo"),
  servico: z.string().min(1, "Selecione um serviço"),
  periodo: z.string().min(1, "Selecione um período"),
  mensagem: z.string().trim().max(500, "Mensagem muito longa").optional(),
  consentimento: z.literal(true, {
    errorMap: () => ({ message: "É necessário concordar para continuar" }),
  }),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const parsed = schema.safeParse({
      nome: String(data.get("nome") ?? ""),
      whatsapp: String(data.get("whatsapp") ?? ""),
      servico: String(data.get("servico") ?? ""),
      periodo: String(data.get("periodo") ?? ""),
      mensagem: String(data.get("mensagem") ?? ""),
      consentimento: data.get("consentimento") === "on",
    });

    if (!parsed.success) {
      const next: Errors = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof Errors;
        if (key && !next[key]) next[key] = issue.message;
      });
      setErrors(next);
      setSuccess(false);
      return;
    }

    setErrors({});
    setSuccess(true);

    // TODO (futuro): salvar o contato no Lovable Cloud antes de redirecionar.
    const { nome, whatsapp, servico, periodo, mensagem } = parsed.data;
    const text = [
      `Olá! Meu nome é ${nome} e vim pelo site da Lika's Cia da Beleza.`,
      `Serviço de interesse: ${servico}`,
      `Melhor período: ${periodo}`,
      `WhatsApp: ${whatsapp}`,
      mensagem ? `Mensagem: ${mensagem}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  const fieldClass = "mt-2 h-12 rounded-xl border-border bg-background";

  return (
    <section id="contato" className="bg-sand py-20 lg:py-28">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Contato"
          title="Deixe seus dados e nós retornamos"
          subtitle="Preencha o formulário e continue a conversa pelo WhatsApp com os dados já preenchidos."
        />

        <Reveal delay={100} className="mt-12">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="nome">Nome</Label>
                <Input id="nome" name="nome" maxLength={100} className={fieldClass} autoComplete="name" />
                {errors.nome ? <p className="mt-1.5 text-xs text-destructive">{errors.nome}</p> : null}
              </div>
              <div>
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  inputMode="tel"
                  maxLength={20}
                  placeholder="(00) 00000-0000"
                  className={fieldClass}
                  autoComplete="tel"
                />
                {errors.whatsapp ? (
                  <p className="mt-1.5 text-xs text-destructive">{errors.whatsapp}</p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="servico">Serviço de interesse</Label>
                <select
                  id="servico"
                  name="servico"
                  defaultValue=""
                  className={`${fieldClass} w-full border px-3 text-sm`}
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {errors.servico ? (
                  <p className="mt-1.5 text-xs text-destructive">{errors.servico}</p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="periodo">Melhor período</Label>
                <select
                  id="periodo"
                  name="periodo"
                  defaultValue=""
                  className={`${fieldClass} w-full border px-3 text-sm`}
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  {periods.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                {errors.periodo ? (
                  <p className="mt-1.5 text-xs text-destructive">{errors.periodo}</p>
                ) : null}
              </div>
            </div>

            <div className="mt-6">
              <Label htmlFor="mensagem">Mensagem (opcional)</Label>
              <Textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                maxLength={500}
                className="mt-2 rounded-xl border-border bg-background"
              />
            </div>

            <div className="mt-6 flex items-start gap-3">
              <Checkbox id="consentimento" name="consentimento" className="mt-0.5" />
              <Label htmlFor="consentimento" className="text-xs leading-relaxed text-muted-foreground">
                Concordo em fornecer meus dados para receber contato sobre o meu atendimento.
              </Label>
            </div>
            {errors.consentimento ? (
              <p className="mt-1.5 text-xs text-destructive">{errors.consentimento}</p>
            ) : null}

            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-whatsapp px-8 py-4 text-sm font-medium text-whatsapp-foreground shadow-soft transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Enviar e continuar no WhatsApp
            </button>

            {success ? (
              <p
                role="status"
                className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-3 text-sm"
              >
                <CheckCircle2 className="size-4 text-gold" aria-hidden="true" />
                Recebemos suas informações! Estamos abrindo o WhatsApp para continuar.
              </p>
            ) : null}

            <p className="mt-4 text-center text-[0.7rem] text-muted-foreground">
              Não solicitamos dados sensíveis ou informações de saúde por este formulário.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
