export type Phase = {
  name: string;
  window: string;
  goal: string;
  deliverables: string[];
  exitGate: string;
};

/** Planning targets based on 19 Aug 2026. Source of truth: docs/product/ROADMAP.md */
export const PHASES: Phase[] = [
  {
    name: "Fase 0 — Auditoria e Fundação",
    window: "19–23 ago 2026",
    goal: "Uma base de código, arquitetura e documentação confiáveis.",
    deliverables: [
      "Shell da aplicação com identidade ALTUSevolv",
      "Decisão de repositório único documentada em ADRs",
      "Escopo de produto, exclusões e modelo de dados proposto",
      "Estratégia de segurança/RLS, ambientes, custos e Definition of Done",
      "Baseline de CI: lint, typecheck e build",
    ],
    exitGate:
      "Os sócios entendem o que existe, o que será construído, por quê, custos, responsabilidades e a próxima fase.",
  },
  {
    name: "Fase 1 — MVP Central",
    window: "24 ago–18 set 2026",
    goal: "Um profissional conduz um programa 1:1 real de ponta a ponta.",
    deliverables: [
      "Autenticação real: login, logout e recuperação de senha",
      "Organizações, associações e isolamento por tenant com RLS",
      "Clientes, programas, sessões, tarefas e check-ins",
      "Progresso/histórico com dados reais e exportação básica",
      "UI responsiva com estados de carregamento, erro e vazio",
    ],
    exitGate:
      "Um profissional real completa o fluxo sem edição manual no banco; testes automatizados provam que o tenant A não acessa dados do tenant B.",
  },
  {
    name: "Fase 2 — Piloto Controlado",
    window: "21 set–16 out 2026",
    goal: "Validar uso repetido e coletar evidência qualitativa.",
    deliverables: [
      "Onboarding e fluxo de convite",
      "E-mail transacional mínimo quando necessário",
      "Métricas de uso e correção de bugs",
      "Validação de backup/restore e fluxo de exportação/exclusão",
    ],
    exitGate:
      "3–5 profissionais, 4+ semanas de uso, nenhum bug crítico de segurança e pelo menos 5 entrevistas de feedback priorizadas.",
  },
  {
    name: "Fase 3 — Monetização",
    window: "19 out–13 nov 2026",
    goal: "Cobrança recorrente somente após o gate da Fase 2.",
    deliverables: [
      "Estrutura de planos baseada no uso observado",
      "Decisão de provedor de cobrança e assinatura recorrente",
      "Limites de plano, cancelamento e reativação",
      "Eventos administrativos e financeiros auditáveis",
    ],
    exitGate:
      "Primeiras assinaturas recorrentes funcionam ponta a ponta e o custo de suporte/infra é mensurável.",
  },
  {
    name: "Fase 4 — Automação e Retenção",
    window: "16 nov–18 dez 2026",
    goal: "Construir apenas automações justificadas por uso real.",
    deliverables: [
      "Um candidato de integração de calendário",
      "Relatórios e jobs assíncronos quando necessários",
      "Um provedor de IA para um caso estreito, server-side e com custo limitado",
      "Lembretes e metas mais ricas",
    ],
    exitGate: "Cada automação tem benefício medido de tempo/uso e custo delimitado.",
  },
  {
    name: "Fase 5 — Escala",
    window: "2027, condicionado a retenção e receita",
    goal: "Ampliar somente com demanda comprovada.",
    deliverables: [
      "Candidatos: grupos, organizações multi-coach e white-label avançado",
      "API pública/webhooks e integrações adicionais",
      "Avaliação de PWA/mobile, alta disponibilidade e filas/workers",
    ],
    exitGate: "Sem datas de implementação antes de a demanda existir.",
  },
];
