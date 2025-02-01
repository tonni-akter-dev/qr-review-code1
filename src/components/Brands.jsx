// import brand from '../assets/brand.png'
// const Brands = () => {
//     return (
//         <div className="lg:my-[100px] my-20 max-w-[1400px] lg:px-[120px] px-5 mx-auto">
//             <h2 className="text-[#222]  lg:text-[46px] text-2xl font-extrabold leading-normal text-center lg:mb-5 mb-4">Trusted by renowned brands</h2>
//             <p className="text-[#A0A0A0] mb-[56px] lg:text-lg text-sm  text-center">Endorsed by industry-leading brands, our solutions are trusted worldwide for their quality <br className='lg:block hidden' /> and reliability.</p>

//             <div className='grid lg:grid-cols-6 grid-cols-2  justify-center items-center gap-9'>
//                 <img className='w-[182px] h-[36px]' src={brand} alt="" />
//                 <img className='w-[182px] h-[36px]' src={brand} alt="" />
//                 <img className='w-[182px] h-[36px]' src={brand} alt="" />
//                 <img className='w-[182px] h-[36px]' src={brand} alt="" />
//                 <img className='w-[182px] h-[36px]' src={brand} alt="" />
//                 <img className='w-[182px] h-[36px]' src={brand} alt="" />
//             </div>
//         </div>
//     )
// }

// export default Brands
import brand from "../assets/brand.png";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <div className="lg:my-[100px] my-20 max-w-[1400px] lg:px-[120px] px-5 mx-auto">
      <h2 className="text-[#222] lg:text-[46px] text-2xl font-extrabold leading-normal text-center lg:mb-5 mb-4">
        Trusted by renowned brands
      </h2>
      <p className="text-[#A0A0A0] lg:mb-[56px] mb-6 lg:text-lg text-sm text-center">
        Endorsed by industry-leading brands, our solutions are trusted worldwide for their quality <br className="lg:block hidden" /> and reliability.
      </p>

      {/* Marquee Effect for Brand Logos */}
      <Marquee speed={60} pauseOnHover={true} gradient={false}>
        <div className="flex items-center gap-5">
          {[...Array(10)].map((_, index) => (
            <img key={index} className="w-[182px] h-[36px]" src={brand} alt={`Brand ${index}`} />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Brands;
