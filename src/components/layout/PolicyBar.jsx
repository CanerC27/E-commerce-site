import { useLanguage } from '../../i18n/LanguageContext';

export default function PolicyBar() {
  const { t } = useLanguage();
  const policies = t('policy');
  const icons = ['bi-truck', 'bi-headset', 'bi-arrow-repeat', 'bi-shield-check'];

  return (
    <section className="policy">
      <div className="container">
        <ul className="policy-list">
          {policies.map((item, i) => (
            <li key={item.title} className="policy-item">
              <i className={`bi ${icons[i]}`} />
              <div className="policy-texts">
                <strong>{item.title}</strong>
                <span>{item.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
