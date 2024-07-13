import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './App.css';
import NavBar from "./components/NavBar";
import Modern from "./pages/modern/Modern";
import Footer from './components/Foot';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import { CartProvider, CartContext } from './CartContext';


function AppContent() {
  const { shop } = useContext(CartContext);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Modern />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <CSSTransition
        in={shop}
        timeout={300}
        classNames="cart"
        unmountOnExit
      >
        <Cart />
      </CSSTransition>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
