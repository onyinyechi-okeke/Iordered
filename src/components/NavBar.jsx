import React from 'react'
import logo from "../assets/hero.svg"
import reddot from "../assets/red-dot.svg"
import bigsearch from "../assets/bigsearch.svg"
import heart from "../assets/heart.svg"
import cart from "../assets/newcart.svg"
import user from "../assets/user.svg"
import bars from "../assets/bars.svg"

function NavBar({openShop}) {
    const pages = [ 'FarmHouse', 'Modern', 'Bohemian' ]
  return (
    <>
    
    <nav className='w-full fixed top-0 left-0 h-[99px] md:h-[104px] bg-white border-b-[1px] border-[#f2fof5] px-[39px] md:px-[60px] lg:px-[112px] flex items-center justify-between z-[999]'>

        <figure className='lg:hidden'>
            <img src={bars} alt='menu-icon' />
        </figure>

        
        <figure>
            <img src={logo} alt='a logo' />
        </figure>

        <section className='hidden lg:flex lg:w-[58%] 2xl:w-[38%] bg-[#f7f9fc] px-[40px] py-[16px] rounded-[40px]'>
            <ul className='flex w-full justify-between'>
                {pages.map((pages)=>(
                    <li className='xl:text-lg font-semibold'>{pages}</li>
                ))}
                <li className='flex xl:text-lg font-semibold'>What's New? <span><img src={reddot} alt='an icon' className='pt-1'/></span></li>
            </ul>
        </section>

        <section className='flex items-center xs:gap-[32px]  xxs:gap-[12px] cursor-pointer'>
           <img src={bigsearch} alt='icons' />
           <img src={heart} alt='icons' className='hidden md:flex'/>
           <img src={cart} alt='icons' onClick={openShop}/>
           <img src={user} alt='icons' />
        </section>
        </nav>
        </>
  )
}

export default NavBar