# MODERA — E-Ticaret Demo

Modern bir yaşam mağazası arayüzü. React + Vite ile yazıldı, backend yok — tamamen frontend demo.

**Repo:** [github.com/CanerC27/E-commerce-site](https://github.com/CanerC27/E-commerce-site)

---

## Ne bu?

Portfolyo ve UI çalışması için hazırlanmış bir e-ticaret sitesi. MODERA markası kurgusal; ürünler, fiyatlar ve blog yazıları `src/data/index.js` içinde tanımlı. Sepet ve favoriler tarayıcıda `localStorage` ile saklanıyor, sayfa yenilenince kaybolmuyor.

Gerçek ödeme, sipariş veya kullanıcı doğrulama yok. Formlar gönderildiğinde toast mesajı gösteriliyor, o kadar.

## Özellikler

- Ana sayfa (hero slider, kategoriler, kampanyalar, blog özeti)
- Ürün listeleme — kategori filtresi, sıralama, arama
- Ürün detay — galeri, beden/renk seçimi, beden tablosu
- Sepet — adet güncelleme, kupon (`MODERA20`), kargo eşiği (3000₺)
- Favoriler
- Blog listesi ve detay
- İletişim ve hesap sayfaları (demo form)
- TR / EN dil desteği
- Mobil uyumlu layout

## Teknolojiler

| | |
|---|---|
| React 18 | UI |
| React Router 6 | Sayfa yönlendirme |
| Vite 6 | Derleme ve dev server |
| CSS | Özel stil, harici UI kütüphanesi yok |
| Bootstrap Icons | İkonlar (CDN) |
| Unsplash | Ürün görselleri (CDN) |

## Kurulum

```bash
git clone https://github.com/CanerC27/E-commerce-site.git
cd E-commerce-site
npm install
npm run dev
```

Tarayıcıda `http://localhost:5173` açılır.

## Komutlar

```bash
npm run dev      # geliştirme
npm run build    # production build → dist/
npm run preview  # build önizleme
```

## Proje yapısı

```
src/
├── main.jsx              # giriş, router ve provider sarmalayıcıları
├── App.jsx               # route tanımları
├── config/brand.js       # marka bilgisi, hero/kampanya görselleri
├── context/ShopContext.jsx
├── data/index.js         # ürünler, kategoriler, blog
├── i18n/                 # TR/EN çeviriler
├── components/
│   ├── layout/           # Header, Footer, Layout
│   ├── home/             # HeroSlider, Categories
│   └── ui/               # ProductCard, Modal, Toast...
├── pages/                # sayfa bileşenleri
└── styles/index.css
```

## Demo notları

- Kupon kodu: `MODERA20` (%20 indirim)
- 3000₺ üzeri siparişlerde kargo ücretsiz gösterilir (hesaplama frontend'de)
- Görseller Unsplash CDN'den gelir, internet bağlantısı gerekir
- Eski HTML sürümü `legacy/` klasöründe duruyor, aktif proje React

## Lisans

MIT — detaylar için [LICENSE](LICENSE) dosyasına bak.

## Hakkında

Projenin geliştirme süreci ve kapsam sınırları için [ABOUT.md](ABOUT.md).
