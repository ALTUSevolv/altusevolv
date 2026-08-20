# Escopo do MVP

## Objetivo

Provar que um profissional consegue conduzir um processo individual real sem editar banco de
dados manualmente e sem depender de ferramentas paralelas para o fluxo central.

## Dentro do MVP

- autenticação: login, logout e recuperação de senha;
- organização/tenant e memberships;
- papéis mínimos: `platform_admin`, `professional`, `client`;
- vínculo explícito profissional-cliente;
- cadastro de clientes;
- programas;
- sessões;
- tarefas/ações e prazos;
- check-ins;
- reflexão/diário simples, condicionada à decisão de privacidade;
- histórico/progresso baseado em dados reais;
- exportação básica;
- UI web responsiva;
- estados de loading, vazio e erro;
- RLS e testes de isolamento entre tenants;
- eventos administrativos essenciais.

## Fora do MVP

- IA e resumos automáticos;
- PDF automatizado;
- WhatsApp;
- Google Calendar/Zoom/Meet/Teams OAuth;
- grupos/turmas;
- white-label avançado;
- API pública e webhooks externos;
- Zapier/n8n/HubSpot;
- aplicativo mobile;
- push notifications;
- billing recorrente antes do piloto;
- SLA enterprise;
- self-hosted Supabase.

## Gate

O MVP encerra quando um profissional real completa o fluxo 1:1 ponta a ponta, com persistência
real e testes automatizados comprovando isolamento entre organizações.
