# Deployment

## Agora

Nenhum servidor Hetzner é provisionado na Fase 0. Preview do Lovable/local serve para validar a
fundação.

## Alvo futuro: beta comercial

Abordagem esperada:

```text
Internet
  |
reverse proxy (Nginx/Caddy)
  |
container/runtime ALTUSevolv
  |
managed Supabase
```

## Requisitos antes do primeiro deploy Hetzner

- imagem/build reproduzível;
- usuário não-root no container quando aplicável;
- secrets injetados fora da imagem;
- TLS;
- firewall;
- health check;
- logs estruturados;
- rollback documentado;
- backup/restore validado para dados;
- atualização de dependências/OS definida.

## Monorepo

Infraestrutura futura deve viver sob `infrastructure/`, sem criar um repositório de deploy separado.
