import React from 'react'
import img1 from '../assets/cardLogo1.svg'
import img2 from '../assets/cardLogo2.svg'
import img3 from '../assets/cardLogo3.svg'
import learnMoreImg from '../assets/img2.svg'

const Services = () => {
  return (
    <div className='w-10/12 max-w-[1280px] mx-auto justify-between text-center py-[40px]'>
      <h1 className='max-w-[550px] mx-auto text-neutralDarkGrey text-[2.3rem] leading-[2.5rem] font-semibold mt-[30px]'>
        Manage your entire community in a single frame
      </h1>
      <p className='text-[1.2rem] text-neutralGrey my-3 pt-[8px]'>
        Who is Nexcent suitable for?
      </p>

      {/* Cards */}
      <div className='flex justify-between mt-12 '>
        {/* Card 1 */}
        <div className='h-[250px] w-[300px] flex flex-col justify-center items-center text-center rounded-lg shadow-md transition-all duration-200 hover:shadow-lg'>
          <img src={img1} height='70px' width='70px' alt='' />
          <h1 className='text-neutralDarkGrey text-3xl py-3 font-bold '>
            Membership Organisations
          </h1>
          <p className='text-neutralGrey text-sm'>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>

        {/* Card 2 */}
        <div className='h-[250px] w-[300px] flex flex-col justify-center items-center text-center rounded-lg shadow-md transition-all duration-200 hover:shadow-lg'>
          <img src={img2} height='70px' width='70px' alt='' />
          <h1 className='text-neutralDarkGrey text-3xl py-3 font-bold '>
            National Associations
          </h1>
          <p className='text-neutralGrey text-sm'>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>

        {/* Card 3 */}
        <div className='h-[250px] w-[300px] flex flex-col justify-center items-center text-center rounded-lg shadow-md transition-all duration-200 hover:shadow-lg'>
          <img src={img3} height='70px' width='70px' alt='' />
          <h1 className='text-neutralDarkGrey text-3xl py-3 font-bold h-[96px] w-[200px]'>
            Clubs And Groups
          </h1>
          <p className='text-neutralGrey text-sm'>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>

      {/* Learn More Box */}
      <div className='w-10/12 max-w-[1280px] flex justify-between gap-3  my-8'>
        
          <img src={learnMoreImg} alt='' />

        <div className='my-[3rem] text-left'>
        <h1 className='max-w-[550px] text-neutralDarkGrey text-[2.3rem] leading-[2.5rem] font-semibold mt-[30px] mb-5 text-left'>
        The unseen of spending three years at Pixlegrade
      </h1>
          <p className='text-neutralGrey text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className='bg-primary rounded-md h-[50px] w-[150px] text-white mt-8'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Services
