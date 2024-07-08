import React from 'react'

function Pagination() {
  return (
    <main className='border-t border-[#fof2f5] mt-6 mb-12 py-6 flex items-center justify-between text-[12px] md:text-[14px]'>
        <section>
            <p className='font-[600]'>Page 1 of 30</p>
        </section>

        <section className=' xxs:hidden xs:flex xs:gap-2 md:gap-6 text-[#98a2b3] items-center'>
            <p>1</p>
            <p>2</p>
            <p className='text-black border border-[#f56630] rounded-[6px] px-2'>3</p>
            <p>...</p>
            <p className='hidden md:flex'>10</p>
            <p className='hidden md:flex'>11</p>
            <p className='hidden md:flex'>12</p>
        </section>

        <section className='flex text-[#98a2b3] items-center gap-4 rounded-[6px]'>
            <p>Go to Page</p>
            <div className='border border-[#dod5dd] p-[4px]  md:p-[8px] rounded-[6px]'>
            <select className='md:text-[16px] p-[4px] text-[13px]'>
                <option>00</option>
            </select>
            </div>
        </section>
    </main>
  )
}

export default Pagination;