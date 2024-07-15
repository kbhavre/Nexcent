import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Faq = () => {
  return (
    <div className='bg-neutralSilver'>
      <div className='w-10/12 max-w-[1280px] mx-auto py-8 flex flex-col items-center '>
        <h1 className='text-neutralBlack w-[600px] text-[55px] font-bold text-center leading-snug'>Pellentesque suscipit fringilla libero eu.</h1>
        <button className='bg-primary rounded-md h-[40px] w-[160px] text-white mt-8 flex justify-center items-center gap-1'>
          Get a Demo
          <FaArrowRight className='w-7 h-4 mt-[1px]'/>
        </button>
      </div>
    </div>
  )
}

export default Faq
