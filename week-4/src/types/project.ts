export type ProjectCategory = "frontend" | "backend" | "fullstack"

/** UI filter value: all categories or a specific `Project.category`. */
export type CategoryFilter = "all" | ProjectCategory

export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  year: number
  category: ProjectCategory
  featured: boolean
  image: string
}

export function isProjectCategory(value: unknown): value is ProjectCategory {
  return (
    value === "frontend" || value === "backend" || value === "fullstack"
  )
}

/** Normalizes arbitrary select/string input to a safe `CategoryFilter`. */
export function parseCategoryFilter(value: string): CategoryFilter {
  if (
    value === "all" ||
    value === "frontend" ||
    value === "backend" ||
    value === "fullstack"
  ) {
    return value
  }
  return "all"
}

export function isProject(value: unknown): value is Project {
  if (typeof value !== "object" || value === null) return false
  const o = value as Record<string, unknown>
  return (
    typeof o.id === "string" &&
    typeof o.title === "string" &&
    typeof o.description === "string" &&
    Array.isArray(o.tech) &&
    o.tech.every((t) => typeof t === "string") &&
    typeof o.year === "number" &&
    isProjectCategory(o.category) &&
    typeof o.featured === "boolean" &&
    typeof o.image === "string"
  )
}
