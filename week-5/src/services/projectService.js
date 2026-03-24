const PROJECTS_URL = "/data/projects.json"

export async function fetchProjects() {
  try {
    const response = await fetch(PROJECTS_URL)

    if (!response.ok) {
      throw new Error(
        `Projeler yüklenemedi: ${response.status} ${response.statusText}`,
      )
    }

    return await response.json()
  } catch (err) {
    console.error("fetchProjects:", err.message ?? err)
    throw err
  }
}
