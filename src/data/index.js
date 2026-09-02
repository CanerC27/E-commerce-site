import { BRAND, IMG } from '../config/brand';

const u = (id, w = 800, h = 1067) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&auto=format&fit=crop&q=80`;

const uAlt = (id, fpX = 0.5, fpY = 0.45) =>
  `https://images.unsplash.com/photo-${id}?w=800&h=1067&auto=format&fit=crop&crop=focalpoint&fp-x=${fpX}&fp-y=${fpY}&fp-z=1.2&q=80`;

export const categories = [
  { id: 1, slug: 'giyim', icon: 'bi-suit-heart', image: u('1445205170230-053b83016050', 600) },
  { id: 2, slug: 'aksesuar', icon: 'bi-gem', image: u('1611926653458-09294b3142bf', 600) },
  { id: 3, slug: 'ev-yasam', icon: 'bi-house-heart', image: u('1616486338812-3dadae4b4ace', 600) },
  { id: 4, slug: 'teknoloji', icon: 'bi-cpu', image: u('1498049794561-7780e7231661', 600) },
  { id: 5, slug: 'bakim', icon: 'bi-droplet-half', image: u('1596462502278-27bfdc403348', 600) },
  { id: 6, slug: 'spor', icon: 'bi-lightning-charge', image: u('1517836357463-d25dfeac3438', 600) },
];

export const products = [
  {
    id: 1,
    category: 'giyim',
    sku: 'MD-GY-001',
    name: { tr: 'Milano Kaşmir Palto', en: 'Milano Cashmere Coat' },
    collection: { tr: 'Kış 2026', en: 'Winter 2026' },
    description: {
      tr: 'İtalyan kaşmir karışımlı, çift taraflı kesim palto. Su itici kaplama ve el dikişi detaylar.',
      en: 'Italian cashmere blend double-faced coat. Water-repellent finish and hand-stitched details.',
    },
    image: u('1515886657613-9f3515b0c78f'),
    images: [u('1515886657613-9f3515b0c78f'), uAlt('1515886657613-9f3515b0c78f', 0.5, 0.35), uAlt('1515886657613-9f3515b0c78f', 0.45, 0.55)],
    price: { oldPrice: 9490, newPrice: 6990 },
    discount: 26,
    rating: 4.9,
    reviews: 52,
    colors: ['#2c2c2c', '#5c4033', '#8b7355'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    category: 'aksesuar',
    sku: 'MD-AK-014',
    name: { tr: 'Zenith Seramik Saat', en: 'Zenith Ceramic Watch' },
    collection: { tr: 'Aksesuar Pro', en: 'Accessory Pro' },
    description: {
      tr: 'Japon kuvars mekanizma, safir cam ve mat seramik kasa. 5ATM su geçirmezlik.',
      en: 'Japanese quartz movement, sapphire crystal and matte ceramic case. 5ATM water resistance.',
    },
    image: u('1523275335684-37898b6baf30'),
    images: [u('1523275335684-37898b6baf30'), uAlt('1523275335684-37898b6baf30', 0.5, 0.4), uAlt('1523275335684-37898b6baf30', 0.55, 0.5)],
    price: { oldPrice: 5890, newPrice: 4290 },
    discount: 27,
    rating: 4.8,
    reviews: 94,
    colors: ['#1a1a1a', '#3d3d3d', '#6b5344'],
    sizes: ['Standart'],
  },
  {
    id: 3,
    category: 'ev-yasam',
    sku: 'MD-EV-007',
    name: { tr: 'Nordic Lounge Koltuk', en: 'Nordic Lounge Sofa' },
    collection: { tr: 'Ev Koleksiyonu', en: 'Home Collection' },
    description: {
      tr: 'Kadife döşeme, ceviz ağacı ayaklar. Ergonomik oturma profili ve modüler tasarım.',
      en: 'Velvet upholstery, walnut legs. Ergonomic seating profile and modular design.',
    },
    image: u('1555041469-a586c61ea9bc'),
    images: [u('1555041469-a586c61ea9bc'), uAlt('1555041469-a586c61ea9bc', 0.5, 0.42), uAlt('1555041469-a586c61ea9bc', 0.48, 0.58)],
    price: { oldPrice: 19990, newPrice: 14990 },
    discount: 25,
    rating: 4.7,
    reviews: 28,
    colors: ['#4a3728', '#2d4a3e', '#3d3d5c'],
    sizes: ['Tekli', 'İkili'],
  },
  {
    id: 4,
    category: 'teknoloji',
    sku: 'MD-TK-022',
    name: { tr: 'Pulse Pro Kulaklık', en: 'Pulse Pro Headphones' },
    collection: { tr: 'Audio Lab', en: 'Audio Lab' },
    description: {
      tr: 'Aktif gürültü engelleme, 40 saat pil ömrü. LDAC ve spatial audio desteği.',
      en: 'Active noise cancellation, 40-hour battery. LDAC and spatial audio support.',
    },
    image: u('1505740420928-5e560c06d30e'),
    images: [u('1505740420928-5e560c06d30e'), uAlt('1505740420928-5e560c06d30e', 0.5, 0.4), uAlt('1505740420928-5e560c06d30e', 0.52, 0.48)],
    price: { oldPrice: 4590, newPrice: 3190 },
    discount: 30,
    rating: 4.6,
    reviews: 168,
    colors: ['#1c1528', '#e8e8e8', '#8b6f4e'],
    sizes: ['Standart'],
  },
  {
    id: 5,
    category: 'bakim',
    sku: 'MD-BK-031',
    name: { tr: 'Lumière Cilt Serumu', en: 'Lumière Face Serum' },
    collection: { tr: 'Pure Care', en: 'Pure Care' },
    description: {
      tr: '%15 C vitamini ve hyaluronik asit. Paraben ve silikon içermez, dermatolojik testli.',
      en: '15% vitamin C and hyaluronic acid. Paraben and silicone free, dermatologically tested.',
    },
    image: u('1556228720-195a672e8a03'),
    images: [u('1556228720-195a672e8a03'), uAlt('1556228720-195a672e8a03', 0.5, 0.38), uAlt('1596462502278-27bfdc403348', 0.5, 0.45)],
    price: { oldPrice: 1990, newPrice: 1390 },
    discount: 30,
    rating: 4.9,
    reviews: 340,
    colors: ['#f5f0e8'],
    sizes: ['30ml', '50ml'],
  },
  {
    id: 6,
    category: 'spor',
    sku: 'MD-SP-018',
    name: { tr: 'Velocity Koşu Ayakkabısı', en: 'Velocity Running Shoes' },
    collection: { tr: 'Active Line', en: 'Active Line' },
    description: {
      tr: 'Karbon fiber taban plakası, nefes alabilen mesh üst yapı. Maraton onaylı.',
      en: 'Carbon fiber plate, breathable mesh upper. Marathon certified.',
    },
    image: u('1542291026-7eec264c27ff'),
    images: [u('1542291026-7eec264c27ff'), uAlt('1542291026-7eec264c27ff', 0.5, 0.4), uAlt('1542291026-7eec264c27ff', 0.45, 0.52)],
    price: { oldPrice: 3990, newPrice: 2790 },
    discount: 30,
    rating: 4.5,
    reviews: 86,
    colors: ['#1a2332', '#c0392b', '#ecf0f1'],
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
  },
  {
    id: 7,
    category: 'aksesuar',
    sku: 'MD-AK-009',
    name: { tr: 'Craft Deri Evrak Çantası', en: 'Craft Leather Briefcase' },
    collection: { tr: 'Artisan Studio', en: 'Artisan Studio' },
    description: {
      tr: 'Tam tahıl dana derisi, pirinç donanım. 15" laptop bölmesi ve RFID korumalı cep.',
      en: 'Full-grain leather, brass hardware. 15" laptop compartment and RFID-protected pocket.',
    },
    image: u('1608571423902-eed4a5ad8108'),
    images: [u('1608571423902-eed4a5ad8108'), uAlt('1608571423902-eed4a5ad8108', 0.5, 0.4), uAlt('1558618666-fcd25c85cd64', 0.5, 0.45)],
    price: { oldPrice: 6990, newPrice: 5190 },
    discount: 26,
    rating: 4.8,
    reviews: 45,
    colors: ['#3d2914', '#1a1a1a', '#6b5344'],
    sizes: ['Standart'],
  },
  {
    id: 8,
    category: 'ev-yasam',
    sku: 'MD-EV-012',
    name: { tr: 'Aura Akıllı Masa Lambası', en: 'Aura Smart Desk Lamp' },
    collection: { tr: 'Ev Koleksiyonu', en: 'Home Collection' },
    description: {
      tr: 'Renk sıcaklığı ayarlı LED, kablosuz şarj tabanı. Uygulama ile senkronize.',
      en: 'Adjustable color temperature LED, wireless charging base. App synchronized.',
    },
    image: u('1513506003901-1e6a229e2d15'),
    images: [u('1513506003901-1e6a229e2d15'), uAlt('1513506003901-1e6a229e2d15', 0.5, 0.32), uAlt('1513506003901-1e6a229e2d15', 0.55, 0.48)],
    price: { oldPrice: 2990, newPrice: 2290 },
    discount: 23,
    rating: 4.7,
    reviews: 71,
    colors: ['#f5f0e8', '#1c1528'],
    sizes: ['Standart'],
  },
];

export const blogs = [
  {
    id: 1,
    icon: 'bi-suit-heart',
    image: u('1515886657613-9f3515b0c78f', 900),
    date: { tr: '20 Şub, 2026', en: 'Feb 20, 2026' },
    comments: 16,
    title: { tr: 'Kapsül Gardırop Rehberi', en: 'Capsule Wardrobe Guide' },
    excerpt: {
      tr: 'Az parça, çok stil. MODERA stil ekibinden sezon geçişi ipuçları.',
      en: 'Few pieces, endless style. Season transition tips from the MODERA style team.',
    },
    content: {
      tr: `Kapsül gardırop felsefesi, az sayıda ama yüksek kaliteli parçayla sınırsız kombinasyon yaratmayı hedefler. MODERA stil danışmanlarımız, 12 temel parçayla 30'dan fazla farklı görünüm oluşturmanın mümkün olduğunu gösteriyor.

Nötr tonlarda bir palto, iki kaliteli pantolon, üç üst giyim parçası ve birkaç aksesuar — bu kadar. Geri kalan her şey detay ve kombinasyon sanatı.

Önemli olan trend kovalamak değil; kendi vücut tipinize, yaşam tarzınıza ve renk paletinize uygun parçalar seçmek.`,
      en: `The capsule wardrobe philosophy aims to create unlimited combinations with fewer, higher-quality pieces. MODERA style consultants show that 12 essential pieces can create over 30 different looks.

A neutral coat, two quality trousers, three tops and a few accessories — that's it. Everything else is the art of detail and combination.

What matters isn't chasing trends — it's choosing pieces that suit your body type, lifestyle and color palette.`,
    },
  },
  {
    id: 2,
    icon: 'bi-house-heart',
    image: u('1616486338812-3dadae4b4ace', 900),
    date: { tr: '14 Şub, 2026', en: 'Feb 14, 2026' },
    comments: 9,
    title: { tr: 'Minimal Ev Dekorasyonu', en: 'Minimal Home Decor' },
    excerpt: {
      tr: 'Fonksiyonel ve estetik yaşam alanları tasarlamanın altın kuralları.',
      en: 'Golden rules for designing functional and aesthetic living spaces.',
    },
    content: {
      tr: `Minimal dekorasyon, boşluk bırakma sanatıdır. Her eşyanın bir amacı ve bir yeri olmalı. MODERA Ev & Yaşam koleksiyonumuz, bu felsefeyi ürün tasarımının merkezine koyuyor.

Doğal malzemeler — ceviz, keten, seramik — mekanınıza sıcaklık katar. Yapay ışık yerine gün ışığından maksimum faydalanın.`,
      en: `Minimal decoration is the art of leaving space. Every item should have a purpose and a place. MODERA Home & Living collection puts this philosophy at the center of product design.

Natural materials — walnut, linen, ceramic — add warmth to your space. Maximize daylight instead of artificial lighting.`,
    },
  },
  {
    id: 3,
    icon: 'bi-headphones',
    image: u('1505740420928-5e560c06d30e', 900),
    date: { tr: '8 Şub, 2026', en: 'Feb 8, 2026' },
    comments: 24,
    title: { tr: 'Ses Teknolojisinde Yeni Dönem', en: 'New Era in Audio Technology' },
    excerpt: {
      tr: 'Kablosuz kulaklık seçerken dikkat edilmesi gerekenler.',
      en: 'What to look for when choosing wireless headphones.',
    },
    content: {
      tr: `Ses teknolojisi hızla gelişiyor. MODERA Audio Lab ekibi, kulaklık seçiminde dikkat edilmesi gereken temel kriterleri sıralıyor: frekans yanıtı, ANC kalitesi ve codec desteği.

Pulse Pro serimiz, LDAC codec desteği ile kayıpsız ses aktarımı sunuyor.`,
      en: `Audio technology is evolving rapidly. The MODERA Audio Lab team lists key criteria: frequency response, ANC quality and codec support.

Our Pulse Pro series offers lossless audio transmission with LDAC codec support.`,
    },
  },
  {
    id: 4,
    icon: 'bi-droplet-half',
    image: u('1556228720-195a672e8a03', 900),
    date: { tr: '1 Şub, 2026', en: 'Feb 1, 2026' },
    comments: 35,
    title: { tr: 'Cilt Bakımında Bilim', en: 'The Science of Skincare' },
    excerpt: {
      tr: 'Lumière serisinin arkasındaki formül ve klinik testler.',
      en: 'The formula and clinical tests behind the Lumière series.',
    },
    content: {
      tr: `MODERA Pure Care laboratuvarında, dermatolojik etkinlik ile doğal içerikler arasında optimal denge arıyoruz. Lumière Cilt Serisi, 18 aylık AR-GE sürecinin ürünü.`,
      en: `At the MODERA Pure Care lab, we seek the optimal balance between dermatological efficacy and natural ingredients. The Lumière Face Serum is the result of 18 months of R&D.`,
    },
  },
  {
    id: 5,
    icon: 'bi-globe-americas',
    image: u('1542601906990-b4d3fb778b09', 900),
    date: { tr: '25 Oca, 2026', en: 'Jan 25, 2026' },
    comments: 21,
    title: { tr: 'Sürdürülebilir Lüks', en: 'Sustainable Luxury' },
    excerpt: {
      tr: 'MODERA\'nın 2026 sürdürülebilirlik taahhütleri.',
      en: 'MODERA\'s 2026 sustainability commitments.',
    },
    content: {
      tr: `Lüks ve sürdürülebilirlik birbirini dışlamaz. MODERA olarak karbon ayak izimizi %40 azaltmayı hedefliyoruz. Tüm kargo operasyonlarımız karbon nötr sertifikalı.`,
      en: `Luxury and sustainability aren't mutually exclusive. MODERA aims to reduce our carbon footprint by 40%. All shipping operations are carbon-neutral certified.`,
    },
  },
  {
    id: 6,
    icon: 'bi-lightning-charge',
    image: u('1542291026-7eec264c27ff', 900),
    date: { tr: '18 Oca, 2026', en: 'Jan 18, 2026' },
    comments: 13,
    title: { tr: 'Performans Ayakkabı Teknolojisi', en: 'Performance Shoe Technology' },
    excerpt: {
      tr: 'Velocity serisinin biomekanik mühendislik hikayesi.',
      en: 'The biomechanical engineering story of the Velocity series.',
    },
    content: {
      tr: `Velocity Koşu Ayakkabısı, 14 ay süren biomekanik araştırmanın sonucu. Karbon fiber taban plakası, her adımda enerjiyi geri kazandırır.`,
      en: `The Velocity Running Shoe is the result of 14 months of biomechanical research. The carbon fiber plate returns energy with every stride.`,
    },
  },
];

export const trustBadges = [
  { icon: 'bi-shield-check' },
  { icon: 'bi-award' },
  { icon: 'bi-truck' },
  { icon: 'bi-arrow-repeat' },
  { icon: 'bi-headset' },
];

export const sliderItems = IMG.hero.map((image, i) => ({ id: i + 1, image }));

export const campaigns = [
  { id: 1, slug: 'giyim', link: '/shop?category=giyim', image: IMG.campaign[0] },
  { id: 2, slug: 'aksesuar', link: '/shop?category=aksesuar', image: IMG.campaign[1] },
  { id: 3, slug: 'ev-yasam', link: '/shop?category=ev-yasam', image: IMG.campaign[2] },
  { id: 4, slug: 'teknoloji', link: '/shop?category=teknoloji', image: IMG.campaign[3] },
];

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}

export function getBlogById(id) {
  return blogs.find((b) => b.id === Number(id));
}

export function getProductName(product, lang) {
  return product.name[lang] || product.name.tr;
}

export function getProductCollection(product, lang) {
  return product.collection[lang] || product.collection.tr;
}

export function getProductDescription(product, lang) {
  return product.description[lang] || product.description.tr;
}

export function getBlogField(blog, field, lang) {
  const val = blog[field];
  if (typeof val === 'object' && val !== null) return val[lang] || val.tr;
  return val;
}

export function getCategoryName(slug, lang, t) {
  return t(`categories.${slug}.name`);
}

export function formatPrice(price, lang = 'tr') {
  const locale = BRAND.locale[lang] || 'tr-TR';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export { BRAND, IMG };
