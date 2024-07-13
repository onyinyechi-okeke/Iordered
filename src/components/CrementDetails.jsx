import React, {useContext} from 'react'
import add from "../assets/add.png";
import minus from "../assets/minus.png";


function Crement({quantity, handleDecrement, handleIncrement}) {


  return (

    <div className='flex md:w-[204px] w-[120px] border-[#f0f2f5] bg-[#f9fafb] rounded-[40px] border h-[54px] items-center justify-around cursor-pointer '>
        <img className='w-[20px]' src={minus} alt='decrement' onClick={() => {
          if (quantity > 1) {
            handleDecrement();
          }
        }}  />
        <p className='text-[#e60023] text-[20px] '>{quantity}</p>
        <img src={add} className='w-[20px]' alt='increment' onClick={() => handleIncrement()} />
    </div>
  )
}

export default Crement;