import logo from '../assets/logo.webp'

const Header = () => {
  return (
    <div className='max-w-[1400px] px-[120px] py-[25px] mx-auto'>
      <div className='flex justify-between items-center'>
        <img className='w-[191px] h-[50px] object-contain' src={logo} alt="" />
        <nav className="flex items-center gap-[56px] bg-white">
          <ul className="flex space-x-10 text-lg py-[2.5] font-medium text-black">
            <li className="relative">
              <a href="#" className="text-darkT text-lg font-semibold">Features</a>
            </li>
            <li className="relative">
              <a href="#" className="text-darkT text-lg font-semibold">Suits</a>
            </li>
            <li>
              <a href="#" className="text-darkT text-lg font-semibold">Pricing</a>
            </li>
            <li>
              <a href="#" className="text-darkT text-lg font-semibold">Contact</a>
            </li>
          </ul>
          <button className="normal_btn text-darkT font-bold px-[38px] py-[11px] rounded-full text-lg ">
            Get Started
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Header