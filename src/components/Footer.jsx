import React from 'react'
import logo from '../assets/footerLogo.svg'
import { FaInstagram } from 'react-icons/fa6'
import { FaWhatsapp } from 'react-icons/fa6'
import { FaXTwitter } from 'react-icons/fa6'
import { FaYoutube } from 'react-icons/fa6'
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <div className='bg-neutralBlack text-gray-300 text-sm'>
      <div className='w-10/12 max-w-[1280px] mx-auto flex justify-around items-center py-16'>
        {/* Left */}
        <div className='flex flex-col gap-8'>
          <img src={logo} alt='' />

          <div className='flex flex-col gap-1'>
            <p>Copyright © 2020 Nexcent ltd.</p>
            <p>All rights reserved</p>
            <p>
              Made with 💗 by{' '}
              <span className='font-bold text-lg font-mono text-blue-300'>
                Kunal B
              </span>
            </p>
          </div>

          {/* Social Links */}
          <div className='flex gap-6 cursor-pointer'>
            <FaInstagram className='h-6 w-6' />
            <FaWhatsapp className='h-6 w-6' />
            <FaXTwitter className='h-6 w-6' />
            <FaYoutube className='h-6 w-6' />
          </div>
        </div>

        {/* Right */}
        <div className='flex gap-20 justify-center'>
          <div className='flex flex-col gap-4'>
            <h2 className='font-semibold text-2xl text-white pb-6'>Company</h2>
            <ul className='flex flex-col gap-3 text-[16px] cursor-pointer'>
              <li className='hover:text-white transition-all duration-200'>
                About
              </li>
              <li className='hover:text-white transition-all duration-200'>
                Blog
              </li>
              <li className='hover:text-white transition-all duration-200'>
                Contact us
              </li>
              <li className='hover:text-white transition-all duration-200'>
                Pricing
              </li>
              <li className='hover:text-white transition-all duration-200'>
                Testimonials
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className='font-semibold text-2xl text-white pb-6'>Support</h2>
            <ul className='flex flex-col gap-3 text-[16px] cursor-pointer'>
              <li className='hover:text-white transition-all duration-200'>
                Help Center
              </li>
              <li className='hover:text-white transition-all duration-200'>
                Terms of service
              </li>
              <li className='hover:text-white transition-all duration-200'>
                Legal
              </li>
              <li className='hover:text-white transition-all duration-200'>
                Privacy Policy
              </li>
              <li className='hover:text-white transition-all duration-200'>
                Status
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-4 '>
            <h2 className='font-semibold text-2xl text-white pb-6'>
              Stay up to date
            </h2>
            <input
              className='bg-gray-500  w-[250px] h-9 rounded-md pl-4 text-white capitalize outline-none'
              type='email'
              placeholder='Your email address'
            />
            <FiSend className='h-5 w-5 text-white relative -top-11 left-52 cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
