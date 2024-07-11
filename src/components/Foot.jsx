import React from 'react'
import { AiTwotoneCopyrightCircle } from "react-icons/ai";
import logo from "../assets/hero.svg"

function Footer() {
  return (
    <main className='bg-[#f9fafb] w-full h-[175px] md:h-[96px]  items-center text-center flex max-w-[1440px] mx-auto'>
      <section className=' w-full md:px-[137px] flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left'>
      <figure>
        <img src={logo} alt='logo' />
      </figure>

      <section className='flex items-center gap-1 text-[9.69px] md:text-[14px] mb-4 md:mb-0'>
        <AiTwotoneCopyrightCircle />
        <p>2024 Iordered. All rights reserved.</p>
      </section> 
      </section>
    </main>
  )
}

export default Footer;
