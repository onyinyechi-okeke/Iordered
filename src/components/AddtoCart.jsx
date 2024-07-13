import React from 'react'
import cart from "../assets/bag.svg";

function AddtoCart({handleClick, added}) {
  return (
    <div>
        <button
        onClick={handleClick}
        className={`flex items-center border-[2px] border-[#475367] hover:scale-105 delay-150 ease-in-out rounded-2xl px-[10px] py-[6px] md:px-[12px] md:py-[8px] gap-[8px] text-[14px] text-[#475367] font-[600] mb-8 md:mb-2 ${added ? 'cursor-not-allowed' : ''}`}
        disabled={added} 
      >
        <img src={cart} alt='cart icon' /> {added ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  )
}

export default AddtoCart; 