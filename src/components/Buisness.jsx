import { RefContext } from "../utils/RefContext";
import { buisnessData } from "../utils/data"
import { useContext, useEffect, useRef, useState } from "react";

const Buisness = () => {

    const [iconSize, setIconSize] = useState(window.innerWidth < 768 ? 27 : 40);

    useEffect(() => {
        const handleResize = () => {
            setIconSize(window.innerWidth < 768 ? 27 : 40);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { suitsRef } = useContext(RefContext);

    return (
        <div ref={suitsRef} className='lg:mt-[94px] mt-20 max-w-[1400px] lg:px-[120px] px-5 mx-auto'>
            <div>
                <h2 className="text-[#222]  lg:text-[46px] text-2xl font-extrabold leading-normal text-center mb-4">Best suits for Business</h2>
                <p className="text-[#A0A0A0] lg:mb-[56px] mb-6 lg:text-lg text-sm  text-center">Empower your business with tools to collect, manage, and reward customer feedback effortlessly.</p>
                <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-5 mb-9">
                    {buisnessData.map((item, index) => (
                        <div key={index} className="lg:py-6  lg:px-5 px-4 py-4 rounded-[20px]" style={{ backgroundColor: item.bg_color }}>
                            <div className={`bg-${item.icon_bg}  mx-auto lg:p-5 p-[12px] w-fit rounded-full mb-6 flex justify-center items-center`} style={{ backgroundColor: item.icon_bg }}>
                                <div >
                                    {item.icon(iconSize)}
                                </div>
                            </div>
                            <h3 className="text-[#222] lg:text-[22px] text-sm font-bold text-center mb-4  
                            leading-[24px]">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Buisness