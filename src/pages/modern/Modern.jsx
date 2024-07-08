import React, { useState } from 'react';
import search from '../../assets/search.svg';
import ProductCard from './ProductCard';
import Navigation from '../../components/Navigation';
import { product } from '../../product'; 

function Modern({ addToCart }) {
  const C = 'Modern';

  const [searchTerm, setSearchTerm] = useState('');

  const handleAddToCart = (product) => {
    addToCart(product);
    console.log(`Added ${product.name} to cart.`);
  };

  
  const filteredProducts = product.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className='pt-[137px] lg:px-[124px] md:px-[64px] px-[42px] relative pb-10'>
      <Navigation  C={C} />
      <section className='flex mt-[25px] md:mt-[68px] mb-[20px] md:mb-[30px] gap-7 justify-between'>
        <div>
          <p className='md:text-[28px] tracking-tighter font-[700]'>Modern</p>
        </div>

        <div className='hidden md:w-[48%] md:flex justify-end xl:w-[34%]'>
          <div className='flex w-[54%] gap-[8.84px] px-[8.84px] py-[5.89px] border-[0.74px] border-[#dod5dd] rounded-[4.42px]'>
            <img src={search} alt='search icon' className='w-[20px]' />
            <input
              className='w-full border-none outline-none placeholder:text-[12px]'
              type='text'
              placeholder='Search items..'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 w-full gap-[24px]'>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </main>
  );
}

export default Modern;
