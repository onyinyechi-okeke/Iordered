import React from 'react'
import logo from "../assets/hero.svg"
import bigsearch from "../assets/bigsearch.svg"
import cart from "../assets/newcart.svg"
import { useNavigate } from 'react-router-dom'

function NavBar({openShop}) {
   const navigate= useNavigate();

  const openHome = () =>{
    navigate('/')
  }
  return (
    <>
    
    <nav className='w-full fixed top-0 left-0 h-[99px] md:h-[104px] bg-white border-b-[1px] border-[#f2fof5] px-[39px] md:px-[60px] lg:px-[112px] flex items-center justify-between z-[999]'>

        <figure onClick={openHome}>
            <img src={logo} alt='a logo' />
        </figure>

        <section className='flex items-center xs:gap-[32px]  xxs:gap-[12px] cursor-pointer'>
           <img src={bigsearch} alt='icons' className='hover:scale-105'/>
           <img src={cart} alt='icons' className='hover:scale-105' onClick={openShop}/>
        </section>
        </nav>
        </>
  )
}

export default NavBar