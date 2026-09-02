import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { useLanguage } from '../i18n/LanguageContext';
import ProductCard from '../components/ui/ProductCard';

export default function Favorites() {
  const { favorites, clearFavorites, showToastMessage } = useShop();
  const { t } = useLanguage();

  if (favorites.length === 0) {
    return (
      <section className="favorites-page">
        <div className="page-hero">
          <div className="container"><h1>{t('favorites.title')}</h1><p>{t('favorites.subtitle')}</p></div>
        </div>
        <div className="container">
          <div className="empty-state">
            <i className="bi bi-heart" />
            <h2>{t('favorites.empty')}</h2>
            <p>{t('favorites.emptyDesc')}</p>
            <Link to="/shop" className="btn btn-primary btn-lg">{t('cart.explore')}</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="favorites-page">
      <div className="page-hero">
        <div className="container"><h1>{t('favorites.title')}</h1><p>{favorites.length} {t('favorites.saved')}</p></div>
      </div>
      <div className="container">
        <ul className="product-list grid">{favorites.map((p) => <ProductCard key={p.id} product={p} />)}</ul>
        <div className="section-cta">
          <button type="button" className="btn btn-outline" onClick={() => { clearFavorites(); showToastMessage(t('toast.clearedFav'), 'info'); }}>{t('favorites.clear')}</button>
        </div>
      </div>
    </section>
  );
}
