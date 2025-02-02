import { CrownIcon, StarIcon, WhatsappIcon } from 'hugeicons-react'
import reviews from '../assets/reviews.png'


const Reviews = () => {
    return (
        <div>
            <div className="lg:mt-[100px] mt-20 max-w-[1400px]  px-5 mx-auto">
                <div className="flex lg:flex-row lg:flex-wrap xl:flex-nowrap justify-center flex-col items-center lg:gap-[65px]">
                    <div className='lg:hidden flex flex-col justify-center items-center text-center'>
                        <h2 className=" text-2xl font-extrabold text-[#222] mb-4">
                            Elevate Reviews Effortlessly
                        </h2>
                        <p className="text-[#A0A0A0] mb-6 text-sm">
                            Effortlessly boost 5-star reviews with smart QR codes that guide satisfied
                            customers to share their positive experiences instantly.
                        </p>
                    </div>
                    <img
                        src={reviews}
                        alt="Review Boost"
                        className="lg:w-[445px] w-[183px]"
                    />

                    {/* Right side: Text and Features */}
                    <div className="w-full">
                        <div className='lg:flex flex-col hidden'>
                            <h2 className="lg:text-[46px] lg:whitespace-nowrap text-2xl font-extrabold text-[#222] mb-4">
                                Elevate Reviews Effortlessly
                            </h2>
                            <p className="text-[#A0A0A0] mb-9 text-lg">
                                Effortlessly boost 5-star reviews with smart QR codes that guide satisfied
                                customers to share their positive experiences instantly.
                            </p>
                        </div>
                        {/* Features List */}
                        <div className='lg:mt-0 mt-6'>
                            {/* Feature 1: Scan & Chat */}
                            <div className="flex items-center lg:mb-6 mb-4 gap-4 lg:p-4 lg:py-4 py-3.5 ps-4 lg:pe-4 pe-5  border border-[#E5E5E5] rounded-2xl">
                                <div className="border border-[#E5E5E5] rounded-full lg:p-4 p-3 mr-3">
                                    <div className='lg:flex hidden'>
                                        <StarIcon size={35} color={"#FFEA00"} variant={"stroke"} />
                                    </div>
                                    <div className='lg:hidden flex'>
                                        <StarIcon size={21} color={"#FFEA00"} variant={"stroke"} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="lg:text-[22px] text-base font-bold lg:leading-[33px] leading-6 lg:mb-4 mb-2.5 text-[#222] lg:whitespace-nowrap ">Customer scans & chats with our smart WhatsApp bot</h3>
                                    <p className="text-[#A0A0A0] lg:text-base text-xs">
                                        Customers easily interact by scanning and chatting with our intelligent,
                                        user-friendly WhatsApp bot for support.
                                    </p>
                                </div>
                            </div>
                            {/* Feature 2: Google Reviews */}
                            <div className="flex items-center lg:mb-6 mb-4 gap-4 lg:p-4 lg:py-4 py-3.5 ps-4 lg:pe-4 pe-5  border border-[#E5E5E5] rounded-2xl">
                                <div className="border border-[#E5E5E5] rounded-full lg:p-4 p-3 mr-3">
                                    <div className='lg:flex hidden'>
                                        <WhatsappIcon size={35} color={"#11F405"} variant={"stroke"} />
                                    </div>
                                    <div className='lg:hidden flex'>
                                        <WhatsappIcon size={21} color={"#11F405"} variant={"stroke"} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="lg:text-[22px] text-base font-bold lg:leading-[33px] leading-6 lg:mb-4 mb-2.5 text-[#222] lg:whitespace-nowrap ">Happy customers are guided to leave Google reviews</h3>
                                    <p className="text-[#A0A0A0] lg:text-base text-xs">
                                        Delighted customers are seamlessly guided to share positive feedback by leaving Google reviews effortlessly
                                    </p>
                                </div>
                            </div>
                            {/* Feature 3: Rewards & Discounts */}
                            <div className="flex items-center lg:mb-6 mb-4 gap-4 lg:p-4 lg:py-4 py-3.5 ps-4 lg:pe-4 pe-5  border border-[#E5E5E5] rounded-2xl">
                                <div className="border border-[#E5E5E5] rounded-full lg:p-4 p-3 mr-3">
                                    <div className='lg:flex hidden'>
                                        <CrownIcon size={35} color={"#4000FF"} variant={"stroke"} />
                                    </div>
                                    <div className='lg:hidden flex'>
                                        <CrownIcon size={21} color={"#4000FF"} variant={"stroke"} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="lg:text-[22px] text-base font-bold lg:leading-[33px] leading-6 lg:mb-4 mb-2.5 text-[#222] lg:whitespace-nowrap ">Reward them with discounts for their positive feedback</h3>
                                    <p className="text-[#A0A0A0] lg:text-base text-xs">
                                        Customers earn exclusive discounts as a reward for sharing their positive feedback and reviews
                                    </p>
                                </div>
                            </div>

                        </div> 
                        {/* End Features List */}
                    </div>
                </div>
            </div>
        </div>)
}

export default Reviews