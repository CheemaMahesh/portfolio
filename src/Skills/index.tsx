import { skillList } from "../Utils/constant";
const Skills = () => {
    return (
        <div className="skills flex flex-col w-full h-[700px] bg-[#000] px-8 text-[#ffffff] p-10 gap-5">
            <p className="text-4xl font-bold p-4">Skills</p>
            <div className="px-4 flex items-cener gap-24 flex-wrap">
                {skillList.map((item, index) => (
                                    <div key={index} className="w-[100px] h-[100px] flex flex-col items-center gap-2 cursor-pointer hover:bg-[#2c3437] p-2 rounded-lg">
                                    <img className="w-12 h-12" src={item?.imgsrc} />
                                    <p className="text-lg font-bold">{item?.skill}</p>
                                </div>
                ))}
            </div>
        </div>
    )
};

export default Skills;