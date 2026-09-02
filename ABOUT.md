# Hakkında

## Projenin amacı

MODERA, frontend tarafında modern bir e-ticaret deneyimini göstermek için yapıldı. Amaç gerçek bir mağaza kurmak değil; routing, state yönetimi, çok dilli arayüz, sepet mantığı ve responsive tasarım gibi konuları tek bir projede toparlamaktı.

Marka adı, ürün isimleri ve içerikler tamamen kurgusal. Görseller [Unsplash](https://unsplash.com) üzerinden alınıyor.

## Nasıl gelişti?

Proje başlangıçta statik HTML/CSS/JS olarak yazılmıştı. Sonrasında React + Vite yapısına taşındı. Eski dosyalar `legacy/` altında duruyor; çalışan sürüm `src/` dizininde.

React tarafında bilinçli olarak sade tutuldu: Redux veya harici UI framework kullanılmadı. Sepet ve favoriler için Context API yeterli geldi. Çeviriler ayrı bir dosyada, dil tercihi `localStorage`'a yazılıyor.

## Neler gerçek, neler değil?

| Özellik | Durum |
|---------|--------|
| Sayfa geçişleri, filtreleme, arama | Çalışır |
| Sepet / favori ekleme-çıkarma | Çalışır (`localStorage`) |
| Kupon ve kargo hesabı | Frontend hesaplama |
| Ödeme, sipariş, e-posta | Demo — backend yok |
| Hesap girişi / kayıt | Demo form |
| Ürün stok kontrolü | Yok |

## Teknik tercihler

- **Vite:** Hızlı dev server, minimal config
- **React Router v6:** Layout route ile ortak header/footer
- **CSS değişkenleri:** Renk paleti ve tipografi tek yerden yönetiliyor
- **Görsel oranları:** Ürün kartları 3:4, hover'da aynı ürünün farklı kadrajı

## Geliştirici

**Caner Celik**  
GitHub: [@CanerC27](https://github.com/CanerC27)

Sorular veya öneriler için repo üzerinden issue açabilirsiniz.

## Demo olarak kullanım

Projeyi fork'layıp kendi portfolyonuzda gösterebilirsiniz. Kaynak gösterirseniz yeterli — MIT lisansı altında.

Ticari bir projede doğrudan kopyalamak yerine yapıyı referans almanız daha mantıklı; veriler ve marka bu demo için üretildi.
