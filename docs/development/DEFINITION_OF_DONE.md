# Definition of Done

Uma feature não está concluída porque a tela existe.

## Requisitos mínimos

- comportamento/critério de aceite atendido;
- persistência real quando aplicável;
- autorização correta;
- tenant isolation quando aplicável;
- loading/empty/error states;
- validação de entrada;
- tratamento de falha;
- testes críticos automatizados;
- lint/typecheck/build passando;
- documentação atualizada no mesmo PR;
- observabilidade suficiente para investigar falhas;
- nenhuma alteração manual necessária diretamente na produção.

## Dados e segurança

Mudanças com dados precisam revisar:

- ownership;
- RLS;
- auditoria;
- retenção;
- conteúdo que pode ou não aparecer em logs.

## Product status

Somente usar `production-ready` quando a operação consegue detectar problema, investigar e
recuperar o fluxo de forma razoável.
