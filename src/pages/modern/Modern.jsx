import React from 'react'
import seperator from "../../assets/seperator.svg"
import search from '../../assets/search.svg'
import filter from "../../assets/filter.svg"
import chevron from "../../assets/chevron.svg"
import ProductCard from './ProductCard'
import Pagination from './Pagination'


function Modern() {
  return (
    <main className='pt-[137px] lg:px-[124px] md:px-[64px] px-[42px] relative'>

      <section className='flex gap-[8px] font-[500]'>
        <p className='text-[#e60023] text-[12px] md:text-[16px]'>Home</p>
        <img src={seperator} alt='an icon' />
        <p className='text-[#e60023] text-[12px] md:text-[16px]'>Categories</p>
        <img src={seperator} alt='an icon' />
        <p className='text-[#667185] text-[12px] md:text-[16px]'>Modern</p>
      </section>

      <section className='flex mt-[25px] md:mt-[68px] mb-[20px] md:mb-[30px] gap-7 justify-between'>
        <div>
          <p className='md:text-[28px] tracking-tighter font-[700]'>Modern</p>
        </div>

        <div className='hidden md:w-[48%] md:flex justify-between items-center xl:w-[28%]'>
          <div className=' flex w-[54%]  gap-[8.84px] px-[8.84px] py-[5.89px] border-[0.74px] border-[#dod5dd] rounded-[4.42px]'>
            <img src={search} alt='search icon' />
           <input className='w-full border-none outline-none placeholder:text-[12px]' type='text' placeholder='Search items..'/>
          </div>

          <div className='flex gap-[4.14px]'>
            <img src={filter} alt='an icon' />
            <p>Filter</p>
          </div>

          <div className='flex gap-[4.14px]'>
            <img src={chevron} alt='an icon' />
            <p>Sort</p>
          </div>

        </div>
      </section>

      
        <ProductCard />
         
        <Pagination /> 

    </main>
  )
}

export default Modern;