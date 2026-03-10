import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";
import Alert from "../components/Alert";

export default function UIKit() {
  return (
    <main className="min-h-screen bg-surface dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary dark:text-primary mb-2">
          UI Kit
        </h1>
        <p className="text-muted text-sm sm:text-base mb-6 md:mb-8">
          En az 8 bileşen varyantı — dark mode, responsive, aria-label ve focus:ring kullanılır.
        </p>

        {/* 1. Button variants */}
        <section className="mb-10 md:mb-12" aria-labelledby="buttons-heading">
          <h2 id="buttons-heading" className="text-lg sm:text-xl font-semibold mb-3 md:mb-4">
            Butonlar (variant + size + state)
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            <Button variant="primary" aria-label="Primary buton">
              Primary
            </Button>
            <Button variant="secondary" aria-label="Secondary buton">
              Secondary
            </Button>
            <Button variant="danger" aria-label="Tehlike butonu">
              Danger
            </Button>
            <Button variant="ghost" aria-label="Ghost buton">
              Ghost
            </Button>
            <Button variant="primary" size="sm" aria-label="Küçük primary buton">
              Küçük
            </Button>
            <Button variant="primary" size="lg" aria-label="Büyük primary buton">
              Büyük
            </Button>
            <Button variant="primary" disabled aria-label="Devre dışı buton">
              Disabled
            </Button>
          </div>
        </section>

        {/* 2. Input states */}
        <section className="mb-10 md:mb-12" aria-labelledby="inputs-heading">
          <h2 id="inputs-heading" className="text-lg sm:text-xl font-semibold mb-3 md:mb-4">
            Inputlar (label, helpText, error, disabled)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl">
            <Input
              label="Normal"
              placeholder="Placeholder"
              aria-label="Normal input"
            />
            <Input
              label="Yardım metni"
              helpText="aria-describedby ile yardım metni."
              placeholder="Yardım metni"
              aria-label="Yardım metinli input"
            />
            <Input
              label="Hata durumu"
              error="Bu alan zorunludur."
              placeholder="Hata"
              defaultValue="geçersiz"
              aria-label="Hata durumlu input"
            />
            <Input
              label="Disabled"
              disabled
              placeholder="Devre dışı"
              aria-label="Devre dışı input"
            />
          </div>
        </section>

        {/* 3–5. Card variants (elevated, outlined, filled + image + footer) */}
        <section className="mb-10 md:mb-12" aria-labelledby="cards-heading">
          <h2 id="cards-heading" className="text-lg sm:text-xl font-semibold mb-3 md:mb-4">
            Kartlar (elevated, outlined, filled, image, footer)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            <Card variant="elevated" aria-label="Gölgeli kart">
              <h3 className="font-semibold text-base sm:text-lg mb-2">Elevated</h3>
              <p className="text-muted text-sm">
                Gölgeli kart stili.
              </p>
            </Card>
            <Card variant="outlined" aria-label="Çerçeveli kart">
              <h3 className="font-semibold text-base sm:text-lg mb-2">Outlined</h3>
              <p className="text-muted text-sm">
                Çerçeveli kart stili.
              </p>
            </Card>
            <Card
              variant="filled"
              footer={<span className="text-sm text-muted">Footer alanı</span>}
              aria-label="Dolu arka plan ve footer’lı kart"
            >
              <h3 className="font-semibold text-base sm:text-lg mb-2">Filled</h3>
              <p className="text-muted text-sm">
                Dolu arka plan ve footer.
              </p>
            </Card>
            <Card
              variant="elevated"
              image="https://picsum.photos/400/225"
              imageAlt="Örnek görsel"
              aria-label="Görselli kart"
            >
              <h3 className="font-semibold text-base sm:text-lg mb-2">Görselli Kart</h3>
              <p className="text-muted text-sm">
                Opsiyonel image ile kart.
              </p>
            </Card>
          </div>
        </section>

        {/* 6–8. Alert variants (info, success, warning, error, dismissible) */}
        <section className="mb-10 md:mb-12" aria-labelledby="alerts-heading">
          <h2 id="alerts-heading" className="text-lg sm:text-xl font-semibold mb-3 md:mb-4">
            Uyarılar (info, success, warning, error, dismissible — role=alert)
          </h2>
          <div className="space-y-3 md:space-y-4 max-w-2xl">
            <Alert variant="info">
              Bilgi: Bu bir bilgi mesajıdır.
            </Alert>
            <Alert variant="success">
              Başarılı: İşlem tamamlandı.
            </Alert>
            <Alert variant="warning">
              Uyarı: Lütfen kontrol edin.
            </Alert>
            <Alert variant="error">
              Hata: Bir şeyler yanlış gitti.
            </Alert>
            <Alert variant="info" dismissible>
              Kapatılabilir uyarı — focus:ring ile erişilebilir kapatma.
            </Alert>
          </div>
        </section>
      </div>
    </main>
  );
}
