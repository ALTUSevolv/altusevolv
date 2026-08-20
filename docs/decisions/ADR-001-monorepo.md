# ADR-001 — Repositório único

- Status: proposed-for-approval
- Data: 2026-08-20

## Contexto

O produto precisa evoluir com baixo custo operacional e manter aplicação, dados, infraestrutura e
documentação coerentes.

## Decisão

Usar um único repositório `ALTUSevolv/altusevolv`. O app permanece na raiz durante o MVP para
compatibilidade com o runtime atual. Migrações, CI, docs e infraestrutura ficam neste repo.

## Consequências

### Vantagens

- menos coordenação entre repos;
- PR pode atualizar código, schema e docs juntos;
- CI e versionamento centralizados;
- menor overhead para equipe pequena.

### Tradeoffs

- repositório cresce com o produto;
- ownership interno precisa de organização por diretórios.

## Revisit

Reavaliar apenas se equipes independentes, ciclos de release ou requisitos de acesso realmente
exigirem separação.
