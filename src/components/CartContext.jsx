/* eslint-disable react/prop-types */
// components/CartContext.jsx
import React, { createContext, useState, useEffect } from 'react';


export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  //LOcal storage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the product with the same id and color already exists
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id && item.color.id === product.color.id
      );

      if (existingItemIndex >= 0) {
        // If it exists update  the quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += product.quantity;
        return updatedItems;
      } else {
        // If noadd the new product
        return [...prevItems, product];
      }
    });
    openCart(); //Automatically open the cart when an item is added
  };

  // Function to remove items from the cart
  const removeFromCart = (productId, colorId) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.id === productId && item.color.id === colorId)
      )
    );
  };

  // Function to calculate the total price
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.color.price * item.quantity,
      0
    );
  };

  // Function to open the cart
  const openCart = () => setIsCartOpen(true);

  // Function to close the cart
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        calculateTotal,
        isCartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

