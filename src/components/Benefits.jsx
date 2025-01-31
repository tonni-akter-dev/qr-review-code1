import { benefitsData } from "../utils/data"

const Benefits = () => {
    return (
        <div className='lg:my-[100px] my-20 max-w-[1400px] lg:px-[120px] px-5 mx-auto'>
            <div>
                    <h2 className="text-[#222]  lg:text-[46px] text-2xl font-extrabold leading-normal text-center mb-4">Benefits for Hospitality Businesses</h2>
                    <p className="text-[#A0A0A0] mb-[56px] lg:text-lg text-sm  text-center">Enhance guest satisfaction, increase positive reviews, build trust, boost visibility, and drive <br /> bookings with tailored solutions for hospitality businesses</p>
                <div className="grid lg:grid-cols-3 gap-6 grid-cols-1">
                    {benefitsData.map((item, index) => (
                        <div key={index} className=" rounded-[20px] text-center  pb-10" style={{ boxShadow: "0px 6px 36px 0px rgba(40, 35, 0, 0.05)" }} >
                            <img src={item.image} alt={item.title} />
                            <div className="px-11">
                                <h3 className="text-2xl font-bold text-[#222] my-6">{item.title}</h3>
                                <p className="text-[#A0A0A0] lg:text-lg text-base" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Benefits