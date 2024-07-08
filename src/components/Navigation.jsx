import React from 'react'
import seperator from "../assets/seperator.svg"

function Navigation({C}) {
  return (
    <section className='flex gap-[8px] font-[500]'>
        <p className='text-[#e60023] text-[12px] md:text-[16px]'>Home</p>
        <img src={seperator} alt='an icon' />
        
        <p className='text-[#667185] text-[12px] md:text-[16px]'>{C}</p>
      </section>
  )
}

export default Navigation