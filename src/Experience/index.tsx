import { internshipWorkList, fulltimeWorkList } from "../Utils/constant";
import company from '../assets/antwalk_logo.jpg';

const Experience = () => {
    return (
        <div className="experience flex flex-col w-full h-[700px] max-[900px]:h-[1800px] bg-[#000] px-8 text-[#ffffff] p-10 gap-5">
                        <p className="text-4xl font-bold p-4">Experience</p>
           <div className="experience_internship px-4 flex flex-col gap-5">
                <div className="company_section flex items-center gap-4 pt-4">
                    <img className="w-24 h-24 rounded-full" src={company} />
                    <p className="text-2xl font-bold text-[#028A0F]">Antwalk Pvt. Ltd.</p>
                </div>
                <div className="role_details">
                    <p className="font-bold text-2xl">Front End - Internship (Jan 2024 - July 2024)</p>
                    <ul className="italics font-semibold">
                        {internshipWorkList?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
           </div>
           <div>
           <div className="role_details px-4">
                    <p className="font-bold text-2xl">Associate Software Engineer (July 2024 - Present)</p>
                    <ul className="italics font-semibold">
                        {fulltimeWorkList?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
           </div>
        </div>
    )
};

export default Experience;