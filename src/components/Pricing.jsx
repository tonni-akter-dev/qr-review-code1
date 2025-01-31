/* eslint-disable no-unused-vars */
import { CheckmarkCircle02Icon, CrownIcon, StarIcon, ZapIcon } from "hugeicons-react";
import { pricingData } from "../utils/data";
import { useContext, useState } from "react";
import { RefContext } from "../RefContext";

const Pricing = () => {
    const { pricingRef } = useContext(RefContext);

    const [isBDT, setIsBDT] = useState(true);

    // Function to handle the toggle change
    const handleToggleChange = (e) => {
        setIsBDT(e.target.checked);
    };

    return (
        <div ref={pricingRef} className="lg:my-[100px] my-20 max-w-[1400px] lg:px-[120px] px-5 mx-auto">
            <h2 className="text-[#222]  lg:text-[46px] text-2xl font-extrabold leading-normal text-center lg:mb-5 mb-4">The Right Plan for Your Business</h2>
            <p className="text-[#A0A0A0] mb-[30px] lg:text-lg text-sm  text-center">We have several powerful plans to showcase your business and get discovered <br />
                as a creative entrepreneurs. Everything you need.</p>

            <div className="flex items-center gap-6 justify-center mb-[56px]">
                <p className="text-base  text-[#222]">BDT</p>
                <div className="flex items-center justify-center w-[56px] ">
                    <label htmlFor="toggle" className="flex items-center cursor-pointer">
                        <input defaultChecked={isBDT}
                            type="checkbox" onChange={handleToggleChange}
                            id="toggle" className="sr-only peer" />
                        <div className="block relative bg-gradient-to-r from-[#FFDF00] to-[#FDCC0D] w-[56px] h-6 p-1 rounded-full before:absolute before:bg-white before:w-4 before:h-4 before:p-1 before:rounded-full before:transition-all before:duration-500 before:left-1 peer-checked:before:left-8 peer-checked:before:bg-white"></div>
                    </label>
                </div>
                <p className="text-base text-[#222] ">USD</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 grid-cols-1">
                {pricingData.map((card, index) => (
                    <PricingCard key={index} {...card} isBDT={isBDT} />
                ))}
            </div>
        </div>
    )
}
export default Pricing

// eslint-disable-next-line react/prop-types
const PricingCard = ({ title, price, description, features, isBDT }) => {
    return (
        <div className={`h-[607px] bg-white rounded-3xl shadow-md pt-[31px] pb-[37px] ps-[51px] pe-[34px] flex flex-col  justify-between `} style={{ boxShadow: ' 0px 6px 36px 0px rgba(40, 35, 0, 0.05)' }}>
            <div>
                {/* Title */}
                <div className="flex items-center justify-center mb-4">
                    {title === 'Gold' && <span className="text-yellow-400 mr-2">
                        <ZapIcon
                            size={24}
                            color={"#FDCC0D"}
                            variant={"stroke"}
                        /></span>}
                    {title === 'Platinum' && <span className="text-blue-500 mr-2">  <CrownIcon
                        size={24}
                        color={"#000DFF"}
                        variant={"stroke"}
                    /></span>}
                    {title === 'Custom' && <span className="text-gray-600 mr-2">  <StarIcon
                        size={24}
                        color={"#FDCC0D"}
                        variant={"stroke"}
                    /></span>}
                    <h3 className="text-2xl font-semibold text-[#222]">{title}</h3>
                </div>
                <p className="text-[#A0A0A0] text-center mb-6">{description}</p>
                {/* Price */}
                <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-[#222]"> {title === 'Custom' ? '' : (!isBDT ? `৳ ${price}` : `$ ${price}`)}
                    </span>
                    <span className="text-[#A0A0A0]">{title === 'Custom' ? '' : title === 'Platinum' ? '/year' : '/month'}</span>
                </div>
                {/* Features */}
                <ul className="list-disc pl-6 mb-6 text-[#222]">
                    {features.map((feature, index) => (
                        <li className="flex gap-2 items-start  text-base text-[#A0A0A0] mb-4" key={index}>   <CheckmarkCircle02Icon
                            size={24}
                            color={"#000000"}
                            variant={"stroke"}
                        />
                            {feature}</li>
                    ))}
                </ul>
            </div>
            {/* Button */}
            <div className="text-center">
                <button className={` px-[64px] h-[46px] rounded-full font-extrabold text-lg capitalize  
                          ${title === 'Custom' ? 'normal_btn1' :
                        'normal_btn'}`}>
                    {title === 'Custom' ? 'Contact Us' : 'Subscribe Now'}
                </button>
            </div>
        </div>
    );
};
