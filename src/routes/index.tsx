import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { BeforeAfter } from "@/components/BeforeAfter";
import { About } from "@/components/About";
import { Qualifications } from "@/components/Qualifications";
import { BookingSteps } from "@/components/BookingSteps";
import { Testimonials } from "@/components/Testimonials";
import { CtaBanner } from "@/components/CtaBanner";
import { ContactForm } from "@/components/ContactForm";
import { Location } from "@/components/Location";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { site } from "@/config/site";

const title = "Lika's Cia da Beleza | Unhas, Cílios, Pele e Estética";
const description =
  "Conheça os serviços da Lika's Cia da Beleza. Tratamentos para unhas, cílios, pele, cabelo, depilação, maquiagem e estética. Agende seu horário pelo WhatsApp.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: site.url },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: site.url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: site.name,
          url: site.url,
          description,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua do Comércio, 4273",
            addressLocality: "Parque Eldorado",
            addressCountry: "BR",
          },
          sameAs: [site.instagramUrl],
          makesOffer: [
            "Unhas",
            "Cílios",
            "Tratamentos para pele",
            "Cabelo",
            "Depilação",
            "Maquiagem",
            "Procedimentos estéticos",
          ].map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Gallery />
        <BeforeAfter />
        <About />
        <Qualifications />
        <BookingSteps />
        <Testimonials />
        <CtaBanner />
        <ContactForm />
        <Location />
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
