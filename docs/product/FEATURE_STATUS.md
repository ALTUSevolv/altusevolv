# Status real das funcionalidades

## Legenda

- `proposed`: intenção documentada;
- `designed`: comportamento/modelo definido;
- `frontend-only`: UI sem backend real;
- `backend-partial`: persistência/backend incompleto;
- `integrated`: fluxo conectado ponta a ponta;
- `tested`: fluxo integrado com testes relevantes;
- `production-ready`: testado, observável e operacionalmente pronto;
- `blocked`: dependência impede avanço.

## Estado em 20 ago 2026

| Feature                   | Status          | Evidência/observação                                                        |
| ------------------------- | --------------- | --------------------------------------------------------------------------- |
| Brand tokens              | `integrated`    | Tokens e shell usados pela UI da Fase 0                                     |
| Landing/foundation shell  | `frontend-only` | Sem dados de produto                                                        |
| Roadmap visual            | `frontend-only` | Renderiza dados estáticos documentais                                       |
| GitHub monorepo           | `designed`      | Repo oficial definido; primeiro commit ainda precisa ser feito pelo usuário |
| CI baseline               | `designed`      | Workflow incluído; precisa rodar após primeiro push                         |
| Supabase                  | `proposed`      | Não provisionado                                                            |
| Authentication            | `proposed`      | Fase 1                                                                      |
| Organizations/memberships | `designed`      | Modelo conceitual apenas                                                    |
| RLS / tenant isolation    | `designed`      | Estratégia documentada; sem policies ainda                                  |
| Clients                   | `proposed`      | Fase 1                                                                      |
| Programs                  | `proposed`      | Fase 1                                                                      |
| Sessions                  | `proposed`      | Fase 1                                                                      |
| Tasks                     | `proposed`      | Fase 1                                                                      |
| Check-ins                 | `proposed`      | Fase 1                                                                      |
| Journal/reflection        | `proposed`      | Privacidade ainda requer decisão dos sócios                                 |
| Score 0–100               | `designed`      | Hipótese v0, não validada e não implementada                                |
| Billing                   | `proposed`      | Somente Fase 3                                                              |
| AI                        | `proposed`      | Fora do MVP; possível Fase 4                                                |
| Calendar integrations     | `proposed`      | Fora do MVP                                                                 |
| WhatsApp                  | `proposed`      | Fora do MVP                                                                 |
| Mobile app                | `proposed`      | Fase 5 apenas se necessário                                                 |
