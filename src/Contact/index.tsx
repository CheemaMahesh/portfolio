import { Bounce, toast } from "react-toastify";

const Contact = () => {
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
    return(
        <div className="contact flex flex-col justify-center items-center gap-5 w-full h-[450px] bg-[#000] px-8 text-[#ffffff] p-10 gap-5">
            <p className="text-4xl font-bold p-4">Contact me</p>
            <p className="text-6xl font-bold p-4">
            Keep In Touch.
            </p>
            <div className="flex gap-4 max-[900px]:flex-col max-[900px]:w-full max-[900px]:h-[1200px]">
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
                <br/>
                <a href="https://github.com/CheemaMahesh" target="_blank">
                <div className="share_labels hover:bg-[#2c3437]">
                    <img className="w-6 h-6" src="src\assets\github.png" alt="" />
                    <p>Github</p>
                </div>
                </a>
                <a href="https://x.com/mahesh_k1001" target="_blank">
                <div className="share_labels hover:bg-[#2c3437]">
                    <img className="w-6 h-6" src="src\assets\x_2.webp" alt="" />
                    <p>X.Com</p>
                </div>
                </a>
                <a href="https://www.naukri.com/mnjuser/homepage" target="_blank">
                <div className="share_labels hover:bg-[#2c3437]">
                    <img className="w-12 h-6" src="src\assets\naukri.svg" alt="" />
                </div>
                </a>
            </div>
        </div>
    )
};

export default Contact;