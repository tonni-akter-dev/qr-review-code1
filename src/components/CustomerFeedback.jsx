import { useContext, useEffect, useState } from "react";
import { superchargeData } from "../utils/data"
import { RefContext } from "../utils/RefContext";

const CustomerFeedback = () => {

    const [iconSize, setIconSize] = useState(window.innerWidth < 768 ? 27 : 40);

    useEffect(() => {
        const handleResize = () => {
            setIconSize(window.innerWidth < 768 ? 26 : 40);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const { featureRef } = useContext(RefContext);


    return (
        <div ref={featureRef} className='lg:mt-[94px] mt-20 max-w-[1400px] lg:px-[120px] px-5 mx-auto'>
            <div>
                <h2 className="text-[#222]  lg:text-[46px] text-2xl font-extrabold leading-normal text-center mb-4 ">Supercharge Your Customer Feedback Today!</h2>
                <p className="text-[#A0A0A0] lg:mb-[56px] mb-6 lg:text-lg text-sm  text-center">Inspiring success through innovative solutions.</p>
                <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-5 lg:mb-9 mb-6">
                    {superchargeData.map((item, index) => (
                        <div key={index} className="lg:p-6 p-4 rounded-[20px]" style={{ backgroundColor: item.bg_color }}>
                            <div className={`bg-${item.icon_bg}  mx-auto lg:p-5 p-[12px] w-fit rounded-full mb-6 flex justify-center items-center`} style={{ backgroundColor: item.icon_bg }}>
                                <div >
                                    {item.icon(iconSize)}
                                </div>
                            </div>
                            <h3 className="text-[#222] lg:text-[22px] text-sm font-bold text-center lg:mb-4 mb-2.5 lg:whitespace-nowrap lg:leading-[24px] leading-[15px]">{item.title}</h3>
                            <p className="text-[#A0A0A0] lg:text-base text-xs text-center">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <button className="normal_btn py-3 px-9 rounded-full text-[#222] font-bold lg:text-lg text-sm">Start Boosting Tour Reviews</button>

                </div>
            </div>
        </div>
    )
}

export default CustomerFeedback