import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (artwork) => {
    setCartItems((prevItems) => {
      // Check if item is already in cart
      const existingItem = prevItems.find((item) => item.id === artwork.id);
      if (existingItem) {
        // Update quantity if item already exists
        return prevItems.map((item) =>
          item.id === artwork.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...artwork, quantity: 1 }];
    });
  };

  const removeFromCart = (artworkId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== artworkId));
  };

  const updateQuantity = (artworkId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === artworkId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;