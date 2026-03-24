import type { ChangeEvent, ReactNode } from "react"
import { useState, useEffect, useMemo } from "react"
import { Routes, Route, Link } from "react-router-dom"
import ThemeToggle from "./components/ThemeToggle"
import Card from "./components/Card"
import Input from "./components/Input"
import Alert from "./components/Alert"
import UIKit from "./pages/UIKit"
import { fetchProjects } from "./services/projectService"
import {
  applyFilters,
  parseSortField,
  parseSortOrder,
  type SortField,
  type SortOrder,
} from "./utils/projectHelpers"
import {
  parseCategoryFilter,
  type CategoryFilter,
  type Project,
} from "./types/project"

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="skip-link sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
        aria-label="Ana içeriğe atla"
      >
        Ana içeriğe atla
      </a>
      <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur border-b border-gray-200 dark:border-gray-800">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between" aria-label="Ana navigasyon">
          <Link to="/" aria-label="Ana sayfa - LAB-5" className="text-lg font-semibold text-primary dark:text-primary hover:opacity-90 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900">
            LAB-5
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/" aria-label="Ana sayfaya git" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm sm:text-base px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900">
              Ana Sayfa
            </Link>
            <Link to="/ui-kit" aria-label="UI Kit sayfasına git" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm sm:text-base px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900">
              UI Kit
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
    </>
  )
}

const selectClassName =
  "w-full px-3 py-2 rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"

function HomePage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [search, setSearch] = useState<string>("")
  const [category, setCategory] = useState<CategoryFilter>("all")
  const [sortField, setSortField] = useState<SortField>("title")
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc")
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      setError(null)
      try {
        const data = await fetchProjects()
        if (!cancelled) {
          setProjects(data)
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Projeler yüklenemedi.",
          )
          setProjects([])
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  const filteredProjects = useMemo<Project[]>(
    () => applyFilters(projects, { search, category, sortField, sortOrder }),
    [projects, search, category, sortField, sortOrder],
  )

  const filtersDisabled = loading

  return (
    <div className="min-h-screen bg-surface dark:bg-gray-900">
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20" aria-labelledby="about-heading">
        <h2 id="about-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Hakkında
        </h2>
        <p className="text-muted max-w-2xl text-base sm:text-lg leading-relaxed">
          Web Programming LAB-5 — Proje listesi <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 rounded">public/data/projects.json</code> dosyasından yüklenir; arama, kategori ve sıralama ile gezilebilir. Tema ve erişilebilir yapı LAB-4 ile uyumludur.
        </p>
      </section>
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200 dark:border-gray-800" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
          Projeler
        </h2>

        {error && (
          <Alert variant="error" className="mb-6">
            {error}
          </Alert>
        )}

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10 ${filtersDisabled ? "opacity-80" : ""}`}
          aria-busy={loading}
        >
          <div className="sm:col-span-2 lg:col-span-2 min-w-0">
            <Input
              label="Ara"
              placeholder="Başlık, açıklama veya teknoloji…"
              value={search}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value)
              }
              disabled={filtersDisabled}
            />
          </div>
          <div className="min-w-0">
            <label htmlFor="filter-category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Kategori
            </label>
            <select
              id="filter-category"
              className={selectClassName}
              value={category}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setCategory(parseCategoryFilter(e.target.value))
              }
              disabled={filtersDisabled}
              aria-label="Kategoriye göre filtrele"
            >
              <option value="all">Tümü</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">Full stack</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:col-span-2 lg:col-span-2 lg:grid-cols-2">
            <div className="min-w-0">
              <label htmlFor="sort-field" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Sıralama
              </label>
              <select
                id="sort-field"
                className={selectClassName}
                value={sortField}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  setSortField(parseSortField(e.target.value))
                }
                disabled={filtersDisabled}
                aria-label="Sıralama alanı"
              >
                <option value="title">Başlık</option>
                <option value="year">Yıl</option>
              </select>
            </div>
            <div className="min-w-0">
              <label htmlFor="sort-order" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Yön
              </label>
              <select
                id="sort-order"
                className={selectClassName}
                value={sortOrder}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  setSortOrder(parseSortOrder(e.target.value))
                }
                disabled={filtersDisabled}
                aria-label="Sıralama yönü"
              >
                <option value="asc">Artan</option>
                <option value="desc">Azalan</option>
              </select>
            </div>
          </div>
        </div>

        {loading && (
          <p className="text-muted text-center py-12 sm:py-16 text-base" role="status" aria-live="polite">
            Yükleniyor…
          </p>
        )}

        {!loading && !error && filteredProjects.length === 0 && (
          <p className="text-muted text-center py-12 sm:py-16 text-base max-w-xl mx-auto leading-relaxed">
            Kriterlere uyan proje bulunmuyor. Arama metnini veya kategori filtresini değiştirmeyi deneyin.
          </p>
        )}

        {!loading && !error && filteredProjects.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((p: Project) => (
              <Card
                key={p.id}
                variant="outlined"
                className="h-full flex flex-col"
                aria-label={p.title}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-semibold text-lg text-primary dark:text-primary leading-snug">
                    {p.title}
                  </h3>
                  {p.featured && (
                    <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded-full bg-primary/15 text-primary dark:bg-primary/25 dark:text-primary border border-primary/30 dark:border-primary/40">
                      Öne çıkan
                    </span>
                  )}
                </div>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{p.description}</p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted mb-3">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{p.year}</span>
                  <span className="text-gray-400 dark:text-gray-500" aria-hidden="true">
                    ·
                  </span>
                  <span className="uppercase tracking-wide">{p.category}</span>
                </div>
                <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0" aria-label="Kullanılan teknolojiler">
                  {p.tech.map((tech, idx) => (
                    <li
                      key={`${p.id}-tech-${idx}`}
                      className="text-xs px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        )}
      </section>
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200 dark:border-gray-800" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          İletişim
        </h2>
        <p className="text-muted max-w-2xl text-base sm:text-lg">
          Web Programming LAB — Navida. Sorularınız için e-posta veya kampüs ofisini kullanabilirsiniz.
        </p>
      </section>
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <p className="text-sm text-muted text-center sm:text-left">
            © {new Date().getFullYear()} Web Programming LAB-5 — Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ui-kit" element={<UIKit />} />
      </Routes>
    </Layout>
  )
}
