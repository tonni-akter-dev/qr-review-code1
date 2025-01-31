/* eslint-disable react/no-unknown-property */
import { GiftIcon, StarIcon, WhatsappIcon } from "hugeicons-react"

const BannerVideo = () => {
    return (
        <div>
            <div className="relative rounded-3xl mt-[58px] bg-gradient-to-r from-[#FDCC0D] to-[#FF9529] max-w-[880px] w-full lg:h-[430px] h-[166px]">
                <div className="lg:p-4 p-2 lg:w-[880px] w-full h-full lg:rounded-[36px] rounded-lg ">
                    <iframe width="100%" style={{ borderRadius: "24px" }} height="100%" src="https://www.youtube.com/embed/-yIsQPp31L0?si=y-8d2XwHLyiE6zDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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