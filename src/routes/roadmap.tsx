import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/brand/AppShell";
import { PHASES, type Phase } from "@/lib/roadmap";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Roadmap por fases e gates | ALTUSevolv" },
      {
        name: "description",
        content:
          "Fases de entrega do ALTUSevolv com datas-alvo de planejamento, entregáveis e gates de saída.",
      },
    ],
  }),
  component: RoadmapPage,
});

function PhaseCard({ phase }: { phase: Phase }) {
  return (
    <article className="rounded-lg border border-border bg-card p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-base font-semibold text-navy">{phase.name}</h2>
        <span className="rounded-md surface-evolv px-2 py-0.5 text-xs font-medium text-primary">
          {phase.window}
        </span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{phase.goal}</p>
      <ul className="mt-4 space-y-1.5 text-sm">
        {phase.deliverables.map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-mint" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 border-t border-border pt-3 text-sm">
        <span className="font-medium text-navy">Gate de saída: </span>
        <span className="text-muted-foreground">{phase.exitGate}</span>
      </p>
    </article>
  );
}

function RoadmapPage() {
  return (
    <AppShell>
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <h1 className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
          Roadmap por fases e gates
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Datas são alvos de planejamento com base em 19 ago 2026, não promessas. Uma fase só avança
          quando o gate de saída é cumprido com evidência real.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {PHASES.map((phase) => (
            <PhaseCard key={phase.name} phase={phase} />
          ))}
        </div>
      </div>
    </AppShell>
  );
}
