# Custos

Assunções documentadas em **19 ago 2026**.

> `verify_before_purchase`: preços de Lovable, Supabase, Hetzner, e-mail, IA e pagamentos devem
> ser confirmados nos sites oficiais antes de cada compra/upgrade. Este repositório não congela
> preços de fornecedores.

## Categorias

### Custos fixos

- runtime/hospedagem;
- banco gerenciado quando contratado;
- domínio;
- monitoramento pago, se necessário;
- backups adicionais.

### Custos por uso

- e-mails;
- storage/egress;
- IA/tokens;
- pagamentos/transações;
- compute adicional;
- logs além de franquias.

### Custo humano

Manutenção de servidor, incidentes, atualizações, restore, segurança e suporte são custo de
engenharia/operação e devem ser avaliados separadamente da fatura de cloud.

## Progressão pretendida

### Desenvolvimento

- Lovable preview quando suficiente;
- serviços gratuitos apenas quando adequados a dados não críticos;
- nenhum serviço pago sem necessidade.

### Piloto controlado

- Supabase gerenciado;
- upgrade somente quando confiabilidade/backups/limites exigirem;
- e-mail mínimo;
- sem IA/billing.

### Beta comercial

- Hetzner para runtime web;
- Supabase continua gerenciado inicialmente;
- e-mail e pagamento conforme funcionalidades aprovadas;
- monitoramento e backup independente conforme risco.

### Escala

Comparar custo total gerenciado vs self-host considerando horas de engenharia, não apenas preço do
VPS.
