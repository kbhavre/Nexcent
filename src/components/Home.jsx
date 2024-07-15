import React from 'react'
import heroImg from '../assets/img1.svg'

const Home = () => {
  return (
    <div className='bg-neutralSilver relative pt-[6rem] pb-4'>
      <div className='w-10/12 max-w-[1280px] flex justify-between items-center mx-auto flex-row '>
        {/* Left */}
        <div className='flex flex-col'>
          <h1 className='text-[4rem] text-neutralDarkGrey font-semibold leading-[2rem] mb-4'>
            Lessons and insights
          </h1>
          <h1 className='text-[4rem] text-primary font-semibold '>
            from 8 years
          </h1>
          <p className='text-[1.1rem] text-neutralGrey my-4'>
            Where to grow from your business as as photographer: site or social
            media?
          </p>
          <button className='bg-primary rounded-md h-[50px] w-[130px] text-white mt-8'>
            Register
          </button>
        </div>
        {/* Right */}
        <div>
          <img src={heroImg} alt='' />
        </div>
      </div>
      {/* Dots */}
      <div className='flex justify-center gap-2 textalign-center bottom-0'>
        <div className='h-3 w-3 bg-primary rounded-full'></div>
        <div className='h-3 w-3 bg-tint rounded-full'></div>
        <div className='h-3 w-3 bg-tint rounded-full'></div>
      </div>
    </div>
  )
}

export default Home
