import { createContext, useContext } from 'react'

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

export const translations: Record<LanguageCode, AppCopy> = {
  en: {
    header: {
      eyebrow: 'THE RIGHT TOOL FOR THE TASK',
      brand: 'Automation Fabric Studio',
      copy: 'Practical automation. Built around your business.',
      nav: {
        landing: 'Home',
        playbook: 'How it works',
        planner: 'Find my workflow',
      },
    },
    landing: {
      documentTitle: 'Less busywork. More room to grow. · Automation Fabric Studio',
      hero: {
        heading: 'Less busywork. More room to grow.',
        lead: 'Turn repetitive tasks into reliable workflows. We connect your tools, simplify the handoffs, and use AI where it adds real value.',
        promoLabel: 'Start with one task',
        promoCopy: 'Choose a familiar workflow to see a starter checklist. No sign-up needed.',
        primaryCta: 'Find my workflow',
        secondaryCta: 'See how it works',
      },
      metrics: [
        {
          value: 'Your tools',
          label: 'Built to fit',
          detail: 'Connect the systems your team already uses.',
        },
        {
          value: 'Your data',
          label: 'Your choices',
          detail: 'Choose where information is processed and stored.',
        },
        {
          value: 'Your workflow',
          label: 'Clear ownership',
          detail: 'Keep the code, documentation, and control.',
        },
      ],
      adaptive: {
        eyebrow: 'THE RIGHT TOOL FOR THE TASK',
        heading: 'Simple where possible. Intelligent where useful.',
        description: 'Start with clear rules. Add AI when a task needs help understanding documents, language, or context.',
        labels: {
          benefits: 'Why it helps',
          useCases: 'Good for',
        },
        tiers: [
          {
            id: 'tier-1',
            label: 'Code automation',
            tagline: 'For tasks with clear rules',
            summary: 'Move data, check inputs, and route work using predictable steps.',
            location: 'Can run on your servers or in your chosen cloud.',
            benefits: [
              'Easy to follow and test',
              'Predictable processing costs',
            ],
            useCases: [
              'Data validation',
              'Scheduled reports',
              'Approval routing',
            ],
          },
          {
            id: 'tier-2',
            label: 'Private AI',
            tagline: 'For information that needs interpretation',
            summary: 'Use a focused model to classify messages or extract information from documents.',
            location: 'Can be hosted in your environment when your hardware and requirements support it.',
            benefits: [
              'Models suited to a specific task',
              'Hosting designed around your data needs',
            ],
            useCases: [
              'Document extraction',
              'Request classification',
              'Internal search',
            ],
          },
          {
            id: 'tier-3',
            label: 'Connected AI',
            tagline: 'For work that needs broader reasoning',
            summary: 'Connect to an external AI service to summarize documents or draft responses.',
            location: 'Agree what data can be shared and which provider settings apply before connecting.',
            benefits: [
              'Flexible language capabilities',
              'Review steps for important decisions',
            ],
            useCases: [
              'Summaries',
              'Draft responses',
              'Multilingual content',
            ],
          },
        ],
        sidebar: {
          blendingEyebrow: 'ONE CONNECTED WORKFLOW',
          blendingHeading: 'From incoming task to finished work',
          blendingBody: 'Capture a request, check the details, and send it to the right person. Your team stays in control.',
          blendingCallout: 'Example: read an invoice, check its details, then ask a person to approve it.',
          blendingHighlights: [
            'Test typical inputs and difficult cases.',
            'Agree on access, running costs, and a fallback plan.',
          ],
          sustainabilityEyebrow: 'KEEP IT PRACTICAL',
          sustainabilityHeading: 'Use the resources the task needs',
          sustainabilityHighlights: [
            'Use straightforward code for clear rules and a suitable model for tasks that need AI.',
            'Decide which data is needed, who can access it, and where it can be processed.',
            'Plan what happens when a service is unavailable or a result needs human review.',
          ],
        },
      },
      capabilities: {
        eyebrow: 'BUILT FOR YOUR WORKING DAY',
        heading: 'Less friction at every handoff',
        description: 'Start with the work your team repeats. Build a workflow people can understand, use, and improve.',
        features: [
          {
            title: 'Connect the tools you use',
            description: 'Move information between existing systems so your team spends less time copying and pasting.',
            highlight: 'Fits your setup',
          },
          {
            title: 'Keep decisions visible',
            description: 'See what happened, what needs attention, and where a person should step in.',
            highlight: 'People in control',
          },
          {
            title: 'Make it yours',
            description: 'Keep the code and practical documentation so your team can maintain and extend the workflow.',
            highlight: 'Clear ownership',
          },
        ],
      },
      deliveryPlaybook: {
        eyebrow: 'HOW IT WORKS',
        heading: 'A small start. A clear way forward.',
        description: 'Work through one useful problem, test it with your team, and expand when the result makes sense.',
        pipeline: [
          {
            title: 'Find the friction',
            timeframe: '01',
            description: 'Choose a repetitive task. Map the steps, the people involved, and what a better result looks like.',
          },
          {
            title: 'Try a focused pilot',
            timeframe: '02',
            description: 'Build a small working version. Test real examples and check the difficult cases together.',
          },
          {
            title: 'Make it part of your day',
            timeframe: '03',
            description: 'Agree on hosting, hand over the code and guidance, and make sure someone owns the next steps.',
          },
        ],
      },
      sustainability: {
        eyebrow: 'KEEP IT PRACTICAL',
        heading: 'Use the resources the task needs',
        description: 'Choose the simplest approach that meets your needs, then review its real cost and performance.',
        highlights: [
          {
            title: 'Right-sized tools',
            description: 'Use straightforward code for clear rules and a suitable model for tasks that need AI.',
          },
          {
            title: 'Thoughtful data access',
            description: 'Decide which data is needed, who can access it, and where it can be processed.',
          },
          {
            title: 'A clear fallback',
            description: 'Plan what happens when a service is unavailable or a result needs human review.',
          },
        ],
      },
      stack: {
        eyebrow: 'POSSIBLE BUILDING BLOCKS',
        heading: 'Useful connections, chosen together',
        description: 'The final setup depends on your tools, data access, and workflow.',
        items: [
          'Data imports',
          'Document checks',
          'Approval steps',
          'Scheduled updates',
          'AI-assisted summaries',
          'Activity logs',
        ],
      },
      fieldNotes: {
        eyebrow: 'EXAMPLE WORKFLOWS',
        heading: 'Start with a task you know too well',
        caseStudies: [
          {
            company: 'Documents & data',
            result: 'Give every document a clear next step',
            quote: 'For example: extract invoice details, flag missing information, and send the document for review.',
          },
          {
            company: 'Requests & approvals',
            result: 'Keep requests moving',
            quote: 'For example: collect a request, route it to the right person, and update your team when it is approved.',
          },
        ],
      },
      ctaBanner: {
        eyebrow: 'YOUR NEXT STEP',
        heading: 'What would you like to take off your plate?',
        description: 'Choose a workflow and get a short checklist to help you decide where to start.',
        primaryCta: 'Find my workflow',
        secondaryCta: 'See how it works',
      },
    },
    playbook: {
      documentTitle: 'How it works · Automation Fabric Studio',
      hero: {
        eyebrow: 'HOW IT WORKS',
        heading: 'From a repetitive task to a useful workflow.',
        lead: 'A practical process for finding the right first task, testing a small solution, and making it easy for your team to use.',
        primaryCta: 'Find my workflow',
        secondaryCta: 'Back to overview',
      },
      immersion: {
        eyebrow: 'START WITH THE WORK',
        heading: 'Get clear before you build',
        description: 'A good workflow begins with the people who do the task today.',
        moments: [
          {
            title: 'Walk through one example',
            outcome: 'A shared map of the task',
            detail: 'Show where the work begins, which tools you use, and where it slows down. Include a recent example and a difficult case.',
          },
          {
            title: 'Agree on a useful result',
            outcome: 'A clear measure of success',
            detail: 'Decide what should improve: less re-entry, fewer missed steps, or faster handoffs. Record the starting point so you can compare.',
          },
          {
            title: 'Choose the first version',
            outcome: 'A focused pilot scope',
            detail: 'Set the boundaries, agree which data can be used, and identify where someone needs to review a result.',
          },
        ],
      },
      instrumentation: {
        eyebrow: 'MAKE IT EASY TO TRUST',
        heading: 'Know what happened and what needs you',
        beats: [
          {
            label: 'Visible activity',
            description: 'Keep a useful record of completed steps, failures, and outstanding work.',
          },
          {
            label: 'Human review',
            description: 'Send uncertain or important decisions to a person with enough context to act.',
          },
          {
            label: 'Clear ownership',
            description: 'Agree who monitors the workflow, handles exceptions, and approves changes.',
          },
        ],
        safetyHeading: 'Before it becomes part of daily work',
        safetySignals: [
          'Test typical inputs and difficult cases.',
          'Agree on access, running costs, and a fallback plan.',
        ],
      },
      experiments: {
        eyebrow: 'CHOOSE A SENSIBLE START',
        heading: 'Two ways to try the idea',
        description: 'The right approach depends on how clear the rules are and how much interpretation the task needs.',
        tracks: [
          {
            title: 'Start with clear rules',
            summary: 'A useful first step when the task follows a repeatable pattern.',
            milestones: [
              'Map the inputs and expected outputs.',
              'Test the rules on real examples.',
              'Review errors before expanding.',
            ],
          },
          {
            title: 'Add a focused AI step',
            summary: 'Useful when documents or language vary too much for fixed rules alone.',
            milestones: [
              'Choose a small, representative sample.',
              'Compare AI results with human decisions.',
              'Keep a review step for uncertain results.',
            ],
          },
        ],
        addButton: 'Find a workflow to start with',
      },
    },
    planner: {
      documentTitle: 'Find my workflow · Automation Fabric Studio',
      hero: {
        eyebrow: 'FIND YOUR STARTING POINT',
        heading: 'Which task would you like to simplify?',
        lead: 'Choose the kind of work you repeat most often. Get a starter checklist you can use to explore the idea with your team.',
        primaryCta: 'How it works',
        secondaryCta: 'Back to overview',
      },
      goalMetricLabel: 'A useful first outcome',
      workflowGoals: [
        {
          id: 'intake',
          label: 'Documents & data',
          summary: 'Start with one document type or data source. Look for information your team repeatedly reads, checks, or copies.',
          metric: 'Cleaner information, fewer manual steps',
          steps: [
            'Collect a few typical documents, including one difficult example.',
            'List the fields you need and the checks a person makes today.',
            'Decide which results can move forward and which need review.',
          ],
        },
        {
          id: 'fulfillment',
          label: 'Requests & approvals',
          summary: 'Start with a request that regularly waits for someone to pick it up, approve it, or update its status.',
          metric: 'Clearer handoffs and ownership',
          steps: [
            'Map the people and tools involved from request to completion.',
            'Write down the routing rules and common exceptions.',
            'Choose when to notify someone and when to ask for approval.',
          ],
        },
        {
          id: 'governance',
          label: 'Reporting & updates',
          summary: 'Start with one recurring report or update that takes time to gather and prepare.',
          metric: 'Useful updates with less preparation',
          steps: [
            'List the data sources and who needs the final update.',
            'Define the checks, calculations, and format you use today.',
            'Set a schedule and choose who reviews the update before sharing.',
          ],
        },
      ],
      assurance: {
        eyebrow: 'BEFORE YOU BUILD',
        heading: 'Three things to agree on',
        tracks: [
          {
            title: 'Visible activity',
            detail: 'Keep a useful record of completed steps, failures, and outstanding work.',
          },
          {
            title: 'Human review',
            detail: 'Send uncertain or important decisions to a person with enough context to act.',
          },
          {
            title: 'Clear ownership',
            detail: 'Agree who monitors the workflow, handles exceptions, and approves changes.',
          },
        ],
      },
      milestones: {
        eyebrow: 'TAKE THE NEXT STEP',
        heading: 'Turn your checklist into a small pilot',
        highlights: [
          {
            tag: '01',
            title: 'Find the friction',
            description: 'Choose a repetitive task. Map the steps, the people involved, and what a better result looks like.',
          },
          {
            tag: '02',
            title: 'Try a focused pilot',
            description: 'Build a small working version. Test real examples and check the difficult cases together.',
          },
          {
            tag: '03',
            title: 'Make it part of your day',
            description: 'Agree on hosting, hand over the code and guidance, and make sure someone owns the next steps.',
          },
        ],
      },
      insights: {
        eyebrow: 'QUESTIONS TO KEEP HANDY',
        heading: 'Keep the first version manageable',
        tiles: [
          {
            title: 'Right-sized tools',
            description: 'Use straightforward code for clear rules and a suitable model for tasks that need AI.',
          },
          {
            title: 'Thoughtful data access',
            description: 'Decide which data is needed, who can access it, and where it can be processed.',
          },
          {
            title: 'A clear fallback',
            description: 'Plan what happens when a service is unavailable or a result needs human review.',
          },
        ],
      },
    },
  },
  zh: {
    header: {
      eyebrow: '为任务选择合适工具',
      brand: 'Automation Fabric Studio',
      copy: '围绕您的业务，打造实用自动化。',
      nav: {
        landing: '首页',
        playbook: '实施流程',
        planner: '寻找适合的工作流',
      },
    },
    landing: {
      documentTitle: '减少重复劳动，腾出成长空间。 · Automation Fabric Studio',
      hero: {
        heading: '减少重复劳动，腾出成长空间。',
        lead: '把重复任务变成可靠的工作流。连接现有工具，简化交接，并在确有价值的环节使用 AI。',
        promoLabel: '从一个任务开始',
        promoCopy: '选择熟悉的工作流，查看起步清单。无需注册。',
        primaryCta: '寻找适合的工作流',
        secondaryCta: '实施流程',
      },
      metrics: [
        {
          value: '现有工具',
          label: '适配您的系统',
          detail: '连接团队已经在用的工具。',
        },
        {
          value: '业务数据',
          label: '由您选择',
          detail: '决定信息在哪里处理和存储。',
        },
        {
          value: '您的工作流',
          label: '权责清晰',
          detail: '掌握代码、文档和控制权。',
        },
      ],
      adaptive: {
        eyebrow: '为任务选择合适工具',
        heading: '能简单就简单，需要时再用智能。',
        description: '先梳理清晰规则。需要理解文档、语言或上下文时，再加入 AI。',
        labels: {
          benefits: '带来的帮助',
          useCases: '适合场景',
        },
        tiers: [
          {
            id: 'tier-1',
            label: '代码自动化',
            tagline: '适合规则明确的任务',
            summary: '按可预测的步骤传输数据、检查输入并分派工作。',
            location: '可部署在您的服务器或所选云环境中。',
            benefits: [
              '逻辑便于理解和测试',
              '处理成本便于预估',
            ],
            useCases: [
              '数据校验',
              '定期报告',
              '审批分派',
            ],
          },
          {
            id: 'tier-2',
            label: '私有 AI',
            tagline: '适合需要理解的信息',
            summary: '使用专门模型分类消息，或从文档中提取信息。',
            location: '硬件和需求允许时，可部署在您的环境中。',
            benefits: [
              '模型专注于具体任务',
              '托管方式围绕数据需求设计',
            ],
            useCases: [
              '文档提取',
              '请求分类',
              '内部搜索',
            ],
          },
          {
            id: 'tier-3',
            label: '连接外部 AI',
            tagline: '适合需要综合推理的工作',
            summary: '连接外部 AI 服务，用于文档摘要或回复草稿。',
            location: '连接前，先明确可共享的数据和服务商设置。',
            benefits: [
              '灵活的语言处理能力',
              '重要决策保留人工复核',
            ],
            useCases: [
              '摘要',
              '回复草稿',
              '多语言内容',
            ],
          },
        ],
        sidebar: {
          blendingEyebrow: '连贯的工作流',
          blendingHeading: '从收到任务到完成工作',
          blendingBody: '接收请求、检查信息，再交给合适的人。团队始终掌握控制权。',
          blendingCallout: '示例：读取发票、检查信息，再请负责人审批。',
          blendingHighlights: [
            '测试常见输入和复杂情况。',
            '确认权限、运行成本和备用方案。',
          ],
          sustainabilityEyebrow: '保持务实',
          sustainabilityHeading: '按任务需要配置资源',
          sustainabilityHighlights: [
            '规则明确的环节使用代码，需要 AI 时选择合适模型。',
            '明确需要哪些数据、谁能访问，以及在哪里处理。',
            '提前规划服务不可用或结果需要人工复核时的处理方式。',
          ],
        },
      },
      capabilities: {
        eyebrow: '围绕团队的日常工作',
        heading: '让每次交接更顺畅',
        description: '从团队反复做的任务开始，构建易理解、易使用、易改进的工作流。',
        features: [
          {
            title: '连接现有工具',
            description: '在已有系统之间传递信息，减少复制粘贴。',
            highlight: '适配现有环境',
          },
          {
            title: '让处理过程可见',
            description: '了解已经发生什么、哪里需要关注，以及何时需要人工介入。',
            highlight: '由人掌控',
          },
          {
            title: '让成果属于您',
            description: '保留代码和实用文档，便于团队维护和扩展。',
            highlight: '权责清晰',
          },
        ],
      },
      deliveryPlaybook: {
        eyebrow: '实施流程',
        heading: '小步开始，方向清晰。',
        description: '聚焦一个实际问题，与团队验证成果，确认有效后再扩展。',
        pipeline: [
          {
            title: '找到重复劳动',
            timeframe: '01',
            description: '选择一个重复任务，梳理步骤、参与者和期望改善。',
          },
          {
            title: '尝试聚焦试点',
            timeframe: '02',
            description: '构建小型可用版本，用真实示例一起验证难点。',
          },
          {
            title: '融入日常工作',
            timeframe: '03',
            description: '确定托管方式，交付代码与指引，并明确后续负责人。',
          },
        ],
      },
      sustainability: {
        eyebrow: '保持务实',
        heading: '按任务需要配置资源',
        description: '选择满足需求的简单方案，再评估实际成本和表现。',
        highlights: [
          {
            title: '选择合适工具',
            description: '规则明确的环节使用代码，需要 AI 时选择合适模型。',
          },
          {
            title: '审慎访问数据',
            description: '明确需要哪些数据、谁能访问，以及在哪里处理。',
          },
          {
            title: '准备备用路径',
            description: '提前规划服务不可用或结果需要人工复核时的处理方式。',
          },
        ],
      },
      stack: {
        eyebrow: '可选模块',
        heading: '一起选择实用连接',
        description: '最终配置取决于工具、数据权限和工作流。',
        items: [
          '数据导入',
          '文档检查',
          '审批步骤',
          '定期更新',
          'AI 辅助摘要',
          '活动记录',
        ],
      },
      fieldNotes: {
        eyebrow: '工作流示例',
        heading: '从您再熟悉不过的任务开始',
        caseStudies: [
          {
            company: '文档与数据',
            result: '让每份文档都有明确的下一步',
            quote: '例如：提取发票信息，标记缺失字段，并发送给负责人复核。',
          },
          {
            company: '请求与审批',
            result: '让请求持续向前推进',
            quote: '例如：收集请求，分派给合适的人，审批后通知团队。',
          },
        ],
      },
      ctaBanner: {
        eyebrow: '下一步',
        heading: '您想减轻哪项工作负担？',
        description: '选择一种工作流，获取简短清单，帮助判断从哪里开始。',
        primaryCta: '寻找适合的工作流',
        secondaryCta: '实施流程',
      },
    },
    playbook: {
      documentTitle: '实施流程 · Automation Fabric Studio',
      hero: {
        eyebrow: '实施流程',
        heading: '把重复任务变成实用工作流。',
        lead: '找到合适的首个任务，验证小型方案，并让团队轻松上手。',
        primaryCta: '寻找适合的工作流',
        secondaryCta: '返回概览',
      },
      immersion: {
        eyebrow: '从真实工作开始',
        heading: '动手前先想清楚',
        description: '好的工作流，始于今天实际完成任务的人。',
        moments: [
          {
            title: '走一遍真实示例',
            outcome: '共同梳理任务流程',
            detail: '说明任务从哪里开始、使用哪些工具、哪里耗时。准备一个近期示例和一个复杂情况。',
          },
          {
            title: '明确有用的结果',
            outcome: '清晰的成功标准',
            detail: '确定希望改善什么：减少录入、减少遗漏，或加快交接。记录现状，便于比较。',
          },
          {
            title: '确定首个版本',
            outcome: '聚焦的试点范围',
            detail: '明确边界、可用数据和需要人工复核的环节。',
          },
        ],
      },
      instrumentation: {
        eyebrow: '让过程值得信赖',
        heading: '看清进度与需要您关注的事',
        beats: [
          {
            label: '活动可见',
            description: '保留已完成步骤、错误和待办事项的有效记录。',
          },
          {
            label: '人工复核',
            description: '把不确定或重要的决定交给人，并提供足够上下文。',
          },
          {
            label: '职责明确',
            description: '约定谁监控工作流、处理异常和批准变更。',
          },
        ],
        safetyHeading: '投入日常工作之前',
        safetySignals: [
          '测试常见输入和复杂情况。',
          '确认权限、运行成本和备用方案。',
        ],
      },
      experiments: {
        eyebrow: '选择合适的起点',
        heading: '两种试验思路',
        description: '选择取决于规则有多明确，以及任务需要多少理解判断。',
        tracks: [
          {
            title: '先使用清晰规则',
            summary: '适合处理模式重复、步骤明确的任务。',
            milestones: [
              '梳理输入和预期输出。',
              '用真实示例测试规则。',
              '扩展前复查错误。',
            ],
          },
          {
            title: '加入一个聚焦的 AI 环节',
            summary: '适合文档或语言变化较多、难以完全依靠固定规则的任务。',
            milestones: [
              '选择少量有代表性的样本。',
              '将 AI 结果与人工判断比较。',
              '为不确定结果保留复核步骤。',
            ],
          },
        ],
        addButton: '选择一个起步工作流',
      },
    },
    planner: {
      documentTitle: '寻找适合的工作流 · Automation Fabric Studio',
      hero: {
        eyebrow: '寻找起点',
        heading: '您想简化哪项任务？',
        lead: '选择最常重复的工作类型，获取起步清单，与团队一起探索。',
        primaryCta: '实施流程',
        secondaryCta: '返回概览',
      },
      goalMetricLabel: '首个有用成果',
      workflowGoals: [
        {
          id: 'intake',
          label: '文档与数据',
          summary: '从一种文档或数据源开始，找出团队反复读取、检查或复制的信息。',
          metric: '信息更清晰，手工步骤更少',
          steps: [
            '收集几份常见文档，包括一个复杂示例。',
            '列出所需字段和目前的人工检查。',
            '明确哪些结果可继续流转，哪些需要复核。',
          ],
        },
        {
          id: 'fulfillment',
          label: '请求与审批',
          summary: '从经常等待接手、审批或状态更新的请求开始。',
          metric: '交接更清楚，职责更明确',
          steps: [
            '梳理从提交到完成涉及的人和工具。',
            '写明分派规则和常见异常。',
            '确定何时通知、何时请求审批。',
          ],
        },
        {
          id: 'governance',
          label: '报告与更新',
          summary: '从一份定期报告或耗时的信息汇总开始。',
          metric: '减少准备工作，及时获得信息',
          steps: [
            '列出数据来源和最终接收人。',
            '说明目前的检查、计算和格式。',
            '确定时间安排及发送前的复核人。',
          ],
        },
      ],
      assurance: {
        eyebrow: '构建之前',
        heading: '先就三件事达成一致',
        tracks: [
          {
            title: '活动可见',
            detail: '保留已完成步骤、错误和待办事项的有效记录。',
          },
          {
            title: '人工复核',
            detail: '把不确定或重要的决定交给人，并提供足够上下文。',
          },
          {
            title: '职责明确',
            detail: '约定谁监控工作流、处理异常和批准变更。',
          },
        ],
      },
      milestones: {
        eyebrow: '迈出下一步',
        heading: '把清单变成小型试点',
        highlights: [
          {
            tag: '01',
            title: '找到重复劳动',
            description: '选择一个重复任务，梳理步骤、参与者和期望改善。',
          },
          {
            tag: '02',
            title: '尝试聚焦试点',
            description: '构建小型可用版本，用真实示例一起验证难点。',
          },
          {
            tag: '03',
            title: '融入日常工作',
            description: '确定托管方式，交付代码与指引，并明确后续负责人。',
          },
        ],
      },
      insights: {
        eyebrow: '随时参考的问题',
        heading: '让首个版本保持可控',
        tiles: [
          {
            title: '选择合适工具',
            description: '规则明确的环节使用代码，需要 AI 时选择合适模型。',
          },
          {
            title: '审慎访问数据',
            description: '明确需要哪些数据、谁能访问，以及在哪里处理。',
          },
          {
            title: '准备备用路径',
            description: '提前规划服务不可用或结果需要人工复核时的处理方式。',
          },
        ],
      },
    },
  },
  ko: {
    header: {
      eyebrow: '업무에 맞는 도구',
      brand: 'Automation Fabric Studio',
      copy: '비즈니스에 맞춘 실용적인 자동화.',
      nav: {
        landing: '홈',
        playbook: '진행 방식',
        planner: '맞는 워크플로 찾기',
      },
    },
    landing: {
      documentTitle: '반복 업무는 줄이고, 성장할 여유는 늘리세요. · Automation Fabric Studio',
      hero: {
        heading: '반복 업무는 줄이고, 성장할 여유는 늘리세요.',
        lead: '반복되는 일을 믿고 맡길 수 있는 워크플로로 바꿉니다. 기존 도구를 연결하고 인수인계를 단순하게 만들며, 도움이 되는 곳에 AI를 사용합니다.',
        promoLabel: '작은 업무 하나부터',
        promoCopy: '익숙한 워크플로를 골라 시작 체크리스트를 확인하세요. 가입은 필요 없습니다.',
        primaryCta: '맞는 워크플로 찾기',
        secondaryCta: '진행 방식',
      },
      metrics: [
        {
          value: '기존 도구',
          label: '환경에 맞게',
          detail: '팀이 이미 쓰는 시스템을 연결합니다.',
        },
        {
          value: '업무 데이터',
          label: '선택은 직접',
          detail: '정보를 처리하고 저장할 위치를 정합니다.',
        },
        {
          value: '우리 워크플로',
          label: '명확한 소유권',
          detail: '코드, 문서, 통제권을 확보합니다.',
        },
      ],
      adaptive: {
        eyebrow: '업무에 맞는 도구',
        heading: '단순하게 시작하고, 필요할 때 지능을 더하세요.',
        description: '명확한 규칙부터 정리합니다. 문서, 언어, 맥락을 이해해야 하는 단계에 AI를 더합니다.',
        labels: {
          benefits: '도움이 되는 점',
          useCases: '활용 예',
        },
        tiers: [
          {
            id: 'tier-1',
            label: '코드 자동화',
            tagline: '규칙이 명확한 업무에',
            summary: '예측 가능한 단계로 데이터를 옮기고 입력을 확인하며 업무를 전달합니다.',
            location: '자체 서버나 선택한 클라우드에서 실행할 수 있습니다.',
            benefits: [
              '이해하고 테스트하기 쉬운 로직',
              '예상하기 쉬운 처리 비용',
            ],
            useCases: [
              '데이터 검증',
              '정기 보고',
              '승인 요청 전달',
            ],
          },
          {
            id: 'tier-2',
            label: '프라이빗 AI',
            tagline: '정보 해석이 필요한 업무에',
            summary: '목적에 맞는 모델로 메시지를 분류하거나 문서에서 정보를 추출합니다.',
            location: '하드웨어와 요구사항이 맞으면 자체 환경에 배포할 수 있습니다.',
            benefits: [
              '특정 업무에 맞춘 모델',
              '데이터 요구사항을 고려한 호스팅',
            ],
            useCases: [
              '문서 정보 추출',
              '요청 분류',
              '내부 검색',
            ],
          },
          {
            id: 'tier-3',
            label: '외부 AI 연결',
            tagline: '폭넓은 추론이 필요한 업무에',
            summary: '외부 AI 서비스를 연결해 문서를 요약하거나 답변 초안을 작성합니다.',
            location: '연결 전에 공유할 데이터와 제공업체 설정을 합의합니다.',
            benefits: [
              '다양한 언어 처리 기능',
              '중요한 판단을 위한 검토 단계',
            ],
            useCases: [
              '요약',
              '답변 초안',
              '다국어 콘텐츠',
            ],
          },
        ],
        sidebar: {
          blendingEyebrow: '하나로 이어지는 워크플로',
          blendingHeading: '업무 접수부터 완료까지',
          blendingBody: '요청을 받고 내용을 확인한 뒤 담당자에게 전달합니다. 팀이 통제권을 유지합니다.',
          blendingCallout: '예: 청구서를 읽고 내용을 확인한 다음 담당자에게 승인을 요청합니다.',
          blendingHighlights: [
            '일반 입력과 어려운 사례를 시험합니다.',
            '접근 권한, 운영 비용, 대체 절차를 합의합니다.',
          ],
          sustainabilityEyebrow: '실용성을 중심으로',
          sustainabilityHeading: '업무에 필요한 만큼의 자원',
          sustainabilityHighlights: [
            '규칙이 분명한 일에는 코드를, AI가 필요한 일에는 적합한 모델을 사용합니다.',
            '어떤 데이터가 필요하고 누가 접근하며 어디서 처리할지 정합니다.',
            '서비스가 중단되거나 결과를 사람이 검토해야 할 때의 절차를 준비합니다.',
          ],
        },
      },
      capabilities: {
        eyebrow: '팀의 일상에 맞게',
        heading: '인수인계를 더 매끄럽게',
        description: '팀이 반복하는 일부터 시작해 이해하고 사용하고 개선하기 쉬운 워크플로를 만듭니다.',
        features: [
          {
            title: '기존 도구 연결',
            description: '사용 중인 시스템 사이로 정보를 전달해 복사와 붙여넣기에 드는 수고를 줄입니다.',
            highlight: '기존 환경에 맞게',
          },
          {
            title: '판단 과정을 투명하게',
            description: '완료된 일, 주의가 필요한 일, 사람이 개입해야 하는 지점을 확인합니다.',
            highlight: '사람이 통제',
          },
          {
            title: '직접 소유하고 확장',
            description: '코드와 실용적인 문서를 받아 팀이 유지하고 확장할 수 있습니다.',
            highlight: '명확한 소유권',
          },
        ],
      },
      deliveryPlaybook: {
        eyebrow: '진행 방식',
        heading: '작게 시작해 방향을 분명하게.',
        description: '실제 문제 하나에 집중하고 팀과 검증한 뒤, 효과를 확인하며 확장합니다.',
        pipeline: [
          {
            title: '불편한 지점 찾기',
            timeframe: '01',
            description: '반복 업무를 고르고 단계, 참여자, 원하는 개선점을 정리합니다.',
          },
          {
            title: '집중된 파일럿 시도',
            timeframe: '02',
            description: '작동하는 작은 버전을 만들고 실제 사례와 어려운 경우를 함께 시험합니다.',
          },
          {
            title: '일상 업무로 정착',
            timeframe: '03',
            description: '호스팅을 정하고 코드와 안내를 전달하며 다음 단계의 책임자를 정합니다.',
          },
        ],
      },
      sustainability: {
        eyebrow: '실용성을 중심으로',
        heading: '업무에 필요한 만큼의 자원',
        description: '요구사항을 만족하는 단순한 방법을 고르고 실제 비용과 성능을 살펴봅니다.',
        highlights: [
          {
            title: '적합한 도구 선택',
            description: '규칙이 분명한 일에는 코드를, AI가 필요한 일에는 적합한 모델을 사용합니다.',
          },
          {
            title: '신중한 데이터 접근',
            description: '어떤 데이터가 필요하고 누가 접근하며 어디서 처리할지 정합니다.',
          },
          {
            title: '명확한 대안 마련',
            description: '서비스가 중단되거나 결과를 사람이 검토해야 할 때의 절차를 준비합니다.',
          },
        ],
      },
      stack: {
        eyebrow: '선택 가능한 구성 요소',
        heading: '필요한 연결을 함께 선택',
        description: '최종 구성은 도구, 데이터 권한, 워크플로에 따라 달라집니다.',
        items: [
          '데이터 가져오기',
          '문서 확인',
          '승인 단계',
          '정기 업데이트',
          'AI 요약',
          '활동 기록',
        ],
      },
      fieldNotes: {
        eyebrow: '워크플로 예시',
        heading: '너무 익숙한 업무부터 시작하세요',
        caseStudies: [
          {
            company: '문서와 데이터',
            result: '모든 문서에 분명한 다음 단계',
            quote: '예: 청구서 정보를 추출하고 누락된 항목을 표시한 뒤 검토를 요청합니다.',
          },
          {
            company: '요청과 승인',
            result: '멈추지 않고 이어지는 요청',
            quote: '예: 요청을 모아 담당자에게 전달하고 승인되면 팀에 알립니다.',
          },
        ],
      },
      ctaBanner: {
        eyebrow: '다음 단계',
        heading: '어떤 업무 부담을 덜고 싶으세요?',
        description: '워크플로를 선택하고 시작점을 정하는 데 도움이 되는 짧은 체크리스트를 받아보세요.',
        primaryCta: '맞는 워크플로 찾기',
        secondaryCta: '진행 방식',
      },
    },
    playbook: {
      documentTitle: '진행 방식 · Automation Fabric Studio',
      hero: {
        eyebrow: '진행 방식',
        heading: '반복 업무에서 유용한 워크플로로.',
        lead: '첫 업무를 고르고 작은 해결책을 시험해 팀이 쉽게 사용할 수 있도록 하는 실용적인 과정입니다.',
        primaryCta: '맞는 워크플로 찾기',
        secondaryCta: '개요로 돌아가기',
      },
      immersion: {
        eyebrow: '실제 업무부터',
        heading: '만들기 전에 명확하게',
        description: '좋은 워크플로는 지금 그 일을 하는 사람에게서 시작합니다.',
        moments: [
          {
            title: '실제 사례 살펴보기',
            outcome: '함께 그린 업무 지도',
            detail: '일이 시작되는 곳, 사용하는 도구, 지연되는 지점을 보여주세요. 최근 사례와 어려운 사례를 포함합니다.',
          },
          {
            title: '유용한 결과 합의',
            outcome: '분명한 성공 기준',
            detail: '재입력 감소, 누락 방지, 빠른 인수인계 중 무엇을 개선할지 정하고 비교할 현재 상태를 기록합니다.',
          },
          {
            title: '첫 버전 정하기',
            outcome: '집중된 파일럿 범위',
            detail: '경계와 사용할 데이터를 정하고 사람이 결과를 검토할 지점을 확인합니다.',
          },
        ],
      },
      instrumentation: {
        eyebrow: '믿고 쓸 수 있도록',
        heading: '진행 상황과 필요한 개입을 확인하세요',
        beats: [
          {
            label: '확인 가능한 활동',
            description: '완료 단계, 오류, 남은 작업을 유용한 기록으로 남깁니다.',
          },
          {
            label: '사람의 검토',
            description: '불확실하거나 중요한 판단을 충분한 맥락과 함께 사람에게 전달합니다.',
          },
          {
            label: '분명한 책임',
            description: '모니터링, 예외 처리, 변경 승인을 누가 맡을지 정합니다.',
          },
        ],
        safetyHeading: '일상에 적용하기 전에',
        safetySignals: [
          '일반 입력과 어려운 사례를 시험합니다.',
          '접근 권한, 운영 비용, 대체 절차를 합의합니다.',
        ],
      },
      experiments: {
        eyebrow: '알맞은 시작점',
        heading: '아이디어를 시험하는 두 가지 방법',
        description: '규칙이 얼마나 분명하고 해석이 얼마나 필요한지에 따라 선택합니다.',
        tracks: [
          {
            title: '명확한 규칙부터',
            summary: '반복되는 패턴이 있는 업무에 적합한 첫 단계입니다.',
            milestones: [
              '입력과 기대 출력을 정리합니다.',
              '실제 사례로 규칙을 시험합니다.',
              '확장 전에 오류를 검토합니다.',
            ],
          },
          {
            title: '집중된 AI 단계 추가',
            summary: '고정 규칙만으로 처리하기 어려운 문서와 언어에 유용합니다.',
            milestones: [
              '대표적인 소량의 샘플을 고릅니다.',
              'AI 결과와 사람의 판단을 비교합니다.',
              '불확실한 결과에는 검토를 남깁니다.',
            ],
          },
        ],
        addButton: '시작할 워크플로 찾기',
      },
    },
    planner: {
      documentTitle: '맞는 워크플로 찾기 · Automation Fabric Studio',
      hero: {
        eyebrow: '시작점 찾기',
        heading: '어떤 업무를 간단하게 만들고 싶으세요?',
        lead: '가장 자주 반복하는 업무를 고르세요. 팀과 아이디어를 살펴볼 시작 체크리스트를 확인할 수 있습니다.',
        primaryCta: '진행 방식',
        secondaryCta: '개요로 돌아가기',
      },
      goalMetricLabel: '기대할 첫 성과',
      workflowGoals: [
        {
          id: 'intake',
          label: '문서와 데이터',
          summary: '한 종류의 문서나 데이터부터 시작합니다. 팀이 반복해서 읽고 확인하고 복사하는 정보를 찾아보세요.',
          metric: '더 깔끔한 정보와 적은 수작업',
          steps: [
            '일반 문서 몇 개와 어려운 사례 하나를 모읍니다.',
            '필요한 항목과 현재의 수동 확인을 적습니다.',
            '진행 가능한 결과와 검토가 필요한 결과를 정합니다.',
          ],
        },
        {
          id: 'fulfillment',
          label: '요청과 승인',
          summary: '담당자 배정, 승인, 상태 업데이트를 기다리는 요청부터 시작하세요.',
          metric: '분명한 인수인계와 책임',
          steps: [
            '접수부터 완료까지 사람과 도구를 정리합니다.',
            '전달 규칙과 흔한 예외를 기록합니다.',
            '알림과 승인 요청의 시점을 정합니다.',
          ],
        },
        {
          id: 'governance',
          label: '보고와 업데이트',
          summary: '정보를 모으고 작성하는 데 시간이 드는 정기 보고 하나부터 시작하세요.',
          metric: '준비 부담을 줄인 유용한 업데이트',
          steps: [
            '데이터 출처와 최종 수신자를 적습니다.',
            '현재의 검증, 계산, 형식을 정합니다.',
            '일정과 공유 전 검토자를 정합니다.',
          ],
        },
      ],
      assurance: {
        eyebrow: '만들기 전에',
        heading: '먼저 합의할 세 가지',
        tracks: [
          {
            title: '확인 가능한 활동',
            detail: '완료 단계, 오류, 남은 작업을 유용한 기록으로 남깁니다.',
          },
          {
            title: '사람의 검토',
            detail: '불확실하거나 중요한 판단을 충분한 맥락과 함께 사람에게 전달합니다.',
          },
          {
            title: '분명한 책임',
            detail: '모니터링, 예외 처리, 변경 승인을 누가 맡을지 정합니다.',
          },
        ],
      },
      milestones: {
        eyebrow: '다음 단계로',
        heading: '체크리스트를 작은 파일럿으로',
        highlights: [
          {
            tag: '01',
            title: '불편한 지점 찾기',
            description: '반복 업무를 고르고 단계, 참여자, 원하는 개선점을 정리합니다.',
          },
          {
            tag: '02',
            title: '집중된 파일럿 시도',
            description: '작동하는 작은 버전을 만들고 실제 사례와 어려운 경우를 함께 시험합니다.',
          },
          {
            tag: '03',
            title: '일상 업무로 정착',
            description: '호스팅을 정하고 코드와 안내를 전달하며 다음 단계의 책임자를 정합니다.',
          },
        ],
      },
      insights: {
        eyebrow: '기억해 둘 질문',
        heading: '첫 버전을 감당할 수 있는 범위로',
        tiles: [
          {
            title: '적합한 도구 선택',
            description: '규칙이 분명한 일에는 코드를, AI가 필요한 일에는 적합한 모델을 사용합니다.',
          },
          {
            title: '신중한 데이터 접근',
            description: '어떤 데이터가 필요하고 누가 접근하며 어디서 처리할지 정합니다.',
          },
          {
            title: '명확한 대안 마련',
            description: '서비스가 중단되거나 결과를 사람이 검토해야 할 때의 절차를 준비합니다.',
          },
        ],
      },
    },
  },
  ru: {
    header: {
      eyebrow: 'ИНСТРУМЕНТ ПОД ЗАДАЧУ',
      brand: 'Automation Fabric Studio',
      copy: 'Практичная автоматизация для вашего бизнеса.',
      nav: {
        landing: 'Главная',
        playbook: 'Как это работает',
        planner: 'Выбрать процесс',
      },
    },
    landing: {
      documentTitle: 'Меньше рутины. Больше возможностей. · Automation Fabric Studio',
      hero: {
        heading: 'Меньше рутины. Больше возможностей.',
        lead: 'Превращаем повторяющиеся задачи в понятные рабочие процессы. Связываем ваши инструменты, упрощаем передачу работы и используем ИИ там, где он полезен.',
        promoLabel: 'Начните с одной задачи',
        promoCopy: 'Выберите знакомый процесс и получите список первых шагов. Регистрация не нужна.',
        primaryCta: 'Выбрать процесс',
        secondaryCta: 'Как это работает',
      },
      metrics: [
        {
          value: 'Ваши инструменты',
          label: 'Под вашу среду',
          detail: 'Связываем системы, которыми уже пользуется команда.',
        },
        {
          value: 'Ваши данные',
          label: 'Ваш выбор',
          detail: 'Вы решаете, где обрабатывать и хранить информацию.',
        },
        {
          value: 'Ваш процесс',
          label: 'Ясная ответственность',
          detail: 'Код, документация и управление остаются у вас.',
        },
      ],
      adaptive: {
        eyebrow: 'ИНСТРУМЕНТ ПОД ЗАДАЧУ',
        heading: 'Простые решения. ИИ по делу.',
        description: 'Начните с понятных правил. Добавляйте ИИ, когда нужно понимать документы, язык или контекст.',
        labels: {
          benefits: 'Что это даёт',
          useCases: 'Подходит для',
        },
        tiers: [
          {
            id: 'tier-1',
            label: 'Автоматизация кодом',
            tagline: 'Для задач с чёткими правилами',
            summary: 'Передача данных, проверка входящих сведений и маршрутизация работы по предсказуемым шагам.',
            location: 'Можно запускать на ваших серверах или в выбранном облаке.',
            benefits: [
              'Логику легко понять и проверить',
              'Предсказуемые затраты на обработку',
            ],
            useCases: [
              'Проверка данных',
              'Регулярные отчёты',
              'Маршрутизация согласований',
            ],
          },
          {
            id: 'tier-2',
            label: 'Частный ИИ',
            tagline: 'Когда информацию нужно понять',
            summary: 'Специализированная модель классифицирует сообщения или извлекает сведения из документов.',
            location: 'Размещение в вашей среде возможно, если позволяют оборудование и требования.',
            benefits: [
              'Модель для конкретной задачи',
              'Размещение с учётом требований к данным',
            ],
            useCases: [
              'Извлечение данных',
              'Классификация запросов',
              'Внутренний поиск',
            ],
          },
          {
            id: 'tier-3',
            label: 'Внешний ИИ',
            tagline: 'Для задач с широким контекстом',
            summary: 'Подключение внешнего ИИ для резюме документов или подготовки ответов.',
            location: 'До подключения согласуем допустимые данные и настройки поставщика.',
            benefits: [
              'Гибкая работа с языком',
              'Проверка важных решений человеком',
            ],
            useCases: [
              'Краткие резюме',
              'Черновики ответов',
              'Многоязычные тексты',
            ],
          },
        ],
        sidebar: {
          blendingEyebrow: 'ЕДИНЫЙ РАБОЧИЙ ПРОЦЕСС',
          blendingHeading: 'От новой задачи до результата',
          blendingBody: 'Получить запрос, проверить детали и передать нужному человеку. Команда сохраняет управление.',
          blendingCallout: 'Пример: прочитать счёт, проверить сведения и запросить одобрение ответственного.',
          blendingHighlights: [
            'Проверьте обычные данные и сложные случаи.',
            'Согласуйте доступ, текущие затраты и запасной план.',
          ],
          sustainabilityEyebrow: 'ПРАКТИЧНЫЕ РЕШЕНИЯ',
          sustainabilityHeading: 'Ресурсы по потребностям задачи',
          sustainabilityHighlights: [
            'Используйте код для чётких правил и подходящую модель для задач с ИИ.',
            'Определите нужные данные, права доступа и место обработки.',
            'Подготовьтесь к недоступности сервиса и результатам, которые требуют проверки человеком.',
          ],
        },
      },
      capabilities: {
        eyebrow: 'ДЛЯ ПОВСЕДНЕВНОЙ РАБОТЫ',
        heading: 'Меньше задержек при передаче задач',
        description: 'Начните с повторяющейся работы и создайте процесс, который легко понять, использовать и улучшать.',
        features: [
          {
            title: 'Свяжите привычные инструменты',
            description: 'Передавайте информацию между существующими системами и сократите ручное копирование.',
            highlight: 'Под вашу среду',
          },
          {
            title: 'Сделайте решения видимыми',
            description: 'Понимайте, что произошло, что требует внимания и когда нужен человек.',
            highlight: 'Под контролем команды',
          },
          {
            title: 'Развивайте своими силами',
            description: 'Получите код и практичную документацию для поддержки и развития процесса.',
            highlight: 'Ясная ответственность',
          },
        ],
      },
      deliveryPlaybook: {
        eyebrow: 'КАК ЭТО РАБОТАЕТ',
        heading: 'Небольшой старт. Понятный путь.',
        description: 'Решите одну полезную задачу, проверьте результат с командой и расширяйте решение по мере необходимости.',
        pipeline: [
          {
            title: 'Найдите источник рутины',
            timeframe: '01',
            description: 'Выберите повторяющуюся задачу. Опишите шаги, участников и желаемое улучшение.',
          },
          {
            title: 'Проверьте небольшой пилот',
            timeframe: '02',
            description: 'Создайте рабочую версию и вместе проверьте обычные примеры и сложные случаи.',
          },
          {
            title: 'Встройте в повседневную работу',
            timeframe: '03',
            description: 'Согласуйте размещение, получите код и инструкции, назначьте ответственного за дальнейшие шаги.',
          },
        ],
      },
      sustainability: {
        eyebrow: 'ПРАКТИЧНЫЕ РЕШЕНИЯ',
        heading: 'Ресурсы по потребностям задачи',
        description: 'Выберите простой подход, который отвечает требованиям, затем оцените реальные затраты и качество.',
        highlights: [
          {
            title: 'Подходящие инструменты',
            description: 'Используйте код для чётких правил и подходящую модель для задач с ИИ.',
          },
          {
            title: 'Продуманный доступ к данным',
            description: 'Определите нужные данные, права доступа и место обработки.',
          },
          {
            title: 'Понятный запасной путь',
            description: 'Подготовьтесь к недоступности сервиса и результатам, которые требуют проверки человеком.',
          },
        ],
      },
      stack: {
        eyebrow: 'ВОЗМОЖНЫЕ КОМПОНЕНТЫ',
        heading: 'Полезные связи выбираем вместе',
        description: 'Итоговая конфигурация зависит от инструментов, доступа к данным и процесса.',
        items: [
          'Импорт данных',
          'Проверка документов',
          'Согласования',
          'Регулярные обновления',
          'Резюме с помощью ИИ',
          'Журнал действий',
        ],
      },
      fieldNotes: {
        eyebrow: 'ПРИМЕРЫ ПРОЦЕССОВ',
        heading: 'Начните с хорошо знакомой задачи',
        caseStudies: [
          {
            company: 'Документы и данные',
            result: 'Понятный следующий шаг для каждого документа',
            quote: 'Например: извлечь данные счёта, отметить пропуски и передать документ на проверку.',
          },
          {
            company: 'Запросы и согласования',
            result: 'Помогите запросам двигаться дальше',
            quote: 'Например: принять запрос, направить ответственному и сообщить команде об одобрении.',
          },
        ],
      },
      ctaBanner: {
        eyebrow: 'СЛЕДУЮЩИЙ ШАГ',
        heading: 'Какую работу вы хотели бы упростить?',
        description: 'Выберите процесс и получите короткий список шагов, который поможет определить, с чего начать.',
        primaryCta: 'Выбрать процесс',
        secondaryCta: 'Как это работает',
      },
    },
    playbook: {
      documentTitle: 'Как это работает · Automation Fabric Studio',
      hero: {
        eyebrow: 'КАК ЭТО РАБОТАЕТ',
        heading: 'От повторяющейся задачи к полезному процессу.',
        lead: 'Практичный путь: выбрать первую задачу, проверить небольшое решение и сделать его удобным для команды.',
        primaryCta: 'Выбрать процесс',
        secondaryCta: 'Назад к обзору',
      },
      immersion: {
        eyebrow: 'НАЧНИТЕ С РАБОТЫ',
        heading: 'Разберитесь до начала разработки',
        description: 'Хороший процесс начинается с людей, которые выполняют задачу сегодня.',
        moments: [
          {
            title: 'Разберите один пример',
            outcome: 'Общая схема задачи',
            detail: 'Покажите начало работы, инструменты и места задержек. Подготовьте недавний пример и сложный случай.',
          },
          {
            title: 'Согласуйте полезный результат',
            outcome: 'Понятный критерий успеха',
            detail: 'Решите, что улучшить: повторный ввод, пропущенные шаги или передачу работы. Зафиксируйте исходное состояние.',
          },
          {
            title: 'Выберите первую версию',
            outcome: 'Чёткие границы пилота',
            detail: 'Определите рамки, доступные данные и этапы, на которых нужна проверка человеком.',
          },
        ],
      },
      instrumentation: {
        eyebrow: 'ПОНЯТНЫЙ И НАДЁЖНЫЙ ПРОЦЕСС',
        heading: 'Видно, что произошло и где нужны вы',
        beats: [
          {
            label: 'Видимые действия',
            description: 'Сохраняйте полезную историю завершённых шагов, ошибок и открытых задач.',
          },
          {
            label: 'Проверка человеком',
            description: 'Передавайте неопределённые или важные решения человеку вместе с нужным контекстом.',
          },
          {
            label: 'Ясная ответственность',
            description: 'Назначьте тех, кто следит за процессом, разбирает исключения и согласует изменения.',
          },
        ],
        safetyHeading: 'До перехода к ежедневной работе',
        safetySignals: [
          'Проверьте обычные данные и сложные случаи.',
          'Согласуйте доступ, текущие затраты и запасной план.',
        ],
      },
      experiments: {
        eyebrow: 'РАЗУМНЫЙ ПЕРВЫЙ ШАГ',
        heading: 'Два способа проверить идею',
        description: 'Выбор зависит от ясности правил и того, насколько задача требует интерпретации.',
        tracks: [
          {
            title: 'Начните с чётких правил',
            summary: 'Подходит, когда задача выполняется по повторяемой схеме.',
            milestones: [
              'Опишите входные данные и ожидаемый результат.',
              'Проверьте правила на реальных примерах.',
              'Разберите ошибки до расширения.',
            ],
          },
          {
            title: 'Добавьте узкую задачу для ИИ',
            summary: 'Полезно, когда документы или язык слишком разнообразны для фиксированных правил.',
            milestones: [
              'Выберите небольшую представительную выборку.',
              'Сравните ИИ с решениями людей.',
              'Оставьте проверку неоднозначных результатов.',
            ],
          },
        ],
        addButton: 'Выбрать первый процесс',
      },
    },
    planner: {
      documentTitle: 'Выбрать процесс · Automation Fabric Studio',
      hero: {
        eyebrow: 'НАЙДИТЕ ОТПРАВНУЮ ТОЧКУ',
        heading: 'Какую задачу вы хотите упростить?',
        lead: 'Выберите работу, которую повторяете чаще всего. Получите список первых шагов для обсуждения с командой.',
        primaryCta: 'Как это работает',
        secondaryCta: 'Назад к обзору',
      },
      goalMetricLabel: 'Полезный первый результат',
      workflowGoals: [
        {
          id: 'intake',
          label: 'Документы и данные',
          summary: 'Начните с одного вида документов или источника данных. Найдите сведения, которые команда снова и снова читает, проверяет или копирует.',
          metric: 'Чище данные, меньше ручных шагов',
          steps: [
            'Соберите несколько обычных документов и один сложный пример.',
            'Выпишите нужные поля и текущие ручные проверки.',
            'Определите, какие результаты можно передавать дальше, а какие надо проверять.',
          ],
        },
        {
          id: 'fulfillment',
          label: 'Запросы и согласования',
          summary: 'Начните с запроса, который часто ждёт ответственного, одобрения или обновления статуса.',
          metric: 'Понятная передача задач и ответственность',
          steps: [
            'Опишите людей и инструменты от запроса до завершения.',
            'Запишите правила маршрутизации и частые исключения.',
            'Решите, когда уведомлять, а когда запрашивать одобрение.',
          ],
        },
        {
          id: 'governance',
          label: 'Отчёты и обновления',
          summary: 'Начните с одного регулярного отчёта, на сбор и подготовку которого уходит время.',
          metric: 'Полезные обновления с меньшей подготовкой',
          steps: [
            'Перечислите источники данных и получателей.',
            'Опишите текущие проверки, расчёты и формат.',
            'Выберите расписание и проверяющего перед отправкой.',
          ],
        },
      ],
      assurance: {
        eyebrow: 'ДО РАЗРАБОТКИ',
        heading: 'Три вопроса для согласования',
        tracks: [
          {
            title: 'Видимые действия',
            detail: 'Сохраняйте полезную историю завершённых шагов, ошибок и открытых задач.',
          },
          {
            title: 'Проверка человеком',
            detail: 'Передавайте неопределённые или важные решения человеку вместе с нужным контекстом.',
          },
          {
            title: 'Ясная ответственность',
            detail: 'Назначьте тех, кто следит за процессом, разбирает исключения и согласует изменения.',
          },
        ],
      },
      milestones: {
        eyebrow: 'СЛЕДУЮЩИЙ ШАГ',
        heading: 'От списка шагов к небольшому пилоту',
        highlights: [
          {
            tag: '01',
            title: 'Найдите источник рутины',
            description: 'Выберите повторяющуюся задачу. Опишите шаги, участников и желаемое улучшение.',
          },
          {
            tag: '02',
            title: 'Проверьте небольшой пилот',
            description: 'Создайте рабочую версию и вместе проверьте обычные примеры и сложные случаи.',
          },
          {
            tag: '03',
            title: 'Встройте в повседневную работу',
            description: 'Согласуйте размещение, получите код и инструкции, назначьте ответственного за дальнейшие шаги.',
          },
        ],
      },
      insights: {
        eyebrow: 'ПОЛЕЗНЫЕ ВОПРОСЫ',
        heading: 'Сохраните разумный масштаб первой версии',
        tiles: [
          {
            title: 'Подходящие инструменты',
            description: 'Используйте код для чётких правил и подходящую модель для задач с ИИ.',
          },
          {
            title: 'Продуманный доступ к данным',
            description: 'Определите нужные данные, права доступа и место обработки.',
          },
          {
            title: 'Понятный запасной путь',
            description: 'Подготовьтесь к недоступности сервиса и результатам, которые требуют проверки человеком.',
          },
        ],
      },
    },
  },
  ar: {
    header: {
      eyebrow: 'الأداة المناسبة للمهمة',
      brand: 'Automation Fabric Studio',
      copy: 'أتمتة عملية تناسب أعمالك.',
      nav: {
        landing: 'الرئيسية',
        playbook: 'كيف نعمل',
        planner: 'اختر سير عملك',
      },
    },
    landing: {
      documentTitle: 'أعمال متكررة أقل. مساحة أكبر للنمو. · Automation Fabric Studio',
      hero: {
        heading: 'أعمال متكررة أقل. مساحة أكبر للنمو.',
        lead: 'نحوّل المهام المتكررة إلى سير عمل موثوق. نربط أدواتك، ونبسط تسليم المهام، ونستخدم الذكاء الاصطناعي حين يقدم قيمة فعلية.',
        promoLabel: 'ابدأ بمهمة واحدة',
        promoCopy: 'اختر سير عمل مألوفاً واطّلع على قائمة خطوات للبدء. لا حاجة للتسجيل.',
        primaryCta: 'اختر سير عملك',
        secondaryCta: 'كيف نعمل',
      },
      metrics: [
        {
          value: 'أدواتك',
          label: 'يناسب بيئتك',
          detail: 'نربط الأنظمة التي يستخدمها فريقك بالفعل.',
        },
        {
          value: 'بياناتك',
          label: 'القرار لك',
          detail: 'اختر مكان معالجة المعلومات وتخزينها.',
        },
        {
          value: 'سير عملك',
          label: 'ملكية واضحة',
          detail: 'احتفظ بالشيفرة والوثائق والتحكم.',
        },
      ],
      adaptive: {
        eyebrow: 'الأداة المناسبة للمهمة',
        heading: 'البساطة أولاً، والذكاء حين يفيد.',
        description: 'ابدأ بقواعد واضحة. أضف الذكاء الاصطناعي عندما تحتاج المهمة إلى فهم مستندات أو لغة أو سياق.',
        labels: {
          benefits: 'الفائدة',
          useCases: 'مناسب لـ',
        },
        tiers: [
          {
            id: 'tier-1',
            label: 'الأتمتة بالشيفرة',
            tagline: 'للمهام ذات القواعد الواضحة',
            summary: 'انقل البيانات وتحقق من المدخلات ووجّه العمل بخطوات متوقعة.',
            location: 'يمكن تشغيلها على خوادمك أو في بيئتك السحابية المختارة.',
            benefits: [
              'منطق سهل الفهم والاختبار',
              'تكاليف معالجة يمكن تقديرها',
            ],
            useCases: [
              'التحقق من البيانات',
              'التقارير الدورية',
              'توجيه الموافقات',
            ],
          },
          {
            id: 'tier-2',
            label: 'ذكاء اصطناعي خاص',
            tagline: 'للمعلومات التي تحتاج إلى تفسير',
            summary: 'استخدم نموذجاً متخصصاً لتصنيف الرسائل أو استخراج المعلومات من المستندات.',
            location: 'يمكن استضافته في بيئتك عندما تسمح الأجهزة والمتطلبات بذلك.',
            benefits: [
              'نماذج تناسب مهمة محددة',
              'استضافة تراعي احتياجات بياناتك',
            ],
            useCases: [
              'استخراج بيانات المستندات',
              'تصنيف الطلبات',
              'البحث الداخلي',
            ],
          },
          {
            id: 'tier-3',
            label: 'ذكاء اصطناعي متصل',
            tagline: 'للعمل الذي يحتاج إلى استدلال أوسع',
            summary: 'اتصل بخدمة خارجية لتلخيص المستندات أو إعداد مسودات الردود.',
            location: 'نتفق أولاً على البيانات المسموح بمشاركتها وإعدادات مزود الخدمة.',
            benefits: [
              'قدرات لغوية مرنة',
              'مراجعة بشرية للقرارات المهمة',
            ],
            useCases: [
              'الملخصات',
              'مسودات الردود',
              'المحتوى متعدد اللغات',
            ],
          },
        ],
        sidebar: {
          blendingEyebrow: 'سير عمل مترابط',
          blendingHeading: 'من وصول المهمة إلى إنجازها',
          blendingBody: 'استقبل الطلب، وتحقق من التفاصيل، ثم أرسله إلى الشخص المناسب. يظل فريقك متحكماً.',
          blendingCallout: 'مثال: قراءة فاتورة والتحقق من بياناتها ثم طلب موافقة المسؤول.',
          blendingHighlights: [
            'اختبر المدخلات المعتادة والحالات الصعبة.',
            'اتفق على الصلاحيات والتكاليف التشغيلية والخطة البديلة.',
          ],
          sustainabilityEyebrow: 'حلول عملية',
          sustainabilityHeading: 'موارد تناسب احتياجات المهمة',
          sustainabilityHighlights: [
            'استخدم الشيفرة للقواعد الواضحة، ونموذجاً مناسباً للمهام التي تحتاج إلى ذكاء اصطناعي.',
            'حدد البيانات اللازمة ومن يمكنه الوصول إليها وأين تجري معالجتها.',
            'حدد ما يحدث عند تعطل خدمة أو عندما تحتاج النتيجة إلى مراجعة بشرية.',
          ],
        },
      },
      capabilities: {
        eyebrow: 'مصمم ليوم عملك',
        heading: 'انتقال أسهل بين المهام',
        description: 'ابدأ بالعمل الذي يكرره فريقك، وابنِ سير عمل يسهل فهمه واستخدامه وتطويره.',
        features: [
          {
            title: 'اربط أدواتك الحالية',
            description: 'انقل المعلومات بين أنظمتك الحالية لتقليل الوقت الذي يقضيه الفريق في النسخ واللصق.',
            highlight: 'يناسب إعداداتك',
          },
          {
            title: 'اجعل القرارات واضحة',
            description: 'اعرف ما حدث، وما يحتاج إلى انتباه، ومتى يجب أن يتدخل شخص.',
            highlight: 'التحكم للفريق',
          },
          {
            title: 'امتلك النتيجة',
            description: 'احتفظ بالشيفرة والوثائق العملية ليتمكن فريقك من الصيانة والتطوير.',
            highlight: 'ملكية واضحة',
          },
        ],
      },
      deliveryPlaybook: {
        eyebrow: 'كيف نعمل',
        heading: 'بداية صغيرة. طريق واضح.',
        description: 'عالج مشكلة مفيدة واحدة، واختبرها مع فريقك، ثم توسع عندما تكون النتيجة مناسبة.',
        pipeline: [
          {
            title: 'حدد موضع التعقيد',
            timeframe: '01',
            description: 'اختر مهمة متكررة. ارسم خطواتها والمشاركين فيها والنتيجة الأفضل التي تريدها.',
          },
          {
            title: 'جرّب نموذجاً محدوداً',
            timeframe: '02',
            description: 'ابنِ نسخة صغيرة تعمل فعلياً. اختبر أمثلة حقيقية وحالات صعبة مع الفريق.',
          },
          {
            title: 'ادمجه في العمل اليومي',
            timeframe: '03',
            description: 'اتفق على الاستضافة، واستلم الشيفرة والإرشادات، وحدد مسؤول الخطوات التالية.',
          },
        ],
      },
      sustainability: {
        eyebrow: 'حلول عملية',
        heading: 'موارد تناسب احتياجات المهمة',
        description: 'اختر أبسط نهج يلبي احتياجاتك، ثم راجع تكلفته وأداءه الفعليين.',
        highlights: [
          {
            title: 'أدوات بالحجم المناسب',
            description: 'استخدم الشيفرة للقواعد الواضحة، ونموذجاً مناسباً للمهام التي تحتاج إلى ذكاء اصطناعي.',
          },
          {
            title: 'وصول مدروس إلى البيانات',
            description: 'حدد البيانات اللازمة ومن يمكنه الوصول إليها وأين تجري معالجتها.',
          },
          {
            title: 'خطة بديلة واضحة',
            description: 'حدد ما يحدث عند تعطل خدمة أو عندما تحتاج النتيجة إلى مراجعة بشرية.',
          },
        ],
      },
      stack: {
        eyebrow: 'مكونات ممكنة',
        heading: 'نختار الروابط المفيدة معاً',
        description: 'يعتمد الإعداد النهائي على أدواتك والوصول إلى البيانات وسير العمل.',
        items: [
          'استيراد البيانات',
          'فحص المستندات',
          'خطوات الموافقة',
          'تحديثات مجدولة',
          'ملخصات بمساعدة الذكاء الاصطناعي',
          'سجل النشاط',
        ],
      },
      fieldNotes: {
        eyebrow: 'أمثلة توضيحية لسير العمل',
        heading: 'ابدأ بمهمة تعرفها جيداً',
        caseStudies: [
          {
            company: 'المستندات والبيانات',
            result: 'خطوة تالية واضحة لكل مستند',
            quote: 'مثلاً: استخراج بيانات الفاتورة، وتحديد المعلومات الناقصة، وإرسال المستند للمراجعة.',
          },
          {
            company: 'الطلبات والموافقات',
            result: 'حافظ على تقدّم الطلبات',
            quote: 'مثلاً: جمع الطلب وتوجيهه إلى الشخص المناسب وإبلاغ الفريق عند الموافقة عليه.',
          },
        ],
      },
      ctaBanner: {
        eyebrow: 'خطوتك التالية',
        heading: 'أي مهمة تريد تخفيف عبئها؟',
        description: 'اختر سير عمل واحصل على قائمة قصيرة تساعدك في تحديد نقطة البداية.',
        primaryCta: 'اختر سير عملك',
        secondaryCta: 'كيف نعمل',
      },
    },
    playbook: {
      documentTitle: 'كيف نعمل · Automation Fabric Studio',
      hero: {
        eyebrow: 'كيف نعمل',
        heading: 'من مهمة متكررة إلى سير عمل مفيد.',
        lead: 'نهج عملي لاختيار المهمة الأولى، واختبار حل صغير، وتسهيل استخدامه على فريقك.',
        primaryCta: 'اختر سير عملك',
        secondaryCta: 'العودة إلى نظرة عامة',
      },
      immersion: {
        eyebrow: 'ابدأ بالعمل نفسه',
        heading: 'وضوح قبل البناء',
        description: 'يبدأ سير العمل الجيد بالأشخاص الذين يؤدون المهمة اليوم.',
        moments: [
          {
            title: 'راجع مثالاً واحداً',
            outcome: 'خريطة مشتركة للمهمة',
            detail: 'وضّح أين يبدأ العمل والأدوات المستخدمة ومواضع التأخير. جهّز مثالاً حديثاً وحالة صعبة.',
          },
          {
            title: 'اتفق على نتيجة مفيدة',
            outcome: 'مقياس واضح للنجاح',
            detail: 'حدد ما ينبغي تحسينه: تقليل إعادة الإدخال أو الخطوات المنسية أو وقت التسليم. سجّل الوضع الحالي للمقارنة.',
          },
          {
            title: 'اختر النسخة الأولى',
            outcome: 'نطاق محدد للتجربة',
            detail: 'حدد الحدود والبيانات المسموح باستخدامها والنقاط التي تحتاج إلى مراجعة شخص.',
          },
        ],
      },
      instrumentation: {
        eyebrow: 'سهل الفهم والثقة',
        heading: 'اعرف ما حدث وما يحتاج إليك',
        beats: [
          {
            label: 'نشاط واضح',
            description: 'احتفظ بسجل مفيد للخطوات المكتملة والأخطاء والعمل المعلّق.',
          },
          {
            label: 'مراجعة بشرية',
            description: 'أرسل القرارات المهمة أو غير المؤكدة إلى شخص مع السياق اللازم للتصرف.',
          },
          {
            label: 'مسؤولية واضحة',
            description: 'اتفق على من يراقب سير العمل ويعالج الاستثناءات ويعتمد التغييرات.',
          },
        ],
        safetyHeading: 'قبل اعتماده في العمل اليومي',
        safetySignals: [
          'اختبر المدخلات المعتادة والحالات الصعبة.',
          'اتفق على الصلاحيات والتكاليف التشغيلية والخطة البديلة.',
        ],
      },
      experiments: {
        eyebrow: 'اختر بداية مناسبة',
        heading: 'طريقتان لتجربة الفكرة',
        description: 'يعتمد النهج المناسب على وضوح القواعد ومقدار التفسير الذي تحتاج إليه المهمة.',
        tracks: [
          {
            title: 'ابدأ بقواعد واضحة',
            summary: 'خطوة أولى مفيدة عندما تتبع المهمة نمطاً متكرراً.',
            milestones: [
              'حدد المدخلات والمخرجات المتوقعة.',
              'اختبر القواعد على أمثلة حقيقية.',
              'راجع الأخطاء قبل التوسع.',
            ],
          },
          {
            title: 'أضف خطوة ذكاء اصطناعي محددة',
            summary: 'مفيد عندما تتنوع المستندات أو اللغة أكثر مما تسمح به القواعد الثابتة وحدها.',
            milestones: [
              'اختر عينة صغيرة ممثلة.',
              'قارن النتائج بقرارات الأشخاص.',
              'احتفظ بمراجعة للنتائج غير المؤكدة.',
            ],
          },
        ],
        addButton: 'اختر سير عمل للبدء',
      },
    },
    planner: {
      documentTitle: 'اختر سير عملك · Automation Fabric Studio',
      hero: {
        eyebrow: 'اعثر على نقطة البداية',
        heading: 'أي مهمة تريد تبسيطها؟',
        lead: 'اختر نوع العمل الذي تكرره أكثر. احصل على قائمة خطوات أولية لاستكشاف الفكرة مع فريقك.',
        primaryCta: 'كيف نعمل',
        secondaryCta: 'العودة إلى نظرة عامة',
      },
      goalMetricLabel: 'نتيجة أولى مفيدة',
      workflowGoals: [
        {
          id: 'intake',
          label: 'المستندات والبيانات',
          summary: 'ابدأ بنوع واحد من المستندات أو مصدر بيانات. ابحث عن المعلومات التي يكرر الفريق قراءتها أو فحصها أو نسخها.',
          metric: 'معلومات أوضح وخطوات يدوية أقل',
          steps: [
            'اجمع مستندات معتادة مع مثال صعب واحد.',
            'اكتب الحقول المطلوبة والفحوص اليدوية الحالية.',
            'حدد النتائج التي يمكن تمريرها وتلك التي تحتاج إلى مراجعة.',
          ],
        },
        {
          id: 'fulfillment',
          label: 'الطلبات والموافقات',
          summary: 'ابدأ بطلب ينتظر باستمرار من يتولاه أو يوافق عليه أو يحدّث حالته.',
          metric: 'تسليم ومسؤوليات أوضح',
          steps: [
            'حدد الأشخاص والأدوات من الطلب إلى الإكمال.',
            'اكتب قواعد التوجيه والاستثناءات الشائعة.',
            'اختر وقت الإشعار ووقت طلب الموافقة.',
          ],
        },
        {
          id: 'governance',
          label: 'التقارير والتحديثات',
          summary: 'ابدأ بتقرير دوري أو تحديث يستغرق جمعه وإعداده وقتاً.',
          metric: 'تحديثات مفيدة بتحضير أقل',
          steps: [
            'حدد مصادر البيانات ومن يحتاج إلى التحديث.',
            'اكتب الفحوص والحسابات والتنسيق الحالي.',
            'حدد الجدول ومن يراجع التحديث قبل مشاركته.',
          ],
        },
      ],
      assurance: {
        eyebrow: 'قبل البناء',
        heading: 'ثلاثة أمور للاتفاق عليها',
        tracks: [
          {
            title: 'نشاط واضح',
            detail: 'احتفظ بسجل مفيد للخطوات المكتملة والأخطاء والعمل المعلّق.',
          },
          {
            title: 'مراجعة بشرية',
            detail: 'أرسل القرارات المهمة أو غير المؤكدة إلى شخص مع السياق اللازم للتصرف.',
          },
          {
            title: 'مسؤولية واضحة',
            detail: 'اتفق على من يراقب سير العمل ويعالج الاستثناءات ويعتمد التغييرات.',
          },
        ],
      },
      milestones: {
        eyebrow: 'الخطوة التالية',
        heading: 'حوّل قائمتك إلى تجربة صغيرة',
        highlights: [
          {
            tag: '01',
            title: 'حدد موضع التعقيد',
            description: 'اختر مهمة متكررة. ارسم خطواتها والمشاركين فيها والنتيجة الأفضل التي تريدها.',
          },
          {
            tag: '02',
            title: 'جرّب نموذجاً محدوداً',
            description: 'ابنِ نسخة صغيرة تعمل فعلياً. اختبر أمثلة حقيقية وحالات صعبة مع الفريق.',
          },
          {
            tag: '03',
            title: 'ادمجه في العمل اليومي',
            description: 'اتفق على الاستضافة، واستلم الشيفرة والإرشادات، وحدد مسؤول الخطوات التالية.',
          },
        ],
      },
      insights: {
        eyebrow: 'أسئلة مفيدة',
        heading: 'حافظ على بساطة النسخة الأولى',
        tiles: [
          {
            title: 'أدوات بالحجم المناسب',
            description: 'استخدم الشيفرة للقواعد الواضحة، ونموذجاً مناسباً للمهام التي تحتاج إلى ذكاء اصطناعي.',
          },
          {
            title: 'وصول مدروس إلى البيانات',
            description: 'حدد البيانات اللازمة ومن يمكنه الوصول إليها وأين تجري معالجتها.',
          },
          {
            title: 'خطة بديلة واضحة',
            description: 'حدد ما يحدث عند تعطل خدمة أو عندما تحتاج النتيجة إلى مراجعة بشرية.',
          },
        ],
      },
    },
  },
  bg: {
    header: {
      eyebrow: 'ПОДХОДЯЩ ИНСТРУМЕНТ ЗА ЗАДАЧАТА',
      brand: 'Automation Fabric Studio',
      copy: 'Практична автоматизация за вашия бизнес.',
      nav: {
        landing: 'Начало',
        playbook: 'Как работим',
        planner: 'Изберете процес',
      },
    },
    landing: {
      documentTitle: 'По-малко рутина. Повече възможности. · Automation Fabric Studio',
      hero: {
        heading: 'По-малко рутина. Повече възможности.',
        lead: 'Превръщаме повтарящите се задачи в надеждни работни процеси. Свързваме инструментите ви, улесняваме предаването на работа и използваме AI там, където е полезен.',
        promoLabel: 'Започнете с една задача',
        promoCopy: 'Изберете познат процес и вижте списък с първи стъпки. Без регистрация.',
        primaryCta: 'Изберете процес',
        secondaryCta: 'Как работим',
      },
      metrics: [
        {
          value: 'Вашите инструменти',
          label: 'Според средата ви',
          detail: 'Свързваме системите, които екипът вече използва.',
        },
        {
          value: 'Вашите данни',
          label: 'Вашият избор',
          detail: 'Решавате къде да се обработва и съхранява информацията.',
        },
        {
          value: 'Вашият процес',
          label: 'Ясна отговорност',
          detail: 'Запазвате кода, документацията и управлението.',
        },
      ],
      adaptive: {
        eyebrow: 'ПОДХОДЯЩ ИНСТРУМЕНТ ЗА ЗАДАЧАТА',
        heading: 'Просто решение. AI, когато помага.',
        description: 'Започнете с ясни правила. Добавете AI, когато задачата изисква разбиране на документи, език или контекст.',
        labels: {
          benefits: 'Ползи',
          useCases: 'Подходящо за',
        },
        tiers: [
          {
            id: 'tier-1',
            label: 'Автоматизация с код',
            tagline: 'За задачи с ясни правила',
            summary: 'Прехвърляйте данни, проверявайте входяща информация и насочвайте работа по предвидими стъпки.',
            location: 'Може да работи на ваши сървъри или в избран облак.',
            benefits: [
              'Лесна за разбиране и тестване логика',
              'Предвидими разходи за обработка',
            ],
            useCases: [
              'Проверка на данни',
              'Периодични отчети',
              'Насочване на одобрения',
            ],
          },
          {
            id: 'tier-2',
            label: 'Частен AI',
            tagline: 'Когато информацията изисква тълкуване',
            summary: 'Специализиран модел класифицира съобщения или извлича информация от документи.',
            location: 'Възможно е разполагане във вашата среда, ако хардуерът и изискванията го позволяват.',
            benefits: [
              'Модели за конкретна задача',
              'Хостинг според нуждите на данните',
            ],
            useCases: [
              'Извличане от документи',
              'Класифициране на заявки',
              'Вътрешно търсене',
            ],
          },
          {
            id: 'tier-3',
            label: 'Външен AI',
            tagline: 'За работа с по-широк контекст',
            summary: 'Свържете външна AI услуга за обобщаване на документи или подготовка на отговори.',
            location: 'Преди свързване уточняваме допустимите данни и настройките на доставчика.',
            benefits: [
              'Гъвкава работа с език',
              'Преглед на важните решения от човек',
            ],
            useCases: [
              'Обобщения',
              'Чернови на отговори',
              'Многоезично съдържание',
            ],
          },
        ],
        sidebar: {
          blendingEyebrow: 'СВЪРЗАН РАБОТЕН ПРОЦЕС',
          blendingHeading: 'От нова задача до готова работа',
          blendingBody: 'Приемете заявка, проверете подробностите и я изпратете на правилния човек. Екипът запазва контрола.',
          blendingCallout: 'Пример: прочитане на фактура, проверка на данните и одобрение от отговорния човек.',
          blendingHighlights: [
            'Проверете типични входни данни и трудни случаи.',
            'Уточнете достъпа, текущите разходи и резервния план.',
          ],
          sustainabilityEyebrow: 'ПРАКТИЧЕН ПОДХОД',
          sustainabilityHeading: 'Ресурси според нуждите на задачата',
          sustainabilityHighlights: [
            'Използвайте код за ясни правила и подходящ модел за задачите с AI.',
            'Определете нужните данни, кой има достъп и къде се обработват.',
            'Планирайте действията при недостъпна услуга или резултат, който изисква човешки преглед.',
          ],
        },
      },
      capabilities: {
        eyebrow: 'ЗА ВАШИЯ РАБОТЕН ДЕН',
        heading: 'По-лесно предаване на всяка задача',
        description: 'Започнете с повтарящата се работа и създайте процес, който хората разбират, използват и подобряват.',
        features: [
          {
            title: 'Свържете познатите инструменти',
            description: 'Прехвърляйте информация между съществуващите системи и намалете ръчното копиране.',
            highlight: 'Според средата ви',
          },
          {
            title: 'Направете решенията видими',
            description: 'Вижте какво се е случило, какво изисква внимание и кога е нужен човек.',
            highlight: 'Екипът управлява',
          },
          {
            title: 'Запазете собствеността',
            description: 'Получете кода и практична документация, за да поддържате и развивате процеса.',
            highlight: 'Ясна отговорност',
          },
        ],
      },
      deliveryPlaybook: {
        eyebrow: 'КАК РАБОТИМ',
        heading: 'Малък старт. Ясна посока.',
        description: 'Решете един полезен проблем, проверете го с екипа и разширете решението, когато има смисъл.',
        pipeline: [
          {
            title: 'Открийте затруднението',
            timeframe: '01',
            description: 'Изберете повтаряща се задача. Опишете стъпките, хората и желания по-добър резултат.',
          },
          {
            title: 'Опитайте фокусиран пилот',
            timeframe: '02',
            description: 'Създайте малка работеща версия. Проверете заедно реални примери и трудни случаи.',
          },
          {
            title: 'Включете в ежедневието',
            timeframe: '03',
            description: 'Уточнете хостинга, получете кода и указанията и определете отговорник за следващите стъпки.',
          },
        ],
      },
      sustainability: {
        eyebrow: 'ПРАКТИЧЕН ПОДХОД',
        heading: 'Ресурси според нуждите на задачата',
        description: 'Изберете прост подход, който покрива нуждите ви, после оценете реалните разходи и резултати.',
        highlights: [
          {
            title: 'Подходящи инструменти',
            description: 'Използвайте код за ясни правила и подходящ модел за задачите с AI.',
          },
          {
            title: 'Обмислен достъп до данни',
            description: 'Определете нужните данни, кой има достъп и къде се обработват.',
          },
          {
            title: 'Ясен резервен вариант',
            description: 'Планирайте действията при недостъпна услуга или резултат, който изисква човешки преглед.',
          },
        ],
      },
      stack: {
        eyebrow: 'ВЪЗМОЖНИ КОМПОНЕНТИ',
        heading: 'Избираме полезните връзки заедно',
        description: 'Крайната конфигурация зависи от инструментите, достъпа до данни и процеса.',
        items: [
          'Импорт на данни',
          'Проверка на документи',
          'Стъпки за одобрение',
          'Планирани известия',
          'Обобщения с AI',
          'Дневник на действията',
        ],
      },
      fieldNotes: {
        eyebrow: 'ПРИМЕРНИ ПРОЦЕСИ',
        heading: 'Започнете със задача, която познавате добре',
        caseStudies: [
          {
            company: 'Документи и данни',
            result: 'Ясна следваща стъпка за всеки документ',
            quote: 'Например: извлечете данни от фактура, отбележете липсващото и изпратете документа за преглед.',
          },
          {
            company: 'Заявки и одобрения',
            result: 'Помогнете на заявките да напредват',
            quote: 'Например: приемете заявка, насочете я към отговорника и уведомете екипа след одобрение.',
          },
        ],
      },
      ctaBanner: {
        eyebrow: 'СЛЕДВАЩАТА ВИ СТЪПКА',
        heading: 'Коя задача искате да улесните?',
        description: 'Изберете процес и получете кратък списък, който да ви помогне да решите откъде да започнете.',
        primaryCta: 'Изберете процес',
        secondaryCta: 'Как работим',
      },
    },
    playbook: {
      documentTitle: 'Как работим · Automation Fabric Studio',
      hero: {
        eyebrow: 'КАК РАБОТИМ',
        heading: 'От повтаряща се задача към полезен процес.',
        lead: 'Практичен начин да изберете първата задача, да проверите малко решение и да улесните използването му от екипа.',
        primaryCta: 'Изберете процес',
        secondaryCta: 'Обратно към прегледа',
      },
      immersion: {
        eyebrow: 'ЗАПОЧНЕТЕ ОТ РАБОТАТА',
        heading: 'Яснота преди разработката',
        description: 'Добрият процес започва с хората, които изпълняват задачата днес.',
        moments: [
          {
            title: 'Разгледайте един пример',
            outcome: 'Обща карта на задачата',
            detail: 'Покажете откъде започва работата, инструментите и забавянията. Подгответе скорошен пример и труден случай.',
          },
          {
            title: 'Уточнете полезния резултат',
            outcome: 'Ясна мярка за успех',
            detail: 'Изберете какво да подобрите: повторно въвеждане, пропуснати стъпки или предаване на работа. Запишете началното състояние.',
          },
          {
            title: 'Изберете първата версия',
            outcome: 'Фокусиран обхват на пилота',
            detail: 'Определете границите, допустимите данни и местата, където човек трябва да прегледа резултата.',
          },
        ],
      },
      instrumentation: {
        eyebrow: 'ПРОЦЕС, НА КОЙТО СЕ ДОВЕРЯВАТЕ',
        heading: 'Вижте какво е станало и къде сте нужни',
        beats: [
          {
            label: 'Видими действия',
            description: 'Поддържайте полезен запис на завършените стъпки, грешките и чакащата работа.',
          },
          {
            label: 'Преглед от човек',
            description: 'Изпращайте несигурните или важни решения на човек с достатъчно контекст.',
          },
          {
            label: 'Ясна отговорност',
            description: 'Уточнете кой наблюдава процеса, решава изключенията и одобрява промени.',
          },
        ],
        safetyHeading: 'Преди да стане част от ежедневието',
        safetySignals: [
          'Проверете типични входни данни и трудни случаи.',
          'Уточнете достъпа, текущите разходи и резервния план.',
        ],
      },
      experiments: {
        eyebrow: 'РАЗУМЕН СТАРТ',
        heading: 'Два начина да проверите идеята',
        description: 'Подходът зависи от яснотата на правилата и нуждата от тълкуване.',
        tracks: [
          {
            title: 'Започнете с ясни правила',
            summary: 'Полезна първа стъпка, когато задачата следва повтарящ се модел.',
            milestones: [
              'Опишете входа и очаквания резултат.',
              'Проверете правилата с реални примери.',
              'Разгледайте грешките преди разширяване.',
            ],
          },
          {
            title: 'Добавете фокусирана AI стъпка',
            summary: 'Полезно, когато документите или езикът варират твърде много за фиксирани правила.',
            milestones: [
              'Изберете малка представителна извадка.',
              'Сравнете AI резултатите с човешки решения.',
              'Запазете преглед за несигурните резултати.',
            ],
          },
        ],
        addButton: 'Изберете процес за начало',
      },
    },
    planner: {
      documentTitle: 'Изберете процес · Automation Fabric Studio',
      hero: {
        eyebrow: 'НАМЕРЕТЕ НАЧАЛНА ТОЧКА',
        heading: 'Коя задача искате да опростите?',
        lead: 'Изберете работата, която повтаряте най-често. Получете списък с първи стъпки, за да обсъдите идеята с екипа.',
        primaryCta: 'Как работим',
        secondaryCta: 'Обратно към прегледа',
      },
      goalMetricLabel: 'Полезен първи резултат',
      workflowGoals: [
        {
          id: 'intake',
          label: 'Документи и данни',
          summary: 'Започнете с един вид документ или източник на данни. Открийте информацията, която екипът постоянно чете, проверява или копира.',
          metric: 'По-ясна информация, по-малко ръчни стъпки',
          steps: [
            'Съберете няколко обичайни документа и един труден пример.',
            'Опишете нужните полета и текущите ръчни проверки.',
            'Решете кои резултати продължават и кои изискват преглед.',
          ],
        },
        {
          id: 'fulfillment',
          label: 'Заявки и одобрения',
          summary: 'Започнете със заявка, която често чака отговорник, одобрение или обновяване на статуса.',
          metric: 'По-ясно предаване и отговорност',
          steps: [
            'Опишете хората и инструментите от заявката до завършването.',
            'Запишете правилата за насочване и честите изключения.',
            'Изберете кога да уведомявате и кога да искате одобрение.',
          ],
        },
        {
          id: 'governance',
          label: 'Отчети и известия',
          summary: 'Започнете с един периодичен отчет, чиято подготовка отнема време.',
          metric: 'Полезни актуализации с по-малко подготовка',
          steps: [
            'Избройте източниците и получателите на информацията.',
            'Опишете текущите проверки, изчисления и формат.',
            'Определете график и човек за преглед преди споделяне.',
          ],
        },
      ],
      assurance: {
        eyebrow: 'ПРЕДИ ДА РАЗРАБОТИТЕ',
        heading: 'Три неща за уточняване',
        tracks: [
          {
            title: 'Видими действия',
            detail: 'Поддържайте полезен запис на завършените стъпки, грешките и чакащата работа.',
          },
          {
            title: 'Преглед от човек',
            detail: 'Изпращайте несигурните или важни решения на човек с достатъчно контекст.',
          },
          {
            title: 'Ясна отговорност',
            detail: 'Уточнете кой наблюдава процеса, решава изключенията и одобрява промени.',
          },
        ],
      },
      milestones: {
        eyebrow: 'СЛЕДВАЩА СТЪПКА',
        heading: 'От списък със стъпки към малък пилот',
        highlights: [
          {
            tag: '01',
            title: 'Открийте затруднението',
            description: 'Изберете повтаряща се задача. Опишете стъпките, хората и желания по-добър резултат.',
          },
          {
            tag: '02',
            title: 'Опитайте фокусиран пилот',
            description: 'Създайте малка работеща версия. Проверете заедно реални примери и трудни случаи.',
          },
          {
            tag: '03',
            title: 'Включете в ежедневието',
            description: 'Уточнете хостинга, получете кода и указанията и определете отговорник за следващите стъпки.',
          },
        ],
      },
      insights: {
        eyebrow: 'ПОЛЕЗНИ ВЪПРОСИ',
        heading: 'Запазете първата версия управляема',
        tiles: [
          {
            title: 'Подходящи инструменти',
            description: 'Използвайте код за ясни правила и подходящ модел за задачите с AI.',
          },
          {
            title: 'Обмислен достъп до данни',
            description: 'Определете нужните данни, кой има достъп и къде се обработват.',
          },
          {
            title: 'Ясен резервен вариант',
            description: 'Планирайте действията при недостъпна услуга или резултат, който изисква човешки преглед.',
          },
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

export const I18nContext = createContext<I18nContextValue>({
  language: 'en',
  setLanguage: () => undefined,
  t: translations.en,
})

export const useI18n = () => useContext(I18nContext)

export type { LanguageCode }
