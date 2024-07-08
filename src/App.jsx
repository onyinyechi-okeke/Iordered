import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';
import NavBar from "./components/NavBar";
import Modern from "./pages/modern/Modern";
import Footer from './components/Foot';
import Cart from './components/Cart';

function App() {
  const [shop, setShop] = useState(false);


  const openShop = () => {
    window.scrollTo(0, 0);
    setShop(true);
  };

  const closeShop = () => {
    setShop(false);
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
      <Modern />
      <CSSTransition
        in={shop}
        timeout={300}
        classNames="cart"
        unmountOnExit
      >
        <Cart closeShop={closeShop} />
      </CSSTransition>
      <Footer />
    </div>
  );
}

export default App;
