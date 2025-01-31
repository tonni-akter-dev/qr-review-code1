import { useState, useEffect, useContext } from 'react';
import logo from '../assets/logo.webp';
import menu from '../assets/menu.svg';
import { Cancel01Icon } from 'hugeicons-react';
import { Link } from 'react-router';
import { RefContext } from '../utils/RefContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { pricingRef, featureRef, contactRef, suitsRef } = useContext(RefContext);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      const headerOffset = 100;
      const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='fixed top-0 z-50 w-full bg-white'>
      <div className='max-w-[1400px] lg:px-[120px] px-5 py-[25px] mx-auto '>
        <div className='flex justify-between items-center relative'>
          <Link to={'/'}>
            <img className='lg:w-[191px] w-[128px] lg:h-[50px] h-[33px] object-contain' src={logo} alt="" />
          </Link>
          {hasScrolled ? <button onClick={toggleMobileMenu} className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none">
            {isMobileMenuOpen ?
              <Cancel01Icon
                size={24}
                color={"#000000"}
                variant={"stroke"}
              />
              :
              <img src={menu} alt="" />}
          </button> :
            isMobileMenuOpen ? <button onClick={toggleMobileMenu} className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none">
              {isMobileMenuOpen ?
                <Cancel01Icon
                  size={24}
                  color={"#000000"}
                  variant={"stroke"}
                />
                :
                <img src={menu} alt="" />}
            </button> : <button className={`normal_btn text-[#222] font-bold lg:px-[38px] px-[21px] py-[11px] rounded-full lg:text-lg text-sm lg:hidden block`}>
              Get Started
            </button>
          }

          <nav className="lg:flex hidden items-center gap-[56px] bg-white">
            <ul className=" flex space-x-10 text-lg py-[2.5] font-medium text-black ">
              <li className="relative">
                <Link to="#" onClick={() => scrollToSection(featureRef)} className="text-[#222] text-lg font-semibold">Features</Link>
              </li>
              <li className="relative" onClick={() => scrollToSection(suitsRef)}>
                <Link to="#" className="text-[#222] text-lg font-semibold">Suits</Link>
              </li>
              <li>
                <Link to="#" onClick={() => scrollToSection(pricingRef)} className="text-[#222] text-lg font-semibold">Pricing</Link>
              </li>
              <li>
                <Link to="#" className="text-[#222] text-lg font-semibold" onClick={() => scrollToSection(contactRef)}>Contact</Link>
              </li>
            </ul>
            <button className={`normal_btn text-[#222] font-bold lg:px-[38px] px-[21px] py-[11px] rounded-full lg:text-lg text-sm  block`}>
              Get Started
            </button>
          </nav>
          {/* mobile menu */}
          {isMobileMenuOpen && (
            <nav className="absolute top-[55px] w-full flex flex-col items-start gap-4 bg-white p-5">
              <ul className="lg:hidden flex flex-col space-x-10 text-lg py-[2.5] font-medium text-black ">
                <li className="py-3 px-8 mb-4">
                  <Link to="#" onClick={() => {
                    setIsMobileMenuOpen(false)
                    scrollToSection(featureRef)
                  }} className="text-[#222] text-lg font-semibold">Features</Link>
                </li>
                <li className="py-3 px-8 mb-4">
                  <Link to="#" onClick={() => {
                    setIsMobileMenuOpen(false)
                    scrollToSection(suitsRef)
                  }} className="text-[#222] text-lg font-semibold">Suits</Link>
                </li>
                <li className="py-3 px-8 mb-4">
                  <Link to="#" onClick={() => {
                    setIsMobileMenuOpen(false)
                    scrollToSection(pricingRef)
                  }} className="text-[#222] text-lg font-semibold">Pricing</Link>
                </li>
                <li className="py-3 px-8 mb-4">
                  <Link to="#" onClick={() => {
                    setIsMobileMenuOpen(false)
                    scrollToSection(contactRef)
                  }} className="text-[#222] text-lg font-semibold">Contact</Link>
                </li>
              </ul>
              <button className="normal_btn w-full text-[#222] font-bold lg:px-[38px] px-[21px] py-[11px] rounded-full lg:text-lg text-sm">
                Get Started
              </button>
            </nav>
          )}
          {/* mobile menu */}
        </div>
      </div>
    </div>
  );
};

export default Header;