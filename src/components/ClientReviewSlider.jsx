import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import videoimg from '../assets/videoimg.png';
import cr1 from '../assets/cr1.png';
import cr2 from '../assets/cr2.png';
import cr3 from '../assets/cr3.png';
import cr4 from '../assets/cr4.png';
import video1 from '../assets/video1.mp4';
import play from '../assets/Play.svg';
import { useRef, useState } from 'react';

const ClientReviewSlider = () => {

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        console.log('click');
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className='max-w-[1400px] lg:px-[120px] px-5 py-[25px] mx-auto'>
            <h2 className="text-[#222]  lg:text-[46px] text-2xl font-extrabold leading-normal text-center lg:mb-5 mb-4">Clients Review</h2>
            <p className="text-[#A0A0A0] mb-[56px] lg:text-lg text-sm  text-center">We have several powerful plans to showcase your business and get discovered <br />
                as a creative entrepreneurs. Everything you need.</p>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 80,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                }}
                breakpoints={{

                    300: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    420: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },

                    768: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                loop={true}
                initialSlide={2}
                pagination={false}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper">
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        {/* Image */}
                        <img src={cr1} alt="slide_image" />
                        {/* Text Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end items-center bottom-5">
                            <p className="text-white text-xl font-bold">Daniel Lee</p>
                            <p className="text-[#222] text-base font-semibold">Brand name</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        {/* Image */}
                        <img src={cr2} alt="slide_image" />
                        {/* Text Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end items-center bottom-5">
                            <p className="text-white text-xl font-bold">Daniel Lee</p>
                            <p className="text-[#222] text-base font-semibold">Brand name</p>
                        </div>
                    </div>                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative  w-full h-full lg:rounded-[36px] rounded-lg ">
                        {!isPlaying && (
                            <div onClick={handlePlay} className="absolute top-[40%] left-[45%] cursor-pointer z-40">
                                <img className="!lg:w-12 !h-12 !p-0  " src={play} alt="Play" />
                            </div>
                        )}
                        <video
                            ref={videoRef}
                            controls
                            muted
                            loop
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            className="w-full h-full object-cover">
                            <source src={video1} type="video/mp4" />
                        </video>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        {/* Image */}
                        <img src={cr3} alt="slide_image" />
                        {/* Text Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end items-center bottom-5">
                            <p className="text-white text-xl font-bold">Daniel Lee</p>
                            <p className="text-[#222] text-base font-semibold">Brand name</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full h-full">
                        {/* Image */}
                        <img src={cr4} alt="slide_image" />
                        {/* Text Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end items-center bottom-5">
                            <p className="text-white text-xl font-bold">Daniel Lee</p>
                            <p className="text-[#222] text-base font-semibold">Brand name</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div >
    )
}

export default ClientReviewSlider