import React, {useContext} from 'react'
import add from "../assets/add.png";
import minus from "../assets/minus.png";
import { CartContext } from '../CartContext';

function Crement({item}) {
  const { handleDecrement, handleIncrement, updateQuantity } = useContext(CartContext);

  

  return (

    <div className='flex border border-[#f0f2f5] bg-[#f9fafb] rounded-[37.51px] gap-2 px-2 md:gap-4 md:px-3 md:py-1 items-center cursor-pointer'>
        <img src={minus} alt='decrement' onClick={() => {
          if (item.quantity > 1) {
            handleDecrement(item.unique_id);
            updateQuantity(item.unique_id, item.quantity - 1);
          }
        }}  />
        <p className='text-[#e60023]'>{item.quantity}</p>
        <img src={add} alt='increment' onClick={() => {updateQuantity(item.unique_id, item.quantity), handleIncrement(item.unique_id)}} />
    </div>
  )
}

export default Crement;