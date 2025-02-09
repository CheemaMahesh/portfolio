import { projectsList } from "../Utils/constant";
import linkicon from '../assets/link.png';

const Projects = () => {
    return (
        <div className="projects flex flex-col w-full h-[2700px] max-[900px]:h-fit bg-[#000] px-8 text-[#ffffff] px-10 py-5 gap-5">
            <p className="text-4xl font-bold">Projects</p>
                {
                    projectsList.map((item, index) => (
                        <div key={index} className="projects_container flex justify-around w-[90%] h-fit mx-auto rounded-md gap-4 p-2 border-[1px] border-[#808080] border-solid shadow-[0_0_10px_#808080] max-[900px]:flex-col max-[900px]:w-full">
                        {(index + 1) % 2 !== 0 && <img className="w-[460px] h-[480px] rounded-md" src={item?.imgsrc} />}
                        <div className="project_details flex flex-col h-[480px] max-[900px]:h-full max-[900px]:w-full p-2 gap-6">
                            <div className="flex gap-2 items-center">
                            <p className="text-2xl font-bold monospace">{item?.title}</p>
                            {item?.link && <a className="cursor-pointer underline" href={item?.link} target="_blank">
                                <img src={linkicon} className="w-6 h-6" />
                                </a>}
                            </div>
                            <p>
                                {item?.description}
                            </p>
                            <div className="skills_container flex w-full gap-4 items-center flex-wrap max-[900px]:fit max-[900px]:w-full max-[900px]:gap-2">
                                {
                                    item?.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="flex p-1 items-center gap-2 border-[1px] border-[#808080] border-solid rounded-md w-fit">
                                        <img className="w-4 h-4" src={skill?.imgsrc} />
                                        <p>{skill?.skill}</p>
                                </div>
                                    ))
                                }
                            </div>
                        </div>
                        {(index + 1) % 2 === 0 && <img className="w-[460px] h-[480px] rounded-md" src={item?.imgsrc} />}
                </div>
                    ))
                }
        </div>
    )
};

export default Projects;