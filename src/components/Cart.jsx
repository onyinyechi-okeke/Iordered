import React from 'react';
import cancel from "../assets/cancel.svg";
import bin from "../assets/bin.png";
import add from "../assets/add.png";
import minus from "../assets/minus.png";
import { CartProducts } from '../product';

function Cart({closeShop}) {
  return (
    <main className='absolute w-full top-[104px] flex justify-end min-h-screen' style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
        <aside className='bg-white z-50 lg:w-[46rem] w-full py-[37.51px] xs:px-[39.39px] xxs:px-[29px] min-h-screen'>
             <section className='flex items-center justify-between md:pb-[74px] pb-[44px]'>
                <div className='flex items-center gap-[12px] '>
                    <p className='text-[27px] font-semibold'>My Cart</p>
                    <div className='bg-[#e60023] text-white px-[12px] py-[6px] rounded-[28.13px] '>4</div>
                </div>
                <img src={cancel} alt='an icon' className='cursor-pointer' onClick={closeShop}/>
            </section>

            {CartProducts.map((img, index) => (
                <section key={index} className='w-full gap-4 flex justify-between items-center pb-6'>
                    <img src={img} alt='furniture' className='2xl:w-[250px] 2xl:h-[178px] xs:w-[160px] xs:h-[148px] md:w-[185px] md:h-[168px] rounded-[9px] xxs:w-[120px] xxs:h-[100px]'/>

                    <div className='w-[60%]'>
                        <div className='flex font-semibold justify-between mb-4'>
                            <p className='text-[12px] md:text-[16px] '>Mid-Century Marvel</p>
                            <p className='text-[12px] md:text-[14px]'><span className='text-[8.19px] align-super '>N</span>15,000</p>
                        </div>

                        <div className='flex items-center justify-between'>
                            <div className='flex border border-[#fof2f5] bg-[#f9fafb] rounded-[37.51px] gap-2 px-2 md:gap-4 md:px-3 md:py-1 items-center '>
                                <img src={minus} alt='an icon' />
                                <p className='text-[#e60023]'>1</p>
                                <img src={add} alt='an icon' />
                            </div>
                            <figure>
                                <img src={bin} alt='an icon' className='w-[15px] md:w-[25px]' />
                            </figure>
                        </div>
                    </div>
                </section>
            ))}

              <section className='flex justify-between border-t-2 border-b-2 border-[#fof2f5] pt-10 pb-4'>
                  <p className='text-[#667185] text-[12px] md:text-[16px] '>subtotal:</p>
                  <p className='text-[14px] md:text-[15.8px] font-semibold'><span className='text-[8.19px] align-super'>N</span>60,000</p>
              </section>

              <section>
                <button className='w-full px-[18px] py-[12px] md:px-[23px] md:py-[15px] bg-[#e60023] text-white rounded-[28.13px] mt-6 mb-10 text-[12px] md:text-[16px] '>Proceed to Checkout</button>
              </section>
        </aside>
    </main>
  );
}

export default Cart;
