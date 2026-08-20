# Score de evolução v0

## Status

**Hipótese experimental. Não clinicamente ou cientificamente validada. Não implementada.**

`formula_version = "v0"`

## Fórmula histórica proposta

- tarefas concluídas: 40%;
- check-ins: 30%;
- sessões: 20%;
- diário/reflexão: 10%.

Conceitualmente:

```text
score_v0 = tasks_component * 0.40
         + checkins_component * 0.30
         + sessions_component * 0.20
         + journal_component * 0.10
```

Cada componente precisará de definição operacional antes de implementação.

## Requisito de dados

Nunca armazenar apenas o score final. Preservar métricas brutas/componentes e `formula_version`
para permitir recálculo histórico após mudança de fórmula.

## Questões abertas

- completar muitas tarefas simples deveria valer mais que poucas tarefas relevantes?
- sessão realizada mede evolução ou apenas atividade?
- ausência de diário deve reduzir score se diário for opcional?
- diferentes programas precisam de pesos distintos?
- o score deve ser exibido ao cliente ou apenas ao profissional?
- como evitar que a métrica induza comportamento artificial?

## Critério para implementar

Os sócios devem escolher entre `implement`, `change` ou `defer` antes da Fase 1. Caso implementado,
o score deve ser descrito como indicador operacional do produto, não como avaliação clínica.
