import logo from '../assets/logo.webp'
import fb from '../assets/facebook.svg'
import yt from '../assets/yt.svg'
import x from '../assets/x.svg'
import linkdin from '../assets/linkdin.svg'
import { ArrowRightDoubleIcon, SentIcon } from 'hugeicons-react'


const Footer = () => {
  return (
    <div>
      <footer className="bg-[#222] text-white pt-[50px] pb-[70px]">
        <div className="mx-auto  max-w-[1400px] lg:px-[120px] px-5 overflow-hidden ">
          <div className='flex flex-col lg:flex-row justify-between'>
            <div>
              <img src={logo} className="w-[200px] h-[40px] mb-8" alt="logo" />
              <p className='text-[#A0A0A0]  text-base lg:w-[374px] mb-8 '>Transform your customer feedback into growth. Our smart QR system helps you collect more positive reviews while managing feedback professionally.</p>
              <div className='flex items-center gap-2.5'>
                <p>Follow On</p>
                <div className='flex gap-4 items-center'>
                  <a href='#'>  <img src={fb} alt="" />
                  </a>
                  <a href='#'> <img src={x} alt="" />
                  </a>
                  <a href='#'> <img src={linkdin} alt="" /></a>
                  <a href='#'>
                    <img src={yt} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className=" block sm:flex text-sm lg:gap-[85px] mt-6 lg:mt-0">
              <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                <li className="grad_text text-xl  font-bold uppercase mb-5">Product</li>
                <li><a href="#" className="flex gap-2.5 items-center text-white mb-5 text-base">    <ArrowRightDoubleIcon
                  size={24}
                  color={"#FFFFFF"}
                  variant={"stroke"}
                />
                  Features</a></li>
                <li><a href="#" className="flex gap-2.5 items-center text-white mb-5 text-base">    <ArrowRightDoubleIcon
                  size={24}
                  color={"#FFFFFF"}
                  variant={"stroke"}
                />
                  Pricing</a></li>
                <li><a href="#" className="flex gap-2.5 items-center text-white mb-5 text-base">    <ArrowRightDoubleIcon
                  size={24}
                  color={"#FFFFFF"}
                  variant={"stroke"}
                />
                  API</a></li>
                <li><a href="#" className="flex gap-2.5 items-center text-white mb-5 text-base">    <ArrowRightDoubleIcon
                  size={24}
                  color={"#FFFFFF"}
                  variant={"stroke"}
                />
                  Integrations</a></li>
              </ul>
              <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
                <li className="grad_text text-xl  font-bold uppercase mb-5">support</li>
                <li><a href="#" className="flex gap-2.5 items-center text-white mb-5 text-base">    <ArrowRightDoubleIcon
                  size={24}
                  color={"#FFFFFF"}
                  variant={"stroke"}
                />
                  Documentation</a></li>
                <li><a href="#" className="flex gap-2.5 items-center text-white mb-5 text-base">    <ArrowRightDoubleIcon
                  size={24}
                  color={"#FFFFFF"}
                  variant={"stroke"}
                />
                  Contact</a></li>
                <li><a href="#" className="flex gap-2.5 items-center text-white mb-5 text-base">    <ArrowRightDoubleIcon
                  size={24}
                  color={"#FFFFFF"}
                  variant={"stroke"}
                />
                  Privacy Policy</a></li>
                <li><a href="#" className="flex gap-2.5 items-center text-white mb-5 text-base">    <ArrowRightDoubleIcon
                  size={24}
                  color={"#FFFFFF"}
                  variant={"stroke"}
                />
                  Terms of Service</a></li>
              </ul>
              <div>
                <p className="grad_text text-xl whitespace-nowrap  font-bold uppercase mb-[50px]">subscribe newsletter</p>
                <div className="max-w-[300px] w-full mx-auto rounded-full bg-white flex items-center ps-6 pe-1 py-1"> {/* Centered container */}
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="w-full border-none outline-none text-gray-600"
                  />
                  <button className="footer_sent text-white font-bold p-3
                     rounded-full ">
                    <SentIcon
                      size={24}
                      color={"#000000"}
                      variant={"stroke"}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className='w-full h-[1px] border-t border-[#F4F4F4] opacity-[0.2] pt-7 mt-[64px] '></div>
            <div className="   
           text-center text-white flex items-center justify-center gap-2.5">
              <span>ReviewQR is owned and operated by</span>
              <img className='w-[82px] h-4' src={logo} alt="" />
              <span>using official Meta APIs.</span>
            </div>
          </div>
        </div>
      </footer >

    </div >
  )
}

export default Footer