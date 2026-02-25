// Project data for Hunter Nilsen's portfolio
// Detail sections are placeholders — replace with real content

window.PROJECT_DATA = [
  // ── Dashboards & Data Infrastructure ──
  {
    slug: "pipeline-management-dashboard",
    title: "Pipeline Management Dashboard",
    role: "adops",
    roleLabel: "AD Ops Analyst",
    category: "dashboards",
    section: "Dashboards & Data Infrastructure",
    tags: ["Executive Dashboard"],
    impactAreas: ["Leadership Decision-Making", "Pipeline Health Monitoring"],
    summary: "Executive dashboard used by CMO, CRO, and RevOps leadership to monitor pipeline health and identify stalled deals.",
    featured: false,
    detail: {
      tagline: "Executive visibility into pipeline health and deal velocity.",
      metrics: [
        { value: "C-Suite", label: "Used By" },
        { value: "Real-Time", label: "Pipeline Monitoring" },
        { value: "Stalled Deals", label: "Identifies" },
        { value: "Velocity", label: "Tracks Deal" }
      ],
      problem: "Leadership lacked a centralized view of pipeline health, making it difficult to identify stalled deals and track velocity across teams.",
      solution: "Built an executive dashboard providing real-time pipeline visibility, stalled deal identification, and velocity tracking for CMO, CRO, and RevOps leadership.",
      building: "Details coming soon — describe the technology stack, tools used, and your specific contributions.",
      results: "Adopted by C-suite leadership for daily pipeline reviews, improving deal velocity tracking and enabling faster intervention on stalled opportunities."
    }
  },
  {
    slug: "ae-inbound-conversion-dashboard",
    title: "AE Inbound Conversion Dashboard",
    role: "adops",
    roleLabel: "AD Ops Analyst",
    category: "dashboards",
    section: "Dashboards & Data Infrastructure",
    tags: ["Leadership Dashboard"],
    impactAreas: ["Sales Performance Management", "Marketing Attribution"],
    summary: "Tracks how marketing leads are worked by individual reps, showing lead progression through pipeline stages for CMO and RVPs.",
    featured: false,
    detail: {
      tagline: "Rep-level visibility into how marketing leads are worked and converted.",
      metrics: [
        { value: "CMO & RVPs", label: "Used By" },
        { value: "Per-Rep", label: "Performance Tracking" },
        { value: "Full Funnel", label: "Lead Progression" },
        { value: "Attribution", label: "Marketing" }
      ],
      problem: "Sales leadership had no visibility into how individual reps were working inbound marketing leads, making it impossible to identify coaching opportunities or attribution gaps.",
      solution: "Created a leadership dashboard that tracks how marketing leads are worked by individual reps, showing lead progression through every pipeline stage.",
      building: "Details coming soon — describe the technology stack, tools used, and your specific contributions.",
      results: "Used by CMO and RVPs for rep performance visibility, enabling targeted coaching and improved marketing-to-sales handoff accountability."
    }
  },
  {
    slug: "marketing-sal-creation-dashboard",
    title: "Marketing SAL Creation Dashboard",
    role: "adops",
    roleLabel: "AD Ops Analyst",
    category: "dashboards",
    section: "Dashboards & Data Infrastructure",
    tags: ["Executive Dashboard"],
    impactAreas: ["Funnel Analysis", "Gap Identification", "Executive Reporting"],
    summary: "High-visibility dashboard for CMO, CRO, and CEO that identified a critical gap in the Marketing SAL creation pipeline.",
    featured: false,
    detail: {
      tagline: "Executive funnel analysis that uncovered a critical pipeline gap.",
      metrics: [
        { value: "CEO, CMO, CRO", label: "Used By" },
        { value: "Critical Gap", label: "Identified" },
        { value: "SAL Pipeline", label: "Monitors" },
        { value: "Executive", label: "Reporting Level" }
      ],
      problem: "Executive leadership needed clearer visibility into the Marketing SAL creation funnel to identify where leads were dropping off and why.",
      solution: "Built a high-visibility dashboard for the C-suite that tracks the entire SAL creation pipeline, enabling funnel analysis and gap identification at the executive level.",
      building: "Details coming soon — describe the technology stack, tools used, and your specific contributions.",
      results: "Identified a critical gap in the Marketing SAL creation pipeline, directly informing executive-level strategy and resource allocation decisions."
    }
  },
  {
    slug: "consolidated-team-leadership-app",
    title: "Consolidated Team & Leadership App",
    role: "adops",
    roleLabel: "AD Ops Analyst",
    category: "dashboards",
    section: "Dashboards & Data Infrastructure",
    tags: ["Team Enablement App"],
    impactAreas: ["Performance Management", "Coaching", "Analytics"],
    summary: "Consolidated dozens of disparate dashboards into a single cohesive analytics platform for team leadership.",
    featured: false,
    detail: {
      tagline: "One platform replacing dozens of dashboards for team performance management.",
      metrics: [
        { value: "Dozens", label: "Dashboards Consolidated" },
        { value: "Unified", label: "Analytics Platform" },
        { value: "Quota", label: "Tracking" },
        { value: "Coaching", label: "Enabled" }
      ],
      problem: "Team leadership was juggling dozens of disparate dashboards across multiple tools, creating inefficiency and inconsistent data interpretation.",
      solution: "Consolidated all team analytics into a single cohesive app covering quota tracking, production monitoring, and coaching insights.",
      building: "Details coming soon — describe the technology stack, tools used, and your specific contributions.",
      results: "Replaced dozens of fragmented dashboards with a unified analytics platform, streamlining leadership workflows and enabling data-driven coaching."
    }
  },

  // ── Automation & Workflows ──
  {
    slug: "ai-outbound-engine",
    title: "AI Outbound Engine",
    role: "revops",
    roleLabel: "RevOps Analyst",
    category: "automation",
    section: "Automation & Workflows",
    tags: ["Automation Workflow (Apollo.io)"],
    impactAreas: ["Pipeline Generation", "Prospecting Automation"],
    summary: "Automated prospecting engine built in Apollo.io with ICP targeting, daily contact sourcing, and AI-powered personalized email cadences.",
    featured: false,
    detail: {
      tagline: "AI-powered prospecting that runs on autopilot.",
      metrics: [
        { value: "Apollo.io", label: "Platform" },
        { value: "Daily", label: "Contact Sourcing" },
        { value: "AI-Powered", label: "Email Cadences" },
        { value: "ICP-Based", label: "Targeting" }
      ],
      problem: "Manual prospecting was time-consuming and inconsistent, with reps spending hours sourcing contacts instead of selling.",
      solution: "Built an automated outbound engine in Apollo.io with ICP definition, TAM building, daily contact sourcing, and AI-powered personalized email cadences.",
      building: "Details coming soon — describe the technology stack, tools used, and your specific contributions.",
      results: "Automated daily prospecting pipeline, freeing reps to focus on selling while maintaining consistent, personalized outreach at scale."
    }
  },
  {
    slug: "clay-old-opportunity-workflow",
    title: "Clay Old Opportunity Workflow",
    role: "adops",
    roleLabel: "AD Ops Analyst",
    category: "automation",
    section: "Automation & Workflows",
    tags: ["Automation Workflow (Gong + Clay)"],
    impactAreas: ["Pipeline Creation", "Sales Acceleration"],
    summary: "Analyzes old opportunities using Gong call summaries to extract use cases and auto-generate templated outreach for reps.",
    featured: false,
    detail: {
      tagline: "Reviving old opportunities with AI-powered account intelligence.",
      metrics: [
        { value: "14", label: "SALs Generated" },
        { value: "$90k", label: "ACV Closed-Won" },
        { value: "$400k", label: "TCV Closed-Won" },
        { value: "Automated", label: "Account Intel" }
      ],
      problem: "Old opportunities with valuable context were sitting untouched because reps lacked easy access to the original conversation insights.",
      solution: "Built a workflow using Gong and Clay that automatically analyzes old opportunities, extracts use cases and pain points from call summaries, and sends reps templated emails with account intelligence.",
      building: "Details coming soon — describe the technology stack, tools used, and your specific contributions.",
      results: "Generated 14 SALs and $90k ACV / $400k TCV in closed-won revenue by systematically re-engaging dormant opportunities with contextual outreach."
    }
  },
  {
    slug: "sgl-bulk-upload-process",
    title: "SGL Bulk Upload Process",
    role: "adops",
    roleLabel: "AD Ops Analyst",
    category: "automation",
    section: "Automation & Workflows",
    tags: ["Process Improvement"],
    impactAreas: ["Operational Efficiency", "Sales Ops"],
    summary: "Streamlined process that saves ADMs and Sales Ops hours of manual work weekly while improving campaign attribution accuracy.",
    featured: false,
    detail: {
      tagline: "Eliminating hours of manual data entry every week.",
      metrics: [
        { value: "Hours", label: "Saved Weekly" },
        { value: "Improved", label: "Attribution Accuracy" },
        { value: "ADMs + Sales Ops", label: "Users" },
        { value: "Automated", label: "Bulk Processing" }
      ],
      problem: "ADMs and Sales Ops were spending hours each week on manual SGL uploads, leading to errors and poor campaign attribution.",
      solution: "Designed a streamlined bulk upload process that automates the manual work and ensures consistent campaign attribution.",
      building: "Details coming soon — describe the technology stack, tools used, and your specific contributions.",
      results: "Saved ADMs and Sales Ops hours of manual work weekly and improved campaign attribution accuracy across the organization."
    }
  },

  // ── Team Enablement Tools & Processes ──
  {
    slug: "call-review-coaching-app",
    title: "Call Review & Coaching App",
    role: "revops",
    roleLabel: "RevOps Analyst",
    category: "enablement",
    section: "Team Enablement Tools & Processes",
    tags: ["Coaching & AI Platform"],
    impactAreas: ["Sales Coaching", "Performance Improvement", "Skill Development"],
    summary: "AI-powered platform that scores every Gong call against STC criteria and provides instant feedback with anonymous peer and leader reviews.",
    featured: false,
    detail: {
      tagline: "AI-driven call scoring and coaching at scale.",
      metrics: [
        { value: "Every Call", label: "AI-Scored" },
        { value: "STC Criteria", label: "Evaluation Framework" },
        { value: "Instant", label: "Performance Feedback" },
        { value: "Anonymous", label: "Peer Reviews" }
      ],
      problem: "Sales coaching was inconsistent and relied on managers manually reviewing a small sample of calls, leaving most reps without regular feedback.",
      solution: "Built an AI-powered coaching platform that automatically runs STC scores against every Gong call, provides instant performance feedback, and enables anonymous peer and leader reviews.",
      building: "Details coming soon — describe the technology stack, tools used, and your specific contributions.",
      results: "Enabled consistent, data-driven coaching across the entire team, accelerating skill development through instant feedback and anonymous review mechanisms."
    }
  },
  {
    slug: "account-mapping-app",
    title: "Account Mapping App",
    role: "revops",
    roleLabel: "RevOps Analyst",
    category: "enablement",
    section: "Team Enablement Tools & Processes",
    tags: ["Intelligence & Sales Ops"],
    impactAreas: ["Org Chart Navigation", "Account Intelligence", "Buying Committee Mapping"],
    summary: "Maps internal and external org hierarchies, engagement history, and buying committees to identify champions and decision-makers.",
    featured: false,
    detail: {
      tagline: "Visual account intelligence for navigating complex organizations.",
      metrics: [
        { value: "Org Charts", label: "Internal & External" },
        { value: "Buying Committees", label: "Mapped" },
        { value: "Champions", label: "Identified" },
        { value: "Engagement", label: "History Tracked" }
      ],
      problem: "Reps struggled to navigate complex account hierarchies and identify the right stakeholders, leading to missed opportunities and longer sales cycles.",
      solution: "Created an account mapping app that visualizes internal team hierarchies, external account org charts, engagement history, and buying committee structures.",
      building: "Details coming soon — describe the technology stack, tools used, and your specific contributions.",
      results: "Enabled reps to quickly identify champions and decision-makers, improving account navigation and reducing time to engage the right stakeholders."
    }
  },
  {
    slug: "new-adm-comp-plan",
    title: "New ADM Comp Plan",
    role: "revops",
    roleLabel: "RevOps Analyst",
    category: "enablement",
    section: "Team Enablement Tools & Processes",
    tags: ["Compensation Plan Design"],
    impactAreas: ["Team Motivation", "Financial Modeling", "Sales Incentives"],
    summary: "Redesigned ADM compensation plan that increased incentives while maintaining the same cost percentage for the business.",
    featured: false,
    detail: {
      tagline: "Better incentives, same cost — a win-win comp redesign.",
      metrics: [
        { value: "Same Cost %", label: "For Business" },
        { value: "Increased", label: "ADM Incentives" },
        { value: "Financial", label: "Modeling Done" },
        { value: "Scenario", label: "Analysis" }
      ],
      problem: "The existing ADM compensation plan wasn't effectively motivating the team, but leadership needed any changes to remain cost-neutral.",
      solution: "Redesigned the compensation structure using financial modeling and scenario analysis to increase ADM incentives while maintaining the same cost percentage for the business.",
      building: "Details coming soon — describe the technology stack, tools used, and your specific contributions.",
      results: "Delivered a compensation plan that increased ADM motivation and earning potential while remaining cost-neutral for the organization."
    }
  },
  {
    slug: "market-intelligence-app",
    title: "Market Intelligence App",
    role: "revops",
    roleLabel: "RevOps Analyst",
    category: "enablement",
    section: "Team Enablement Tools & Processes",
    tags: ["Intelligence Application (Jupyter)"],
    impactAreas: ["C-Suite Decision-Making", "Strategic Planning"],
    summary: "Jupyter-based application aggregating AI updates, brand health, competitive positioning, customer intelligence, and win/loss analysis for executive decision-making.",
    featured: false,
    detail: {
      tagline: "Executive-grade market intelligence in one place.",
      metrics: [
        { value: "C-Suite", label: "Audience" },
        { value: "AI + Brand", label: "Health Tracked" },
        { value: "Competitive", label: "Positioning" },
        { value: "Win/Loss", label: "Analysis" }
      ],
      problem: "Executives lacked a unified source for market intelligence, forcing them to piece together insights from multiple disconnected tools and reports.",
      solution: "Built a Jupyter-based application that aggregates AI updates, brand health metrics, competitive positioning, customer intelligence, industry trends, market share data, and win/loss analysis.",
      building: "Details coming soon — describe the technology stack, tools used, and your specific contributions.",
      results: "Provided C-suite with a single source of market intelligence, enabling faster strategic decisions backed by comprehensive, up-to-date competitive and market data."
    }
  },
  {
    slug: "commission-calculator",
    title: "Commission Calculator",
    role: "adops",
    roleLabel: "AD Ops Analyst",
    category: "enablement",
    section: "Team Enablement Tools & Processes",
    tags: ["Team Enablement Tool"],
    impactAreas: ["Team Motivation", "Compensation Transparency"],
    summary: "Tool that models monthly earnings and commission scenarios, improving ADM transparency and motivation.",
    featured: false,
    detail: {
      tagline: "Transparent earnings modeling for the team.",
      metrics: [
        { value: "Monthly", label: "Earnings Modeled" },
        { value: "Scenarios", label: "Commission" },
        { value: "Transparency", label: "Improved" },
        { value: "Motivation", label: "Increased" }
      ],
      problem: "ADMs couldn't easily understand or project their commission earnings, leading to frustration and reduced motivation.",
      solution: "Built a commission calculator that lets ADMs model monthly earnings and run different commission scenarios to understand their compensation potential.",
      building: "Details coming soon — describe the technology stack, tools used, and your specific contributions.",
      results: "Improved ADM transparency and motivation by giving them clear visibility into how their performance translates to earnings."
    }
  },
  {
    slug: "account-research-agent",
    title: "Account Research Agent",
    role: "adops",
    roleLabel: "AD Ops Analyst",
    category: "enablement",
    section: "Team Enablement Tools & Processes",
    tags: ["Enablement Tool (Automation)"],
    impactAreas: ["Sales Efficiency", "Meeting Readiness"],
    summary: "Automated pre-discovery account intelligence that improves meeting readiness for ADMs and Sales.",
    featured: false,
    detail: {
      tagline: "Automated account research so reps come prepared.",
      metrics: [
        { value: "Automated", label: "Pre-Discovery Intel" },
        { value: "Meeting Ready", label: "Reps" },
        { value: "ADMs + Sales", label: "Users" },
        { value: "Time Saved", label: "Per Meeting" }
      ],
      problem: "Reps were spending significant time manually researching accounts before discovery calls, or worse, going in unprepared.",
      solution: "Created an automated account research agent that compiles pre-discovery intelligence, giving reps comprehensive account context before every meeting.",
      building: "Details coming soon — describe the technology stack, tools used, and your specific contributions.",
      results: "Improved meeting readiness across ADMs and Sales by automating the account research process and delivering actionable intelligence before every call."
    }
  },
  {
    slug: "next-best-use-case-tool",
    title: "Next Best Use Case Tool",
    role: "adops",
    roleLabel: "AD Ops Analyst",
    category: "enablement",
    section: "Team Enablement Tools & Processes",
    tags: ["Team Enablement Tool"],
    impactAreas: ["Upsell & Cross-sell Acceleration"],
    summary: "Data-backed use case prioritization tool leveraged by the upsell team for expansion conversations.",
    featured: false,
    detail: {
      tagline: "Data-driven expansion recommendations for every account.",
      metrics: [
        { value: "Upsell Team", label: "Primary Users" },
        { value: "Data-Backed", label: "Prioritization" },
        { value: "Use Cases", label: "Recommended" },
        { value: "Expansion", label: "Accelerated" }
      ],
      problem: "The upsell team lacked a systematic way to identify which use cases to recommend for each account, relying on gut instinct rather than data.",
      solution: "Built a tool that uses data-backed prioritization to recommend the next best use case for each account, giving the upsell team a clear expansion playbook.",
      building: "Details coming soon — describe the technology stack, tools used, and your specific contributions.",
      results: "Equipped the upsell team with data-driven expansion recommendations, accelerating cross-sell and upsell conversations with clear, prioritized use cases."
    }
  },

  // ── Strategic Initiatives ──
  {
    slug: "free-trial-growth-initiative",
    title: "Free Trial Growth Initiative",
    role: "adops",
    roleLabel: "AD Ops Analyst",
    category: "strategic",
    section: "Strategic Initiatives",
    tags: ["Strategic Initiative (Cross-Functional)"],
    impactAreas: ["Funnel Optimization", "Revenue Growth", "Product Intelligence"],
    summary: "Led a cross-functional transformation of the trial experience, dramatically improving onboarding scheduling, attendance, and conversion rates.",
    featured: true,
    detail: {
      tagline: "Cross-functional transformation of the free trial experience.",
      metrics: [
        { value: "\u219189%", label: "Onboarding Scheduling" },
        { value: "2\u00d7", label: "Attendance Rate" },
        { value: "27-32%", label: "MQL\u2192SAL Conversion" },
        { value: "14\u21924 Days", label: "Time to Onboarding" }
      ],
      problem: "The free trial experience had low onboarding scheduling rates, poor attendance, and a lengthy time-to-onboarding — limiting conversion and revenue potential.",
      solution: "Led a cross-functional initiative to transform the entire trial lifecycle, creating end-to-end visibility and automating Gong transcript analysis to surface recurring objections.",
      building: "Details coming soon — describe the technology stack, tools used, and your specific contributions.",
      results: "Onboarding scheduling improved 89% (8.2% to 15.5%), attendance doubled to 11-12%, MQL-to-SAL conversion sustained at 27-32%, and time-to-onboarding dropped from 14 to 4 days. Two of the best months since the Freemium drop occurred after these changes."
    }
  }
];
