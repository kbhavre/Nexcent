import React from 'react'
import rightArrow from '../assets/rightArrow.svg'
import img1 from '../assets/cardImg1.png'
import img2 from '../assets/cardImg2.png'
import img3 from '../assets/cardImg3.png'

const Testimonial = () => {
  return (
    <div>
      <div className='w-10/12 max-w-[1280px] mx-auto text-center my-12 relative'>
        <h1 className='text-neutralDarkGrey text-[2.3rem] leading-[2.5rem] font-semibold mb-6'>
          Caring is the new marketing
        </h1>
        <p className='max-w-[800px] mx-auto text-neutralGrey'>
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>

        {/* Cards */}
        <div className='flex flex-row justify-between my-8 relative pb-[250px]'>
          {/* Card 1 */}
          <div >
            <img src={img1} className='w-[370px] h-[290px] absolute rounded-md' alt='' />
            <div className='bg-neutralSilver relative w-[320px] h-[160px] top-52 mx-6 py-4 shadow-md rounded-md text-center '>
              <h3 className='text-neutralGrey font-semibold text-[1.3rem] leading-6 px-6    '>Creating Streamlined Safeguarding Processes with OneRen</h3>
              <div className='flex justify-center mt-6'>
                <a className='cursor-pointer text-primary text-lg font-semibold ' href=''>
                  Readmore
                </a>
                <img
                  src={rightArrow}
                  className='h-7 w-7 relative top-[3px]'
                  alt=''
                />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div >
            <img src={img2} className='w-[370px] h-[290px] absolute rounded-md' alt='' />
            <div className='bg-neutralSilver relative w-[320px] h-[160px] top-52 mx-6 py-4 shadow-md rounded-md text-center '>
              <h3 className='text-neutralGrey font-semibold text-[1.3rem] leading-6 px-6'>What are your safeguarding responsibilities and how can you manage them?</h3>
              <div className='flex justify-center mt-6'>
                <a className='cursor-pointer text-primary text-lg font-semibold ' href=''>
                  Readmore
                </a>
                <img
                  src={rightArrow}
                  className='h-7 w-7 relative top-[3px]'
                  alt=''
                />
              </div>
            </div>
          </div>


          {/* Card 3 */}
          <div >
            <img src={img3} className='w-[370px] h-[290px] absolute rounded-md' alt='' />
            <div className='bg-neutralSilver relative w-[320px] h-[160px] top-52 mx-6 py-4 shadow-md rounded-md text-center '>
              <h3 className='text-neutralGrey font-semibold text-[1.3rem] leading-6 px-6'>Revamping the Membership Model with Triathlon Australia</h3>
              <div className='flex justify-center mt-6'>
                <a className='cursor-pointer text-primary text-lg font-semibold ' href=''>
                  Readmore
                </a>
                <img
                  src={rightArrow}
                  className='h-7 w-7 relative top-[3px]'
                  alt=''
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Testimonial
