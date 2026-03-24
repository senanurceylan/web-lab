export function filterBySearch(projects, query) {
  const normalized = (query ?? "").trim().toLowerCase()
  if (!normalized) {
    return projects
  }

  return projects.filter((p) => {
    const titleMatch = p.title.toLowerCase().includes(normalized)
    const descMatch = p.description.toLowerCase().includes(normalized)
    const techMatch =
      Array.isArray(p.tech) &&
      p.tech.some((t) => String(t).toLowerCase().includes(normalized))
    return titleMatch || descMatch || techMatch
  })
}

export function filterByCategory(projects, category) {
  if (category === "all" || category == null || category === "") {
    return projects
  }

  return projects.filter((p) => p.category === category)
}

export function sortProjects(projects, field, order) {
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

export function applyFilters(projects, { search, category, sortField, sortOrder }) {
  let result = filterBySearch(projects, search)
  result = filterByCategory(result, category)
  result = sortProjects(result, sortField, sortOrder)
  return result
}
