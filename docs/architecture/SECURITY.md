# Segurança e privacidade

## Papéis iniciais

- `platform_admin`: administração da plataforma com acesso excepcional e auditado;
- `professional`: conduz clientes/programas dentro das organizações permitidas;
- `client`: acessa somente seus próprios dados e conteúdos explicitamente compartilhados.

## RLS

RLS é obrigatória nas tabelas de negócio. Não confiar em filtros de frontend para isolamento.

Princípio:

```text
request -> authenticated profile -> organization_membership -> policy -> rows
```

Testes automatizados devem provar permissões positivas e negativas, especialmente A não acessa B.

## Segredos

- nenhuma service-role key no browser;
- nenhum segredo no Git;
- `.env.example` contém apenas nomes;
- operações privilegiadas ficam server-side;
- tokens de terceiros devem ter menor privilégio possível.

## Logs

Nunca registrar:

- conteúdo de session notes;
- journal/reflection content;
- tokens;
- senhas;
- payloads completos contendo dados sensíveis.

Logs podem registrar IDs, tipos de evento, duração, status e correlação.

## Admin

Acesso de `platform_admin` deve ser:

- explícito;
- mínimo;
- auditado;
- revisável;
- separado de fluxos normais de profissional.

## Rate limiting

Funções server-side futuras com mutações, auth recovery, convites, exportação ou integrações devem
considerar rate limiting e proteção contra abuso. Limites exatos dependem do uso observado.

## Retenção, exportação e exclusão

São decisões de produto e LGPD que precisam de política antes do piloto comercial. O MVP deve
possibilitar export/delete básicos antes do gate da Fase 2.

## Posicionamento

O MVP é uma ferramenta de gestão de coaching/mentoria, não sistema clínico/terapêutico. Qualquer
mudança de posicionamento exige revisão jurídica, de dados e segurança.

## IA futura

Nenhum dado é enviado a fornecedor de IA no MVP. Antes de qualquer recurso de IA:

1. mapear dados enviados;
2. definir finalidade;
3. revisar consentimento/base aplicável;
4. revisar retenção do fornecedor;
5. definir redaction/minimização;
6. definir limite de custo e observabilidade.
