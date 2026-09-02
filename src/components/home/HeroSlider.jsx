import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { sliderItems } from '../../data';
import { useLanguage } from '../../i18n/LanguageContext';
import { HeroImage } from '../ui/ProductImage';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const { t } = useLanguage();
  const slides = t('hero.slides');

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % sliderItems.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i) => setCurrent((i + sliderItems.length) % sliderItems.length);
  const links = ['/shop?category=giyim', '/shop?category=teknoloji', '/shop?category=ev-yasam'];

  return (
    <section className="slider">
      <div className="slider-elements">
        {sliderItems.map((slide, index) => {
          const isVisible = index === current || index === (current + 1) % sliderItems.length;
          return (
          <div key={slide.id} className={`slider-item${index === current ? ' active' : ''}`}>
            {isVisible && <HeroImage src={slide.image} />}
            <div className="slider-overlay" />
            <div className="container slider-content">
              <p className="slider-subtitle">{slides[index]?.subtitle}</p>
              <h2 className="slider-heading">{slides[index]?.title}</h2>
              <p className="slider-desc">{slides[index]?.desc}</p>
              <Link to={links[index]} className="btn btn-lg btn-primary">{slides[index]?.cta}</Link>
            </div>
          </div>
          );
        })}
        <div className="slider-nav">
          <button type="button" onClick={() => goTo(current - 1)}><i className="bi bi-arrow-left" /></button>
          <div className="slider-dots">
            {sliderItems.map((_, i) => (
              <button key={i} type="button" className={i === current ? 'active' : ''} onClick={() => goTo(i)} />
            ))}
          </div>
          <button type="button" onClick={() => goTo(current + 1)}><i className="bi bi-arrow-right" /></button>
        </div>
      </div>
    </section>
  );
}
