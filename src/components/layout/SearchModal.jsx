import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { products, formatPrice, getProductName, getProductCollection } from '../../data';
import { useLanguage } from '../../i18n/LanguageContext';
import ProductImage from '../ui/ProductImage';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const { lang, t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => { if (!isOpen) setQuery(''); }, [isOpen]);
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();
  const results = q
    ? products.filter((p) => {
        const name = getProductName(p, lang).toLowerCase();
        const col = getProductCollection(p, lang).toLowerCase();
        return name.includes(q) || col.includes(q);
      })
    : products.slice(0, 5);

  return (
    <div className="modal-search visible" onClick={onClose}>
      <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal-title">{t('search.title')}</h3>
        <p className="modal-text">{t('search.desc')}</p>
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder={t('search.placeholder')} value={query} onChange={(e) => setQuery(e.target.value)} autoFocus />
          <button type="submit"><i className="bi bi-search" /></button>
        </form>
        <div className="search-results">
          <div className="search-heading"><h3>{q ? t('search.results') : t('search.popular')}</h3></div>
          <div className="results">
            {results.length === 0 ? (
              <p className="no-results">{t('search.noResults')}</p>
            ) : (
              results.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="result-item" onClick={onClose}>
                  <ProductImage product={product} className="result-thumb" />
                  <div className="search-info">
                    <h4>{getProductName(product, lang)}</h4>
                    <span className="search-sku">{getProductCollection(product, lang)} · {product.sku}</span>
                    <span className="search-price">{formatPrice(product.price.newPrice, lang)}</span>
                  </div>
                </Link>
              ))
            )}
          </div>
          {q && results.length > 0 && (
            <button type="button" className="btn btn-outline btn-sm search-view-all" onClick={() => { navigate(`/shop?q=${encodeURIComponent(query)}`); onClose(); }}>
              {t('search.viewAll')} ({results.length})
            </button>
          )}
        </div>
        <button type="button" className="modal-close" onClick={onClose}><i className="bi bi-x-lg" /></button>
      </div>
    </div>
  );
}
