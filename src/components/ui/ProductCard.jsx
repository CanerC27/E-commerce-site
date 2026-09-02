import { Link } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { formatPrice, getProductName, getProductCollection } from '../../data';
import StarRating from './StarRating';
import ProductImage from './ProductImage';

export default function ProductCard({ product }) {
  const { addToCart, toggleFavorite, isFavorite, isInCart, showToastMessage } = useShop();
  const { lang, t } = useLanguage();
  const fav = isFavorite(product.id);
  const name = getProductName(product, lang);
  const collection = getProductCollection(product, lang);

  const handleShare = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/product/${product.id}`;
    if (navigator.share) {
      await navigator.share({ title: name, url });
    } else {
      await navigator.clipboard.writeText(url);
      showToastMessage(t('product.linkCopied'));
    }
  };

  const hoverImage = product.images?.[1];
  const hasHover = hoverImage && hoverImage !== product.images?.[0];

  return (
    <li className="product-item">
      <div className="product-image">
        <Link to={`/product/${product.id}`}>
          <ProductImage product={product} alt={name} />
          {hasHover && <ProductImage product={product} imageIndex={1} className="hover-image" alt={name} />}
        </Link>
        <span className="product-discount">-{product.discount}%</span>
      </div>
      <div className="product-info">
        <span className="product-collection">{collection}</span>
        <Link to={`/product/${product.id}`} className="product-title">{name}</Link>
        <StarRating rating={product.rating} />
        <div className="product-prices">
          <strong className="new-price">{formatPrice(product.price.newPrice, lang)}</strong>
          <span className="old-price">{formatPrice(product.price.oldPrice, lang)}</span>
        </div>
        <div className="product-links">
          <button type="button" className={isInCart(product.id) ? 'in-cart' : ''} onClick={() => addToCart(product, 1, lang)} title={t('product.addToCart')}>
            <i className="bi bi-bag-plus" />
          </button>
          <button type="button" className={fav ? 'active' : ''} onClick={() => toggleFavorite(product, lang)} title={t('product.favorites')}>
            <i className={`bi bi-heart${fav ? '-fill' : ''}`} />
          </button>
          <Link to={`/product/${product.id}`} title={t('product.detail')}><i className="bi bi-arrow-up-right" /></Link>
          <button type="button" onClick={handleShare} title={t('product.share')}><i className="bi bi-share" /></button>
        </div>
      </div>
    </li>
  );
}
