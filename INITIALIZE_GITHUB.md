# Primeiro commit no GitHub em seu usuário

O repositório remoto foi criado vazio. Faça o primeiro commit localmente para controlar a identidade
do autor.

## 1. Confira sua identidade Git

```bash
git config --global user.name
git config --global user.email
```

Se quiser usar configuração apenas neste projeto, prefira `--local` depois do clone.

## 2. Clone o repositório vazio

```bash
git clone git@github.com:ALTUSevolv/altusevolv.git
cd altusevolv
```

Se `git branch --show-current` não retornar `main`:

```bash
git switch -c main
```

## 3. Configure a identidade somente neste repo

```bash
git config --local user.name "Sandro Loch"
git config --local user.email "es.loch@gmail.com"
```

Valide:

```bash
git config --local --get user.name
git config --local --get user.email
```

Observação: o repositório é público; o e-mail usado no commit pode aparecer nos metadados públicos
do Git. Se isso for indesejado, use o e-mail `noreply` fornecido pelo GitHub.

## 4. Copie esta fundação para o clone

Extraia o ZIP entregue pelo ChatGPT em uma pasta temporária e copie **o conteúdo** para o clone,
inclusive arquivos ocultos como `.github`, `.gitignore` e `.env.example`. Não copie uma pasta `.git`
externa.

Exemplo Linux:

```bash
rsync -av --exclude='.git' /caminho/altusevolv_phase0/ ./
```

## 5. Instale e gere o lockfile

```bash
bun install
```

Isso deve criar `bun.lock`. Ele deve fazer parte do primeiro commit.

## 6. Valide antes de commitar

```bash
bun run lint
bun run typecheck
bun run build
```

Corrija qualquer falha antes do push.

## 7. Revise o diff

```bash
git status
git diff -- . ':!bun.lock'
```

Confira que não existe `.env`, segredo, token ou dado real.

## 8. Primeiro commit

Para um repositório vazio, é aceitável inicializar `main` diretamente:

```bash
git add .
git commit -m "chore: establish ALTUSevolv Phase 0 foundation"
git show --no-patch --format=fuller HEAD
```

Confirme `Author` antes do push.

## 9. Push

```bash
git push -u origin main
```

## 10. Confirme no GitHub

- commit atribuído ao seu usuário;
- Actions/CI iniciado;
- nenhuma secret publicada;
- estrutura `docs/`, `supabase/` e `infrastructure/` presente.

## 11. Depois do bootstrap

A partir do próximo trabalho, não commitar diretamente em `main`:

```bash
git switch -c feat/organizations-memberships-rls
```

Fluxo: issue -> branch -> implementação -> testes -> PR -> review -> CI -> merge.
