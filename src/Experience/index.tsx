import { fulltimeWorkList } from "../Utils/constant";
import company from '../assets/antwalk_logo.jpg';

const Experience = () => {
    return (
        <div className="experience flex flex-col w-full h-fit bg-[#000] px-8 text-[#ffffff] p-10 gap-5">
                        <p className="text-4xl font-bold p-4">Experience</p>
           <div className="experience_internship px-4 flex flex-col gap-3">
                <div className="company_section flex items-center gap-4 pt-1">
                    <img className="w-24 h-fit rounded-full" src={company} />
                    <p className="text-2xl font-bold text-[#028A0F]">Antwalk Pvt. Ltd.</p>
                </div>
                <div className="role_details">
                    <p className="font-bold text-2xl">Associate Software Engineer (Jan 2024 - Present)</p>
                    <ul className="italics font-semibold">
                        {fulltimeWorkList?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
           </div>
           {/* <div>

           </div> */}
        </div>
    )
};

export default Experience;