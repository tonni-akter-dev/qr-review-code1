/* eslint-disable react/no-unknown-property */
import { GiftIcon, StarIcon, WhatsappIcon } from "hugeicons-react"
import video1 from '../assets/video1.mp4';
import play from '../assets/Play.svg';
import { useRef, useState } from "react";


const BannerVideo = () => {
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
        <div>
            <div className="relative rounded-3xl lg:mt-[58px] mt-6 bg-gradient-to-r from-[#FDCC0D] to-[#FF9529] max-w-[880px] w-full lg:h-[430px] h-[166px]">
                <div className="relative lg:w-[880px] w-full h-full lg:rounded-[36px] rounded-lg ">
                    {!isPlaying && (
                        <div onClick={handlePlay} className="absolute top-[40%] left-[45%] cursor-pointer z-40">
                            <img className="lg:size-[78px] size-8" src={play} alt="Play" />
                        </div>
                    )}
                    <video
                        ref={videoRef}
                        controls
                        muted
                        loop
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        style={{ borderRadius: "24px", width: "100%", height: "100%", objectFit: "cover" }}
                        className="rounded-3xl w-[880px]">
                        <source src={video1} type="video/mp4" />
                    </video>

                </div>
                <div className="absolute top-[108px] left-[-160px] bg-white rounded-full w-fit py-2 px-4 lg:flex hidden gap-2.5 shadow_custom text-sm text-[#24252A] font-medium">
                    <StarIcon size={20} color={"#FFC300"} variant={"stroke"} />
                    <p>Increase 4-5★ Reviews</p>
                </div>
                <div className="absolute top-[44px] right-[-72px] bg-white rounded-full w-fit py-2 px-4 lg:flex hidden gap-2.5 shadow_custom text-sm text-[#24252A] font-medium">
                    <WhatsappIcon size={20} color={"#4DE009"} variant={"stroke"} />
                    <p>WhatsApp Integration</p>
                </div>
                <div className="absolute bottom-[50px] right-[-123px] bg-white rounded-full w-fit py-2 px-4 lg:flex hidden gap-2.5 shadow_custom text-sm text-[#24252A] font-medium">
                    <GiftIcon
                        size={20}
                        color={"#1567FF"}
                        variant={"stroke"}
                    />
                    <p>Reward Happy Customers</p>
                </div>
            </div>

            {/* sm button */}
            <div className="lg:hidden flex flex-wrap justify-center items-center gap-6 mt-4">
                <div className="bg-white rounded-full w-fit py-2 px-4 flex gap-2.5 shadow_custom text-xs text-[#24252A] font-medium">
                    <StarIcon size={14} color={"#FFC300"} variant={"stroke"} />
                    <p>Increase 4-5★ Reviews</p>
                </div>
                <div className="bg-white rounded-full w-fit py-2 px-4 flex gap-2.5 shadow_custom text-xs text-[#24252A] font-medium">
                    <WhatsappIcon size={14} color={"#4DE009"} variant={"stroke"} />
                    <p>WhatsApp Integration</p>
                </div>
                <div className="bg-white rounded-full w-fit py-2 px-4 flex gap-2.5 shadow_custom text-xs text-[#24252A] font-medium">
                    <GiftIcon
                        size={14}
                        color={"#1567FF"}
                        variant={"stroke"}
                    />
                    <p>Reward Happy Customers</p>
                </div>
            </div>
            {/* small device */}
        </div>
    )
}

export default BannerVideo