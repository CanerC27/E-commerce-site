import { Link } from 'react-router-dom';
import { categories } from '../../data';
import { useLanguage } from '../../i18n/LanguageContext';
import SectionTitle from '../ui/SectionTitle';
import { CategoryImage } from '../ui/ProductImage';

export default function Categories() {
  const { t } = useLanguage();

  return (
    <section className="categories">
      <div className="container">
        <SectionTitle title={t('home.categoriesTitle')} subtitle={t('home.categoriesSub')} />
        <ul className="category-list">
          {categories.map((cat) => (
            <li key={cat.id} className="category-item">
              <Link to={`/shop?category=${cat.slug}`}>
                <CategoryImage category={cat} />
                <div className="category-text">
                  <span className="category-title">{t(`categories.${cat.slug}.name`)}</span>
                  <span className="category-desc">{t(`categories.${cat.slug}.desc`)}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
