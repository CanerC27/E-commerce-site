export default function StarRating({ rating = 5 }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push('fill');
    else if (rating >= i - 0.5) stars.push('half');
    else stars.push('empty');
  }
  return (
    <ul className="product-star">
      {stars.map((type, i) => (
        <li key={i}>
          <i className={`bi bi-star${type === 'fill' ? '-fill' : type === 'half' ? '-half' : ''}`} />
        </li>
      ))}
    </ul>
  );
}
