import bhb01 from "../assets/BHB01.png";
import bhb02 from "../assets/BHB02.png";
import bhb03 from "../assets/BHB03.png";

export const Frame = () => {
  return (
    <div className='max-w-[1400px] px-[120px] py-[25px] mx-auto'>
    <div className="flex flex-col w-[1200px] items-center gap-14 relative">
      {/* Title and Description */}
      <div className="w-[764px] gap-4 flex flex-col items-center">
        <h2 className="text-black text-center text-[46px] font-bold leading-tight">
          Benefits for Hospitality Businesses
        </h2>

        <p className="w-[730px] text-center text-lg text-body-text leading-relaxed">
          Enhance guest satisfaction, increase positive reviews, build trust,
          boost visibility, and drive bookings with tailored solutions for
          hospitality businesses.
        </p>
      </div>

      {/* Benefits Cards */}
      <div className="flex gap-10">
        {/* Card 1 - Retarget */}
        <div className="flex flex-col items-center w-[328px] gap-6">
          <img className="w-[328px] h-[216px]" alt="Retarget" src={bhb01} />
          <div className="text-center">
            <h3 className="text-black text-2xl font-bold">Increase Reviews</h3>
            <p className="text-body-text text-lg">
             
              Encourage guests to leave positive reviews.
            </p>
          </div>
        </div>

        {/* Card 2 - Increase Reviews */}
        <div className="flex flex-col items-center w-[328px] gap-6">
          <img className="w-[328px] h-[216px]" alt="Increase Reviews" src={bhb02} />
          <div className="text-center">
            <h3 className="text-black text-2xl font-bold">Collect User Data</h3>
            <p className="text-body-text text-lg">
            
            Gather valuable customer information.
            </p>
          </div>
        </div>

        {/* Card 3 - Collect User Data */}
        <div className="flex flex-col items-center w-[328px] gap-6">
          <img className="w-[328px] h-[216px]" alt="Collect User Data" src={bhb03} />
          <div className="text-center">
            <h3 className="text-black text-2xl font-bold">Retarget</h3>
            <p className="text-body-text text-lg">
            Reach out to customers during off-peak times to boost business.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
