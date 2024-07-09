import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './App.css';
import NavBar from "./components/NavBar";
import Modern from "./pages/modern/Modern";
import Footer from './components/Foot';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';

function App() {
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
    
    const index = cartItems.findIndex(item => item.id === product.id);

    if (index !== -1) {
      
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      
      const newCartItems = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(newCartItems);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const handleIncrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity  } : item
      )
    );
  };

  const handleDecrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity } : item
      )
    );
  };

  useEffect(() => {
    if (shop) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [shop]);

  return (
    <div>
      <NavBar openShop={openShop} />
      <Routes>
        <Route path='/' element={<Modern addToCart={addToCart} />} />
        <Route path='/checkout' element={<Checkout cartItems={cartItems}/>} />
      </Routes>
      <CSSTransition
        in={shop}
        timeout={300}
        classNames="cart"
        unmountOnExit
      >
        <Cart closeShop={closeShop} cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} onIncrement={handleIncrement} onDecrement={handleDecrement}/>
      </CSSTransition>
      <Footer />
    </div>
  );
}


export default App;
