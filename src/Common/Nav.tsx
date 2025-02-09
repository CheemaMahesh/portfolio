import { useState } from "react";
import { NavList } from "../Utils/constant";
import github from '../assets/github.png';
import linkedin from '../assets/icons8-linkedin-48.png';

type Props = {
    currentOption?: string;
     // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
     setcurrentOption?: Function;
}

const Nav: React.FC<Props> = ({ setcurrentOption}) => {
    const [current, setCurrent] = useState<number | null>(null);
    return (
        <div className="sticky top-0 w-full h-[70px] bg-[#000] flex shadow-lg border-b-[1px] border-[#808080] border-solid justify-between px-2">
<div className="w-6/12 flex gap-[10px] items-center text-[#fff] font-semibold pl-4 max-[900px]:hidden max-[900px]:w-[5px]">
    {NavList.map((item, index) => (
        <div className={current === index ? "bg-[#2c3437] cursor-pointer py-1 px-3 rounded-md max-[900px]:hidden" : "bg-[#000] py-1 px-3 cursor-pointer max-[900px]:hidden"} onClick={() => setcurrentOption && setcurrentOption(item)} onMouseEnter={() => setCurrent(index)} onMouseLeave={() => setCurrent(null)} key={index}>
            {item}
        </div>
    ))}
</div>

            <div className="w-full gap-[10px] items-center text-[#fff] font-semibold pl-0 justify-center max-[900px]:gap-1 hidden max-[900px]:flex">
    {NavList.map((item, index) => (
        <div className={current === index ? "bg-[#2c3437] cursor-pointer py-1 px-3 rounded-md" : "bg-[#000] py-1 px-3 cursor-pointer"} onClick={() => setcurrentOption && setcurrentOption(item)} onMouseEnter={() => setCurrent(index)} onMouseLeave={() => setCurrent(null)} key={index}>
            {item?.slice(0, 3)?.toUpperCase()}
        </div>
    ))}
</div>

            <div className="flex gap-4 items-center">
                <input
                    placeholder="
    Start Typing......."
                    className="w-[250px] h-9 p-2 cursor-pointer rounded-[3px] outline-none max-[900px]:hidden"
                    type="text"
                    style={{ background: 'radial-gradient(circle, #C0C0C0, #2c3437)' }}
                />                    {/* TODO: Add light mode icon */}
                <img className="w-9 h-9 p-1  rounded-full cursor-pointer hover:bg-[#2c3437] max-[900px]:hidden" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHy1kulKGFspFD5skFeQ_G9RzsJZ4pmAEmnQ&s" alt="Light Mode Icon" />
                <a href="https://github.com/CheemaMahesh" target="_blank" className="max-[900px]:hidden">
                    <img className="w-8 h-8 p-1 rounded-full cursor-pointer hover:bg-[#2c3437]" src={github} alt="git icon" />
                </a>
                <a href="https://www.linkedin.com/in/mahesh-cheema-a7b771271/" target="_blank" className="max-[900px]:hidden">
                    <img className="w-8 h-8 p-1 rounded-full cursor-pointer hover:bg-[#2c3437]" src={linkedin} alt="Linkedin icon" />
                </a>
            </div>
        </div>
    );
};

export default Nav;