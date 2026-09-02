import { Link } from 'react-router-dom';
import { blogs, getBlogField } from '../data';
import { useLanguage } from '../i18n/LanguageContext';
import { BlogImage } from '../components/ui/ProductImage';

export default function Blog() {
  const { lang, t } = useLanguage();

  return (
    <section className="blog-page">
      <div className="page-hero">
        <div className="container"><h1>{t('blog.title')}</h1><p>{t('blog.subtitle')}</p></div>
      </div>
      <div className="container">
        <ul className="blog-list grid">
          {blogs.map((blog) => (
            <li key={blog.id} className="blog-item">
              <Link to={`/blog/${blog.id}`}><BlogImage blog={blog} lang={lang} className="blog-card-img" /></Link>
              <div className="blog-info">
                <span className="blog-meta-line">{getBlogField(blog, 'date', lang)} · {blog.comments} {t('blog.comments')}</span>
                <Link to={`/blog/${blog.id}`} className="blog-title">{getBlogField(blog, 'title', lang)}</Link>
                <p className="blog-excerpt">{getBlogField(blog, 'excerpt', lang)}</p>
                <Link to={`/blog/${blog.id}`} className="blog-read">{t('home.readMore')} →</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
