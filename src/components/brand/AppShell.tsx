import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Wordmark } from "./Wordmark";

const NAV = [
  { to: "/", label: "Visão geral" },
  { to: "/roadmap", label: "Roadmap" },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-20 border-b border-border bg-navy text-navy-foreground">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-6 px-4">
          <Link to="/" className="rounded-md" aria-label="ALTUSevolv — início">
            <Wordmark tone="light" />
          </Link>
          <nav aria-label="Navegação principal" className="flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-1.5 text-sm font-medium text-navy-foreground/80 transition-colors hover:bg-white/10 hover:text-navy-foreground"
                activeProps={{ className: "bg-white/12 text-navy-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border surface-navy">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            <Wordmark className="text-base" /> — Eleve o coaching. Evolva o resultado.
          </p>
          <p>Fase 0 · Fundação e documentação · repositório único</p>
        </div>
      </footer>
    </div>
  );
}
