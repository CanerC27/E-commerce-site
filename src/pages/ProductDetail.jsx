import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  getProductById, products, formatPrice, getProductName,
  getProductCollection, getProductDescription,
} from '../data';
import { useShop } from '../context/ShopContext';
import { useLanguage } from '../i18n/LanguageContext';
import StarRating from '../components/ui/StarRating';
import ProductCard from '../components/ui/ProductCard';
import ProductImage from '../components/ui/ProductImage';
import Modal from '../components/ui/Modal';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart, toggleFavorite, isFavorite, showToastMessage } = useShop();
  const { lang, t } = useLanguage();
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  if (!product) return <Navigate to="/shop" replace />;

  const name = getProductName(product, lang);
  const collection = getProductCollection(product, lang);
  const description = getProductDescription(product, lang);
  const sizes = product.sizes || ['Standart'];
  const currentSize = selectedSize || sizes[0];
  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  const isStandardSize = sizes[0] === 'Standart' || sizes[0] === 'Standard';

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) await navigator.share({ title: name, url });
    else { await navigator.clipboard.writeText(url); showToastMessage(t('product.linkCopied')); }
  };

  return (
    <section className="single-product">
      <div className="container">
        <nav className="breadcrump">
          <ul>
            <li><Link to="/">{t('product.home')}</Link></li>
            <li><Link to={`/shop?category=${product.category}`}>{t(`categories.${product.category}.name`)}</Link></li>
            <li>{name}</li>
          </ul>
        </nav>

        <div className="single-content">
          <div className="product-gallery">
            <ProductImage product={product} imageIndex={activeImage} className="gallery-main" alt={name} />
            <div className="gallery-thumbs">
              {(product.images || [product.image]).map((_, i) => (
                <button key={i} type="button" className={i === activeImage ? 'active' : ''} onClick={() => setActiveImage(i)}>
                  <ProductImage product={product} imageIndex={i} alt="" />
                </button>
              ))}
            </div>
          </div>

          <div className="product-detail-info">
            <span className="product-collection">{collection}</span>
            <h1>{name}</h1>
            <div className="product-review">
              <StarRating rating={product.rating} />
              <span>{product.reviews} {t('product.reviews')}</span>
            </div>
            <div className="product-price-row">
              <s>{formatPrice(product.price.oldPrice, lang)}</s>
              <strong>{formatPrice(product.price.newPrice, lang)}</strong>
              <span className="discount-badge">-{product.discount}%</span>
            </div>
            <p className="product-desc">{description}</p>

            {product.colors?.length > 1 && (
              <div className="color-row">
                <label>{t('product.color')}</label>
                <div className="color-swatches">
                  {product.colors.map((c, i) => (
                    <button key={c} type="button" className={selectedColor === i ? 'active' : ''} style={{ background: c }} onClick={() => setSelectedColor(i)} />
                  ))}
                </div>
              </div>
            )}

            <div className="size-row">
              <div className="size-header">
                <label>{isStandardSize ? t('product.option') : t('product.size')}</label>
                {!isStandardSize && (
                  <button type="button" className="link-btn" onClick={() => setSizeGuideOpen(true)}>{t('product.sizeGuide')}</button>
                )}
              </div>
              <div className="size-options">
                {sizes.map((s) => (
                  <button key={s} type="button" className={currentSize === s ? 'active' : ''} onClick={() => setSelectedSize(s)}>{s}</button>
                ))}
              </div>
            </div>

            <div className="add-row">
              <div className="qty-box">
                <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                <span>{quantity}</span>
                <button type="button" onClick={() => setQuantity(Math.min(99, quantity + 1))}>+</button>
              </div>
              <button type="button" className="btn btn-lg btn-primary" onClick={() => addToCart({ ...product, selectedSize: currentSize }, quantity, lang)}>
                {t('product.addToCart')}
              </button>
            </div>

            <div className="extra-actions">
              <button type="button" onClick={() => toggleFavorite(product, lang)}>
                <i className={`bi bi-heart${isFavorite(product.id) ? '-fill' : ''}`} />
                {isFavorite(product.id) ? t('product.removeFavorites') : t('product.favorites')}
              </button>
              <button type="button" onClick={handleShare}><i className="bi bi-share" />{t('product.share')}</button>
            </div>

            <div className="meta-row">
              <span>{t('product.sku')}: <strong>{product.sku}</strong></span>
              <span>{t('product.category')}: <strong>{t(`categories.${product.category}.name`)}</strong></span>
            </div>
          </div>
        </div>

        <div className="tabs-section">
          <div className="tab-btns">
            <button type="button" className={activeTab === 'description' ? 'active' : ''} onClick={() => setActiveTab('description')}>{t('product.description')}</button>
            <button type="button" className={activeTab === 'reviews' ? 'active' : ''} onClick={() => setActiveTab('reviews')}>{t('product.reviewsTab')}</button>
          </div>
          {activeTab === 'description' && (
            <div className="tab-content">
              <p>{description}</p>
              <ul className="feature-list">
                {t('product.features').map((f) => <li key={f}><i className="bi bi-check2" />{f}</li>)}
              </ul>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div className="tab-content reviews-tab">
              <div className="review-score">
                <strong>{product.rating}</strong>
                <StarRating rating={product.rating} />
                <span>{product.reviews} {t('product.reviews')}</span>
              </div>
              <div className="review-card">
                <strong>Elif D.</strong><StarRating rating={5} />
                <p>{lang === 'tr' ? 'Harika kalite, özenli paketleme.' : 'Great quality, careful packaging.'}</p>
              </div>
              <div className="review-card">
                <strong>Can A.</strong><StarRating rating={4.5} />
                <p>{lang === 'tr' ? 'Hızlı teslimat, tavsiye ederim.' : 'Fast delivery, highly recommend.'}</p>
              </div>
            </div>
          )}
        </div>

        {related.length > 0 && (
          <div className="related-section">
            <h3>{t('product.related')}</h3>
            <ul className="product-list grid">{related.map((p) => <ProductCard key={p.id} product={p} />)}</ul>
          </div>
        )}
      </div>

      <Modal isOpen={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} title={t('sizeGuide.title')}>
        <p>{t('sizeGuide.desc')}</p>
        <table className="size-table">
          <thead><tr><th>{t('sizeGuide.size')}</th><th>{t('sizeGuide.chest')}</th><th>{t('sizeGuide.waist')}</th><th>{t('sizeGuide.hip')}</th></tr></thead>
          <tbody>
            {[['XS', '80-84', '60-64', '86-90'], ['S', '84-88', '64-68', '90-94'], ['M', '88-92', '68-72', '94-98'], ['L', '92-96', '72-76', '98-102'], ['XL', '96-100', '76-80', '102-106']].map(([s, a, b, c]) => (
              <tr key={s}><td>{s}</td><td>{a}</td><td>{b}</td><td>{c}</td></tr>
            ))}
          </tbody>
        </table>
        <p className="size-note">{t('sizeGuide.note')} <Link to="/contact">{t('nav.contact')}</Link></p>
      </Modal>
    </section>
  );
}
