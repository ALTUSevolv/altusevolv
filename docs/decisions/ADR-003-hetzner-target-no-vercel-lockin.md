# ADR-003 — Hetzner como alvo de runtime, sem lock-in de Vercel

- Status: proposed-for-approval
- Data: 2026-08-20

## Contexto

O produto pode precisar de runtime persistente, workers e custo previsível sem depender de
convenções serverless específicas.

## Decisão

Não adotar arquitetura dependente de Vercel. Para beta comercial, avaliar/deployar runtime web em
Hetzner, mantendo inicialmente Supabase gerenciado.

## Consequências

### Vantagens

- controle de runtime;
- recursos previsíveis;
- caminho natural para workers;
- portabilidade maior.

### Tradeoffs

- patching, TLS, monitoramento, deploy e incidentes passam a exigir operação própria;
- um VPS inicial pode ser single point of failure.

## Revisit

Comparar alternativas quando houver tráfego, requisitos de disponibilidade e custos reais.
