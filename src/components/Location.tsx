import { Clock, Instagram, MapPin, Navigation, Phone } from "lucide-react";
import { Reveal, SectionTitle } from "@/components/Reveal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { mapEmbedUrl, mapsUrl, site } from "@/config/site";

export function Location() {
  return (
    <section id="localizacao" className="bg-background py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Localização"
          title="Onde nos encontrar"
          subtitle="Estamos prontas para receber você em um ambiente acolhedor e preparado."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title="Mapa da localização da Lika's Cia da Beleza"
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[22rem] w-full border-0 lg:h-full lg:min-h-[26rem]"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="space-y-5">
              <li className="flex gap-4 rounded-2xl bg-sand p-5">
                <MapPin className="size-5 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium">Endereço</p>
                  <p className="mt-1 text-sm text-muted-foreground">{site.address}</p>
                </div>
              </li>
              <li className="flex gap-4 rounded-2xl bg-sand p-5">
                <Clock className="size-5 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium">Horários de funcionamento</p>
                  <p className="mt-1 text-sm text-muted-foreground">{site.hours}</p>
                </div>
              </li>
              <li className="flex gap-4 rounded-2xl bg-sand p-5">
                <Phone className="size-5 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium">Telefone / WhatsApp</p>
                  <p className="mt-1 text-sm text-muted-foreground">{site.phoneLabel}</p>
                </div>
              </li>
              <li className="flex gap-4 rounded-2xl bg-sand p-5">
                <Instagram className="size-5 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium">Instagram</p>
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm text-muted-foreground underline decoration-gold/60 underline-offset-4 hover:text-foreground"
                  >
                    {site.instagramUser}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton size="lg" className="sm:flex-1">
                Agendar pelo WhatsApp
              </WhatsAppButton>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 px-8 py-4 text-sm font-medium transition-colors hover:bg-secondary sm:flex-1"
              >
                <Navigation className="size-4" aria-hidden="true" />
                Abrir rota no Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
