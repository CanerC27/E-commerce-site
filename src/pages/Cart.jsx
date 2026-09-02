import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { useLanguage } from '../i18n/LanguageContext';
import { formatPrice, getProductName } from '../data';
import { BRAND } from '../config/brand';
import ProductImage from '../components/ui/ProductImage';
import Modal from '../components/ui/Modal';

export default function Cart() {
  const { cart, cartTotal, removeFromCart, updateQuantity, clearCart, showToastMessage } = useShop();
  const { lang, t } = useLanguage();
  const [coupon, setCoupon] = useState('');
  const [expressShipping, setExpressShipping] = useState(false);
  const [couponApplied, setCouponApplied] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const threshold = BRAND.freeShippingThreshold;
  const shippingCost = expressShipping ? 99 : cartTotal >= threshold ? 0 : 59;
  const discount = couponApplied ? Math.round(cartTotal * 0.2) : 0;
  const total = cartTotal - discount + shippingCost;
  const remaining = Math.max(0, threshold - cartTotal);
  const progress = Math.min(100, (cartTotal / threshold) * 100);

  const applyCoupon = (e) => {
    e.preventDefault();
    if (coupon.toUpperCase() === BRAND.couponCode) {
      setCouponApplied(true);
      showToastMessage(`${BRAND.couponCode} — ${t('cart.couponApplied')}`);
    } else {
      showToastMessage(t('cart.invalidCoupon'), 'info');
    }
  };

  const handleConfirm = () => {
    clearCart();
    setOrderComplete(true);
    showToastMessage(t('toast.orderSuccess'));
  };

  if (cart.length === 0 && !orderComplete) {
    return (
      <section className="cart-page">
        <div className="container">
          <div className="empty-state">
            <i className="bi bi-bag" />
            <h2>{t('cart.empty')}</h2>
            <p>{t('cart.emptyDesc')}</p>
            <Link to="/shop" className="btn btn-primary btn-lg">{t('cart.explore')}</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <div className="container">
        {cart.length > 0 && (
          <div className="cart-layout">
            <div className="cart-main">
              <div className="shipping-bar">
                {remaining > 0 ? (
                  <p>{t('cart.freeShipping')} <strong>{formatPrice(remaining, lang)}</strong> {t('cart.more')}</p>
                ) : (
                  <p className="success-text">{t('cart.freeShippingDone')}</p>
                )}
                <div className="progress-bar"><span style={{ width: `${progress}%` }} /></div>
              </div>

              <table className="cart-table">
                <thead>
                  <tr>
                    <th colSpan={2}>{t('cart.product')}</th>
                    <th>{t('cart.price')}</th>
                    <th>{t('cart.qty')}</th>
                    <th>{t('cart.total')}</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td className="cart-img-cell">
                        <ProductImage product={item} className="cart-thumb" />
                        <button type="button" className="remove-btn" onClick={() => removeFromCart(item.id)}><i className="bi bi-x" /></button>
                      </td>
                      <td>
                        <Link to={`/product/${item.id}`}>{getProductName(item, lang)}</Link>
                        {item.selectedSize && <small>{item.selectedSize}</small>}
                      </td>
                      <td>{formatPrice(item.price.newPrice, lang)}</td>
                      <td>
                        <div className="qty-box small">
                          <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>−</button>
                          <span>{item.quantity}</span>
                          <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                      </td>
                      <td><strong>{formatPrice(item.price.newPrice * item.quantity, lang)}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="cart-actions">
                <form className="coupon-form" onSubmit={applyCoupon}>
                  <input type="text" placeholder={`${t('cart.couponPlaceholder')}: ${BRAND.couponCode}`} value={coupon} onChange={(e) => setCoupon(e.target.value)} />
                  <button type="submit" className="btn btn-primary" disabled={couponApplied}>{couponApplied ? t('cart.applied') : t('cart.applyCoupon')}</button>
                </form>
                <button type="button" className="btn btn-outline" onClick={() => { clearCart(); showToastMessage(t('toast.clearedCart'), 'info'); }}>{t('cart.clearCart')}</button>
              </div>
            </div>

            <aside className="cart-summary">
              <h2>{t('cart.summary')}</h2>
              <div className="summary-row"><span>{t('cart.subtotal')}</span><span>{formatPrice(cartTotal, lang)}</span></div>
              {couponApplied && <div className="summary-row discount"><span>{t('cart.discount')}</span><span>−{formatPrice(discount, lang)}</span></div>}
              <div className="summary-row">
                <span>{t('cart.shipping')}</span>
                <span>{cartTotal >= threshold && !expressShipping ? t('cart.free') : formatPrice(shippingCost, lang)}</span>
              </div>
              <label className="express-check">
                <input type="checkbox" checked={expressShipping} onChange={(e) => setExpressShipping(e.target.checked)} />
                {t('cart.express')} (+{formatPrice(99, lang)})
              </label>
              <div className="summary-total">
                <span>{t('cart.total')}</span>
                <strong>{formatPrice(total, lang)}</strong>
              </div>
              <button type="button" className="btn btn-lg btn-primary" onClick={() => setCheckoutOpen(true)}>{t('cart.checkout')}</button>
            </aside>
          </div>
        )}
      </div>

      <Modal isOpen={checkoutOpen} onClose={() => { setCheckoutOpen(false); setOrderComplete(false); }} title={orderComplete ? t('cart.thankYou') : t('cart.confirmTitle')} size="sm">
        <div className="checkout-modal">
          {orderComplete ? (
            <>
              <i className="bi bi-check-circle-fill checkout-icon" />
              <h4>{t('cart.orderReceived')}</h4>
              <p>{t('cart.orderNo')}: <strong>MD-{Date.now().toString().slice(-6)}</strong></p>
              <p className="checkout-note">{t('cart.emailNote')}</p>
              <Link to="/shop" className="btn btn-primary" onClick={() => setCheckoutOpen(false)}>{t('cart.continue')}</Link>
            </>
          ) : (
            <>
              <p>{t('cart.totalLabel')}: <strong>{formatPrice(total, lang)}</strong></p>
              <p className="checkout-note">{t('cart.demoNote')}</p>
              <div className="checkout-btns">
                <button type="button" className="btn btn-primary" onClick={handleConfirm}>{t('cart.confirm')}</button>
                <button type="button" className="btn btn-outline" onClick={() => setCheckoutOpen(false)}>{t('cart.cancel')}</button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </section>
  );
}
