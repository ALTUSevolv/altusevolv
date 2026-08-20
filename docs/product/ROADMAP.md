# Roadmap ALTUSevolv

Base de planejamento: **19 de agosto de 2026**. Datas são alvos, não promessas. Cada fase depende
do gate da fase anterior.

## Fase 0 — Auditoria e Fundação

**Alvo:** 19–23 ago 2026

### Escopo

- repositório único;
- shell visual e identidade;
- documentação de produto e arquitetura;
- modelo conceitual de dados;
- decisões de multi-tenancy/RLS;
- ambientes e estratégia operacional;
- custos e princípios de compra;
- CI com lint, typecheck e build;
- Definition of Done e fluxo de contribuição;
- ADRs.

### Gate

Os sócios aprovam escopo, arquitetura, responsabilidades, orçamento máximo e decisões pendentes
registradas em `PHASE_0_REVIEW.md`.

## Fase 1 — MVP Central

**Alvo:** 24 ago–18 set 2026

### Escopo

1. provisionar Supabase gerenciado;
2. autenticação;
3. `organizations`, `profiles`, memberships e RLS;
4. testes automáticos de tenant isolation;
5. relação professional-client;
6. programas;
7. sessões;
8. tarefas;
9. check-ins;
10. reflexão/diário conforme decisão de privacidade;
11. histórico/progresso;
12. exportação básica;
13. UI responsiva com estados reais.

### Gate

Um profissional conduz um processo real sem edição manual no banco e o tenant A não consegue
ler/escrever dados do tenant B.

## Fase 2 — Piloto Controlado

**Alvo:** 21 set–16 out 2026

### Escopo

- 3–5 profissionais;
- onboarding e convite;
- e-mail mínimo quando necessário;
- instrumentação de uso;
- correções orientadas pelo piloto;
- processo de export/delete;
- teste real de backup e restore;
- entrevistas estruturadas.

### Gate

4+ semanas de uso, zero bug crítico de segurança, pelo menos 5 entrevistas e lista priorizada de
problemas baseada em evidência.

## Fase 3 — Monetização

**Alvo:** 19 out–13 nov 2026

### Escopo

- validar planos e limites com dados do piloto;
- escolher provedor de cobrança;
- assinatura recorrente;
- cancelamento, reativação e inadimplência;
- eventos financeiros/auditoria;
- medir custo por organização e margem.

### Gate

Primeiras assinaturas recorrentes ponta a ponta e custo operacional mensurável.

## Fase 4 — Automação e Retenção

**Alvo:** 16 nov–18 dez 2026

### Candidatos

- uma integração de calendário;
- relatórios;
- jobs assíncronos;
- um único provedor de IA para um caso de uso estreito;
- lembretes e metas mais ricas.

### Gate

Cada automação deve demonstrar benefício de tempo/uso e ter custo delimitado.

## Fase 5 — Escala

**Alvo:** 2027, condicionado a receita e retenção.

### Candidatos

- organizações multi-coach;
- grupos;
- white-label avançado;
- API/webhooks;
- integrações adicionais;
- PWA/mobile;
- filas/workers;
- alta disponibilidade.

Nenhum desses itens recebe deadline antes de existir demanda comprovada.
