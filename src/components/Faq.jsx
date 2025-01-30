import FAQ from "../assets/FAQ.png";

export const Faq = () => {
  return (
    <div className='max-w-[1400px] px-[120px] py-[25px] mx-auto'>
      <div className="flex flex-col w-[1200px] items-center gap-14 relative">
        <div className="flex flex-col w-[768px] items-center gap-4 relative flex-[0_0_auto]">

          <h2 className="text-black text-center text-[46px] font-bold leading-tight">
            Frequently Asked Question
          </h2>

          <p className="relative self-stretch font-body-18 font-[number:var(--body-18-font-weight)] text-body-text text-[length:var(--body-18-font-size)] text-center tracking-[var(--body-18-letter-spacing)] leading-[var(--body-18-line-height)] [font-style:var(--body-18-font-style)]">
            A Frequently Asked Questions (FAQ) section provides quick answers to
            common inquiries, helping users save time and find relevant
            information efficiently.
          </p>
        </div>

        <div className="relative w-[1200px] h-[446.67px]">
          <div className="absolute w-[498px] h-[441px] top-0 left-0 bg-white rounded-[20px] overflow-hidden shadow-[0px_6px_36px_#2823000d]">
            <div className="flex flex-col w-[375px] items-center gap-[7.13px] absolute top-[254px] left-[62px]">
              <div className="relative w-fit mt-[-0.89px] [font-family:'Nunito_Sans-ExtraBold',Helvetica] font-extrabold text-black text-[22px] text-center tracking-[0] leading-[34.8px] whitespace-nowrap">
                You have different questions?
              </div>

              <p className="relative w-[337px] font-body-18 font-[number:var(--body-18-font-weight)] text-body-text text-[length:var(--body-18-font-size)] text-center tracking-[var(--body-18-letter-spacing)] leading-[var(--body-18-line-height)] [font-style:var(--body-18-font-style)]">
                Our team will answer all your questions.
                <br />
                We ensure a quick response.
              </p>
            </div>

            <button className="all-[unset] box-border flex w-[284px] h-[46px] items-center justify-center gap-2.5 px-9 py-3.5 absolute top-[358px] left-[107px] rounded-[36px] overflow-hidden [background:linear-gradient(180deg,rgb(255,223,0)_0%,rgb(253,204,13)_100%)]">
              <div className="relative w-fit [font-family:'Nunito_Sans-Bold',Helvetica] font-bold text-black text-lg text-center tracking-[0] leading-[24.1px] whitespace-nowrap">
                Get Started Now
              </div>
            </button>

            <img
              className="absolute w-[232px] h-[190px] top-[39px] left-[132px]"
              alt="Faq"
              src={FAQ}
            />
          </div>

          <div className="absolute w-[666px] h-[126px] top-0 left-[534px] rounded-[10px]">
            <div className="h-[126px] top-0 left-0 bg-[#f2f2f2] flex w-[666px] items-center justify-between p-4 absolute rounded-[10px]">
              <div className="relative w-[550px] h-[93.33px]">
                <p className="absolute top-0 left-0 [font-family:'Nunito_Sans-Medium',Helvetica] font-semibold text-[222222] text-base tracking-[0] leading-[normal]">
                  What are Smart QR Codes for reviews?
                </p>

                <p className="absolute w-[550px] top-8 left-0 [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-[#4c4c4c] text-sm tracking-[0] leading-[normal]">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci velit, sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem.
                </p>
              </div>



            </div>

            <div className="flex w-[666px] h-[126px] items-center justify-between p-4 absolute top-0 left-0 bg-[#ffffff] rounded-[10px] shadow-[0px_6px_36px_#2823000d]">
              <div className="relative w-[550px] h-[93.33px]">
                <p className="absolute w-[400px] -top-px left-0 [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-black text-[22px] tracking-[0] leading-[normal]">
                  What are Smart QR Codes for reviews?
                </p>

                <p className="absolute w-[539px] top-[60px] left-0 [font-family:'Nunito_Sans-Regular',Helvetica] font-normal text-body-text text-base tracking-[0] leading-[normal]">
                  Smart QR Codes for reviews are customized QR codes that redirect
                  customers to review platforms or feedback forms, streamlining
                  the process to collect insights and improve ratings.
                </p>
              </div>

              <div className="relative w-6 h-6 bg-[url(/remove-square-stroke-rounded.svg)] bg-[100%_100%]" />
            </div>
          </div>

          <div className="flex w-[666px] h-[57px] items-center justify-between p-4 absolute top-[150px] left-[534px] bg-light-gray rounded-[10px]">
            <p className="relative w-fit mt-[-3.50px] mb-[-1.50px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-black text-[22px] tracking-[0] leading-[normal]">
              Can you review the QR code and provide feedback?
            </p>

            <div className="relative w-6 h-6 bg-[url(/add-square-stroke-rounded-3.svg)] bg-[100%_100%]" />
          </div>

          <div className="h-14 top-[232px] left-[534px] bg-light-gray flex w-[666px] items-center justify-between p-4 absolute rounded-[10px]">
            <p className="relative w-fit mt-[-4.02px] mb-[-2.02px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-black text-[22px] tracking-[0] leading-[normal]">
              Are Smart QR Codes customizable for branding?
            </p>

            <div className="mt-[-0.02px] mb-[-0.02px] relative w-6 h-6 bg-[url(/add-square-stroke-rounded.svg)] bg-[100%_100%]" />
          </div>

          <div className="h-[53px] top-[313px] left-[534px] bg-light-gray flex w-[666px] items-center justify-between p-4 absolute rounded-[10px]">
            <p className="relative w-fit mt-[-5.21px] mb-[-3.83px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-black text-[22px] tracking-[0] leading-[normal]">
              Can QR Codes integrate with review platforms?
            </p>

            <div className="mt-[-1.52px] mb-[-1.52px] relative w-6 h-6 bg-[url(/image.svg)] bg-[100%_100%]" />
          </div>

          <div className="h-14 top-[391px] left-[534px] bg-light-gray flex w-[666px] items-center justify-between p-4 absolute rounded-[10px]">
            <p className="relative w-fit mt-[-4.02px] mb-[-2.02px] [font-family:'Nunito_Sans-SemiBold',Helvetica] font-semibold text-black text-[22px] tracking-[0] leading-[normal]">
              Are Smart QR Codes mobile-friendly tools?
            </p>

            <div className="mt-[-0.02px] mb-[-0.02px] relative w-6 h-6 bg-[url(/add-square-stroke-rounded-2.svg)] bg-[100%_100%]" />
          </div>
        </div>
      </div>
    </div>
  );
};
