# ALTUSevolv agent rules

- GitHub repository `ALTUSevolv/altusevolv` is the source of truth.
- Keep application, docs, database migrations and infrastructure in this repository.
- Do not split frontend/backend into separate repositories during MVP.
- Do not provision Supabase or external paid services without an explicit phase decision.
- Do not implement AI, billing, calendar OAuth, WhatsApp, groups, mobile or advanced dashboards in Phase 1 unless roadmap scope is explicitly changed.
- Never mark a feature done because UI exists. Follow `docs/development/DEFINITION_OF_DONE.md`.
- Every schema change must include migration, RLS impact and data-model documentation.
- Never commit secrets or production data.
