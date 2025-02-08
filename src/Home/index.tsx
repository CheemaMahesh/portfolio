import { useEffect, useState } from "react";
import { mySelftList } from "../Utils/constant";
import { Bounce, toast } from 'react-toastify';

const Home = () => {
    const [currentOne, setCurrentOne] = useState<string>('');
    const getCurrentOne = () => {
            setInterval(() => {
                const newOne = mySelftList[Math.floor(Math.random() * mySelftList.length)]; 
                setCurrentOne(newOne); 
            }, 1400);
    }
    const copyToClipboard = (type: string) => {
        if(type === 'Email'){
            navigator.clipboard.writeText('maheshc2002k@gmail.com');
        }else{
            navigator.clipboard.writeText('7095948442');
        }
        toast.success(`${type} Copied to clipboard `, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
    }
    useEffect(() => {
        getCurrentOne();
    }, []);
    return <div className="homepage flex w-full h-[500px] max-[900px]:h-[1000px] bg-[#000] max-[900px]:flex-col justify-around" >
        <div className="left_col w-8/12 max-[900px]:w-full p-10 flex flex-col gap-8 max-[900px]:pb-4">
            <div className="w-[320px] h-[35px] bg-[#2c3437] rounded-[20px] border-[1px] border-[#028A0F] border-solid flex items-center gap-3">
                    <div className="ml-[2px] px-3 py-[1px] bg-[#028A0F] rounded-[20px]">
                        <p className="text-white font-semibold">Welcome</p>
                    </div>
                    <p className="text-[#028A0F] font-semibold">to my portfolio website {'-->'}</p>
            </div>
            <div className="flex gap-4 items-center max-[900px]:flex-col max-[900px]:items-start">
                        <p className="text-4xl text-white font-semibold max-[900px]:text-3xl">Hey folks, I'm</p>
                        <p className="text-5xl text-[#028A0F] font-bold max-[900px]:text-4xl">{currentOne}</p>
            </div>
            <p className="text-white italic text-lg">Building a successful product is a challenge. I bring expertise in user interfaces and web development</p>
            <a href="https://drive.google.com/file/d/1f1i7qlBsUgJoFrtgxsbjqssse8ddz-ZA/view?usp=sharing" target="_blank">
            <div className="w-[320px] h-[43px] rounded-md border-[1px] border-[#172c13] border-solid flex items-center justify-center cursor-pointer hover:bg-[#2c3437] bg-[#070d06]">
                <p className="text-white font-bold">Download My Resume</p>
                <img src="src\assets\icons8-download-24.png" className="w-6 h-6 p-1" />
            </div>
            </a>
            <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/mahesh-cheema-a7b771271/" target="_blank">
                <div className="share_labels hover:bg-[#2c3437]">
                    <img className="w-6 h-6" src="src\assets\icons8-linkedin-48.png" alt="" />
                    <p>Linkedin</p>
                </div>
                </a>
                <div className="share_labels hover:bg-[#2c3437]" onClick={() => copyToClipboard('Email')}>
                    <img className="w-6 h-6" src="src\assets\icons8-email-100 (1).png" alt="" />
                    <p>Email</p>
                </div>
                <div className="share_labels hover:bg-[#2c3437]" onClick={() => copyToClipboard('Phone Number')}>
                    <img className="w-6 h-6" src="src\assets\icons8-phone-50.png" alt="" />
                    <p>Phone</p>
                </div>
            </div>
        </div>
        {/* ------------------------------------------------------------ */}
        <div className="left_col w-4/12 max-[900px]:w-full p-10 flex flex-col gap-6">
        <img src="src\assets\imagev2.gif" className="w-[320px] h-[320px]" />
            </div>
    </div>;
};

export default Home;