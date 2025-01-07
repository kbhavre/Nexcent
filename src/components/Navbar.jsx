import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import navLinks from '../constants/data'
const Navbar = () => {
  return (
    <nav className='bg-neutralSilver py-6'>
        <div className='relative w-[1380px]  mx-auto flex items-center justify-between'>
          {/* Logo */}
          <a href='/' className='cursor-pointer'>
            <img src={logo} alt='' />
          </a>

          <ul className='flex gap-8'>
            {navLinks.map((link, index)=> (
              <li key={index} className='text-xl text-neutralDarkGrey cursor-pointer hover:text-neutralGrey group relative transition-all duration-300 ease-linear'>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <div className='flex gap-4'>
            <button className='  text-sm font-semibold border-2 h-[40px] w-[90px] rounded-md border-neutralBlack hover:text-white hover:bg-primary hover:border-none transition-all duration-300'>
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