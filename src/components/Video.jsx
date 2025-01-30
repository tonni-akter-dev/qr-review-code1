import React from "react";
import video from "../assets/video(1).png";

export const Vedio = () => {
  return (
    <div className="flex flex-col w-[1254px] items-center gap-14 relative">
      <div className="flex-col w-[639px] gap-4 relative flex-[0_0_auto] flex items-center">
        <div className="relative self-stretch mt-[-1.00px] font-title-46 font-[number:var(--title-46-font-weight)] text-black text-[length:var(--title-46-font-size)] text-center tracking-[var(--title-46-letter-spacing)] leading-[var(--title-46-line-height)] [font-style:var(--title-46-font-style)]">
          Clients Review
        </div>

        <p className="relative self-stretch font-body-18 font-[number:var(--body-18-font-weight)] text-body-text text-[length:var(--body-18-font-size)] text-center tracking-[var(--body-18-letter-spacing)] leading-[var(--body-18-line-height)] [font-style:var(--body-18-font-style)]">
          We have several powerful plans to showcase your business and get
          discovered
          <br />
          as a creative entrepreneurs. Everything you need.
        </p>
      </div>

      <div className="relative w-[1254px] h-[498px]">
        <div className="relative h-[498px]">
          <div className="absolute w-[364px] h-[442px] top-14 left-[890px] bg-white rounded-[30px]">
            <div className="relative w-[332px] h-[410px] top-4 left-4 bg-[url(/image-4.png)] bg-[100%_100%]">
              <div className="relative w-32 h-[47px] top-[333px] left-[104px]">
                <div className="[font-family:'Nunito_Sans-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal] absolute top-0 left-0">
                  Sarah Collins
                </div>

                <div className="w-[98px] top-7 left-[13px] [font-family:'Nunito_Sans-Medium',Helvetica] font-medium whitespace-nowrap absolute text-[#000000] text-base tracking-[0] leading-[normal]">
                  Brand name
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-[364px] h-[442px] top-14 left-0 bg-white rounded-[30px]">
            <div className="relative w-[332px] h-[410px] top-4 left-4 bg-[url(/image.png)] bg-cover bg-[50%_50%]">
              <div className="relative w-[113px] h-[51px] top-[328px] left-[111px]">
                <div className="w-[108px] top-0 left-px [font-family:'Poppins-SemiBold',Helvetica] font-semibold absolute text-white text-xl tracking-[0] leading-[normal]">
                  Daniel Lee
                </div>

                <div className="w-[104px] top-[30px] left-0 [font-family:'Poppins-Regular',Helvetica] font-normal absolute text-[#000000] text-base tracking-[0] leading-[normal]">
                  Brand name
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-[382px] h-[462px] top-9 left-[752px] bg-white rounded-[30px]">
            <div className="relative w-[350px] h-[430px] top-4 left-4 bg-[url(/image-2.png)] bg-cover bg-[50%_50%]">
              <div className="relative w-[141px] h-[50px] top-[350px] left-[107px]">
                <div className="w-[137px] top-0 left-0 [font-family:'Nunito_Sans-ExtraBold',Helvetica] font-extrabold absolute text-white text-xl tracking-[0] leading-[normal]">
                  Sarah Collins
                </div>

                <div className="w-24 top-7 left-5 [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold absolute text-[#000000] text-base tracking-[0] leading-[normal]">
                  Brand name
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-[382px] h-[462px] top-9 left-[120px] bg-white rounded-[30px]">
            <div className="relative w-[350px] h-[430px] top-4 left-4 bg-[url(/image-3.png)] bg-[100%_100%]">
              <div className="relative w-[104px] h-[53px] top-[347px] left-[125px]">
                <div className="w-[100px] top-0 left-0 [font-family:'Nunito_Sans-Bold',Helvetica] font-bold absolute text-white text-xl tracking-[0] leading-[normal]">
                  Daniel Lee
                </div>

                <div className="w-[95px] top-[30px] left-[5px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold absolute text-[#000000] text-base tracking-[0] leading-[normal]">
                  Brand name
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-[694px] h-[498px] top-0 left-72">
            <div className="relative h-[498px] rounded-[30px]">
              <div className="w-[694px] h-[498px] rounded-[30px] [background:linear-gradient(180deg,rgb(255,223,0)_0%,rgb(253,204,13)_100%)] absolute top-0 left-0">
                <div className="relative w-[670px] h-[475px] top-3 left-3">
                  <div className="absolute w-[147px] h-[58px] top-[379px] left-[265px]">
                    <div className="w-[143px] -top-px -left-px [-webkit-text-stroke:1px_#ffffff] [font-family:'Poppins-SemiBold',Helvetica] font-semibold absolute text-white text-xl tracking-[0] leading-[normal]">
                      Sarah Collins
                    </div>

                    <div className="w-[104px] top-[33px] left-[18px] [-webkit-text-stroke:1px_#ffffff] [font-family:'Poppins-Regular',Helvetica] font-normal absolute text-[#000000] text-base tracking-[0] leading-[normal]">
                      Brand name
                    </div>
                  </div>

                  <img
                    className="absolute w-[670px] h-[475px] top-0 left-0 object-cover"
                    alt="Video"
                    src={video}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


