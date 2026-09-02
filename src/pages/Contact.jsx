import { useState } from 'react';
import { BRAND } from '../config/brand';
import { useShop } from '../context/ShopContext';
import { useLanguage } from '../i18n/LanguageContext';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { showToastMessage } = useShop();
  const { lang, t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToastMessage(t('toast.messageSent'));
  };

  return (
    <section className="contact-page">
      <div className="page-hero">
        <div className="container"><h1>{t('contact.title')}</h1><p>{t('contact.subtitle')}</p></div>
      </div>
      <div className="container contact-grid">
        {submitted ? (
          <div className="success-message full-width">
            <i className="bi bi-check-circle" />
            <h3>{t('contact.sent')}</h3>
            <p>{t('contact.sentDesc')}</p>
            <button type="button" className="btn btn-outline" onClick={() => setSubmitted(false)}>{t('contact.newMessage')}</button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>{t('contact.writeUs')}</h2>
            <div className="form-row">
              <div><label>{t('contact.name')} *</label><input type="text" required /></div>
              <div><label>{t('contact.email')} *</label><input type="email" required /></div>
            </div>
            <div>
              <label>{t('contact.subject')} *</label>
              <select required defaultValue="">
                <option value="" disabled>{t('contact.selectSubject')}</option>
                {t('contact.subjects').map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div><label>{t('contact.message')} *</label><textarea rows={5} required /></div>
            <button type="submit" className="btn btn-primary btn-lg">{t('contact.send')}</button>
          </form>
        )}
        <div className="contact-sidebar">
          {[
            { icon: 'bi-geo-alt', title: t('contact.store'), text: BRAND.address[lang] },
            { icon: 'bi-telephone', title: t('contact.phone'), text: BRAND.phone, link: `tel:${BRAND.phone.replace(/\D/g, '')}` },
            { icon: 'bi-envelope', title: t('contact.email'), text: BRAND.email, link: `mailto:${BRAND.email}` },
            { icon: 'bi-clock', title: t('contact.hours'), text: `${t('contact.hoursWeek')}\n${t('contact.hoursSun')}` },
          ].map((item) => (
            <div key={item.title} className="contact-card">
              <i className={`bi ${item.icon}`} />
              <div>
                <strong>{item.title}</strong>
                {item.link ? <a href={item.link}>{item.text}</a> : <p style={{ whiteSpace: 'pre-line' }}>{item.text}</p>}
              </div>
            </div>
          ))}
          <div className="contact-map">
            <iframe title="MODERA" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.5!2d29.027!3d40.982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zS2FkxLFrxZ9llA!5e0!3m2!1str!2str" width="100%" height="200" style={{ border: 0, borderRadius: 12 }} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
