import { Routes, Route, Link } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle";
import Card from "./components/Card";
import UIKit from "./pages/UIKit";

function Layout({ children }) {
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
        <nav
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between"
          aria-label="Ana navigasyon"
        >
          <Link
            to="/"
            aria-label="Ana sayfa - LAB-4"
            className="text-lg font-semibold text-primary dark:text-primary hover:opacity-90 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            LAB-4
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              to="/"
              aria-label="Ana sayfaya git"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm sm:text-base px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Ana Sayfa
            </Link>
            <Link
              to="/ui-kit"
              aria-label="UI Kit sayfasına git"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm sm:text-base px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
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
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-surface dark:bg-gray-900">
      <section
        id="about"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20"
        aria-labelledby="about-heading"
      >
        <h2
          id="about-heading"
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Hakkında
        </h2>
        <p className="text-muted max-w-2xl text-base sm:text-lg leading-relaxed">
          Web Programming LAB-4 — Tailwind CSS v4 ile kurulmuş bu proje, modern
          bileşenler ve erişilebilir yapı kullanır. Tema renkleri ve dark mode
          desteklenir.
        </p>
      </section>

      <section
        id="projects"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200 dark:border-gray-800"
        aria-labelledby="projects-heading"
      >
        <h2
          id="projects-heading"
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8"
        >
          Projeler
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Card variant="outlined">
            <h3 className="font-semibold text-lg text-primary dark:text-primary mb-2">
              Bileşen Kütüphanesi
            </h3>
            <p className="text-muted text-sm">
              Button, Input, Card, Alert ve ThemeToggle bileşenleri.
            </p>
          </Card>
          <Card variant="outlined">
            <h3 className="font-semibold text-lg text-primary dark:text-primary mb-2">
              UI Kit Sayfası
            </h3>
            <p className="text-muted text-sm">
              Tüm varyantların sergilendiği demo sayfa.
            </p>
          </Card>
          <Card variant="outlined">
            <h3 className="font-semibold text-lg text-primary dark:text-primary mb-2">
              Dark Mode
            </h3>
            <p className="text-muted text-sm">
              document.documentElement üzerinde dark sınıfı ile tema değişimi.
            </p>
          </Card>
        </div>
      </section>

      <section
        id="contact"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200 dark:border-gray-800"
        aria-labelledby="contact-heading"
      >
        <h2
          id="contact-heading"
          className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4"
        >
          İletişim
        </h2>
        <p className="text-muted max-w-2xl text-base sm:text-lg">
          Web Programming LAB — Navida. Sorularınız için e-posta veya kampüs
          ofisini kullanabilirsiniz.
        </p>
      </section>

      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <p className="text-sm text-muted text-center sm:text-left">
            © {new Date().getFullYear()} Web Programming LAB-4 — Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ui-kit" element={<UIKit />} />
      </Routes>
    </Layout>
  );
}
