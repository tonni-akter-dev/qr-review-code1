import { SentIcon } from "hugeicons-react"

const ContactPage = () => {
    return (
        <div className='bg-[#FFFEF5] my-30 max-w-[1400px] lg:px-[120px] px-5 mx-auto'>

            <h2 className="text-[#222]  lg:text-[46px] text-2xl font-extrabold leading-normal text-center lg:mb-5 mb-4">{`Let's Get Started`}</h2>
            <p className="text-[#A0A0A0] mb-[56px] lg:text-lg text-sm  text-center">{`Ready to boost your reviews? We're here to help!`}</p>

            <div className="bg-white rounded-[20px] shadow_custom lg:py-[56px] py-6 lg:px-10 px-6">
                <form>
                    <div className="lg:mb-5 mb-4">
                        <label htmlFor="name" className="block text-[#222] text-base font-medium mb-2">Name</label>
                        <input type="text" id="name" name="name" className="border border-[#E5E5E5] rounded-[20px] px-[18px] py-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Name" />
                    </div>
                    <div className="lg:mb-5 mb-4">
                        <label htmlFor="email" className="block text-[#222] text-base font-medium mb-2">Email Address</label>
                        <input type="email" id="email" name="email" className="border border-[#E5E5E5] rounded-[20px] px-[18px] py-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="yourmail55@gmail.com" />
                    </div>
                    <div className="lg:mb-5 mb-4">
                        <label htmlFor="whatsapp" className="block text-[#222] text-base font-medium mb-2">Whatsapp Number</label>
                        <input type="text" id="whatsapp" name="whatsapp" className="border border-[#E5E5E5] rounded-[20px] px-[18px] py-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+880 123 456 789" />
                    </div>
                    <div className="lg:mb-5 mb-4">
                        <label htmlFor="business" className="block text-[#222] text-base font-medium mb-2">Business Name</label>
                        <input type="text" id="business" name="business" className="border border-[#E5E5E5] rounded-[20px] px-[18px] py-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Business Name" />
                    </div>
                    <div className="lg:mb-5 mb-4">
                        <label htmlFor="message" className="block text-[#222] text-base font-medium mb-2">Message</label>
                        <textarea id="message" name="message" rows="4" className="border border-[#E5E5E5] rounded-[20px] px-[18px] py-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Message"></textarea>
                    </div>
                    <button type="submit" className="normal_btn font-bold text-lg py-3  rounded-full w-full text-[#222] flex justify-center items-center gap-[14px]">
                        <SentIcon
                            size={20}
                            color={"#000000"}
                            variant={"stroke"}
                        /> Send Message
                    </button>
                    <p className="mt-4 text-center text-[#A0A0A0] text-base font-medium">
                        By submitting this form, you agree to our <a href="#" className="text-[#222] underline">Privacy Policy</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default ContactPage