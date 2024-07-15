import React from 'react'
import img1 from '../assets/client1.svg'
import img2 from '../assets/client2.svg'
import img3 from '../assets/client3.svg'
import img4 from '../assets/client4.svg'
import img5 from '../assets/client5.svg'
import img6 from '../assets/client6.svg'
import img7 from '../assets/client7.svg'

const Clients = () => {
  return (
    <div className='w-10/12 max-w-[1280px] mx-auto flex flex-col  gap-3 justify-between items-center '>
        <h1 className='text-neutralDarkGrey text-[2.3rem] font-semibold mt-[30px]'>Our Clients</h1>
        <p className='text-[1.1rem] text-neutralGrey mb-5'>We have been working with some Fortune 500+ clients</p>
        <div className='w-full mx-auto flex flex-row justify-between my-6'>
            <img src={img1} className='h-[70px] w-[70px]' alt="" />
            <img src={img2} className='h-[70px] w-[70px]' alt="" />
            <img src={img3} className='h-[70px] w-[70px]' alt="" />
            <img src={img4} className='h-[70px] w-[70px]' alt="" />
            <img src={img5} className='h-[70px] w-[70px]' alt="" />
            <img src={img6} className='h-[70px] w-[70px]' alt="" />
            <img src={img7} className='h-[70px] w-[70px]' alt="" />
        </div>
    </div>
  )
}

export default Clients