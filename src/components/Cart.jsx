import { useContext } from 'react';
import cancel from "../assets/cancel.svg";
import bin from "../assets/bin.png";
import { useNavigate } from 'react-router-dom';
import Crement from './Crement';
import { CartContext } from '../CartContext';

function Cart() {
  const navigate = useNavigate();
  const { closeShop, cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const openCheckout = () => {
    navigate('/checkout');
  };

  const handleClearCart = () => {
    clearCart();
  };
 



  const handleCloseShop = () => {
    closeShop();
    document.body.classList.remove('no-scroll');
  };

  return (
    <main className='absolute w-full top-[104px] flex justify-end min-h-[100vh] lg:right-[7%] 2xl:right-[13%]' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <aside className='bg-white z-50 lg:w-[553px] w-full py-[37.51px] xs:px-[39.39px] xxs:px-[29px] min-h-screen cart-aside'>
        <section className='mx-auto'>
          <section className='flex items-center justify-between md:pb-[74px] pb-[44px]'>
            <div className='flex items-center gap-[12px] '>
              <p className='text-[20px] md:text-[27px] font-semibold'>My Cart</p>
              <div className='bg-[#e60023] text-white md:px-[12px] md:py-[6px] rounded-[50%] px-[8px] py-[2px] '>{cartItems.length}</div>
            </div>
            <img src={cancel} alt='close icon' className='cursor-pointer' onClick={handleCloseShop} />
          </section>

          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <section key={item.unique_id} className='w-full gap-4 flex justify-between items-center pb-6'>
              <img src={item.img} alt='product' className='md:w-[184px] 2xl:h-[178px] xs:w-[160px] xs:h-[148px]  md:h-[168px] rounded-[9px] xxs:w-[120px] xxs:h-[100px]' />
              <div className='w-[60%]'>
                  <div className='flex font-semibold justify-between mb-4'>
                    <p className='text-[12px] md:text-[16px] '>{item.name}</p>
                    <p className='text-[13px] font-[700]'>$<span className='text-[18px] align-sub'>{item.price * item.quantity}</span>.00</p>
                  </div>
                  <div className='flex items-center justify-between'>
                    <Crement item={item} />
                    <figure>
                      <img src={bin} alt='delete' className='w-[15px] md:w-[25px] cursor-pointer' onClick={() => removeFromCart(item.unique_id)} />
                    </figure>
                  </div>
                </div>
              </section>
            ))
          )}

          {cartItems.length > 0 && (
            <section>
              <section className='flex justify-between border-t-2 border-b-2 border-[#f0f2f5] pt-10 pb-4'>
                <p className='text-[#667185] text-[12px] md:text-[16px] '>subtotal:</p>
                <p className='text-[13px] font-[700]'>$<span className='text-[18px] align-sub'>{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>.00</p>
              </section>

              <button onClick={() => { openCheckout(); handleCloseShop(); }} className='w-full px-[18px] py-[12px] md:px-[23px] md:py-[15px] bg-[#e60023] cursor-pointer text-white rounded-[28.13px] mt-6 mb-4 text-[12px] md:text-[16px] delay-100 ease-in-out hover:bg-white hover:text-[#e60023] hover:border-[3px] border-[#e60023]'>
                Proceed to Checkout
              </button>
              <button onClick={handleClearCart} className='w-full px-[18px] py-[12px] md:px-[23px] md:py-[15px] mb-44 bg-gray-200 cursor-pointer text-[#333] rounded-[28.13px] text-[12px] md:text-[16px] delay-100 ease-in-out hover:bg-white hover:text-[#e60023] hover:border-[3px] border-[#e60023]'>
                Clear Cart
              </button>
            </section>
          )}
        </section>
      </aside>
    </main>
  );
}

export default Cart;
