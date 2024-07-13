import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import rating from "../../assets/rate.svg";
import AddtoCart from '../../components/AddtoCart';

function ProductCard({ product, handleAddToCart }) {
  const { name, current_price, unique_id, photos } = product;
  const [added, setAdded] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    handleAddToCart(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  const handleCardClick = () => {
    navigate(`/product/${unique_id}`);
  };

  
  const photoUrl = `https://api.timbu.cloud/images/${photos[0].url}`;


  const price = current_price.length > 0 ? current_price[0].USD[0] : 'N/A';

  return (
    <div  className='cursor-pointer hover:scale-105 ease-in-out delay-150'>
      <img
        className='min-w-[100%] 2xl:max-h-[346.67px] max-h-[250px] rounded-lg cursor-pointer' onClick={handleCardClick}
        src={photoUrl} 
        alt={name}
      />

      <div className='flex justify-between mt-4'>
        <p className='font-[500] text-[16px] xxs:text-[14px]'>{name}</p>
        <p className='text-[13px] font-[700]'>$<span className='text-[18px] align-sub'>{price}</span>.00</p>
      </div>

      <p className='text-[12px] text-[#1d2739]'>Parisian Morning</p>

      <div className='flex gap-[5px] mb-4'>
        <img src={rating} alt='rating' />
        <p className='font-[400] text-[14px]'>(90)</p>
      </div>

      <AddtoCart handleClick={handleClick} added={added} />
    </div>
  );
}

export default ProductCard;
