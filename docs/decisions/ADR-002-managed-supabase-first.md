# ADR-002 — Supabase gerenciado primeiro

- Status: proposed-for-approval
- Data: 2026-08-20

## Contexto

O MVP precisa de PostgreSQL, autenticação, RLS e possivelmente storage, mas a equipe não deve
assumir operação de banco antes de validar o produto.

## Decisão

Usar Supabase gerenciado na Fase 1. Não self-host Supabase no MVP.

## Consequências

### Vantagens

- menor trabalho operacional;
- Auth/RLS integrados ao PostgreSQL;
- entrega mais rápida;
- backups/recursos podem evoluir com o plano contratado.

### Tradeoffs

- custo do serviço;
- algum acoplamento a Auth/Storage/APIs do Supabase;
- RLS exige disciplina e testes.

## Revisit

Reavaliar quando custo total, requisitos de residência, escala ou controle operacional justificarem.
