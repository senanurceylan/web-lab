import { useState } from 'react'

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <>
      {/* Skip link */}
      <a href="#main" className="skip-link">
        İçeriğe atla
      </a>

      <header className="site-header">
        <div className="header-inner">
          <h1 className="logo">Sena Nur Ceylan</h1>

          <button
            type="button"
            className="nav-toggle"
            aria-label="Menüyü aç/kapat"
            aria-expanded={isNavOpen}
            onClick={() => setIsNavOpen((open) => !open)}
          >
            <span className="nav-toggle-line" />
            <span className="nav-toggle-line" />
            <span className="nav-toggle-line" />
          </button>

          <nav
            aria-label="Ana Menü"
            className={`site-nav ${isNavOpen ? 'site-nav--open' : ''}`}
          >
            <ul className="nav-list">
              <li>
                <a href="#about">Hakkımda</a>
              </li>
              <li>
                <a href="#projects">Projeler</a>
              </li>
              <li>
                <a href="#contact-title">İletişim</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="hero" className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="hero-kicker">Portfolyo</p>
            <h2 id="hero-title" className="hero-title">
              <span className="hero-highlight">Sena Nur Ceylan</span>
            </h2>
            <p className="hero-subtitle">
              Yazılım mühendisliği öğrencisiyim. Modern web arayüzleri, UX ve
              erişilebilirlik üzerine çalışıyorum. Aşağıdan hakkımda daha
              detaylı bilgi alabilir, projelerimi inceleyebilir ve benimle
              iletişime geçebilirsin.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="hero-cta">
                Projeleri gör
              </a>
              <a href="#contact-title" className="hero-secondary">
                İletişime geç
              </a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-badge">Frontend · React · TS</div>
            <div className="hero-card">
              <span className="hero-card-label">Şu an aktif proje</span>
              <strong>Navidya · Keşif platformu</strong>
              <span className="hero-card-meta">Modern arayüz · Responsive</span>
            </div>
          </div>
        </section>

        <section id="about" aria-labelledby="about-title">
          <h2 id="about-title">Hakkımda</h2>
          <p>
            Yazılım mühendisliği öğrencisiyim ve özellikle modern web arayüzleri,
            UX ve erişilebilirlik alanlarına ilgi duyuyorum. React, TypeScript ve
            tasarım odaklı geliştirme ile kullanıcı dostu deneyimler tasarlıyorum.
          </p>
        </section>

        <section id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Projeler</h2>

          <div className="projects-grid">
            <article className="project-card" aria-labelledby="p1-title">
              <h3 id="p1-title">ElektrAize</h3>
              <p>Enerji tüketim verileriyle analiz ve görselleştirme.</p>
            </article>

            <article className="project-card" aria-labelledby="p2-title">
              <h3 id="p2-title">Navidya</h3>
              <p>Şehir/ülke keşfi ve öneri sunan bir web uygulaması.</p>
            </article>
          </div>
          <h2 id="contact-title">İletişim</h2>

          <form noValidate>
            <div>
              <label htmlFor="name">Sena Nur Ceylan</label>
              <input
                id="name"
                name="name"
                required
                minLength={3}
                aria-describedby="name-help"
              />
              <small id="name-help">En az 3 karakter.</small>
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                aria-describedby="email-help"
              />
              <small id="email-help">senanurceylan001@gmail.com</small>
            </div>

            <div>
              <label htmlFor="message">Mesaj</label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                aria-describedby="message-help"
              />
              <small id="message-help">En az 10 karakter.</small>
            </div>

            {/* Basit */}
            <p role="alert" aria-live="polite" className="form-alert">
              {/* Şimdilik boş bıraktım */}
            </p>

            <button type="submit">Gönder</button>
          </form>
        </section>
      </main>

      <footer>
        <p>© 2026 Sena Nur Ceylan</p>
      </footer>
    </>
  )
}

export default App