import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FALLBACK =
  'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=80';

function SafeImage({ src, alt, loading = 'lazy', className = '', width, height, fetchPriority }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading={loading}
      decoding="async"
      width={width}
      height={height}
      fetchPriority={fetchPriority}
      className={className}
      onError={() => {
        if (currentSrc !== FALLBACK) setCurrentSrc(FALLBACK);
      }}
    />
  );
}

export default function ProductImage({ product, imageIndex = 0, className = '', alt = '' }) {
  const src = product.images?.[imageIndex] || product.image;
  const name = typeof product.name === 'object' ? product.name.tr : product.name;

  return (
    <div className={`product-image-wrap ${className}`}>
      <SafeImage src={src} alt={alt || name} />
    </div>
  );
}

export function CategoryImage({ category, className = '' }) {
  return (
    <div className={`category-image-wrap ${className}`}>
      <SafeImage src={category.image} alt="" />
    </div>
  );
}

export function BlogImage({ blog, lang, className = '' }) {
  const title = typeof blog.title === 'object' ? blog.title[lang] || blog.title.tr : blog.title;
  return (
    <div className={`blog-image-wrap ${className}`}>
      <SafeImage src={blog.image} alt={title} />
    </div>
  );
}

export function CampaignImage({ campaign, title, className = '' }) {
  return (
    <div className={`campaign-image-wrap ${className}`}>
      <SafeImage src={campaign.image} alt={title} />
    </div>
  );
}

export function HeroImage({ src, className = '' }) {
  return (
    <div className={`hero-image-wrap ${className}`}>
      <SafeImage src={src} alt="" loading="eager" fetchPriority="high" width={1600} height={900} />
    </div>
  );
}

export function HeritageImage({ src, className = '' }) {
  return <SafeImage src={src} alt="" className={className} />;
}

export function ProductImageLink({ product, lang, children, className = '' }) {
  const name = typeof product.name === 'object' ? product.name[lang] || product.name.tr : product.name;
  return (
    <Link to={`/product/${product.id}`} className={`product-image-link ${className}`}>
      <ProductImage product={product} alt={name} />
      {children}
    </Link>
  );
}
