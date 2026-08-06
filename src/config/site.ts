/**
 * Conteúdo editável do site — altere aqui os dados da empresa.
 * Os campos entre [ ] são placeholders e devem ser substituídos
 * pelas informações reais quando estiverem disponíveis.
 */
export const site = {
  name: "Lika's Cia da Beleza",
  tagline: "Unhas | Cílios | Pele | Cabelo",
  instagramUser: "@likasciadabeleza",
  instagramUrl: "https://www.instagram.com/likasciadabeleza/",
  address: "Rua do Comércio, 4273 – Parque Eldorado",
  // TODO: substituir pelo número real no formato internacional (ex.: 5551999999999)
  whatsappNumber: "", // [INSERIR NÚMERO DO WHATSAPP]
  phoneLabel: "[INSERIR NÚMERO DO WHATSAPP]",
  hours: "[INSERIR HORÁRIO DE FUNCIONAMENTO]",
  agencyName: "Rankbrum.AI",
  agencyUrl: "https://rankbrum.ai",
} as const;

const defaultMessage =
  "Olá! Conheci a Lika's Cia da Beleza pelo site e gostaria de consultar os serviços e horários disponíveis.";

/** Monta o link do WhatsApp com mensagem automática. */
export function whatsappLink(message: string = defaultMessage) {
  const text = encodeURIComponent(message);
  return site.whatsappNumber
    ? `https://wa.me/${site.whatsappNumber}?text=${text}`
    : `https://wa.me/?text=${text}`;
}

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address,
)}`;

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  site.address,
)}&output=embed`;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];
