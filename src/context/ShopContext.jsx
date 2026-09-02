import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { getProductName } from '../data';

const ShopContext = createContext(null);

function loadFromStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(() => loadFromStorage('modera-cart', []));
  const [favorites, setFavorites] = useState(() => loadFromStorage('modera-favorites', []));
  const [toast, setToast] = useState(null);

  useEffect(() => {
    localStorage.setItem('modera-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('modera-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const showToastMessage = useCallback((message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3200);
  }, []);

  const addToCart = useCallback((product, quantity = 1, lang = 'tr') => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      const name = getProductName(product, lang);
      if (existing) {
        showToastMessage(`${name} ✓`);
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      showToastMessage(`${name} →`);
      return [...prev, { ...product, quantity }];
    });
  }, [showToastMessage]);

  const removeFromCart = useCallback((productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const clearFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  const toggleFavorite = useCallback((product, lang = 'tr') => {
    setFavorites((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      const name = getProductName(product, lang);
      if (exists) {
        showToastMessage(`${name} ♡`, 'info');
        return prev.filter((item) => item.id !== product.id);
      }
      showToastMessage(`${name} ♥`);
      return [...prev, product];
    });
  }, [showToastMessage]);

  const isFavorite = useCallback(
    (productId) => favorites.some((item) => item.id === productId),
    [favorites]
  );

  const isInCart = useCallback(
    (productId) => cart.some((item) => item.id === productId),
    [cart]
  );

  const cartTotal = cart.reduce((sum, item) => sum + item.price.newPrice * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <ShopContext.Provider
      value={{
        cart,
        favorites,
        cartTotal,
        cartCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        clearFavorites,
        toggleFavorite,
        isFavorite,
        isInCart,
        toast,
        showToastMessage,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error('useShop must be used within ShopProvider');
  return ctx;
}
