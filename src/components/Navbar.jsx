import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import navLinks from "../constants/data";
const Navbar = () => {
  return (
    <nav className="bg-neutralSilver py-6">
      <div className="relative w-10/12 max-w-[1280px]  mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="cursor-pointer">
          <img src={logo} alt="" />
        </a>

        <ul className="flex gap-16">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="text-xl text-neutralDarkGrey cursor-pointer relative pb-2"
            >
              <Link to={link.path} className="relative group">
                {link.label}
                {/* Add the border using the `group-hover` utility */}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-100 ease-linear group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>


          <button className="  text-sm font-semibold border-2 h-[40px] w-[90px] rounded-md border-neutralBlack hover:text-white hover:bg-primary hover:border-none transition-all duration-300">
            Sign Up
          </button>

      </div>
    </nav>
  );
};

export default Navbar;
