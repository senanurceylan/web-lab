import { isProject, type Project } from "../types/project"

const PROJECTS_URL = "/data/projects.json"

export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch(PROJECTS_URL)

    if (!response.ok) {
      throw new Error(
        `Projeler yüklenemedi: ${response.status} ${response.statusText}`,
      )
    }

    const data: unknown = await response.json()
    if (!Array.isArray(data)) {
      return []
    }

    return data.filter(isProject)
  } catch (err) {
    console.error(
      "fetchProjects:",
      err instanceof Error ? err.message : err,
    )
    throw err
  }
}
