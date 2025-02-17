const PricingPage = () => {
    return (
        <div className='bg-[#FFFEF5] my-30 max-w-[1400px] lg:px-[120px] px-5 mx-auto'>
            <h2 className="text-[#222]  lg:text-[30px] text-2xl font-extrabold leading-normal text-center lg:mb-3 mb-4">You getting Package Gold</h2>
            <p className="text-[#A0A0A0] mb-[30px] lg:text-lg text-sm font-semibold  text-center">Price: 500 BDT</p>

            <div className="max-w-[500px] w-full mx-auto bg-white rounded-[20px] shadow_custom lg:py-[56px] py-6 lg:px-10 px-6">
                <form>
                    <div className="lg:mb-5 mb-4">
                        <label htmlFor="name" className="block text-[#222] text-base font-medium mb-2">Full Name</label>
                        <input type="text" id="name" name="name" className="border border-[#E5E5E5] rounded-[20px] px-[18px] py-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Full Name" />
                    </div>
                    <div className="lg:mb-5 mb-4">
                        <label htmlFor="email" className="block text-[#222] text-base font-medium mb-2">Email Address</label>
                        <input type="email" id="email" name="email" className="border border-[#E5E5E5] rounded-[20px] px-[18px] py-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="yourmail55@gmail.com" />
                    </div>

                    <div className="lg:mb-5 mb-4">
                        <label htmlFor="business" className="block text-[#222] text-base font-medium mb-2">Business Name</label>
                        <input type="text" id="business" name="business" className="border border-[#E5E5E5] rounded-[20px] px-[18px] py-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Business Name" />
                    </div>
                    <div className="lg:mb-5 mb-4">
                        <label htmlFor="whatsapp" className="block text-[#222] text-base font-medium mb-2">Business Contact Number</label>
                        <input type="text" id="whatsapp" name="whatsapp" className="border border-[#E5E5E5] rounded-[20px] px-[18px] py-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Business Number" />
                    </div>

                    <div className="flex gap-6 justify-center mt-5 flex-wrap">
                        <button type="submit" className="bg-red-500 font-bold text-lg py-3  rounded-lg w-[200px]  text-[#222] flex justify-center items-center gap-[14px]">
                            Cancel
                        </button>
                        <button type="submit" className="normal_btn font-bold text-lg py-3  rounded-lg w-[200px]  text-[#222] flex justify-center items-center gap-[14px]">
                            Go For Payment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PricingPage