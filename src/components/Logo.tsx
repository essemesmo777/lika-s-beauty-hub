import { cn } from "@/lib/utils";

/** Marca tipográfica da Lika's Cia da Beleza (editável). */
export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <span className={cn("flex flex-col leading-none", className)}>
      <span
        className={cn(
          "font-display text-2xl tracking-tight sm:text-[1.7rem]",
          inverted ? "text-background" : "text-foreground",
        )}
      >
        Lika&apos;s
      </span>
      <span
        className={cn(
          "mt-1 text-[0.6rem] font-medium uppercase tracking-[0.34em]",
          inverted ? "text-primary" : "text-gold",
        )}
      >
        cia da beleza
      </span>
    </span>
  );
}
