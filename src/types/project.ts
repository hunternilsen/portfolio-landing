export type Role = 'revops' | 'adops'
export type Category = 'automation' | 'dashboards' | 'enablement' | 'intelligence' | 'strategic'

export interface Metric {
  value: string
  label: string
}

export interface PlainDetail {
  tagline: string
  metrics: Metric[]
  problem: string
  solution: string
  building: string
  results: string
}

export interface IconCard {
  icon: string
  title: string
  description: string
}

export interface FeaturesSection {
  type: 'features'
  overline?: string
  title?: string
  subtitle?: string
  cards: IconCard[]
}

export interface ThreeColSection {
  type: 'three-col'
  overline?: string
  title?: string
  subtitle?: string
  cards: IconCard[]
}

export interface CompareSection {
  type: 'compare'
  overline?: string
  title?: string
  subtitle?: string
  headers: string[]
  rows: string[][]
}

export interface WorkflowStep {
  label: string
  sublabel?: string
}

export interface WorkflowSection {
  type: 'workflow'
  overline?: string
  title?: string
  subtitle?: string
  steps: WorkflowStep[]
}

export interface PipelineStage {
  icon: string
  title: string
  description: string
}

export interface PipelineSection {
  type: 'pipeline'
  overline?: string
  title?: string
  subtitle?: string
  stages: PipelineStage[]
}

export interface TechSection {
  type: 'tech'
  overline?: string
  title?: string
  subtitle?: string
  items: IconCard[]
}

export interface StepsItem {
  title: string
  description: string
}

export interface StepsSection {
  type: 'steps'
  overline?: string
  title?: string
  subtitle?: string
  items: StepsItem[]
}

export type RubricLevel = 'high' | 'mid' | 'low'

export interface RubricTier {
  level: RubricLevel
  scores: string
  content: string
  example: string
}

export interface RubricCategory {
  title: string
  description: string
  tiers: RubricTier[]
}

export interface RubricSection {
  type: 'rubric'
  overline?: string
  title?: string
  subtitle?: string
  scoreNote?: string
  categories: RubricCategory[]
}

export interface AccordionItem {
  title: string
  description: string
  content: string
}

export interface AccordionSection {
  type: 'accordion'
  overline?: string
  title?: string
  subtitle?: string
  items: AccordionItem[]
}

export interface ModuleItem {
  name: string
  lines: string
  description: string
}

export interface DepFlowItem {
  from: string
  to: string
}

export interface ModulesSection {
  type: 'modules'
  overline?: string
  title?: string
  subtitle?: string
  depTitle?: string
  items: ModuleItem[]
  depFlow?: DepFlowItem[]
}

export type DataTierColor = 'accent' | 'muted' | 'green'

export interface DataTierItem {
  title: string
  detail: string
}

export interface DataTier {
  label: string
  color: DataTierColor
  items: DataTierItem[]
}

export interface DataArchitectureSection {
  type: 'data-architecture'
  overline?: string
  title?: string
  subtitle?: string
  tiers: DataTier[]
  metrics?: Metric[]
}

export interface TimelineItem {
  phase?: string
  title: string
  description: string
  pills?: string[]
}

export interface TimelineSection {
  type: 'timeline'
  overline?: string
  title?: string
  subtitle?: string
  items: TimelineItem[]
}

export interface CalloutSection {
  type: 'callout'
  title: string
  content: string
}

export interface ArchitectureBefore {
  title: string
  description: string
  lines: string[]
}

export interface ArchitectureAfterModule {
  name: string
  lines: string
  desc: string
}

export interface ArchitectureAfter {
  title: string
  description: string
  modules: ArchitectureAfterModule[]
}

export interface ArchitectureSection {
  type: 'architecture'
  overline?: string
  title?: string
  subtitle?: string
  before: ArchitectureBefore
  after: ArchitectureAfter
}

export type RichSection =
  | FeaturesSection
  | ThreeColSection
  | CompareSection
  | WorkflowSection
  | PipelineSection
  | TechSection
  | StepsSection
  | RubricSection
  | AccordionSection
  | ModulesSection
  | DataArchitectureSection
  | TimelineSection
  | CalloutSection
  | ArchitectureSection

export interface RichDetail {
  subtitle?: string
  heroStats?: Metric[]
  sections: RichSection[]
}

export interface Project {
  slug: string
  title: string
  date: string
  dateLabel: string
  role: Role
  roleLabel: string
  category: Category
  section: string
  tags: string[]
  impactAreas: string[]
  summary: string
  company: string
  featured: boolean
  cardStats?: string[]
  detail: PlainDetail
  richDetail?: RichDetail
}
