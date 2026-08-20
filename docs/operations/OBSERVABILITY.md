# Observabilidade

## Mínimo antes do beta comercial

- error tracking de frontend/server;
- eventos de autenticação e segurança relevantes;
- failed writes;
- falhas de funções server-side;
- health/deployment status;
- indicadores de capacidade do banco;
- latência/erros de integrações quando existirem;
- correlação por request/event ID.

## Privacidade

Não logar conteúdo de notas de sessão, diário/reflexões, tokens ou credenciais.

## Alertas iniciais

Alertar apenas eventos acionáveis, por exemplo:

- aplicação indisponível;
- taxa elevada de 5xx;
- falha persistente de escrita;
- falha de jobs críticos;
- capacidade de banco/disco próxima do limite;
- falha de backup quando houver automação.
