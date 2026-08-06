import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

type Props = {
  message?: string;
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "whatsapp";
  size?: "sm" | "md" | "lg";
  withIcon?: boolean;
  ariaLabel?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants = {
  primary:
    "bg-foreground text-background shadow-soft hover:bg-gold hover:text-gold-foreground",
  outline:
    "border border-gold/60 bg-transparent text-foreground hover:bg-secondary hover:border-gold",
  whatsapp:
    "bg-whatsapp text-whatsapp-foreground shadow-soft hover:brightness-110",
};

const sizes = {
  sm: "px-5 py-2.5 text-xs",
  md: "px-7 py-3.5 text-sm",
  lg: "px-8 py-4 text-sm sm:text-base",
};

export function WhatsAppButton({
  message,
  children = "Agendar pelo WhatsApp",
  className,
  variant = "whatsapp",
  size = "md",
  withIcon = true,
  ariaLabel,
}: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? (typeof children === "string" ? children : "Agendar pelo WhatsApp")}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {withIcon ? <MessageCircle className="size-4" aria-hidden="true" /> : null}
      {children}
    </a>
  );
}

export function AnchorButton({
  href,
  children,
  className,
  variant = "outline",
  size = "md",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}) {
  return (
    <a href={href} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </a>
  );
}
