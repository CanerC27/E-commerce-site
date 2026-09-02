import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import HeroSlider from '../components/home/HeroSlider';
import Categories from '../components/home/Categories';
import SectionTitle from '../components/ui/SectionTitle';
import ProductCard from '../components/ui/ProductCard';
import { CampaignImage, BlogImage, HeritageImage } from '../components/ui/ProductImage';
import { products, campaigns, trustBadges, blogs, IMG, getBlogField } from '../data';

export default function Home() {
  const { lang, t } = useLanguage();
  const trust = t('trust');

  return (
    <>
      <HeroSlider />
      <Categories />

      <section className="products">
        <div className="container">
          <SectionTitle title={t('home.featuredTitle')} subtitle={t('home.featuredSub')} />
          <ul className="product-list grid">
            {products.map((p) => <ProductCard key={p.id} product={p} />)}
          </ul>
          <div className="section-cta">
            <Link to="/shop" className="btn btn-outline btn-lg">{t('home.viewAll')}</Link>
          </div>
        </div>
      </section>

      <section className="campaigns">
        <div className="container">
          <SectionTitle title={t('home.collectionsTitle')} subtitle={t('home.collectionsSub')} />
          <div className="campaigns-grid">
            {campaigns.map((camp) => (
              <Link key={camp.id} to={camp.link} className="campaign-item">
                <CampaignImage campaign={camp} title={t(`campaigns.${camp.slug}.title`)} />
                <div className="campaign-content">
                  <span className="campaign-sub">{t(`campaigns.${camp.slug}.sub`)}</span>
                  <span className="campaign-title">{t(`campaigns.${camp.slug}.title`)}</span>
                  <i className="bi bi-arrow-right campaign-arrow" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="heritage-block">
        <div className="container">
          <div className="heritage-grid">
            <div className="heritage-text">
              <span className="badge">{t('home.heritageBadge')}</span>
              <h2>{t('home.heritageTitle')}</h2>
              <p>{t('home.heritageDesc')}</p>
              <Link to="/shop?category=aksesuar" className="btn btn-primary btn-lg">{t('home.heritageCta')}</Link>
            </div>
            <div className="heritage-photo">
              <HeritageImage src={IMG.heritage} />
            </div>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="container">
          <ul className="trust-grid">
            {trustBadges.map((b, i) => (
              <li key={i} className="trust-item">
                <i className={`bi ${b.icon}`} />
                <div>
                  <strong>{trust[i]?.label}</strong>
                  <span>{trust[i]?.sub}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="blogs">
        <div className="container">
          <SectionTitle title={t('home.magazineTitle')} subtitle={t('home.magazineSub')} />
          <ul className="blog-list grid">
            {blogs.slice(0, 3).map((blog) => (
              <li key={blog.id} className="blog-item">
                <Link to={`/blog/${blog.id}`} className="blog-image">
                  <BlogImage blog={blog} lang={lang} />
                </Link>
                <div className="blog-info">
                  <div className="blog-meta-line">
                    {getBlogField(blog, 'date', lang)} · {blog.comments} {t('blog.comments')}
                  </div>
                  <Link to={`/blog/${blog.id}`} className="blog-title">{getBlogField(blog, 'title', lang)}</Link>
                  <Link to={`/blog/${blog.id}`} className="blog-read">{t('home.readMore')} <i className="bi bi-arrow-right" /></Link>
                </div>
              </li>
            ))}
          </ul>
          <div className="section-cta">
            <Link to="/blog" className="btn btn-outline">{t('home.allArticles')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
