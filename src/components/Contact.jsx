import { Calling02Icon, Chatting01Icon, Mail01Icon, SentIcon } from "hugeicons-react"
import { RefContext } from "../RefContext";
import { useContext } from "react";

const Contact = () => {
    const { contactRef } = useContext(RefContext);

    return (
        <div ref={contactRef} className="lg:my-[100px] my-20 max-w-[1400px] lg:px-[120px] px-5 mx-auto">
            <h2 className="text-[#222]  lg:text-[46px] text-2xl font-extrabold leading-normal text-center lg:mb-5 mb-4">{`Let's Get Started`}</h2>
            <p className="text-[#A0A0A0] mb-[56px] lg:text-lg text-sm  text-center">{`Ready to boost your reviews? We're here to help!`}</p>
            <div className=" px-4 lg:px-0">
                <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-8">
                    {/* Left Side: Form */}
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
                    {/* Right Side: Contact Information */}
                    <div className=" flex flex-col gap-6 ">
                        <div className="border border-[#E5E5E5]  rounded-3xl lg:py-5 py-3.5 lg:ps-8 ps-[22px] flex gap-8 items-center">
                            <div className="lg:p-5 p-3.5 border border-[#E5E5E5] w-fit rounded-full">
                                <Calling02Icon
                                    size={24}
                                    color={"#22222"}
                                    variant={"stroke"}
                                />
                            </div>
                            <div>
                                <h3 className="lg:text-[22px] text-base font-bold lg:mb-4 mb-2.5">Phone Support</h3>
                                <p className="text-[#A0A0A0] text-base">+1 (555) 123-4567</p>
                                <p className="text-[#A0A0A0] text-base">Mon-Fri from 9am to 6pm</p>
                            </div>
                        </div>
                        <div className="border border-[#E5E5E5]  rounded-3xl lg:py-5 py-3.5 lg:ps-8 ps-[22px] flex gap-8 items-center">
                            <div className="lg:p-5 p-3.5 border border-[#E5E5E5] w-fit rounded-full">
                                <Mail01Icon
                                    size={24}
                                    color={"#22222"}
                                    variant={"stroke"}
                                />
                            </div>
                            <div>
                                <h3 className="lg:text-[22px] text-base font-bold lg:mb-4 mb-2.5">Email</h3>
                                <p className="text-[#A0A0A0] text-base">support@reviewsqr.com</p>
                                <p className="text-[#A0A0A0] text-base">{`We'll respond within 24 hours`}</p>
                            </div>
                        </div>
                        <div className="border border-[#E5E5E5]  rounded-3xl lg:py-5 py-3.5 lg:ps-8 ps-[22px] flex gap-8 items-center">
                            <div className="lg:p-5 p-3.5 border border-[#E5E5E5] w-fit rounded-full">
                                <Chatting01Icon
                                    size={24}
                                    color={"#22222"}
                                    variant={"stroke"}
                                />
                            </div>
                            <div>
                                <h3 className="lg:text-[22px] text-base font-bold lg:mb-4 mb-2.5">Live Chat</h3>
                                <p className="text-[#A0A0A0] text-base">Available 24/7</p>
                                <p className="text-[#A0A0A0] text-base">Instant support via WhatsApp</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact