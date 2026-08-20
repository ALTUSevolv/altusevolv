# Setup local

## Pré-requisitos

- Git;
- Bun;
- Node apenas quando necessário pelas ferramentas;
- acesso ao GitHub da organização.

## Clone

```bash
git clone git@github.com:ALTUSevolv/altusevolv.git
cd altusevolv
```

## Dependências

```bash
bun install
```

O primeiro bootstrap deve gerar `bun.lock`; depois disso, usar:

```bash
bun install --frozen-lockfile
```

## Execução

```bash
bun run dev
```

## Qualidade

```bash
bun run lint
bun run typecheck
bun run build
```

## Variáveis

```bash
cp .env.example .env.local
```

Não preencher Supabase até a Fase 1 ser aprovada e provisionada.
