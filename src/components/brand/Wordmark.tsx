import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  tone = "navy",
}: {
  className?: string;
  tone?: "navy" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline text-lg font-bold tracking-tight",
        tone === "navy" ? "text-navy" : "text-navy-foreground",
        className,
      )}
    >
      <span>ALTUS</span>
      <span className={tone === "navy" ? "text-primary" : "text-mint"}>evolv</span>
    </span>
  );
}
