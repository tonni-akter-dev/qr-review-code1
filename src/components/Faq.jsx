import { useState } from "react";
import FAQ from "../assets/FAQ.png";
import { faqData } from "../utils/data";
import { AddSquareIcon, RemoveSquareIcon } from "hugeicons-react";

export const Faq = () => {

  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };


  return (
    <div className="lg:my-[100px] my-20 max-w-[1400px] lg:px-[120px] px-5 mx-auto">
      <h2 className="text-[#222]  lg:text-[46px] text-2xl font-extrabold leading-normal text-center mb-4">Frequently Asked Question</h2>
      <p className="text-[#A0A0A0] mb-[56px] lg:text-lg text-sm  text-center">A Frequently Asked Questions (FAQ) section provides quick answers to common inquiries,<br className="lg:flex hidden" /> helping users save time and find relevant information efficiently.</p>
      <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-2 ">
        <div className=" ">
          <div className="  py-10 shadow_custom flex flex-col items-center ">
            <img
              src={FAQ}
              alt="Confused Person"
              className="w-[232px] h-[190px] mb-6"
            />

            <h2 className="text-[22px] font-extrabold text-center text-[#222] mb-1">
              You have different questions?
            </h2>
            <p className="text-[#A0A0A0]  lg:text-lg text-sm text-center mb-8">
              Our team will answer all your questions. <br /> We ensure a quick response.
            </p>

            <button className="normal_btn text-[#222] font-bold py-3.5 lg:px-[70px] px-[47px] rounded-full">
              Get Started Now
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div  onClick={() => toggleQuestion(faq.question)} key={index} className={`shadow_custom flex justify-between items-center  rounded-[10px] p-4 cursor-pointer  ${openQuestion === faq.question ? "" : 'bg-[#F4F4F4]'}`}>
              <div>
                <div
                  className={`cursor-pointer flex justify-between w-full   items-center`}
                 
                >
                  <h3 className={`lg:text-[22px] text-sm  ${openQuestion===faq.question ? 'lg:mb-0 mb-3' : ''} lg:font-semibold font-medium `}>{faq.question}</h3>
                </div>

                {openQuestion === faq.question && (
                  <div className="text-[#A0A0A0] lg:text-base text-xs">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
              <div>
                {openQuestion === faq.question ? (
                  <RemoveSquareIcon size={24} color={"#FFDF00"} variant={"stroke"} />
                ) : (
                  <AddSquareIcon size={24} color={"#000000"} variant={"stroke"} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
