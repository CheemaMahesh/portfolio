import { useState } from "react";
import { NavList } from "../Utils/constant";

const Nav = () => {
    const [current, setCurrent] = useState<number | null>(null);
    return (
        <div className="w-[100vw] h-[70px] bg-[#000] flex shadow-lg border-bottom-[1px] border-[#808080] border-solid justify-between px-2">
            <div className="w-6/12 flex gap-[2px] items-center text-[#fff] font-semibold">
                {NavList.map((item, index) => (
                    <div className={current === index ? "bg-[#808080] cursor-pointer py-2 px-4 rounded-md" : "bg-[#000] py-2 px-4 cursor-pointer"} onMouseEnter={() => setCurrent(index)} onMouseLeave={() => setCurrent(null)} key={index}>{item}</div>
                ))}
            </div>
            <div className="flex gap-4 items-center">
                <input
                    placeholder="
    Start Typing......."
                    className="w-[250px] h-9 p-2 cursor-pointer rounded-[3px] outline-none"
                    type="text"
                    style={{ background: 'radial-gradient(circle, #C0C0C0, #808080)' }}
                />                    {/* TODO: Add light mode icon */}
                <img className="w-9 h-9 p-1  rounded-full cursor-pointer hover:bg-gray-300" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHy1kulKGFspFD5skFeQ_G9RzsJZ4pmAEmnQ&s" alt="Light Mode Icon" />
                <a href="https://github.com/CheemaMahesh" target="_blank">
                    <img className="w-8 h-8 p-1 rounded-full cursor-pointer hover:bg-gray-300" src="src\assets\gitIcon.webp" alt="git icon" />
                </a>
                <a href="https://www.linkedin.com/in/mahesh-cheema-a7b771271/" target="_blank">
                    <img className="w-8 h-8 p-1 rounded-full cursor-pointer hover:bg-gray-300" src="src\assets\linked-in.webp" alt="Linkedin icon" />
                </a>
            </div>
        </div>
    );
};

export default Nav;