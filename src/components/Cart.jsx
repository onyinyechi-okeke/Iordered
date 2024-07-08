import React from 'react';
import cancel from "../assets/cancel.svg";
import bin from "../assets/bin.png";
import add from "../assets/add.png";
import minus from "../assets/minus.png";
import { useNavigate } from 'react-router-dom';

function Cart({ closeShop, cartItems, updateQuantity, removeFromCart }) {
  const navigate = useNavigate();

  const openCheckout = () => {
    navigate('/checkout');
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <main className='absolute w-full top-[104px] flex justify-end min-h-screen' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <aside className='bg-white z-50 lg:w-[46rem] w-full py-[37.51px] xs:px-[39.39px] xxs:px-[29px] min-h-screen cart-aside'>
        <section className='flex items-center justify-between md:pb-[74px] pb-[44px]'>
          <div className='flex items-center gap-[12px] '>
            <p className='text-[20px] md:text-[27px] font-semibold'>My Cart</p>
            <div className='bg-[#e60023] text-white md:px-[12px] md:py-[6px] md:rounded-[28.13px] px-[8px] py-[4px] rounded-[95%] '>{cartItems.length}</div>
          </div>
          <img src={cancel} alt='close icon' className='cursor-pointer' onClick={closeShop} />
        </section>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <section key={index} className='w-full gap-4 flex justify-between items-center pb-6'>
              <img src={item.img} alt='product' className='2xl:w-[250px] 2xl:h-[178px] xs:w-[160px] xs:h-[148px] md:w-[185px] md:h-[168px] rounded-[9px] xxs:w-[120px] xxs:h-[100px]' />
              <div className='w-[60%]'>
                <div className='flex font-semibold justify-between mb-4'>
                  <p className='text-[12px] md:text-[16px] '>{item.name}</p>
                  <p className='text-[13px] font-[700]'>$<span className='text-[18px] align-sub'>{item.price}</span>.00</p>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex border border-[#f0f2f5] bg-[#f9fafb] rounded-[37.51px] gap-2 px-2 md:gap-4 md:px-3 md:py-1 items-center cursor-pointer'>
                    <img src={minus} alt='decrement' onClick={() => handleDecrement(item)}  />
                    <p className='text-[#e60023]'>{item.quantity}</p>
                    <img src={add} alt='increment' onClick={() => updateQuantity(item.id, item.quantity + 1)} />
                  </div>
                  <figure>
                    <img src={bin} alt='delete' className='w-[15px] md:w-[25px] cursor-pointer' onClick={() => removeFromCart(item.id)} />
                  </figure>
                </div>
              </div>
            </section>
          ))
        )}

        {cartItems.length > 0 && (
          <section>
            <button onClick={() => { openCheckout(); closeShop(); }} className='w-full px-[18px] py-[12px] md:px-[23px] md:py-[15px] bg-[#e60023] cursor-pointer text-white rounded-[28.13px] mt-6 mb-44 text-[12px] md:text-[16px] delay-100 ease-in-out hover:bg-white hover:text-[#e60023] hover:border-[3px] border-[#e60023]'>
              Proceed to Checkout
            </button>
          </section>
        )}
        
      </aside>
    </main>
  );
}

export default Cart;
