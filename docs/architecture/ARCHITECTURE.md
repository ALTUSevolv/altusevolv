# Arquitetura

## Decisão atual

Um único repositório contém app, migrações, infraestrutura, CI e documentação.

```text
Browser
  |
  v
ALTUSevolv web (React/TanStack Start)
  |
  +----> managed Supabase (Phase 1)
          |- PostgreSQL
          |- Auth
          |- RLS
          `- Storage somente quando houver uploads reais
```

## Princípios

- nenhuma API separada no MVP;
- nenhuma arquitetura de microserviços;
- nenhuma dependência arquitetural de Vercel;
- acesso direto do browser ao Supabase somente quando protegido por RLS estrita;
- operações privilegiadas/segredos executadas server-side ou em função segura;
- jobs/workers futuros permanecem neste repositório;
- self-hosted Supabase não faz parte do MVP.

## Runtime

### Desenvolvimento e piloto

Lovable/ambiente local para desenvolvimento e preview, com Supabase gerenciado quando a Fase 1
for iniciada.

### Beta comercial

Alvo atual:

```text
Hetzner
|- reverse proxy
|- runtime web
`- worker futuro, se existir necessidade comprovada

Managed Supabase
|- PostgreSQL
|- Auth
|- RLS
`- Storage, se necessário
```

A aplicação e o banco devem permanecer geograficamente próximos quando possível para evitar
latência excessiva em SSR e operações server-side.

## Revisit conditions

Reavaliar arquitetura quando houver evidência de:

- jobs de longa duração;
- necessidade de filas;
- custos de serviços gerenciados materialmente maiores que custo operacional interno;
- exigência real de alta disponibilidade;
- clientes B2B exigindo integrações/API;
- requisitos de residência/localização de dados.
