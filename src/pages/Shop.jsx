import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories } from '../data';
import { useLanguage } from '../i18n/LanguageContext';
import SectionTitle from '../components/ui/SectionTitle';
import ProductCard from '../components/ui/ProductCard';
import { getProductName, getProductCollection } from '../data';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { lang, t } = useLanguage();
  const categoryFilter = searchParams.get('category') || '';
  const sortBy = searchParams.get('sort') || 'default';
  const searchQuery = searchParams.get('q') || '';

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (categoryFilter) result = result.filter((p) => p.category === categoryFilter);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter((p) =>
        getProductName(p, lang).toLowerCase().includes(q) ||
        getProductCollection(p, lang).toLowerCase().includes(q)
      );
    }
    if (sortBy === 'price-asc') result.sort((a, b) => a.price.newPrice - b.price.newPrice);
    if (sortBy === 'price-desc') result.sort((a, b) => b.price.newPrice - a.price.newPrice);
    if (sortBy === 'name') result.sort((a, b) => getProductName(a, lang).localeCompare(getProductName(b, lang), lang));
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [categoryFilter, sortBy, searchQuery, lang]);

  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) params.set(key, value);
    else params.delete(key);
    setSearchParams(params);
  };

  const pageTitle = categoryFilter ? t(`categories.${categoryFilter}.name`) : t('shop.title');

  return (
    <section className="shop-page">
      <div className="page-hero">
        <div className="container">
          <h1>{pageTitle}</h1>
          <p>{filteredProducts.length} {t('shop.products')} · {t('shop.curated')}</p>
        </div>
      </div>
      <div className="container">
        <div className="shop-layout">
          <aside className="shop-sidebar">
            <h3>{t('home.categoriesTitle')}</h3>
            <ul className="filter-list">
              <li>
                <button type="button" className={!categoryFilter ? 'active' : ''} onClick={() => updateParam('category', '')}>
                  {t('shop.allCategories')}
                </button>
              </li>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button type="button" className={categoryFilter === cat.slug ? 'active' : ''} onClick={() => updateParam('category', cat.slug)}>
                    <i className={`bi ${cat.icon}`} /> {t(`categories.${cat.slug}.name`)}
                  </button>
                </li>
              ))}
            </ul>
          </aside>
          <div className="shop-main">
            <div className="shop-toolbar">
              <input type="text" placeholder={t('shop.searchPlaceholder')} value={searchQuery} onChange={(e) => updateParam('q', e.target.value)} className="shop-search" />
              <select value={sortBy} onChange={(e) => updateParam('sort', e.target.value)}>
                <option value="default">{t('shop.sortDefault')}</option>
                <option value="price-asc">{t('shop.sortPriceAsc')}</option>
                <option value="price-desc">{t('shop.sortPriceDesc')}</option>
                <option value="rating">{t('shop.sortRating')}</option>
                <option value="name">{t('shop.sortName')}</option>
              </select>
            </div>
            {filteredProducts.length === 0 ? (
              <div className="empty-state">
                <i className="bi bi-search" />
                <h3>{t('shop.noResults')}</h3>
                <p>{t('shop.noResultsDesc')}</p>
                <button type="button" className="btn btn-primary" onClick={() => setSearchParams({})}>{t('shop.clearFilters')}</button>
              </div>
            ) : (
              <ul className="product-list grid">
                {filteredProducts.map((p) => <ProductCard key={p.id} product={p} />)}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
