import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [shop, setShop] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const openShop = () => {
    window.scrollTo(0, 0);
    setShop(true);
  };

  const closeShop = () => {
    setShop(false);
  };

  const addToCart = (product) => {
    const index = cartItems.findIndex(item => item.unique_id === product.unique_id);

    if (index !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity += product.quantity;
      setCartItems(updatedCartItems);
    } else {
      const newCartItems = [...cartItems, { ...product, quantity: product.quantity || 1 }];
      setCartItems(newCartItems);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.unique_id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter(item => item.unique_id !== id);
    setCartItems(updatedCartItems);
  };

  const handleIncrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.unique_id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.unique_id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        shop,
        cartItems,
        openShop,
        closeShop,
        updateQuantity,
        removeFromCart,
        handleIncrement,
        handleDecrement,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
