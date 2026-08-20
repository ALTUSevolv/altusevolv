# Contribuição

## Repositório

Uma única fonte da verdade: `ALTUSevolv/altusevolv`.

## Fluxo

```text
issue -> branch -> implementação -> validações -> PR -> review -> preview -> merge
```

### Branches

Exemplos:

- `feat/organizations-memberships-rls`
- `fix/auth-session-expiry`
- `docs/phase-1-decisions`
- `chore/ci-baseline`

Evitar branches long-lived.

## Pull request

Todo PR deve explicar:

- problema/requisito;
- solução;
- impacto em dados;
- impacto em RLS/segurança;
- como validar;
- docs alteradas;
- riscos e rollback quando relevante.

## Schema

Toda mudança de schema requer:

- migration versionada;
- impacto em dados existentes;
- RLS/policies correspondentes;
- atualização de `DATA_MODEL.md`;
- testes relevantes.

## Segredos e dados

Nunca commit:

- `.env` real;
- service-role keys;
- tokens;
- dumps de produção;
- dados pessoais reais para fixtures.
