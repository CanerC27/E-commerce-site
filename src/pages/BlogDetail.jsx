import { useParams, Link, Navigate } from 'react-router-dom';
import { getBlogById, blogs, getBlogField } from '../data';
import { useLanguage } from '../i18n/LanguageContext';
import { BlogImage } from '../components/ui/ProductImage';

export default function BlogDetail() {
  const { id } = useParams();
  const blog = getBlogById(id);
  const { lang, t } = useLanguage();

  if (!blog) return <Navigate to="/blog" replace />;

  const related = blogs.filter((b) => b.id !== blog.id).slice(0, 3);
  const title = getBlogField(blog, 'title', lang);
  const content = getBlogField(blog, 'content', lang);

  return (
    <section className="blog-detail-page">
      <div className="container">
        <nav className="breadcrump">
          <ul>
            <li><Link to="/">{t('product.home')}</Link></li>
            <li><Link to="/blog">{t('blog.magazine')}</Link></li>
            <li>{title}</li>
          </ul>
        </nav>
        <article>
          <header className="article-header">
            <time>{getBlogField(blog, 'date', lang)}</time>
            <h1>{title}</h1>
            <span>{blog.comments} {t('blog.comments')}</span>
          </header>
          <BlogImage blog={blog} lang={lang} className="article-hero-img" />
          <div className="article-body">
            {content.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </article>
        {related.length > 0 && (
          <div className="related-section">
            <h3>{t('blog.related')}</h3>
            <ul className="blog-list grid">
              {related.map((b) => (
                <li key={b.id} className="blog-item">
                  <Link to={`/blog/${b.id}`}><BlogImage blog={b} lang={lang} /></Link>
                  <Link to={`/blog/${b.id}`} className="blog-title">{getBlogField(b, 'title', lang)}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
