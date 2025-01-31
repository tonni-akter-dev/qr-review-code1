import BannerVideo from "./BannerVideo"

const Banner = () => {
    return (
        <div className="lg:px-0 px-5 mt-28">
            <h1 className="lg:text-[56px] text-2xl text-[#24252A]  font-bold mx-auto text-center lg:mt-[56px] mt-6 mb-6">
                Increase Your <span className="grad_text">5-Star Ratings</span> <br />
                With Insightful QR Codes
            </h1>
            <p className="lg:text-lg text-sm text-[#A0A0A0] max-w-[561px] text-center mx-auto lg:mb-[56px]  mb-6">Turn happy customers into glowing reviews. Our WhatsApp-powered QR system helps you collect more positive reviews while privately handling feedback for improvement.</p>
            <div className="flex flex-wrap gap-4 items-center justify-center">
                <button className="cursor-pointer normal_btn1  lg:text-lg  text-sm font-bold text-[#222] 
                 lg:py-4 py-[18px] px-6 rounded-full ">Get Your QR Code</button>
                <button className="cursor-pointer  border border-[#E5E5E5]  lg:text-lg  text-sm font-bold text-[#222]
                 lg:py-4 py-[18px] px-6 rounded-full ">See How It Works</button>
            </div>
            <div className="flex justify-center">
                <BannerVideo />
            </div>
        </div>
    )
}

export default Banner