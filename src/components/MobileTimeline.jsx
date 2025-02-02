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
import arrow1 from '../assets/mobileArrow1.svg'
import arrow2 from '../assets/mobileArrow2.svg'
import arrow3 from '../assets/mobileArrow3.svg'
import arrow4 from '../assets/mobileArrow4.svg'
import arrow5 from '../assets/mobileArrow5.svg'
import arrow51 from '../assets/arrow5.svg'

const MobileTimeline = () => {
    return (
        <>
            <div className='relative'>
                <div className='flex justify-center  items-center'>
                    <img className='relative z-40 size-[52px]' src={step1} alt="" />
                </div>
                <div className='flex flex-col items-start gap-3 ms-10 step1_card'>
                    <img className='w-[142px] h-[115px] object-contain' src={scan} alt="" />
                    <div className='text-center max-w-[214px] bg-white shadow_custom p-2 w-full '>
                        <h3 className='text-base text-[#222] font-bold mb-1'>Scan & Access Menu</h3>
                        <p className='text-[#A0A0A0] text-xs'>Place a branded QR code on the restaurant table for customers to scan, message on WhatsApp, and instantly receive the menu PDF.</p>
                    </div>
                </div>
                <div className='arrow_one'>
                    <img className='w-[179px] h-[284px]' src={arrow1} alt="" />
                </div>
            </div>
            <div className='relative'>
                <div className='absolute step_two z-40'>
                    <img className='size-[52px]' src={step2} alt="" />
                </div>
                <div className='flex flex-col items-end gap-3 pt-5'>
                    <img className='w-[161px] h-[116px] object-contain' src={gatherreviews} alt="" />
                    <div className='text-center max-w-[214px] bg-white shadow_custom p-2 w-full '>
                        <h3 className='text-base text-[#222] font-bold mb-1'>Gather Reviews & Feedback</h3>
                        <p className='text-[#A0A0A0] text-xs'>Request user feedback, sending a Google review link for 4 or 5 ratings, and gathering details for average reviews to save and address.</p>
                    </div>
                </div>
                <div className='absolute arrow_two'>
                    <img className='w-[180px] h-[310px]' src={arrow2} alt="" />
                </div>
            </div>
            <div className='relative'>
                <div className='flex justify-center mb-[-10px]'>
                    <img className='size-[52px]' src={step3} alt="" />
                </div>
                <div className='flex items-center justify-center pt-[20px] arrow_3 '>
                    <img className='w-[250px] h-[71px] arrow_three_img' src={arrow3} alt="" />
                </div>
                <div className='flex justify-between'>
                    <div className='  flex flex-col text-center items-center gap-3 justify-center'>
                        <img className='w-[177px] h-[116px] object-contain' src={goodreview} alt="" />
                        <div className='max-w-[177px] p-2 w-full bg-white shadow_custom rounded-lg relative z-40'>
                            <h3 className='text-sm text-[#222] font-bold mb-1 leading-4'>Good Reviews & Feedback</h3>
                            <p className='text-[#A0A0A0] text-xs  font-medium'>For 4⭐ or 5⭐ reviews, thank customers for their positive feedback.</p>
                        </div>
                    </div>
                    <div className=' flex flex-col text-center items-center gap-3 justify-center'>
                        <img className='w-[161px] h-[116px] object-contain' src={reviewsbads} alt="" />
                        <div className='max-w-[177px] p-2 w-full  bg-white shadow_custom rounded-lg relative z-40'>
                            <h3 className='text-sm text-[#222] font-bold mb-1 leading-4'>Average/Bad Reviews & Feedback</h3>
                            <p className='text-[#A0A0A0] text-xs  font-medium'>Apologize and assure the customer their concerns are being addressed.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*  step4*/}
            <div className='relative'>
                <div className='flex justify-between mt-[-100px]'>
                    <div className='  flex flex-col text-center items-center gap-3 justify-center'>
                        <img className='absolute top-[103px] z-10' src={arrow4} alt="" />
                        <img className='w-[166px] h-[116px] mt-48 object-contain' src={discount} alt="" />
                        <div className='max-w-[177px] p-2 w-full bg-white shadow_custom rounded-lg relative z-40'>
                            <h3 className='text-sm text-[#222] font-bold mb-1 leading-4'>Discount</h3>
                            <p className='text-[#A0A0A0] text-xs  font-medium'>Send a 10% discount coupon, valid for 30 days, and notify the restaurant to verify it via CRM.</p>
                        </div>
                    </div>

                    <div className='  flex flex-col text-center items-center gap-3 justify-center'>
                        <img className='absolute top-[103px] z-10' src={arrow4} alt="" />
                        <img className='w-[180px] h-[116px] mt-48 object-contain' src={issuse} alt="" />
                        <div className='max-w-[177px] p-2 w-full bg-white shadow_custom rounded-lg relative z-40 '>
                            <h3 className='text-sm text-[#222] font-bold mb-1 leading-4'>Acknowledge the Issue</h3>
                            <p className='text-[#A0A0A0] text-xs  font-medium'>WRespond to the review with empathy. Let the customer know that you’ve read their feedback and you value their opinion.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*  step4*/}
            <div className='relative'>
                <div className='flex justify-between mt-[-100px]'>
                    <div className='  flex flex-col text-center items-center gap-3 justify-center'>
                        <img className='absolute top-[103px] z-10' src={arrow4} alt="" />
                        <img className='w-[166px] h-[116px] mt-48 object-contain' src={client} alt="" />
                        <div className='max-w-[177px] p-2 w-full bg-white shadow_custom rounded-lg'>
                            <h3 className='text-sm text-[#222] font-bold mb-1 leading-4'>Happy Client</h3>
                            <p className='text-[#A0A0A0] text-xs  font-medium'>Thank you so much for the discount! I really appreciate how quickly you resolved my issue. I’ll definitely be visiting again soon!</p>
                        </div>
                    </div>
                    <img className='absolute arrow_5 left-[176px] bottom-[43px] z-40' src={arrow5} alt="" />
                    <img className='absolute arrow_51 left-[176px] bottom-[43px] z-40' src={arrow51} alt="" />

                    <div className='  flex flex-col text-center items-center gap-3 justify-center'>
                        <img className='absolute top-[103px] z-10' src={arrow4} alt="" />
                        <img className='w-[180px] h-[116px] mt-48 object-contain' src={offer} alt="" />
                        <div className='max-w-[177px] p-2 w-full bg-white shadow_custom rounded-lg  '>
                            <h3 className='text-sm text-[#222] font-bold mb-1 leading-4'>Offer a Solution</h3>
                            <p className='text-[#A0A0A0] text-xs  font-medium'>We’re happy to offer you a 10% discount, valid for 30 days! Show it on your next visit, and we’ll verify it in our system. See you soon!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileTimeline