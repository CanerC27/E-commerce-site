import { Link } from 'react-router-dom';
import { useState } from 'react';
import { BRAND } from '../../config/brand';
import { useShop } from '../../context/ShopContext';
import { useLanguage } from '../../i18n/LanguageContext';

export default function Footer() {
  const [email, setEmail] = useState('');
  const { showToastMessage } = useShop();
  const { lang, t } = useLanguage();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    showToastMessage(`${t('footer.subscribeThanks')} ${email}`);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="subscribe-row">
        <div className="container">
          <div className="footer-row-wrapper">
            <div className="footer-subscribe">
              <h3 className="subscribe-title">{t('footer.newsletter')}</h3>
              <p className="subscribe-desc">{t('footer.newsletterDesc')}</p>
              <form onSubmit={handleSubscribe}>
                <input type="email" placeholder={t('contact.email')} value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit" className="btn btn-primary">{t('footer.subscribe')}</button>
              </form>
              <p className="privacy-text">{t('footer.privacy')}</p>
            </div>
            <div className="footer-contact-block">
              <h3 className="contact-title">{t('footer.support')}<br />{BRAND.phone}</h3>
              <p className="contact-desc">{t('footer.supportHours')}</p>
              <div className="footer-social">
                <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="bi bi-instagram" /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="bi bi-twitter-x" /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="bi bi-linkedin" /></a>
              </div>
              <p className="privacy-text">{t('footer.social')}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="widgets-row">
        <div className="container">
          <div className="footer-widgets">
            <div className="brand-info">
              <Link to="/" className="logo footer-logo">
                <span className="logo-mark">M</span>
                <strong>{BRAND.name}</strong>
              </Link>
              <p className="footer-desc">{t('footer.about')}</p>
              <p className="footer-contact">
                <a href={`tel:${BRAND.phone.replace(/\D/g, '')}`}>{BRAND.phone}</a><br />
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a><br />
                <span>{BRAND.address[lang]}</span>
              </p>
            </div>
            <div className="widget-nav-menu">
              <h4>{t('footer.collection')}</h4>
              <ul>
                <li><Link to="/shop?category=giyim">{t('categories.giyim.name')}</Link></li>
                <li><Link to="/shop?category=aksesuar">{t('categories.aksesuar.name')}</Link></li>
                <li><Link to="/shop?category=ev-yasam">{t('categories.ev-yasam.name')}</Link></li>
                <li><Link to="/shop?category=teknoloji">{t('categories.teknoloji.name')}</Link></li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>{t('footer.myAccount')}</h4>
              <ul>
                <li><Link to="/account">{t('footer.loginRegister')}</Link></li>
                <li><Link to="/cart">{t('nav.cart')}</Link></li>
                <li><Link to="/favorites">{t('nav.favorites')}</Link></li>
                <li><Link to="/shop">{t('footer.allProducts')}</Link></li>
              </ul>
            </div>
            <div className="widget-nav-menu">
              <h4>{t('footer.corporate')}</h4>
              <ul>
                <li><Link to="/contact">{t('nav.contact')}</Link></li>
                <li><Link to="/blog">{t('nav.blog')}</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-row">
        <div className="container">
          <div className="footer-copyright">
            <p>© 2026 {BRAND.name}. {t('footer.rights')}</p>
            <div className="payment-icons">
              <i className="bi bi-credit-card-2-front" />
              <i className="bi bi-shield-lock" />
              <i className="bi bi-truck" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
