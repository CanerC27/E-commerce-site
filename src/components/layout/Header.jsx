import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';
import { useLanguage } from '../../i18n/LanguageContext';
import { BRAND } from '../../config/brand';
import SearchModal from './SearchModal';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartCount, favorites } = useShop();
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();

  useEffect(() => { setMenuOpen(false); }, [location]);
  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen, searchOpen]);

  const navLink = ({ isActive }) => `menu-link${isActive ? ' active' : ''}`;

  return (
    <>
      <header>
        <div className="global-notification">
          <div className="container">
            <p>
              {t('banner.text')} <strong>{BRAND.couponCode}</strong>
              <Link to="/shop">{t('banner.cta')}</Link>
            </p>
          </div>
        </div>
        <div className="header-row">
          <div className="container">
            <div className="header-wrapper">
              <div className="header-mobile">
                <button type="button" className="icon-btn" onClick={() => setMenuOpen(true)} aria-label="Menu">
                  <i className="bi bi-list" />
                </button>
              </div>
              <div className="header-left">
                <Link to="/" className="logo">
                  <span className="logo-mark">M</span>
                  <span className="logo-text">
                    <strong>{BRAND.name}</strong>
                    <small>{BRAND.tagline[lang]}</small>
                  </span>
                </Link>
              </div>
              <div className={`header-center${menuOpen ? ' open' : ''}`}>
                <nav className="navigation">
                  <ul className="menu-list">
                    <li><NavLink to="/" className={navLink} end>{t('nav.home')}</NavLink></li>
                    <li><NavLink to="/shop" className={navLink}>{t('nav.shop')}</NavLink></li>
                    <li><NavLink to="/blog" className={navLink}>{t('nav.blog')}</NavLink></li>
                    <li><NavLink to="/contact" className={navLink}>{t('nav.contact')}</NavLink></li>
                  </ul>
                </nav>
                <button type="button" className="close-sidebar" onClick={() => setMenuOpen(false)}>
                  <i className="bi bi-x-lg" />
                </button>
              </div>
              <div className="header-right">
                <div className="lang-switch">
                  <button type="button" className={lang === 'tr' ? 'active' : ''} onClick={() => setLang('tr')}>TR</button>
                  <button type="button" className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
                </div>
                <div className="header-right-links">
                  <Link to="/account" aria-label={t('nav.account')}><i className="bi bi-person" /></Link>
                  <button type="button" className="icon-btn" onClick={() => setSearchOpen(true)} aria-label={t('nav.search')}>
                    <i className="bi bi-search" />
                  </button>
                  <Link to="/favorites" aria-label={t('nav.favorites')}>
                    <i className="bi bi-heart" />
                    {favorites.length > 0 && <span className="header-badge">{favorites.length}</span>}
                  </Link>
                  <Link to="/cart" aria-label={t('nav.cart')}>
                    <i className="bi bi-bag" />
                    {cartCount > 0 && <span className="header-cart-count">{cartCount}</span>}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
