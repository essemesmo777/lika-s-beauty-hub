import { Instagram, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "@/components/Logo";
import { mapsUrl, navLinks, site, whatsappLink } from "@/config/site";

const services = ["Unhas", "Cílios", "Pele e Estética", "Cabelo", "Depilação", "Maquiagem"];

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo inverted />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Serviços de beleza e estética em um ambiente acolhedor, com atendimento
            personalizado e atenção aos detalhes.
          </p>
        </div>

        <nav aria-label="Links rápidos">
          <h2 className="text-sm uppercase tracking-[0.22em] text-primary">Links rápidos</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-background">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm uppercase tracking-[0.22em] text-primary">Serviços</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s}>
                <a href="#servicos" className="transition-colors hover:text-background">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm uppercase tracking-[0.22em] text-primary">Contato</h2>
          <ul className="mt-5 space-y-3.5 text-sm">
            <li className="flex gap-3">
              <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-background">
                {site.address}
              </a>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-background"
              >
                WhatsApp {site.phoneLabel}
              </a>
            </li>
            <li className="flex gap-3">
              <Instagram className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-background"
              >
                {site.instagramUser}
              </a>
            </li>
          </ul>
          <ul className="mt-6 space-y-2 text-xs">
            <li>
              <a href="#contato" className="underline decoration-primary/60 underline-offset-4">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="#contato" className="underline decoration-primary/60 underline-offset-4">
                Termos de Uso
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Lika&apos;s Cia da Beleza. Todos os direitos reservados.</p>
          <p className="text-background/60">
            Site desenvolvido por{" "}
            <a
              href={site.agencyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4"
            >
              {site.agencyName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
