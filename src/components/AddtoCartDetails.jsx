import React from 'react';


function AddtoCartDetails({ handle, addedDetails }) {
  return (
    <div className=' pb-6 xl:pb-4 '>
      <button
        onClick={handle}
        className={`md:px-[24px] md:py-[16px] px-[18px] py-[12px] border-[1.5px] border-[#e60023] w-full rounded-[30px] text-[#e60023] font-[600] hover:bg-[#e60023] hover:text-white cursor-pointer ${addedDetails ? 'cursor-not-allowed' : ''}`}
        disabled={addedDetails}
      >
        {addedDetails ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default AddtoCartDetails;
