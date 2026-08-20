# ALTUSevolv

SaaS para gestão estruturada de coaching e mentoria individual.

> Eleve o coaching. Evolva o resultado.

## Estado atual

**Fase 0 — Fundação.** Este repositório contém o shell branded, documentação de produto,
arquitetura, segurança, operações e desenvolvimento. As funcionalidades de negócio da Fase 1
ainda não estão implementadas e o Supabase ainda não deve ser provisionado antes da revisão dos
sócios.

## Fonte da verdade

Repositório único:

```text
git@github.com:ALTUSevolv/altusevolv.git
```

O app web permanece na raiz para preservar o runtime atual Lovable/TanStack Start. Banco,
migrações, infraestrutura, CI e documentação permanecem no mesmo repositório.

## Stack atual

- React 19 + TypeScript
- TanStack Start / Router / Query
- Tailwind CSS v4
- Bun como package manager
- Supabase gerenciado planejado para PostgreSQL/Auth/RLS na Fase 1
- Hetzner como alvo futuro do runtime web no beta comercial

## Setup local

```bash
bun install
bun run dev
bun run lint
bun run typecheck
bun run build
```

Depois do primeiro `bun install`, o `bun.lock` deve ser commitado e o CI passa a usar instalação
congelada.

## Documentação

### Produto

- `docs/product/PRODUCT.md`
- `docs/product/MVP_SCOPE.md`
- `docs/product/ROADMAP.md`
- `docs/product/FEATURE_STATUS.md`
- `docs/product/SCORE_V0.md`
- `docs/product/PHASE_0_REVIEW.md`

### Arquitetura e segurança

- `docs/architecture/ARCHITECTURE.md`
- `docs/architecture/DATA_MODEL.md`
- `docs/architecture/SECURITY.md`

### Operações

- `docs/operations/ENVIRONMENTS.md`
- `docs/operations/COSTS.md`
- `docs/operations/DEPLOYMENT.md`
- `docs/operations/BACKUP_RESTORE.md`
- `docs/operations/OBSERVABILITY.md`

### Desenvolvimento

- `docs/development/CONTRIBUTING.md`
- `docs/development/DEFINITION_OF_DONE.md`
- `docs/development/LOCAL_SETUP.md`

### Decisões

- `docs/decisions/ADR-001-monorepo.md`
- `docs/decisions/ADR-002-managed-supabase-first.md`
- `docs/decisions/ADR-003-hetzner-target-no-vercel-lockin.md`
- `docs/decisions/ADR-004-no-ai-in-mvp.md`

## Status de features

Usamos apenas:

`proposed`, `designed`, `frontend-only`, `backend-partial`, `integrated`, `tested`,
`production-ready`, `blocked`.

UI pronta não significa feature pronta. Consulte `docs/development/DEFINITION_OF_DONE.md`.
