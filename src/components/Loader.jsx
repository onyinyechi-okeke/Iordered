// eslint-disable-next-line no-unused-vars
import React from 'react'
import { MoonLoader } from "react-spinners";

function Loader() {
  return (
    <span className="flex justify-center items-center z-10 my-[20%]">
        <MoonLoader color="#e60023" size={80} />
    </span>
  )
}

export default Loader