import scan from '../assets/scan.png'
import gatherreviews from '../assets/gatherreviews.png'
import goodreview from '../assets/goodreview.png'
import reviewsbads from '../assets/reviewsbads.png'
import discount from '../assets/discount.png'
import client from '../assets/client.png'
import issuse from '../assets/issuse.png'
import offer from '../assets/offer.png'
import step1 from '../assets/step1.png'
import step2 from '../assets/step2.png'
import step3 from '../assets/step3.png'
import arrow1 from '../assets/arrow1.png'
import arrow2 from '../assets/arrow2.png'
import arrow4 from '../assets/arrow4.png'
import arrow3 from '../assets/arrow3.svg'
import arrow5 from '../assets/arrow5.svg'
import MobileTimeline from './MobileTimeline'

const Timeline = () => {
    return (
        <div className='mb-40'>
            <div className='lg:block hidden'>
                <div className='relative'>
                    <div className='flex justify-center items-center'>
                        <img className='size-20' src={step1} alt="" />
                    </div>
                    <div className='flex items-center gap-8 mt-9'>
                        <img className='w-[268px] h-[220px]' src={scan} alt="" />
                        <div className='max-w-[404px] bg-white shadow_custom p-6 w-full '>
                            <h3 className='text-[26px] text-[#222] font-bold mb-6'>Scan & Access Menu</h3>
                            <p className='text-[#A0A0A0] text-lg  font-medium'>Place a branded QR code on the restaurant table for customers to scan, message on WhatsApp, and instantly receive the menu PDF.</p>
                        </div>
                    </div>
                    <div className='absolute top-10 right-[220px]'>
                        <img className='w-[318px] h-[374px]' src={arrow1} alt="" />
                    </div>
                </div>
                <div className='relative'>
                    <div className='absolute left-[275px] z-50 top-[56px]'>
                        <img className='size-20' src={step2} alt="" />
                    </div>
                    <div className='flex items-center gap-8 justify-end mt-30'>
                        <div className='max-w-[404px] bg-white shadow_custom p-6 w-full '>
                            <h3 className='text-[26px] text-[#222] font-bold mb-6'>Gather Reviews & Feedback</h3>
                            <p className='text-[#A0A0A0] text-lg  font-medium'>Request user feedback, sending a Google review link for 4 or 5 ratings, and gathering details for average reviews to save and address.</p>
                        </div>
                        <img className='w-[268px] h-[220px]' src={gatherreviews} alt="" />
                    </div>
                    <div className='absolute top-[-63px] left-[304px]'>
                        <img className='w-[318px] h-[374px]' src={arrow2} alt="" />
                    </div>
                </div>
                <div className='relative'>
                    <div className='absolute top-[90px]  left-[560px]'>
                        <img className='size-20' src={step3} alt="" />
                    </div>
                    <div className='flex justify-between'>
                        <div className='  flex flex-col  text-center items-center gap-8 justify-center pt-80'>
                            <img className='w-[268px] h-[220px]' src={goodreview} alt="" />
                            <div className='max-w-[404px]  p-6 w-full bg-white shadow_custom rounded-3xl relative z-50 '>
                                <h3 className='text-2xl text-[#222] font-bold mb-6'>Good Reviews & Feedback</h3>
                                <p className='text-[#A0A0A0] text-lg  font-medium'>For 4⭐ or 5⭐ reviews, thank customers for their positive feedback.</p>
                            </div>
                        </div>
                        <div className='  p-6 flex flex-col text-center items-center gap-8 justify-center pt-85'>
                            <img className='w-[268px] h-[220px]' src={reviewsbads} alt="" />
                            <div className='max-w-[404px]  p-6 w-full  bg-white shadow_custom rounded-3xl relative z-50'>
                                <h3 className='text-2xl text-[#222] font-bold mb-6'>Average/Bad Reviews & Feedback</h3>
                                <p className='text-[#A0A0A0] text-lg  font-medium'>Apologize and assure the customer their concerns are being addressed.</p>
                            </div>
                        </div>
                    </div>
                    <div className='absolute top-[162px] left-[227px]'>
                        <img className='w-[762px] h-[200px]' src={arrow3} alt="" />
                    </div>
                </div>
                {/*  step4*/}
                <div className='relative'>
                    <div className='flex justify-between mt-[-100px]'>
                        <div className='  flex flex-col text-center items-center gap-8 justify-center'>
                            <img className='absolute top-[-10px] z-10' src={arrow4} alt="" />
                            <img className='w-[268px] h-[220px] mt-60' src={discount} alt="" />
                            <div className='max-w-[404px] bg-white shadow_custom p-6  rounded-3xl w-full  relative z-50'>
                                <h3 className='text-2xl text-[#222] font-bold mb-6'>Happy Client</h3>
                                <p className='text-[#A0A0A0] text-lg  font-medium'>Thank you so much for the discount! I really appreciate how quickly you resolved my issue. I’ll definitely be visiting again soon!</p>
                            </div>
                        </div>

                        <div className='  flex flex-col text-center items-center gap-8 justify-center'>
                            <img className='absolute top-[-10px] z-10' src={arrow4} alt="" />
                            <img className='w-[268px] h-[220px] mt-60' src={issuse} alt="" />
                            <div className='max-w-[404px]   w-full bg-white shadow_custom p-6 rounded-3xl relative z-50 '>
                                <h3 className='text-2xl text-[#222] font-bold mb-6'>Offer a Solution</h3>
                                <p className='text-[#A0A0A0] text-lg  font-medium'>We’re happy to offer you a 10% discount, valid for 30 days! Show it on your next visit, and we’ll verify it in our system. See you soon!</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='relative'>
                    <div className='flex justify-between items-end mt-[-100px]'>
                        <div className='  flex flex-col text-center items-center gap-8 justify-center'>
                            <img className='absolute top-[-10px] z-10' src={arrow4} alt="" />
                            <img className='w-[268px] h-[220px] mt-60' src={client} alt="" />
                            <div className='max-w-[404px] bg-white shadow_custom p-6  rounded-3xl w-full '>
                                <h3 className='text-2xl text-[#222] font-bold mb-6'>Discount</h3>
                                <p className='text-[#A0A0A0] text-lg  font-medium'>Send a 10% discount coupon, valid for 30 days, and notify the restaurant to verify it via CRM.</p>
                            </div>
                        </div>
                        <img className='absolute left-[410px] bottom-[70px]' src={arrow5} alt="" />

                        <div className='  flex flex-col text-center items-center gap-8 justify-center'>
                            <img className='absolute top-[-10px] z-10' src={arrow4} alt="" />
                            <img className='w-[268px] h-[220px] mt-60' src={offer} alt="" />
                            <div className='max-w-[404px]   w-full bg-white shadow_custom p-6 rounded-3xl '>
                                <h3 className='text-2xl text-[#222] font-bold mb-6'>Acknowledge the Issue</h3>
                                <p className='text-[#A0A0A0] text-lg  font-medium'>Respond to the review with empathy. Let the customer know that you’ve read their feedback and you value their opinion.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='lg:hidden block'>
                <MobileTimeline />
            </div>
        </div>
    )
}

export default Timeline