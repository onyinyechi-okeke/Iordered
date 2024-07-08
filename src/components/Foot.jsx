import React from 'react'
import { AiTwotoneCopyrightCircle } from "react-icons/ai";
import Fb from "../assets/Fb.png"
import Tw from "../assets/Tw.png"
import In from "../assets/In.png"
import Ln from "../assets/Ln.png"
import logo from "../assets/hero.svg"

function Footer() {
  return (
    <main className='bg-[#f9fafb] w-full h-[175px] md:h-[96px] md:px-[137px] flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left'>
      <figure className='flex gap-[24px] mb-4 md:mb-0'>
        <img src={Fb} alt='an icon' />
        <img src={Tw} alt='an icon' />
        <img src={In} alt='an icon' />
        <img src={Ln} alt='an icon' />
      </figure>

      <section className='flex items-center gap-1 text-[9.69px] md:text-[14px] mb-4 md:mb-0'>
        <AiTwotoneCopyrightCircle />
        <p>2024 Iordered. All rights reserved.</p>
      </section>

      <figure>
        <img src={logo} alt='logo' />
      </figure>
    </main>
  )
}

export default Footer;
