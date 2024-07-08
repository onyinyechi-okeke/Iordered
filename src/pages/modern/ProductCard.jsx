import React, { useState } from 'react';
import rating from "../../assets/rate.svg";
import cart from "../../assets/bag.svg";

function ProductCard({ product, handleAddToCart }) {
  const { id, img, name, price } = product;
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    handleAddToCart(product);
    setAdded(true);

    
    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  return (
    <div className='2xl:min-w-[540px]' key={id}>
      <img className='2xl:min-w-[100%] 2xl:h-[372px]' src={img} alt={name} />

      <div className='flex justify-between mt-4'>
        <p className='font-[500] text-[16px] xxs:text-[14px]'>{name}</p>
        <p className='text-[13px] font-[700]'>$<span className='text-[18px] align-sub'>{price}</span>.00</p>
      </div>

      <p className='text-[12px] text-[#1d2739]'>Parisian Morning</p>

      <div className='flex gap-[5px] mb-4'>
        <img src={rating} alt='rating' />
        <p className='font-[400] text-[14px]'>(90)</p>
      </div>

      <button
        onClick={handleClick}
        className={`flex items-center border-[2px] border-[#475367] hover:scale-105 delay-150 ease-in-out rounded-2xl px-[10px] py-[6px] md:px-[12px] md:py-[8px] gap-[8px] text-[14px] text-[#475367] font-[600] mb-8 md:mb-2 ${added ? 'cursor-not-allowed' : ''}`}
        disabled={added} // Disable button when added is true
      >
        <img src={cart} alt='cart icon' /> {added ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default ProductCard;
