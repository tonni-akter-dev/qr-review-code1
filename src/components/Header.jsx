import { useState } from 'react';
import logo from '../assets/logo.webp'
import menu from '../assets/menu.svg'
import { Cancel01Icon } from 'hugeicons-react';


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='max-w-[1400px] lg:px-[120px] px-5 py-[25px] mx-auto'>
      <div className='flex justify-between items-center relative'>
        <img className='lg:w-[191px] w-[128px] lg:h-[50px] h-[33px] object-contain' src={logo} alt="" />

        <button onClick={toggleMobileMenu} className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none">
          {isMobileMenuOpen ?
            <Cancel01Icon
              size={24}
              color={"#000000"}
              variant={"stroke"}
            />
            :
            <img src={menu} alt="" />}

        </button>
        <nav className="flex items-center gap-[56px] bg-white">
          <ul className="lg:flex hidden space-x-10 text-lg py-[2.5] font-medium text-black ">
            <li className="relative">
              <a href="#" className="text-[#222] text-lg font-semibold">Features</a>
            </li>
            <li className="relative">
              <a href="#" className="text-[#222] text-lg font-semibold">Suits</a>
            </li>
            <li>
              <a href="#" className="text-[#222] text-lg font-semibold">Pricing</a>
            </li>
            <li>
              <a href="#" className="text-[#222] text-lg font-semibold">Contact</a>
            </li>
          </ul>
          <button className="normal_btn text-[#222] font-bold lg:px-[38px]  px-[21px] py-[11px] rounded-full lg:text-lg text-sm ">
            Get Started
          </button>
        </nav>

        {/* mobile menu */}
        {isMobileMenuOpen && <nav className=" absolute top-20 w-full flex flex-col items-start gap-4 bg-white">
          <ul className="lg:hidden flex flex-col space-x-10 text-lg py-[2.5] font-medium text-black ">
            <li className="py-3 px-8 mb-4">
              <a href="#" className="text-[#222] text-lg font-semibold">Features</a>
            </li>
            <li className="py-3 px-8 mb-4">
              <a href="#" className="text-[#222] text-lg font-semibold">Suits</a>
            </li>
            <li className="py-3 px-8 mb-4">
              <a href="#" className="text-[#222] text-lg font-semibold">Pricing</a>
            </li>
            <li className="py-3 px-8 mb-4">
              <a href="#" className="text-[#222] text-lg font-semibold">Contact</a>
            </li>
          </ul>
          <button className="normal_btn w-full text-[#222] font-bold lg:px-[38px]  px-[21px] py-[11px] rounded-full lg:text-lg text-sm ">
            Get Started
          </button>
        </nav>}
        {/* mobile menu */}
      </div>
    </div>
  )
}

export default Header