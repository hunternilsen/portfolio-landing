import type { Role, Category } from '../types/project'

export type RoleFilter = Role | 'all'
export type CategoryFilter = Category | 'all'

const ROLE_OPTIONS: { value: RoleFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'revops', label: 'RevOps Analyst' },
  { value: 'adops', label: 'AD Ops Analyst' },
]

const CATEGORY_OPTIONS: { value: CategoryFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'automation', label: 'Automation' },
  { value: 'dashboards', label: 'Dashboards' },
  { value: 'enablement', label: 'Enablement' },
  { value: 'intelligence', label: 'Intelligence' },
  { value: 'strategic', label: 'Strategic' },
]

interface FiltersProps {
  role: RoleFilter
  category: CategoryFilter
  onRoleChange: (role: RoleFilter) => void
  onCategoryChange: (category: CategoryFilter) => void
}

export function Filters({ role, category, onRoleChange, onCategoryChange }: FiltersProps) {
  return (
    <div className="filter-section" aria-label="Project filters">
      <div className="filter-groups">
        <div>
          <p className="filter-group-label">Role</p>
          <div className="filter-buttons" role="group" aria-label="Filter by role">
            {ROLE_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                className={'filter-btn' + (role === opt.value ? ' active' : '')}
                data-filter-type="role"
                data-filter-value={opt.value}
                aria-pressed={role === opt.value}
                onClick={() => onRoleChange(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="filter-group-label">Category</p>
          <div className="filter-buttons" role="group" aria-label="Filter by category">
            {CATEGORY_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                className={'filter-btn' + (category === opt.value ? ' active' : '')}
                data-filter-type="category"
                data-filter-value={opt.value}
                aria-pressed={category === opt.value}
                onClick={() => onCategoryChange(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
