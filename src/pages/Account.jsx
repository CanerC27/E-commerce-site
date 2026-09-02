import { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { useLanguage } from '../i18n/LanguageContext';

export default function Account() {
  const [tab, setTab] = useState('login');
  const { showToastMessage } = useShop();
  const { t } = useLanguage();

  return (
    <section className="account-page">
      <div className="page-hero">
        <div className="container"><h1>{t('account.title')}</h1><p>{t('account.subtitle')}</p></div>
      </div>
      <div className="container">
        <div className="account-tabs">
          <button type="button" className={tab === 'login' ? 'active' : ''} onClick={() => setTab('login')}>{t('account.login')}</button>
          <button type="button" className={tab === 'register' ? 'active' : ''} onClick={() => setTab('register')}>{t('account.register')}</button>
        </div>
        <div className="account-form-box">
          {tab === 'login' ? (
            <form onSubmit={(e) => { e.preventDefault(); showToastMessage(t('account.loginSuccess')); }}>
              <label>{t('account.email')} *<input type="email" required /></label>
              <label>{t('account.password')} *<input type="password" required minLength={6} /></label>
              <div className="form-extras">
                <label><input type="checkbox" /> {t('account.remember')}</label>
                <button type="button" className="link-btn" onClick={() => showToastMessage(t('account.resetSent'), 'info')}>{t('account.forgot')}</button>
              </div>
              <button type="submit" className="btn btn-primary btn-lg">{t('account.login')}</button>
            </form>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); showToastMessage(t('account.registerSuccess')); setTab('login'); }}>
              <div className="form-row">
                <label>{t('account.firstName')} *<input type="text" required /></label>
                <label>{t('account.lastName')} *<input type="text" required /></label>
              </div>
              <label>{t('account.email')} *<input type="email" required /></label>
              <label>{t('account.password')} *<input type="password" required minLength={8} /></label>
              <p className="privacy-note">{t('account.privacy')}</p>
              <button type="submit" className="btn btn-primary btn-lg">{t('account.create')}</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
