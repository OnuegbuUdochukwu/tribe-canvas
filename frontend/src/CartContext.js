import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (artwork) => {
    setCartItems((prevItems) => {
      // Check if item is already in cart
      const existingItem = prevItems.find((item) => item.id === artwork.id);
      if (existingItem) {
        // We can handle quantity here if we add that feature
        return prevItems;
      }
      return [...prevItems, { ...artwork, quantity: 1 }];
    });
  };

  const removeFromCart = (artworkId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== artworkId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;