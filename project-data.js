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
    },
    richDetail: {
      subtitle: "Call Review app to score, track, and improve sales team\u2019s performance with the STC framework.",
      heroStats: [
        { value: "196", label: "Commits" },
        { value: "7,800", label: "Lines of Code" },
        { value: "8", label: "Modular Components" }
      ],
      sections: [
        {
          type: "features",
          overline: "Overview",
          title: "Why COMINT?",
          subtitle: "Gives leaders and reps visibility into skill gaps and coaching opportunities.",
          cards: [
            { icon: "\uD83D\uDD0D", title: "Standardized Scoring", description: "Every call scored on the same 9-category STC framework. No more subjective, inconsistent feedback across reviewers." },
            { icon: "\uD83D\uDCCA", title: "Aggregated Dashboards", description: "See rep-level and team-level score trends over time. Identify who needs coaching and where the gaps are." },
            { icon: "\uD83C\uDFC6", title: "Top Performers", description: "Surface the best calls and highest-scoring reps so new hires can learn from real examples of excellence." },
            { icon: "\uD83E\uDD16", title: "AI + Human Reviews", description: "Three review types work together: Leadership, Peer, and automated AI scoring for complete coverage." },
            { icon: "\uD83D\uDD12", title: "Role-Based Access", description: "Leaders see all reps and full reviewer names. Reps see their own calls with anonymized peer feedback." },
            { icon: "\u26A1", title: "Built on Domo", description: "Runs natively in Domo with AppDB storage and dataset syncing. No external tools or infrastructure needed." }
          ]
        },
        {
          type: "three-col",
          overline: "Review Types",
          title: "Three Types of Reviews",
          subtitle: "Each review type provides a unique perspective on call quality.",
          cards: [
            { icon: "\uD83D\uDC64", title: "Leadership", description: "Managers and directors review calls to set standards and identify coaching opportunities." },
            { icon: "\uD83D\uDC65", title: "Peer", description: "Reps review each other\u2019s calls. Anonymized in the dashboard to encourage honest feedback." },
            { icon: "\uD83E\uDD16", title: "AI-Generated", description: "Automated daily scoring via LLM analysis of call transcripts. Ensures every call gets baseline coverage." }
          ]
        },
        {
          type: "compare",
          overline: "Impact",
          title: "Before & After COMINT",
          headers: ["Capability", "Before COMINT", "With COMINT"],
          rows: [
            ["Call review consistency", "Ad hoc, varies by manager", "Standardized 9-category STC scoring"],
            ["Skill gap identification", "Gut feel, quarterly", "Real-time dashboard with category breakdowns"],
            ["Peer learning", "Informal shadowing", "Top Performers section, anonymized peer reviews"],
            ["Review coverage", "~5% of calls reviewed", "AI scores every call, humans review strategically"],
            ["New hire ramp time", "Learn by trial and error", "Study top-rated calls across every STC category"]
          ]
        },
        {
          type: "workflow",
          overline: "Workflow",
          title: "How COMINT Works",
          subtitle: "From opening the app to submitting your first review in under 5 minutes.",
          steps: [
            { label: "Open COMINT", sublabel: "in Domo" },
            { label: "Pick a Call", sublabel: "from the queue" },
            { label: "Listen & Score", sublabel: "9 STC categories" },
            { label: "Submit Review", sublabel: "scores + comments" },
            { label: "View Dashboard", sublabel: "track progress" }
          ]
        },
        {
          type: "steps",
          overline: "Guide",
          title: "Getting Started",
          subtitle: "Five steps from queue to dashboard.",
          items: [
            { title: "Open the Review Queue", description: "The queue shows all available calls filtered by your role. Leaders see all reps; reps see their own calls for peer review. Use column filters to narrow by account, rep, stage, date, or duration." },
            { title: "Select a Call to Review", description: "Click any row to open the call workspace with the Gong player on the left and the review form on the right. The Gong player requires Okta SSO \u2014 if it shows a login prompt, click the login button and the app will automatically reload the player when you return." },
            { title: "Listen and Score", description: "Play the Gong recording while filling out the review form. Score each of the 9 STC categories from 0\u20135 and optionally add comments. The overall score calculates automatically as the average." },
            { title: "Submit Your Review", description: "Hit submit. Your review is saved to the AppDB collection and automatically synced to the dashboard dataset. A success toast confirms the submission and you return to the queue." },
            { title: "Check the Dashboard", description: "Switch to the User Dashboard to see aggregated scores, KPI cards for each STC category, score trends over time, and the Top Performers section. Filter by rep, account, date range, or review type." }
          ]
        },
        {
          type: "rubric",
          overline: "Scoring Framework",
          title: "The STC Rubric",
          subtitle: "Each category is scored 0\u20135. Click any category to see the scoring criteria.",
          scoreNote: "The overall score is the average of all 9 categories. Scores below 3.0 are flagged for coaching, 3.0\u20133.9 indicate solid performance, and 4.0+ represents excellence.",
          categories: [
            {
              title: "Current Situation",
              description: "Did the rep explore where the prospect is today with genuine curiosity?",
              tiers: [
                { level: "high", scores: "4\u20135", content: "Genuine curiosity with broad, open-ended questions that let the prospect describe their world.", example: "Could you walk me through a typical day or week in your role?" },
                { level: "mid", scores: "2\u20133", content: "Decent but surface-level questions \u2014 gets the \u201Cwhat\u201D but not the \u201Chow\u201D or \u201Cwhy.\u201D", example: "What are your top 3 priorities this quarter?" },
                { level: "low", scores: "0\u20131", content: "Closed-ended or leading questions, or jumps directly to problems without exploration.", example: "So, are you struggling with lead generation?" }
              ]
            },
            {
              title: "Call Preparedness",
              description: "Did the rep\u2019s questions show specific research into the customer\u2019s company or industry?",
              tiers: [
                { level: "high", scores: "4\u20135", content: "Questions show specific research into the customer\u2019s company, industry, or recent news.", example: "I saw your CEO\u2019s recent article on sustainability \u2014 how does that initiative impact your team\u2019s goals?" },
                { level: "mid", scores: "2\u20133", content: "Basic research (knows company name/product) but lacks deeper insights into their specific situation.", example: "Since you\u2019re in the software industry, are you seeing X trend?" },
                { level: "low", scores: "0\u20131", content: "The call felt generic with no evidence of any research or preparation.", example: "So, tell me what your company does." }
              ]
            },
            {
              title: "Problem Defined",
              description: "Did the rep co-create the problem definition and guide the prospect to an \u201Caha\u201D moment?",
              tiers: [
                { level: "high", scores: "4\u20135", content: "Rep co-creates the problem definition, guiding the prospect to articulate the root cause themselves.", example: "That\u2019s a good point \u2014 I guess the real problem isn\u2019t just the slow reports, it\u2019s that we don\u2019t trust the data." },
                { level: "mid", scores: "2\u20133", content: "A problem is identified, but stays at surface level without exploring the root cause.", example: "Customer: \u201COur reporting is a mess.\u201D Rep: \u201COkay, so messy reporting is the main issue.\u201D" },
                { level: "low", scores: "0\u20131", content: "Rep accepts a vague symptom or immediately pitches a solution without defining the real problem.", example: "Customer: \u201COur reporting is slow.\u201D Rep: \u201CGreat, our product is super fast!\u201D" }
              ]
            },
            {
              title: "Impact",
              description: "Did the rep guide the customer to articulate the quantifiable business impact of the problem?",
              tiers: [
                { level: "high", scores: "4\u20135", content: "Rep successfully guides the customer to articulate quantifiable negative consequences in business terms.", example: "What\u2019s the cost in man-hours per week when your team has to manually fix those data errors?" },
                { level: "mid", scores: "2\u20133", content: "Discusses qualitative impact (\u201Cthat must be frustrating\u201D) but fails to quantify in business terms.", example: "How does that frustration affect team morale?" },
                { level: "low", scores: "0\u20131", content: "Rep ignores the impact or minimizes the pain, moving on without exploring consequences.", example: "Customer: \u201CIt\u2019s a huge headache.\u201D Rep: \u201COkay. Anyway\u2026\u201D" }
              ]
            },
            {
              title: "Ideal",
              description: "Did the rep get the prospect to describe their own ideal future state?",
              tiers: [
                { level: "high", scores: "4\u20135", content: "Uses \u201Cmagic wand\u201D or vision-oriented questions to get the prospect to describe their own desired outcomes.", example: "If you could wave a magic wand and design the perfect process from scratch, what would it look like?" },
                { level: "mid", scores: "2\u20133", content: "Leads the witness by framing the ideal state around their own product instead of the prospect\u2019s vision.", example: "What if you had a dashboard that showed you all these metrics in real-time?" },
                { level: "low", scores: "0\u20131", content: "Pitches their own product as the ideal solution instead of asking, or skips this step entirely.", example: "Let me show you what the future could look like with our platform." }
              ]
            },
            {
              title: "Benefit",
              description: "Did the rep connect discovery findings to outcomes the prospect can internalize?",
              tiers: [
                { level: "high", scores: "4\u20135", content: "Reframes features into outcome-oriented questions, forcing the prospect to internalize the value.", example: "You mentioned your team spends 20 hours a week on this. What would they do with that extra time?" },
                { level: "mid", scores: "2\u20133", content: "States a logical benefit but fails to explicitly connect it back to a pain the customer mentioned.", example: "This will help your team be more efficient." },
                { level: "low", scores: "0\u20131", content: "Feature-dumps or states generic benefits disconnected from the conversation.", example: "Our platform has 500+ connectors, AI-powered analytics, and real-time dashboards." }
              ]
            },
            {
              title: "Layering",
              description: "Did the rep use follow-up questions to peel back layers from operational to strategic?",
              tiers: [
                { level: "high", scores: "4\u20135", content: "Uses simple follow-up questions to peel back multiple layers, moving from operational to strategic impact.", example: "Tell me more about that.\u201D \u2026 \u201CWhat\u2019s the consequence of that when it happens?" },
                { level: "mid", scores: "2\u20133", content: "Asks one level of follow-up but stops there instead of continuing to dig deeper.", example: "Customer: \u201CThe report is slow.\u201D Rep: \u201CWhy is that an issue?\u201D Customer: \u201CIt delays our meetings.\u201D Rep: \u201COkay.\u201D" },
                { level: "low", scores: "0\u20131", content: "Accepts the first answer at face value and moves on without probing deeper at all.", example: "Customer: \u201CIt\u2019s slow.\u201D Rep: \u201CGot it. Next question\u2026\u201D" }
              ]
            },
            {
              title: "Demo Preparedness",
              description: "Was the discovery rich enough to deliver a customized, compelling demo?",
              tiers: [
                { level: "high", scores: "4\u20135", content: "Discovery was so rich the rep can deliver a highly customized demo framed as a compelling story.", example: "Based on what you told me about X, I\u2019m going to show you exactly how we can solve that." },
                { level: "mid", scores: "2\u20133", content: "Gathered enough info for a partially customized demo, but it lacks deep context from the conversation.", example: "I\u2019ll show you our reporting module since you mentioned reports." },
                { level: "low", scores: "0\u20131", content: "Discovery was poor, forcing any demo to be a generic \u201Cspray and pray\u201D presentation.", example: "Let me walk you through all of our features\u2026" }
              ]
            },
            {
              title: "Quantified Value",
              description: "Did the rep tie Domo\u2019s value to measurable business outcomes?",
              tiers: [
                { level: "high", scores: "4\u20135", content: "Rep ties Domo\u2019s value to specific, measurable outcomes using numbers from the conversation.", example: "If we cut that 20-hour weekly process to 2 hours, that\u2019s $180K in annual savings for your team alone." },
                { level: "mid", scores: "2\u20133", content: "References value in general terms but doesn\u2019t anchor to specific numbers from discovery.", example: "Customers typically see significant time savings with Domo." },
                { level: "low", scores: "0\u20131", content: "No attempt to quantify value, or uses only generic ROI claims disconnected from the prospect\u2019s situation.", example: "Domo delivers 10x ROI for our customers." }
              ]
            }
          ]
        },
        {
          type: "features",
          overline: "Platform",
          title: "Built on Domo Pro-Code",
          subtitle: "Custom HTML/JS/CSS applications that run inside Domo\u2019s environment with direct access to platform APIs.",
          cards: [
            { icon: "\uD83D\uDDA5\uFE0F", title: "Client-Side App", description: "Runs entirely client-side inside Domo\u2019s environment. No server, no SSR, no build step \u2014 just static HTML, JS, and CSS files." },
            { icon: "\uD83D\uDDC3\uFE0F", title: "AppDB Collections", description: "A NoSQL document store built into Domo. Reviews stored with a 21-field schema. Collections auto-sync to datasets." },
            { icon: "\uD83D\uDCCA", title: "Datasets & SQL", description: "SQL-queryable reads from a pre-joined dataset. Filters across thousands of records efficiently." },
            { icon: "\uD83D\uDE80", title: "Deploy Pipeline", description: "Development uses domo dev with a local proxy. Production deploys via domo publish \u2014 no CI/CD pipeline needed." }
          ]
        },
        {
          type: "tech",
          overline: "Tech Stack",
          title: "Zero Dependencies, Maximum Simplicity",
          subtitle: "No build step, no bundler, no node_modules. Just vanilla JavaScript served through Domo\u2019s CDN.",
          items: [
            { icon: "\u26A1", title: "Vanilla JavaScript", description: "ES Modules, no framework" },
            { icon: "\uD83C\uDFA8", title: "TailwindCSS v4", description: "Utility classes via CDN" },
            { icon: "\uD83D\uDCC8", title: "Chart.js", description: "Scores Over Time visualization" },
            { icon: "\uD83D\uDDC3\uFE0F", title: "Domo AppDB", description: "NoSQL write storage + sync" },
            { icon: "\uD83D\uDCCA", title: "Domo Datasets", description: "SQL reads, pre-joined data" },
            { icon: "\uD83C\uDF99\uFE0F", title: "Gong Embedded", description: "iframe call player + Okta SSO" },
            { icon: "\uD83E\uDD16", title: "Domo Jupyter", description: "LLM-powered AI review pipeline" },
            { icon: "\uD83D\uDE80", title: "Domo Pro-Code", description: "Platform hosting + deployment" }
          ]
        },
        {
          type: "timeline",
          overline: "Build Process",
          title: "From Concept to Production",
          subtitle: "Six phases of iterative development \u2014 from blank repo to production app.",
          items: [
            { phase: "Phase 1", title: "Prototype & Core Features", description: "Built the initial single-page app with review queue, Gong integration, 9-category scoring form, and AppDB persistence.", pills: ["SPA Architecture", "Gong iframe", "AppDB CRUD", "Scoring Form"] },
            { phase: "Phase 2", title: "Dashboard & Analytics", description: "Added the User Dashboard with STC KPI cards, Scores Over Time chart (Chart.js), Top Performers section, and role-based access control. Introduced team benchmark overlays from a separate dataset.", pills: ["Chart.js", "KPI Cards", "RBAC", "Team Benchmarks"] },
            { phase: "Phase 3", title: "AI Review Pipeline", description: "Created a Domo Jupyter notebook that uses an LLM to score every Gong call against the STC rubric automatically. Runs daily, writes AI reviews to the same AppDB collection as human reviews.", pills: ["Domo Jupyter", "LLM Scoring", "Prompt Engineering", "Automation"] },
            { phase: "Phase 4", title: "Reviewed Calls & Polish", description: "Built the Reviewed Calls tab with sortable columns, review carousel navigation, inline filters, and context-aware form behavior.", pills: ["Sortable Tables", "Filter Cache", "Context Awareness", "Subtab Toggle"] },
            { phase: "Phase 5", title: "Architecture Refactor", description: "The monolithic 3,445-line app.js was split into 8 focused ES modules with dependency injection. Zero regressions during the split.", pills: ["ES Modules", "Dependency Injection", "Zero Regressions"] },
            { phase: "Phase 6", title: "Documentation & Landing Page", description: "Created comprehensive CLAUDE.md project context, README, and a landing page \u2014 all through the same conversational workflow.", pills: ["CLAUDE.md", "Events Template", "Domo Design Language"] }
          ]
        },
        {
          type: "modules",
          overline: "Architecture",
          title: "Application Architecture",
          subtitle: "8 focused modules, each owning one concern. app.js orchestrates initialization and view switching.",
          items: [
            { name: "state.js", lines: "70", description: "Centralized application state" },
            { name: "config.js", lines: "99", description: "Constants, dataset IDs, STC names" },
            { name: "utils.js", lines: "246", description: "Formatting, toasts, colors, dates" },
            { name: "api.js", lines: "189", description: "Domo API data loading functions" },
            { name: "queue.js", lines: "410", description: "Call list, filters, cache" },
            { name: "reviewed.js", lines: "640", description: "Reviewed calls table, sort, subtabs" },
            { name: "workspace.js", lines: "918", description: "Gong player, review form, submission" },
            { name: "dashboard.js", lines: "616", description: "Scores, charts, Top Performers" }
          ],
          depFlow: [
            { from: "app.js", to: "initWorkspace(showView, renderQueue, invalidateCache)" },
            { from: "app.js", to: "initQueue(openCallReview)" },
            { from: "app.js", to: "initReviewed(openCallReview)" }
          ]
        },
        {
          type: "callout",
          title: "No Circular Dependencies",
          content: "Modules that need functions from the orchestrator (like showView()) receive them through dependency injection at startup. Each module exports an init() function that stores injected references in a module-level variable \u2014 keeping the import graph clean and acyclic."
        },
        {
          type: "data-architecture",
          overline: "Data Design",
          title: "Dual Read Architecture",
          subtitle: "Writes go to AppDB for speed; reads come from a pre-joined dataset for efficiency. The two stay in sync automatically.",
          tiers: [
            { label: "Write", color: "accent", items: [{ title: "Review Form", detail: "9 STC scores + comments" }, { title: "AppDB Collection", detail: "21 fields, snake_case" }] },
            { label: "Sync", color: "muted", items: [{ title: "Auto-Sync", detail: "syncEnabled: true" }] },
            { label: "Read", color: "green", items: [{ title: "AppDB Direct", detail: "Queue: myReviews (user-scoped)" }, { title: "Pre-Joined Dataset", detail: "Dashboard: callReviews (all, camelCase)" }] }
          ],
          metrics: [
            { value: "21", label: "Schema Fields" },
            { value: "3", label: "Datasets" },
            { value: "1", label: "Collection" }
          ]
        },
        {
          type: "pipeline",
          overline: "AI Pipeline",
          title: "How AI Reviews Work",
          subtitle: "Every call gets scored automatically by an LLM running on a daily schedule inside Domo\u2019s Jupyter environment.",
          stages: [
            { icon: "\uD83C\uDF99\uFE0F", title: "Gong Records", description: "Call audio & transcript captured automatically" },
            { icon: "\uD83D\uDCC4", title: "Domo Connector", description: "Syncs call metadata & transcripts to dataset" },
            { icon: "\uD83E\uDD16", title: "Jupyter + LLM", description: "Scores each category 0\u20135 with reasoning" },
            { icon: "\uD83D\uDCBE", title: "AppDB Write", description: "Saves review with scores & comments" },
            { icon: "\uD83D\uDCCA", title: "Dashboard", description: "AI reviews appear alongside human reviews" }
          ]
        }
      ]
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
