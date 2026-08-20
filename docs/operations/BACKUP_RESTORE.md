# Backup e restore

Backup do fornecedor e recuperação operacional são responsabilidades diferentes.

## Banco gerenciado

Quando Supabase for provisionado, registrar:

- plano contratado;
- frequência de backup disponível;
- retenção;
- possibilidade de PITR, se contratada;
- processo de export independente quando necessário.

Não afirmar que existe backup apenas porque existe banco gerenciado.

## Restore test

Antes do gate da Fase 2:

1. gerar backup/export apropriado;
2. restaurar em ambiente não produtivo;
3. validar integridade e relações;
4. validar autenticação/RLS conforme possível;
5. registrar tempo de restauração;
6. documentar falhas e procedimento final.

RPO e RTO iniciais são decisões `TBD` dos sócios.
