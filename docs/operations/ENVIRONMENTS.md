# Ambientes

## Local

Objetivo: desenvolvimento diário reproduzível.

- código local;
- variáveis locais não commitadas;
- Supabase local ou projeto gerenciado de desenvolvimento quando a Fase 1 iniciar;
- dados sintéticos.

## Preview

Objetivo: revisão de PR/UX sem dados de produção.

Durante a fundação, Lovable pode continuar como preview. Não tratar preview como produção.

## Pilot/Staging

Criar quando a Fase 1 estiver integrada. Deve usar configuração separada da produção e dados de
piloto controlados.

## Production / commercial beta

Alvo inicial:

- runtime web em Hetzner;
- Supabase gerenciado;
- domínio/TLS;
- backups e restore testados;
- observabilidade mínima;
- secrets fora do repositório.

Não compartilhar credenciais entre ambientes.
