import React from 'react'
import icon1 from '../assets/featureIcon1.png'
import icon2 from '../assets/featureIcon2.png'
import icon3 from '../assets/featureIcon3.png'
import icon4 from '../assets/featureIcon4.png'
import learnMoreImage from '../assets/img3.svg'

const Features = () => {
  return (
    <>
      <div className='bg-neutralSilver mx-auto'>
        <div className='w-10/12 max-w-[1280px] flex justify-between mx-auto  py-16'>
          <div className='flex flex-col justify-center text-left'>
            <h1 className='text-neutralDarkGrey text-[2.3rem] leading-[2.5rem] font-semibold mt-[30px]'>
              Helping a Local
            </h1>
            <h1 className='text-primary text-[2.3rem] leading-[2.5rem] font-semibold  mt-2 mb-3'>
              business reinvent itself
            </h1>
            <p className='text-neutralDarkGrey text-xl '>
              We reached here with our hard work and dedication
            </p>
          </div>

          <div className='grid grid-cols-2 grid-rows-2 gap-8 text-left'>
            {/* Card 1 */}
            <div className='flex flex-row'>
              <img src={icon1} className='h-[50px] w-[50px] mt-3 mr-5' />
              <div className=''>
                <h1 className='text-neutralDarkGrey text-[2rem] font-bold leading-[2.2rem]'>
                  2,245,341
                </h1>
                <p className='text-neutralGrey text-xl '>Members</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className='flex flex-row gap-2'>
              <img src={icon2} className='h-[50px] w-[50px] mt-3 mr-5' />
              <div className=''>
                <h1 className='text-neutralDarkGrey text-[2rem] font-bold leading-[2.2rem]'>
                  46,328
                </h1>
                <p className='text-neutralGrey text-xl '>Clubs</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className='flex flex-row gap-2'>
              <img src={icon3} className='h-[50px] w-[50px] mt-3 mr-5' />
              <div className=''>
                <h1 className='text-neutralDarkGrey text-[2rem] font-bold leading-[2.2rem]'>
                  828,867
                </h1>
                <p className='text-neutralGrey text-xl '>Event Bookings</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className='flex flex-row gap-2'>
              <img src={icon4} className='h-[50px] w-[50px] mt-3 mr-5' />
              <div className=''>
                <h1 className='text-neutralDarkGrey text-[2rem] font-bold leading-[2.2rem]'>
                  1,926,436
                </h1>
                <p className='text-neutralGrey text-xl '>Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learn More Box */}
      <div className='w-11/12 max-w-[1280px] flex justify-between mx-auto gap-3  my-8'>
        <img src={learnMoreImage}  alt='' />

        <div className='my-[3rem] text-left'>
          <h1 className='max-w-[550px] text-neutralDarkGrey text-[2.3rem] leading-[2.5rem] font-semibold mt-[30px] mb-5 text-left'>
            How to design your site footer like we did
          </h1>
          <p className='text-neutralGrey text-sm'>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className='bg-primary rounded-md h-[50px] w-[150px] text-white mt-8'>
            Learn More
          </button>
        </div>
      </div>
    </>
  )
}

export default Features
