## CSS Kararları – Lab 3

### Breakpoint seçimi

- Mobile-first yaklaşımı kullanıldı:
  - **0–639px** → Mobil (varsayılan stiller).
  - **640px+** → Tablet: `@media (min-width: 640px)` ile navbar yataya geçiyor, hamburger gizleniyor, `projects-grid` 2 kolona çıkıyor.
  - **1024px+** → Masaüstü: `@media (min-width: 1024px)` ile `projects-grid` 3 kolona çıkıyor.
- Arka plan gradient’leri için ek olarak:
  - `@media (min-width: 480px)` → küçük tablet / büyük telefon için daha geniş gradient.
  - `@media (min-width: 640px)` → tablet ve üstü için ekstra highlight.

### Layout tercihleri

- Ana layout:
  - `#root` maksimum genişlik 1120px, ortalanmış ve responsive padding ile.
  - `main` bölümü dikey flex layout ile bölümlere ayrıldı, aralarında sabit gap kullanıldı.
- Navbar:
  - Mobile: `.header-inner` dikey, `.site-nav` gizli, hamburger (`.nav-toggle`) aktif, `nav-list` dikey.
  - Tablet+ : `.header-inner` yatay, `site-nav` flex, `nav-toggle` gizli, `nav-list` yatay.
- Hero:
  - `.hero` grid tabanlı, içerik ve görsel bloktan oluşan modern bir giriş alanı.
- Projeler:
  - `.projects-grid` card layout için CSS Grid, `.project-card` içinde flex column yapısı kullanıldı.
- Form ve footer, kart benzeri bölümler olarak tasarlandı; hepsi aynı radius ve shadow token’larını kullanıyor.

### Design tokens

- Tüm token’lar `src/styles/tokens.css` içinde:
  - **Renkler:** `--color-*` (arka plan, metin, border, accent, focus, warning vb.).
  - **Tipografi:** `--font-size-*` değerleri `clamp(min-rem, vw, max-rem)` ile fluid; başlıklar ve önemli metinler bu token’ları kullanıyor.
  - **Spacing:** `--space-*` ile margin/padding aralıkları yönetiliyor.
  - **Radius & shadow:** `--radius-*` ve `--shadow-soft` ile kart ve bileşen köşe yumuşaklığı / gölgeleri merkezi olarak kontrol ediliyor.
- `src/index.css` en üstte `@import './styles/tokens.css';` ile bu token’ları kullanıma alıyor; component CSS’te doğrudan hex/px yerine mümkün olduğunca token referansları kullanılıyor.

### Responsive strateji

- **Mobile-first:** Tüm base stiller 0–639px için yazıldı; daha geniş ekranlar için sadece `min-width` media query kullanılıyor.
- **Grid ve kartlar:**
  - `projects-grid` → `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));` ile kart sayısı ekrana göre otomatik ayarlanıyor.
  - `.project-card` → `display: flex; flex-direction: column; flex-grow: 1;` ile kart içeriği esnek; görseller için `object-fit: cover` kullanıldı.
- **Typografi:** Başlıklar ve kritik metinler `clamp` tabanlı `--font-size-*` token’larına bağlı; bu sayede metinler hem rem hem vw kombinasyonu ile fluid.
- **Erişilebilirlik ve etkileşim:**
  - `img` için `max-width: 100%; height: auto;` ile responsive görseller.
  - Link, buton ve form alanları için hover + `:focus-visible` durumları tanımlı; focus outline kaldırılmadı, güçlendirildi.
  - Skip-link ve klavye ile gezinti (Tab) destekleniyor.


