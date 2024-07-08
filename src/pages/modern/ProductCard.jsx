import React from 'react'
import { product } from '../../product'
import rating from "../../assets/rate.svg"
import cart from "../../assets/bag.svg"

function ProductCard() {
  return (
    <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 w-full gap-[24px]'>
       {product.map(({img})=>(
        <div className='2xl:min-w-[540px]'>
            <img className='2xl:min-w-[100%] 2xl:h-[372px]'src={img}/>

            <div className='flex justify-between mt-4'>
              <p className='font-[500] text-[16px] xxs:text-[14px]'>Sun-drenched Sanctuary</p>
              <p className='text-[13px] font-[700]'>$<span className='text-[18px] align-sub'>95</span>.00</p>
            </div>

            <p className='text-[12px] text-[#1d2739]'>Parisian Morning</p>

            <div className='flex gap-[5px] mb-4'>
              <img src={rating} alt='an icon' />
              <p className='font-[400] text-[14px]'>(90)</p>
            </div>

            <button className='flex items-center border-[2px] border-[#475367] rounded-2xl px-[10px] py-[6px] md:px-[12px] md:py-[8px] gap-[8px] text-[14px] text-[#475367] font-[600] mb-8 md:mb-2'>
              <img src={cart} alt='an icon' /> Add to Cart</button>
        </div>
       ))}
    </div>
  )
}

export default ProductCard;