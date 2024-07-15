import React from 'react'
import logo from '../assets/logo.svg'
const Navbar = () => {
  return (
    <nav className='bg-neutralSilver py-6'>
        <div className='relative w-[1380px]  mx-auto flex items-center justify-between'>
          {/* Logo */}
          <a href='/' className='cursor-pointer'>
            <img src={logo} alt='' />
          </a>

          <ul className='flex gap-8'>
            <li className='text-xl text-neutralDarkGrey cursor-pointer hover:text-neutralGrey group relative transition-all duration-200'>
              <a href=''>Home</a>
              <div className=' absolute w-full h-1 -bottom-[5px] bg-primary hidden group-hover:block transition-all duration-1000 mt-3'></div>
            </li>
            <li className='text-xl text-neutralDarkGrey cursor-pointer hover:text-neutralGrey   group relative transition-all duration-200'>
              <a href=''>Services</a>
              <div className=' absolute w-full h-1 -bottom-[5px] bg-primary hidden group-hover:block transition-all duration-1000 mt-3'></div>
            </li>
            <li className='text-xl text-neutralDarkGrey cursor-pointer hover:text-neutralGrey   group relative transition-all duration-200'>
              <a href=''>Feature</a>
              <div className=' absolute w-full h-1 -bottom-[5px] bg-primary hidden group-hover:block transition-all duration-1000 mt-3'></div>
            </li>
            <li className='text-xl text-neutralDarkGrey cursor-pointer hover:text-neutralGrey   group relative transition-all duration-200'>
              <a href=''>Product</a>
              <div className=' absolute w-full h-1 -bottom-[5px] bg-primary hidden group-hover:block transition-all duration-1000 mt-3'></div>
            </li>
            <li className='text-xl text-neutralDarkGrey cursor-pointer hover:text-neutralGrey   group relative transition-all duration-200'>
              <a href=''>Testimonial</a>
              <div className=' absolute w-full h-1 -bottom-[5px] bg-primary hidden group-hover:block transition-all duration-1000 mt-3'></div>
            </li>
            <li className='text-xl text-neutralDarkGrey cursor-pointer hover:text-neutralGrey   group relative transition-all duration-200'>
              <a href=''>FAQ</a>
              <div className=' absolute w-full h-1 -bottom-[5px] bg-primary hidden group-hover:block transition-all duration-1000 mt-3'></div>
            </li>
            
          </ul>

          <div className='flex gap-4'>
            <button className='  text-sm font-semibold text-primary border h-[40px] w-[90px] rounded-md border-neutralBlack hover:text-white hover:bg-primary hover:border-none'>
              Login
            </button>

            <button className='  text-sm font-semibold bg-primary rounded-md h-[40px] w-[90px] text-white'>
              Sign Up
              </button>
          </div>
        </div>
      </nav>
  )
}

export default Navbar