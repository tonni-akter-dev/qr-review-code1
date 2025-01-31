
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import videoimg from '../assets/videoimg.png';
import cr1 from '../assets/cr1.png';
import cr2 from '../assets/cr2.png';
import cr3 from '../assets/cr3.png';
import cr4 from '../assets/cr4.png';

const ClientReviewSlider = () => {
    return (
        <div className='max-w-[1400px] px-[120px] py-[25px] mx-auto'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={4}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper">
                <SwiperSlide>
                    <img src={cr1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cr2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={videoimg} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cr3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cr4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cr1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cr2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={videoimg} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cr3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cr4} />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default ClientReviewSlider;