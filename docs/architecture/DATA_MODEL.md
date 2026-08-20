# Modelo conceitual de dados

Nenhuma migration é criada na Fase 0. Este documento orienta a implementação da Fase 1.

## Relações principais

```text
auth.users
    |
    v
profiles
    |
organization_memberships ---> organizations
    |                              |
    |                              +--> programs
    |                              +--> sessions
    |                              +--> tasks
    |                              +--> checkins
    |                              +--> journal_entries
    |                              +--> score_snapshots
    |                              `--> audit_events
    |
professional_client_links
```

## Tabelas propostas

### organizations

- `id uuid pk`
- `name text`
- `slug text unique`
- `created_at timestamptz`
- `updated_at timestamptz`

Tenant principal do sistema.

### profiles

Extensão de `auth.users`.

- `id uuid pk -> auth.users.id`
- `display_name text`
- `created_at timestamptz`
- `updated_at timestamptz`

Papéis não devem ser inferidos somente do profile; membership define papel por organização.

### organization_memberships

- `id uuid pk`
- `organization_id uuid fk`
- `profile_id uuid fk`
- `role text` (`platform_admin`, `professional`, `client` conforme regras)
- `status text`
- `created_at timestamptz`

Unique sugerido: `(organization_id, profile_id)`.

### professional_client_links

Nome explícito para evitar relação implícita entre profissionais e clientes.

- `id uuid pk`
- `organization_id uuid fk`
- `professional_profile_id uuid fk`
- `client_profile_id uuid fk`
- `status text`
- `created_at timestamptz`
- `ended_at timestamptz null`

Permite evoluir para mais de um profissional por cliente sem alterar ownership histórico.

### programs

- `id uuid pk`
- `organization_id uuid fk`
- `professional_client_link_id uuid fk`
- `title text`
- `status text`
- `starts_at date/null`
- `ends_at date/null`
- `created_at/updated_at`

### sessions

- `id uuid pk`
- `organization_id uuid fk`
- `program_id uuid fk`
- `professional_profile_id uuid fk`
- `scheduled_at timestamptz/null`
- `completed_at timestamptz/null`
- `meeting_url text/null`
- `professional_notes text/null`
- `created_at/updated_at`

A visibilidade de `professional_notes` para clientes deve ser explicitamente definida antes da
migration.

### tasks

- `id uuid pk`
- `organization_id uuid fk`
- `program_id uuid fk`
- `session_id uuid fk/null`
- `assigned_to_profile_id uuid fk`
- `title text`
- `description text/null`
- `status text`
- `due_at timestamptz/null`
- `completed_at timestamptz/null`
- `created_at/updated_at`

### checkins

- `id uuid pk`
- `organization_id uuid fk`
- `program_id uuid fk`
- `client_profile_id uuid fk`
- `occurred_at timestamptz`
- componentes estruturados a definir no MVP;
- comentário opcional;
- `created_at`.

Preferir campos estruturados para métricas e texto separado para reflexão.

### journal_entries

- `id uuid pk`
- `organization_id uuid fk`
- `program_id uuid fk`
- `client_profile_id uuid fk`
- `content text`
- `visibility text`
- `created_at/updated_at`

`visibility` e acesso do profissional são decisões de produto/privacidade antes da implementação.

### score_snapshots

Caso score seja aprovado:

- `id uuid pk`
- `organization_id uuid fk`
- `program_id uuid fk`
- `formula_version text`
- componentes brutos em colunas/JSON validado;
- `score numeric`
- `calculated_at timestamptz`.

Nunca armazenar apenas score final.

### audit_events

- `id uuid pk`
- `organization_id uuid/null`
- `actor_profile_id uuid/null`
- `event_type text`
- `entity_type text`
- `entity_id uuid/null`
- metadata não sensível;
- `created_at timestamptz`.

Não registrar conteúdo de notas ou diário.

## Ownership

Entidades de negócio devem possuir `organization_id` explícito ou derivação inequívoca e testada.
A preferência é manter `organization_id` nas tabelas de negócio para simplificar RLS, auditoria e
investigação operacional.
