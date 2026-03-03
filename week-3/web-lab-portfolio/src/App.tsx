function App() {
  return (
    <>
    <p>Formu doldurup benimle iletişime geçebilirsin.</p>
      {/* Skip link */}
      <a href="#main" className="skip-link">
        İçeriğe atla
      </a>

    <header className="site-header">
  <div className="header-inner">
    <h1 className="logo">Sena Nur Ceylan</h1>

    <nav aria-label="Ana Menü" className="site-nav">
      <ul className="nav-list">
        ...
      </ul>
    </nav>
  </div>
</header>

      <main id="main">
        <section id="about" aria-labelledby="about-title">
          <h2 id="about-title">Hakkımda</h2>
          <p>Yazılım mühendisliği öğrencisiyim.</p>
        </section>

        <section id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Projeler</h2>

          <article aria-labelledby="p1-title">
            <h3 id="p1-title">ElektrAize</h3>
            <p>Enerji tüketim verileriyle analiz ve görselleştirme.</p>
          </article>

          <article aria-labelledby="p2-title">
            <h3 id="p2-title">Navidya</h3>
            <p>Şehir/ülke keşfi ve öneri sunan bir web uygulaması.</p>
          </article>
       <section id="projects" aria-labelledby="projects-title">
  <h2 id="projects-title">Projeler</h2>

  <div className="projects-grid">
    <article className="project-card" aria-labelledby="p1-title">...</article>
    <article className="project-card" aria-labelledby="p2-title">...</article>
  </div>
</section>
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