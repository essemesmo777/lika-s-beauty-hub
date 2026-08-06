import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

export function FloatingWhatsApp() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
        className={cn(
          "grid size-10 place-items-center rounded-full border border-border bg-background/90 text-foreground shadow-soft backdrop-blur transition-all duration-300",
          showTop ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0",
        )}
      >
        <ArrowUp className="size-4" aria-hidden="true" />
      </button>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agende pelo WhatsApp"
        className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-4 text-sm font-medium text-whatsapp-foreground shadow-soft transition-transform duration-300 hover:scale-[1.04] sm:px-6"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        <span className="hidden sm:inline">Agende pelo WhatsApp</span>
      </a>
    </div>
  );
}
