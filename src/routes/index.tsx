import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/brand/AppShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALTUSevolv — gestão estruturada de coaching e mentoria" },
      {
        name: "description",
        content:
          "ALTUSevolv centraliza clientes, programas, sessões, tarefas e progresso para coaches e mentores. Fase 0: fundação técnica e documentação.",
      },
    ],
  }),
  component: Index,
});

const WORKFLOW = [
  "Profissional cria a conta e sua organização",
  "Cadastra ou convida um cliente",
  "Cria um programa de coaching/mentoria",
  "Registra a sessão com link de vídeo manual, se necessário",
  "Atribui tarefas e ações com prazo",
  "Cliente conclui tarefas, faz check-in e registra reflexão",
  "Profissional acompanha progresso e histórico reais",
  "Dados isolados de qualquer outra organização",
];

const FOUNDATION = [
  {
    title: "Repositório único",
    body: "App web, migrações, infraestrutura, CI e documentação no mesmo repositório: ALTUSevolv/altusevolv.",
  },
  {
    title: "Backend gerenciado primeiro",
    body: "PostgreSQL, autenticação e RLS gerenciados. Sem self-host e sem API separada até que métricas justifiquem.",
  },
  {
    title: "Multi-tenant desde o início",
    body: "Organização, associações e vínculo explícito profissional-cliente. Autorização no banco, nunca confiada ao cliente.",
  },
  {
    title: "Custo antes de recurso",
    body: "Custos separados por ambiente e por uso, com alvo futuro de runtime web em Hetzner sem self-hosting prematuro do banco.",
  },
];

const OUT_OF_SCOPE = [
  "Assistente de IA e resumos automáticos",
  "Relatórios PDF automáticos",
  "Automação de WhatsApp",
  "Integrações de vídeo e OAuth de calendário",
  "Grupos e turmas",
  "Aplicativo mobile e notificações push",
  "Cobrança automatizada antes da validação do piloto",
];

function Index() {
  return (
    <AppShell>
      <section className="border-b border-border surface-navy">
        <div className="mx-auto w-full max-w-6xl px-4 py-16">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase">
            Fase 0 · Fundação
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Eleve o coaching. Evolva o resultado.
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            ALTUSevolv é um SaaS para gestão estruturada de coaching e mentoria individual. Esta
            entrega representa a fundação técnica e documental. Nenhuma funcionalidade de negócio da
            Fase 1 é apresentada como pronta.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/roadmap"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
            >
              Ver roadmap e gates
            </Link>
            <a
              href="https://github.com/ALTUSevolv/altusevolv"
              className="inline-flex items-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-accent"
            >
              Repositório e documentação
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14">
        <h2 className="text-xl font-semibold tracking-tight text-navy">
          O fluxo que o MVP precisa provar
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Um único fluxo real completo vale mais que muitos recursos parciais.
        </p>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2">
          {WORKFLOW.map((step, i) => (
            <li
              key={step}
              className="flex gap-3 rounded-lg border border-border bg-card p-4 text-sm"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md surface-evolv text-xs font-semibold text-primary">
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-border surface-evolv">
        <div className="mx-auto w-full max-w-6xl px-4 py-14">
          <h2 className="text-xl font-semibold tracking-tight text-navy">Princípios da fundação</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {FOUNDATION.map((item) => (
              <article key={item.title} className="rounded-lg bg-card p-5">
                <h3 className="font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-navy">
              Fora do escopo do MVP
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {OUT_OF_SCOPE.map((item) => (
                <li key={item} className="flex gap-2 text-muted-foreground">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-border" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <h2 className="text-base font-semibold text-navy">Status honesto de implementação</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Cada funcionalidade usa um único status: proposed, designed, frontend-only,
              backend-partial, integrated, tested, production-ready ou blocked.
            </p>
            <p className="mt-4 rounded-md border-l-2 border-gold surface-navy p-3 text-sm text-muted-foreground">
              O score 0–100 é uma hipótese experimental v0, documentada e não validada.
            </p>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
