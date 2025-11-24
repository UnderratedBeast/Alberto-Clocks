import React, { createContext, useContext, useState, useEffect } from 'react';
import CustomAlert from '../customs/CustomAlert'; // Import the CustomAlert component

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlistItems');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToCart = (item) => {6                                                          
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((i) => i.id === item.id);
      if (itemExists) {
        setAlertMessage(`This item is already in your cart.`);
        return prevItems; // Do not update the cart if item already exists
      } else {
        const updatedCart = [...prevItems, { ...item, quantity: 1 }];
        setAlertMessage(`This item has been added to your cart.`);
        return updatedCart;
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter(item => item.id !== id);
      setAlertMessage('Item has been removed from your cart.');
      return updatedCart;
    });
  };

  const addToWishlist = (item) => {
    setWishlistItems((prevItems) => {
      const itemExists = prevItems.find((i) => i.id === item.id);
      if (itemExists) {
        setAlertMessage(`This item is already in your wishlist.`);
        return prevItems;
      } else {
        const updatedWishlist = [...prevItems, item];
        setAlertMessage(`this item has been added to your wishlist.`);
        return updatedWishlist;
      }
    });
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prevItems) => {
      const updatedWishlist = prevItems.filter(item => item.id !== id);
      setAlertMessage('Item has been removed from your wishlist.');
      return updatedWishlist;
    });
  };

  const handleCloseAlert = () => {
    setAlertMessage('');
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
      <CustomAlert message={alertMessage} onClose={handleCloseAlert} />
    </CartContext.Provider>
  );
};
