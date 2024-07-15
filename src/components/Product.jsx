import React from 'react'
import teslaLogo from '../assets/teslaLogo.png'
import logo1 from '../assets/productLogo1.png'
import logo2 from '../assets/client2.svg'
import logo3 from '../assets/client3.svg'
import logo4 from '../assets/client4.svg'
import logo5 from '../assets/client5.svg'
import logo6 from '../assets/client6.svg'
import rightArrow from '../assets/rightArrow.svg'


const Product = () => {
  return (
    <div className='bg-neutralSilver'>
        <div className='w-10/12 max-w-[1280px] flex justify-between mx-auto gap-20  py-10'>
            <img height="325px" width="325px" src={teslaLogo} alt="" />
            <div className=''>
                <p className='text-neutralDarkGrey'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.Tim Smith</p>
                <h1 className='text-2xl font-semibold text-primary my-2 '>Tim Smith</h1>
                <h4 className='text-neutralGrey mb-8 p-[-10px]'>British Dragon Boat Racing Association</h4>
                <div className='flex justify-between'>
                    <div className='flex justify-center gap-16'>
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                    <img src={logo6} alt="" />
                    </div>
                    <div className='flex items-center gap-2'>
                        <a className='cursor-pointer text-primary text-lg font-semibold ' href="">Meet all customers</a>
                        <img src={rightArrow} className="h-7 w-7 relative top-[3px]" alt="" />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Product