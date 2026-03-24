import type { CategoryFilter, Project } from "../types/project"

export type SortField = "title" | "year"

export type SortOrder = "asc" | "desc"

export interface ApplyFiltersParams {
  search: string
  category: CategoryFilter
  sortField: SortField
  sortOrder: SortOrder
}

export function parseSortField(value: string): SortField {
  if (value === "title" || value === "year") {
    return value
  }
  return "title"
}

export function parseSortOrder(value: string): SortOrder {
  if (value === "asc" || value === "desc") {
    return value
  }
  return "asc"
}

export function filterBySearch(
  projects: readonly Project[],
  query: string | null | undefined,
): Project[] {
  const normalized = (query ?? "").trim().toLowerCase()
  if (!normalized) {
    return [...projects]
  }

  return projects.filter((p) => {
    const titleMatch = p.title.toLowerCase().includes(normalized)
    const descMatch = p.description.toLowerCase().includes(normalized)
    const techMatch = p.tech.some((t) =>
      t.toLowerCase().includes(normalized),
    )
    return titleMatch || descMatch || techMatch
  })
}

export function filterByCategory(
  projects: readonly Project[],
  category: CategoryFilter | null | undefined,
): Project[] {
  if (category === "all" || category == null) {
    return [...projects]
  }

  return projects.filter((p) => p.category === category)
}

export function sortProjects(
  projects: readonly Project[],
  field: SortField,
  order: SortOrder,
): Project[] {
  const list = [...projects]
  const descending = order === "desc"

  if (field === "year") {
    list.sort((a, b) => {
      const diff = a.year - b.year
      return descending ? -diff : diff
    })
    return list
  }

  if (field === "title") {
    list.sort((a, b) => {
      const cmp = a.title.localeCompare(b.title, undefined, {
        sensitivity: "base",
      })
      return descending ? -cmp : cmp
    })
    return list
  }

  return list
}

export function applyFilters(
  projects: readonly Project[],
  { search, category, sortField, sortOrder }: ApplyFiltersParams,
): Project[] {
  let result = filterBySearch(projects, search)
  result = filterByCategory(result, category)
  result = sortProjects(result, sortField, sortOrder)
  return result
}
