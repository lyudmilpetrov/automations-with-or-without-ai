import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'

type LanguageCode = 'en' | 'zh' | 'ko' | 'ru' | 'ar' | 'bg'

type Metric = { label: string; value: string; detail: string }
type Feature = { title: string; description: string; highlight?: string }
type TimelineStep = { title: string; timeframe?: string; description: string }
type Tier = {
  id: string
  label: string
  tagline: string
  summary: string
  location: string
  benefits: string[]
  useCases: string[]
}
type CaseStudy = { company: string; result: string; quote: string }
type PlaybookMoment = { title: string; outcome: string; detail: string }
type InstrumentationBeat = { label: string; description: string }
type ExperimentTrack = { title: string; summary: string; milestones: string[] }
type WorkflowGoal = { id: string; label: string; summary: string; metric: string; steps: string[] }
type AssuranceTrack = { title: string; detail: string }
type MomentHighlight = { tag: string; title: string; description: string }
type InsightTile = { title: string; description: string }

type AppCopy = {
  header: {
    eyebrow: string
    brand: string
    copy: string
    nav: {
      landing: string
      playbook: string
      planner: string
    }
  }
  landing: {
    documentTitle: string
    hero: {
      heading: string
      lead: string
      promoLabel: string
      promoCopy: string
      primaryCta: string
      secondaryCta: string
    }
    metrics: Metric[]
    adaptive: {
      eyebrow: string
      heading: string
      description: string
      labels: {
        benefits: string
        useCases: string
      }
      tiers: Tier[]
      sidebar: {
        blendingEyebrow: string
        blendingHeading: string
        blendingBody: string
        blendingCallout: string
        blendingHighlights: string[]
        sustainabilityEyebrow: string
        sustainabilityHeading: string
        sustainabilityHighlights: string[]
      }
    }
    capabilities: {
      eyebrow: string
      heading: string
      description: string
      features: Feature[]
    }
    deliveryPlaybook: {
      eyebrow: string
      heading: string
      description: string
      pipeline: TimelineStep[]
    }
    sustainability: {
      eyebrow: string
      heading: string
      description: string
      highlights: Feature[]
    }
    stack: {
      eyebrow: string
      heading: string
      description: string
      items: string[]
    }
    fieldNotes: {
      eyebrow: string
      heading: string
      caseStudies: CaseStudy[]
    }
    ctaBanner: {
      eyebrow: string
      heading: string
      description: string
      primaryCta: string
      secondaryCta: string
    }
  }
  playbook: {
    documentTitle: string
    hero: {
      eyebrow: string
      heading: string
      lead: string
      primaryCta: string
      secondaryCta: string
    }
    immersion: {
      eyebrow: string
      heading: string
      description: string
      moments: PlaybookMoment[]
    }
    instrumentation: {
      eyebrow: string
      heading: string
      beats: InstrumentationBeat[]
      safetyHeading: string
      safetySignals: string[]
    }
    experiments: {
      eyebrow: string
      heading: string
      description: string
      tracks: ExperimentTrack[]
      addButton: string
    }
  }
  planner: {
    documentTitle: string
    hero: {
      eyebrow: string
      heading: string
      lead: string
      primaryCta: string
      secondaryCta: string
    }
    goalMetricLabel: string
    workflowGoals: WorkflowGoal[]
    assurance: {
      eyebrow: string
      heading: string
      tracks: AssuranceTrack[]
    }
    milestones: {
      eyebrow: string
      heading: string
      highlights: MomentHighlight[]
    }
    insights: {
      eyebrow: string
      heading: string
      tiles: InsightTile[]
    }
  }
}

const translations: Record<LanguageCode, AppCopy> = {
  en: {
    header: {
      eyebrow: 'DATA AUTOMATIONS · AI · CODE',
      brand: 'Automation Fabric Studio',
      copy: 'Own the automation IP, keep compute lean, stay carbon-aware.',
      nav: {
        landing: 'Landing',
        playbook: 'Delivery playbook',
        planner: 'Plan my workflow',
      },
    },
    landing: {
      documentTitle: 'Automation Fabric · Delivery Studio',
      hero: {
        heading: 'Data automations that live on your infrastructure, blending AI with the business logic you already trust.',
        lead: 'We design mobile-first automation experiences, progressive web apps, and copilots that inherit your security posture while shrinking AI compute costs and environmental impact.',
        promoLabel: 'Launch demo',
        promoCopy:
          'Your first automation is on us. Pick the workflow and we will deliver it as a full-featured demo so you can showcase results internally and externally—no strings, just proof.',
        primaryCta: 'Plan my workflow',
        secondaryCta: 'Explore delivery playbook',
      },
      metrics: [
        { label: 'Automation hours unlocked', value: '18K+', detail: 'per quarter after launch' },
        { label: 'Data sources orchestrated', value: '42', detail: 'without replacing existing tools' },
        { label: 'Operational cost drop', value: '38%', detail: 'by running on your infra' },
      ],
      adaptive: {
        eyebrow: 'ADAPTIVE INTELLIGENCE FRAMEWORK',
        heading: 'Adaptive Intelligence Framework: A tiered automation strategy for scalable, secure, and sustainable AI',
        description:
          'Potential clients can scroll through an accordion of three infrastructure layers—moving from deterministic code to intelligent augmentation—so it is clear how we modernize operations with maximum control and minimal carbon impact.',
        labels: {
          benefits: 'Benefits',
          useCases: 'Ideal use cases',
        },
        tiers: [
          {
            id: 'tier-1',
            label: 'Tier 1 · Core Logic on Client Infrastructure',
            tagline: 'Own the logic. Control the cost.',
            summary:
              'A deterministic, standalone codebase that codifies the core business logic and automation workflows you already trust.',
            location: 'Runs entirely on your infrastructure—on-prem or private cloud—with full auditability.',
            benefits: [
              'Zero recurring software costs thanks to one-time build-and-transfer engagements.',
              'Complete data sovereignty with controls aligned to regulated industries.',
              'Transparent logic paths that make governance reviews painless.',
            ],
            useCases: ['ETL pipelines', 'rules-based decision engines', 'document parsing', 'workflow orchestration'],
          },
          {
            id: 'tier-2',
            label: 'Tier 2 · On-Prem AI Micro-Models',
            tagline: 'Smarter automation, still under your roof.',
            summary:
              'Lightweight, domain-tuned AI models for NLP, classification, and anomaly detection—trained on your datasets and GPU footprint.',
            location: 'Deployed on the client’s GPU clusters for privacy-first, low-latency inference.',
            benefits: [
              'Custom fine-tuning keeps the model fluent in your taxonomy and workflows.',
              'No data leaves your environment, satisfying privacy mandates by design.',
              'Energy-conscious runtimes that reuse existing hardware.',
            ],
            useCases: ['intelligent form extraction', 'intent classification', 'predictive routing', 'internal copilots'],
          },
          {
            id: 'tier-3',
            label: 'Tier 3 · Federated Intelligence via External LLMs',
            tagline: 'Tap into the cloud when it counts.',
            summary:
              'Selective connections to platforms like OpenAI, Grok, or Anthropic for reasoning-heavy, creative, or multilingual workloads.',
            location: 'Invoked through policy-controlled APIs with deterministic fallbacks orchestrated locally.',
            benefits: [
              'Pay-as-you-go access to the latest general intelligence capabilities.',
              'Routing logic ensures only qualifying tasks ever leave your perimeter.',
              'Combines broad knowledge bases with your curated prompts and caches.',
            ],
            useCases: ['multi-document Q&A', 'generative content', 'natural language summarization', 'multilingual support'],
          },
        ],
        sidebar: {
          blendingEyebrow: 'Intelligent tier blending',
          blendingHeading: 'Build adaptive automation flows',
          blendingBody:
            'Pair validation in Tier 1 with Tier 2 micro-models and Tier 3 reasoning so every workflow balances precision, creativity, and compliance.',
          blendingCallout:
            'Example: Validate documents with Tier 1, triage them with Tier 2, and surface executive-ready summaries via Tier 3—all while logging carbon and cost per handoff.',
          blendingHighlights: [
            'Blend deterministic validation in Tier 1 with Tier 2 classification and Tier 3 summarization inside a single pipeline.',
            'Continuously calculate cost, latency, and carbon scores so the most efficient tier is selected per task.',
            'Give operations teams a cockpit to tune thresholds, fallbacks, and approval routing without redeploying code.',
          ],
          sustainabilityEyebrow: 'Sustainability & Cost Efficiency',
          sustainabilityHeading: 'Launch greener intelligence',
          sustainabilityHighlights: [
            'Minimize energy-hungry cloud inference by prioritizing on-prem logic and right-sized micro-models.',
            'Reuse idle GPUs and existing observability stacks instead of adding opaque SaaS spend.',
            'Eliminate vendor lock-in and surprise egress fees with portable code ownership.',
            'Adopt green AI practices while maintaining capability, compliance, and measurable ROI.',
          ],
        },
      },
      capabilities: {
        eyebrow: 'CAPABILITIES',
        heading: 'Automation fabric tuned to your domain',
        description:
          'Each module is portable, API-first, and ready for mobile. Compose flows from reusable accelerators that slot into existing tooling, no rip-and-replace required.',
        features: [
          {
            title: 'Hybrid intelligence fabric',
            description:
              'Blend deterministic code with specialized AI agents so every workflow has explainable guardrails and measurable outcomes.',
            highlight: 'Policy driven',
          },
          {
            title: 'Observability from day zero',
            description:
              'Live runbooks, data lineage, and trust scoring keep humans in the loop without slowing down releases.',
            highlight: 'Always auditable',
          },
          {
            title: 'Composable accelerators',
            description:
              'Drop-in modules for enrichment, validation, and routing map directly to your teams’ naming, secrets, and controls.',
            highlight: 'Yours to extend',
          },
        ],
      },
      deliveryPlaybook: {
        eyebrow: 'DELIVERY PLAYBOOK',
        heading: 'Designed like a product, shipped like automation',
        description:
          'Human-centered discovery meets engineering discipline. We co-build with your experts, prove value in weeks, and leave behind maintainable code and PWA experiences.',
        pipeline: [
          {
            title: 'Blueprint Sprint',
            timeframe: 'Days 1-5',
            description: 'Pair with domain owners, capture constraints, and simulate impact with lightweight sandboxes.',
          },
          {
            title: 'Automation Fabric',
            timeframe: 'Weeks 2-4',
            description: 'Ship production-ready flows that reuse your cloud, data warehouse, and CI/CD footprint.',
          },
          {
            title: 'AI Optimization',
            timeframe: 'Weeks 5+',
            description: 'Continuously tune prompts, models, and caching so AI calls stay local or leverage negotiated rates.',
          },
        ],
      },
      sustainability: {
        eyebrow: 'SUSTAINABLE INTELLIGENCE',
        heading: 'Intelligent experiences without bloated emissions',
        description:
          'The fastest way to greener AI is to reuse what you already have. We orchestrate AI workloads next to your data, select right-sized models, and keep the carbon ledger visible.',
        highlights: [
          {
            title: 'Infrastructure aware orchestration',
            description: 'Scheduling respects carbon-aware windows and idle capacity on your clusters before bursting to hosted GPUs.',
          },
          {
            title: 'Data gravity respected',
            description: 'Sensitive data never leaves your cloud; AI payloads are pruned, tokenized, and cached for minimal movement.',
          },
          {
            title: 'Deterministic fallbacks',
            description: 'Every AI decision pairs with a code-first escape hatch so SLAs hold even when models degrade.',
          },
        ],
      },
      stack: {
        eyebrow: 'AUTOMATION STACK',
        heading: 'What we wire together',
        description: 'Mix and match accelerators to cover every surface area of your mobile-first automation program.',
        items: [
          'Event driven pipelines',
          'Realtime copilots for ops',
          'Policy + guardrail engine',
          'Unified observability',
          'LLM + small model routing',
          'Sustainable cloud plans',
        ],
      },
      fieldNotes: {
        eyebrow: 'FIELD NOTES',
        heading: 'Stories from teams building responsibly',
        caseStudies: [
          {
            company: 'Vertex Logistics',
            result: '72% faster tender audits',
            quote:
              'Our brokerage team offloaded exception handling while keeping every decision traceable. The AI stays on our infra so costs are predictable.',
          },
          {
            company: 'Northwind Utilities',
            result: '41% fewer truck rolls',
            quote:
              'Blending rules with AI triage let us automate diagnostics for the grid without touching our regulatory controls.',
          },
        ],
      },
      ctaBanner: {
        eyebrow: 'READY WHEN YOU ARE',
        heading: 'Launch an automation pilot in 30 days',
        description:
          'Bring a workflow, a small set of subject-matter experts, and access to your preferred infrastructure. We will deliver a production-ready PWA that blends AI and algorithmic automation—owned entirely by you.',
        primaryCta: 'Book a working session',
        secondaryCta: 'Review technical checklist',
      },
    },
    playbook: {
      documentTitle: 'Explore delivery playbook · Automation Fabric',
      hero: {
        eyebrow: 'DELIVERY PLAYBOOK',
        heading: 'Modern delivery motions built for automation buyers',
        lead: 'Give stakeholders confidence with a playbook that pairs enterprise rigor with experimentation. Every stage ships with real metrics, sustainability receipts, and executive-ready storytelling.',
        primaryCta: 'Plan my workflow',
        secondaryCta: 'Return home',
      },
      immersion: {
        eyebrow: 'IMMERSION TRACK',
        heading: 'How we earn trust in week one',
        description:
          'Teams join immersive working sessions that feel like co-design sprints. Every artifact is shippable, and leadership sees the storyline evolve daily.',
        moments: [
          {
            title: 'Zero-friction intake',
            outcome: 'Map every rule, exception, and API touchpoint in less than a week.',
            detail:
              'We embed in stand-ups, shadow operations, and replay historic tickets to understand where humans get slowed down and where automation can take over safely.',
          },
          {
            title: 'Live systems sketching',
            outcome: 'Interactive Figma + code prototypes ready for stakeholder testing.',
            detail:
              'Product designers and engineers co-create the future-state workflow in collaborative canvases so decision makers can annotate, simulate, and approve in real time.',
          },
          {
            title: 'Runbook harmonization',
            outcome: 'One canonical playbook aligned to policy, brand, and regional nuances.',
            detail:
              'We translate tribal knowledge into living runbooks, document fallback logic, and define measurable success signals for each persona.',
          },
        ],
      },
      instrumentation: {
        eyebrow: 'INSTRUMENT EVERYTHING',
        heading: 'Telemetry and QA loops arrive baked in',
        beats: [
          {
            label: 'Decision desk telemetry',
            description:
              'Track approval time, auto-resolution rate, and human override confidence by channel. Dashboards ship with Loom walkthroughs for every role.',
          },
          {
            label: 'Sustainability ledger',
            description:
              'Automatic energy and cost attribution per workflow so executives can brag about greener automation during quarterly reviews.',
          },
          {
            label: 'Experience QA grid',
            description:
              'Session replays, accessibility scans, and device labs keep the PWA delightful for field teams even with spotty connectivity.',
          },
        ],
        safetyHeading: 'Safety signals we refuse to skip',
        safetySignals: [
          'Dual-run monitoring keeps AI + deterministic paths in sync before switchover.',
          'Executive cockpit shows financial, compliance, and sustainability scores side-by-side.',
          'Audit bundles export every prompt, decision, and human sign-off in a single click.',
        ],
      },
      experiments: {
        eyebrow: 'EXPERIMENTAL BUT RESPONSIBLE',
        heading: 'Experiment backlog that accelerates adoption',
        description:
          'Pick the track that fits your risk profile. Both include live-readiness reviews, carbon scoring, and proactive comms kits for sales, ops, and compliance.',
        tracks: [
          {
            title: 'Pilot runway',
            summary: 'Launch a measurable automation pilot inside 30 days.',
            milestones: [
              'Day 3: signed off north-star metric + baseline dashboard',
              'Day 10: clickable, data-backed workflow rehearsal with SMEs',
              'Day 25: security-approved release candidate with observability hooks',
            ],
          },
          {
            title: 'Scale acceleration',
            summary: 'Promote the pilot to a cross-region program without rework.',
            milestones: [
              'Day 35: parallelized deployment plan with change-management scripts',
              'Day 45: AI guardrail library localized to every regulatory zone',
              'Day 60: business enablement kit with training clips + ROI tracker',
            ],
          },
        ],
        addButton: 'Add to workflow plan',
      },
    },
    planner: {
      documentTitle: 'Plan my workflow · Automation Fabric',
    hero: {
      eyebrow: 'PLAN MY WORKFLOW',
      heading: 'See your automation plan before any contract',
      lead: 'Toggle between goals to understand the investment, timeline, and safeguards you will receive. Everything honors your brand, your infrastructure, and your accessibility standards.',
      primaryCta: 'View delivery playbook',
      secondaryCta: 'Return home',
    },
    goalMetricLabel: 'Launch KPI',
    workflowGoals: [
        {
          id: 'intake',
          label: 'Modernize intake & triage',
          summary:
            'Automate the entire request intake process with conversational forms, attachment parsing, and deterministic routing so humans only touch the highest value escalations.',
          metric: 'Time-to-triage < 2 minutes',
          steps: [
            'Deploy adaptive forms that mirror the language teams already use.',
            'Use micro-models to classify urgency, persona, and compliance requirements.',
            'Route to deterministic flows or human copilots with contextual briefings.',
          ],
        },
        {
          id: 'fulfillment',
          label: 'Fulfillment orchestration',
          summary:
            'Blend AI copilots with robotic process automation so fulfillment teams get accurate, carbon-aware task plans with zero swivel-chair work.',
          metric: '95% same-day fulfillment',
          steps: [
            'Mirror your playbooks into executable service blueprints.',
            'Generate AI-assisted checklists with sensor and ERP data embedded.',
            'Track SLAs, energy spend, and customer feedback inside one console.',
          ],
        },
        {
          id: 'governance',
          label: 'Governance + reporting',
          summary:
            'Give audit, risk, and leadership teams instant access to every automation decision—complete with prompts, policies, and evidence.',
          metric: '100% auditable automation',
          steps: [
            'Auto-generate decision memos with links to logs, prompts, and human approvals.',
            'Version guardrails like code so legal and risk teams can diff and approve.',
            'Deliver board-ready scorecards that connect ROI, CX, and sustainability.',
          ],
        },
      ],
      assurance: {
        eyebrow: 'ASSURANCE',
        heading: 'Every plan ships with safeguards',
        tracks: [
          {
            title: 'Guardrails lab',
            detail:
              'Scenario testing with synthetic and live data to ensure every AI or automation edge case degrades gracefully. Includes responsible AI reviews and red-team sessions.',
          },
          {
            title: 'Change enablement',
            detail:
              'Persona-based training content, embedded champions, and in-product guidance. We measure adoption sentiment weekly and adjust the workflow UX on the fly.',
          },
          {
            title: 'Value scoreboard',
            detail:
              'Shared cockpit with financial savings, hours returned to teams, carbon avoided, and CSAT lift so executives can champion the rollout.',
          },
        ],
      },
      milestones: {
        eyebrow: 'MILESTONE MOMENTS',
        heading: 'Rollout timeline you can show leadership',
        highlights: [
          { tag: 'WEEK 1', title: 'Blueprint sprint', description: 'Co-design with SMEs, finalize metrics, and lock security approvals.' },
          {
            tag: 'WEEK 2-3',
            title: 'Dual build',
            description: 'Ship deterministic backbone + AI copilots with live telemetry baked in.',
          },
          { tag: 'WEEK 4+', title: 'Progressive rollout', description: 'Pilot, gather evidence, and scale to additional personas with confidence.' },
        ],
      },
      insights: {
        eyebrow: 'WHY BUYERS CHOOSE US',
        heading: 'Proof points for product, operations, and finance',
        tiles: [
          {
            title: 'Operational intelligence',
            description:
              'Real-time signal center surfaces blockers, anomalies, and human feedback loops so owners can take action instantly.',
          },
          {
            title: 'Climate + cost',
            description:
              'Every automation decision publishes energy usage, GPU minutes, and dollar impact so sustainability leaders stay in the loop.',
          },
          {
            title: 'Customer proof',
            description:
              'Auto-generated case studies package screenshots, metrics, and quotes so GTM teams can sell the new workflow confidently.',
          },
        ],
      },
    },
  },
  zh: {
    header: {
      eyebrow: '数据自动化 · 人工智能 · 代码',
      brand: '自动化织构工作室',
      copy: '掌握自动化知识产权，保持精简算力，兼顾碳足迹。',
      nav: {
        landing: '首页',
        playbook: '交付手册',
        planner: '规划我的流程',
      },
    },
    landing: {
      documentTitle: 'Automation Fabric · 交付工作室',
      hero: {
        heading: '让数据自动化驻留在您的基础设施上，把人工智能与您信赖的业务逻辑无缝融合。',
        lead: '我们设计移动优先的自动化体验、PWA 与协作助手，在继承您安全策略的同时降低 AI 计算成本与环境影响。',
        promoLabel: '演示上线',
        promoCopy: '首个自动化由我们承包。挑选一个流程，我们会交付完整演示，方便您在内部外部证明成效——纯粹证据，没有套路。',
        primaryCta: '规划我的流程',
        secondaryCta: '探索交付手册',
      },
      metrics: [
        { label: '释放的自动化人时', value: '18K+', detail: '上线后的每季度' },
        { label: '编排的数据源', value: '42', detail: '无需替换现有工具' },
        { label: '运营成本下降', value: '38%', detail: '因为运行在您的基础设施上' },
      ],
      adaptive: {
        eyebrow: '自适应智能框架',
        heading: '分层自动化策略，兼顾可扩展性、安全与可持续性',
        description:
          '潜在客户可以浏览三个基础设施层级的手风琴，从确定性代码到智能增强，清晰了解我们如何在可控且低碳的前提下现代化运营。',
        labels: {
          benefits: '优势',
          useCases: '理想用例',
        },
        tiers: [
          {
            id: 'tier-1',
            label: '第 1 层 · 客户基础设施上的核心逻辑',
            tagline: '掌控逻辑，掌控成本。',
            summary: '确定性的独立代码库，固化您已经信任的核心业务逻辑与自动化流程。',
            location: '完全运行在您的本地或私有云中，可全面审计。',
            benefits: [
              '一次性交付，免去持续软件费用。',
              '完整的数据主权，符合监管行业控制要求。',
              '透明的逻辑路径，治理评审更轻松。',
            ],
            useCases: ['ETL 流程', '基于规则的决策引擎', '文档解析', '流程编排'],
          },
          {
            id: 'tier-2',
            label: '第 2 层 · 本地 AI 微模型',
            tagline: '更聪明的自动化，依旧在您掌控之下。',
            summary: '针对 NLP、分类与异常检测的轻量领域模型，在您的数据集与 GPU 资源上训练。',
            location: '部署在客户 GPU 集群上，先天保护隐私并实现低延迟推理。',
            benefits: ['定制微调让模型熟悉您的术语和流程。', '数据不出域，天然满足隐私要求。', '节能的运行模式充分复用既有硬件。'],
            useCases: ['智能表单抽取', '意图分类', '预测路由', '内部协作助手'],
          },
          {
            id: 'tier-3',
            label: '第 3 层 · 外部 LLM 联邦智能',
            tagline: '需要时再调用云端能力。',
            summary: '按需连接 OpenAI、Grok、Anthropic 等平台，处理需要推理、创意或多语言的工作负载。',
            location: '通过策略控制的 API 调用，且在本地编排确定性兜底。',
            benefits: ['按量获取前沿通用智能能力。', '路由逻辑确保只有必要任务才离开边界。', '结合广泛知识与您定制的提示与缓存。'],
            useCases: ['多文档问答', '生成式内容', '自然语言摘要', '多语言支持'],
          },
        ],
        sidebar: {
          blendingEyebrow: '智能分层混搭',
          blendingHeading: '打造自适应自动化流程',
          blendingBody: '用第 1 层验证、第 2 层微模型与第 3 层推理组合，让每个流程兼顾精度、创意与合规。',
          blendingCallout: '示例：第 1 层验证文档，第 2 层分诊，第 3 层生成高管摘要，并在每次交接时记录碳排与成本。',
          blendingHighlights: [
            '在单一流水线中结合第 1 层确定性校验、第 2 层分类与第 3 层摘要。',
            '持续计算成本、延迟与碳排，确保任务始终走最优层。',
            '运营团队可在驾驶舱调节阈值、兜底与审批路由，无需重新部署。',
          ],
          sustainabilityEyebrow: '可持续与成本效率',
          sustainabilityHeading: '启动更绿色的智能',
          sustainabilityHighlights: [
            '优先本地逻辑与精巧微模型，减少高能耗云端推理。',
            '复用闲置 GPU 与既有可观测性平台，避免新增不透明 SaaS 成本。',
            '可迁移的代码所有权，杜绝厂商锁定与流量费用惊喜。',
            '保持能力、合规与可衡量 ROI 的同时实践绿色 AI。',
          ],
        },
      },
      capabilities: {
        eyebrow: '能力矩阵',
        heading: '针对您行业调优的自动化织构',
        description: '每个模块皆可移植、API 优先、移动就绪。用可复用加速器拼装流程，无需大拆大建。',
        features: [
          {
            title: '混合智能织网',
            description: '把确定性代码与专用 AI 代理结合，让流程拥有可解释护栏与量化成果。',
            highlight: '策略驱动',
          },
          {
            title: '零时差可观测性',
            description: '实时运行手册、数据血缘与信任评分，让人保持在环而不拖慢上线节奏。',
            highlight: '随时可审计',
          },
          {
            title: '可组合加速器',
            description: '用于增强、校验与路由的模块与团队命名、密钥与控制体系直接对接。',
            highlight: '任您拓展',
          },
        ],
      },
      deliveryPlaybook: {
        eyebrow: '交付手册',
        heading: '以产品思维设计，以自动化速度交付',
        description: '以人为本的调研配合工程纪律。我们与专家共建，数周内验证价值，并留下易维护的代码与 PWA 体验。',
        pipeline: [
          {
            title: '蓝图冲刺',
            timeframe: '第 1-5 天',
            description: '与领域负责人配对，捕捉约束，并用轻量沙盒模拟影响。',
          },
          {
            title: '自动化织构',
            timeframe: '第 2-4 周',
            description: '交付生产级流程，复用您的云、数仓与 CI/CD 足迹。',
          },
          {
            title: 'AI 优化',
            timeframe: '第 5 周起',
            description: '持续调优提示、模型与缓存，让 AI 调用优先本地，或利用协商费率。',
          },
        ],
      },
      sustainability: {
        eyebrow: '可持续智能',
        heading: '不增排放的智能体验',
        description: '让 AI 更绿色的方式就是复用既有资产。我们在数据附近编排工作负载，选择恰当模型，并让碳账本透明。',
        highlights: [
          {
            title: '感知基础设施的编排',
            description: '调度优先碳感知时间窗与闲置容量，再考虑托管 GPU。',
          },
          {
            title: '尊重数据重力',
            description: '敏感数据不出云；AI 载荷裁剪、分词与缓存，减少流动。',
          },
          {
            title: '确定性兜底',
            description: '每个 AI 决策都配套代码兜底，即便模型退化 SLA 仍可守住。',
          },
        ],
      },
      stack: {
        eyebrow: '自动化栈',
        heading: '我们连接的组件',
        description: '自由组合加速器，覆盖移动优先自动化计划的每一面。',
        items: ['事件驱动管线', '实时运营助手', '策略与护栏引擎', '统一可观测性', '大模型+小模型路由', '可持续云规划'],
      },
      fieldNotes: {
        eyebrow: '一线记录',
        heading: '负责任团队的故事',
        caseStudies: [
          {
            company: 'Vertex 物流',
            result: '招投标审核提速 72%',
            quote: '经纪团队把异常处理交给自动化，同时保持每个决定可追溯。AI 留在我们基础设施上，成本可预测。',
          },
          {
            company: 'Northwind 公用事业',
            result: '卡车派遣减少 41%',
            quote: '规则与 AI 分诊结合后，我们在不触碰监管控制的情况下自动化了电网诊断。',
          },
        ],
      },
      ctaBanner: {
        eyebrow: '随时待命',
        heading: '30 天内启动自动化试点',
        description:
          '带上一个流程、少量专家和首选基础设施访问，我们将交付由您完全拥有的、融合 AI 与算法自动化的生产级 PWA。',
        primaryCta: '预约共创会议',
        secondaryCta: '查看技术清单',
      },
    },
    playbook: {
      documentTitle: '探索交付手册 · Automation Fabric',
      hero: {
        eyebrow: '交付手册',
        heading: '为自动化采购方打造的现代交付动作',
        lead: '这本手册在企业级严谨与实验精神之间取得平衡，让干系人始终有信心。每个阶段都配套真实指标、可持续凭证与管理层就绪的叙事。',
        primaryCta: '规划我的流程',
        secondaryCta: '返回首页',
      },
      immersion: {
        eyebrow: '沉浸式轨道',
        heading: '第一周如何赢得信任',
        description: '团队参加沉浸式协作会议，像共同设计冲刺一样。所有产出都能直接交付，领导层每日都能看到故事线演进。',
        moments: [
          {
            title: '零阻力需求接入',
            outcome: '不到一周梳理每条规则、例外与 API 接触点。',
            detail: '我们加入站会、旁听运营、重放历史工单，洞察人在哪些节点被拖慢，以及自动化如何安全接管。',
          },
          {
            title: '实时系统草绘',
            outcome: '可交互的 Figma+代码原型，随时让干系人评测。',
            detail: '产品设计师与工程师在协作画布里共创未来流程，决策者可以实时批注、模拟、批准。',
          },
          {
            title: '运行手册统一',
            outcome: '一份符合政策、品牌与区域差异的权威手册。',
            detail: '我们把口口相传的知识转化为活的运行手册，记录兜底逻辑，并为每个角色定义可衡量信号。',
          },
        ],
      },
      instrumentation: {
        eyebrow: '全程可观测',
        heading: '遥测与质量闭环开箱即用',
        beats: [
          {
            label: '决策席遥测',
            description: '按渠道跟踪审批时长、自动解决率与人工覆盖信心，附带每个角色的 Loom 漫游。',
          },
          {
            label: '可持续账本',
            description: '每个流程自动核算能耗与成本，季度复盘时高管可自信分享更绿色的自动化。',
          },
          {
            label: '体验质检矩阵',
            description: '会话回放、无障碍扫描与设备实验室，确保 PWA 在弱网环境下也令人满意。',
          },
        ],
        safetyHeading: '必须具备的安全信号',
        safetySignals: ['双轨监控在切换前保持 AI 与确定性路径一致。', '高管驾驶舱同步展示财务、合规与可持续评分。', '审计包一键导出全部提示、决策与人工签核。'],
      },
      experiments: {
        eyebrow: '负责的实验',
        heading: '加速采纳的实验积压',
        description: '选择契合风险偏好的轨道。两条路径都包含就绪评审、碳评分，以及面向销售、运营、合规的沟通工具包。',
        tracks: [
          {
            title: '试点跑道',
            summary: '30 天内落地可量化的自动化试点。',
            milestones: ['第 3 天：锁定北极星指标与基线看板', '第 10 天：与专家的可点击、数据驱动彩排', '第 25 天：通过安全审批的候选版本并嵌入可观测钩子'],
          },
          {
            title: '规模提速',
            summary: '把试点升级为跨区域项目，无需返工。',
            milestones: ['第 35 天：并行部署计划与变更脚本', '第 45 天：AI 护栏库完成各监管区本地化', '第 60 天：配套培训视频与 ROI 追踪的赋能包'],
          },
        ],
        addButton: '加入流程规划',
      },
    },
    planner: {
      documentTitle: '规划我的流程 · Automation Fabric',
    hero: {
      eyebrow: '规划我的流程',
      heading: '在签约前先看到自动化计划',
      lead: '切换不同目标，了解将获得的投入、时间线与护栏。一切都尊重您的品牌、基础设施与无障碍标准。',
      primaryCta: '查看交付手册',
      secondaryCta: '返回首页',
    },
    goalMetricLabel: '启动指标',
    workflowGoals: [
        {
          id: 'intake',
          label: '现代化接入与分诊',
          summary: '用对话式表单、附件解析与确定性路由自动化请求接入，让人力只处理最高价值升级。',
          metric: '分诊时间 < 2 分钟',
          steps: ['部署贴合团队语言的自适应表单。', '用微模型判断紧急度、角色与合规需求。', '根据上下文简报路由至自动流程或人工协作助手。'],
        },
        {
          id: 'fulfillment',
          label: '履约编排',
          summary: '把 AI 协作助手与 RPA 融合，给履约团队提供准确且关注碳足迹的任务计划，彻底消除重复操作。',
          metric: '95% 当日履约',
          steps: ['把运行手册映射为可执行服务蓝图。', '基于传感器与 ERP 数据生成 AI 辅助清单。', '在单一控制台跟踪 SLA、能源支出与客户反馈。'],
        },
        {
          id: 'governance',
          label: '治理与报告',
          summary: '让审计、风险与领导层即时查看每次自动化决策，包含提示、策略与证据。',
          metric: '100% 可审计自动化',
          steps: ['自动生成带日志、提示与人工批准链接的决策备忘。', '像代码一样版本化护栏，便于法务与风控差异审阅。', '交付连接 ROI、体验与可持续性的董事会级仪表。'],
        },
      ],
      assurance: {
        eyebrow: '保障机制',
        heading: '每份计划都附带安全护栏',
        tracks: [
          {
            title: '护栏实验室',
            detail: '用合成与真实数据做情景测试，确保 AI 或自动化边界情况优雅降级，包含责任 AI 评审与红队演练。',
          },
          {
            title: '变革赋能',
            detail: '基于角色的培训内容、驻场冠军与产品内引导。我们每周测量采纳情绪，并动态调整体验。',
          },
          {
            title: '价值记分板',
            detail: '共享驾驶舱同步展示节省的资金、释放的人时、避免的碳排与满意度提升，方便高层为推广背书。',
          },
        ],
      },
      milestones: {
        eyebrow: '里程碑时刻',
        heading: '可以拿给管理层看的时间线',
        highlights: [
          { tag: '第 1 周', title: '蓝图冲刺', description: '与专家共创、敲定指标并锁定安全审批。' },
          { tag: '第 2-3 周', title: '双轨构建', description: '同时交付确定性骨干与带实时遥测的 AI 协助。' },
          { tag: '第 4 周起', title: '渐进式上线', description: '试点、收集证据，并自信扩展到更多角色。' },
        ],
      },
      insights: {
        eyebrow: '买方为何选择我们',
        heading: '给产品、运营与财务的信心凭据',
        tiles: [
          {
            title: '运营情报',
            description: '实时信号中心暴露阻塞、异常与反馈闭环，方便负责人立即行动。',
          },
          {
            title: '气候 + 成本',
            description: '每次自动化决策都会发布能耗、GPU 分钟与资金影响，可持续负责人全程掌握。',
          },
          {
            title: '客户佐证',
            description: '自动生成的案例打包截图、指标与引言，帮助 GTM 团队自信对外。',
          },
        ],
      },
    },
  },
  ko: {
    header: {
      eyebrow: '데이터 자동화 · AI · 코드',
      brand: '오토메이션 패브릭 스튜디오',
      copy: '자동화 지식을 소유하고 연산을 가볍게 유지하며 탄소까지 관리하세요.',
      nav: {
        landing: '랜딩',
        playbook: '딜리버리 플레이북',
        planner: '워크플로 계획',
      },
    },
    landing: {
      documentTitle: 'Automation Fabric · Delivery Studio',
      hero: {
        heading: '신뢰하던 비즈니스 로직에 AI 를 더해, 당신의 인프라에서 살아 숨 쉬는 데이터 자동화.',
        lead: '우리는 모바일 우선 자동화 경험과 PWA, 그리고 보조 파일럿을 설계해 보안 태세를 그대로 유지하면서도 AI 연산 비용과 환경 영향을 줄입니다.',
        promoLabel: '데모 시작',
        promoCopy: '첫 번째 자동화는 무료입니다. 원하는 워크플로를 알려주시면 입증 가능한 전체 데모를 만들어 내부·외부에 성과를 보여드릴 수 있습니다.',
        primaryCta: '워크플로 계획',
        secondaryCta: '딜리버리 플레이북 보기',
      },
      metrics: [
        { label: '풀려난 자동화 시간', value: '18K+', detail: '런치 이후 분기당' },
        { label: '오케스트레이션한 데이터 소스', value: '42', detail: '기존 도구 교체 없이' },
        { label: '운영 비용 절감', value: '38%', detail: '자체 인프라에서 실행하여' },
      ],
      adaptive: {
        eyebrow: '적응형 인텔리전스 프레임워크',
        heading: '확장성·보안·지속 가능성을 모두 잡는 계층형 자동화 전략',
        description:
          '잠재 고객은 결정적 코드부터 지능형 보강까지 세 개의 인프라 계층을 훑으며 우리가 어떻게 통제력을 유지한 채 탄소 영향을 최소화하는지 확인합니다.',
        labels: {
          benefits: '이점',
          useCases: '적합한 활용 사례',
        },
        tiers: [
          {
            id: 'tier-1',
            label: '1단계 · 고객 인프라의 코어 로직',
            tagline: '로직을 소유하고 비용을 통제하세요.',
            summary: '이미 신뢰하는 핵심 비즈니스 로직과 자동화 흐름을 코드화한 결정적 독립 코드베이스입니다.',
            location: '온프레미스 또는 프라이빗 클라우드 등 귀사 인프라 안에서만 실행되며 완전한 감사가 가능합니다.',
            benefits: ['원타임 구축·이전으로 반복 라이선스 비용 없음.', '규제 산업에 맞춘 완전한 데이터 주권.', '투명한 로직 경로로 거버넌스 검토가 간편.'],
            useCases: ['ETL 파이프라인', '규칙 기반 의사결정 엔진', '문서 파싱', '워크플로 오케스트레이션'],
          },
          {
            id: 'tier-2',
            label: '2단계 · 온프레미스 AI 마이크로 모델',
            tagline: '더 영리한 자동화, 여전히 당신의 울타리 안에서.',
            summary: 'NLP·분류·이상 감지를 위해 도메인에 맞게 조정한 경량 AI 모델로, 귀사 데이터와 GPU 자원에서 학습합니다.',
            location: '개인정보를 우선하는 저지연 추론을 위해 고객 GPU 클러스터에 배포됩니다.',
            benefits: ['맞춤 미세 조정으로 귀사 용어와 워크플로에 능통.', '데이터가 외부로 나가지 않아 기본적으로 프라이버시 충족.', '기존 하드웨어를 재사용하는 에너지 효율 런타임.'],
            useCases: ['지능형 양식 추출', '의도 분류', '예측 라우팅', '내부 코파일럿'],
          },
          {
            id: 'tier-3',
            label: '3단계 · 외부 LLM 연합 인텔리전스',
            tagline: '필요할 때만 클라우드를 호출하세요.',
            summary: 'OpenAI, Grok, Anthropic 등 플랫폼과 선택적으로 연결해 고난도 추론·창의·다국어 작업을 처리합니다.',
            location: '정책으로 제어되는 API 를 통해 호출되며, 로컬에서 결정적 폴백을 오케스트레이션합니다.',
            benefits: ['최신 범용 지능을 필요할 때만 사용료로 확보.', '라우팅 로직이 울타리 밖으로 나가는 업무를 제한.', '폭넓은 지식 기반과 커스텀 프롬프트·캐시를 결합.'],
            useCases: ['다중 문서 Q&A', '생성형 콘텐츠', '자연어 요약', '다국어 지원'],
          },
        ],
        sidebar: {
          blendingEyebrow: '계층 혼합 전략',
          blendingHeading: '적응형 자동화 플로우 구축',
          blendingBody: '1단계 검증, 2단계 마이크로 모델, 3단계 추론을 조합해 정밀도·창의성·컴플라이언스를 동시에 잡습니다.',
          blendingCallout: '예: 1단계로 문서를 검증하고 2단계로 분류, 3단계로 경영진용 요약을 생성하며, 모든 핸드오프마다 탄소와 비용을 기록합니다.',
          blendingHighlights: [
            '단일 파이프라인에서 1단계 검증, 2단계 분류, 3단계 요약을 혼합.',
            '비용·지연·탄소 점수를 지속 산출해 태스크마다 최적 계층을 선택.',
            '운영팀이 임계치·폴백·승인 라우팅을 코드 재배포 없이 조정.',
          ],
          sustainabilityEyebrow: '지속 가능성 & 비용 최적화',
          sustainabilityHeading: '더 푸른 인텔리전스 출시',
          sustainabilityHighlights: [
            '온프레 로직과 소형 모델을 우선시해 고에너지 클라우드 추론을 최소화.',
            '유휴 GPU 와 기존 관측 스택을 재사용해 불투명한 SaaS 지출을 억제.',
            '이동 가능한 코드 소유권으로 공급업체 종속과 이그레스 비용 제거.',
            '능력·컴플라이언스·ROI 를 유지하면서 그린 AI 관행을 채택.',
          ],
        },
      },
      capabilities: {
        eyebrow: '능력',
        heading: '도메인에 맞춰 조정된 자동화 패브릭',
        description: '모든 모듈은 이식 가능하고 API 우선이며 모바일 준비가 되어 있습니다. 재사용 가능한 가속기를 조합해 기존 도구에 맞춰 흐름을 구성하세요.',
        features: [
          {
            title: '하이브리드 인텔리전스 패브릭',
            description: '결정적 코드와 전문 AI 에이전트를 혼합해 모든 워크플로에 설명 가능한 가드레일과 측정 가능한 성과를 제공합니다.',
            highlight: '정책 중심',
          },
          {
            title: '데이 제로 가시성',
            description: '라이브 런북, 데이터 계보, 신뢰 점수가 출시 속도를 늦추지 않고도 사람을 참여시킵니다.',
            highlight: '항상 감사 가능',
          },
          {
            title: '조합형 가속기',
            description: '보강·검증·라우팅 모듈이 팀의 명명 규칙과 비밀·통제를 그대로 이어받습니다.',
            highlight: '확장 자유',
          },
        ],
      },
      deliveryPlaybook: {
        eyebrow: '딜리버리 플레이북',
        heading: '제품처럼 설계하고 자동화처럼 배송',
        description: '인간 중심 발견과 엔지니어링 규율을 결합합니다. 전문가와 함께 구축하고 몇 주 안에 가치를 증명하며, 유지하기 쉬운 코드와 PWA 를 남깁니다.',
        pipeline: [
          { title: '블루프린트 스프린트', timeframe: '1~5일', description: '도메인 오너와 짝을 이루어 제약을 수집하고 경량 샌드박스로 효과를 시뮬레이션합니다.' },
          { title: '오토메이션 패브릭', timeframe: '2~4주', description: '귀하의 클라우드·데이터 웨어하우스·CI/CD 자산을 재사용해 프로덕션 준비 플로우를 배송합니다.' },
          { title: 'AI 최적화', timeframe: '5주 이후', description: '프롬프트·모델·캐시를 지속 조정해 AI 호출을 로컬에 두거나 협상한 요금을 활용합니다.' },
        ],
      },
      sustainability: {
        eyebrow: '지속 가능한 인텔리전스',
        heading: '과도한 배출 없는 지능형 경험',
        description: '더 친환경적인 AI 로 가는 가장 빠른 길은 이미 가진 자산을 재사용하는 것입니다. 우리는 데이터 옆에서 작업을 조율하고 적정 모델을 선택하며 탄소 장부를 투명하게 유지합니다.',
        highlights: [
          { title: '인프라 감지형 오케스트레이션', description: '탄소 인지 시간대와 유휴 용량을 먼저 활용하고 필요할 때만 호스티드 GPU 로 확장합니다.' },
          { title: '데이터 중력 존중', description: '민감 데이터는 클라우드를 벗어나지 않으며, AI 페이로드를 다듬고 토큰화·캐시해 이동을 최소화합니다.' },
          { title: '결정적 폴백', description: '모든 AI 결정에는 코드 기반 탈출구가 있어 모델 성능이 저하돼도 SLA 를 지킵니다.' },
        ],
      },
      stack: {
        eyebrow: '자동화 스택',
        heading: '우리가 연결하는 것들',
        description: '모바일 우선 자동화 프로그램의 모든 표면을 덮기 위해 가속기를 자유롭게 섞어 보세요.',
        items: ['이벤트 기반 파이프라인', '실시간 운영 코파일럿', '정책·가드레일 엔진', '통합 가시성', 'LLM + 소형 모델 라우팅', '지속 가능한 클라우드 플랜'],
      },
      fieldNotes: {
        eyebrow: '현장 노트',
        heading: '책임감 있게 구축하는 팀 이야기',
        caseStudies: [
          {
            company: '버텍스 물류',
            result: '입찰 심사 72% 단축',
            quote: '중개 팀은 예외 처리를 자동화하면서 모든 결정을 추적 가능하게 유지했습니다. AI 가 우리 인프라에 남아 있어 비용이 예측 가능합니다.',
          },
          {
            company: '노스윈드 유틸리티',
            result: '현장 출동 41% 감소',
            quote: '규칙과 AI 분류를 결합해 규제 통제를 건드리지 않고도 전력망 진단을 자동화했습니다.',
          },
        ],
      },
      ctaBanner: {
        eyebrow: '준비 완료',
        heading: '30일 안에 자동화 파일럿 출시',
        description: '워크플로와 소수의 전문가, 선호 인프라 접근만 준비하세요. AI 와 알고리즘 자동화를 결합한 프로덕션급 PWA 를 완전히 귀사 소유로 전달합니다.',
        primaryCta: '워크숍 예약',
        secondaryCta: '기술 체크리스트 보기',
      },
    },
    playbook: {
      documentTitle: '딜리버리 플레이북 탐색 · Automation Fabric',
      hero: {
        eyebrow: '딜리버리 플레이북',
        heading: '자동화 구매자를 위한 현대적 딜리버리 모션',
        lead: '기업급 엄격함과 실험 정신을 동시에 담은 플레이북으로 이해관계자 신뢰를 확보하세요. 각 단계는 실제 지표, 지속 가능성 영수증, 경영진용 스토리텔링을 포함합니다.',
        primaryCta: '워크플로 계획',
        secondaryCta: '홈으로 돌아가기',
      },
      immersion: {
        eyebrow: '몰입 트랙',
        heading: '첫 주에 신뢰를 얻는 법',
        description: '팀은 공동 디자인 스프린트 같은 몰입형 세션에 참여합니다. 모든 산출물은 즉시 전달 가능하고 리더십은 매일 스토리 변화를 확인합니다.',
        moments: [
          {
            title: '무마찰 인테이크',
            outcome: '일주일도 안 되어 모든 규칙·예외·API 터치포인트를 맵핑합니다.',
            detail: '스탠드업에 참여하고 운영을 섀도잉하며 과거 티켓을 재생해 사람이 지연되는 지점과 안전하게 자동화할 수 있는 영역을 파악합니다.',
          },
          {
            title: '라이브 시스템 스케치',
            outcome: '이해관계자 검증이 가능한 인터랙티브 Figma + 코드 프로토타입.',
            detail: '디자이너와 엔지니어가 협업 캔버스에서 미래 워크플로를 함께 만들고 의사결정자는 실시간으로 주석·시뮬레이션·승인합니다.',
          },
          {
            title: '런북 정렬',
            outcome: '정책·브랜드·지역 차이를 모두 반영한 단일 플레이북.',
            detail: '구전 지식을 살아있는 런북으로 변환하고 폴백 로직을 문서화하며 페르소나별 성공 신호를 정의합니다.',
          },
        ],
      },
      instrumentation: {
        eyebrow: '모든 것을 계측',
        heading: '텔레메트리와 QA 루프 기본 제공',
        beats: [
          {
            label: '의사결정 데스크 텔레메트리',
            description: '채널별 승인 시간·자동 해결 비율·사람 개입 신뢰도를 추적하고 역할별 Loom 워크스루를 제공합니다.',
          },
          {
            label: '지속 가능성 원장',
            description: '워크플로별 에너지·비용을 자동 산출해 경영진이 분기 리뷰에서 친환경 자동화를 자랑할 수 있습니다.',
          },
          {
            label: '경험 QA 그리드',
            description: '세션 리플레이, 접근성 스캔, 디바이스 랩으로 현장 팀이 열악한 연결에서도 만족스러운 PWA 를 사용하도록 합니다.',
          },
        ],
        safetyHeading: '꼭 지키는 안전 시그널',
        safetySignals: ['스위치 전까지 AI 와 결정적 경로를 이중 모니터링.', '경영진 코핏에서 재무·컴플라이언스·지속 가능성 점수를 나란히 제공.', '감사 번들이 모든 프롬프트·결정·인간 승인 기록을 한 번에 내보냅니다.'],
      },
      experiments: {
        eyebrow: '실험적이지만 책임감 있게',
        heading: '채택 속도를 높이는 실험 백로그',
        description: '위험 성향에 맞는 트랙을 선택하세요. 두 트랙 모두 운영 준비 리뷰, 탄소 점수, 영업·운영·컴플라이언스용 커뮤니케이션 키트를 포함합니다.',
        tracks: [
          {
            title: '파일럿 런웨이',
            summary: '30일 이내 측정 가능한 자동화 파일럿을 출시합니다.',
            milestones: ['3일 차: 북극성 지표와 베이스라인 대시보드 확정', '10일 차: SME 와 함께하는 데이터 기반 클릭 시뮬레이션', '25일 차: 관측 훅이 포함된 보안 승인 릴리스 후보'],
          },
          {
            title: '확장 가속',
            summary: '재작업 없이 파일럿을 다중 지역 프로그램으로 승격합니다.',
            milestones: ['35일 차: 변화 관리 스크립트가 포함된 병렬 배포 계획', '45일 차: 규제 지역별 현지화된 AI 가드레일 라이브러리', '60일 차: 교육 클립과 ROI 트래커가 포함된 비즈니스 지원 키트'],
          },
        ],
        addButton: '워크플로 계획에 추가',
      },
    },
    planner: {
      documentTitle: '워크플로 계획 · Automation Fabric',
    hero: {
      eyebrow: '워크플로 계획',
      heading: '계약 전에 자동화 계획을 먼저 확인하세요',
      lead: '목표를 전환하며 필요한 투자·타임라인·보호 장치를 파악하세요. 브랜드, 인프라, 접근성 기준을 모두 존중합니다.',
      primaryCta: '딜리버리 플레이북 보기',
      secondaryCta: '홈으로 돌아가기',
    },
    goalMetricLabel: '출시 KPI',
    workflowGoals: [
        {
          id: 'intake',
          label: '인테이크 & 분류 현대화',
          summary: '대화형 폼, 첨부 파싱, 결정적 라우팅으로 요청 접수를 자동화해 가치가 높은 에스컬레이션만 사람이 다루도록 합니다.',
          metric: '분류 시간 2분 미만',
          steps: ['팀 언어를 그대로 반영한 적응형 폼 배포', '긴급도·페르소나·컴플라이언스를 미니 모델로 분류', '컨텍스트 브리핑과 함께 결정적 플로우 또는 인적 코파일럿으로 라우팅'],
        },
        {
          id: 'fulfillment',
          label: '이행 오케스트레이션',
          summary: 'AI 코파일럿과 RPA 를 결합해 정확하고 탄소 인지적인 작업 계획을 제공하고 스위블 체어 업무를 없앱니다.',
          metric: '동일 일자 95% 이행',
          steps: ['플레이북을 실행 가능한 서비스 청사진으로 미러링', '센서·ERP 데이터를 내장한 AI 보조 체크리스트 생성', '단일 콘솔에서 SLA·에너지·고객 피드백 추적'],
        },
        {
          id: 'governance',
          label: '거버넌스 + 리포팅',
          summary: '감사·리스크·리더십 팀이 모든 자동화 결정을 즉시 확인하고 프롬프트·정책·증거를 함께 봅니다.',
          metric: '100% 감사 가능한 자동화',
          steps: ['로그·프롬프트·인간 승인이 연결된 의사결정 메모 자동 생성', '코드처럼 가드레일을 버전 관리해 법무·리스크 팀이 차이를 검토', 'ROI·CX·지속 가능성을 연결한 이사회용 스코어카드 제공'],
        },
      ],
      assurance: {
        eyebrow: '보증',
        heading: '모든 계획에는 안전장치 포함',
        tracks: [
          {
            title: '가드레일 랩',
            detail: '합성·실데이터 시나리오 테스트로 AI/자동화 엣지 케이스가 우아하게 강등되도록 보장하고 책임 있는 AI 리뷰와 레드팀을 포함합니다.',
          },
          {
            title: '체인지 이네이블먼트',
            detail: '페르소나 기반 교육 콘텐츠와 현장 챔피언, 인앱 가이던스로 매주 도입 감정을 측정하고 UX 를 즉시 조정합니다.',
          },
          {
            title: '가치 스코어보드',
            detail: '절감된 비용·반환된 시간·회피한 탄소·CSAT 향상을 한 대시보드에서 공유해 경영진이 배포를 옹호할 수 있게 합니다.',
          },
        ],
      },
      milestones: {
        eyebrow: '마일스톤',
        heading: '리더십에 보여줄 수 있는 일정',
        highlights: [
          { tag: '1주차', title: '블루프린트 스프린트', description: 'SME 와 공동 설계하고 지표를 확정하며 보안 승인을 확보합니다.' },
          { tag: '2-3주차', title: '듀얼 빌드', description: '결정적 백본과 실시간 텔레메트리를 갖춘 AI 코파일럿을 동시에 구축합니다.' },
          { tag: '4주차 이후', title: '점진적 롤아웃', description: '파일럿, 증거 수집, 추가 페르소나로 확장을 자신 있게 진행합니다.' },
        ],
      },
      insights: {
        eyebrow: '고객이 선택하는 이유',
        heading: '제품·운영·재무를 위한 증거',
        tiles: [
          { title: '운영 인텔리전스', description: '실시간 신호 센터가 장애·이상·피드백 루프를 드러내 즉시 대응하게 합니다.' },
          { title: '기후 + 비용', description: '모든 자동화 결정이 에너지·GPU 분·금전 영향을 공개해 지속 가능성 리더가 상황을 파악합니다.' },
          { title: '고객 증명', description: '자동 생성된 사례가 스크린샷·지표·인용을 묶어 GTM 팀이 자신 있게 판매할 수 있도록 돕습니다.' },
        ],
      },
    },
  },
  ru: {
    header: {
      eyebrow: 'ДАННЫЕ · ИИ · КОД',
      brand: 'Студия Automation Fabric',
      copy: 'Сохраняйте права на автоматизацию, снижайте вычисления и контролируйте углеродный след.',
      nav: {
        landing: 'Главная',
        playbook: 'Плейбук доставки',
        planner: 'Планирование потока',
      },
    },
    landing: {
      documentTitle: 'Automation Fabric · Студия доставки',
      hero: {
        heading: 'Автоматизация данных на вашей инфраструктуре, где ИИ соединяется с логикой, которой вы доверяете.',
        lead: 'Мы проектируем мобильные автоматизации, PWA и копилотов, которые наследуют вашу безопасность и одновременно сокращают стоимость вычислений и воздействие на климат.',
        promoLabel: 'Запустить демо',
        promoCopy: 'Первую автоматизацию мы создадим за свой счет. Выберите поток — и вы получите полноценный демо-проект, чтобы показывать результат внутри компании и партнерам.',
        primaryCta: 'Спланировать мой поток',
        secondaryCta: 'Изучить плейбук',
      },
      metrics: [
        { label: 'Часов автоматизации освобождено', value: '18K+', detail: 'в квартал после запуска' },
        { label: 'Оркестрировано источников данных', value: '42', detail: 'без замены существующих инструментов' },
        { label: 'Снижение операционных затрат', value: '38%', detail: 'благодаря запуску на вашей инфраструктуре' },
      ],
      adaptive: {
        eyebrow: 'АДАПТИВНАЯ ИНТЕЛЛЕКТУАЛЬНАЯ СХЕМА',
        heading: 'Многоуровневая стратегия автоматизации: масштаб, безопасность и устойчивость',
        description:
          'Клиенты пролистывают три уровня инфраструктуры — от детерминированного кода до интеллектуальных надстроек, чтобы увидеть, как мы модернизируем операции с полным контролем и минимальным углеродным следом.',
        labels: {
          benefits: 'Преимущества',
          useCases: 'Идеальные кейсы',
        },
        tiers: [
          {
            id: 'tier-1',
            label: 'Уровень 1 · Основная логика на инфраструктуре клиента',
            tagline: 'Владеете логикой — управляете расходами.',
            summary: 'Детерминированный независимый код, в котором закреплена ваша ключевая бизнес-логика и доверенные процессы.',
            location: 'Работает целиком на вашей площадке или в приватном облаке и полностью аудируем.',
            benefits: ['Никаких подписок — одноразовая разработка и передача.', 'Полный суверенитет данных с контролями для регулируемых отраслей.', 'Прозрачные логические цепочки упрощают проверки.'],
            useCases: ['ETL-пайплайны', 'Правила и движки решений', 'Парсинг документов', 'Оркестрация процессов'],
          },
          {
            id: 'tier-2',
            label: 'Уровень 2 · Локальные AI микромодели',
            tagline: 'Более умная автоматизация под вашей крышей.',
            summary: 'Легкие доменные модели для NLP, классификации и поиска аномалий, обученные на ваших данных и GPU.',
            location: 'Развертываются на GPU-кластерах клиента для приватности и низкой задержки.',
            benefits: ['Тонкая настройка под вашу терминологию и процессы.', 'Данные не покидают периметр — соблюдение приватности по умолчанию.', 'Энергоэффективные рантаймы на существующем железе.'],
            useCases: ['Интеллектуальное извлечение форм', 'Классификация намерений', 'Прогнозная маршрутизация', 'Внутренние копилоты'],
          },
          {
            id: 'tier-3',
            label: 'Уровень 3 · Федеративный интеллект через внешние LLM',
            tagline: 'Задействуйте облако, когда это действительно нужно.',
            summary: 'Выборочные подключения к OpenAI, Grok или Anthropic для нагрузок с глубоким рассуждением, креативом и мультиязычностью.',
            location: 'Вызывается через управляемые политиками API с локальными детерминированными фолбэками.',
            benefits: ['Доступ к передовым возможностям по модели pay-as-you-go.', 'Логика маршрутизации выводит наружу только подходящие задания.', 'Широкие базы знаний соединяются с вашими промптами и кешами.'],
            useCases: ['Q&A по многим документам', 'Генеративный контент', 'НЛП-саммари', 'Мультиязычная поддержка'],
          },
        ],
        sidebar: {
          blendingEyebrow: 'Смешивание уровней',
          blendingHeading: 'Адаптивные цепочки автоматизации',
          blendingBody: 'Комбинируйте проверку на 1 уровне, микромодели 2 уровня и рассуждения 3 уровня, чтобы уравновесить точность, креатив и соответствие требованиям.',
          blendingCallout: 'Пример: 1 уровень проверяет документы, 2 уровень маршрутизирует, 3 уровень готовит резюме для руководства с учетом углерода и стоимости.',
          blendingHighlights: ['Детерминированная проверка + классификация + саммари в одном пайплайне.', 'Непрерывный расчет стоимости, задержки и CO₂, чтобы выбирать лучший уровень.', 'Операционные команды настраивают пороги и фолбэки без релизов.'],
          sustainabilityEyebrow: 'Экология и экономика',
          sustainabilityHeading: 'Запускайте более «зеленый» интеллект',
          sustainabilityHighlights: ['Минимизируйте энергоемкие облачные вызовы, отдавая приоритет локальной логике.', 'Повторно используйте простаивающие GPU и наблюдаемость, не покупая непрозрачный SaaS.', 'Избавьтесь от vendor lock-in и расходов на egress благодаря портируемому коду.', 'Соблюдайте экологичные практики ИИ без потери возможностей и ROI.'],
        },
      },
      capabilities: {
        eyebrow: 'ВОЗМОЖНОСТИ',
        heading: 'Автоматизационная ткань под вашу отрасль',
        description: 'Каждый модуль переносим, API-first и готов к мобильным сценариям. Собирайте потоки из переиспользуемых ускорителей без замены инструментов.',
        features: [
          {
            title: 'Гибридная интеллектуальная ткань',
            description: 'Сочетайте детерминированный код и специализированных AI-агентов, чтобы каждый поток имел объяснимые гвардrails и измеримый результат.',
            highlight: 'Политики',
          },
          {
            title: 'Наблюдаемость с нулевого дня',
            description: 'Живые ранбуки, линия данных и оценки доверия удерживают людей в цикле, не замедляя релизы.',
            highlight: 'Аудит готов',
          },
          {
            title: 'Композиционные ускорители',
            description: 'Модули для обогащения, проверки и маршрутизации интегрируются с вашими именованиями, секретами и контролями.',
            highlight: 'Расширяйте сами',
          },
        ],
      },
      deliveryPlaybook: {
        eyebrow: 'ПЛЕЙБУК ДОСТАВКИ',
        heading: 'Проектируем как продукт, доставляем как автоматизацию',
        description: 'Человеко-ориентированное исследование соединяется с инженерной дисциплиной. Мы строим вместе с экспертами, доказываем ценность за недели и оставляем поддерживаемый код и PWA.',
        pipeline: [
          {
            title: 'Blueprint Sprint',
            timeframe: 'Дни 1–5',
            description: 'Работаем с владельцами домена, фиксируем ограничения и моделируем влияние в легких песочницах.',
          },
          {
            title: 'Automation Fabric',
            timeframe: 'Недели 2–4',
            description: 'Отправляем готовые к продакшену потоки, используя вашу облачную и CI/CD инфраструктуру.',
          },
          {
            title: 'AI Optimization',
            timeframe: 'Неделя 5+',
            description: 'Постоянно настраиваем промпты, модели и кеширование, чтобы вызовы ИИ оставались локальными или шли по выгодным тарифам.',
          },
        ],
      },
      sustainability: {
        eyebrow: 'УСТОЙЧИВЫЙ ИНТЕЛЛЕКТ',
        heading: 'Интеллектуальные опыты без избыточных выбросов',
        description: 'Самый быстрый путь к зеленому ИИ — переиспользовать существующее. Мы размещаем нагрузки рядом с данными, выбираем оптимальные модели и ведем прозрачный углеродный учет.',
        highlights: [
          {
            title: 'Оркестрация с учетом инфраструктуры',
            description: 'Планирование учитывает углеродные окна и простаивающие мощности до выхода в облачные GPU.',
          },
          {
            title: 'Уважение к гравитации данных',
            description: 'Чувствительные данные не покидают ваше облако; полезные нагрузки обрезаются, токенизируются и кешируются.',
          },
          {
            title: 'Детерминированные фолбэки',
            description: 'Каждое решение ИИ сопровождается кодовым escape hatch, чтобы SLA соблюдались даже при деградации моделей.',
          },
        ],
      },
      stack: {
        eyebrow: 'СТЕК АВТОМАТИЗАЦИИ',
        heading: 'Что мы соединяем',
        description: 'Комбинируйте ускорители, чтобы покрыть всю мобильную программу автоматизации.',
        items: ['Событийные пайплайны', 'Операционные копилоты в реальном времени', 'Движок политик и гвардреилов', 'Единая наблюдаемость', 'Маршрутизация LLM + малых моделей', 'Устойчивое планирование облака'],
      },
      fieldNotes: {
        eyebrow: 'ПОЛЕВЫЕ ЗАМЕТКИ',
        heading: 'Истории команд, строящих ответственно',
        caseStudies: [
          {
            company: 'Vertex Logistics',
            result: 'Аудит тендеров на 72% быстрее',
            quote: 'Брокерская команда переложила обработку исключений и сохранила трассируемость решений. ИИ остается внутри, поэтому расходы предсказуемы.',
          },
          {
            company: 'Northwind Utilities',
            result: 'Меньше выездов на 41%',
            quote: 'Сочетание правил и AI-триажа позволило автоматизировать диагностику сети без изменения регуляторных контролей.',
          },
        ],
      },
      ctaBanner: {
        eyebrow: 'ГОТОВЫ, КОГДА ВЫ ГОТОВЫ',
        heading: 'Запустите пилот автоматизации за 30 дней',
        description:
          'Принесите один процесс, нескольких экспертов и доступ к вашей инфраструктуре. Мы поставим продакшен-PWA, где сочетаются ИИ и алгоритмы, полностью в вашем владении.',
        primaryCta: 'Назначить рабочую сессию',
        secondaryCta: 'Проверить технический чек-лист',
      },
    },
    playbook: {
      documentTitle: 'Изучить плейбук доставки · Automation Fabric',
      hero: {
        eyebrow: 'ПЛЕЙБУК ДОСТАВКИ',
        heading: 'Современные процессы для покупателей автоматизации',
        lead: 'Дайте стейкхолдерам уверенность с плейбуком, сочетающим корпоративную строгость и эксперименты. Каждая стадия снабжена метриками, климатическими чековками и готовыми историями для руководителей.',
        primaryCta: 'Спланировать мой поток',
        secondaryCta: 'На главную',
      },
      immersion: {
        eyebrow: 'ТРЕК ПОГРУЖЕНИЯ',
        heading: 'Как мы заслуживаем доверие за первую неделю',
        description: 'Команды участвуют в сессиях совместного дизайна. Любой артефакт готов к поставке, а руководство видит прогресс каждый день.',
        moments: [
          {
            title: 'Интеграция без трения',
            outcome: 'Карта правил, исключений и API менее чем за неделю.',
            detail: 'Мы подключаемся к дейли, наблюдаем операции и воспроизводим тикеты, чтобы понять, где люди тормозят и где автоматизация безопасна.',
          },
          {
            title: 'Живое прототипирование систем',
            outcome: 'Интерактивные макеты Figma + код для тестов стейкхолдеров.',
            detail: 'Дизайнеры и инженеры создают будущий поток в коллаборативных канвасах, чтобы лидеры могли комментировать и утверждать в реальном времени.',
          },
          {
            title: 'Гармонизация ранбуков',
            outcome: 'Один каноничный плейбук с учетом политики, бренда и регионов.',
            detail: 'Мы превращаем устные знания в живые ранбуки, фиксируем фолбэки и метрики успеха для каждой персоны.',
          },
        ],
      },
      instrumentation: {
        eyebrow: 'ИНСТРУМЕНТИРУЕМ ВСЁ',
        heading: 'Телеметрия и QA вшиты по умолчанию',
        beats: [
          {
            label: 'Телеметрия столов решений',
            description: 'Отслеживаем время утверждений, долю авторазрешений и уверенность ручных вмешательств. Дашборды сопровождаются Loom-гидами по ролям.',
          },
          {
            label: 'Журнал устойчивости',
            description: 'Автоматическое распределение энергии и стоимости на поток, чтобы топ-менеджмент мог демонстрировать зеленую автоматизацию.',
          },
          {
            label: 'QA-сетка опыта',
            description: 'Повторы сессий, проверки доступности и лаборатории устройств, чтобы PWA радовал даже в полевых условиях.',
          },
        ],
        safetyHeading: 'Сигналы безопасности, которые мы не пропускаем',
        safetySignals: ['Двойной мониторинг держит AI и детерминированные пути синхронизированными перед переключением.', 'Кабина руководителя показывает финансы, комплаенс и устойчивость рядом.', 'Аудит-пакеты выгружают все промпты, решения и подтверждения в один клик.'],
      },
      experiments: {
        eyebrow: 'ЭКСПЕРИМЕНТАЛЬНО, НО ОТВЕТСТВЕННО',
        heading: 'Бэклог экспериментов, ускоряющих внедрение',
        description: 'Выберите трек под уровень риска. Оба содержат ревью готовности, углеродные оценки и набор коммуникаций для сейлзов, операций и комплаенса.',
        tracks: [
          {
            title: 'Взлетная полоса пилота',
            summary: 'Запуск измеримого пилота за 30 дней.',
            milestones: ['День 3: утвержденная метрика North Star и базовый дашборд', 'День 10: кликабельная репетиция с экспертами и данными', 'День 25: релиз-кандидат с разрешением безопасности и хуками наблюдаемости'],
          },
          {
            title: 'Ускорение масштабирования',
            summary: 'Перенос пилота в программу для нескольких регионов без переделок.',
            milestones: ['День 35: план параллельного деплоя и сценарии изменений', 'День 45: библиотека AI-гвардреилов локализована под регуляторов', 'День 60: enablement-kit с обучающими клипами и ROI-трекером'],
          },
        ],
        addButton: 'Добавить в план',
      },
    },
    planner: {
      documentTitle: 'Планировать поток · Automation Fabric',
    hero: {
      eyebrow: 'ПЛАН МОЕГО ПОТОКА',
      heading: 'Увидьте план автоматизации до контракта',
      lead: 'Переключайтесь между целями, чтобы понять инвестиции, сроки и защиту. Мы уважаем ваш бренд, инфраструктуру и стандарты доступности.',
      primaryCta: 'Посмотреть плейбук',
      secondaryCta: 'На главную',
    },
    goalMetricLabel: 'KPI запуска',
    workflowGoals: [
        {
          id: 'intake',
          label: 'Модернизировать intake и триаж',
          summary: 'Автоматизируйте прием запросов диалоговыми формами, парсингом вложений и детерминированной маршрутизацией, чтобы люди работали лишь с важными эскалациями.',
          metric: 'Время триажа < 2 минут',
          steps: ['Разверните адаптивные формы на языке команд.', 'Используйте микромодели для классификации срочности, персоны и комплаенса.', 'Маршрутизируйте в потоки или к копилотам с контекстным брифингом.'],
        },
        {
          id: 'fulfillment',
          label: 'Оркестрация исполнения',
          summary: 'Соедините AI-копилотов и RPA, чтобы исполнители получали точные и экологичные планы задач без «вращения стула».',
          metric: '95% исполнений в тот же день',
          steps: ['Отразите ранбуки в исполнимые сервисные чертежи.', 'Генерируйте чек-листы с данными сенсоров и ERP.', 'Отслеживайте SLA, энергозатраты и отзывы в единой консоли.'],
        },
        {
          id: 'governance',
          label: 'Говернанс и отчетность',
          summary: 'Дайте аудиту, риску и руководству мгновенный доступ к каждому решению автоматизации вместе с промптами, политиками и доказательствами.',
          metric: '100% аудируемая автоматизация',
          steps: ['Автоматически формируйте мемо с ссылками на логи, промпты и approvals.', 'Версионируйте гвардреилы как код, чтобы юристы могли диффить.', 'Давайте совету директоров карточки, объединяющие ROI, опыт и устойчивость.'],
        },
      ],
      assurance: {
        eyebrow: 'ГАРАНТИИ',
        heading: 'Каждый план поставляется с защитой',
        tracks: [
          {
            title: 'Лаборатория гвардреилов',
            detail: 'Сценарное тестирование на синтетике и боевых данных, ответственные AI-ревью и red-team, чтобы крайние случаи деградировали мягко.',
          },
          {
            title: 'Управление изменениями',
            detail: 'Контент по ролям, встроенные чемпионы и in-product подсказки. Мы еженедельно измеряем настроение и корректируем UX.',
          },
          {
            title: 'Доска ценности',
            detail: 'Общий cockpit с экономией, часами, избегаемым CO₂ и ростом CSAT, чтобы топ-менеджмент поддерживал масштабирование.',
          },
        ],
      },
      milestones: {
        eyebrow: 'КЛЮЧЕВЫЕ МОМЕНТЫ',
        heading: 'Дорожная карта для руководства',
        highlights: [
          { tag: 'НЕДЕЛЯ 1', title: 'Blueprint sprint', description: 'Совместный дизайн с экспертами, метрики и безопасность утверждены.' },
          { tag: 'НЕДЕЛИ 2–3', title: 'Двойная сборка', description: 'Доставляем детерминированный бэкбон и AI-копилотов с телеметрией.' },
          { tag: 'НЕДЕЛЯ 4+', title: 'Постепенный rollout', description: 'Пилот, сбор доказательств и масштабирование на новые персоны.' },
        ],
      },
      insights: {
        eyebrow: 'ПОЧЕМУ ВЫБИРАЮТ НАС',
        heading: 'Доводы для продукта, операций и финансов',
        tiles: [
          {
            title: 'Операционная разведка',
            description: 'Центр сигналов в реальном времени выявляет блокеры, аномалии и обратную связь, чтобы владельцы реагировали мгновенно.',
          },
          {
            title: 'Климат и стоимость',
            description: 'Каждое решение публикует энергопотребление, минуты GPU и деньги, поэтому лидеры устойчивости вовлечены.',
          },
          {
            title: 'Доказательства для клиентов',
            description: 'Авто-казусы со скриншотами, метриками и цитатами помогают GTM-командам продавать уверенно.',
          },
        ],
      },
    },
  },
  ar: {
    header: {
      eyebrow: 'أتمتة البيانات · الذكاء الاصطناعي · الشفرة',
      brand: 'استوديو Automation Fabric',
      copy: 'امتلك حقوق الأتمتة، وخفّف الاستهلاك الحاسوبي، وابقَ واعيًا بالكربون.',
      nav: {
        landing: 'الرئيسية',
        playbook: 'دليل التسليم',
        planner: 'خطّة سير العمل',
      },
    },
    landing: {
      documentTitle: 'Automation Fabric · استوديو التسليم',
      hero: {
        heading: 'أتمتة بيانات تعيش على بنيتك التحتية وتمزج الذكاء الاصطناعي مع منطق العمل الموثوق.',
        lead: 'نصمّم تجارب أتمتة للأجهزة المحمولة، وتطبيقات ويب تقدمية، ومساعدين يتبنون وضعك الأمني مع تقليل تكلفة الذكاء الاصطناعي وأثره البيئي.',
        promoLabel: 'إطلاق العرض',
        promoCopy: 'الأتمتة الأولى علينا. اختر سير العمل وسنقدّم لك عرضًا متكاملاً لتعرض النتائج داخليًا وخارجيًا بدون التزامات.',
        primaryCta: 'خطّة سير العمل',
        secondaryCta: 'استكشف دليل التسليم',
      },
      metrics: [
        { label: 'ساعات الأتمتة المحررة', value: '18K+', detail: 'لكل ربع بعد الإطلاق' },
        { label: 'مصادر البيانات المنسّقة', value: '42', detail: 'دون استبدال الأدوات الحالية' },
        { label: 'خفض التكاليف التشغيلية', value: '38%', detail: 'بفضل التشغيل على بنيتك' },
      ],
      adaptive: {
        eyebrow: 'إطار الذكاء التكيّفي',
        heading: 'استراتيجية أتمتة متدرجة لتحقيق التوسّع والأمان والاستدامة',
        description:
          'يمكن للعميل استعراض ثلاثة مستويات من البنية التحتية، من الشفرة الحتمية إلى التعزيز الذكي، لفهم كيفية تحديث العمليات بأقصى تحكم وأقل انبعاث.',
        labels: {
          benefits: 'الفوائد',
          useCases: 'حالات الاستخدام المثلى',
        },
        tiers: [
          {
            id: 'tier-1',
            label: 'المستوى 1 · المنطق الأساسي على بنية العميل',
            tagline: 'امتلك المنطق واضبط التكلفة.',
            summary: 'قاعدة شفرة حتمية مستقلة تجسّد منطق الأعمال والعمليات الموثوقة لديك.',
            location: 'يعمل كليًا داخل بنيتك الداخلية أو السحابية الخاصة مع إمكانية تدقيق كاملة.',
            benefits: ['لا تكاليف اشتراك متكررة بفضل مشاريع البناء والنقل لمرة واحدة.', 'سيادة بيانات كاملة متوافقة مع القطاعات المنظمة.', 'مسارات منطق شفافة تجعل المراجعة سهلة.'],
            useCases: ['مسارات ETL', 'محركات قرارات قائمة على القواعد', 'استخراج المستندات', 'تنسيق سير العمل'],
          },
          {
            id: 'tier-2',
            label: 'المستوى 2 · نماذج ذكاء اصطناعي مصغّرة داخلية',
            tagline: 'أتمتة أذكى تحت سقفك.',
            summary: 'نماذج خفيفة مضبوطة للمجال لـ NLP والتصنيف واكتشاف الشذوذ، مُدرّبة على بياناتك وبطاقاتك الرسومية.',
            location: 'تُنشر على عُقد GPU الخاصة بالعميل لضمان الخصوصية وزمن الاستجابة المنخفض.',
            benefits: ['ضبط مخصص يجعل النموذج متمكنًا من مصطلحاتك وتدفقاتك.', 'لا تخرج البيانات من نطاقك، ما يحقق الامتثال افتراضيًا.', 'تشغيلات موفرة للطاقة تعيد استخدام العتاد الحالي.'],
            useCases: ['استخراج النماذج الذكية', 'تصنيف النية', 'التوجيه التنبؤي', 'مساعدون داخليون'],
          },
          {
            id: 'tier-3',
            label: 'المستوى 3 · ذكاء اتحادي عبر نماذج كبيرة خارجية',
            tagline: 'استعن بالسحابة عند الحاجة فقط.',
            summary: 'اتصالات انتقائية مع OpenAI أو Grok أو Anthropic للمهام التي تتطلب استدلالًا عميقًا أو إبداعًا أو لغات متعددة.',
            location: 'يُستدعى عبر واجهات API محكومة بالسياسات مع مسارات احتياطية حتمية محلية.',
            benefits: ['وصول حسب الاستخدام لأحدث قدرات الذكاء العام.', 'منطق التوجيه يضمن خروج المهام المؤهلة فقط.', 'يجمع بين قواعد معرفة واسعة ومحفزاتك وكاشاتك المخصصة.'],
            useCases: ['سؤال وجواب متعدد المستندات', 'محتوى توليدي', 'تلخيص لغة طبيعية', 'دعم متعدد اللغات'],
          },
        ],
        sidebar: {
          blendingEyebrow: 'دمج المستويات',
          blendingHeading: 'ابنِ تدفقات أتمتة تكيّفية',
          blendingBody: 'زاوج بين التحقق في المستوى الأول والنماذج المصغّرة في المستوى الثاني واستدلال المستوى الثالث لتحقيق التوازن بين الدقة والإبداع والامتثال.',
          blendingCallout: 'مثال: تحقق من المستندات في المستوى الأول، صنّفها في الثاني، ثم قدم ملخصات تنفيذية في الثالث مع تسجيل الكربون والتكلفة لكل انتقال.',
          blendingHighlights: ['ادمج التحقق الحتمي والتصنيف والتلخيص في خط واحد.', 'احسب التكلفة والزمن والكربون باستمرار لاختيار أنسب مستوى.', 'يستطيع فريق العمليات ضبط العتبات والمسارات دون إعادة نشر الشفرة.'],
          sustainabilityEyebrow: 'الاستدامة وكفاءة التكلفة',
          sustainabilityHeading: 'أطلق ذكاءً أكثر خضرة',
          sustainabilityHighlights: ['قلل الاعتماد على استدلالات سحابية كثيفة الطاقة من خلال أولوية المنطق المحلي.', 'أعد استخدام وحدات GPU الخاملة وأنظمة الرصد بدلاً من زيادة إنفاق SaaS.', 'تخلّص من احتجاز الموردين ورسوم الخروج مع ملكية شفرة قابلة للنقل.', 'اعتمد ممارسات ذكاء اصطناعي خضراء مع الحفاظ على القدرات والامتثال والعائد.'],
        },
      },
      capabilities: {
        eyebrow: 'القدرات',
        heading: 'نسيج أتمتة مضبوط على مجالك',
        description: 'كل وحدة قابلة للنقل وتعتمد واجهات برمجة التطبيقات وجاهزة للأجهزة المحمولة. اجمع التدفقات من مسرّعات قابلة لإعادة الاستخدام تتكامل مع أدواتك الحالية.',
        features: [
          {
            title: 'نسيج ذكاء هجين',
            description: 'ادمج الشفرة الحتمية مع عملاء ذكاء اصطناعي متخصصين ليحصل كل تدفق على حواجز تفسيرية ونتائج قابلة للقياس.',
            highlight: 'مدفوع بالسياسات',
          },
          {
            title: 'الرصد منذ اليوم الأول',
            description: 'دفاتر تشغيل حية، وسلاسل نسب بيانات، ودرجات ثقة تبقي البشر في الحلقة دون إبطاء الإصدارات.',
            highlight: 'قابل للتدقيق دائمًا',
          },
          {
            title: 'مسرّعات قابلة للتركيب',
            description: 'وحدات للتغذية والتحقق والتوجيه ترتبط مباشرةً بمسميات فرقك وأسرارها وضوابطها.',
            highlight: 'قابل للتوسعة',
          },
        ],
      },
      deliveryPlaybook: {
        eyebrow: 'دليل التسليم',
        heading: 'مصمم كمنتج، يُسلم كأتمتة',
        description: 'يُزاوج الاستكشاف المتمحور حول الإنسان مع الانضباط الهندسي. نبني مع خبرائك، نثبت القيمة خلال أسابيع، ونترك شفرة وتجارب قابلة للصيانة.',
        pipeline: [
          { title: 'سباق المخطط', timeframe: 'الأيام 1-5', description: 'نشارك مالكي المجال، نلتقط القيود، ونحاكي الأثر عبر بيئات خفيفة.' },
          { title: 'نسيج الأتمتة', timeframe: 'الأسابيع 2-4', description: 'نُطلق تدفقات جاهزة للإنتاج تعيد استخدام السحابة ومستودع البيانات والبصمة الحالية.' },
          { title: 'تحسين الذكاء الاصطناعي', timeframe: 'الأسبوع 5+', description: 'نضبط المحفزات والنماذج والتخزين المؤقت باستمرار لإبقاء الاستدعاءات محلية أو ضمن الأسعار المتفق عليها.' },
        ],
      },
      sustainability: {
        eyebrow: 'ذكاء مستدام',
        heading: 'تجارب ذكية بلا انبعاثات متضخمة',
        description: 'أسرع طريقة لذكاء اصطناعي أخضر هي إعادة استخدام ما لديك. ننسق الأعباء قرب بياناتك، نختار النماذج المناسبة الحجم، ونجعل سجل الكربون ظاهرًا.',
        highlights: [
          { title: 'تنسيق واعٍ بالبنية', description: 'يحترم الجدول نوافذ الكربون والقدرات الخاملة قبل اللجوء إلى GPU مستضافة.' },
          { title: 'احترام جاذبية البيانات', description: 'البيانات الحساسة لا تغادر سحابك؛ تُقص AI payloads وتُرمّز وتُخزن لتقليل الحركة.' },
          { title: 'مسارات احتياطية حتمية', description: 'كل قرار ذكاء اصطناعي يقترن بمخرج برمجي يضمن الالتزام بالخدمة حتى لو تراجعت النماذج.' },
        ],
      },
      stack: {
        eyebrow: 'كومة الأتمتة',
        heading: 'ما الذي نوصله',
        description: 'امزج المسرّعات لتغطية كل جانب من برنامج الأتمتة الموجه للهاتف المحمول.',
        items: ['خطوط أنابيب قائمة على الأحداث', 'مساعدون تشغيليون لحظيون', 'محرك السياسات والحواجز', 'رصد موحد', 'توجيه نماذج كبيرة وصغيرة', 'خطط سحابية مستدامة'],
      },
      fieldNotes: {
        eyebrow: 'مذكرات ميدانية',
        heading: 'قصص فرق تبني بمسؤولية',
        caseStudies: [
          { company: 'Vertex Logistics', result: 'تسريع تدقيق العطاءات بنسبة 72%', quote: 'فريق الوساطة حوّل معالجة الاستثناءات مع بقاء كل قرار قابلاً للتتبع. الذكاء الاصطناعي يبقى في بنيتنا لذلك التكلفة متوقعة.' },
          { company: 'Northwind Utilities', result: 'انخفاض زيارات الشاحنات 41%', quote: 'دمج القواعد مع فرز الذكاء الاصطناعي مكّننا من أتمتة التشخيص دون المساس بالضوابط التنظيمية.' },
        ],
      },
      ctaBanner: {
        eyebrow: 'جاهزون متى شئت',
        heading: 'أطلق مشروعًا تجريبيًا خلال 30 يومًا',
        description: 'احضر سير عمل، مجموعة صغيرة من الخبراء، ووصولًا إلى بنيتك المفضلة. سنسلّم PWA جاهزًا للإنتاج يمزج الذكاء الاصطناعي مع الأتمتة الخوارزمية ويكون مملوكًا لك بالكامل.',
        primaryCta: 'احجز جلسة عمل',
        secondaryCta: 'راجع قائمة التحقق التقنية',
      },
    },
    playbook: {
      documentTitle: 'استكشف دليل التسليم · Automation Fabric',
      hero: {
        eyebrow: 'دليل التسليم',
        heading: 'حركات تسليم حديثة لمشتري الأتمتة',
        lead: 'امنح أصحاب المصلحة الثقة بدليل يجمع بين صرامة المؤسسات وروح التجربة. كل مرحلة تحتوي على مقاييس حقيقية وإيصالات استدامة وسرد جاهز للإدارة.',
        primaryCta: 'خطّة سير العمل',
        secondaryCta: 'العودة للرئيسية',
      },
      immersion: {
        eyebrow: 'مسار الغمر',
        heading: 'كيف نكسب الثقة في الأسبوع الأول',
        description: 'تنضم الفرق إلى جلسات عمل مكثفة تشبه سباقات التصميم التعاوني. كل مخرج قابل للتسليم والقيادة ترى تطور القصة يوميًا.',
        moments: [
          {
            title: 'استقبال بلا احتكاك',
            outcome: 'رسم كل قاعدة واستثناء ونقطة API في أقل من أسبوع.',
            detail: 'نشارك في الاجتماعات، ونراقب العمليات، ونعيد تشغيل التذاكر لفهم مواضع التعثر وكيف يمكن للأتمتة أن تتدخل بأمان.',
          },
          {
            title: 'رسم الأنظمة حيًا',
            outcome: 'نماذج Figma + كود تفاعلية جاهزة لاختبار أصحاب المصلحة.',
            detail: 'يبتكر المصممون والمهندسون سير العمل المستقبلي في لوحات تعاونية ليتمكن صانعو القرار من التعليق والمصادقة فورًا.',
          },
          {
            title: 'توحيد كتيبات التشغيل',
            outcome: 'دليل واحد متوافق مع السياسات والعلامة والفروق الإقليمية.',
            detail: 'نحوّل المعرفة الضمنية إلى كتيبات حيّة، نوثق منطق الطوارئ، ونحدد مؤشرات نجاح لكل شخصية.',
          },
        ],
      },
      instrumentation: {
        eyebrow: 'راقب كل شيء',
        heading: 'التليمترية وحلقات الجودة مدمجة',
        beats: [
          {
            label: 'تليمترية مكتب القرار',
            description: 'راقب زمن الموافقة ومعدل الحل التلقائي وثقة التدخل البشري بحسب القناة، مع شروحات Loom لكل دور.',
          },
          {
            label: 'سجل الاستدامة',
            description: 'حساب تلقائي للطاقة والتكلفة لكل سير عمل ليتمكن التنفيذيون من التحدث عن أتمتة أكثر خضرة.',
          },
          {
            label: 'شبكة اختبار التجربة',
            description: 'إعادة تشغيل الجلسات، فحوصات الوصول، ومختبرات الأجهزة تحافظ على تجربة PWA ممتعة حتى مع الاتصال الضعيف.',
          },
        ],
        safetyHeading: 'إشارات الأمان التي لا نتنازل عنها',
        safetySignals: ['مراقبة التشغيل المزدوج تبقي مسارات الذكاء الاصطناعي والحتمية متزامنة قبل التحويل.', 'قمرة القيادة التنفيذية تعرض مؤشرات المالية والامتثال والاستدامة جنبًا إلى جنب.', 'حزم التدقيق تصدر كل محفز وقرار وتوقيع بشري بضغطة واحدة.'],
      },
      experiments: {
        eyebrow: 'تجارب مسؤولة',
        heading: 'سجل تجارب يسرّع التبني',
        description: 'اختر المسار المناسب لشهيتك للمخاطر. كلاهما يشمل مراجعات الجاهزية، تقييم الكربون، وأدوات اتصال استباقية للمبيعات والعمليات والامتثال.',
        tracks: [
          {
            title: 'مدرج التجربة',
            summary: 'أطلق تجربة أتمتة قابلة للقياس خلال 30 يومًا.',
            milestones: ['اليوم 3: اعتماد مؤشر النجمة الشمالية ولوحة الأساس', 'اليوم 10: بروفة قابلة للنقر مع الخبراء والبيانات', 'اليوم 25: نسخة جاهزة معتمدة أمنيًا وبوصلات رصد'],
          },
          {
            title: 'تسريع التوسّع',
            summary: 'حوّل التجربة إلى برنامج متعدد المناطق دون إعادة عمل.',
            milestones: ['اليوم 35: خطة نشر متوازية مع نصوص إدارة التغيير', 'اليوم 45: مكتبة حواجز ذكاء اصطناعي مكيّفة لكل منطقة تنظيمية', 'اليوم 60: حزمة تمكين مع مقاطع تدريب وتتبع ROI'],
          },
        ],
        addButton: 'أضف إلى خطة العمل',
      },
    },
    planner: {
      documentTitle: 'خطّة سير العمل · Automation Fabric',
    hero: {
      eyebrow: 'خطّة سير العمل',
      heading: 'شاهد خطة الأتمتة قبل أي عقد',
      lead: 'بدّل بين الأهداف لتفهم الاستثمار والجدول الزمني ووسائل الحماية. كل شيء يحترم علامتك وبنيتك ومعايير الوصول.',
      primaryCta: 'عرض دليل التسليم',
      secondaryCta: 'العودة للرئيسية',
    },
    goalMetricLabel: 'مؤشر الإطلاق',
    workflowGoals: [
        {
          id: 'intake',
          label: 'تحديث الاستقبال والفرز',
          summary: 'أتمتة عملية استقبال الطلبات بالكامل باستخدام نماذج محادثة وتحليل مرفقات وتوجيه حتمي حتى يتعامل البشر فقط مع التصعيدات عالية القيمة.',
          metric: 'زمن الفرز أقل من دقيقتين',
          steps: ['انشر نماذج تكيفية تعكس لغة الفريق.', 'استخدم نماذج صغيرة لتصنيف الإلحاح والشخصية والمتطلبات التنظيمية.', 'وجّه الطلبات إلى تدفقات حتمية أو مساعدين بشريين مع موجز سياقي.'],
        },
        {
          id: 'fulfillment',
          label: 'تنسيق التنفيذ',
          summary: 'ادمج مساعدين مدعومين بالذكاء الاصطناعي مع أتمتة العمليات الروبوتية لتزويد فرق التنفيذ بخطط دقيقة وواعية بالكربون دون عمل ممل.',
          metric: 'تنفيذ في نفس اليوم بنسبة 95%',
          steps: ['اعكس أدلة التشغيل إلى مخططات خدمية قابلة للتنفيذ.', 'أنشئ قوائم تحقق بمساعدة الذكاء الاصطناعي مدمجة مع بيانات المستشعرات و ERP.', 'تتبّع اتفاقيات الخدمة والطاقة وتعليقات العملاء ضمن لوحة واحدة.'],
        },
        {
          id: 'governance',
          label: 'الحوكمة والتقارير',
          summary: 'امنح التدقيق والمخاطر والقيادة وصولًا فوريًا لكل قرار أتمتة مع المحفزات والسياسات والأدلة.',
          metric: 'أتمتة قابلة للتدقيق 100%',
          steps: ['ولّد مذكرات قرارات تلقائيًا مع روابط السجلات والمحفزات والموافقات.', 'قم بإصدارات لحواجز الحماية مثل الشفرة ليتسنى للفرق القانونية مراجعتها.', 'قدّم لوحات نتائج جاهزة للمجلس تربط ROI وتجربة العملاء والاستدامة.'],
        },
      ],
      assurance: {
        eyebrow: 'ضمانات',
        heading: 'كل خطة تأتي مع وسائل حماية',
        tracks: [
          { title: 'مختبر الحواجز', detail: 'اختبارات سيناريو ببيانات صناعية وحقيقية لضمان تدرج الحالات الحدية بسلاسة، مع مراجعات ذكاء اصطناعي مسؤولة وتمارين Red Team.' },
          { title: 'تمكين التغيير', detail: 'محتوى تدريبي حسب الشخصية، أبطال مدمجون، وتوجيه داخل المنتج. نقيس شعور التبنّي أسبوعيًا ونضبط تجربة المستخدم.' },
          { title: 'لوحة القيمة', detail: 'قمرة مشتركة تعرض التوفير المالي، الساعات المستعادة، الكربون المتفادى، وارتفاع رضا العملاء ليتمكن التنفيذيون من دعم الإطلاق.' },
        ],
      },
      milestones: {
        eyebrow: 'محطات رئيسية',
        heading: 'جدول عرض قابل للمشاركة مع الإدارة',
        highlights: [
          { tag: 'الأسبوع 1', title: 'سباق المخطط', description: 'تشارك مع الخبراء، أغلِق المقاييس، وانهِ موافقات الأمان.' },
          { tag: 'الأسبوع 2-3', title: 'بناء مزدوج', description: 'شغّل العمود الفقري الحتمي ومساعدي الذكاء الاصطناعي مع تليمترية مباشرة.' },
          { tag: 'الأسبوع 4+', title: 'طرح تدريجي', description: 'ابدأ بتجربة، اجمع الأدلة، ووسّع إلى شخصيات إضافية بثقة.' },
        ],
      },
      insights: {
        eyebrow: 'لماذا يختارنا المشترون',
        heading: 'أدلة لفرق المنتج والتشغيل والمالية',
        tiles: [
          { title: 'ذكاء تشغيلي', description: 'مركز إشارات لحظي يكشف العوائق والشذوذ وردود الفعل ليتمكن المالكون من التصرف فورًا.' },
          { title: 'المناخ + التكلفة', description: 'ينشر كل قرار أتمتة استخدام الطاقة ودقائق GPU والأثر المالي ليبقى قادة الاستدامة في الصورة.' },
          { title: 'إثباتات للعملاء', description: 'دراسات حالة مولدة تلقائيًا مع لقطات شاشة ومقاييس واقتباسات لدعم فرق السوق.' },
        ],
      },
    },
  },
  bg: {
    header: {
      eyebrow: 'ДАННИ · ИИ · КОД',
      brand: 'Студио Automation Fabric',
      copy: 'Притежавайте IP-то, намалете изчисленията и мислете за въглерода.',
      nav: {
        landing: 'Начало',
        playbook: 'Ръководство за доставка',
        planner: 'Планиране на потока',
      },
    },
    landing: {
      documentTitle: 'Automation Fabric · Студио за доставка',
      hero: {
        heading: 'Автоматизация на данни, която живее във вашата инфраструктура и комбинира ИИ с логиката, на която вече вярвате.',
        lead: 'Проектираме мобилно ориентирани преживявания, PWA и копилоти, които наследяват вашата сигурност, докато намаляват разхода и екологичния отпечатък.',
        promoLabel: 'Стартирай демо',
        promoCopy: 'Първата автоматизация е от нас. Изберете процес и ще доставим пълно демо, за да покажете резултати без обвързване.',
        primaryCta: 'Планирай потока',
        secondaryCta: 'Виж ръководството',
      },
      metrics: [
        { label: 'Освободени часове автоматизация', value: '18K+', detail: 'на тримесечие след старта' },
        { label: 'Оркестрирани източници на данни', value: '42', detail: 'без подмяна на инструменти' },
        { label: 'Спад на оперативните разходи', value: '38%', detail: 'чрез работа върху вашата инфраструктура' },
      ],
      adaptive: {
        eyebrow: 'АДАПТИВНА РАМКА',
        heading: 'Многостепенна стратегия за автоматизация: мащаб, сигурност и устойчивост',
        description:
          'Клиентите разглеждат три слоя инфраструктура — от детерминиран код до интелигентно подсилване — за да видят как модернизираме операциите с контрол и нисък въглероден отпечатък.',
        labels: {
          benefits: 'Ползи',
          useCases: 'Идеални употреби',
        },
        tiers: [
          {
            id: 'tier-1',
            label: 'Ниво 1 · Основна логика върху инфраструктурата на клиента',
            tagline: 'Притежавайте логиката. Контролирайте цената.',
            summary: 'Детерминиран, самостоятелен код, който описва доверените ви бизнес процеси.',
            location: 'Работи изцяло on-prem или в частен облак с пълна проследимост.',
            benefits: ['Без абонаментни такси благодарение на еднократни проекти.', 'Пълна суверенност на данните за регулирани индустрии.', 'Прозрачни логически пътеки за лесен одит.'],
            useCases: ['ETL процеси', 'Правилни двигатели за решения', 'Обработка на документи', 'Оркестрация на workflow'],
          },
          {
            id: 'tier-2',
            label: 'Ниво 2 · Локални AI микро модели',
            tagline: 'По-умна автоматизация под ваш покрив.',
            summary: 'Леки модели за NLP, класификация и аномалии, обучени върху ваши данни и GPU.',
            location: 'Разгръщат се на GPU клъстерите на клиента за ниска латентност и поверителност.',
            benefits: ['Фин тунинг, който разбира вашия речник.', 'Никакви данни не напускат периметъра ви, съответствие по подразбиране.', 'Енергийно ефективен рантайм върху съществуващ хардуер.'],
            useCases: ['Интелигентно извличане на форми', 'Класификация на намерение', 'Предиктивно рутиране', 'Вътрешни копилоти'],
          },
          {
            id: 'tier-3',
            label: 'Ниво 3 · Федеративен интелект чрез външни LLM',
            tagline: 'Включвайте облака само при нужда.',
            summary: 'Селективни връзки с OpenAI, Grok или Anthropic за натоварвания с дълбоко разсъждение или много езици.',
            location: 'Вика се чрез API под политически контрол с локални детерминирани fallback-и.',
            benefits: ['Плащате само при използване на най-новия общ интелект.', 'Маршрутизацията пуска навън само подходящи задачи.', 'Съчетаваме широки знания с ваши промптове и кешове.'],
            useCases: ['QA по множество документи', 'Генеративно съдържание', 'Естественоезикови резюмета', 'Многоезична поддръжка'],
          },
        ],
        sidebar: {
          blendingEyebrow: 'Смесване на нива',
          blendingHeading: 'Изградете адаптивни потоци',
          blendingBody: 'Съчетавайте валидация от ниво 1, микро модели от ниво 2 и разсъждения от ниво 3 за баланс между точност и креативност.',
          blendingCallout: 'Пример: валидирайте документи на ниво 1, триажирайте на ниво 2 и показвайте резюмета за ръководството на ниво 3 с отчет за въглерод и цена.',
          blendingHighlights: ['Детерминирани проверки + класификация + резюме в един пайплайн.', 'Непрекъснато изчисляване на цена, латентност и въглерод за избор на най-доброто ниво.', 'Оперативните екипи настройват прагове и маршрути без нов релиз.'],
          sustainabilityEyebrow: 'Устойчивост и ефективност',
          sustainabilityHeading: 'Пуснете по-зелен интелект',
          sustainabilityHighlights: ['Намалете енергоемките облачни извиквания чрез приоритет на локална логика.', 'Използвайте свободни GPU и наблюдаемост вместо нов SaaS.', 'Премахнете vendor lock-in и egress разходи чрез преносим код.', 'Следвайте зелени практики без компромис в способностите и ROI.'],
        },
      },
      capabilities: {
        eyebrow: 'ВЪЗМОЖНОСТИ',
        heading: 'Автоматизационна тъкан за вашия домейн',
        description: 'Всеки модул е преносим, API-first и готов за мобилни устройства. Комбинирайте повторно използваеми ускорители без да сменяте инструментите.',
        features: [
          {
            title: 'Хибриден интелигентен слой',
            description: 'Комбинирайте детерминиран код и специализирани AI агенти за обясними гвард рейли и измерими резултати.',
            highlight: 'Политически управляван',
          },
          {
            title: 'Наблюдаемост от ден 0',
            description: 'Живи runbook-и, lineage и скали на доверие държат хората в цикъла без да бавят релийзи.',
            highlight: 'Винаги подлежащ на одит',
          },
          {
            title: 'Композиционни ускорители',
            description: 'Модулите за обогатяване, валидация и рутиране следват именуването, тайните и контролите на вашите екипи.',
            highlight: 'Разширявай по свой вкус',
          },
        ],
      },
      deliveryPlaybook: {
        eyebrow: 'РЪКОВОДСТВО ЗА ДОСТАВКА',
        heading: 'Проектираме като продукт, доставяме като автоматизация',
        description: 'Човекоцентричното проучване се среща с инженерна дисциплина. Създаваме с вашите експерти, доказваме стойност за седмици и оставяме поддържаем код и PWA.',
        pipeline: [
          { title: 'Blueprint Sprint', timeframe: 'Дни 1-5', description: 'Работим с домейн експерти, събираме ограничения и симулираме ефекта.' },
          { title: 'Automation Fabric', timeframe: 'Седмици 2-4', description: 'Доставяме готови за продукция потоци върху вашия облак и CI/CD.' },
          { title: 'AI Optimization', timeframe: 'Седмица 5+', description: 'Постоянно настройваме промптове, модели и кешове за локални или преференциални извиквания.' },
        ],
      },
      sustainability: {
        eyebrow: 'УСТОЙЧИВ ИНТЕЛЕКТ',
        heading: 'Интелигентни преживявания без излишни емисии',
        description: 'Най-бързият път към зелен ИИ е преизползването на наличното. Оркестрираме натоварвания близо до данните, избираме подходящ размер модели и държим въглеродния дневник видим.',
        highlights: [
          { title: 'Оркестрация, съобразена с инфраструктурата', description: 'Графикът се съобразява с въглеродни прозорци и свободни ресурси преди скок към GPU в облака.' },
          { title: 'Уважение към гравитацията на данните', description: 'Чувствителните данни не напускат облака ви; payload-ите се изрязват, токенизират и кешират.' },
          { title: 'Детерминирани fallback-и', description: 'Всяко решение на ИИ има кодов авариен изход, така че SLA се спазва дори при деградация.' },
        ],
      },
      stack: {
        eyebrow: 'АВТОМАТИЗАЦИОНЕН СТЕК',
        heading: 'Какво свързваме',
        description: 'Смесвайте ускорители, за да покриете всяка част от мобилната автоматизационна програма.',
        items: ['Събитийни пайплайни', 'Реал-тайм копилоти за операции', 'Енджин за политики и защити', 'Унифицирана наблюдаемост', 'Маршрутизация LLM + малки модели', 'Устойчиви облачни планове'],
      },
      fieldNotes: {
        eyebrow: 'ПОЛЕВИ ЗАПИСКИ',
        heading: 'Истории на отговорни екипи',
        caseStudies: [
          { company: 'Vertex Logistics', result: '72% по-бързи одити', quote: 'Екипът освободи обработката на изключения и запази пълна проследимост. ИИ остава при нас, така че разходите са предвидими.' },
          { company: 'Northwind Utilities', result: '41% по-малко излизания на терен', quote: 'Комбинацията от правила и AI триаж автоматизира диагностиката на мрежата без да пипа регулаторните контроли.' },
        ],
      },
      ctaBanner: {
        eyebrow: 'ГОТОВИ, КОГАТО И ВИЕ',
        heading: 'Стартирайте пилот за 30 дни',
        description: 'Донесете един процес, малък екип експерти и достъп до инфраструктурата си. Ще доставим PWA, който комбинира ИИ и алгоритми и е изцяло ваша собственост.',
        primaryCta: 'Резервирай работна сесия',
        secondaryCta: 'Прегледай техническия списък',
      },
    },
    playbook: {
      documentTitle: 'Ръководство за доставка · Automation Fabric',
      hero: {
        eyebrow: 'РЪКОВОДСТВО ЗА ДОСТАВКА',
        heading: 'Модерни процеси за купувачи на автоматизация',
        lead: 'Дайте увереност с ръководство, което комбинира корпоративна строгост и експерименти. Всяка фаза идва с реални метрики, устойчиви доказателства и история за лидерите.',
        primaryCta: 'Планирай потока',
        secondaryCta: 'Назад към начало',
      },
      immersion: {
        eyebrow: 'ТРАК НА ПОТАПЯНЕ',
        heading: 'Как печелим доверие за първата седмица',
        description: 'Екипите участват в интензивни ко-дизайн сесии. Всеки артефакт е готов за доставка, а мениджмънтът вижда историята ежедневно.',
        moments: [
          {
            title: 'Интейк без триене',
            outcome: 'Карта на правила, изключения и API за под седмица.',
            detail: 'Присъединяваме се към стендъпи, наблюдаваме операции и преиграваме тикети, за да открием къде автоматизацията може да помогне безопасно.',
          },
          {
            title: 'Живо скициране на системи',
            outcome: 'Интерактивни прототипи Figma + код за тестове със стейкхолдъри.',
            detail: 'Дизайнери и инженери създават бъдещия поток в колаборативни платна, за да могат лидерите да коментират в реално време.',
          },
          {
            title: 'Хармонизиране на runbook-и',
            outcome: 'Един каноничен плейбук, съобразен с политика, марка и региони.',
            detail: 'Превръщаме мълвата в живи ръководства, документираме fallback логика и дефинираме успех за всяка персона.',
          },
        ],
      },
      instrumentation: {
        eyebrow: 'ИНСТРУМЕНТИРАЙ ВСИЧКО',
        heading: 'Телеметрия и QA по подразбиране',
        beats: [
          {
            label: 'Телеметрия на решаващите екипи',
            description: 'Следим време за одобрение, процент авторазрешения и увереност на хората; добавяме Loom разходки по роли.',
          },
          {
            label: 'Ledger за устойчивост',
            description: 'Автоматичен отчет за енергия и цена на поток, за да могат директорите да говорят за по-зелена автоматизация.',
          },
          {
            label: 'QA мрежа за преживяване',
            description: 'Повторения на сесии, проверки за достъпност и лаборатории с устройства пазят PWA приятен дори при слаб интернет.',
          },
        ],
        safetyHeading: 'Сигнали за безопасност без компромис',
        safetySignals: ['Двойно наблюдение синхронизира AI и детерминирани пътеки преди превключване.', 'Изпълнителното табло показва финанси, комплайънс и устойчивост рамо до рамо.', 'Пакетите за одит експортират всички промптове, решения и одобрения с един клик.'],
      },
      experiments: {
        eyebrow: 'ЕКСПЕРИМЕНТАЛНО, НО ОТГОВОРНО',
        heading: 'Беклог от експерименти за ускорено приемане',
        description: 'Изберете трак според риска. И двата включват ревю на готовността, въглеродни оценки и комплекти за комуникация.',
        tracks: [
          {
            title: 'Писта за пилот',
            summary: 'Стартирайте измерим пилот до 30 дни.',
            milestones: ['Ден 3: утвърден North Star и базов дашборд', 'Ден 10: кликабъл репетиции с експерти и данни', 'Ден 25: release candidate с одобрена сигурност и observability hooks'],
          },
          {
            title: 'Ускорено мащабиране',
            summary: 'Преместете пилота към много регионална програма без преработки.',
            milestones: ['Ден 35: план за паралелно внедряване и сценарии за промяна', 'Ден 45: библиотека от guardrails за всяка зона', 'Ден 60: enablement kit с обучения и ROI tracker'],
          },
        ],
        addButton: 'Добави към плана',
      },
    },
    planner: {
      documentTitle: 'План за workflow · Automation Fabric',
    hero: {
      eyebrow: 'ПЛАН ЗА WORKFLOW',
      heading: 'Вижте плана преди договора',
      lead: 'Превключвайте целите, за да разберете инвестицията, графика и защитите. Уважаваме марката, инфраструктурата и достъпността ви.',
      primaryCta: 'Виж ръководството',
      secondaryCta: 'Назад към начало',
    },
    goalMetricLabel: 'KPI за старта',
    workflowGoals: [
        {
          id: 'intake',
          label: 'Модерен intake и триаж',
          summary: 'Автоматизирайте приемането чрез разговорни форми, анализ на прикачени файлове и детерминирано рутиране, така че хората да обработват само високата стойност.',
          metric: 'Triage < 2 минути',
          steps: ['Разгръщайте адаптивни форми на езика на екипите.', 'Използвайте микро модели за класифициране на спешност и комплайънс.', 'Рутирайте към потоци или човешки копилоти с контекстен бриф.'],
        },
        {
          id: 'fulfillment',
          label: 'Оркестрация на изпълнение',
          summary: 'Комбинирайте AI копилоти и RPA, за да предоставите точни и екологични планове без монотонна работа.',
          metric: '95% изпълнение в същия ден',
          steps: ['Отразете плейбуковете в изпълними сервизни чертежи.', 'Генерирайте AI контролни списъци със сензорни и ERP данни.', 'Следете SLA, енергия и обратна връзка в един конзол.'],
        },
        {
          id: 'governance',
          label: 'Говернанс и отчетност',
          summary: 'Дайте на одит, риск и лидери незабавен достъп до всяко решение с промптове, политики и доказателства.',
          metric: '100% одитируема автоматизация',
          steps: ['Автоматично генерирайте мемо с линкове към логове и approvals.', 'Версионирайте guardrails като код, за да сравняват правни и риск екипи.', 'Доставяйте табла за борда с ROI, CX и устойчивост.'],
        },
      ],
      assurance: {
        eyebrow: 'ГАРАНЦИИ',
        heading: 'Всеки план идва с предпазители',
        tracks: [
          { title: 'Лаборатория за guardrails', detail: 'Сценарийно тестване с синтетични и реални данни, отговорни AI ревюта и red-team сесии.' },
          { title: 'Управление на промяната', detail: 'Обучения по персона, вътрешни шампиони и насоки в продукта. Измерваме нагласите всяка седмица и коригираме UX.' },
          { title: 'Табло на стойността', detail: 'Споделен кокпит с икономии, върнати часове, избегнат CO₂ и ръст на CSAT, за да защитите rollout-а.' },
        ],
      },
      milestones: {
        eyebrow: 'КЛЮЧОВИ МОМЕНТИ',
        heading: 'График за представяне пред ръководството',
        highlights: [
          { tag: 'СЕДМИЦА 1', title: 'Blueprint sprint', description: 'Съвместен дизайн с SME, финализирани метрики и сигурност.' },
          { tag: 'СЕДМИЦИ 2-3', title: 'Двоен build', description: 'Доставяме детерминиран гръбнак и AI копилоти с жива телеметрия.' },
          { tag: 'СЕДМИЦА 4+', title: 'Постепенен rollout', description: 'Пилот, събиране на доказателства и разширяване към нови персони.' },
        ],
      },
      insights: {
        eyebrow: 'ЗАЩО НИ ИЗБИРАТ',
        heading: 'Доказателства за продукт, операции и финанси',
        tiles: [
          { title: 'Оперативен интелект', description: 'Център в реално време показва блокери, аномалии и обратна връзка за моментално действие.' },
          { title: 'Климат + цена', description: 'Всяко решение публикува енергия, GPU минути и финансов ефект, така че лидерите по устойчивост да са информирани.' },
          { title: 'Доказателства за клиенти', description: 'Автоматично генерирани казуси със скрийншоти, метрики и цитати за GTM екипите.' },
        ],
      },
    },
  },
}

export const languageOptions: { code: LanguageCode; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
  { code: 'ko', label: '한국어' },
  { code: 'ru', label: 'Русский' },
  { code: 'ar', label: 'العربية' },
  { code: 'bg', label: 'Български' },
]

type I18nContextValue = {
  language: LanguageCode
  setLanguage: (code: LanguageCode) => void
  t: AppCopy
}

const I18nContext = createContext<I18nContextValue>({
  language: 'en',
  setLanguage: () => undefined,
  t: translations.en,
})

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguageCode>('en')

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export const useI18n = () => useContext(I18nContext)

export type { LanguageCode }
